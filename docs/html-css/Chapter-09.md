---
layout: SpecialLayout
---

# 高级定位

"静态定位" 是一种网页的正常流布局，像之前的 [CSS Box Model](./Chapter-05.md), [floats](./Chapter-07.md), 和 [flexbox](./Chapter-08.md) 布局方案都是在操作 "静态" 流，但这在 css 中不是唯一的定位方法。

![Diagram: comparison of static, relative, absolute, and fixed positioning schemes](/images/html-css/css-positioning-schemes-790d5b.png)

另外三类定位类型有 "relative"，"absolute"，和 "fixed"。每一个都可以让你设置跟 flexbox 和 floats 不一样的特殊坐标系统。跟之前说 "让这个 box 在 container 里居中显示" 不同，高级定位是 "让盒子位于父元素源点的上 20 像素，右 50 像素。"

网页里的多数元素用的是正常文档流，别的定位方式适合于不想打破周围元素布局的情况下的特殊定位方式。

这一章分为两部分，前半部分介绍 relative，absolute 和 fixed 的用法，后半部分实现一个下拉菜单。

## 安装

新建 `advanced-positioning` 目录和 `schemes.html` 文件：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'/>
    <title>Positioning Is Easy!</title>
    <link href='styles.css' rel='stylesheet'/>
  </head>
  <body>

    <div class='container'>
      <div class='example relative'>
        <div class='item'><img src='images/static.svg' /></div>
        <div class='item item-relative'><img src='images/relative.svg' /></div>
        <div class='item'><img src='images/static.svg' /></div>
      </div>
    </div>

    <div class='container'>
      <div class='example absolute'>
        <div class='item'><img src='images/static.svg' /></div>
        <div class='item item-absolute'><img src='images/absolute.svg' /></div>
        <div class='item'><img src='images/static.svg' /></div>
      </div>
    </div>

    <div class='container'>
      <div class='example fixed'>
        <div class='item'><img src='images/static.svg' /></div>
        <div class='item item-fixed'><img src='images/fixed.svg' /></div>
        <div class='item'><img src='images/static.svg' /></div>
      </div>
    </div>

  </body>
</html>
```

三个例子都有相同的 HTML 结构，每个都有不同的布局效果。

![Screenshot: files in the example project](/images/html-css/project-files-714b6b.png)

例子的图片可以从[images](https://internetingishard.com/html-and-css/advanced-positioning/images-89bc45.zip)下载。添加如下样式：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 1200px;
}

.container {
  display: flex;
  justify-content: center;
}

.example {
  display: flex;
  justify-content: space-around;

  width: 800px;
  margin: 50px 0;
  background-color: #d6e9fe;
}

.item img {
  display: block;
}
```

这里只是采用了 flexbox 技术创建了栅格布局，唯一不同的是给 body 设置了固定高度。为的是出现滚动条来演示不同的定位效果。

![Web page with static, relative, absolute, and fixed boxes in different colors](/images/html-css/initial-project-screenshot-8ebe66.png)

## 定位中的元素

css `position` 属性可以改变元素定位方式。默认值是 `static` 。当元素的 `position` 属性的值不是 `static` 时，它叫做 "定位中的元素"。接下来通篇都会关于它。

![Diagram: relative, absolute, and fixed elements denoted as positioned elements](/images/html-css/positioned-elements-terminology-861fca.png)

可以混合搭配不同的布局方式，大多数网页都是静态布局，但是也有一些 relatively 和 absolutely 的定位元素。

## Relative

"relative 定位" 适合于在正常文档流中需要微调的元素

![Diagram: relatively positioned box offset from the upper left corner of its static position](/images/html-css/css-relative-positioning-26842e.png)

在 `style.css` 添加如下代码：

```css
.item-relative {
  position: relative;
  top: 30px;
  left: 30px;
}
```

`position:relative` 的作用是确定定位元素，`top` 和 `left` 属性可以让元素相对于静态定位发生偏移。就像给元素设置 `x,y` 坐标。

![Web page with a relatively positioned element](/images/html-css/relative-positioning-screenshot-4c23c2.png)

相对定位有点像 `margins`，不同的是：不管是环绕的元素还是父元素都会受 `top` 和 `left`。其他元素也像 `.item-relative` 一样在它定位的源点。思考一下网页渲染完成后的偏移量。

默认 `top` 和 `left` 属性是计算距离盒子的上左边界的源点，同样也可以相对于其他的边界 `bottom` 和 `right` 属性。

