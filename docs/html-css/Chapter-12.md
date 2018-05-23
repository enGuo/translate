---
layout: SpecialLayout
---

# 语义化

语义化就是所有的 HTML 标签都应该传达展示内容的含义。之前也有写过语义化 HTML(比如用 strong 代替 b)，也有一整套元素用于网页布局语义化，称之为 "分割元素"，它们看起来是这样的：

![Diagram: <header>, <nav>, <article>, <aside>, <figure>, and <footer> elements in a typical web page](/images/html-sectioning-elements-00c3fd.png)

使用这些作为 `<div>` 元素的替代品是现代 web 开发的一个重要方面，因为它让搜索引擎、屏幕阅读器和其他机器更容易识别网站的不同部分。还可以帮你组织代码，易于维护。

![Diagram: div soup (several gray <div> elements) compared to semantic markup (<header>, <article>, <figure>, and <footer> in different colors)](/images/semantic-html-ffab7c.png)

本章我们重新讨论 HTML，你仍然可以使用诸如 [box model](./Chapter-05.md), [flexbox](./Chapter-08.md), 或者 [positioning schemes](./Chapter-09.md)给新元素添加 css 规则。你可以把这些分割元素当做有具体含义的 `<div>`。

## 安装

新建 `semantic-html` 目录，在新建 `article.html` 文件：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Semantic HTML</title>
  </head>
  <body>

    <h1>Interneting Is Easy!</h1>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>Sign Up</a></li>
    </ul>

  </body>
</html>
```

`<h1>` 和 `<ul>` 作为网站的顶级 banner，而不是主要内容。之前我们并没有这么区分，但从本章开始将重点关注这一块。

## 文档大纲

每个 HTML 文档都有大纲作为搜索引擎和屏幕阅读器区分内容层次结构的依据。`<h1>` 到 `<h6>` 就是用来构建网站大纲的。可以通过写个博客来说明下：

```html
<h1>Semantic HTML</h1>
<p>By Troy McClure. Published January 3rd</p>
<p>This is an example web page explaining HTML5 semantic markup.</p>

<h2>The Document Outline</h2>
<p>HTML5 includes several “sectioning content” elements that
   affect the document outline.</p>

<h3>Headers</h3>
<p>The <code>&lt;header&gt;</code> element is one such sectioning
   element.</p>

<h3>Footers</h3>
<p>And so is the <code>&lt;footer&gt;</code> element.</p>

<h2>Inline Semantic HTML</h2>
<p>The <code>&lt;time&gt;</code> element is semantic, but it’s not
   sectioning content.</p>

<p>This fake article was written by somebody at InternetingIsHard.com, which
   is a pretty decent place to learn how to become a web developer.</p>

<p>&copy; 2017 InternetingIsHard.com</p>
```

[HTML5 Outliner](https://gsnedders.html5.org/outliner/) 是检查页面文档大纲的便捷工具。把 `article.html` 的内容复制黏贴到文本框。可以看到我们示例的概要，结构如下，感觉有点像学校里学过的研究论文的大纲：

![Outline of web page heading structure](/images/document-outline-heading-elements-576433.png)

每个 `<h1>` 元素在文档大纲中创建了一个新的部分，其余不要重要的则认为是该顶级标题下的子节。语义化 HTML 有两个子内容：文档大纲和内联语义化 HTML。一直到 `<h6>` 都是同样的道理。

注意，标题级别的实际值并不重要，重要的是它是否大于或小于当前部分的标题。例如将 `<h3>` 改为 `<h4>` 然后在通过刚刚的工具测试一下。由于 `h4` 仍然小于 `h2` 所以对文档大纲并不会有任何影响。

![Flow chart of rules for when headings create new sections in the document outline](/images/document-outline-section-creation-45ee48.png)

文档大纲与语义化 HTML 有什么关系?标题是网页中最具语义的东西。它在搜索引擎划分重要内容中扮演了重要的角色。此外，我们说的语义化 HTML 元素有更多的含义，甚至会颠覆这里对大纲的定义。

## 文章

`<article>` 元素用于展示网页文章。它应该只包含从网页提取的不同于上下文分布的内容。例如像[Flipboard](https://flipboard.com/)程序可以从网站中抓取`<article>`元素，放在自己的站点，并提升阅读体验。

![Diagram: <article> element plucked out of page and sent to Flipboard, search engines, and other websites](/images/html-article-element-82490e.png)

示例中，可以用 `<article>` 将页面的内容标记为一个独立的单元，比如：

```html
<article>
  <h1>Semantic HTML</h1>
  <p>By Troy McClure. Published January 3rd</p>
  <p>This is an example web page explaining HTML5 semantic markup.</p>
  <!-- ... -->
  <p>This fake article was written by somebody at InternetingIsHard.com, which
     is a pretty decent place to learn how to become a web developer.</p>
