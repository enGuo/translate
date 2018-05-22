---
layout: SpecialLayout
---

# 响应式图片

在 [Responsive Design](./Chapter-10.md) 中, 我们学习了如何通过媒体查询实现移动，平板，桌面布局。现在的我们加入图片，同样适配用户的不同设备。

![Diagram: low-resolution image sent to standard screen desktop devices and all mobile devices versus high-resolution image sent to retina desktop devices](/images/responsive-images-overview-890631.png)

问题是，图像具有固定的尺寸。我们不能把 500x250 像素的照片放大到超过 500 像素的范围，因为它会被像素化，视网膜显示器和移动设备的情况更为复杂。让图片响应式，需要考虑以下三件事：

* 设备的大小
* 图片的大小
* 设备屏幕分辨率

这将比只关注设备宽度的媒体查询更加困难。但是别担心，有些标准的方法可以解决所有这些问题。我们将一步一步地向你介绍这些问题。

## 安装

为了测试响应式图片，我们需要一个响应式网站。本章我们将延用上一章的例子，我们将添加两张图片，看起来很简单，但是这些图片将随着用户设备自适应。

![Web page with large photo in header and line art illustration in content](/images/site-with-responsive-images-1f0431.png)

先来下载图片 [download these image assets](https://internetingishard.com//html-and-css/responsive-images/responsive-images-5e8a2c.zip) 然后添加到项目目录的 `images` 下

当然也可以直接看源码 [complete example project](https://internetingishard.com//html-and-css/responsive-images/example-7be588.zip)

![Screenshot: Atom’s file browser after unzipping the project](/images/project-files-d6d457.png)

在这两种情况下，您的项目文件在继续之前应该是这样的。创建多个副本。( 列如，`illustration-big.png` 和 `illustration-small.png`)。我们将让浏览器根据设备的大小和屏幕的分辨率选择其中一个。

## 视网膜屏幕

这是我们第一次接触视网膜设备，先来了解下屏幕分辨率。视网膜屏幕的像素是标准分辨率屏幕的两倍。也就是说，每个视网膜像素相当于 4 个标准像素。这对如何在 web 浏览器中显示图像有很大的影响。

![Diagram: standard-resolution screen with 4 pixels versus high-resolution screen with 16 pixels](/images/standard-vs-retina-resolution-64f6b6.png)

要在视网膜设备上正确渲染，图片需要两倍尺寸，列如，你想在页面上添加一个 500x250 像素的图片，相应的文件需要 1000x500 像素。

![Diagram: High-resolution image shrunk to half size and displayed on retina screen](/images/retina-2x-image-dimensions-5a4673.png)

这实际上是一种简化，并非所有的视网膜屏幕都是相同的。例如，Iphone 6 Plus 每英寸的像素是标准屏幕的 3 倍。本教程关注的是 2x 用例，当同样的技术也适用于 3x 屏幕。

更重要的是，标准显示器和较小的设备其实不需要高分辨率的图片。另外，发送大量不必要的数据通常会导致糟糕的用户体验。

## SVG 响应式图片

早些时候使用 SVG 图片来解决这些问题的。SVG 是矢量图，可以避免浏览器分辨率问题。让我们添加如下代码：

```html
<div class='section content'>
  <img class='illustration' src='images/illustration.svg' />
</div>
```

浏览器自动扩展 SVG 视网膜设备，所以这 500x250 像素的 svg 图片在标准和视网膜设备下表现一致。

svg 让我们忘记了屏幕分辨率问题。为了适配平板和移动布局，我们还是得缩小图片。火狐浏览器会自动完成，但如果你用 chrome 打开这个界面，当你缩小浏览器时，图片还是一样的大小。

为了在 Chrome 中获得自适应的图片，应该让图片的宽度跟它的容器一样。添加如下代码：

```css
.illustration {
  width: 100%;
}
```

当我们给图片设置`100%`宽度时，在保持纵横比的情况下会自动计算高度。移动端虽然解决了，但是桌面端并不是我们要的。

![SVG image shrinking to fit mobile and tablet widths, but very large in desktop layout](/images/responsive-svg-image-bfa291.png)

这适用于某些场景，但现在我们需要把桌面端的图片给显示了。可以通过行内样式来给图片添加最大宽度：

```html
<div class='section content'>
  <img class='illustration' src='images/illustration.svg' style='max-width: 500px'/>
</div>
```

一般情况是不会使用行内样式的，但是对于这种描述图像固有属性的情况，图像的实际大小更为重要，直观。因此在 HTML 写内联样式比单独写会更有意义。

![Adding an inline style to limit the size of the SVG image](/images/max-width-inline-style-073cc7.png)

## PNG, GIF, and JPG

并不是所有的图片都是 SVG，有时你需要处理 PNG,GIF 和 JPG 这些像素图片。它们不是矢量的，因此它们比 SVG 对屏幕分辨率更敏感。

不考虑优化，那么用像素图片会更简单。试着替换现有图片：

```html
<div class='section content'>
  <div class='illustration'>
    <img src='images/illustration-big.png' style='max-width: 500px'/>
  </div>
</div>
```

我们改变了 HTML 结构，在另一个容器中嵌套了 `<img/>` 标签，如果不这么做，图像会扭曲。因为 flexbox 会将它的高度设置为和容器一样。这需要稍微调整下 css：

```css
.illustration img {
  width: 100%;
  display: block;
}
```

注意图片的后缀名 `-big`。这是高分辨率版本的 PNG，尺寸为 1000x500。视网膜设备需要这个 2x 大小来清晰地显示图片。如果我们使用 500x250 像素的版本。在视网膜下会变得很模糊。

![Diagram: serving a high-resolution image to both standard screens and retina screens (which is wasteful)](/images/retina-responsive-images-9f367b.png)

最暴力的方式是，不管什么设备，我们都用最高分辨率的图片，也就是说对于非视网膜设备是过量的。下一节中，讲一下更为优雅的方式。

## 响应式图片优化

不同设备有不同的图像要求。html 提供了一种为用户设备选择最佳图片的方法。在接下来的几节中好我们将讨论优化响应式图片的是三个场景：

* 标准分辨率不需要具备视网膜质量的图片。
* 可以使用标准质量图片的视网膜移动设备，因为它已经缩小很多。
* 使用宽图的桌面布局，以及使用较高图片的移动布局。

第一种情况最简单，但是没办法用于第二个场景，第二种是对大图，尤其是全屏图片的一个非常重要的优化。第三种情况适合比较有想象力的时候。

## 视网膜优化用 srcset

高分辨图片是很大的，基本上是低分辨率文件的两倍多。当用户实际上不需要高清图时，这是没有意义的。

将 `srcset` 属性添加到我们的元素中，可以将高分辨率的图片只显示在视网膜设备上，做如下修改：

```html
<div class='illustration'>
  <img src='illustration-small.png'
       srcset='images/illustration-small.png 1x,
               images/illustration-big.png 2x'
       style='max-width: 500px'/>
</div>
```

`srcset` 属性只想一个备选图片文件列表，以及定义浏览器何时使用它们。`1x` 告诉浏览器显示在标准分辨率屏幕上，`2x` 用于视网膜屏幕。老浏览器不识别 `srcset` 则用 `src` 属性。

![Diagram: serving a low-resolution image to a standard screen and a high-resolution image to retina screens](/images/retina-responsive-images-with-srcset-707397.png)

通常，低分辨和高分辨率的图片是完全一样的(除了尺寸)。但为了区分，文明让标准图片为黄色，视网膜的为蓝色。

不在真实设备上看是没效果的。所以我们将上一节的代码复制过来。你会发现在视网膜设备下是蓝色。标准屏幕下是黄色。

![](/images/illustration-small.png)

如果你视网膜设备上跑这些例子，刚好你可以试下把 `2x` 改为 `1x` ，你会发现图片变模糊了。

## 使用 srcset 进行屏幕宽度优化

真棒!我们可以为非视网膜设备节省额外的字节了。但是，还有一个问题。如果用户使用的是视网膜只能手机，它将下载高分辨率的图像，即使标准的版本已经足够了。

![Diagram: low-resolution image sent to standard screen desktop devices and all mobile devices versus high-resolution image sent to retina desktop devices](/images/screen-width-optimization-with-srcset-6dd918.png)

设想我们想在网站的`.header`元素展示一张大图，在桌面布局中头部的宽度为 960 像素，所以在视网膜设备下，我们需要 1920 像素的图片。同样我们为标准屏幕备了一张 960 像素的图片。现在，如果是视网膜的智能手机。通常宽度应该小于 400 像素，也就是我们只需要 800 像素的图片。

此时，只需要标准分辨率的图片给视网膜下的智能手机。

也就是说，我们最终要视频的是最后渲染的尺寸，而不是设备的屏幕分辨率。让我们做如下修改：

```html
<div class='section header'>
  <div class='photo'>
    <img src='images/photo-small.jpg'
         srcset='images/photo-big.jpg 2000w,
                 images/photo-small.jpg 1000w'
         sizes='(min-width: 960px) 960px,
                100vw'/>
  </div>
</div>
```

同样是 `srcset` ，但不是用 `1x` 和 `2x` ，而是 `2000w` 告诉浏览器用大图。`1000w` 用 1000 像素的图片。你可能会注意到 `w` ，它是特殊的单位，仅用于这种图像优化场景。

![Diagram: srcset=1000w as width of the low-resolution image file, srcset=2000w as width of the high-resolution image file](/images/img-srcset-physical-width-2153b0.png)

对于一个设备来说，仅图像宽度不足以确定它应该加载哪个图像。我们还需要告诉它图像的最终渲染宽度是多少。这就是 `size` 属性的由来。它定义了一系列媒体查询，以及当媒体查询生效时图像的呈现宽度。

![Diagram: sizes=100vw as width of the image in the mobile layout, sizes=960px as width of the image in the desktop layout](/images/img-sizes-display-width-1f02b4.png)

在这里，我们说当屏幕至少是 960 像素宽时，图像也将是 960 像素宽。否则，"100vw" 默认值告诉浏览器图像的宽度将是 "视口宽度" 的 100%。详情参阅 [`vw` unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length) 所有这些都匹配了 css 中的图像调整行为。

说到这一点，我们需要做一些修改来正确定位新的头部图像。添加如下修改：

```css
.header {
  height: auto;
  justify-content: inherit;
  align-items: inherit;
}

.photo img {
  width: 100%;
  display: block;
}
```

记住，我们的分辨率照片是 1000 像素宽，这意味着 2x 视网膜设备可以使用它，只要他们的屏幕宽度小于 500 像素。在 Firefox 中，当窗口宽度大于 500 像素，而非视网膜版本宽度更窄时，你应该能够跳转浏览器的大小以查看视网膜版本。

我们现在为移动设备提供 115kb 的图像，而不是强迫它们使用高分辨率的 445kb 的图像，我们解决了一个大问题，特别是对于那些大量使用图片的网站。

### 用 Chrome 测试

这一技术在 Chrome 上运行良好，单并不准确。如果 Chrome 已经在本地缓存了，它将永远使用高分辨率版本，这意味着，我们不能通过缩小窗口来看到低分辨率版本。必须通过打开一个隐身窗口来避免本地缓存。然后在加载页面之前，避免加载 "photo-big.jpg" 窗口。

## Art Direction Using `<picture>`

在优化数据使用方面，上一节已经做得很好过来。但响应式图像优化还可以更多。

它可以通过向用户发送完全不同的图片来优化布局，这取决于他们的设备。与之前对比，该部分优化了不同设备下的相同图片。例如，我们的头照片非常宽。如果我们能裁剪一个更高版本的，并将其呈现给移动设备而不是桌面版本，不是更好吗?

![Diagram: serving a tall-cropped image to mobile devices and a wide-cropped image to standard- and high-resolution desktop devices](/images/art-direction-with-picture-764252.png)

为此，我们需要 `<picture>` 和 `<source>` 元素。前者起到包裹作用，后则有条件地根据媒体查询加载图像。修改如下：

```html
<div class='section header'>
  <div class='photo'>
    <picture>
      <source media='(min-width: 401px)'
              srcset='images/photo-big.jpg'/>
      <source media='(max-width: 400px)'
              srcset='images/photo-tall.jpg'/>
      <img src='images/photo-small.jpg'/>
    </picture>
  </div>
</div>
```

从概念上讲，这与 css 中使用媒体查询非常相似。在每个 `source` 元素中，`media` 属性定义了图片加载的条件。`srcset` 定义了要加载的图片文件。`<img>` 只是作为旧浏览器的兼容。当你缩小浏览器窗口时，你应该能够看到照片的高版本。

![Mobile web page with tall-cropped image and desktop web page with wide-cropped image](/images/art-directed-mobile-image-91ca9e.png)

这种级别的控制会让设计师非常高兴，但结果是浏览器不会自动选择最优的图像。这意味着我们失去了视网膜优化，只要屏幕宽度是 401 或者更大好的浏览器就会一直使用高分辨率，宽裁剪的图像。

虽然可以结合两者优点，但很快就会变得非常复杂。我的建议是坚持 `1x` 和 `2x` 版本的 `srcset` ，它的宽度小于 600 像素，使用 `srcset` 和 `size` 的方法从上一节中获得更大的图片，并且在必要时，保留 `<picture>`。

## 总结

虽然响应式图片看起来很复杂，但实际只有两个问题需要解决：

* 让图像适合移动布局，同时留意它们的自身尺寸。
* 避免用户下载过大的图片文件。

对于前者，我们通过让设置内联 `max-width` 来限制尺寸，另外不超过时让图片占满容器。对于后者，我们使用 `srcset` 类优化屏幕分辨率，`srcset` 加上 `sizes` 来优化设备宽度。最后用 `<picture>` 手动控制图片文件的显示。

[Responsive design](./Chapter-10.md) 是一个不断发展的主题。浏览器直到最近才实现了本章所涵盖的图像优化技术，尽管响应式设计以及成为了多年来的标准。虽然用于创建响应式网站的技术可能会发生变化，但适配设备的基本问题永远不会消失。所以，即使你最终需要学习一些新的工具，我们刚刚介绍的基本概念应该永远和你在一起。

最后五章完全集中在布局上。我们探索了浮动，flexbox，高级定位，以及如何将所有这些概念应用到不同的屏幕宽度。这几乎是你需要用到 HTML 和 CSS 布局的所有网页知识。下章将回到 HTML 的世界，引入一堆新元素，让搜索引擎对我们的网站更加满意。
