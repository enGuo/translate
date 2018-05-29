---
layout: SpecialLayout
---

# 盒模型

上一章节介绍了文本 css 样式属性，这一节讲网页布局相关属性。

盒模型是决定网页布局的一套规则，在网页中每个 HTML 元素都被视为带有特定属性的盒子。网页元素挨着渲染，盒模型的作用就是定制化这套默认布局机制。

![Diagram: CSS stylesheet broken down into two parts (text formatting and the box model)](/images/html-css/css-html-and-the-box-model-9d82a2.png)

网页开发者很大一部分工作就是根据盒模型的规则将设计稿还原成网页。学完这章你就会知道，为什么要采用布局而不是直接用图片。

其实很简单，如果我们不把网页内容添加到 HTML，搜索引擎就无法抓取内容，同样不能做响应式网站[responsive](./Chapter-10.md),当然也无法加动效或用 JavaScript 添加交互行为。

这章涵盖了盒模型的核心部分：padding,border,margins,block boxes 和 inline boxes 你可以把它当做 css 内部盒模型的微布局，接下来的章节，会更多介绍各种复杂的网页布局

## 安装

首先创建 `css-box-model` 目录，然后新建 `boxes.html` 文件：

```css
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Boxes Are Easy!</title>
    <link rel='stylesheet' href='box-styles.css'/>
  </head>
  <body>
    <h1>Headings Are Block Elements</h1>

    <p>Paragraphs are blocks, too. <em>However</em>, &lt;em&gt; and &lt;strong&gt;
       elements are not. They are <strong>inline</strong> elements.</p>

    <p>Block elements define the flow of the HTML document, while inline elements
       do not.</p>
  </body>
</html>
```

还记得 [Hello, CSS](./Chapter-04.md) 吗，这个 HTML 引入了一个名为 `box-styles.css` 的层叠样式表，让我们先创建这个文件。

同样是用 Atom 来创建，如果你还不知道如何操作，可以回看 [Atom walkthrough](./Chapter-01.md)

## 块级元素和行内元素

在基础网页章节 [how CSS uses “boxes”](./Chapter-02.md) 了解了网页布局。 每个元素都作为盒子在渲染，分为块级和行内

![Diagram: comparison of block boxes with inline boxes](/images/html-css/inline-vs-block-boxes-f3e662.png)

每个 HTML 元素都有默认盒子类型。比如，`<h1>` 和 `<p>` 属于块级元素，`<em>` 和 `<strong>` 属于行内元素，让我们在 `box-styles.css` 中添加如下代码来更好地理解盒子：

```css
h1,
p {
  background-color: #dde0e3; /* Light gray */
}

em,
strong {
  background-color: #b2d6ff; /* Light blue */
}
```

`background-color` 属性作用于所选元素，我们可以看到标头和段落背景变成了灰色，而 em 和 strong 变成了淡蓝。

![Web page highlighting block boxes in gray and inline boxes in blue](/images/html-css/block-boxes-and-inline-boxes-7cfa0a.png)

这给我们展示了块级和行内非常重要的区别：

* **Block boxes** 在浏览器渲染中总是独占一行

* **width of block boxes** 继承父元素的宽度，这里展示位浏览器窗口的宽度

* **height of block boxes** 跟着内容自适应

* **Inline boxes** 不受 **vertical spacing** 影响

* **width of inline boxes** 由自身内容觉得，与父级无关

## 改变盒模型的表现形式

通过 css `display` 属性可以修改原型的盒类型。例如，把 `<em>` 和 `<strong>` 元素由行内变为块级，可以这么做：

```css
em,
strong {
  background-color: #b2d6ff;
  display: block;
}
```

现在这些元素就跟标头和段落一样独占一行了，对 `<a>` 和 `<img>` 同样有效。( 这两个元素默认为行内元素 )

![Web page showing what happens when you turn inline boxes into block boxes with the CSS display property](/images/html-css/turning-inline-into-block-boxes-772f4c.png)

然而我们并不建议将 `<em>` 和 `<strong>` 改为块级元素，所以让我们改回来：

