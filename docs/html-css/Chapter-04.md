---
layout: SpecialLayout
---

# 你好，css

本教程前几章主要讲解 HTML，接下来让我们了解级联样式表，你可以认为它是在用字体大小、颜色，间距设计网页，且与 HTML 分离。

为什么要样式分离，职责分离是网页设计的基本准则。HTML 展现内容，css 展现样式。

![Diagram: designer’s mockup turning into CSS and raw content turning into HTML markup. Both CSS and HTML markup turn into a rendered web page](/images/css-vs-html-f4fdfa.png)

css 提供了网页展示对照表，"我想让头部大点，侧边栏展示主要文章"，仅用 HTML 无法表达哪个是头，哪个是侧边栏

在这章，将介绍 css 的基础语法以及如何作用到 HTML 文档。并不是讲解所有的 css 属性，更多是它与 HTML 如何协同。另外如[previous chapter](./Chapter-03.md), 重要的是组织好文件

## 安装

简单起见，每个例子用不同的目录[Using Atom](./Chapter-01.md), 创建新的项目 `hello-css`。再建 `hello-css.html`, 添加如下代码：

```css
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Hello, CSS</title>
  </head>
  <body>
    <h1>Hello, CSS</h1>

    <p>CSS lets us style HTML elements. There’s also
       <a href='dummy.html'>another page</a> associated with this example.</p>

    <h2>List Styles</h2>

    <p>You can style unordered lists with the following bullets:</p>

    <ul>
      <li>disc</li>
      <li>circle</li>
      <li>square</li>
    </ul>

    <p>And you can number ordered lists with the following:</p>

    <ol>
      <li>decimal</li>
      <li>lower-roman</li>
      <li>upper-roman</li>
      <li>lower-alpha</li>
      <li>upper-alpha</li>
      <li>(and many more!)</li>
    </ol>
  </body>
</html>
```

另外，新建一个叫 `dummy.html` 的界面测试多文件中 css 如何工作

```css
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Dummy</title>
  </head>
  <body>
    <h1>Dummy</h1>

    <p>This is a dummy page that helps us demonstrate reusable CSS
       stylesheets. <a href='hello-css.html'>Go back</a>.</p>

    <p>Want to try crossing out an <a href='nowhere.html'>obsolete link</a>? This
       is your chance!</p>
  </body>
</html>
```

## Css

css 级联样式表是以 `.css` 为后缀的文件。在 `hello-css` 目录新建 `styles.css` 文件用来保存这章所有例子的代码。添加样式与 HTML 关联起来

```css
body {
  color: #ff0000;
}
```

css 规则是以 由 HTML 中定义的选择器开始，首先给`<body>`元素添加样式。选择器空格后面有"中括号"，所有添加的属性都将作用于`<body>`

![Diagram: CSS rule composed of a selector and a series of property-value pairs](/images/css-rule-terminology-1a7961.png)

`color` 是 HTML 文本 css 颜色属性，它接受一个 HAX 值表示变色值，比如"#F00"表示红色

css 属性跟 [HTML attributes](./Chapter-03.md) 都是 key-value 的形式。 另外, 建议设置为直观的信息而不是抽象的

## 引入 css

打开网页你看不到有任何样式，因为我们还没有引入样式。可以在`hello-css.html`通过以下方式引入样式表：

```css
<head>
  <meta charset='UTF-8'/>
  <title>Hello, CSS</title>
  <link rel='stylesheet' href='styles.css'/>
</head>
```

`<link/>`在渲染`hello-css.html`界面前告诉浏览器加载`styles.css`，接着我们会看到如下效果：

![Web page with a lot of bright red text due to body selector](/images/linking-a-css-stylesheet-572fd1.png)

`<link/>`元素虽然跟`<a>`元素很像，但它只能写在文档头部的`<head>`里面，`<link/>`关联外部文件的元数据，可以看到它是自闭合元素[empty element](./Chapter-01.md), 所以不需要闭合标签。

`rel`属性定义了源文件和 HTML 文档的关系。默认值为 `stylesheet`，还可以为别的值 [few other options](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). 跟上节的`href`类似 ，引用地址可以为[absolute, relative, or root-relative link](./Chapter-03.md).

![Diagram: HTML <link> element directing the browser to a CSS stylesheet](/images/link-element-1beb38.png)

注意浏览器和我们的样式没有直接联系，只是在 HTML 可以包含 css，图片和 js。这些就是网页的核心部分

## CSS 注释

样式表已经起作用了，现在让我们用灰色替换红色：

```css
body {
  color: #414141; /* Dark gray */
}
```

注意 css 注释的语法与 HTML`<!-- -->` 不同。css 是在`/*` 和 `*/`之间添加注释

## 设置多属性

在中括号里面你可以设置任意多的 css 规则属性，如：

```css
body {
  color: #414141; /* Dark gray */
  background-color: #eeeeee; /* Light gray */
}
```

`background-color` 和 `color` 属性类似，但它作用于背景颜色。注意末尾的分号，少了它，css 将无法工作。所以 _always mind your semicolons!_

