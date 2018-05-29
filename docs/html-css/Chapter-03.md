---
layout: SpecialLayout
---

# 图片与连接

[上一章节](./Chapter-02.md) 介绍了一些重要的元素，图片、连接与这些元素不同，连接指向另一个网页，图片引入另一个连接。

![Diagram: image pointing to <img> element in a web page and HTML link pointing from web page to another web page](/images/html-css/links-and-images-6820c7.png)

学习图片和连接首先得学习HTML属性，属性将开启网页新篇章。

在这一章节，我们将创建多个界面和图片的网页，我们会发现，作为网页开发者会经常处理多文件管理。

## 安装

在这个章节，网页是相互关联的，所以在编码前，我们先创建多个 包含图片的 html 文件。

![Diagram: the 7 project files for this project (3 HTML files, 4 image files)](/images/html-css/links-and-images-example-7ab70f.png)

首先，用 Atom创建 `links-and-images` 文件夹，如果不清楚步骤，可参考 [Introduction](./Chapter-01.md) 章节.

### 链接类

接着创建 `links.html` 文件，如下

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Links</title>
  </head>
  <body>
    <h1>Links</h1>
  </body>
</html>
```

### 图片类

再创建 `images.html`文件:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Images</title>
  </head>
  <body>
    <h1>Images</h1>
  </body>
</html>
```

### 附加类

创建 `links-and-images` 文件夹 `misc`, 接着创建 `extras.html` 文件:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Extras</title>
  </head>
  <body>
    <h1>Extras</h1>
  </body>
</html>
```

在 atom 中右键即可创建新目录，不离开编辑器完成这些步骤当然是最好的。

### 图片下载

我们在  `images.html`  文件里嵌入图片，先下载这些图片[example mochi images](https://internetingishard.com//html-and-css/links-and-images/images-4149f7.zip), 解压到`links-and-images` 目录中, 保存在 `images` 目录中。如

![Screenshot: Atom’s file browser after creating the example files](/images/html-css/example-files-b21613.png)

## 超链接

超链接用 `<a>` 元素创建，在 `links.html` 文件的body 中 添加如下代码:

```html
<p>This example is about links and <a>images</a>.</p>
```

在网页中你可以看到一个连接，但目前它没有任何作用。

## 连接

每个 html 属性都有一定的用途

![Diagram: HTML attribute attached to an HTML element, which is attached to raw content](/images/html-css/html-attributes-6f5690.png)

不同的元素接受不同的属性，可以参考 [MDN](https://internetingishard.com/https://developer.mozilla.org/en-US/docs/Web/HTML/Element) 查看哪些元素具备哪些属性，接下来给 a 标签添加 href 属性：

```html
<p>This example is about links and <a href='images.html'>images</a>.</p>
```

注意看属性的格式，如 a 标签的 href 会告浏览器将会连接到哪里，a 标签的默认样式为蓝色字体：

![Web page with a blue <a href> link in it](/images/html-css/html-link-href-element-61348e.png)

## 连接中绝对，相对，根路径的含义

网站是 HTML 文件在目录中集中管理的一种表现形式，文件相互引用，互联网使用 url 来表示引用，它有三种表现形式：

![Diagram: absolute links (pointing to other website), relative links (pointing to other page in same website), and root-relative links (pointing to other page in same site via its domain)](/images/html-css/absolute-relative-root-relative-links-104560.png)

`href` 属性可以有，绝对、相对、根路径，下一小节将进一步讲解它们，首先在`links.html` 文件添加如下内容:

```html
<p>This particular page is about links! There are three kinds of links:</p>

<ul>
  <!-- Add <li> elements here -->
</ul>
```

### 绝对连接

绝对连接 用 ( `http://` 或 `https://` 定义), 域名+目标地址。

