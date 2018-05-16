---
layout: SpecialLayout
---

# 选择器

在[Links and Images](./Chapter-04.md)章节中，我们学习了如何引用其他文件。有点类似，选择器可以单独选中某个元素而不用选取全部元素。

![Diagram: CSS selector connecting a CSS rule to an HTML element](/images/css-selectors-1f0064.png)

如果不想让网页看起来很单调，那就用选择器。打比方说，我想让这个段落变蓝色，另一个段落变黄色。目前我们学到的只能让整个段落变蓝(或者黄)。

到目前为止，我们用到的只有 "类型选择器" ，它会匹配网页的某类元素。在这一章节，我们将介绍更多的方法，如类选择器，子孙选择器，伪类选择器，和 Id 选择器。

## 安装

这章例子中，我们只需要一个 HTML 文件和一个样式表，新建一个`css-selectors` 目录和 `selectors.html` 文件，添加代码：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>CSS Selectors</title>
    <link rel='stylesheet' href='styles.css'/>
  </head>
  <body>
    <h1>CSS Selectors</h1>

    <p>CSS selectors let you <em>select</em> individual HTML elements in an HTML
       document. This is <strong>super</strong> useful.</p>

    <p>Classes are ridiculously important, since they allow you to select
       arbitrary boxes in your web pages.</p>

    <p>We’ll also be talking about links in this example, so here’s
       <a href='https://internetingishard.com'>Interneting Is Hard</a> for us to
       style.</p>

    <div>Button One</div>

  </body>
</html>
```

继续创建一个 `style.css` 样式文件，用它来学习选择器。

如果你只是刚好看到这篇教程，可以快速阅读 [Introduction](./Chapter-01.md) 章节学习如何使用 Atom 编辑器。

## 类选择器

"类选择器" 可以让你只对某类 HTML 元素起作用，它可以让你区分同类型的元素。比如在上一章节[previous chapter](./Chapter-05.md)我们有两个 `<div>`元素，但我们只想给其中一个天津样式。类选择器需要做两件事：

* 给 HTML 元素添加 `class` 属性
* 在样式表中匹配类选择器

![Diagram: CSS class selector connecting a CSS rule to a class attribute on an HTML element](/images/class-selector-ce3fd0.png)

在例子中，我们可以给第一个段落添加样式与之区分其他段落，就像新闻的的概要。首先，给它添加`class`属性。

```html
<p class='synopsis'>CSS selectors let you <em>select</em> individual HTML
   elements in an HTML document. This is <strong>super</strong> useful.</p>
```

接着我们就可以在 css 中这么选取 `<p class='synopsis'>` 的类：

```css
.synopsis {
  color: #7e8184; /* Light gray */
  font-style: italic;
}
```

规则将作用于具备相同 `class` 属性的元素。注意类名前面的 `.` ，这是用来跟之前用到的元素选择器区分。

![Web page highlighting an italicized <p> element styled via a class selector](/images/selecting-a-paragraph-with-class-selector-05f491.png)

### 类命名规范

虽然 `class` 可以随便命名，但标准命名规范是所有的类都用小写，用连字符代替空格，就像目录的命名方式。

添加 `class` 属性并不能改变元素的语义，仅仅是给样式表调用罢了。应该避免仅凭外观来命名类，比如用 `.italic` 类，在复杂情况下将很难区分。相反，用 `.synopsis` 可以很好地定义概述的样式。

## 好用的 DIV

可以给所有元素添加类，而不仅限于 `<p>`元素。你会发现在上一章节接触的 `<div>` 和 `<span>` 非常适合用类来添加样式以美化我们的网页。

![Web page highlighting a button <div> element styled via a class selector](/images/selecting-button-with-class-selector-a32bd4.png)

我们来用类选择器替换上一章节中按钮的 `div` 选择器，如：

```css
.button {
  color: #fff;
  background-color: #5995da; /* Blue */
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border: 2px solid #5d6063; /* Dark gray */
  border-radius: 5px;
  width: 200px;
  margin: 20px auto;
}
```

同样我们需要给 `selectors.html` 中的 `<div>` 添加一致的类名：

```html
<div class='button'>Button One</div>
```

现在，样式仅对有该类名的 `div` 有效了，而非全部 div 元素。

## DIV 容器

`div` 并没有语义，非常适合网页展示部分。用 `<div>` 包裹其标签可以在实现大型布局的同时兼顾 SEO。

![Diagram: people see <div> element with margins, robots do not see it](/images/container-divs-7d53f6.png)

例如，我们可以用上一节[auto-margin technique](./Chapter-05.md)的知识创建固定布局。首先，用 `<div>` 包裹其他内容，然后取个特别的类名：

```html
<body>
  <div class='page'>  <!-- Add this -->
    <h1>CSS Selectors</h1>

    <p  class='synopsis'>CSS selectors let you <em>select</em> individual HTML
    elements in an HTML document. This is <strong>super</strong> useful.</p>

    <p>Classes are ridiculously important, since they allow you to select
    arbitrary boxes in your web pages.</p>

    <p>We’ll also be talking about links in this example, so here’s
    <a href='https://internetingishard.com'>Interneting Is Hard</a> for us to
    style.</p>

    <div class='button'>Button One</div>
  </div>  <!-- And this -->