</article>

<p>&copy; 2017 InternetingIsHard.com</p>
```

注意，我们把版权申明放在了文章外面，因为它是站点的页脚，并不是文章的一部分。每个网页其实都应该有页眉，页脚和文档大纲，它们与站点的其他部分完全隔离。

### 文章使用多个元素

对于像博客，报纸，专题。页面上通常只有一个 article 元素。当然也可以有多个 article，比如有多个博客文章的界面。每个部分都可以用 article 包裹

```html
<article>
  <h1>First Post</h1>
  <p>Some content</p>
</article>
<article>
  <h1>Second Post</h1>
  <p>Some more content</p>
  <h2>Subsection</h2>
  <p>Some details</p>
</article>
<article>
  <h1>Last Post</h1>
  <p>Final bit of content</p>
</article>
```

这意味着访问我们界面的人可以看到三篇文章。你可以把它看做了将多个 HTML 文件合并到单个文档的方法，同时不会混淆搜索引擎，浏览器或其他解析我们内容的机器。

将其与一些有类名的 div 进行比较，你会发现语义化 HTML 更直观。

## Sections

section 元素跟 article 有点像，但它在文档中并没有实际的语义，也就是说在 Flipboard 程序中，它并不会抓取 section 的内容。

![Diagram: <section> element unable to be plucked out of page](/images/html-section-element-92a4d1.png)

将 section 看做是定义文档大纲的一种区块化。为什么我们不直接用 h 标签呢，有时，我们只是想用一个容器出于布局目的包裹内容，此时用 section 比 用 div 更有意义。

让我们把 `article.html` 的内容分为两部分：

```html
<section>     <!-- Add this -->
  <h2>The Document Outline</h2>
  <p>HTML5 includes several “sectioning content” elements that
     affect the document outline.</p>

  <h3>Headers</h3>
  <p>The <code>&lt;header&gt;</code> element is one such sectioning
     element.</p>

  <h3>Footers</h3>
  <p>And so is the <code>&lt;footer&gt;</code> element.</p>
</section>    <!-- And this -->

<section>     <!-- This too! -->
  <h2>Inline Semantic HTML</h2>
  <p>The <code>&lt;time&gt;</code> element is semantic, but it’s not
     sectioning content.</p>
</section>    <!-- Don't forget this -->
```

在保持文档大纲的同时添加了额外的语义化结构，而且还能添加样式 ( 比如，特定的背景颜色 )

### `<section>` 和文档大纲

如果我们把 `h2` 换成 `h6`，会发生什么呢：

```html
<section>
  <h6>Inline Semantic HTML</h6>     <!-- Change this heading level -->
  <p>The <code>&lt;time&gt;</code> element is semantic, but it’s not
  sectioning content.</p>