![Diagram: scheme (https://), domain (developer.mozilla.org), path (/en-us/docs/web/html)](/images/html-css/absolute-link-syntax-64d730.png)


例如，添加指向 MDN 的连接

```html
<li>Absolute links, like to
    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>Mozilla
    Developer Network</a>, which is a very good resource for web
    developers.</li>
```

由于绝对连接有可能会跳出当前网站， 最好的方式是告诉用户具体去向。

![Diagram: absolute link pointing from our web page to another website](/images/html-css/absolute-links-32f469.png)

### 相对连接

相对连接表示在当前域名下的网页，所以只需要提供地址即可

比如我们可以在`links.html`文件中这样连向 `extras.html`:

```html
<li>Relative links, like to our <a href='misc/extras.html'>extras
    page</a>.</li>
```

在这个例子中，由于文件不在同一目录，我们需要在 url 中包含`misc`目录

![Diagram: relative link pointing from one page in our website to another one](/images/html-css/relative-links-e178d0.png)

每个目录和文件用`/`来分割。如果我们的目录层级比较深，可以这样：

```html
misc/other-folder/extras.html
```

#### 父级目录

在同级目录下查找不存在的文件是不可行的:

```html
<p>This page is about miscellaneous HTML things, but you may
   also be interested in <a href='links.html'>links</a> or
   <a href='images.html'>images</a>.</p>
```

当你打开浏览器后点击链接，跳出会出错，因为当前目录并没有这些文件。

![Diagram: attempting to link to the wrong HTML page due to a missing parent reference](/images/html-css/relative-link-no-parent-4629d0.png)

需要添加 `..` 语法，表示到父级目录查找：

```html
<p>This page is about miscellaneous HTML things, but you may also be
   interested in <a href='../links.html'>links</a> or <a
   href='../images.html'>images</a>.</p>
```

前提你得确定这些文件在上一级目录当中

![Diagram: linking to the correct HTML page after adding parent reference](/images/html-css/relative-link-with-parent-666b79.png)

多级目录可以使用:

```html
../../elsewhere.html
```

相对路径，虽然好用，但是，不正确的目录结构将导致代码可读性降低。

我们站点的图片就是使用相对路径，这样可以让我们不同为修改章节名称而烦恼。

### 根路径

根路径跟相对连接类似，只是它指向的是网站的根目录，例如网站根目录为 `our-site.com`，则根目录为该站点。

![Diagram: a link from one web page in our site traveling through our domain, then to another page in our site](/images/html-css/root-relative-links-368060.png)

可惜我们使用的不是服务器环境，所以无法体验根目录。

```html
<!-- This won't work for our local HTML files -->
<li>Root-relative links, like to the <a href='/'>home page</a> of our website,
    but those aren't useful to us right now.</li>
```

根与相对的不同点在于开始的目录不同，根指向的是顶级目录，而相对不需要在乎当前页面的位置。 (even in `misc/extras.html`):

```html
/images.html
```

根路径在大型项目中比较常用，它可以解决相对路径中目录结构的耦合问题，但它不像绝对路径那样完全解决耦合问题。

## Targets

`<a>` 元素有个`target`属性，表示网页打开方式，默认是在新标签页中打开网页：

```html
<li>Absolute links, like to
    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'
       target='_blank'>Mozilla Developer Network</a>, which is a very good
       resource for web developers.</li>
```

`target` 有不同的值, 常用的还是 `_blank`, 详情查看 [MDN](https://internetingishard.com/https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

## 文件命名规范

你可能注意到，所有网页文件的命名中都没有空格，应该用 `-` 替代。可以测试一下命名为 `spaces are bad.html`.在谷歌中会如何现实：

```
links-and-images/spaces%20are%20bad.html
```

在地址栏你会看到`%20`，URL 不允许使用空格，应该用破折号代替，另外建议使用小写字母。

文件的命名跟网页相关，所以在开发的时候，我们应该尽可能考虑文件名称与网页内容的语义化

遵循规范，应该避免在任何网页文件名称中出现空格。

## 图片

图片是在网页外渲染的，我们已经学习了绝对、相对、根路径等来引用资源。

网页中用`<img/>`标签跟`src`来显示图片文件。 img 也是自闭合标签[empty element](./Chapter-02.md)

```html
<img src='some-photo.jpg'/>
```

视网膜显示和手机设备的图片显示有所不同，这些问题我们将在 [Responsive Images](./Chapter-11.md) 章节中讨论。还有一些如 `<figure>` 、 `<figcaption>`语义化标签 [Semantic HTML](./Chapter-12.md) 章节中.

现在让我们先关注因特网中图片格式

## 图片格式

网页中图片有不同的格式，每个格式的出现要追溯网页的发展史。

![Diagram: JPG, GIF, PNG, and SVG example images](/images/html-css/image-formats-62b23d.png)

先来看下这些图片 [mochi images](https://internetingishard.com//html-and-css/links-and-images/images-4149f7.zip)

### JPG

JPG 是多色块，小文件。比较适合像照片或者渐变比较多的图片，另外 JPGs 没有透明，如果有，会用白色替换。

![a mochi in a transparent bubble that has a gradient on it](/images/html-css/mochi-77c69d.jpg)

把 `mochi.jpg` 插入 `images.html` 界面，如：

```html
<p>This page covers common image formats, but you may also be looking for <a
   href='links.html'>links</a> and <a href='misc/extras.html'>useful
   extras</a>.</p>

<h2>JPGs</h2>

<p>JPG images are good for photos.</p>

<img src='images/mochi.jpg'/>
```

### GIF

GIFs 适合一些有简单动画，少色块的图片，它并不适合透明像素，如果你想用透明，建议使用 PNG

![an animated mochi bouncing up and down](/images/html-css/mochi-961ee5.gif)

在 `images.html` 文件中添加:

```html
<h2>GIFs</h2>

<p>GIFs are good for animations.</p>

<img src='images/mochi.gif'/>
```

### PNG

PNGs 同样具备高清，没有颜色限制，而且具备透明像素，所以它必将适合 图标， 工业图表，logo 等

![a plain old mochi](/images/html-css/mochi-f95fdf.png)

代码如下:

```html
<h2>PNGs</h2>

<p>PNGs are good for diagrams and icons.</p>

<img src='images/mochi.png'/>
```

### SVG

不同于像素文件，SVG 是矢量图。缩放不会对图片质量造成影响。非常适合响应式布局 [responsive design](./Chapter-10.md)。

![SVG image with crisp edges compared to a pixelated PNG image](/images/html-css/svg-vs-png-image-3df7fd.png)

```html
<h2>SVGs</h2>

<p>SVGs are <em>amazing</em>. Use them wherever you can.</p>

<img src='images/mochi.svg'/>
```

可以用 (e.g., Abode Illustrator or [Sketch](https://internetingishard.com/https://www.sketchapp.com/))转换为 svg，但是内容过多可能会导致文件过大 [_InternetingIsHard.com_](https://internetingishard.com//) 这时用 PNG 会更好。

## 图片尺寸

`<img/>` 默认继承源文件尺寸.

![Web page after embedding JPG, GIF, PNG, and SVG <img> elements](/images/html-css/html-img-formats-3b43c6.png)

可以用下面的方法修改尺寸：

```html
<!-- In JPGs section -->
<img src='images/mochi.jpg' width='75'/>

<!-- In GIFs section -->
<img src='images/mochi.gif' width='75'/>

<!-- In PNGs section -->
<img src='images/mochi.png' width='75'/>
```

通过`width`属性设置图片大小，`height` 设置高度，设置其中一个后，另一个属性将自适应。

设置`width`，`height` 最好的方式是用 css，这样可以使用媒体查询，在 [responsive design](./Chapter-10.md)会进一步探讨。

## 文本提示

给`<img/>`元素添加`alt`属性会给图片添加描述信息，对搜索引擎和纯文本的浏览器都比较友好。

更新图片的`alt`

```html
<!-- In JPGs section -->
<img src='images/mochi.jpg' width='75' alt='A mochi ball in a bubble'/>

<!-- In GIFs section -->
<img src='images/mochi.gif' width='75' alt='A dancing mochi ball'/>

<!-- In PNGs section -->
<img src='images/mochi.png' width='75' alt='A mochi ball'/>

<!-- In SVGs section -->
<img src='images/mochi.svg' alt='A mochi ball with Bézier handles'/>
```

更多详情 [official specification](https://internetingishard.com/https://www.w3.org/TR/html5/embedded-content-0.html#alt).

## 更多 HTML 属性

每个网页都应设置语言和字符编码

### 文档语言

在顶级元素`<html>`中设置`lang`属性，我们的文档是英语，所以设置为 `en`：

```html
<html lang='en'>
```

从 [here](https://internetingishard.com/http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) 查询你的语言应该设置为什么

### 字符编码设置

字符设置就像浏览器字母表，文档语言会渲染成不同的内容并不是文本的语言，让我们复制黏贴国际字符到 `misc/extras.html`文件看效果

```html
<h2>Character Sets</h2>

<p>You can use UTF-8 to count in Turkish:</p>

<ol>
  <li>bir</li>
  <li>iki</li>
  <li>üç</li>
  <li>dört</li>
  <li>beş</li>
</ol>
```

你将会在浏览器看到如下：

![Web page rendering gibberish for international characters](/images/html-css/html-character-sets-no-utf-8-304820.png)

在 `<meta>` 的 `charset` 属性 设置 统一编码，如 `misc/extras.html` 文件:

```html
<meta charset='UTF-8'/>
```

每个网页都应该在`<head>`里设置 UTF-8 国际字符对应表

##  HTML 转义字符

在讲 css 前，先来了解一种特殊字符 “HTML 实体”，在 HTML 中是保留字符 。

### 保留字符

 `<`, `>`, 和 `&` 字符叫作保留字符，在编码前它们不允许被插入文档。这些是 HTML 的语法 如 `<` 新标签 `>` ，`&`

在 `misc/extras.html` 添加:

```html
<h2>HTML Entities</h2>
<p>There are three reserved characters in HTML: &lt; &gt; and &amp;. You
   should always use HTML entities for these three characters.</p>
```

转义字符`&`开始，`;`结束。如 `lt`, `gt`, 和 `amp` 代表 小于, 大于, 和 等于 符号

更多信息 [most of them](https://internetingishard.com/https://dev.w3.org/html5/html-author/charref)

### 引号

如果你想了解引号，可以查阅 [typography](https://internetingishard.com//html-and-css/web-typography/) 有些转义字符你可能会用到:

* `&ldquo;`
* `&rdquo;`
* `&lsquo;`
* `&rsquo;`

你可以用 `'` 和 `"` 引号, 就像:

```html
<p>If you&rsquo;re into &ldquo;web typography,&rdquo; you&rsquo;ll also find
   yourself using curly quotes quite a bit.</p>
```

不像正常引号，转义字符的引号可以跟文本一起。

### UTF-8 和转义字符

在过去，HTML 不允许有特殊字符，此时的转义字符尤为重要.用UTF-8编码之后，可以插入任何字符。这让作为保留字符的转义字符更有意义。

## 总结

 优雅地组织 html、图片、css是开发网页的过程，也是开发网页的核心部分。介绍了一些重要的模板属性（`lang` 和 `charset`）


```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Some Web Page</title>
  </head>
  <body>
    <h1>Some Web Page</h1>
    <!-- Rest of the page content -->
  </body>
</html>
```

下一章节我们将开始讲 css 部分
