---
layout: SpecialLayout
---

# 浮动

在之前的章节里我们学习了如何修改盒子的大小 [boxes](./Chapter-05.md) 以及边距，但这些都是垂直布局的块级元素，并没有实现列布局。

![Diagram: vertical arrow over column of boxes versus horizontal arrows over grid of boxes](/images/vertical-vs-horizontal-stacking-064f76.png)

"浮动"可以让块级元素由上至下变成从左到右，这样我们就可以实现非常多的布局，如侧边栏，多列布局，栅格，图文杂志风格。意味着我们可以开始创建更生动的网页

在现代浏览器中基本用[Flexbox](./Chapter-08.md)取代浮动布局，并不是说没有意义继续学习本章节。在过去，浮动布局在网页开发中占据了重要的地位，也就是说在你的开发生涯中还是会见到浮动布局。

良好的兼容让浮动布局相比 Flexbox 普及率更高，也不是说完全抵制 Flexbox，我们应该尝试更多的方法去实现精致的网页布局。

## 安装

本章通过一个小例子去介绍浮动，不同于之前的章节，我们并不会太在意网页的内容，更多的是使用空 `<div>` 元素。最终将显示成：

![Web page with floated sidebar, floated image, and floated grid in footer](/images/floats-final-example-e0e9f7.png)

首先创建一个 `floats` 目录，然后添加 `floats.html` 文件：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <title>Floats</title>
    <link rel='stylesheet' href='styles.css'/>
  </head>
  <body>
    <div class='page'>
      <div class='menu'>Menu</div>
      <div class='sidebar'>Sidebar</div>
      <div class='content'>Content</div>
      <div class='footer'>Footer</div>
    </div>
  </body>
</html>
```

基础的网页结构大致分为导航栏，侧边栏，主要内容区，底部。可以用 [container divs](./Chapter-06.md) 来装载内容。

现在打开 `floats.html` 只会出现高度为零的空元素，下部分在完善它。

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

另外创建 `styles.css`，并在编写样式前可以先重置浏览器默认样式[resets default box behavior](./Chapter-05.md)。

## HTML 默认布局

浮动会改变网页的默认布局方式，首先要知道默认布局是怎么样的，在之前章节有介绍过[block elements versus inline elements](./Chapter-05.md)，现在看来它特别重要。

我们在 `styles.css`中给 `<div>` 元素添加适当的高度和背景：

```css
.menu {
  height: 100px;
  background-color: #b2d6ff; /* Medium blue */
}

.sidebar {
  height: 300px;
  background-color: #f09a9d; /* Red */
}

.content {
  height: 500px;
  background-color: #f5cf8e; /* Yellow */
}