</section>
```

h6 比 h3 的权重低，你可能希望它成为 footer 的一部分。但是，文档大纲并没有变化。

![Expected and actual outlines created by the HTML5 document outline scheme versus real-world web browsers](/images/sections-and-document-outline-614f12.png)

添加 section 元素目的是用嵌套内容替换标题级别。意味着每个 section 都有自己的一组 h1 到 h6 的标题级别。

但是，你不应该用 section 元素来操作文档大纲，因为浏览器，屏幕阅读器和一些搜索引擎无法正确地解释 section 对大纲的影响。标题级别更适合定义界面大纲，而 section 只应该在适当的时候作为 div 的替代品。

还要注意，每个 section 元素都应该至少包含一个标题，否则就相当于添加了一个无标题部分。修改如下内容，并在 outliner 工具测试：

```html
<h2>Inline Semantic HTML</h2>
<section>
  <!-- This will be an "Untitled Section" -->
  <p>The <code>&lt;time&gt;</code> element is semantic, but it’s not
  sectioning content.</p>
</section>
```

这将创建一个新的部分，但是由于没有与之相光的标题，导致文档大纲根本不知道它是什么。因此，在使用 section 时应该尽量避免这种情况。

![Outline with an untitled section after adding a new <section> element](/images/untitled-section-in-document-outline-b511bc.png)

正如 HTML5 规范定义的，section 是一个非常通用的元素。此外，浏览器和屏幕阅读器并不清除它在文档大纲中的作用，使得我们不知道如何以及如何使用它。建议把它作为一个更具有描述性的包装器使用，用于界面的隐式定义部分。不要将它用于文章部分(用`<article>`)。

## Nav 元素

`<nav>` 元素允许标记网站导航部分。适用于主站点导航，侧边栏链接，内容表，以及任何链接组合。例如：

```html
<h1>Interneting Is Easy!</h1>
<nav>                                    <!-- Add this -->
  <ul>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About</a></li>
    <li><a href='#'>Blog</a></li>
    <li><a href='#'>Sign Up</a></li>
  </ul>
</nav>                                    <!-- This too! -->
```

这是搜索引擎的一个重要语义信息。有助于快速识别网站结构，从而更容易发现其他界面。有多个不同的链接组合时，界面可以包含多个 `<nav>` 元素。

![Diagram: <nav> elements grouping navigation links in the header, sidebar, and footer of a web page](/images/html-nav-element-d1e716.png)

## Headers

`<header>` 元素是一种新的语义标记，不要和标题(h1-h6)混淆。它表示某个部分，文章或整个 web 界面的介绍性内容。介绍性内容可以是 logo，导航设备或者作者信息等。

![Diagram: separate <header> elements for whole web page versus just the <article> element](/images/html-header-element-7b4e01.png)

最好的做法是在 `header` 中添加网站名称/logo 和主导航，如下：

```html
<header>
  <h1>Interneting Is Easy!</h1>
  <nav>
    <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>Sign Up</a></li>
    </ul>
  </nav>
</header>
```

`<header>`通常通常用 `<body>`, `<section>`, 或 `<article>` 元素包裹着。意味着可给文档描述性内容使用多个`<header>`元素，例如：

```html
<article>
  <header>
    <h1>Semantic HTML</h1>
    <p>By Troy McClure. Published January 3rd</p>
  </header>

  <p>This is an example web page explaining HTML5 semantic markup.</p>
  <!-- ... -->
```

如果没有 `<header>` ，搜索引擎或屏幕阅读器就无法区分第一个 p 元素和文章内容。可以给 `<header>` 添加样式，因为博客文章的挑剔和作者信息通常跟其他部分不同，同样，`<header>` 可以作为 div 的语义替换。

## Footers

headers 和 footers 从概念上讲是一样的，只不过他们通常是在文章/网站的末尾，而不是开头。常见的用例包括版权声明，页脚导航和博客文章结尾的相关推荐。

![Diagram: <footer> element for the whole web page and for the <article> element](/images/html-footer-element-0c927a.png)

同样，footers 也可以用其他元素嵌套。所以我们可以添加多个 footer，比如在文章的末尾添加作者信息：

```html
<article>
  <header>
    <h1>Semantic HTML</h1>
    <p>By Troy McClure. Published January 3rd</p>
  </header>

  <p>This is an example web page explaining HTML5 semantic markup.</p>
  <!-- ... -->

  <footer>         <!-- Add this -->
    <p>This fake article was written by somebody at InternetingIsHard.com,
       which is a pretty decent place to learn how to become a web developer. This
       footer is only for the containing <code>&lt;article&gt;</code> element.</p>
  </footer>        <!-- And this -->