我们用灰色替换白和黑?用黑色背景和白色字体会让网页变得突兀，容易让读者分心

## 选择不同的元素

当然，我们可以给其他元素添加样式。比如`<h1>`：

```css
body {
  color: #414141; /* Dark gray */
  background-color: #eeeeee; /* Light gray */
}

h1 {
  font-size: 36px;
}
```

`h2`：

```css
h2 {
  font-size: 28px;
}
```

## 尺寸单位

很多 css 属性都可以设置尺寸单位，比如 [a lot of units](https://developer.mozilla.org/en-US/docs/Web/CSS/length) , 常用的是 `px` (pixel) 和 `em` (有点像字母 _m_)。前者是真实像素值，不管用户用得是否是 Retina 设备，后者跟元素的字体大小有关

![Diagram: 1em, 1.6em, and 2em sizes for base font size of 12px, 16px, and 20px. Em sizes get bigger as base font sizes increase.](/images/em-units-dad09a.png)

`em` 比较适合定义依赖于基础字体大小的尺寸，在上个图表，可以看 `em` 对应 字体尺寸 `12px`, `16px`, 和 `20px` ，跑下下面代码：

```css
body {
  color: #414141; /* Dark gray */
  background-color: #eeeeee; /* Light gray */
  font-size: 18px;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.6em;
}
```

比如文档的字体大小为 `18px`，那么`<h1>` 将是两倍，`<h2>`为 1.6 倍。如果我们设置根字体大小，则整个使用`em`的值都会相应变化。

## 多选择器

如果我们想要给所有标头设置样式，我们不想像下面一样冗余：

```css
/* (You'll regret creating redundant styles like this) */
h1 {
  font-family: 'Helvetica', 'Arial', sans-serif;
}

h2 {
  font-family: 'Helvetica', 'Arial', sans-serif;
}

h3 {
  font-family: 'Helvetica', 'Arial', sans-serif;
}
/* (etc) */
```

我们可以这么做：

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Helvetica', 'Arial', sans-serif;
}
```

这样我们就可以用一条 css 来给所有标头添加字体设置，如果我们想改变它，只需要在一个地方修改就可以了。多选择器可以提高开发体验。

![Web page showing <h1> and <h2> headings in a different font](/images/heading-font-families-68964e.png)

### 字体定义

`font-family` 是设置字体的 css 内置属性，它可以为多种值，因为每个用户安装的字体不一样。如代码所示，浏览器首先选用 `Helvetica` 然后是 `Arial`，都没有则选用系统默认字体 sans serif

![Diagram: Helvetica falling back to Arial falling back to any sans serif font](/images/system-fonts-6a5c38.png)

由于用户自定义字体的局限性，现在更多使用的是网络字体。可以在 [Web Typography](./Chapter-14.md) 章节了解详情。

## 列表样式

`list-style-type` 可以让你设置 `<li>` 元素的列表图标，直接在 `<ul>` 或 `<ol>` 元素定义:

```css
ul {
  list-style-type: circle;
}

