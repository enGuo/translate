# SVG 坐标系统之一

SVG 不受 css 盒模型的影响，使得定位和转换这些元素更加灵活，虽然咋一眼看上去不太直观。然而，当你理解 svg 的坐标系统和转换原理后，操作 svg 就会变得非常简单。本篇文章奖讨论控制 svg 坐标系统最重要的三个属性 `viewport`, `viewBox`, 和 `preserveAspectRatio`。

下面是三篇关于 svg 的坐标和转换系统的文章：

* [SVG 坐标系统之一 viewport, `viewBox`, & `preserveAspectRatio`](./svg-coordinate-systems.md)
* [SVG 坐标系统之二 `transform`](./svg-transformations.md)
* [SVG 坐标系统之三 – Establishing New Viewports](./nesting-svgs.md)

为了直观地理解文章的介绍概念，我创建了一个交互 DEMO 允许改变 `viewBox` 和 `preserveAspectRatio` 的值来查看结果。

[DEMO](/demos/interactive-svg-coordinate-system.md)

在迅速看完 DEMO 后记得回来先看文章。

### SVG 画布

画布指的是 SVG 内容的绘制区域。理论上，画布是无限大的。SVG 可以是任意大小。然而，它需要在一个称为 `viewport` 的有限区域内显示，超出 `viewport` 区域的部分会被裁剪，不可见。

### viewport

`viewport` 是 SVG 的可视区域。可以把它当做一个窗口，通过它可以看到一个场景，该场景可能在窗口里完全或部分可见。

SVG viewport 有点像你现在看网页的浏览器的 viewport。网页可以是任意大小，可以比 viewport 宽或者长。然而，只有在 viewport 区域内的部分才可见。

是否可以看到整个 SVG 画布或部分可见取决于画布的大小以及 `preserveAspectRatio` 属性。目前你不需要关心它，接下来会介绍细节。

可以通过设置最外层 svg 元素的 `width` 和 `height` 来指定 viewport 的大小：

```html
<!-- the viewport will be 800px by 600px -->
<svg width="800" height="600">
    <!-- SVG content drawn onto the SVG canvas -->
</svg>
```

在 SVG 中，可以不用设置单位。没有设置单位意味着使用用户单位也就是 `px`，本例中，将呈现为高 600px 宽 800px 的 viewport。

当然也可以指定当我，比如 `em`, `ex`, `px`, `pt`, `pc`, `cm`, `mm`, `in`, 和 百分比.

一旦最外层的 SVG 设置了高宽，浏览器将会初始化 _viewport coordinate system_ 和 _user coordinate system_。

#### 初始化坐标系统

最初的 **viewport coordinate system** 是以左上角 (0,0) 为原点的朝右的 x 轴和朝下的 y 轴，默认单位为像素(px)。与 css 盒模型的坐标系统有点类似。

最初的 **user coordinate system** 建立在 SVG 画布上，和 viewport 坐标系统保持一致。使用 `viewBox` 属性，可以初始化当前坐标系统，可以修改它，此时跟 viewport 的坐标系统不再一致。下一节将讲解如何修改它。

目前没有设置 `viewBox` 属性值，所以用户的 SVG 画布坐标系统跟 viewport 是一样的。

下面几幅图中，灰色的标尺表示 viewport 的坐标系统，蓝色的表示 用户的坐标系统(viewBox)。目前两个坐标重叠在一起。

![Viewport Coordinate System](/images/svg/initial-coordinate-systems.jpg)

在 viewport 和 SVG 画布上建立的初始化系统，灰色单位表示视口坐标，蓝色单位表示用户坐标系统。两个坐标系统都是相同，重合的。

SVG 中的鹦鹉宽 200px ，高 300px，并且依赖于初始化坐标系统。

还可以通过给容器或图形添加 `transform` 属性来指定 `transformations` 来生成新用户空间（即新坐标系统）。后续内容中会详细介绍 `transformations`。

### The `viewBox`

我喜欢把 `viewBox` 当成真实坐标系统。毕竟它是用来在画布上绘制 SVG 图形的坐标系统，它可以比 viewport 大或者小，同样可以在视口中全部或部分显示。

上部分中，在没有指定的情况下用户坐标系统和视口坐标系统是一样的，通过 `width` 和 `height` 设置 viewport 坐标系统后浏览器会创建一样的坐标系统。

通过 `viewBox` 属性设置用户坐标系统，如果用户坐标系统的高宽比和 viewport 坐标系统的一样。它会拉伸以填充视口。（稍后例子中会说明）。然而，如果你的用户和 viewport 坐标系统比例不一致，此时可以使用 `preserveAspectRatio` 属性去指定是否要显示整个系统，同样你可以通过它指定元素在视口中的位置。后续部分将详细讨论这个例子，目前保持比例一致（不使用`preserveAspectRatio`）