.footer {
  height: 200px;
  background-color: #d6e9fe; /* Light blue */
}
```

有没有看起来像彩虹，但至此还没有接触有用的概念。

![Web page with four colored blocks appearing vertically one after another](/images/default-css-layout-behavior-9b2b1f.png)

重点是每个块级元素会占据父元素的宽度( 在本例中就是 `<div class='page'></div>` 宽度 )，并且在垂直方向一个挨着一个。这种情况下是无法实现列布局的。

一般我们都希望盒子的高度可以跟内容自适应，介于本章我们关心的是如何控制布局，所以我们并不会填充真实的内容，而是直接固定高度[explicit `height` properties](./Chapter-05.md)。

接着我们给 `.sidebar` 添加如下样式：

```css
.sidebar {
  width: 200px; /* Add this */
  height: 300px;
  background-color: #f09a9d;
}
```

侧边栏变窄了，但是其他盒子还是在同样的位置，依然是垂直方向一个挨着一个，我们将用浮动改变这个布局。

![Web page with red sidebar box on left of page with white background next to it](/images/default-css-layout-behavior-explicit-width-97b8ac.png)

## 给元素添加浮动

`float` 属性让我们可以控制元素在水平方向上的位置。可以用下面的代码让侧边栏向左浮动：

```css
.sidebar {
  float: left; /* Add this */
  width: 200px;
  height: 300px;
  background-color: #f09a9d;
}
```

浮动会打破默认块级上下布局格式，现在所有的元素都围绕侧边栏，有点类似杂志布局：

![Web page with red sidebar box floating on top of the following element](/images/floated-sidebar-d926d5.png)

也可以向右浮动，如果你要取消浮动可以使用 `none` ，这些都是 `float` 属性常用的值：

```css
float: right; /* Right-aligned */
float: none; /* Revert to default flow */
```

我们掌握了几种对齐块级元素的方式：左/右 浮动，`auto-margin` 的居中对齐，仅对块级元素有效，行内元素请用 `text-align` 属性 [previous chapter](./Chapter-05.md)

![Diagram: float left (box on left of container), auto margins (box in center of container), float right (box on right of container)](/images/floats-and-auto-margin-for-alignment-536a81.png)

## 相对于父级浮动

浮动元素一般是相对于父级元素的，本例当中，侧边栏的父级是 `<div class='page'></div>`，也就相当于浏览器窗口的宽度，所以我们的侧边栏显示在界面的左边。

让我们来改变 page 的宽度并垂直居中，把代码添加到`styles.css`：

```css
.page {
  width: 900px;
  margin: 0 auto;
}
```

可以看到侧边栏现在显示在 `.page` 容器的左边了。

![Web page with colored boxes centered in the browser](/images/floating-in-fixed-width-page-a9c965.png)

像这样定位嵌套容器就可以得到精致的网页布局，我们用 `.page` 让所有元素居中显示。接着让侧边栏左对齐，当然还有更复杂的情况，但目前我们只展示传统布局方式：所有元素作为盒子一个挨着一个。

## 多重浮动

接着给 `.content` 添加固定宽度：

```css
.content {
  width: 650px; /* Add this */
  height: 500px;
  background-color: #f5cf8e;
}
```

会看到侧边栏在 `.content` 里面，这时如果你截图的话，将会得到一张 850 像素的图片。( 我们的侧边栏宽 200 像素 )

![Web page showing left-floated red sidebar on top of statically positioned element](/images/floating-inside-another-container-1cfd76.png)

图片比较适合浮动 ( 接下来我们会讲解 ) ，事实上我们想要得到的结果是 `content` 部分应该在接着侧边栏而不是围绕它，所以还得加个浮动：

```css
.content {
  float: left; /* Add this */
  width: 650px;
  height: 500px;
  background-color: #f5cf8e;
}
```

当有多个元素往同一方向浮动时，它们将在水平方向重叠，有点像默认的垂直布局算法，只是旋转了 90 度。上面代码最终的效果是内容部分显示在了侧边栏的右边。

![Web page showing left-lfoated red sidebar next to left-floated element](/images/two-floats-next-to-each-other-37f154.png)

这就是处理块级元素水平对齐的正确方式，给 `.sidebar` 和 `.content` 都添加浮动值就可以得到你想要的布局效果。

![Diagram: the four potential combinations of left and right floats for two elements](/images/float-layout-combinations-e52716.png)

在侧边栏和内容部分都浮动的情况下，`.footer` 元素就悲剧了

## After a Float

你可能注意到了，底部显示在了按钮的下方。原因是浮动改变了正常文档流。浮动元素的高度对于垂直方向的 footer 来说是无效的。

![Web page with transparent boxes showing floated boxes on top of statically positioned footer](/images/floats-outside-of-normal-flow-5dc559.png)

给 `.page` 加红色边框可以看得更明白：

```css
.page {
  width: 900px;
  margin: 0 auto;
  border: 1px solid red; /* Add this */
}
```

注意此时的边框只包含了 `.menu` 和 `.footer` 元素。也就是不包含浮动元素。有两个解决方法：清除浮动和在溢出隐藏。

### 清除浮动

"清除浮动"意味着让块级元素忽略之前的所有浮动，并且不在浮动，回归正常文档流。

我们可以给 `.footer` 添加 `clear` 属性：

```css
.footer {
  clear: both; /* Add this */
  height: 200px;
  background-color: #d6e9fe;
}
```

通常我们希望清除左右浮动，当然你也可以清除左边或右边。现在布局看起来应该正常了：

![Web page showing footer popping down to bottom of floated elements after being cleared](/images/clearing-a-float-44a4d5.png)

至此我们应该可以很好的处理网页布局了，但我们可以更深入模拟别的浮动的场景，比如百分百布局。

比如，如果我们将代码改成这样会发生什么呢：

```html
<body>
  <div class='menu'>Menu</div>

  <div class='page'>
    <div class='sidebar'>Sidebar</div>
    <div class='content'>Content</div>
  </div>

  <div class='footer'>Footer</div>