![Diagram: top, left, bottom, and right offsets of a relatively positioned element](/images/html-css/relative-positioning-offsets-494268.png)

例如，下面可以让盒子相反定位：

```css
.item-relative {
  position: relative;
  bottom: 30px;
  right: 30px;
}
```

注意这些属性是可以接受负值的，意味着同一偏移可以有两种方式。比如可以用 `top:-30px` 代替 `bottom:30px`。

## Absolute

绝对定位跟绝对定位有点像，但是它的偏移量是相对于整个浏览器窗口的而不是某个元素的定位源点。前提是没有任何手动设置定位的元素。

![Diagram: absolutely positioned element offset from the top-left of the browser window](/images/html-css/css-absolute-positioning-228ce0.png)

添加如下样式：

```css
.item-absolute {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

HTML 结构跟上一个例子一样。不同的是图片出现在了浏览器窗口的左上角。当然你也可以试一下设置 `bottom` 和 `right` 是什么效果。

![Web page with an absolutely positioned element](/images/html-css/absolute-positioning-screenshot-641ad7.png)

另一个有趣的效果是 `absolute` 可以让元素完全脱离正常文档流。在左对齐元素更容易观察，所以让我们临时添加一些样式：

```css
.example {
  display: flex;
  justify-content: flex-start; /* Update this */
  /* ... */
}
```

在上个例子中，元素还存在间隙。但绝对定位没有间隙，就好像在父元素和周围元素中消失了一样。测试完成，记得把 `justify-content` 改回 `space-around` 。

![Web page highlighting the empty space left by an absolutely positioned element](/images/html-css/absolute-positioning-flex-start-screenshot-d4b627.png)

这个效果看起来好像并没什么用，让所有元素都采用绝对定位，元素会出现重叠。那 `absoulte` 为什么还存在?

### 相对/绝对定位

如果可以相对与文档流中的某个元素采用绝对定位，那将会非常有用。幸运的是，我们可以改变绝对定位中元素的坐标系统。

![Diagram: absolute element positioned relative to a parent positioned element](/images/html-css/css-relatively-absolute-positioning-1ba963.png)

绝对定位元素的坐标系统总是相对于最近设置了定位的容器元素。只有当没有任何一个祖先元素设置过定位才会相对于浏览器来定位，所我们可以改变 `.item-absolute` 的父元素为相对定位。这样就可以相对改元素来定位而不是浏览器窗口了。

```css
.absolute {
  position: relative;
}
```

`.absolute` div 在正常文档流中，我们可以手动任意移动 `.item-absolute` 。非常棒，我们可以改变容器内的正常文档流。也就是说，对于手机布局，任何采用绝对定位的元素都可以用过这个方式自动移动。

![Web page with an absolutely positioned element inside another element that is relatively positioned](/images/html-css/relatively-absolute-positioning-screenshot-98bcce.png)

注意，我们没有为 `.absoulte` 指定任何偏移量。我们使用相对定位是为了让绝对定位元素回归正常文档流。这就是如何准确地将绝对定位和静态定位相结合。

## Fixed

"固定定位"与绝对定位有很多相同之处，元素都脱离了文档流，坐标系统都是相对于整个浏览器窗口。关键的区别在于，固定元素不会与界面的其他部分一起滚动。

![Diagram: fixed element positioned relative to the browser window, but with scrolling disabled](/images/html-css/css-fixed-positioning-342eff.png)

使用固定定位来更新我们第三个例子：

```css
.item-fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

这将把红色的图像放在屏幕的右下角。尝试滚动页面，您会发现它跟绝对定位的紫色图片不一样，它与页面上的其他元素不同步。

## 定位元素的动画

这有点草畜范围，因为本教程介绍的是 HTML 和 CSS 而不是 JavaScript。但是，动画是使用相对和绝对定位的应用场景之一。所以让我们通过给元素添加动画来演示一下。

这些先进的定位方案使得 JavaScript 可以移动元素，同时避免影响周边元素。例如，尝试将以下内容复制黏贴到 `schemes.html` 中。

```html
<script>
  var left = 0;

  function frame() {
    var element = document.querySelector('.item-relative');
    left += 2;
    element.style.left = left + 'px';
    if (left >= 300) {
      clearInterval(id)
    }
  }

  var id = setInterval(frame, 10)
</script>
```