</body>
```

接着，在 `styles.css` 中添加样式：

```css
.page {
  width: 600px;
  margin: 0 auto;
}
```

现在无论你如何改变窗口大小，网页都将保持 600 像素宽，我们可以用同样的方式处理 `button`，但现在我们先把所有元素都嵌套在容器中。

![Web page highlighting wrapper <div> around entire document](/images/centering-page-with-div-container-e3c8aa.png)

这样我们就可以实现不同的布局，比如，我们有个侧边栏。可以把所有的元素都放在另一个类名为`.sidebar` 的 `div` 中。如何实现可以看[next chapter](./Chapter-07.md)。现在先学习给元素添加不同选择器。

## 样式复用

可以给多个元素添加相同的类名，意味着我们可以复用任何定义过的样式。比如我们只需要给另一个按钮添加相同的类名：

```html
<div class='button'>Button One</div>
<div class='button'>Button Two</div>
```

我们将看到两个相同样式的按钮，复用让开发变得更便捷，但我们要修改 button 的样式时，只需要修改一个地方。

![Diagram: Two arrows coming from one CSS rule to two different HTML elements](/images/reusing-css-styles-9e43c5.png)

## 多个类名

我们可以给同个元素添加多个类名，比如想给第二个按钮添加不同的样式，我们可以添加另一个类名。后面的样式会覆盖之前定义的样式。

![Diagram: Two arrows coming from two CSS rules to one HTML element](/images/modifying-classes-48bd19.png)

接下来，这么做：

```html
<div class='button call-to-action'>Button Two</div>
```

接下来我们就可以定义不同的样式了：

```css
.call-to-action {
  font-style: italic;
  background-color: #eeb75a; /* Yellow */
}
```

### 样式顺序

现在我们会遇到两件事：

* 新增样式，如 `font-style`
* 样式覆盖，如 `background-color`

可以通过样式出现的先后顺序决定样式覆盖是否要覆盖，比如 `.call-to-action` 在 `.button` 后定义，则 `.call-to-action` 将覆盖与 `.button` 重复的样式。仅是在样式表中的顺序，而与 `class` 属性中顺序无关：

```html
<!-- These result in the same rendered page -->
<div class='button call-to-action'>Button Two</div>
<div class='call-to-action button'>Button Two</div>
```

后面将讨论更为复杂的情况。

## 子选择器

你会发现当添加 `.synopsis` 给元素字体添加斜体效果后，就无法区分 `<em>` 元素作用的文本了。我们虽然可以给 `<em>` 添加类名来新增样式，但这通常会变得难以维护。我们希望 `.synopsis` 作为一个拥有独立样式的组件。( 不需要为了修改某些样式而改变 HTML )

![Web page with span of text inside another element styled via a descendant selector](/images/selecting-em-with-descendant-selector-8050a5.png)

这时，"子选择器" 就派上用场了。它可以所用于所选元素下的所有指定元素。比如：

```css
.synopsis em {
  font-style: normal;
}
```

添加完样式后，`<em>` 字体会变成普通字体。之前的斜体效果将对 `<em>` 无效。

![Diagram: single arrow coming from a compound CSS rule to an HTML element inside another HTML element](/images/descendant-selectors-f52d49.png)

子选择器不仅限于类选择器，我们可以使用任意组合的选择器。例如，我们想选中所有标头下的 `<em>` 元素：

```css
h1 em {
  /* Some other styles */
}
```

这章的目的是让你可以准确地给你选中的元素添加样式。详情参阅[over at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors)

### 过度嵌套问题

后代选择器虽然可以任意嵌套，但建议不要做：

```css
/* Try to avoid this */
.article h2 .subheading em {
  /* Special styles */
}
```

这样的做的话，遇到 html 结构时，样式无法复用。

```html
<div class='article'>
  <h2>
    <span class='.subheading'>This is <em>really</em> special text</span>
  </h2>