</body>
```

按钮和底部放在了固定宽度 page 的外面，那么他们的宽度将跟窗口的一致，正是我们想要的百分百布局。但结果是 `.page` 的高度变为了 0，尽管 footer 已经清除了浮动。

![Web page highlighting the zero-height .page <div> with only floated elements in it](/images/full-bleed-layout-broken-clear-58057f.png)

现在只有一个元素在 page 里浮动。也就是说，把 footer 放在 page 容器外面打破了清除浮动。

### 溢出隐藏

清除浮动能解决元素高度问题，但前提是元素在同一个容器，如果 footer 在 page 外面，则外面需要别的方式去解决容器高度塌陷问题。

![Diagram: clearing with child (clear: both on child element) versus clearing  with parent (overflow: hidden on parent)](/images/methods-for-clearing-floats-6429d9.png)

解决的方式是 [CSS `overflow` property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)。通过给容器添加 `overflow:hidden` 样式可以重新获得容器内浮动元素的高度：

```css
.page {
  width: 900px;
  margin: 0 auto;
  overflow: hidden; /* Add this */
  background-color: #eaedf0; /* Add this */
}
```

你应该可以看到 page 的背景变成了淡灰色。但不是百分百布局 ( 稍后讲解 )，重点是 `overflow:hidden`，没有它外面将 看不到 `.page` 容器的背景，因为高度为 0。

![Web page showing gray background filling full height of .page <div>](/images/full-bleed-layout-overflow-hidden-826f9e.png)

总之，如果你在容器底部有一个未浮动的元素，这时可以用 `clear` 解决，否则，需要给容器添加 `overflow:hidden` 。这种方式会让浏览器重新获取浮动元素的高度。

## 百分百布局

接着我们让除了侧边栏和内容区外的元素按百分百布局 ( 水平居中的 page 无法百分百布局，因为采用 margin-auto 方式的水平居中必须要有宽度。 )

![Web page showing gray background filling full height of .page <div>, all the way to the left and right edges](/images/full-bleed-layout-with-container-85a6d1.png)

这时可以给 `.page` 外包裹一层容器：

```html
<body>
  <div class='menu'>Menu</div>

  <div class='container'>                 <!-- Add this -->
    <div class='page'>
      <div class='sidebar'>Sidebar</div>
      <div class='content'>Content</div>
    </div>
  </div>                                  <!-- Add this -->

  <div class='footer'>Footer</div>
</body>
```

块级元素默认是百分百布局的，接着我们给 `.container` 添加背景色：

```css
.page {
  width: 900px;
  margin: 0 auto;
}

