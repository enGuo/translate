const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');
const url = 'http://www.sarasoueidan.com/blog/nesting-svgs/';

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


function download(url, callback) {
  http
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

download(url, function (data) {
  if (data) {
    const $ = cheerio.load(data);
    $('img').each(function (i, elem) {
      const imgSrc = $(this).attr('src');
      if (!imgSrc.includes('http')) {
        return
      }
      http.get(imgSrc, function (res) {
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