</div>
```

当你使用了后代选择器后，很多样式就限死了。如 `<div class='article'>` 中的 `<h2>`，由于嵌套关系，不在后代选择器中的 `<h2>` 得另外添加样式。

## 链接的伪类

至此，我们接触的都是静态样式。在网页开发中，有些样式属于交互型的。比如 `<a href></a>` 标签。用户可能触发点击，悬浮，访问等行为。

![Diagram: pseudo-class selector connecting a CSS rule to a user’s hover state over a particular HTML element](/images/pseudo-classes-99188b.png)

你可以用 "伪类" 解决该类问题。

### 链接默认样式

链接的伪类有：

* `:link` – 为访问的链接
* `:visited` – 访问过得链接
* `:hover` – 悬浮的时候
* `:active` – 鼠标或手指按住不放的时候

效果参阅[keyword colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

```css
a:link {
  color: blue;
  text-decoration: none;
}
a:visited {
  color: purple;
}
a:hover {
  color: aqua;
  text-decoration: underline;
}
a:active {
  color: red;
}
```

如果你没有访问过这个界面，将会看到蓝色的链接，访问过后将变成紫色，悬浮会变成绿色，点击变红。

### 已访问的悬浮状态

悬浮效果可以同时作用于访问过及未访问的链接，如果访问过的跟悬浮是相同的样式，可以这么做：

```css
a:visited:hover {
  color: orange;
}
```

这将会给访问和悬浮添加特定的样式，奇怪的是 `a:active` 由于一些复杂的 css 内部原因，当你点击的时候，链接并不会变红。

### 访问及点击状态

同样我们可以这么做：

```css
a:visited:active {
  color: red;
}
```

现在，你可以修改链接的默认样式了。

## 按钮的伪类

伪类不仅可以用于元素选择器，还可以是类选择器，我们将从实现一个按钮来深入讲解：

### a 标签替换 div

首先，我们需要用 `<a href` 替换 `<div>`元素：

```html
<a class='button' href='nowhere.html'>Button One</a>
<a class='button call-to-action' href='nowhere.html'>Button Two</a>
```

会看到如下效果：

![Web page showing buttons with broken CSS styles](/images/broken-button-styles-0d05d0.png)

跟之前不太一样，因为 a 标签是行内元素，所以我们需要把它转换为块级元素，并且移除一些链接的默认样式。

### 按钮样式

让我们从`:link` 和 `:visited` 开始，虽然跟上一部分有点类似，但考虑到我们这个是按钮。所以让未访问和访问的颜色一致：

```css
.button:link,                 /* Change this */
.button:visited {
  /* Change this */
  display: block; /* Add this */
  text-decoration: none; /* Add this */

  color: #fff; /* The rest is the same */
  background-color: #5995da;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border: 2px solid #5d6063;
  border-radius: 5px;

  width: 200px;
  margin: 20px auto;
}
```

注意 `:link` 和 `:visited` 这两个伪类。没有它们将无法修改 `a:link` 默认样式。接下来处理悬浮样式：

```css
.button:hover,
.button:visited:hover {
  color: #fff;
  background-color: #76aeed; /* Light blue */
}
```

按钮悬浮时是淡蓝色，那我们让按住时变深色，可以通过 `:active` 修改：

```css
.button:active,
.button:visited:active {
  color: #fff;
  background-color: #5995da; /* Blue */
}
```

好了，现在我们可以复用 `.button` 作用于任何想具备按钮样式的 html 元素。

### 另一个按钮

让我们修改另一个按钮，它看起来是黄色背景。可以这做：

```css
.call-to-action:link,
.call-to-action:visited {
  font-style: italic;
  background-color: #eeb75a; /* Yellow */
}

.call-to-action:hover,
.call-to-action:visited:hover {
  background-color: #f5cf8e; /* Light yellow */
}

.call-to-action:active,
.call-to-action:visited:active {
  background-color: #eeb75a; /* Yellow */
}
```

特殊样式我们可以用 `.call-to-action` ，但我们仍然需要 `.button`提供的公共按钮样式。(如 padding,border radius 和 font weight)

## 其他伪类

链接状态只是伪类的一种，更多参阅[bunch of other pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 例如 `:last-of-type` 用于选择最后一个元素

例如，选择最后一个段落：

```css
p:last-of-type {
  margin-bottom: 50px;
}
```

不许要添加 `class` 属性就可以选中最后一个段落：

![Web page showing bottom margin of the last paragraph on the page, styled via a :last-of-type pseudo-class selector](/images/last-of-type-pseudo-class-8232e6.png)

同样我们可以用 `:first-of-type` 代替 `.synopsis` 来给第一个段落添加样式：

```css
p:first-of-type {
  color: #7e8184;
  font-style: italic;
}
```

建议用这个方法替代之前的旧方法，例如，如果我们的概要用的是 `<p>` 元素，如果这些 `<p>` 包裹在 `<div class='synopsis'>` 那么我们就得相应地修改 css。 另一方面，伪类让我们可以添加样式不用更改 html，这会让我们的代码看起来非常简洁。

### 警告

伪类方法看似有些复杂，但我们还是经常会用到。要注意的是 `:first-of-type` 和 `:last-of-type` 都是操作父元素的。比如 `p:first-of-type` 是选中每个容器元素里面第一个 `<p>`。

如果我们把元素加到带有 `.page` 类的 `<div>` 中，思考下会发生什么：

```html
<div class='sidebar'>
  <p>If this page had a sidebar...</p>
  <p>We’d have some problems with pseudo-classes.</p>
