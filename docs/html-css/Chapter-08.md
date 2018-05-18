---
layout: SpecialLayout
---

# flexbox

有别于 [Floats](./Chapter-07.md)，Flexbox 布局不仅可以水平定位，还可以处理对齐，方向，顺序以及元素的大小。

![Diagram: comparison of flexbox alignment, direction, order, and size properties](/images/flexbox-layouts-7abd58.png)

网页开发发生了巨大的变化，所以有必要了解下历史。在过去十几年里，floats 在处理复杂网页布局中起到了重要的作用，它可用于低版本浏览器。开发者们用它创建了非常多的界面。这意味着我们难免会碰到使用 float 的网页。( 所以上一章节还是有必要学习的 )

起初 float 适用于实现杂志风格的布局 [Floats for Content](./Chapter-07.md)。 在上一章中，float 在处理不同布局的时候还是会有一些限制。就算是一个简单的侧边栏布局，有时也需要用 hack 技术。flexbox 的出现就是为了打破这些限制。

我们会发现越来越多的开发者开始用 flexbox 来开发网站。我们建议尽可能使用 flexbox ，除了你需要用 floats 让文本围绕一个盒子( 就像杂志布局 )或者你需要兼容老浏览器。

![Diagram: CSS floats for text wrapping around a box versus flexbox for the rest of the page layout](/images/flexbox-vs-floats-418bf3.png)

本章，我们将一步步探索 flexbox 布局原理。你将会用它愉快地实现布局。

## 安装

本章例子比较简单，会介绍 flexbox 的所有属性，最终网页看起来像这样：

![Web page with flexbox-based layout](/images/footer-flexible-items-static-widths-af0a32.png)

新建 `flexbox` 目录，再创建`flexbox.html`文件：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Some Web Page</title>
    <link rel='stylesheet' href='styles.css'/>
  </head>
  <body>
    <div class='menu-container'>
      <div class='menu'>
        <div class='date'>Aug 14, 2016</div>
        <div class='signup'>Sign Up</div>
        <div class='login'>Login</div>
      </div>
    </div>
  </body>
</html>
```

接着创建 `styles.css` 文件，我们会用 flexbox 取代 auto-margin 的方法去居中元素。

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu-container {
  color: #fff;
  background-color: #5995da; /* Blue */
  padding: 20px 0;
}

.menu {
  border: 1px solid #fff; /* For debugging */
  width: 900px;
}
```