讲例子前，先来看下 `viewBox` 的语法。

#### The `viewBox` 语法

`viewBox` 属性接受四个参数：`<min-x>`, `<min-y>`, `width` 和 `height`。

```html
viewBox = <min-x> <min-y> <width> <height>
```

`<min-x>` 和 `<min-y>` 用于指定 viewbox 的左上角坐标，`width` 和 `height` 用于指定 `viewBox` 的高宽。注意，`viewBox` 的高宽可以和 `svg` 元素的不一样，且不能为负值，值为零将不会渲染元素。

另外，viewport 的宽度也可以在 css 中设置为任意值。例如，设置 `width:100%` 将使 SCG 视口充满文档。无论 `viewBox` 的值是多少，它都将映射到最外层 SVG 元素的计算宽度。

设置 `viewBox` 值的例子：

```html
<!-- The viewbox in this example is equal to the viewport, but it can be different -->
<svg width="800" height="600" viewbox="0 0 800 600">
    <!-- SVG content drawn onto the SVG canvas -->
</svg>
```

如果你之前接触过 `viewBox` 可能会看到一些定义，可以使用 `viewBox` 来缩放和平移 SVG 图形。不仅如此，你还可以用 `viewBox` 来调用 SVG 图形，后续将说明。

理解 `viewBox` 与 viewport 的区别的最好方式是将其可视化。先从一个它们具有相同长宽比的例子开始。

#### `viewBox` `viewport` 相同长宽比

先来个简单的例子，`viewbox` 的大小是 viewport 一半的情况。保持原点不变 （`<min-x>` 和 `<min-y>` 为零），一半意味着比例一致。

```html
<svg width="800" height="600" viewbox="0 0 400 300">
    <!-- SVG content drawn onto the SVG canvas -->
</svg>
```

`viewbox="0 0 400 300"` 到底做了什么呢？

* 它指定了从(0,0)的左上角到(400,300)画布的特定区域
* SVG 图形被裁剪到该区域
* 放大该区域（zoom in 相关）来填充整个 viewport
* 用户坐标系统隐射为视口坐标系统，意味着用户单位为视口单位的两倍

下图是实例的结果，灰色为视口坐标系统，蓝色为 `viewBox` 坐标系统。

![](/images/svg/viewbox-400-300-crop.jpg)

在保持比例一致的情况下，指定 viewbox 有点像裁剪图形后缩放以填充整个视口区域。

在 SVG 中绘制的任何图形都依赖于用户坐标系统。

可以把 `viewBox` 想象成谷歌地图。在谷歌地图里，你可以针对某个区域进行缩放。在浏览器视口里面，区域被放大显示。此时，整个地图仍然存在，只是它超出部分被裁剪掉了 （不显示）。

保持宽高比例一致，现在让我们来试一下修改 `<min-x>` 和 `<min-y>` 的值。都设置为 100 （可以为任意值）。

```html
<svg width="800" height="600" viewbox="100 100 200 150">
    <!-- SVG content drawn onto the SVG canvas -->
</svg>
```

`viewBox="100 100 200 150"` 跟像个例子一样具有裁剪效果，图形被裁剪以填充整个视口区域。

![](/images/svg/viewbox-200-150-crop.jpg)

裁剪结果为原点 (100,100) 宽 200 高 150 的图形

用户坐标再次隐射为 viewport 坐标系，用户的 200 单元映射为 viewport 的 800 单元。四倍的放大效果，像上面的截图那样。

还要注意的是，`<min-x>` 和 `<min-y>` 不为零，也就是对图形进行了平移。相当于 svg 画布被移动到了距离顶部 100 左 100 的位置。(`transform="translate(-100 -100)"`)

按规范，viewbox 属性的效果是，使用者提供适当的转换矩阵，然后将用户空间中指定的矩形映射到指定区域（通常是 viewport）的边界。

如前所述：图形裁剪后缩放至视口，规范提示：在某些情况，使用者需要提供平移属性。例如，在最外层的 svg 元素上，如果 viewBox 属性中 `<min-x>` 或 `<min-y>` 指定了零以外的值这时就会平移了。

为了演示，让我们把 `<min-x>` 和 `<min-y>` 设置为 -100 。效果跟 `transform="translate(100 100)"` 一致，缩放后的图形会往右下角平移。修改代码如下：

```html
<svg width="800" height="600" viewbox="-100 -100 400 300">
    <!-- SVG content drawn onto the SVG canvas -->
</svg>
```

效果如图所示：

![](/images/svg/viewbox-400-300-crop-translate.jpg)

