---
layout: SpecialLayout
---

# 网页基础

HTML 标签是网页的构成元素，创建HTML 文档是开发网页的第一步。


![Diagram: raw content turning into HTML markup turning into a web page](/images/html-markup-0761f7.png)

在这一章，我们将开发第一个网页。没有 css 可能看起来会比较丑。网页开发者每天都跟 html 元素打交道。

尽量让每个网页都得遵循规范，即便他们有着相似的内容（头部，段落，列表等）

## 安装

让我们用 atom 开始创建一个新项目`basic-web-pages`。接着新建一个`basics.html` 文件。这个 HTML 文件包含了网页所有代码。如果你还没安装 atom 可以看下[Introduction](./Chapter-01.md) 

![Diagram: editing HTML code in a text editor and viewing changes in a web browser](/images/web-dev-workflow-1faddb.png)

网页开发的基本流程是在编辑器中敲代码，在浏览器中查看变化。这些就是你在这章节接下来经常要做的事。

## 网页构成

添加代码到`basics.html`文件，接下来每个网页都有类似的结构。你可以用模板来复用一些代码，但现在我们先专注网页的内容。

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata goes here -->
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

首先我们用`<!DOCTYPE html>`告诉浏览器这个界面是 HTML5。

网页用`<html>`标签包裹着，`<html>`叫作起始标签，`</html>`叫作结束标签。当网页完成解析后 `<html>` 里面的元素就会被创建。

![Diagram: an HTML element composed of an opening tag and a closing tag](/images/html-tags-elements-72813b.png)

在 `<html>` 元素里, 还有两个元素 `<head>` 、 `<body>`. 网页头部包含了网站所有的元数据。像标题，级联样式表，一些你不想让用户看到的信息，
`<body>`里面就是我们想要展示的内容。

![Diagram: web page split into <head> and <body> elements](/images/html-head-body-7c2a73.png)

 学完接下来的章节我们会对 `<head>`/`<body>` 有更深入的了解。

注释由 `<!--`开始 `-->`结束 ，网页将忽略这部分内容。所以我们可以用它来备注信息。

## 标题

标题是元数据中重要的一部分，用`<title>` 定义，在浏览器的标签页中显示，谷歌搜索引擎与之相关。

在 `basic.html` 文件添加 `<head>` 就像：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interneting Is Easy!</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

打开浏览器你会看到一个标签页上显示 **Interneting Is Easy!**的空网页

![Web page showing <title> element displayed in a browser tab](/images/html-title-element-f4eb85.png)

网页有它的嵌套规则，不可以在`</head>`结束后添加`</title>` 标签

```html
<!-- (Don't ever do this) -->
<head>
  <title>Interneting Is Easy!</head>
</title>
```

## 段落

段落使用`<p>`元素

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interneting Is Easy!</title>
  </head>
  <body>
    <p>First, we need to learn some basic HTML.</p>
  </body>
</html>
```

现在可以在浏览器中看到内容，记住是在`<body>` 元素内添加内容而不是`<head>`。

![Web page showing a <p> element with some content in it](/images/html-paragraph-element-842f23.png)

缩进有助于美化代码格式，便于开发。格式取决于你的团队，在 **Atom > Preferences > Editor** 中的 **Tab Type** 可以设置。

## 标头

标头用于在网页中展示，HTML 提供了6个等级的标头， `<h1>`, `<h2>`, `<h3>`, … , `<h6>`. 数字越高，权重越低。

 `<h1>` 内容一般跟 `<title>` 一样

```html
<body>
  <h1>Interneting Is Easy!</h1>
  <p>First, we need to learn some basic HTML.</p>
</body>
```

默认情况下，标头权重越高，字体越大。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interneting Is Easy!</title>
  </head>
  <body>
    <h1>Interneting Is Easy!</h1>
    <p>First, we need to learn some basic HTML.</p>

    <h2>Headings</h2>
    <p>Headings define the outline of your site. There are six levels of
    headings.</p>
  </body>
</html>
```

就像

![Web page showing a big <h1> element and a smaller <h2> element](/images/html-heading-elements-f7fe6a.png)

好的网站应该用标头合理展示不同层级的内容

## 无序列表

在浏览器中用 `<ul>` 表示无序列表 内容则用 `<li>`包裹， 如

```html
<h2>Lists</h2>

<p>This is how you make an unordered list:</p>

<ul>
  <li>Add a "ul" element (it stands for unordered list)</li>
  <li>Add each item in its own "li" element</li>
  <li>They don't need to be in any particular order</li>
</ul>
```

把内容添加到 `<body>` 元素中，浏览器展示：

![Web page showing a <ul> with <li> elements inside of it](/images/html-unordered-lists-f45526.png)

`<ul>` 元素中不能包裹其他内容， 应该在 `<li>` 元素中添加：

```html
<!-- (This is bad!) -->
<ul>
  <p>Add a "ul" element (it stands for unordered list)</p>
</ul>
```

应该在 `<li>` 内添加段落：

```html
<!-- (Do this instead) -->
<ul>
  <li><p>Add a "ul" element (it stands for unordered list)</p></li>
</ul>
```


