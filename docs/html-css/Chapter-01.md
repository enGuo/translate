---
layout: SpecialLayout
---

# 介绍

学习 HTML 、 CSS 很难，但接下来的 14 个章节将带领你选择一个好的编辑器 ( 很重要 ) 快速打造一个成熟、高性能的网页。

![Diagram: a person creating web pages](/images/html-css/becoming-a-web-developer-0530f1.png)

如果你认真读完每个章节，敲完每个代码片段，那么 [_HTML & CSS Is Hard_](/html-css/) 将是你了解 HTML、CSS 唯一需要的，它比市面上很多在线教程和练习都实用。

我们的目标是尽可能让初学者更容易成为专业的前端，如果你从来没有写过一行 HTML、CSS 代码，但你崇尚网页开发，来吧，开启你的学习之旅!

## HTML, CSS, & JavaScript
HyperText Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript 是网页开发语言。它们有着紧密的联系，在网页中有各自的角色。理解它们有助于你成为一个更好的前端。

* HTML 给网页添加结构内容
* CSS 给网页添加样式
* JavaScript 给网页添加交互行为

::: tip
可以想象 HTML 就是网页上的 文本或图片，css 用于排版，JavaScript 给网页添加行为，可操作 css 和 HTML
:::

![Diagram: HTML as a tree of nodes, CSS as a rendered web page, JavaScript as an interactive web page with fancy behaviors](/images/html-css/html-css-javascript-905348.png)

例如，你可以用下面的代码表示一个段落

```html
<p id='some-paragraph'>This is a paragraph.</p>
```

接着，你可以用 css 给段落添加字体大小和颜色

```css
p {
  font-size: 20px;
  color: blue;
}
```

最后，你可以用 js 让用户点击段落后修改段落的内容

```js
var p = document.getElementById('some-paragraph');
p.addEventListener('click', function(event) {
  p.innerHTML = 'You clicked it!';
});
```

正如你所见, HTML, CSS, and JavaScript 是不同的语言, 但它们用一些方式形成联系。 大多数网站都是用三者来完成, 但多数网页的外观仅用 HTML 和 css 就可以完成， 接下来的教程将开启这方面的开发之旅。

## 网页开发相关

要想成为一个专业web开发者，还需具备以下技能

* 编写可复用的 html
* 了解服务端
* 上传文件到服务器
* 了解版本管理工具
* 域名相关

安装各种环境，管理你的文件，打包发布到你的网站。这个系列教程专注于讲解 HTML 和 css而非环境搭建

![Diagram: HTML, CSS, and JavaScript pointing to web development (build tools, domain name, web server), turning into a website](/images/html-css/languages-vs-web-dev-b849db.png)

别急，学好 HTML 和 css 是成为 web 开发者很重要的一步。学完本教程后你就可以自己搭建一个网站。

## 网站“出版”

那什么是 HTML、css 呢？让我们来回顾一下印刷行业。从创建文档到用墨水打印到纸上。

开发也如此，编写 html、css，选择字体，大小，行间距等。

![Diagram: metal type turning into HTML and CSS, printed page turning into web page, book turning into website](/images/html-css/web-publishing-cd96b2.png)

印刷者把文字打印到书中，我们把 html 文件关联到网页中。学习 HTML 和 css 重要的一条是理解他们是如何在浏览器中工作的。

## 基本原理

web常用的框架 ([Bootstrap](https://internetingishard.com/http://getbootstrap.com/), [ZURB foundation](https://internetingishard.com/http://foundation.zurb.com/), 和 [Pure CSS](https://internetingishard.com/http://purecss.io/)).他们的目的是创建优质网页，这些框架也是网页开发的重要组成部分，学完 [_HTML & CSS Is Hard_](/html-css/)，后你就能感受他们的魅力。

这系列教程讲的是 HTML、css 的基本原理。持续更新HTML、css 的标准，最新框架。有它，让你的开发更快。

## 手把手教

[_Interneting Is Hard_](https://internetingishard.com/) 手把手教，各种 demo 同步实践。

 如果你真的想成为一个合格的 web 开发，请把每个章节的 demo 都自己实现一遍。

最好的学习方式，就是多敲代码

## 工具

编辑器和浏览器是开发网页必备的

![Diagram: text editor (code here) versus web browser (view here)](/images/html-css/tools-of-the-trade-649a9a.png)

好的编辑器是成功的一半，浏览器推荐使用[Chrome](https://internetingishard.com/https://www.google.com/chrome/browser/desktop/) and [Firefox](https://internetingishard.com/https://www.mozilla.org/en-US/firefox/new/) OS X下，可以用  Safari ，强烈建议 不要用 IE。浏览器兼容性也很重要。

## Atom Text Editor

推荐 [Atom](https://internetingishard.com/https://atom.io/) 

 [download it now](https://internetingishard.com/https://atom.io/)接下来我们都用它来开发。

![Screenshot: the welcome screen of the Atom text editor](/images/html-css/atom-welcome-screen-a59275.png)

## 新建项目

点击 **File > Open** 按钮打开文件对话框, 选择 **New Folder** 新节目录. 命名为 `hello-atom`, 如何点击 **Open**.

![Screenshot: file browser in the left sidebar of the Atom text editor interface, editor area on the right](/images/html-css/file-browser-051ac0.png)

## 新建文件

在 **untitled** 随便添加内容,  **Cmd+S** (Mac) or **Ctrl+S** (Windows, Linux) 保存，命名为 `page-one.html`，然后就可以用浏览器打开了

按 **Cmd+N** (Mac) or **Ctrl+N** (Windows, Linux). 可以新建 **untitled** 标签页. 

## 文件系统

编辑器另一个重要的概念是项目文件管理，Atom 侧边栏用于管理文件。**Ctrl+Tab** 用于切换打开的标签页.

![Screenshot: Atom’s file browser after creating a few HTML files](/images/html-css/creating-html-files-7489ae.png)

搜索可以帮你快速打开想要的文件

![Screenshot: results in Atom’s fuzzy search bar](/images/html-css/atom-command-t-2fbe5e.png)

## 窗口分隔

Atom 允许分隔窗口，只需右键 **Split Right**.

![Screenshot: two side-by-side panes in the Atom text editor](/images/html-css/atom-split-panes-515aba.png)

多窗口在同时编写 HTML、css 时特别有用。

## 其他

选中文件右键选择 **Show in Finder/Explorer/Some Other File Browser** 打开系统文件管理.

选择 **Open With > Chrome/Firefox/Safari**. 可以用默认浏览器打开文件。

![Diagram: Editing in a text editor, looking at changes in a web browser](/images/html-css/web-dev-workflow-1faddb.png)

现在你可以编辑 `page-one.html` 保存，用 **Cmd+R** (Mac) or **Ctrl+R** (Windows, Linux)刷新界面。

## 总结

恭喜你大致了解了 HTML 和 css，接下来用 Atom 开始编码吧！