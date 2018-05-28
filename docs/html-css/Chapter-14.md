---
layout: SpecialLayout
---

# 网页字体排版

网页字体是定义网页所有字体。包括[basic CSS text properties](./Chapter-04.md)决定用什么字体，要不要斜体。但网页字体做的更多，比如字符，单词，行的间隙，它让文本不同，以及设置每个字体的`font-family`。

![Diagram: examples of font families, relative font sizes, indent styles, text alignment, vertical spacing, and line length](/images/web-typography-terminology-e06b82.png)

字体排版一般由设计师决定。问题是字体排版是一种无形的艺术。要想真正了解你的设计师想要的是什么。你需要像他们一样，用同样的方式进行排版。

本章不仅仅是关于如何为网站添加字体或用 css 属性来修改文本样式。我们还将讲解如何用这些工具来制作漂亮的专业网站。学完本章，你可以知道设计师在谈论什么，比如当他们说能把这段开头的文字变大点吗。这时你应该能明白为什么要把字体变大。

你可能忘了特定 css 的属性。但排版的概念将一直围绕着你。它们不是任意的规则，它们是基于函数的。可以让内容更具可读性，并能有效传达你的信息。

## web 字体简史

本章将开始学习如何定制网站字体。这是现代网页排版中最令人兴奋的部分。然而，在过去几年里，web 字体发生了很大的变化，所以我们需要一些字体格式的入门知识。

### 互联网安全字体

过去，web 开发者只能用 web 安全字体。是在计算机预装的十几个字体集。不可以发送定制字体文件到浏览器在网站上使用。

![Diagram: web server asking user’s computer to display text in Georgia font, user’s computer checking its system for that font](/images/web-safe-fonts-eaa8b0.png)

如果想要展示特殊字体只能用图片。这种限制真的非常糟糕，我都无法想象之前的开发者是如何活下来的。

### 自定义 web 字体

浏览器在 2010 年开始支持自定义 web 字体。但是每个浏览器和设备都需要不同的文件格式。因此，大多数网站提供了四种不同的 web 字体文件：

`.svg`

旧 Safari (iOS and Desktop)

`.eot`

IE

`.ttf`

除了 IE

`.woff`

新版浏览器