</article>

<footer>           <!-- This, too -->
  <p>&copy; 2017 InternetingIsHard.com</p>
</footer>          <!-- Don't forget to close it! -->

</body>
</html>
```

`<article>` 元素里面的 `<footer>`只属于文章内容，用于包含作者信息。而一个 footer 则关联整个界面。

## Asides

headers 和 footers 是给文章添加额外的信息，不过有时我们可能需要用 `<aside>` 元素从文章中删除某些如赞助商广告的信息，因为我们并不想让它成为文章的一部分。

![Diagram: <aside> element for the site-wide sidebar and inside an <article> element](/images/html-aside-element-ce120b.png)

修改如下：

```html
<article>
  <header>
    <h1>Semantic HTML</h1>
    <p>By Troy McClure. Published January 3rd</p>
  </header>
  <!-- Look! A fake advertisement! -->
  <aside class='advert'>
    <img src='some-advert-image.png'/>
  </aside>

  <p>This is an example web page explaining HTML5 semantic markup.</p>
```

虽然图片在`article`里面，但爬虫知道它不是文章的内容。`<aside>` 不仅可以用于标记广告，同样可以用于强调定义，统计或引用。只要不属于文章内容部分，都可以作为 aside 部分。

如果 aside 用在 article 的外部，意味着它可能跟整个网站有关 ( 比如 header 和 footer )。此时，更适合将它作为侧边栏使用：

```html
<aside class='sidebar'>
  <h2>Sidebar</h2>
  <p>Some sidebar content</p>
  <nav>
    <h3>HTML &amp; CSS Tutorial</h3>
    <ul>
      <li><a href='#'>Introduction</a></li>
      <li><a href='#'>Basic Web Pages</a></li>
      <li><a href='#'>etc...</a></li>
    </ul>
  </nav>
  <nav>
    <h3>JavaScript Tutorial</h3>
    <ul>
      <li><a href='#'>Introduction</a></li>
      <li><a href='#'>Hello, JavaScript</a></li>
      <li><a href='#'>etc...</a></li>
    </ul>
  </nav>
</aside>
```

我们可以像给 div 添加 `class` 属性一样，给 `<aside>` 也添加。

## Divs For Layout

如果像让机器识别内容结构，建议使用语义化标签，它可以标准化地组织你的网页。当然如果只是出于布局目的，我们同样还是可以使用 div 的。

比如我们想让界面居中，可以这么做：

```html
  <body>
    <div class='page'>             <!-- Start of container div -->
      <header>
        <h1>Interneting Is Easy!</h1>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Sign Up</a></li>
          </ul>
        </nav>
      </header>
      <!-- ... -->
      <footer>
        <p>&copy; 2017 InternetingIsHard.com</p>
      </footer>
    </div>                         <!-- End of container div -->
  </body>
</html>
```

此时比较适合用 flexbox，可以将 section 或 nav 作为 flex 子项目，当然在 flexbox 布局中使用 div 也是很常见的。

重点是，不要为了使用语言化而使用语义化，滥用不如不用。还不如 div 呢

## Dates and Times

时间由非常多的格式，比如 January 3rd, 2017 as “1/3/2017”, “Jan 3rd”, or even “yesterday” ，正确解析这些对于机器来说有点困难，直到 `<time>` 的出现。

`<time>` 元素表示某个时间或日期，这种机器可读的日期使得浏览器可以自动识别到用户的日历上，并帮助搜索引擎锁定具体日期。比如谷歌搜索：

![Screenshot: Google search results with publish date highlighted](/images/time-element-in-google-search-results-5bba38.png)

让我们用 `<time>` 标签来标准文章的发表时间：

```html
<article>
  <header>
    <h1>Semantic HTML</h1>
    <p>By Troy McClure. Published <time datetime='2017-1-3'>January
       3rd</time></p>
  </header>
  <!-- ... -->