这个 JavaScript 代码创建了一个简单的动画，它不断更新 `.item-relative` 的 `left` 属性。当你刷新界面时，你应该考到蓝色的图像浮动到了容器的右边缘。

![Web page showing simple animation of a relatively positioned element](/images/html-css/animated-relative-positioning-193400.png)

这是一个很简单的例子，但你可以看到它如何适用于花哨的 UI 动画。如果你试图通过操作 `margin` 或 `padding` 属性来达到同样的小姑，你将会不经意地移动静态定位的元素。

## 定位元素的菜单

让我们用这些技术做些事吧。本章剩余部分将用之前学到的技能来实现导航菜单中的一个带有交互式的下拉菜单。我们将从头开始构建这个界面：

![Web page with a dropdown menu](/images/html-css/submenu-with-z-index-f458d3.png)

固定定位跨域让菜单贴在界面的顶部，相对定位会给我们一个固定的下拉菜单。我们将介绍导航菜单最佳实践，并看到我们在 css 选择器章节中学到的伪类选择器的应用场景。

首先，我们新建 `menu.html` 界面，它有头部和一个简单的顶级菜单：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Awesome!</title>
    <link href='menu.css' rel='stylesheet'/>
  </head>
  <body>

    <div class='header'>
      <div class='logo'><img src='images/awesome-logo.svg'/></div>
      <ul class='menu'>
        <li class='dropdown'><span>Features ▾</span></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Subscribe</a></li>
        <li><a href='#'>About</a></li>
      </ul>
    </div>

  </body>
</html>
```

导航栏最好用 `<ul>` 元素取代 `<div>` 元素。这样有利于 SEO。另外我们给第一个 `<li>` 元素添加 `class` 属性。`<span></span>` 用于区别子菜单。

接下来，我们添加如下样式：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 1200px;
  font-size: 18px;
  font-family: sans-serif;
  color: #5d6063;
}

a:link,
a:visited {
  color: #5d6063;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.header {
  position: fixed;
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 50px;
  background: #d6e9fe;
}
```

一切都很熟悉，注意 `.header` 的 `fixed` 定位，它让导航栏固定在了界面的顶部。

![Web page with a menu made out of block <li> elements (no positioning)](/images/html-css/menu-block-list-items-c1ac6a.png)

## 内联菜单项

尽管被标记为无序列表，但大多数网站的导航栏菜单实际上并不像列表。我们可以通过将列表项来替代`display`熟悉，在`menu.css`添加样式：

```css
.menu {
  margin-top: 15px;
}

.menu > li {
  display: inline;
  margin-right: 50px;
}

.menu > li:last-of-type {
  margin-right: 0;
}
```

我们必须使用子选择器来代替后代选择器，因为我们只需要选择在 `.menu` 下的元素。这段代码还增加了所有列表项的外边距，可以通过 `:last-of-type` 伪类去掉最后一个列表项的外边距。这个技巧很常用。

![Web page with a menu made out of inline <li> elements (no positioning)](/images/html-css/menu-inline-list-items-1e8d70.png)

## 子菜单

除了整个东西是嵌套在一个列表项中，子菜单看起来跟顶级菜单没两样。修改如下代码：

```html
<ul class='menu'>
  <li class='dropdown'><span>Features &#9662;</span>
    <ul class='features-menu'>           <!-- Start of submenu -->
      <li><a href='#'>Harder</a></li>
      <li><a href='#'>Better</a></li>
      <li><a href='#'>Faster</a></li>
      <li><a href='#'>Stronger</a></li>
    </ul>                                <!-- End of submenu -->
  </li>
  <li><a href='#'>Blog</a></li>          <!-- These are the same -->
  <li><a href='#'>Subscribe</a></li>
  <li><a href='#'>About</a></li>
</ul>
```

这位搜索引擎提供了许多关键信息。它允许谷歌标记 `Features` 标签为网页的独立部分。建议用这种结构来标记复杂的导航菜单。

为了让子菜单达到预期样子，添加如下样式：

```css
.features-menu {
  display: flex;
  flex-direction: column;
  background: #b2d6ff;
  border-radius: 5px;
  padding-top: 60px;
}

.features-menu li {
  list-style: none;
  border-bottom: 1px solid #fff;

  padding: 0 40px 10px 20px;
  margin: 10px;
}

.features-menu li:last-of-type {
  border-bottom: none;
}
```

子菜单样式是正确的，但它的位置错了，并且严重破坏了其他顶级菜单项。其实能猜到这样的结果，因为它仍然是静态定位，所以它还是会影响周边元素。