</div>
```

因为伪类 `p:first-of-type` 是选中父元素下的 `<p>` ，所以样式还是有效果。但只有通过学习 [next chapter](./Chapter-07.md)我们才可以获得正确的侧边栏。 imited to the parent element.

如果你只想选中 `<div class='page'>` 里面的 `<p>`, 你应该用 [child selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors) 这么处理：

```css
.page > p:first-of-type {
  color: #7e8184;
  font-style: italic;
}
```

html 和 css 的实现方式非常多。有用伪类的，也有直接在 html 中加 class 属性的，这完全取决于你。

## ID 选择器

ID 选择器跟 类选择器不一样，在一个界面里 ID 只能有一个，意味着不能复用。ID 选择器用的是 ID 属性：

```html
<a id='button-2' class='button' href='nowhere.html'>Button Two</a>
```

在 `style.css` 使用 `#` 来选择

```css
#button-2 {
  color: #5d6063; /* Dark gray */
}
```

可惜只能通过下面的方式复用：

```css
/* (This is painful to maintain) */
#button-2,
#button-3,
#checkout-button,
#menu-bar-call-to-action {
  color: #5d6063;
}
```

所以，基本上不用 ID 选择器来写样式，更多的使用类选择器

### 锚点

`id` 属性之所以不一样是因为有种 "URL" 看起来非常像 ID 选择器：

![Diagram: syntax of a URL: scheme (https://), domain (example.com), path (/selectors.html), fragment (#button-2)](/images/fragment-url-syntax-d310e8.png)

例如，你想跳到某个锚点，可以这么做：

```html
<!-- From the same page -->
<a href='#button-2'>Go to Button Two</a>

<!-- From a different page -->
<a href='selectors.html#button-2'>Go to Button Two</a>
```

当你点击第二个 a 标签时，你会看到浏览器变化了，并且跳转到了对应的位置。( 前提是你的浏览器内容足够多到出现滚动条，你才会明细地感觉到跳转 )

![Diagram: two arrows from URL fragments to two HTML elements and two arrows from CSS rules to those same elements](/images/dependency-between-fragments-and-css-4e4425.png)

这也是避免使用 ID 选择器的原因，设想一下，如果你在标头同时用了 URL 和 ID 选择器，在编辑网址时忘记更新样式表，会非常糟糕 (ps:译者没看懂!)

## CSS Specificity

在这章的前半部分，我们讨论了样式覆盖问题。 [order matters](#modifying-class-styles) 规则定义样式从上至下，后者覆盖前者。

![Diagram: Four CSS rules with same specificity applied in order](/images/css-rule-order-3edc42.png)

但并非所有的样式都会被后者覆盖，css 存在优先级问题，也就是说不同的选择器权重不一样。这意味着，优先级搞的会覆盖优先级低的样式。

测试一下：

```css
.call-to-action:link,
.call-to-action:visited {
  background-color: #d55c5f; /* Red */
}
```

如果我们添加 ID 选择器会发生什么：

```css
#button-2 {
  background-color: #d55c5f; /* Red */
}
```

ID 选择器的优先级比 类选择器高。所以它会覆盖之前的样式，无论它在代码里的书写顺序如何。

![Diagram: Four CSS rules. Third one has higher specificity, so fourth one is ignored.](/images/css-specificity-and-rule-order-ec25f3.png)

我们之前用到的选择器优先级如下：( 从高到低 )

* `#button-2`
* `.button:link`
* `a:link` and `.synopsis em` (they’re equal)
* `.button`
* `a`

可以了解一下 [BEM](http://getbem.com/introduction/)， BEM 是一套类选择器的命名规则，它可以解决部分优先级问题。

BEM 超出了本教程的讨论范围，我们可以保持一种类名编写习惯，让优先级保持平级。

## 总结

本章我们亲自体验了类选择器，后代选择器，伪类选择器，ID 选择器以及如何修改修改链接默认样式。最常用的还是类选择器，换句话说，在你的网页开发生涯中你将经常用到它。

从现在开始，要学习的东西越来越多了。用 HTML 和 css 实现网页布局的方式非常多，在接下来的章节要更加用心了。

根据[separation of content from presentation](./Chapter-02.md) 介绍的关注点分离，可以总结出，开发一个网页应该是从添加 HTML 内容到添加 `class` 属性，最后编写样式。

本章介绍了很多 css 选择器，下章我们将介绍如何使用 [float](./Chapter-07.md) 实现网页布局。