在接下来的开发生涯中，你可能会遇到这种情况： [“Bulletproof `@font-face` syntax”](https://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)

![Diagram: web server providing .svg, .eot, .ttf, and .woff fonts for the browser to use](/images/bulletproof-font-face-d18a22.png)

### WOFF 字体

由于 web 开发字体格式（woff），开发更简单了点。[超过 90%](http://caniuse.com/#search=woff) 的现代浏览器支持。`.woff` 字体向后兼容, `.woff2`比它更小（意味着更好的性能）。

![Diagram: web server providing only .woff and .woff2 fonts for the browser to use](/images/woff-and-woff-2-fonts-0cced1.png)

最终，只需要支持 WOFF2，但目前还是建议提供 WOFF 和 WOFF2 web 字体，以获得较老的浏览器的良好覆盖率，并提高现代浏览器的性能。除非传统浏览器占了你受众目标群体的很大一部分，不建议使用已经过时的, `.ttf`, `.svg`, 和 `.eot` 字体。

## 在哪可以找到 web 字体

网上很多地方可以下载免费和高级的网络字体，下面列举三个最好用的。另外，使用哪种字体一般由设计人员决定（以及预算）。但作为开发人员最好也能权衡这些选项。

[Font Squirrel](https://www.fontsquirrel.com/)

[Google Fonts](https://fonts.google.com/)

[Fontspring](https://www.fontspring.com/)

注意，Squirrel 和 Fontspring 都提供了 web 字体和桌面字体就（`.otf` 和 `.ttf` 文件）。WOFF 用于现代浏览器，而桌面字体则包含额外的功能，用于图像编辑程序，如 AI。所以一定要下载或购买你想要使用的字体的网络字体版本，而不单是桌面版。

## 安装

开始我们的网页字体探索， [example website](https://internetingishard.com/html-and-css/web-typography/example/final/web-fonts.html). 下载 [download the initial project](https://internetingishard.com//html-and-css/web-typography/web-typography-338d1d.zip)并解压。

![Screenshot: Atom’s file browser after unzipping the example project](/images/project-files-af1f60.png)

有 6 个 HTML 文档，引用同一个`typo.css`样式。通过给每个文件添加样式来演示

![Web page with web fonts versus system fonts example (before adding web fonts)](/images/web-typography-screenshot-669f41.png)

用浏览器打开文件，会发现初始化项目和最终示例很像，只是少了 web 字体和其他 css 排版属性。

## 本地托管字体

添加 web 字体有两种不同的方法，本地或外部托管。本章进行讨论。首先，分三步给示例项目添加本地托管的 web 字体：

1.  下载字体并放在项目里。
2.  在样式表中嵌入 web 字体。
3.  引用样式表其他地方的字体。

现在开始在 `web-fonts.html` 和 `typo.css` 文件里试验这些。

### 托管 WOFF 文件

我们需要使用 web 字体，例子中使用的是免费的 Roboto 字体，[此处下载](https://www.fontsquirrel.com/fonts/roboto) 。点击 **Webfont Kit** 选项, 而不是 **Download TTF** 按钮。 只需要下载 **WOFF**, 最后点 **Download @font-face Kit** 按钮。

![Screenshot: downloading the Roboto font family from Font Squirrel](/images/download-roboto-screenshot-348421.png)

有个带许可证的 ZIP 文件，还有一些说明，以及一个包含大量子目录的 web 字体文件夹。Roboto 字体有一组不同的字体。我们需要的是 `roboto_light_macroman`。 打开目录然后复制 `Roboto-Light-webfont.woff` 文件到 `web-typography` 项目。

### 嵌入 web 字体

现在有 WOFF 文件了，接着只需要用 `@font-face` at-rule 来嵌入即可。web 字体一般在样式文件的顶部：

```css
@font-face {
  font-family: 'Roboto';
  src: url('Roboto-Light-webfont.woff') format('woff');
}
```

`font-family` 属性定义了字体引用，这是一个 internal 标签，可以设置为任何你想要的。可以不用与字体正式名称一样，但建议保持一致。（比如，一般用 `Roboto` 而不是 `Roboto Light`）。

接着，有一个 `src` 属性用于定义文件引用地址。可以是绝对，相对和根路径。当使用相对地址，注意是相对于 css 文件而不是 html 文件。`format()` 用于告诉浏览器用哪个字体文件去格式化。

刷新 `web-fonts.html` 网页并不会看到什么变化，因为我们只是引入了字体文件，还没有使用它们。

### 使用 web 字体

记得 css `font-family` 属性只是定义了要用哪个字体。 `@font-face` 中 `font-family` 定义了 `Roboto` 字体，这样我们就可以站在样式表中使用它了。

接着就可以在整个示例项目中定义字体了：

```css
body {
  font-family: 'Roboto', sans-serif; /* Add 'Roboto' here */
  font-size: 18px;
  line-height: 1.8em;
  color: #5d6063;
}
```

现在所有字体都是 Roboto Light 了。意味着我们不能使用 `sans-serif` 系统字体了。可以这么解决这个问题：

```html
<style>
  .system-fonts {
    font-family: sans-serif;
  }
</style>
```

`.system-fonts` 提供系统字体，打开浏览器，可以看到头部使用的是 Roboto Light 字体，底部用的是系统默认字体。

![Web page with web fonts versus system fonts example (after adding web fonts)](/images/custom-web-font-vs-system-font-0aa7bc.png)

## Font Families and Font Faces

“family” 是由多个 “faces” 组合而成。每个字体具备不同的粗细和风格，粗细指的是特定的 face，风格指的是是否属于罗马人（直力）、斜体、冷凝、延展，或家族中的其他变体。

例如，Roboto Light 是 Roboto 中的一种。我们之前下载的其余 17 种风格如下：

![Chart of Roboto fonts: font weights (100-900) on x-axis, font styles (roman, italic, condensed) on y-axis](/images/font-weights-and-styles-9bf7f0.png)

在 css 中，字体粗细值表示为 100 到 900 之间的数值。每个数值，都有相对标准化的，人性化的术语。 Black 对应 900，bold 对应 700。regular 对应 400 等等。如你所见，大多数 face 并没有指定粗细值，比如 Roboto 的 “extra light” (200), “semi bold” (600), 和 “extra bold” (800).

值得注意的是，每种风格和粗细代表一个 face。在高质量的字体家族中，浓缩的风格并不是简单地把罗马字体压扁，粗的版本也不代表字体更厚。face 中每个字母其实都是精心设计的，以确保它能提供文本的细致体验。

![Roman letter a versus italic letter a](/images/roman-versus-italic-a-fe7025.png)

这在许多衬线字体的斜体和罗马字体中尤为明显。比如你正在阅读的字体，当它是斜体的时候，完全是一个不同的形状。

### Fakin’ It

我们粗细和风格这么重要?大多数网页都会在同个 family 中使用多个 faces 。所以我们必须要知道如何嵌入多个 `.woff` 文件来表示关联的 faces。

但先来看下，如果不提供多个 faces 会发生什么：

```html
<section class='section section--gray'>
  <h2>Web Fonts</h2>

  <p>This paragraph is using a web font call <em>Roboto Light</em>. It’s a
  little more refined and lends some <strong>unique character</strong> to
  the web page.</p>
</section>
```

刷新界面，加粗字体并没有很粗。因为它是合成的。`<strong>` 元素并没有粗体字体，所以浏览器试图通过伪装它。斜体也一样，但它有点难分辨。这种自动转换通常导致低质量的排版。

![Screenshot: synthesized bold as slightly bolder text versus genuine bold as much bolder text](/images/synthesized-bold-vs-genuine-bold-363a2f.png)

为了验证粗体和斜体是否是真的合成的，可以试着将以下规则添加到 css 或在哪个。`font-synthesis` 属性决定了浏览器是否允许伪造。目前只有火狐支持，chrome 和 safari 暂不支持：

```css
/* This will only work in Firefox */
em,
strong {
  font-synthesis: none;
}
```

用火狐打开 `web-fonts.html`，会发现 `<em>` 和 `<strong>` 都替换为了 roman Roboto Light。

### Multiple Font Faces (错误示范)

试着给实例项目添加 Roboto Light Italic 和 Roboto Bold faces。复制以下文件到 `web-typography` 目录：

* `roboto_bold_macroman/Roboto-Bold-webfont.woff`
* `roboto_lightitalic_macroman/Roboto-LightItalic-webfont.woff`

添加如下样式：

```css
/* DON'T NAME FONT FAMILIES LIKE THIS */
@font-face {
  font-family: 'Roboto Light Italic';
  src: url('Roboto-LightItalic-webfont.woff') format('woff');
}

@font-face {
  font-family: 'Roboto Bold';
  src: url('Roboto-Bold-webfont.woff') format('woff');
}
```

然后给 `<em>` 和 `<strong>` 元素添加如下样式：

```css
/* THIS IS A LITTLE AWKWARD */
em {
  font-family: 'Roboto Light Italic', serif;
}

strong {
  font-family: 'Roboto Bold', serif;
}
```

刷新 `web-fonts.html` 后可以看到想要的结果，但问题是每次想加粗或斜体都要指定 `font-family` 特别奇怪。建议用 `font-style` 和 `font-weight`。

![Diagram: Mapping three related .woff files to three unrelated @font-face declarations](/images/at-font-face-multiple-faces-wrong-way-68feb0.png)

最终我们陷入了很尴尬的境地，在 `@font-face` 中使用独立的 `font-family`并没有隐射出他们实际上是 Roboto family 的一部分。

出于这个原因，你应该始终坚持 **never use the above technique to embed multiple faces that are in the same font family** 。好吧，把之前的代码删了。

### Multiple Font Faces (正确的方式)

为了保持三种字体间的关系。建议用 `font-style` 和 `font-weight`，css 定义如下：

```css
@font-face {
  font-family: 'Roboto';
  src: url('Roboto-Light-webfont.woff') format('woff');
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: 'Roboto';
  src: url('Roboto-LightItalic-webfont.woff') format('woff');
  font-style: italic;
  font-weight: 300;
}

@font-face {
  font-family: 'Roboto';
  src: url('Roboto-Bold-webfont.woff') format('woff');
  font-style: normal;
  font-weight: 700;
}
```

来逐个说明下， 第一个定义了 300 粗的 normal Roboto 字体。第二个定义了 300 粗的斜体 Roboto 字体。最后一个是 700 粗的。

![Diagram: Mapping three related .woff files to three related @font-face declarations by specifying font-style and font-weight](/images/at-font-face-multiple-faces-8198c0.png)

这样就可以让浏览器知道我们的字体是相关的，接下来就可以简单地用 `font-style` 和 `font-weight` 设置样式和粗细，同时浏览器会自动加载对应 `.woff` 文件：

```css
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  /* ... */
}

em {
  font-style: italic;
}

strong {
  font-weight: bold; /* Or 700 */
}
```

对于 `em` 和 `strong` 来说，这些都是默认值。所以我们并不需要在这里包含最后两个规则。请注意，`font-weight` 中唯一可读的是 `normal(400)` 和 `bold(700)` ，其余都用数字。

## 外部托管的 web 字体

好吧!有点难，接下来，我们将讨论一种更为简单的方法：[Google Fonts](https://fonts.google.com/)。这让我们可以跳过本地托管的前两个步骤。谷歌字体将帮我们处理 `.woff` 文件和 `@font-face`。

![Diagram: serving web fonts from our own web server versus serving them from Google Fonts’ servers](/images/locally-vs-externally-hosted-fonts-7bba77.png)

这一部分，我们将在 `History.html` 文件敲代码。如果你想知道排版的历史，可以阅读示例文本。每个文件都在使用 Roboto Light，但我们接下来会用上面聊到的方法来对应修改。

![Screenshot: copying web fonts <link> from Google Fonts](/images/selecting-a-google-font-3a5534.png)

让我们来改变 _Gothic/Blackletter_ 部分的字体。在 [Google Fonts](https://www.google.com/fonts) 中搜索 **UnifrakturMaguntia** 。点击 **Select this font** 做如下处理：

```html
<link href="https://fonts.googleapis.com/css?family=UnifrakturMaguntia" rel="stylesheet">
```

之前有介绍过 `<link/>`，我们引用的是谷歌字体而不是本地文件。你会看到它帮我们添加了同样的 `@font-face` 描述。

现在我们嵌入了 `UnifrakturMaguntia` web 字体，接着我们就可以使用它了：

```html
<style>
  .blackletter {
    font-family: 'UnifrakturMaguntia', cursive;
  }
</style>
```

有 `class='blackletter'` 属性的部分，会显示如下效果：

![Screenshot: text rendered in a blackletter font](/images/adding-a-google-font-e4afca.png)

Google Fonts 简单粗暴，但是对于专业的网站来说还是建议用本地托管的 web 字体。这样有更多地可能性，只要处理得到。可以很大提升网站的性能。

### 字体文件过多

说到性能，我们可以测试下，另外 10 个部分都用不同的字体。处理如下：

```html
<link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Droid+Sans+Mono|Lato|Libre+Baskerville|Lobster|Questrial|Rokkitt|Rufina|Sorts+Mill+Goudy|UnifrakturMaguntia" rel="stylesheet">
```

接着给所有元素添加不同字体：

```css
.old-style {
  font-family: 'Sorts Mill Goudy', serif;
}
.transitional {
  font-family: 'Libre Baskerville', serif;
}
.didot {
  font-family: 'Rufina', serif;
}
.slab {
  font-family: 'Rokkitt', serif;
}
.fat-face {
  font-family: 'Alfa Slab One', cursive;
}
.grotesque {
  font-family: 'Roboto', sans-serif;
}
.geometric {
  font-family: 'Questrial', sans-serif;
}
.humanist {
  font-family: 'Lato', sans-serif;
}
.display {
  font-family: 'Lobster', cursive;
}
.monospace {
  font-family: 'Droid Sans Mono', monospace;
}
```

现在，每个部分都有不同的字体，虽然很好地介绍了字体的历史。但是你应该 **never, ever include this many web fonts on a real web page**

不要忘记在浏览器中每个字体都要加载对应的 `.woff` 或 `.woff2` 文件。字体越多，加载时间越长。建议衡量性能和漂亮的文档排版之间的利弊。

剩余章节主要讲基本的排版原则。这些虽然是简单的指导原则（简单 css 实现），但它通常是 专业与非专业的区别。

## 段落缩进

段落间的分离是排版最基本的功能之一。有两种普遍接受的解决方案：要么首行缩进，要门段落之间留白。你的读者(但愿如此) 并不傻，他们不需要特别强调新段落，所以不要同时使用缩进和留白。

![Diagram: indenting first line of new paragraphs (ok), adding margins between paragraphs (ok), both (not ok)](/images/paragraph-indents-vs-margins-943b17.png)

`text-indent` 属性用来定义第一行的缩进，修改如下：

```html
<style>
  .paragraph-indent p {
    text-indent: 1em;
    margin-bottom: 0;
  }
  .paragraph-indent p:first-of-type {
    text-indent: 0;
  }
</style>
```

注意，标题下的第一个段落其实可以不用缩进，可以用伪类来处理：

反例，修改如下：

```css
/* DESIGNERS WILL JUDGE YOU FOR THIS */
.never-both p {
  text-indent: 1em;
  margin-bottom: 1em;
}
```

看起来有点傻，但是好的设计师会建议你这么做。

## 文本对齐

字体的对齐方式会对阅读参数潜移默化的影响。之前可能没注意过，但阅读一段文字时，眼睛其实不会移动地很流畅。相反，它会从一个单词跳到另一个单词，一行跳到另一行。不断地切换盯着的地方。

![Diagram: text with several dots on it (you read like this) versus gradients over lines of text (you don’t read like this)](/images/fixation-reading-vs-smooth-eye-motions-9c0886.png)

文本对齐对于一个精心设计的 HTML 文档来说从来都不会马虎。它需要考虑到人类生理学，好的对齐方式实际上可以让用户更好地阅读你的内容。从一行跳到另一行时，他们的眼睛会跳转到一个锚点。

接下来的部分解释了使用左、中心、右对齐和文本对齐的正确时间。所有的例子都依赖于 `text-align` 属性。它控制 HTML 元素的对齐方式。

### 左对齐

大部分文本是左对齐的，因为它给读者一个垂直的锚点，可以跳回每一行。

![Diagram: vertically aligned dots on left side of left-aligned text serving as an anchor for your eyes](/images/left-text-alignment-26dbc5.png)

左对齐是 `text-align` 的默认值，如果要显示，可以这么处理：

```html
<style>
  .left {
    text-align: left;
  }
</style>
```

如果你使用的语言是从右到左的(比如阿拉伯语)，你可以用下面右对齐的方式。

### 居中对齐

居中对齐没有锚点，非常不适合跳到下一行，比较适合短线长度，比如诗歌，歌词和标题。

![Diagram: uneven dots on center-aligned text](/images/center-text-alignment-29e1d3.png)

解析添加如下代码：

```css
.center {
  text-align: center;
}
```

注意界面现在有脱节的感觉，中间偏右的第二段打破了左对齐。一般来说，文本对齐应该贯穿于整个网页。如果你要居中一个标题。那么所有标题都应该居中。

### Right Alignment

在选择文本对齐时，另一个考虑因素是它与周围元素的关系。例如，看一下 `alignment.html` 的第三部分。我们想要将图像的标题移动到图像的左边并将其右对齐，使它看起来像是附加在图像上：

![Diagram: image with right-aligned text caption to the left of it](/images/right-aligning-a-caption-cb645b.png)

添加如下样式：

```css
figcaption {
  display: none;
}
@media only screen and (min-width: 900px) {
  figure {
    position: relative;
  }
  figcaption {
    display: block;

    font-style: italic;
    text-align: right;
    background-color: #ffffff;

    position: absolute;
    left: -220px;
    width: 200px;
  }
}
```

之前学习的高级布局中也有一个很好的例子。`<figure>` 设置为 relative ，`<figcaption>`设置为 `absolute`。通过设置 200px 的标题，并赋予 200px 的明确宽度，我们可以从图片和标题间找到 20px 的边缘。

与中心文本一样，右对齐通常应该保留在一些特殊的设计场景汇总。因为其锯齿状的左边缘使得读者很难找到下一行。

### Justified Text

通过巧妙地调整单词/字母之间的间距，并将长单词与连字符分隔开，直到每一行都是相同的宽度，就可以创建合理的文本。没有高质量的断字引擎会导致单词之间出现巨大的空白。这些凹凸不平的空间使得眼睛在文本中横向移动变得更加困难。

![Diagram: paragraph with bad hyphenation (uneven spaces between letters and words) versus paragraph with good hyphenation (even spaces between letters and words)](/images/good-vs-bad-hyphenation-engine-ba40e3.png)

可惜大多数浏览器没有断字引擎，所以最好避免文本在 HTML 文档中调整。我们可以这么处理：

```css
.justify {
  text-align: justify;
}
```

它跟左对齐的段落对比有细微的变化，左对齐的段落更均匀，更吸引人。

## 垂直文本间距

文本空间跟文本对齐一样不能马虎，本节将介绍三种 css 属性的使用：

* `margin-top` (or `padding-top`)
* `margin-bottom` (or `padding-bottom`)
* `line-height`

前两个应该很熟悉了，它们定义了不同段落之间的垂直空间。`line-height` 属性决定了在相同段落之间的行间距。在传统字体排版中，`line-height` 称为高科技。因为打印机使用了小条带，增加了文本行间距。

这些属性用来控制网页的垂直距离。有各种技术可以用来计算给定布局的最佳垂直距离，一般原则是：

* 给足空间
* 整个网页使用一致的间距

为了证明这一点，我们添加如下样式：

```html
<style>
  .messy {
    line-height: 1.2em;
  }
  .messy h2 {
    line-height: .9em;
  }
  .messy:last-of-type {
    line-height: 1.5em;
  }
  .messy:last-of-type h2 {
    margin-bottom: .3em;
  }
  .messy .button:link,
  .messy .button:visited {
    margin-top: 0;
  }
</style>
```

行高，内边距，外边距发生一点细微变化都会对整个网页质量产生巨大的影响。

![Web page with large, consistent spacing versus web page with cramped, uneven spacing](/images/vertical-text-spacing-a9d71f.png)

计算垂直间距需要数学和心理学，但这一般都是设计师的工作。作为开发者需要知道的是用什么 css 属性，更重要的是，你必须明白你的设计师的用意。所以你需要注意 `margin`，`padding`，和 `line-height` 属性。

## Line Length

如果文本垂直间距不是任意的，水平肯定也不是。行长度或度量是指文本的水平长度。可以把它当做是单行中字符或单词的数量。与之相关的属性有：

* `width`
* `margin-left` (or `padding-left`)
* `margin-right` (or `padding-right`)

最好是把一行字符的数量控制在 80 个左右，和对齐方式一样，这样会微妙地影响内容的可读性。字符越多，眼睛越累。长度过长还会导致跳转到下一行的时候迷失掉。

![Diagram: line length as the width of a paragraph](/images/line-length-measure-ce052b.png)

这就是为什么这么多网站(包括本站)使用固定宽度布局，或在大屏的情况拆分为多列。如果不划分列，那么长度会变得难以接受。

示例 `line-length.html` 中，有很好的度量标准。看下添加如下代码会发生什么：

```html
<style>
  @media only screen and (min-width: 580px) {
    .not-so-manageable {
      max-width: 100%;
      margin-left: 2em;
      margin-right: 2em;
    }
  }
</style>
```

现在，第二部分宽度已经填充浏览器窗口的宽度了。由于长度太长，根本无法阅读。所以，良好的网页排版的目的是让访问者尽可能地接受你的内容。

## 其他

字体设计指南

可以让你踏上高质量网页排版。印刷术是一个完整的行业，我们接触的只是冰山一角。如果深入研究，它将比 web 开发更难，所以我们只提供一些指南：

* `body` 元素的字体大小设置为 `14px` 到 `20px`。
* `&rsquo;`, `&lsquo;`, `&rdquo;`, and `&ldquo;` 使用引号。
* 正确使用破折号 (`&ndash;`, `&mdash;`) 和一些符号 (`&copy;`)。
* 除非悬浮状态，否则不要使用 `text-decoration: underline`。
* 使用自带的斜体相关，否则会导致性能问题

[Practical Typography](http://practicaltypography.com/summary-of-key-rules.html) 用于排版非常使用，而且有一个非常棒的规则列表。

## Summary

本章目的有两方面：

* 学习 web 字体的机制和基本的 css 排版属性
* 理解设计师如何思考排版

读完本章你可能还是没办法搞出一个漂亮排版的 web 界面，重点是让你知道排版的魅力。而且你现在可以用 font family，face ，weight 和 styles ，leading，measure 和 vertical rhythm 去吹牛逼了。

本章的重点是说明精心设计的网页，没有任何东西是随便设计的。字体大小，缩进样式，文本对齐，行高，页边距以及界面的其他细节都值得仔细思考，所有设计都出自内心。

本章介绍的 css 属性其实都很简单，无非是移动盒子，改变颜色，改变文本外观。这些东西的意义来自于你正在实施的网站的基础设计和业务目标。

目前为此，你已经学完了所有章节。现在你已经具备了构建专业 web 界面所需的 HTML 和 css 只是。唯一少的就是 实践。下一步，就是学以致用。

请继续关注更多的教程!