![Web page with an unstyled submenu (HTML-only)](/images/html-css/submenu-no-css-positioning-04280e.png)

得用心的定位技巧才能达到我们想要的布局。

## (相对) 绝对的子菜单

我们希望顶级菜单就像没加子菜单时那样显示，这不正是绝对定位元素的效果，让我们试一试，添加几行规则到 `.features-menu`：

```css
.features-menu {
  display: flex;
  flex-direction: column;
  background: #b2d6ff;
  border-radius: 5px;
  padding-top: 60px;

  position: absolute; /* Add these */
  top: -25px;
  left: -30px;
}
```

666!子菜单不再是界面静态流的一部分了，因此我们的顶级菜单项恢复正常。然而，子菜单应该在 `features` 标签下面，而不在浏览器窗口的角落。就像我们学过的!

子菜单位于 `<li class='dropdown'>` 。将其转为为定位元素，将会改变 `.features-menu` 的坐标系统：

```css
.dropdown {
  position: relative;
}
```

子菜单在正确的位置上了，但是它把 `Features` 标签盖住了。

![Web page with a absolutely positioned submenu inside a relative element](/images/html-css/submenu-relative-and-absolute-positioning-9fe8a5.png)

## Z-Index

我们至今为处理过 "深度" 问题，所有的 HTML 元素都以一种直观的方式呈现在彼此之上或下面。让浏览器来决定这些是不可能的。

`z-index` 属性可以设置元素的深度。你可以想象网页是一个三维空间，那么负值会进入页面的更深处。而正值会跳出界面。

![Diagram: positive z-index coming out of the page and negative z-index going into the page](/images/html-css/css-z-index-c87ef0.png)

换句话说，`.features-menu` 元素比 `features` 标签需要更低层次的 `z-index`。默认值是 0。让我们这么处理：

```css
.dropdown > span {
  z-index: 2;
  position: relative; /* This is important! */
  cursor: pointer;
}

.features-menu {
  /* ... */
  z-index: 1;
}
```

**Features** 标签出现在子菜单的上面了。注意 `position:relative` 是必须的，因为只有定位元素设置 `z-index` 才有效果。所以记住，下次遇到没效果的情况，有可能就是忘了加定位属性。

![Web page showing submenu after adding a positive z-index](/images/html-css/submenu-with-z-index-f458d3.png)

我们设置 `cursor` 属性来修改指针的样式，看起来就像链接。[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

## 伪类的下拉菜单

子菜单完成了!我们最后的任务是隐藏它，直到用户鼠标悬浮在上面。enu into an interactive dropdown.

首先，我们用 `:hover` 后代选择器，修改如下代码：

```css
.dropdown:hover .features-menu {
  /* This used to be `.features-menu` */
  display: flex; /* Leave everything else alone */
  flex-direction: column;
  background: #b2d6ff;
  /* ... */
}
```

然后，用 `display` 把子菜单隐藏起来：

```css
.features-menu {
  /* Add this as a new rule */
  display: none;
}
```

将 `display` 设置为 `none` 使元素完全消失。在鼠标悬停后用 `flex` 覆盖 `none`。就相当于告诉浏览器重新显示子菜单。这种使用派生选择器和伪类的巧妙组合使我们可以隐藏或显示一个元素。

## 总结

本章，学习了四种新的 css 布局方式：

* Relative
* Absolute
* Relatively absolute
* Fixed

相对定位可以调整一个元素的位置而不影响周边元素。绝对定位从页面的静态流中提取元素，并将其相对于浏览器窗口放置，相对包裹绝对会让元素重新回归正常文档流。最后，固定定位可以让元素固定而不随其他元素滚动。

![Diagram: comparison of relative, absolute, relatively absolute, and fixed positioning schemes](/images/html-css/css-positioning-schemes-summary-d7f831.png)

我们用这些新技术实现了一个相对复杂的导航菜单。如果觉得复杂，不要担心。你并不需要记住这些 HTML 和 CSS，我们的目的是让你理解这些定位的作用，做到学以致用。

这个菜单同样说明了，HTML 结构的重要性。好的 HTML 结构可以节省很多事，首先我们要创建语义结构，接着写一些 css 把盒子放到我们想要的地方。多复杂的模型都可以轻松实现。

遗留另一个问题就是，我们的菜单在手机下会有很大的问题。我们将在下一章响应式布局中讲解如何解决。