```

在 `datetime` 属性上定义日期。格式为年月日。虽然年没有包含在人类可读的文本中，但它高数了搜索引擎我们的文章是在 2017 年发表的。

![Diagram: year, month, date, time, and timezone format of the <time> element](/images/datetime-format-d0c825.png)

还可以添加时间区间：

```html
<time datetime='2017-1-3 15:00-0800'>January 3rd</time>
```

The time itself is in 24-hour format, and the `-0800` is the time zone offset from GMT (in this case, `-0800` represents Pacific Standard Time).

## Address

`<address>`和`<time>`一样，并不处理文档的整体结构，而是用一些元数据修饰了父元素`<article>` 或 `<body>`，`<address>` 用于添加联系信息。

例如，我们可以在文章的底部添加作者的邮箱地址：

```html
<footer>
  <p>This fake article was written by somebody at InternetingIsHard.com, which
     is a pretty decent place to learn how to become a web developer. This footer
     is only for the containing <code>&lt;article&gt;</code> element.</p>
  <address>
    Please contact <a href='mailto:troymcclure@example.com'>Troy
    McClure</a> for questions about this article.
  </address>
</footer>
```

默认情况下，它与`<em>`的样式相同。但是你可以用 css 来修改它。还可以添加链接，更多参阅[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links)。

## Figures and Captions

`<figure>` 和 `<figcaption>` 元素，前者可用于表示图形，图表，甚至是代码片段。后者是可选的，相当于 `<figure>` 元素的备注信息。

常用的例子是文章中图片描述信息：

```html
<section>
  <h2>The Document Outline</h2>
  <p>HTML5 includes several “sectioning content” elements that
    affect the document outline.</p>

  <figure>
    <img src='semantic-elements.png'
         alt='Diagram showing <article>, <section>, and <nav> elements'/>
    <figcaption>New HTML5 semantic elements</figcaption>
  </figure>
  <!-- ... -->
```

alt 属性与 figcaption 元素密切相关，alt 作为图片的文本替换，而 figcaption 显示的是图片等同的文本信息。

figcaption 可以替换 alt 在 SEO 中的作用。区别是 figcaption 可见，alt 不可见

## CSS/Legacy Considerations

本章将的 HTML5 适用于现代浏览器，但你可能见过这些样式：

```css
section,
article,
aside,
footer,
header,
nav {
  display: block;
}
```

它可以让语言化元素在老浏览器中变成与 div 类似的块级元素。

## 总结

css 是让网页更适合人类阅读，而语义化标签是为了让机器更容易阅读。

![Diagram: ambiguous structure (gray <div> elements) versus identifiable sections (<header>, <article>, <figure>, and <footer>)](/images/semantic-html-ffab7c.png)

理解这一点很重要，首先我们要理解机器阅读的方式。在语义化 HTML 出现前，开发者都是用 div 加类属性来区分网页内容的。比如：

```html
<div class='main-menu'>
<div class='top-nav'>
<div class='top-banner'>
<div class='header'>
```

机器读者必须解读所有的 div，我们在本章学习的语义 HTML 元素就像这些类名的标准化版本，现在搜索引擎和屏幕阅读器可以很快识别网页中 header 部分，另外，我们依然可以给这些元素添加样式。

本章介绍的语义元素是现代网站的最佳实践，另外：

* [Schema.org microdata](http://schema.org/docs/gs.html) 让搜索引擎更容易识别
* [Twitter cards](https://dev.twitter.com/cards/getting-started) 让网页显示在 tweets 中
* [Open Graph metadata](https://developers.facebook.com/docs/sharing/webmasters#markup) 让 facebook 分享你的内容

更深入的话题就是 SEO 了，这个留给读者自行深入。下章，我们将介绍网站的另一个重要组成部分：表单 ( 尤其是电商 )
