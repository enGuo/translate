const fs = require('fs');
const TurndownService = require('turndown');
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
  headingStyle: 'atx'
});
const cheerio = require('cheerio');

const readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/html/${fileName}.html`,
      { flag: 'r+', encoding: 'utf8' },
      (error, data) => {
        if (error) reject(error);
        resolve(data);
      }
    );
  });
};

const writeFile = (fileName, wData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${__dirname}/md/${fileName}.md`,
      wData,
      error => {
        if (error) reject(error);
        resolve();
        console.log(`${fileName}写入成功!`);
      }
    );
  });
};

(async () => {
  const fileName = 'test';
  const data = await readFile(fileName);
  const $ = cheerio.load(data, {
    decodeEntities: true
  });
  $article = $('article');
  const removeCont = () => {
    $article.find('.prevnext').remove();
    $article.find('script').remove();
  };
  const modifyCont = () => {
    $('pre').each(function(item) {
      const html = $(item).html();
      const newHtml = `<code class="language-html">${html}</code>`;
      $(item).html(newHtml);
    });
  };
  removeCont();
  modifyCont();

  const cont = $article.html();
  const markdown = turndownService.turndown(cont);
  writeFile(fileName, markdown);
})();