```css
em,
strong {
  background-color: #b2d6ff;
  display: inline; /* This is the default for em and strong */
}
```

## Content, Padding, Border, and Margin

盒模型决定了元素在网页中的大小，它们都有以下四个属性 ( 行内和块级都有 )

* **Content** – 文本，图片，或者其他媒体内容
* **Padding** – 内容与边框的间距
* **Border** – 盒子 padding 和 margin 间的线条
* **Margin** – 盒子与盒子的间隔

每个元素在浏览器中都按这些 css 规则来渲染

![Diagram: content, padding, border, and margins making up the CSS box model](/images/html-css/css-box-model-73a525.png)

## Padding

从里到外讲，我们已经知道 content 了，所以从 padding 开始。`padding` 属性你懂得，就是定义元素的填充

```css
h1 {
  padding: 50px;
}
```

给每个 `<h1>` 标头，填充 50 像素，注意背景色是如何填充的，所有在边框里面的内容都将被填充。

![Web page showing increase in <h1> padding (background size increases)](/images/html-css/increasing-heading-padding-5a289d.png)

如果你想为不同方向设置不同值，可以这么做：

```css
p {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
```

你不仅可以使用像素作为 padding 的单位，同样使用基于根字体大小的 em 也可以 [`em` units](./Chapter-04.md)

### 缩写形式

把所有的属性都这么写确实很烦人，css 提供了一种缩写形式可以简写 top/bottom 和 left/right，只用一行就可以表示所有 padding 的值。

![Diagram: CSS padding property with vertical and horizontal values highlighted](/images/html-css/padding-shortform-two-values-a7ed4c.png)

就像：

```css
p {
  padding: 20px 10px; /* Vertical  Horizontal */
}
```

这个四值还有其他不同的情况

![Diagram: CSS padding property with top, right, bottom, and left values highlighted](/images/html-css/padding-shortform-four-values-93c021.png)

比如

```css
p {
  padding: 20px 0 20px 10px; /* Top  Right  Bottom  Left */
}
```

是否要使用缩写并没有太大的争议意义，有人认为缩写比较简洁，当然也有人认为不缩写更容易直观。在接下来的网页开发中，你都可以能遇到。

## Borders

继续我们的讲解，边框是原生内容和填充外的一条线，它的语法之前都没碰到过。首先定义线条的粗细再者是它的风格最后是颜色。

![Diagram: CSS border property showing size, style, and color syntax](/images/html-css/css-border-syntax-d8ba17.png)

试着给 `<h1>` 添加边框，在 `box-styles.css` 中编写：

```css
h1 {
  padding: 50px;
  border: 1px solid #5d6063;
}
```

在浏览器中，可以看到标头周围有一条灰色的线。边框也可以设置单边：

```css
border-bottom: 1px solid #5d6063;
```

边框也可以用于调试，添加 `border:1px solid red` 可以让你清楚的看到元素的大小，这样你就可以根据这些来修改你的 css 了。

更多边框样式请查看 [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)。

## Margins

Margins 定义了元素边框以外的间距，也就是盒子与盒子的间距。让我们给 `<p>` 添加 50 像素下边距：

```css
p {
  padding: 20px 0 20px 10px;
  margin-bottom: 50px; /* Add this */
}
```