ol {
  list-style-type: lower-roman;
}
```

在`hello-css.html`例子中，你会看到列表样式为`none`的，像按钮一样。在[Advanced Positioning](./Chapter-09.md) 章节我们将进一步了解

![Web page showing <ul> and <li> elements without list item bullets](/images/list-items-for-menus-70abb2.png)

内容样式分离总是好的，比如菜单栏是无序列表，建议用按钮替换点列表展示，让网页保持 SEO 的同时，采用 css 让网页更漂亮

也可以给`<li>` 元素添加 `list-style-image` 属性 (see MDN [for details](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)).

设置字体样色，列表样式看起来非常繁琐，组织好 css 会让你网页开发更加简单

## 样式复用

至此，我们只是给网页添加了一些简单的样式。如果我们在别的界面能复用这些代码，将非常方便。首先，我们得在 `dummy.html` 的`<head>`中添加 `<link/>` ：

```css
<link rel='stylesheet' href='styles.css'/>
```

现在 `dummy.html` 和 `hello-css.html` 有相同的样式。只需在一个文件修改，就可以同时作用于多个界面。

![Diagram: Three HTML files pointing to the same global CSS stylesheet](/images/reusable-css-stylesheets-43a99a.png)

css 好的引用方式可以参考 [root-relative paths](./Chapter-03.md) ，可以解决一些嵌套问题

## 文本样式

我们会陆续介绍不同的 css 属性，首先来看如何给字体添加样式

### Underlines

`text-decoration`用于添加下划线样式，设置为 `none` 可以移除链接的默认下划线样式更多内容在 [later on](./Chapter-06.md).

```css
a {
  text-decoration: none;
}
```

`text-decoration`另外一个值是 `line-through`，表示"删除文本"。但是尽量用 html 标签替换 css，如[`<ins>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins) 和 [`<del>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del) 元素替换 `line-through`

### 文本对齐

`text-align` 属性表示 HTML 文本元素对齐方式

```css
p {
  text-align: left;
}
```

有这些值 `right`, `center`, 或 `justify`，注意会影响整个网页

![Web page with right-aligned text](/images/css-text-align-right-3c6a95.png)

在下一章节 css 盒模型中 将详细讲解这一现象的原因 [next chapter](./Chapter-05.md)

### 字体粗细、风格

`font-weight`设置字体粗细程度，`font-style`可以设置是否为斜体

比如可以让标头不要加粗效果：

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: normal; /* Add this */
}
```

这些属性清楚地说明了要内容与样式分离，不应该这么做：

```css
/* (You probably shouldn't do this) */
em {
  font-weight: bold;
  font-style: normal;
}

strong {
  font-weight: normal;
  font-style: italic;
}
```

我不建议这么修改字体，更多内容 [Web Typography](./Chapter-14) 章节.

## 层叠

理解样式层叠优先级对于 css 来说很重要

网页 css 优先级：

* 浏览器默认样式
* 用户定义的样式
* 外部样式
* 界面特殊样式
* 内链样式(不建议这么做)

上面优先级是递增的，意味着优先级高的会覆盖优先级低的样式。例如，行内样式会取代浏览器默认样式。接下来重点讲解最后两种

![Diagram: external stylesheets pointing to page-specific styles pointing to inline styles](/images/css-cascade-0755f2.png)

接下来对比 `<style>` 的形式跟行内样式，虽然这两者都不太优雅，非得用的话建议优先使用`<style>`

### 内联样式

`<style>` 元素 一般添加在 `<head>` 里面，因为它是元数据，而不是具体内容。

在 `dummy.html` 文件添加如下代码：

```css
<head>
  <meta charset='UTF-8'/>
  <title>Dummy</title>
  <link rel='stylesheet' href='styles.css'/>
  <style>
    body {
      color: #0000FF;    /* Blue */
    }
  </style>
</head>
```

这些样式值作用于 `dummy.html`，`hello-css.html`界面不受影响，无误情况下，你会在浏览器看到相应效果

![Web page with all blue text due to page-specific styles overriding global CSS stylesheet](/images/page-specific-css-styles-example-99d6c8.png)

所有在 `styles.css` 文件定义的样式都可以 移植到 `<style>` 元素内。同样的语法，只是 `<style>` 会重写 `styles.css` 的内容。在这个例子中。你会看到 `<body>` 的字体颜色被修改为 蓝色

![Diagram: three page-specific CSS rules attached to three individual HTML documents](/images/page-specific-css-styles-c6b688.png)

内联样式的缺点是难以维护。如上图所示，当你想服用样式代码的时候。你只能复制黏贴，最好的复用方式，还是使用外部引用 `.css` 文件。

![Diagram: three web pages referring to a single global CSS stylesheet](/images/external-css-styles-b073ea.png)

虽然有时候内联样式很方便，但建议还是使用外部引入的方式添加样式。

### 行内样式

同样，你可以在元素的 `style` 属性中添加样式。如：

```html
<p>Want to try crossing out an <a href='nowhere.html'
   style='color: #990000; text-decoration: line-through;'>obsolete link</a>?
   This is your chance!</p>
```

行内样式优先级最高，与内联样式语法一样，但不能换行。

![Diagram: 10 CSS rules attached directly to 10 different HTML elements via inline styles](/images/inline-css-styles-are-bad-73261b.png)

如果你不想在全局 `styles.css` 给多个界面修改样式的话，你只能在每个界面的 `style` 属性里面修改。界面多的话，将会变得非常可怕。

所以，我们应该用 css classes 替换行内样式。我们将在 [CSS Selectors](./Chapter-06.md) 章节详解.

### 多样式

可用 `<link/>` 在同个界面引入多个样式，最佳实践是为你的网站区分样式，明确地给网站样式分类。

比如我们有个产品界面跟博客不一样，可以这么做：

```html
<!-- All product pages have this -->
<head>
  <link rel='stylesheet' href='styles.css'/>
  <link rel='stylesheet' href='product.css'/>
</head>
```

```html
<!-- While all blog posts have this -->
<head>
  <link rel='stylesheet' href='styles.css'/>
  <link rel='stylesheet' href='blog.css'/>
</head>
```

后面的`<link/>`样式会覆盖前者，建议将默认和全局样式写在 `styles.css`文件中，再按分类写特定的样式。(`product.css` 和 `blog.css`) 这样可以让你更好地管理文件和避免行内样式

## 总结

这章我们讲了很多内容样式分离，这不仅可以让我们复用样式，同时可以让我们为同个界面在不同情况引入不同样式。比如用户使用的是 手机、平板、或 PC ，更多内容参考[Responsive Design](./Chapter-10.md).

![Diagram: single HTML file rendered with separate mobile and desktop CSS styles](/images/responsive-css-b7a057.png)

作为网页开发者，我们都想用 css 完美还原原型。单独写样式很简单，但如果要快速准确地还原设计还是得下点功夫。

这章主要讲解了美化字体，但是 css 能做的还有更多。下个章节讲解怎么用 css 布局。

css 属性参考： [MDN’s CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
