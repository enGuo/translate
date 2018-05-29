const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');
const url = 'https://internetingishard.com/html-and-css/';

const dir = './tools/images'
fs.exists(dir, function (exists) {
  if (exists) {
    deleteall(dir)
    fs.mkdir(dir)
  } else {
    fs.mkdir(dir)
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

function getUrl(url, callback) {
  https
    .get(url, function (res) {
      let data = '';
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

function download(link, callback) {
  https
    .get(link, function (res) {
      let data = '';
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
    var $ = cheerio.load(data);
    var links = [];

    // 根据网站结构找出链接
    $('.chapter__icon-link').each(function (i, elem) {
      links.push('https://internetingishard.com/' + $(elem).attr('href'));
    });


    links = Array.from(new Set(links));
    links.forEach(link => {
      download(link, function (data) {
        if (data) {
          const $ = cheerio.load(data);
          $('img').each(function (i, elem) {
            const imgSrc = $(this).attr('src');
            https.get('https://internetingishard.com/' + imgSrc, function (res) {
              let imgData = '';
              const imgSrcFormat = imgSrc.split('/').pop();
              res.setEncoding('binary');
              res.on('data', function (chunk) {
                imgData += chunk;
              });

              res.on('end', function () {
                var imgPath = '/' + imgSrcFormat;
                fs.writeFile(
                  __dirname + '/images' + imgPath,
                  imgData,
                  'binary',
                  function (err) {
                    console.log(err);
                  }
                );
              });
            });
          });
        }
      });
    });
  }
});