跟 `transform` 属性不同的是，viewBox 造成的平移并不会影响其自身的 `x`, `y`, `width` 和 `height` 属性。因此，在上面的例子中，一个具备 `width`, `height` 和 `viewBox` 的 svg 元素，`width` 和 `height` 表示应用 `viewbox` 之前的坐标系统的值。通过上面的例子可以看到，初始(灰色) viewport 坐标系统并不受 `viewBox` 的影响。

另外，就像 `transform` 属性一样，它确实为掐他属性和子元素创建了新坐标系统。在上个例子汇总，由于用户坐标建立了一个新系统，在 viewBox 使用前，它不作为最初的用户坐标系统，它与 viewport 坐标系统时相同的。所有的 `svg` 子元素都会受新坐标系统的影响。

两个例子有点类似，但是我们并不裁剪它而是在 viewport 中扩展它，并查看它如何影响图形。指定一个带有高宽的 viewbox，它比 viewport 更大，但保持纵横比。下节将处理不同比例的情况。

本例中，viewbox 是 viewport 的 1.5 倍

```html
<svg width="800" height="600" viewbox="0 0 1200 900">
    <!-- SVG content drawn onto the SVG canvas -->
</svg>
```

用户坐标系统被放大到了 1200x900 。映射到 viewport 坐标系统就是水平方向用户中 1 单元 等于 `viewport-width / viewBox-width`，垂直方向 `viewport-height / viewBox-height`。也就是 x 和 y 都是 1 等于 0.66。

可视化结果还是最好的理解方式，如图，由于图形依赖于用户坐标系统而非视口坐标系统。所以在视口中看起来会比较小。

![](/images/svg/viewbox-1200-900.jpg)

1200x900 用户坐标系统映射为 800x600 视口坐标系统。

到目前为止，所有示例都符合 viewport 的纵横比。但如果不同呢，会发生什么情况。例如，假设我们将 viewport 的维度设置为 1000x500。此时比例不在相同，结果如图所示：

![](/images/svg/viewbox-1000-500.jpg)

在用户坐标系统下，图形在 viewport 定位情况：

* 整个 viewbox 填充 viewprot
* 保持纵横比不变，viewbox 不会拉伸以覆盖 viewport 区域
* viewbox 的中心位于视图的垂直水平方向

这是默认行为，控制这种行为的是什么？如果我们要修改 viewport 的位置会怎么样呢？此时就得用 `preserveAspectRatio`

### `preserveAspectRatio` 属性

`preserveAspectRatio` 属性用于强制统一的缩放，以保持图形的纵横比。

如果纵横比例不同，纵横比的差异会导致图像失真。因此，如果最后一个例子中的 viewbox 被拉伸以填充两个方向的 viewport，那么图形是这样的：

![](/images/svg/viewbox-1000-500-stretched.jpg)

不同纵横比下，图形被扭曲了，水平缩小，垂直拉伸。

当 viewbox 设置为 `0 0 200 300`，这种失真也是清晰可见的 （当然是不需要的），比 viewport 的尺寸要小。结果如下：

![](/images/svg/viewbox-200-300-stretched.jpg)

不同纵横比下，图形就会失真。

`preserveAspectRatio` 用于强制 viewbox 的缩放比，另外允许你修改默认的居中位置。

#### `preserveAspectRatio` 语法

`preserveAspectRatio` 如下：

```html
preserveAspectRatio = defer? <align> <meetOrSlice>?
```

这对创建新视口非常有帮助（后续介绍）。

`defer` 参数是备选项，仅当你对 `<image>` 使用 `preserveAspectRatio` 时有用。由于 `<image>` 不是本章重点，就此打住。

`align` 表示是否强制统一缩放

如果 `align` 值为 `none` ，例如：

```html
preserveAspectRatio = "none"
```

图形不会强制缩放，跟之前的例子一样。

`preserveAspectRatio` 其他值在保留 viewbox 的纵横比的同时，会强制执行统一缩放，并制定如何对齐 viewport 中的 viewbox。

最后一个 `meetOrSlice` 参数也是可选项，默认值为 `meet`。这个参数指定是否应该在 viewport 中可见整个 viewBox。形式如下：

```html
preserveAspectRatio = "xMinYMin slice"
```

这些值咋一看毫无关联，为了更容易理解，可以把它们想象为 `background-size` 中的 `contain` 和 `cover` 值。工作原理相似，`meet` 跟 `contain`，`slice` 跟 `cover`，具体含义如下：

meet (默认值) - 图形将缩放到:

* 宽高比将会被保留

* 整个 SVG 的 viewbox 在视图范围内是可见的

* 尽可能的放大 SVG 的 viewbox，同时仍然满足其他的条件。

在这种情况下，如果图形的宽高比和视图窗口不匹配，则某些视图将会超出 viewbox 范围（即 SVG 的 viewbox 视图将会比可视窗口小）。

slice - 图形将缩放到:

* 宽高比将会被保留

* 整个视图窗口将覆盖 viewbox

