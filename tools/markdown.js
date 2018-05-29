const fs = require('fs')
const request = require('request')
const async = require('async')
const https = require('https');
const TurndownService = require('turndown')
const turndownService = new TurndownService({
    codeBlockStyle: 'fenced',
    headingStyle: 'atx'
})
const cheerio = require('cheerio')
const basePath = './tools/docs/'
const url = 'https://internetingishard.com/html-and-css/'

fs.exists(basePath, function (exists) {
    if (exists) {
        deleteall(basePath)
        fs.mkdir(basePath)
    } else {
        fs.mkdir(basePath)
    }
});

function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse  
                deleteall(curPath);
            } else { // delete file  
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

(async () => {
    function getUrl(url, callback) {
        https
            .get(url, function (res) {
                var data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    callback(data);
                });
            })
            .on('error', function (err) {
                console.log(err);
            });
    }
    getUrl(url, function (data) {
        if (data) {
            const $ = cheerio.load(data);
            let urls = [];

            // 根据网站结构获取链接数组
            $('.chapter__icon-link').each(function (i, elem) {
                urls.push('https://internetingishard.com/' + $(elem).attr('href'));
            });

            urls = Array.from(new Set(urls));
            async.mapLimit(
                urls,
                100,
                function (url, callback) {
                    request(url, function (error, response, body) {
                        if (!error && response.statusCode === 200) {
                            console.log('url:', url, '请求成功')

                            const $ = cheerio.load(body, {
                                decodeEntities: true
                            })
                            $article = $('.page')
                            const removeCont = () => {
                                $article.find('noscript').remove()
                                $article.find('script').remove()
                                $article.find('footer').remove()
                                $article.find('header').remove()
                                $article.find('.chapter-sidebar').remove()
                                $article.find('.next-chapter').remove()
                            }
                            const modifyCont = () => {
                                $article.find('img').each(function (i, n) {
                                    let imgSrc = '/images/' + $(n).attr('src').split('/').pop()
                                    $(n).attr('src', imgSrc)
                                })
                                $article.find('a').each(function (i, n) {
                                    let link = 'https://internetingishard.com/' + $(n).attr('href')
                                    $(n).attr('href', link)
                                })
                                $article.find('code').each(function (i, n) {
                                    $(n).addClass('language-html')
                                })
                            }
                            const generate = () => {
                                const cont = $article.html()
                                const markdown = turndownService.turndown(cont)

                                let fileName = ''
                                const arr = url.split('/');
                                fileName = basePath + arr[arr.length - 2] + '.md'
                                fs.writeFile(fileName, markdown, err => {
                                    if (err) throw err
                                })
                            }

                            removeCont()
                            modifyCont()
                            generate()

                        }
                    })
                },
                function (err, result) {
                    if (err) {
                        console.error(err)
                    }
                    console.log('final:', result)
                }
            )
        }
    })

})()