最后下载 [download some images](https://internetingishard.com/html-and-css/flexbox/flexbox-images-449705.zip) 图片后，解压到 `flexbox` 目录，会有一个 images 目录。看起来像这样：

![Screenshot of project files](/images/project-files-5cb6e0.png)

## Flexbox 概览

Flexbox 有两种类型的盒子："flex container" 和 "flex items"。flex 容器用于将 flex items 组合起来一起定义位置。

![Diagram: flex container as a highlighted container wrapping grayed out elements versus flex items as highlighted boxes inside the container](/images/flex-container-and-flex-items-6234bb.png)

flex 容器下的子元素就成为 flex 子项目。每个 flex 子项目可以被单独处理，不过这取决于容器如何定义他们的布局方式。flex 子项目的目的是让容器知道有多少元素需要定位。

和浮动布局一样，Flexbox 可以作用于所有嵌套元素。在容器中处理子项目，同样这些子项目可以作为容器处理它的子元素。以此类推，处理嵌套元素布局的基本原理都是一样的。

## Flex 容器

使用 Flexbox 的第一步是让元素变为 flex 容器。我们将 display 的值设置为`flex`来告诉浏览器把盒子的默认模型修改为 flexbox，就像[CSS Box Model](./Chapter-05.md)章节介绍过得。

就像这样：

```css
.menu-container {
  /* ... */
  display: flex;
}
```

用了这个就可以使用，flex 相关的属性了。明确定义 flex 容器意味着你可以讲 flexbox 跟其他盒模型混合着用。(e.g., 在 [Advanced Positioning](./Chapter-09.md) 会介绍).

![Diagram: Mixing and matching flexbox layout with block boxes and floats](/images/enabling-flexbox-dd3b59.png)

现在就可以处理 flex 子项目了。

## 对齐 flex 子项目

接着你可以用 `justify-content` 属性让 flex 子项目水平对齐。像这样：

```css
.menu-container {
  /* ... */
  display: flex;
  justify-content: center; /* Add this */
}
```

效果跟给 `.menu` 元素添加 `margin:0 auto`是一样的，但我们是跟元素添加属性(flex 容器)而不是 flex 子项目。跟处理其他布局稍有不同。

![Diagram: flex-start (3 left-aligned boxes), center (3 center-aligned boxes), flex-end (3 right-aligned boxes)](/images/flex-justify-content-alignment-ea129c.png)

`justify-content` 的其他值：

* `center`
* `flex-start`
* `flex-end`
* `space-around`
* `space-between`

将 `justify-content` 改为 `flex-start` 和 `flex-end`。会让元素在浏览器窗口中左和右对齐，之后再改回 `center` ，最后两个值仅适用于有多个 flex 子项目时。

## 处理多个子项目

你可能会说，我用 float 也可以实现左右对齐，居中对齐。确实，现在你还不能感受 flexbox 的强大。但是如果容器中有多个子项目的时候，`justify-content` 属性还能让容器内的元素等分布局。

![Diagram: space-around (3 boxes with equal space between them and their container), space-between (3 boxes with spaces between them, but not between their container)](/images/flex-justify-content-distribution-b0ee9c.png)

像这样：

```css
.menu {
  border: 1px solid #fff;
  width: 900px;
  display: flex;
  justify-content: space-around;
}
```

效果是这样的：

![Web page showing menu bar <li> elements laid out with space-between](/images/menu-bar-flex-space-around-e4b5a5.png)

`space-between` 值有点类似，但子项目会有特殊的间距。赶紧试一下：

```css
justify-content: space-between;
```

当然你可以使用 `center`，`flex-start`，`flex-end`，目前就先使用 `space-between`。

## 组合 flex 子项目

flex 容器只能影响一级子元素。所以必要时，我们需要组合子元素来实现 flex 布局。比如把需要作用的元素添加`<div>`。

![Diagram: wrapping two flex items in a <div> to eliminate one of the flex items](/images/grouping-flex-items-1bb642.png)

让我们测试一下：

```html
<div class='menu'>
  <div class='date'>Aug 14, 2016</div>
  <div class='links'>
    <div class='signup'>Sign Up</div>      <!-- This is nested now -->
    <div class='login'>Login</div>         <!-- This one too! -->
  </div>
</div>
```

这时 `.menu` 作为 flex 容器只能影响 `.date` 和 `.links` 两个元素。可以看到这两个元素分别在界面左和右边。

![Web page showing two menu bar <li> items wrapped in a container <div>](/images/menu-bar-grouped-items-1-31c157.png)

可以用同样的方法处理 `.links`：

```css
.links {
  border: 1px solid #fff; /* For debugging */
  display: flex;
  justify-content: flex-end;
}

.login {
  margin-left: 20px;
}
```

links 此时出现在右边，注意外边距同样起作用 [CSS Box Model](./Chapter-05.md)。相对于常规盒模型来说，外边距居中对于 flexbox 来说有别的意义，稍后介绍。

![Web page <li> elements laid out with nested flexbox containers](/images/menu-bar-grouped-items-2-50cec0.png)

白色边框我们是不需要的，所以你可以删掉它。

## 垂直对齐

处理完水平对齐，让我们来处理浮动布局做不到垂直对齐。

![Diagram: justify-content (left and right), align-items (top and bottom)](/images/align-items-vs-justify-content-4d380e.png)

添加如下 html：

```html
<div class='header-container'>
  <div class='header'>
    <div class='subscribe'>Subscribe &#9662;</div>
    <div class='logo'><img src='images/awesome-logo.svg'/></div>
    <div class='social'><img src='images/social-icons.svg'/></div>
  </div>
</div>
```

接着添加如下样式：

```css
.header-container {
  color: #5995da;
  background-color: #d6e9fe;
  display: flex;
  justify-content: center;
}

.header {
  width: 900px;
  height: 300px;
  display: flex;
  justify-content: space-between;
}
```

`.header`有固定高度，它的子元素将垂直对齐。官方称之为 "cross-axis" 对齐 ( 稍后会说明为什么 )，我们暂且叫它垂直对齐。

![Web page showing heading and icons vertically centered in a header container via the align-items property](/images/header-align-items-c53758.png)

垂直对齐通过给 flex 容器添加 `align-items` 属性：

```css
.header {
  /* ... */
  align-items: center; /* Add this */
}
```

`align-items` 有如下属性：

* `center`
* `flex-start`   (top)
* `flex-end`      (bottom)
* `stretch`
* `baseline`

![Diagram: flex-start (boxes at top of container), center (boxes in center of container), flex-end (boxes at bottom of container, stretch (boxes filling height of container)](/images/flex-align-items-26abfd.png)

这些值都直观明了，让我们深入了解 `stretch` ：

```css
.header {
  /* ... */
  align-items: stretch; /* Change this */
}

.social,
.logo,
.subscribe {
  border: 1px solid #5995da;
}
```

每个盒子继承了 flex 容器的高度，无论盒子的内容有多少。它可以用于有个你用浮动布局很难实现的应用场景：创建多个不同内容的等高列布局。

记住演示完属性效果后还原为之前的代码。

## flex 子项目的包裹方式

Flexbox 比 [float-based grids](./Chapter-07.md)更强大。它不仅可以实现栅格布局，还能改变布局方向，顺序等，我们将用到 `flex-wrap` 属性。

![Diagram: no wrapping (boxes flowing outside of container), with wrapping (boxes wrapping to next line in container)](/images/flex-wrap-b960c1.png)

修改 html：

```html
<div class='photo-grid-container'>
  <div class='photo-grid'>
    <div class='photo-grid-item first-item'>
      <img src='images/one.svg'/>
    </div>
    <div class='photo-grid-item'>
      <img src='images/two.svg'/>
    </div>
    <div class='photo-grid-item'>
      <img src='images/three.svg'/>
    </div>
  </div>
</div>
```

添加 css：

```css
.photo-grid-container {
  display: flex;
  justify-content: center;
}

.photo-grid {
  width: 900px;
  display: flex;
  justify-content: flex-start;
}

.photo-grid-item {
  border: 1px solid #fff;
  width: 300px;
  height: 300px;
}
```

一切正常，但是请注意观察，如果你额外添加多个元素到 flex 容器。比如给 `.photo-grid` 另外添加两张照片：

```html
<div class='photo-grid-item'>
  <img src='images/four.svg'/>
</div>
<div class='photo-grid-item last-item'>
  <img src='images/five.svg'/>
</div>
```

会这样：

![Web page with messed up layout due to no flexbox wrapping](/images/grid-no-flex-wrap-66c396.png)

可以用`flex-wrap`强制换行：

```css
.photo-grid {
  /* ... */
  flex-wrap: wrap;
}
```

有点像浮动布局，现在我们可以处理超出的 flex 子项目了。例如：

```css
.photo-grid {
  width: 900px;
  display: flex;
  justify-content: center; /* Change this */
  flex-wrap: wrap;
}
```

用浮动来实现这个可能会稍微复杂一点。

![Web page showing grid created from correct flexbox wrapping](/images/grid-with-flex-wrap-1da4da.png)

## 容器方向

容器可以设置子项目的水平或垂直方向。之前都是采用默认方向。

![Diagram: row (3 horizontal boxes), column (3 vertical boxes)](/images/flex-direction-9acadf.png)

flexbox 可以改变方向确实非常不错，比如：

```css
.photo-grid {
  /* ... */
  flex-direction: column;
}
```

这时替换了默认的 `row` 值，方向变成了列。

![Web page with grid turned into a vertical column of boxes](/images/flex-direction-column-1bb8a0.png)

响应式设计的意义是让 PC 跟 mobile 用户体验一致。对于手机布局有个比较重要的问题是，它是单列的。而 PC 是可以水平。这时你会发现`flex-direction`在创建[响应式布局](./Chapter-11.md)时多么有用。

### 对齐注意事项

注意列布局时，内容还是在左对齐。尽管我们使用了 `justify-content:center;`。当你改变了容器的方向，`justify-content` 属性也跟着一起变了。现在是垂直对齐而不是水平对齐了。

![Diagram: axes flipped when flex-direction is equal to column](/images/flex-direction-axes-b30e85.png)

可以用 `align-items` 属性事项列情况下的居中：

```css
.photo-grid {
  /* ... */
  flex-direction: column;
  align-items: center; /* Add this */
}
```

## flex 容器排序

目前我们的浏览器盒子的顺序跟元素在文档中的顺序一直，那怎么打破这种模式呢。

![Diagram: row (left to right), row-reverse (right to left), column (top to bottom), column-reverse (bottom to top)](/images/flex-direction-reverse-532d8f.png)

`flex-direction` 属性有两个值 `row-reverse` 和 `column-reverse` 属性。试一下：

```css
.photo-grid {
  width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row-reverse; /* <--- Really freaking cool! */
  align-items: center;
}
```

现在行排列从左到右变成了右到左。注意，行不是从 5 开始而是 3。这有很多应用场景 ( `column-reverse` 很适合手机布局 )，稍后介绍。

![Web page with grid rows displayed backwards (3, 2, 1 in first row and 5, 4 in second row)](/images/grid-direction-row-reverse-78cc12.png)

flexbox 出现前，用 css 实现排序相对于用 JavaScript 来说可能不太容易，但是我们之前有说过职责分离的问题，所以尽量用 css 实现布局。

## Flex 子项目排序

本章通篇讲解如何处理父容器下的所有一级子元素布局，但有时还是需要处理个别子项目，剩下的章节将介绍。

![Diagram: setting the order of a flex item individual with the order property](/images/flex-direction-vs-order-021cee.png)

给某个子项目单独添加 `order` 属性可以定义他们的顺序，默认值是 0，修改它会改变排序。

可以作如下处理：

```css
.photo-grid {
  /* ... */
  flex-direction: row; /* Update this */
  align-items: center;
}

.first-item {
  order: 1;
}

.last-item {
  order: -1;
}
```

不像直接给 flex 容器添加 `row-reverse` 和 `column-reverse`，`order` 介于 row/column 的边界。上面的代码会调换首尾元素。

## flex 子项目对齐方式

`align-self`属性可用于个别元素垂直对齐。比如：

```css
.social,
.subscribe {
  align-self: flex-end;
  margin-bottom: 20px;
}
```

可以看到他们被移到了 `.header` 的底部，注意 margin 还是生效的。

![Web page showing bottom-aligned icons via the align-self property](/images/grid-align-self-4302c2.png)

跟`align-items`属性一样，`align-self` 可以设置这些值：

* `center`
* `flex-start`   (top)
* `flex-end`      (bottom)
* `stretch`
* `baseline`

## Flexible Items

所有的例子都是固定宽度或者内容宽度，但我们忘记了 "flexible box" 的本质，每个 flex 子项目都是 灵活：他们可以相对于父容器放大缩小宽度。

`flex` 属性用于定义个别子项目的宽，准确地说，它是子项目在父容器中所占间距的权重。例如 `flex` 值为 2 的项目是值为 1 的两倍大。

![Diagram: no flex (3 square boxes), equal flex (3 rectangle boxes), unequal flex (2 smaller boxes, one stretched out box)](/images/flexible-items-cfe7a3.png)

添加如下代码：

```html
<div class='footer'>
  <div class='footer-item footer-one'></div>
  <div class='footer-item footer-two'></div>
  <div class='footer-item footer-three'></div>
</div>
```

添加 css：

```css
.footer {
  display: flex;
  justify-content: space-between;
}

.footer-item {
  border: 1px solid #fff;
  background-color: #d6e9fe;
  height: 200px;
  flex: 1;
}
```

`flex: 1;`为让该项目的宽度扩大为 `.footer` 的宽度，如果这些项目权重用于，则等宽。

![Web page with three equal boxes that stretch to fill the footer](/images/footer-flexible-items-220ac8.png)

我们让第三个元素权重为 2：

```css
.footer-three {
  flex: 2;
}
```

将它跟 `justify-content` 属性值为`space-between`对比，有点像，但我们是自己定义子元素的跨度的。

### 子项目的静态宽度

我们也可以切换 flexible 的固定宽度。`flex:initial` 可以让子项目重新使用固定宽度 `width` 属性。这让我们可以混合使用静态和灵活两种模式。

![Diagram: fixed-width box (flex: initial), flexible box (flex: 1)](/images/combining-flexible-and-static-items-52aacb.png)

添加如下代码，让 footer 看起来像上面展示的一样：

```css
.footer-one,
.footer-three {
  background-color: #5995da;
  flex: initial;
  width: 300px;
}
```

如果没有使用 `flex:initial` 而是使用 `flexx:1` 会让 `.footer-item` 忽略 `width` 属性。通过 `initial` 我们可以再获得自由布局的同时包含固定宽度。当你修改浏览器窗口时，你会发现只有中间的元素改变了。

![Web page with two static-width boxes on either side of a flexible box stretching to fill the footer](/images/footer-flexible-items-static-widths-af0a32.png)

这种固定宽度布局非常常见，不仅是在 footer，还有如侧边栏 (或者多个侧边栏) 和网页的响应式内容。

## Flex Items and Auto-Margins

Auto-margins 在 flexbox 中比较特别。它可以替换容器中一组子项目的左右对齐方式，可以想象 auto-margin 就像一个容器中 flex 子项目的分隔器。

让我们修改 `.menu` 的内容来演示下：

```html
<div class='menu-container'>
  <div class='menu'>
    <div class='date'>Aug 14, 2016</div>
    <div class='signup'>Sign Up</div>
    <div class='login'>Login</div>
  </div>
</div>
```

刷新界面可以看到元素充满了 menu，我们添加 auto-margin 来看下效果：

```css
.signup {
  margin-left: auto;
}
```

Auto-margins 会占用容器所有的剩余空间，而不是让他们等宽。

## 总结

Flexbox 给网页布局提供了更多可能，它更适合现代网页布局：

* 用 `display: flex;` 创建 flex 容器
* 用 `justify-content` 定义元素水平对齐方式
* 用 `align-items` 定义元素垂直对齐方式
* 用 `flex-direction` 切换 column 和 rows 方向
* 用 `row-reverse` 或者 `column-reverse` 值改变排序
* 用 `order` 自定义某个元素的排序位置
* 用 `align-self` 改变某个元素的垂直对齐方式
* 用 `flex` 修改元素的宽度

这些属性只是告诉浏览器如何排列元素，写 html、css 代码并不难，相当于列出每个元素的布局方式。

当设计稿来的时候，我们首先是编写框架元素，然后根据设计稿去排版布局，如果你学了 flexbox 这些会变得更加简单。

很多网页都可以使用 flexbox，但对于网页元素位置微调以及元素间相互影响可能就不那么擅长了。下章将介绍更高级别的布局技巧，之后你就变成 HTML 和 css 的大牛了。