.container {
  overflow: hidden;
  background-color: #eaedf0;
}
```

前半部分我们介绍了用 `overflow:hidden` 解决容器高度塌陷问题。

## 等列浮动

至此，我们接触了侧边栏布局，固定布局，百分百布局。浮动同样可以用于多列布局，就像侧边栏和内容区，只是更多列。

接着我们在 footer 里创建三个宽度相等的列：

```html
<div class='footer'>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
</div>
```

在 `styles.css` 里添加如下样式：

```css
.column {
  float: left;
  width: 31%;
  margin: 20px 1.15%;
  height: 160px;
  background-color: #b2d6ff; /* Medium blue */
}
```

这是我们第一次使用百分比，百分比高度是相对于父元素的。得到的结果是三个等宽的列(宽度为浏览器窗口的 1/3) 缩小浏览器窗口，你会发现三个列的宽度会跟着缩小。这就是响应式布局 [responsive design](./Chapter-10.md).

![Web page with footer that has three equal-width child elements](/images/floats-for-columns-8a52b0.png)

额,回归正题：浮动可以让元素从垂直变为水平布局。修改浮动元素的宽可以得到不同的布局：侧边栏，多列，栅格等。

## 栅格布局

只需要添加更多的 `.column` 元素就可以实现栅格布局：

```html
<div class='footer'>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
</div>
```

栅格布局像这样

![Web page with footer that has 3 colums and 2 rows of child elements](/images/floats-for-grids-7ed8b0.png)

给 footer 添加 `overflow:hidden` 让它可以自适应栅格的数量：

```css
.footer {
  overflow: hidden;
  background-color: #d6e9fe;
}
```

用这种方式你可以生产任何尺寸的栅格，比如你在 page 做一个图片画廊。但记住，对于现代浏览器 [flexbox](./Chapter-08.md) 才是最好的布局方式。

### 命名规范

`.column` 命名不太规范，就像之前说到的如何给"概要"的类命名 [class names that refer to appearance](./Chapter-06.md)。“Column”不太好是因为内容并不一定渲染成多列。( 像手机就只有一列 ) 更准确的命名可以像 `.footer-item`，这个完全取决于你自己。

## 内容浮动

网页布局右两个概念，一是全局，比如说侧边栏在哪，按钮多大等。另一个是细节 ( 比如你的内容 )。

就像你将要看到的，我们给 `.content` 元素添加一些假的内容：

```html
<div class='container'>
  <div class='page'>
    <div class='sidebar'></div>
    <div class='content'>

      <img src='?' class='article-image'/>

      <p>Ad netus sagittis velit orci est non ut urna taciti metus donec magnis
      hendrerit adipiscing mauris sit a proin ultrices nibh.</p>

      <p>Enim suspendisse ac scelerisque nascetur vestibulum parturient sed mi a
      dolor eu non adipiscing non neque scelerisque netus ullamcorper sed
      parturient integer.Eros dui risus non sodales ullamcorper libero a dis
      cubilia a orci iaculis cursus.</p>

      <p>Egestas at aliquam a egestas accumsan cum elementum consectetur conubia
      tristique eu et vitae condimentum in ante consectetur suscipit a a duis
      vestibulum gravida morbi sagittis.Parturient scelerisque facilisis
      ullamcorper a a pretium a nisl parturient semper senectus accumsan ipsum
      mus scelerisque eget ridiculus.Accumsan dolor a.</p>

      <p>Ligula taciti vel primis sit a tincidunt habitant parturient parturient
      in parturient ante nulla consectetur sem.Facilisis parturient litora.</p>

    </div>
  </div>
</div>
```

让我们来创建一个图文布局，添加如下样式：

```css
.content {
  padding: 20px;
}

.article-image {
  float: left;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}
```

我们实现了如何在实现浮动嵌套，网页布局其实是一个循环的过程，首先创建布局结构然后往里面添加内容，更复杂的布局可能需要别的图层或等深层次的嵌套，但其实原理都一样。

![Web page showing floated image with text content flowing around it](/images/floats-final-example-e0e9f7.png)

### 内容溢出隐藏

看下例子最终展示：

![Web page showing footer with icon and text next to it, not flowing around it due to overflow: hidden](/images/overflow-hidden-for-content-735981.png)

在 footer 添加 `.column` 元素：

```html
<div class='column'>
  <div class='avatar'></div>
  <h3 class='username'>Bob Smith</h3>
  <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
  ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
  purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
</div>
```

再添加 css 样式：

```css
.avatar {
  float: left;
  width: 60px;
  height: 60px;
  margin: 25px;
  border-radius: 40px;
  background-color: #d6e9fe;
}

.username {
  margin-top: 30px;
}

.comment {
  margin: 10px;
  overflow: hidden; /* This is important */
}
```

这是 `overflow:hidden` 另一个技巧，给 `.comment` 添加内容隐藏。

![Web pages showing with hidden overflow (text left-aligned) and without hidden overflow (text flowing around icon)](/images/no-overflow-hidden-for-content-1cb097.png)

换句话说 `overflow:hidden` 打破了杂志风格布局。

## 总结

本章我们接触了真实的网页布局，学习了如何让 div 向左右浮动，如何处理浮动之后的内容，以及如何将浮动后的元素通过之前章节介绍的 auto-margin [CSS Box Model](./Chapter-05.md) 实现自动居中。

网页开发者的工作是漂亮的设计稿转换为 HTML 和 css 让浏览器展示，浮动对于过去的网页来说是质的飞跃，虽然现在相对于更新的 flexbox 布局有点过时。

下一章，我们讲学习 flexbox 布局。会接触新的 css 属性，但基本流程还是一样：处理各种元素的嵌套布局。