* SVG 的 viewbox 属性将会被尽可能的缩小，但是仍然符合其他标准。在这种情况下，如果 SVG 的 viewbox 宽高比与可视区域不匹配，则 viewbox 的某些区域将会延伸到视图窗口外部（即 SVG 的 viewbox 将会比可视窗口大）。

例如，`viewBox` 的大小为 200x300，让 `align` 为默认值，设置 `meet` 和 `slice` 的值，效果如下：

![](/images/svg/viewbox-200-300-meet-vs-slice.jpg)

`align` 的默认值是 `xMidYMid`，在这两种情况下，图形处于缩放，这样它的中轴与视图的中轴对齐。

还记得 viewBox 的 `<min-x>` 和 `<min-y>` 值吗？我们将修改他们的值，另外两个轴 `max-x` 和 `max-y` 也就是 `<min-x> + <width>` 和 `<min-y> + <height>`。另外，`mid-x` 和 `mid-y` 代表 `<min-x> + (<width>/2)` 和 `<min-y> + (<height>/2)`。

如果有些混乱可以看下下图，这些轴代表了什么。

![](/images/svg/viewbox-x-y-axes.jpg)

`<align>` 属性值表示是否强制统一缩放，当 SVG 的 viewbox 属性与视图属性宽高比不一致时使用. `<align>` 属性的值一定是下列的值之一:

* none - 不会进行强制统一缩放，如果需要，会缩放指定元素的图形内容，使元素的边界完全匹配视图矩形。(注意：如果 `<align>` 的值是 none ，则 `<meetOrSlice>` 属性的值将会被忽略。)

* xMinYMin - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。

* xMidYMin - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。

* xMaxYMin - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值+元素的宽度与视图的 X 的最大值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。

* xMinYMid - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。

* xMidYMid (默认值) - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。

* xMaxYMid - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值+元素的宽度与视图的 X 的最大值对齐。将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。

* xMinYMax - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值+元素的高度与视图的 Y 的最大值对齐。

* xMidYMax - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值+元素的高度与视图的 Y 的最大值对齐。

* xMaxYMax - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值+元素的宽度与视图的 X 的最大值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值+元素的高度与视图的 Y 的最大值对齐。

可以跟 `background-position: 100% 100%;` 联系起来

所以通过设置 `preserveAspectRatio` 的属性，`align` 和 `meetORSlice`，可以决定是否要强制统一缩放，在 viewprot 如何对齐，以及是否要在 viewport 显示整个内容。

有时候，viewBox 的有些值会有类似的效果，例如在之前的例子 `viewBox="0 0 200 300"` ，通过设置 `align` 和 `meetORSlice` 也能有相同效果：

![](/images/svg/viewbox-meet-align-same.jpg)

viewBox 的对齐方式通过设置不同的 align 值得到。**The `meetOrSlice` value is set to `meet`**。

如果把 `meetORSlice` 设置为 `slice` 会得到不同的结果。注意，`viewBox` 是拉伸至整个视口的。x 轴从 200 拉伸到 800。为了保持 viewbox 的纵横比，y 轴在底部被 "切掉"，但是，你可以将图像扩展到视口的高度以下。

![](/images/svg/viewbox-slice-align-same.jpg)

使用不同的 viewBox 对齐方式得到不同的结果。**The `meetOrSlice` value is set to `slice`**.

当然，不同的 `viewBox` 值会与在这里使用的 200x300 不同。简单起见，不会讲更多的例子，你可以通过访问下一节的链接来查看交互式演示。

开始之前，要注意的是如果 `<min-x>` 和 `<min-y>` 变化的话，mid-x, mid-y, max-x, and max-y 值会发生变化，你可以再交互式演示中测试一下。

下图是测试的结果

![](/images/svg/viewbox-axes-changed-min-x-min-y.jpg)

### The Interactive Demo

最直观的方式就是用交互式演示来测试这些属性，我弄了一个可以修改这些属性的简单交互式 DEMO。

![Screenshot of the interactive demo](/images/svg/viewbox-demo-screenshot.jpg)

[Check the interactive demo out.](/demos/interactive-svg-coordinate-system.md)

希望这个文章对你理解 SVG viewport ，`viewBox` 和 `preserveAspectRatio` 的概念会有所帮助。如果你想了解更多关于 SVG 坐标系统的只是，比如，嵌套坐标系统，建立新坐标系统和 SVG 中的变换，请继续关注本系列的其余部分。非常感谢你的阅读!

猜你喜欢：

* [Structuring, Grouping, and Referencing in SVG – The `<g>`, `<use>`, `<defs>` and `<symbol>` Elements](http://sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/)
* [Clipping in CSS and SVG – The `clip-path` Property and `<clipPath>` Element](http://sarasoueidan.com/blog/css-svg-clipping)
