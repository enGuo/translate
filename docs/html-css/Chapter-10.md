---
layout: SpecialLayout
---

# 响应式设计

响应式设计指的是你的网站在从宽屏显示器到手机的各个方面都应该表现得很好。它是 web 设计和开发的方法，解决了桌面版本和移动友好版本之间的区别，有了响应式设计，它们是一样的。

响应式设计是通过 css"媒体查询"完成的。将媒体查询看作是有在某种情况下使用某种样式的方法。它告诉浏览器根据用户的设备来忽略或者应用某些规则。

![Diagram: HTML content pointing to media queries, which point to mobile, tablet, and desktop devices](/images/how-responsive-websites-work-5f0a33.png)

媒体查询将相同的 HTML 内容呈现为不同的 css 布局。因此，我们可以使用相同的 HTML 标记(和 web 服务器)来代替智能手机的一个网站和一个完全不相干的笔记本/台式机网站。这意味着我们只需要维护一份内容，这也是为什么要关注点分离的原因。

本章，我们将了解媒体查询实际上只是对之前一直使用的旧 css 的简单包装。我们会发现实现响应式布局非常简单。

## 安装

新建 `responsive-design` 目录和 `responsive.html` 文件：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Responsive Design</title>
    <link rel='stylesheet' href='styles.css'/>
  </head>
  <body>
    <!-- There's nothing here! -->
  </body>
</html>
```

然后下载图片 [download some images](https://internetingishard.com/html-and-css/responsive-design/images-e9877a.zip) 解压在项目目录。

![Screenshot: Atom’s file browser with project files in it](/images/project-files-76223b.png)

## CSS 媒体查询

我们先设置背景色，在布局变复杂前先确保媒体查询能否工作。

![Diagram: mobile device with red background, tablet with yellow background, desktop with blue background. Background colors set with media queries.](/images/simple-responsive-media-queries-703f8b.png)

让我们通过创建一个新的样式来区分窄、中、宽的布局。添加如下样式：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  body {
    background-color: #f09a9d; /* Red */
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  body {
    background-color: #f5cf8e; /* Yellow */
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  body {
    background-color: #b2d6ff; /* Blue */
  }
}
```

当你调整浏览器的大小时，你应该会看到三种不同的背景颜色。大于 `960px` 时蓝色，介于 `401px` 和 `960px` 时黄色，小于 `400px` 时红色。

媒体查询由 `@media` 开始，然后是某种条件语句，然后是一些花括号。在大括号里面，你放了一些普通的 css 规则。浏览器在条件满足时采用这些规则。

![Diagram: media query composed of the @media at-rule, a media type, a media feature, then a bunch of ordinary CSS](/images/media-query-terms-137d06.png)

"only-screen" 媒体类型意味着所包含的样式只能应用于带有屏幕的设备 (与 文档相反，比如在浏览器中按下 "cmd+p") "min-width" 和 "max-width" 部分被称为 "媒体特性"，它们指定了你说描述的设备尺寸。

上面的媒体查询是你将遇到的最常见的查询，更多参阅 [other conditions](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) 包括该设备是否处于图像或横向模式，屏幕分辨率，以及是否有鼠标。

## 设计知识点

"@media" 是我们为特定设备宽度定义不同布局的方式，但是我们实际想要实现的是什么布局呢?本章的示例 web 界面将如下所示：

![Mockups of mobile, tablet, and desktop web pages](/images/mobile-first-design-be30e4.png)

实际上，设计人员提供响应式设计模型。开发人员的工作是用媒体查询和 css 来实现各个布局。

有几个 [well defined patterns](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/?hl=en) 介绍桌面布局如何适应移动布局。这其实是设计的范畴，但作为开发人员必须了解两个概念：

* 流布局是用拉伸或收缩来填充屏幕宽度的布局。
* 固定布局则相反，它的宽度与屏幕尺寸相同。

![Diagram: fluid layout expanding to fill entire width of the browser, fixed-width layout staying the same even if browser gets wider](/images/fixed-width-vs-fluid-layouts-258df9.png)

在我们的例子中，手机的表格是流式布局，桌面版的是固定宽度。

### 断点

多数 [responsive design patterns](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/?hl=en) 都是在移动端采用流式布局，桌面端采用固定布局。

流式布局的关注点是屏幕宽度，而不是特定的移动设备。这对于 web 设计人员来说非常重要。他们并没有试图在 IPhone 6s、Galaxy S7 或 Ipad mini 上做一些看起来不错的东西。他们正在设计一种看起来很好的流体布局，比如在 300 像素到 500 像素 看起来很好。

换句话说，在媒体查询中，"min-width" 和 "max-width" 参数的精确像素值 ( 统称为响应式网站的 "断点" )实际上并不重要。我们的网站并不关心用户的具体设备。它需要知道的是，它应该显示一个看起来漂亮的布局，宽度为 400 像素 ( 或其他 ) 。

## 移动优先

