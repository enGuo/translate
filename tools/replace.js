const fs = require('fs')
const path = require('path');
const dir = '/en'
const filePath = path.resolve(__dirname + dir);

fs.readdir(filePath, 'utf8', function (err, data) {

    data.forEach(function (item, index) {
        const path = `${filePath}/${item}`
        fs.readFile(path, 'utf8', function (err, files) {
            const result = files.replace(/\/images\//g, '/images/html-css/', );
            console.log('修改成功!');
            fs.writeFile(path, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });

        })
    });

});