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
const url = 'https://www.sarasoueidan.com/blog/svg-coordinate-systems/'

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
    const urls = [url];
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
                    $article = $('.article')
                    const removeCont = () => {
                        
                    }
                    const modifyCont = () => {
                       
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
})()