让我们开始吧，建议从移动布局开始，到桌面版本。桌面端布局比移动端要复杂的多，"移动优先" 可以让我们最大化了布局中可重用的 css 数量。

添加如下代码：

```html
<div class='page'>
  <div class='section menu'></div>
  <div class='section header'>
    <img src='images/header.svg'/>
  </div>
  <div class='section content'>
    <img src='images/content.svg'/>
  </div>
  <div class='section sign-up'>
    <img src='images/sign-up.svg'/>
  </div>
  <div class='section feature-1'>
    <img src='images/feature.svg'/>
  </div>
  <div class='section feature-2'>
    <img src='images/feature.svg'/>
  </div>
  <div class='section feature-3'>
    <img src='images/feature.svg'/>
  </div>
</div>
```

添加基础样式，确保正确使用媒体查询以适用于所有布局 (移动，平板和桌面)：

```css
.page {
  display: flex;
  flex-wrap: wrap;
}

.section {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  background-color: #5995da;
  height: 80px;
}

.header {
  background-color: #b2d6ff;
}

.content {
  background-color: #eaedf0;
  height: 600px;
}

.sign-up {
  background-color: #d6e9fe;
}

.feature-1 {
  background-color: #f5cf8e;
}

.feature-2 {
  background-color: #f09a9d;
}

.feature-3 {
  background-color: #c8c6fa;
}
```

缩小浏览器窗口，你会看到这就是移动布局。都不需要媒体查询，这就是为什么它被称为 "移动优先" 移动版本不需要特殊处理。

![Web page showing layout created with mobile-first CSS (no media queries)](/images/mobile-layout-55fdad.png)

在媒体查询外面写这些基本样式，在需要实现特定布局时再覆盖它们。例如，你需要改变整个网站的颜色方案。你只需要在这里修改它，而不是在几个 "@media" 规则中冗余地定义。

## 平板布局

平板和移动不一样的地方在于，"Sign Up" 和 "Feature" 部分由 2\*2 栅格替换单列。

用 Flexbox 实现非常简：

```css
/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .sign-up,
  .feature-1,
  .feature-2,
  .feature-3 {
    width: 50%;
  }
}
```

首先确保浏览器窗口的宽度在 400 像素 到 960 像素之间，接着滚动到底部，你将会看到一个彩色的网格：

![Web page showing the grid created from tablet media query](/images/tablet-layout-081d9e.png)

同样，屏幕的切确宽度并不重要。这个布局在媒体查询范围内适配任何宽度。移动端也如此，在小于 `960px` 宽下，都可以适配。

## 桌面布局

这就是我们的桌面布局，我们不希望它无休止地扩展，所以我们要设置了一个固定宽度：

```css
/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .page {
    width: 960px;
    margin: 0 auto;
  }
  .feature-1,
  .feature-2,
  .feature-3 {
    width: 33.3%;
  }
  .header {
    height: 400px;
  }
}
```

如下效果：

![Desktop layout of web page before and after flexbox re-ordering](/images/desktop-layout-8479d0.png)

flexbox 真的很棒，如果用浮动布局将会变得非常困难。而 flexbox 只是几行 css，将这些规则附加到桌面媒体查询：

```css
.sign-up {
  height: 200px;
  order: 1;
}
.content {
  order: 2;
}
```

完美!只用少数 css，而且在不修改 html 结构的情况下，实现了移动，平板，桌面端的布局。

这只是响应式布局的一个简单的例子。完美还可以通过这个技术实现更多复杂的响应式布局。原理都一样，在基础样式的基础上，通过媒体查询来实现不同设备宽度下的特定布局。

## 禁用窗口缩放

在美柚响应式设计之前，移动设备只有一个桌面布局，用户经常需要通过缩放来与之交互。

![Diagram: zoom enabled (desktop layout rendered in a tablet device) versus zoom disabled (tablet layout rendered in a tablet device)](/images/html-viewport-zooming-5c4be6.png)

如果使用移动布局，这种默认行为下的用户体验会非常糟糕。所以我们要通过下面的方式禁用它：

```html
<meta name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
```

要看效果需要在浏览器中模拟一个移动设备，用谷歌 **View > Developer > Developer Tools** 按钮，然后选择 **Toggle Device Toolbar** 来模拟设备。

![Screenshot: responsive icon in Chrome’s developer toolbar](/images/chrome-device-toolbar-bb030a.png)

在浏览器模拟设备中，你应该可以看到上述图片的 `zoom-disable` 版本。( 后续章节会深入介绍谷歌开发工具 )

## 总结

创建响应式网站这些知识点就够了，我们重点关心下面三件事：

* 每个响应式设计的原型
* 用于实现这些布局的 css 规则
* 有条件地应用这些 css 规则的媒体查询

本章我们首先从比较流式布局跟固定布局的区别，接着创建了移动优先基础样式，然后在复用样式的前提下通过媒体查询实现了平板，桌面布局。最后我们禁止了移动端的缩放功能。

本章相对简单，下个章节的图片响应式就比较难了。