`margin` 像 `padding` 一样也有缩写形式 [shorthand formats](#shorthand-formats)

Margins 和 padding 在很多情况下能实现一样的效果，所以有时很难决定到底用哪个。下面列举一些如何选择及原因：

* padding 有背景色，而 margin 没有
* Padding 包含在可点击区域里面，margin 不是
* Margins 会在垂直方向上会塌陷 padding 不会 (将在下一部分讲解)

如果以上还是没能帮你决定使用 `padding` 还是 `margin`。别纠结，随便用一个，反正在 css 的世界里，实现某效果的方式不止一种。

### 行内元素的 Margins

margin 在行元素和块元素的表现不同，行元素会忽略 top 和 bottom 的 margin，例如：

```css
strong {
  margin: 50px;
}
```

水平方向的 margin 正常工作，但垂直方向就没效果了。

![Web page demonstrating lack of vertical margins on inline boxes](/images/html-css/margins-on-inline-elements-4c569c.png)

如果我们用 `padding` 替换 `margin`，会发现 padding 垂直方向并不能正常工作。

![Web page demonstrating vertical padding on inline boxes](/images/html-css/paddings-on-inline-elements-fb52d0.png)

这个原因归咎于行内元素中的文本属于流式布局，如果你希望垂直距离，可以用使用块级元素( [change an element’s box type](#改变盒模型的表现形式) )

如果你还不知道为什么 top,bottom margin 不能工作，记得检查一下 display 属性的类型，这将对你很有帮助。

## 外边距垂直塌陷

盒模型有个诡异的问题，外边距垂直塌陷。当你的元素挨着加 margin 的时候，垂直方向的外边距会塌陷，即外边距会采用最大的而不是它们的和。

例如：

```css
p {
  padding: 20px 0 20px 10px;

  margin-top: 25px;
  margin-bottom: 50px;
}
```

每个段落都有 50 像素的下外边距，期望是 75 像素，但结果是只有 50 像素，因为较小的上外边距与较大的下外边距合并了。

![Diagram: comparison of an uncollapsed vertical margin with a collapsed vertical margin](/images/html-css/vertical-margin-collapse-bba78e.png)

这种情况对于你要添加最小外边距时非常有用

### 阻止外边距垂直塌陷

有时外边距塌陷也很烦，那么如何阻止呢，可以这么做：

```html
<p>Paragraphs are blocks, too. <em>However</em>, &lt;em&gt; and &lt;strong&gt;
elements are not. They are <strong>inline</strong> elements.</p>

<div style='padding-top: 1px'></div>  <!-- Add this -->

<p>Block elements define the flow of the HTML document, while inline elements
do not.</p>
```

下部分再讲解 `<div>`，现在重点是每个连续的元素才会出现塌陷，给每个段落间添加零高度(padding-top)，这样它就可以阻止塌陷。

![Diagram: inserting an empty <div> to force vertical margins to uncollapsed](/images/html-css/preventing-margin-collapse-4b96ca.png)

padding 不会塌陷，所以另外一个解决方式是用 `padding` 替换 `margin`，然而这只适用于你不需要用到 margin 的其他特性。( 目前，我们就采用 `div`的方式解决 )

第三种方式是值定义 top 或 bottom 中的一个。只有就不会塌陷了。

最后，[flexbox](./Chapter-08.md) 布局不会出现塌陷情况，所以对于现代浏览器来说这都不是问题。

## 普通盒模型

至此，我们添加的每个 HTML 元素都有它的意义。事实上，很多时候我们会使用普通的标签，如 div 和 span

div 和 span 都是没有任何语义的容器元素，可以任意添加 css 样式。比如有时你想用一个不可见的盒子阻止外边距合并，或者你想把一些文章的段落组合起来添加文本样式。

接下来我们将大规模使用 div 首先在`boxes.html`文件创建一个按钮：

```html
<div>Button</div>
```

接着在 `box-styles.css` 添加关联样式。添加一些不一样的样式 [`border-radius` property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius):

```css
div {
  color: #fff;
  background-color: #5995da;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border: 2px solid #5d6063;
  border-radius: 5px;
}
```

在浏览器里可以看到一个大的蓝色按钮

![Web page using <div> elements for buttons](/images/html-css/generic-div-for-button-70dc27.png)

当然，`div` 也可以用这些样式，正如之前我们用它来阻止外边距塌陷问题。但其实我们应该选取特定的 div，而不是所有。这就是下一章节[class selectors](./Chapter-06.md)所要介绍的。

div 和 span 的唯一区别是 div 是块级，span 是行内

## 明确大小

至此，我们都是让 html 元素自适应。如果你给`<em>`添加更多的文本，padding,border,margin 都会往外扩展。

![Web page showing an <em> element expanding as more content is added](/images/html-css/auto-content-width-for-em-element-85d5d2.png)

大多数时候我们是希望明确大小的，比如指定 250 像素的侧边栏，css 提供了 `width` 和 `height` 属性。它会取代默认大小：

```css
div {
  /* [Existing Declarations] */
  width: 200px;
}
```

不管浏览器窗口多大，按钮就只有 200 像素宽且在界面的最左边

![Web page showing an explicit CSS width property on a button](/images/html-css/explicit-width-on-generic-div-78d595.png)

注意如果你加长按钮文本内容，文本会自动换行，且垂直高度会自动撑大。你可以用[`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) 和 [`overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) 属性改变默认表现形式。

## 内容和边框

`width` 和 `height` 只是设置盒子内容的大小。padding 和 border 在明确大小后依然会叠加。例子中，你会看到 244 像素的按钮，即便它明确设置了 `width: 200px`。

![Diagram: content-box measurements adding padding and border to width of the element](/images/html-css/box-sizing-content-box-09f48a.png)

可以说这是反常规的，比如一个 `600px` 的容器里面有是三个 `width:200px` 的盒子，当它们穿不下，因为他们都有 1 像素的边框(所以实际宽度为 202 像素)

幸运的是，css 允许你用`box-sizing`改变这种盒子宽度计算模式。默认值是 `content-box`，结果就是之前描述的。让我们看`border-box`会怎么样：

```css
div {
  color: #fff;
  background-color: #5995da;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border: 2px solid #5d6063;
  border-radius: 5px;

  width: 200px;
  box-sizing: border-box; /* Add this */
}
```

现在盒子的实际宽度就变成 `200px`了包括 padding 和 border，这也意味着内容的宽度变成了自适应：

![Diagram: border-box measurements including padding and border with the width of the element](/images/html-css/box-sizing-border-box-ace2be.png)

这样就比较直观，所以 `border-box` 在现代网页开发很常见。

## 对齐

水平对齐对网页开发来说很常见，盒模型提供了非常多实现方式。之前讲过的[`text-align` property](./Chapter-04.md)是让块级元素里面的内容对齐，盒子对齐是另一种情况。

试着给我们的网页加如下样式：

```css
body {
  text-align: center;
}
```

有三种水平对齐块级元素的方式："auto-margin" 用于居中，"float" 用于左右对齐，"flexbox" 是一整套对齐方式。`text-align` 属性对块级元素是无效的。

### Centering With Auto-Margins

[Floats](./Chapter-07.md) 和 [flexbox](./Chapter-07.md) 单独将，先来讲下 Auto-Margins，如果你给元素的 left 和 right margin 值设置为 auto，它将会水平居中。

例如：

```css
div {
  color: #fff;
  background-color: #4a90e2;
  font-weight: bold;
  padding: 20px;
  text-align: center;

  width: 200px;
  box-sizing: border-box;
  margin: 20px auto; /* Vertical  Horizontal */
}
```

记住，这只对有明确宽度的块级元素有效。如果没有设置宽度，元素宽度跟浏览器一样宽，居中对齐就没意义了。

## 重置样式

你应该有注意到网页有白边，那是因为浏览器有默认的 margin/padding，每个浏览器的 html 元素默认样式不一样，这非常不利于样式统一。

![One web page showing white border due to default margin/padding and another web page without the white border after a universal reset](/images/html-css/resetting-box-sizing-and-margins-72ff64.png)

可以尝试用 `*` 选择器给所有元素重写 样式如：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

这个选择器左右与所有 html 元素，并且重置网页的 margin 和 padding 属性。同时，我们把 boxes 设置为了 `border-box`。( ps：练习中可以这么做，但实际开发。不建议全局覆盖。应该视情况重置浏览器默认样式。)

## 总结

我们将在以后遇到更多复杂布局、结构的网页，接触更多的盒模型。现在，我们就把它当做一个 css 的工具，记住那些概念：

* 一切皆盒子
* 盒子分为行内和块级
* 盒子包含：内容，内边距，外边距，边框
* 相互影响的规则
* 掌握盒模型，意味着你能做任何布局

看似 css 只有简单的那些属性，但如果你去分析你访问的网站的盒模型，你将会发现有趣的东西。之前说的选择器，我们将在下一章节讲解。