我们怎么知道为什么 `<ul>` 只能嵌套 `<li>` 元素而 `<li>`可以嵌套段落，参考 [Mozilla Developer Network](https://internetingishard.com/https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) (MDN)  MDN 是一个比较好的 HTML 规范参考网站。 本教程会讲解一些基础元素，详情可以通过 **“MDN `<some-element>`”** 来查阅更具体的内容。

## 有序列表

如果列表有序号则应该使用 `<ol>`.在 `basics.html` 添加如下内容:

```html
<p>This is what an ordered list looks like:</p>

<ol>
  <li>Notice the new "ol" element wrapping everything</li>
  <li>But, the list item elements are the same</li>
  <li>Also note how the numbers increment on their own</li>
  <li>You should be noticing things is this precise order, because this is
      an ordered list</li>
</ol>
```

刷新界面后就可以看到有序列表，在[Hello, CSS](./Chapter-04.md)章节中,我们将学习如何修改列表样式。

![Web page showing a <ol> with <li> elements inside of it](/images/html-ordered-lists-120411.png)

无序和有序对于搜索引擎和用户体验是不一样的。

步骤比较适合使用有序列表，而 `<ul>` 更适合列举特性等。

## 斜体元素

至此，我们仅接触了“块级元素”，“行内元素”是另一个重要部分，块级元素会强制换行，行内元素在一行内显示。

![Diagram: comparison of block elements (wrapping several inline elements) with inline elements (inside of a block element)](/images/inline-vs-block-elements-44860e.png)

例如 `<p>` 是块级元素,  `<em>` 是行内元素，并且会让字体变斜体。

```html
<h2>Inline Elements</h2>

<p><em>Sometimes</em>, you need to draw attention to a particular word or
phrase.</p>
```

`<em>` 显示斜体， 在 [CSS Box Model](./Chapter-05.md) 章节, 我们将深入讲解行内及块级元素如何影响网页布局的。

![Web page highlighting the italic text created with an <em> element](/images/html-emphasis-element-87be03.png)

注意元素间的嵌套规则：

```html
<!-- (Again, don't ever do this) -->
<p>This is some <em>emphasized text</p></em>
```

## 加粗

比 `<em>` 权重更高的是 `<strong>` 元素

```html
<p>Other times you need to <strong>strong</strong>ly emphasize the importance
of a word or phrase.</p>
```

显示如下

![Web page highlighting the bold text created with a <strong> element](/images/html-strong-element-d3135f.png)

`<strong>` 、`<em>` 嵌套使用，样式会叠加：

```html
<p><em><strong>And sometimes you need to shout!</strong></em></p>
```

更多文本内容请参考 [Web Typography](./Chapter-14.md) 章节

![Web page highlighting the bold italic text created with a <strong> element wrapped in an <em> element](/images/html-strong-emphasis-element-5b0eb2.png)

## 结构化

在没有css 的情况下，我们应该让网页具备一定的结构，称之为语义化。

![Diagram: HTML as an abstract tree of nodes compared to CSS as various types of rendered text](/images/structure-vs-presentation-05c228.png)

每个标签都扮演了各自的角色，我们应该使用正确元素来表达网页内容

在 [Hello, CSS](./Chapter-04.md)中，会介绍如何用 css 修改标签默认样式。 

## 自闭合元素

有类元素，不同于`<p>`等，可以自闭合，如`</br>`

### 换行

在 `basics.html` 文件中，我们可以看到代码具备缩进，换行等格式:

```html
<h2>Empty Elements</h2>

<p>Thanks for reading! Interneting should be getting easier now.</p>

<p>Regards,
The Authors</p>
```

在代码片段后，一般会采用换行。

![Web page showing a plaintext line break collapsing into a space in the rendered page](/images/html-collapsing-whitespace-c4012d.png)

一般编辑器会设置80个字符为换行界定，代码格式化可以增强代码可读性。另外可以使用`<br/>` 元素强制浏览器换行, 如：

```html
<p>Regards,<br/>
The Authors</p>
```

`<br/>` 有助于格式化文本，增强可读性。

![Web page highlighting an actual line break with the <br/> element](/images/html-line-break-element-f40443.png)

仅仅是为了 添加段落间距，不应该滥用`<br/>` 标签，如：

```html
<!-- (You will be shunned for this) -->
<p>This paragraph needs some space below it...</p>
<br/><br/><br/><br/><br/><br/><br/><br/>
<p>So, I added some hard line breaks.</p>
```

这种情况应该用 css 实现间距

### 水平线

`<hr/>` 元素一般用于水平区分不同内容，如:

```html
<h2>Empty Elements</h2>

<p>Thanks for reading! Interneting should be getting easier now.</p>

<p>Regards,<br/>
The Authors</p>

<hr/>

<p>P.S. This page might look like crap, but we'll fix that with some CSS
soon.</p>
```

本章节的另一个主题是内容与样式分离，一些元素具有默认样式，在使用 css 之前，我们应该知道这些元素的特性。如 `</hr> <strong>` 等

![Web page demonstrating an <hr/> element](/images/html-horizontal-rule-element-49f526.png)

不能为了实现某些特定的样式，而滥用标签，在接下来的章节我们会告诉你为什么以及如何用 css 实现这些效果

### 备选项

`/` 在所有自闭合标签中，可有可无：

```html
<p>Regards,<br>
The Authors</p>

<hr>
```

规范是必须使用 `/`, 本教程遵守该规范。

## 总结

本章讲解了一些常用的元素，网页有元素组成，每个元素有各自的作用，元素相互嵌套后组合成网页。

![Web page showing <title>, <p>, <h1>, <ol>, and other basic HTML elements](/images/basic-web-pages-f786d5.png)

每个网页都是按照有一定的标准来编码及展现的，在下一个章节，我们将围绕网页元素讲。在这之前，可以先了解下MDN’s [HTML Element Reference](https://internetingishard.com/https://developer.mozilla.org/en-US/docs/Web/HTML/Element) 
