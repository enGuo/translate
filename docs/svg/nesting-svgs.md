# SVG 坐标系统和变换之三

在 SVG 绘图的任何位置，可以通过嵌套 `<svg>` 或使用 `<symbol>` 元素，在本文中，将了解如何实现以及这对于控制 SVG 元素和让它们更自适应(或者流式)有什么帮助。

这是本系列最后一篇文章。第一篇讲了 SVG 坐标系统的基础知识，特别介绍了 SVG viewport 和 `viewBox` 和 `preserveAspectRatio` 属性，第二篇讲的是关于 SVG 转换所有的相关知识。

下面是三篇关于 svg 的坐标和转换系统的文章：

* [SVG 坐标系统之一 viewport, `viewBox`, & `preserveAspectRatio`](./svg-coordinate-systems.md)
* [SVG 坐标系统之二 `transform`](./svg-transformations.md)
* [SVG 坐标系统之三 – Establishing New Viewports](./nesting-svgs.md)

在读这篇文章前，假设你已经学习了第一篇文章关于 SVG 视口和 `viewBox` 和 `preserveAspectRatio` 属性，没读完第二篇也没关系，你可以继续阅读本文。

### 嵌套 svg 元素

第一部分，我们讨论 svg 元素如何给画布内容建立视口的。在 SVG 绘制区域内，可以通过嵌套 SVG 元素可以建立一个新的视口，每个新视口也包含了一个新视口坐标系统和用户坐标系统。

例如：

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- some SVG content -->
    <svg>
        <!-- some inner SVG content -->
    </svg>
<svg>
```

第一个要注意的点是，里面的 svg 元素并没有特别指定 `xmlns` 命名空间，因为它默认跟最外层的 svg 元素命名空间保持一致。当然如果是在 HTML5 文档里面，最外层 svg 同样也不需要命名空间。

在父级 SVG 下，可以通过嵌套 SVG 来组合定位元素。现在，你有可以使用 `<g>` 来包裹想要组合和定位的元素。可以用 `transform` 属性来定位，不过，推荐使用 `x` 和 `y` 坐标系统。

另外，svg 元素需要指定 `width` 和 `height` 属性，而 `<g>` 不需要。也就是说，可能并不需要使用 `<svg>` ，因为由此建立的新坐标视口和系统，可能根本就用不到。

给 `<svg>` 指定高宽，相当于通过 `x`，`y`，`width`，`height`属性给里面的内容作了显示限制了，即超出内容会被裁剪掉。

`x` 和 `y` 默认为 0。如果不指定内嵌 svg 元素的高宽，将会默认为父级 svg 的高宽。

另外，指定用户坐标系统也会影响内嵌的 svg 内容。

内嵌 svg 里面的元素指定百分比值的话会按内嵌的 svg 来计算而不是最外层的 svg。内嵌 svg 的百分比是按最外层的来计算的。例如，下面的结果是内嵌 svg 宽为 400，内部的矩形将是 200

```html
<svg width="800" height="600">
    <svg width="50%" ..>
        <rect width="50%" ... />
    </svg>
</svg>
```

如果最外层 svg 宽度设置为 100%，(例如，让它铺满文档)，接着内嵌 svg 将会适当地放大和缩小以保持宽度为外层的一半。这个技巧非常有用。

内嵌 svg 对于在画布上添加灵活和流畅性特别御用，我们知道用 `viewBox` 值和 `preserveAspectRatio` 就可以实现响应式的 svg。最外层的 svg 设为容器的百分百，接着就可以用 `viewBox`
和 `preserveAspectRatio` 来改变视口。

这样做的话，整个画布的元素都是自适应的，牵一发动全身。但有时，我们只需要某个元素自适应，这时就可以嵌套 svg 了。

在父级内部的 svg 元素可以有自己的坐标系统，同样也可以有自己的 `viewBox` 和 `preserveAspectRatio` 属性，方便用来设置内部内容的大小和位置。

可以通过内嵌 svg 来实现某个元素的自适应，给 svg 设定相对于最外层 svg 的自适应宽度，在指定 `preserveAspectRatio="none"` 来让内部的图形按容器宽度放大缩小。（注意，svg 可以任意嵌套多级，简单起见，本文就嵌套一层。）

来，看一些例子来说明为什么嵌套 svg 特别有用。

#### 示例

假设我们有如下 svg：

![](/images/svg/svg-nesting-example-1.png)

上面的 svg 是自适应的，整个 svg 图形会自适应屏幕大小。下面的截图是几个界面改变大小后的效果。注意，svg 内容是如何根据 svg 的视图和彼此保持所有初始位置的。

![](/images/svg/svg-nesting-example-1-resized.png)

通过内嵌 svg 可以基于 svg 视口定位某个元素。这样当 svg 视口改变（例如最外层 svg 的大小改变了）时，元素可以相互独立响应。

注意，你必须熟悉 svg 视口，`viewBox` 和 `preserveAspectRatio` 。

来做一个效果，当屏幕被调整大小时，鸡蛋的上部分会被移动，这样里面可爱的鸡就会向外窥视，如下图所示：

![](/images/svg/svg-nesting-example-1-new.png)

为了实现这种效果，鸡蛋的上部分必须通过将其封装在自己的 svg 中来与其他部分分离。给这个 svg 添加一个 `upper-shell` ID。

接着，确保 `svg#upper-shell` 跟最外层的 svg 的宽高一致。可以通过给 svg 设置 `width="100%" height="100%"` 来实现或者不设置任何值。不设置值的话会自动扩展为最外层的高宽。

最后，为了确保壳的上部分被提升或定位在 `svg#upper-shell` 的顶部中心，需要适当调整 `preserveAspectRatio` 的值，`xMidYMin` 确保了 `viewBox` 位于视口的顶部中心。

代码如下：

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- ... -->
    <svg viewBox="0 0 315 385" preserveAspectRatio="xMidYMid meet">
        <!-- the chicken illustration -->
        <g id="chicken">
            <!-- ... -->
        </g>
        <!-- path forming the lower shell -->
        <path id="lower-shell" fill="url(#gradient)" stroke="#000000" stroke-width="1.5003" d="..."/>
    </svg>

    <svg id="upper-shell" viewBox="0 0 315 385" preserveAspectRatio="xMidYMin meet">
        <!-- path forming the upper shell -->
        <path id="the-upper-shell" fill="url(#gradient)" stroke="#000000" stroke-width="1.5003" d="..."/>
    </svg>
</svg>
```

为了简化示例代码，我去掉了给蛋壳着色的渐变和形状路径部分。

注意 `svg#upper-shell` 的 `viewBox` 跟最外层的 `svg`值一样，目的是让其在大屏幕保持原有外观。

大致描述一下：有裂缝的鸡蛋里面藏着一只小鸡，接着在它的上面创建一个用嵌套 svg 实现的蛋壳图层。嵌套的 svg 跟外层 svg 具有相同的 `viewBox` 。最后，确保无论屏幕如何改变，内部 svg 的 viewBox 都要紧贴视口的顶部，当把屏幕拉地非常细窄时，上面的蛋壳就会被向上提升，鸡就出现在了画布中。

![](/images/svg/svg-nesting-example-1-layered.png)

当屏幕尺寸缩小时，svg 就变细了，蛋壳部分就通过 `preserveAspectRatio="xMidYMin meet"` 定位在了视口的顶部。

![](/images/svg/svg-nesting-example-1-viewbox.png)

透明紫色图层表示内嵌 svg 建立的视口。透明的橘色盒子表示 svg 内部的 `viewBox`。（通过 `preserveAspectratio="xMidYMin meet"` 定位在视口的顶部中心）

点击下面的按钮看下 svg 实例。记得改变浏览器视口大小来观察 svg 的变化。

[View Live Example](../../images/svg-nesting-chick.svg)

嵌套或对 svg 分层允许在保持元素纵横比的同时，将 svg 的一部分相对于不断变化的视图端口进行定位。因此，图像在不扭曲内部元素的情况下进行了调整。

如果想把整个鸡跟壳分离出来，可以把壳的下半部分包裹在自己的 svg 中，也可以用相同的 `viewBox` 。然后，为了确保下壳层向下移动并粘附到视口的底部中心，可以使用 `preserveAspectRatio="xMidYMax meet"` 来定位它。代码如下：

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <svg id="chick" viewBox="0 0 315 385" preserveAspectRatio="xMidYMid meet">
        <!-- the chicken illustration -->
        <g id="chick">
            <!-- ... -->
        </g>
    </svg>

    <svg id="upper-shell" viewBox="0 0 315 385" preserveAspectRatio="xMidYMid meet">
        <!-- path forming the upper shell -->
        <path id="the-upper-shell" fill="url(#gradient)" stroke="#000000" stroke-width="1.5003" d="..."/>
    </svg>

    <svg id="lower-shell" viewBox="0 0 315 385" preserveAspectRatio="xMidYMax meet">
        <!-- path forming the lower shell -->
        <path id="the-lower-shell" fill="url(#gradient)" stroke="#000000" stroke-width="1.5003" d="..."/>
    </svg>
</svg>
```

内嵌的 svg 宽高都跟最外层的 svg 一样。有三个图层，分别表示，上壳，下壳，鸡。每个图层的 `viewBox` 都一样，只是 `preserveAspectRatio` 不同。

![](/images/svg/svg-nesting-example-1-2.png)

实例演示通过缩小屏幕来让一个藏在蛋壳里的小鸡慢慢显示的过程，当然你也可以改变一下：在小屏幕里面显示某个图形，通过放大屏幕来显示更多的内容。比如，svg 变宽后水平方向显示了更多的元素。

可以更创意，根据不同的屏幕尺寸显示和隐藏元素。使用媒体查询，并使新元素以某种方式定位以达到某种效果。

另外记得，svg 并不需要跟容器的高宽相同。可以根据内容来指定高宽，以此裁剪内容。当然这一切都取决于你要实现什么样的效果。

#### 内嵌 svg 实现流式元素

不仅可以在保持元素的纵横比的同时定位元素，还可以使用嵌套的 svg 来规定某些元素是流动的。通过不保留这些特定的元素的纵横比类实现。

例如，想让 svg 中的某个元素可铺满，实现方式是将它包裹在 svg 中，然后使用 `preserveAspectRatio="none"` 。此时，这个元素就会扩大填满整个窗口的宽度，同时保持其他元素的长宽比和定位。有点像上个例子。

```html
<svg>
    <!-- ... -->
    <svg viewBox=".." preserveAspectRatio="none">
        <!-- this content will be fluid -->
    </svg>
    <svg viewBox=".." preserveAspectRatio="..">
        <!-- content positioned somewhere in the viewport -->
    </svg>
    <!-- ... -->
</svg>
```

[Jake Archibald](http://jakearchibald.com) 弄了一个简单的例子，DEMO 在这 [here](https://jsbin.com/loceqo/1)

### 其他建立新视口的方式

`svg` 元素不是建立新视口的唯一方式。下面将介绍另外一种方式

#### 通过 `<use>` `<symbol>` 建立新视口

当用 `use` 元素实例化后，`symbol` 会定义新视口。

用法如下：

```html
<svg>
    <symbol id="my-symbol" viewBox="0 0 300 200">
        <!-- contents of the symbol -->
        <!-- this content is only rendered when `use`d -->
    </symbol>
    <use xlink:href="#my-symbol" x="?" y="?" width="?" height="?">
</svg>
```

上面 `x` 和 `y` 中的问号表示这些值可自定义。不指定则默认为 0，同样也可以不指定高宽。

当你使用 `use` 调用一个 `symbol`，你会发现在 DOM 调试工具中，你不会看到 `symbol` 的内容。因为 `use` 引用的内容被渲染为 shadow tree，只有在支持 shadow DOM 查看的调试工具中才能看到。

当使用 `symbol` 时，它被深入克隆岛生成的影子树中，生成的 svg 始终有显示的高宽。如果 `use` 元素上提供了高宽，那么这些属性将会被转移到生成的 svg 中，如果没有，则默认为 100%。

此时，使用 `use` 跟之前的嵌套 svg 是一样的。嵌套 svg 的 `viewBox` 跟 `symbol` 的保持一致。

目前，可以通过 `use` 元素 （`x`，`y`，`width`，`height`）指定新视口的尺寸和位置，`symbol` 的 `viewBox` 值也可以自定义。最后 `symbol` 的内容就在该视口内显示。

最后，同样值得注意的是 `symbol` 元素也接受 `preserveAspectRatio` 属性值，允许你在 `use` 中使用 `viewBox`。是不是很酷，你可以像上部分一样处理嵌套 svg。

[Dirk Weber](http://eleqtriq.com) 弄了一个通过 `symbol` 来模拟 css 边框图片的例子 [here](http://w3.eleqtriq.com/2014/02/the-4-slice-scaling-technique-for-svg/)。

#### 通过 svg 中的 `<image>` 建立新视口

`image` 元素表示在当前用户坐标系统中，在特定矩形中展示一个完整的文件内容。`image` 的类型可以是 PNG 或者 JPEG 也可以引用 “image/svg+xml” 类型的文件。

引用 svg 文件的 `image` 会建立新的视口，规范定义引用的资源将是一个 `svg` 元素。

```html
<image xlink:href="myGraphic.svg" x="?" y="?" width="?" height="?" preserveAspectRatio="?" />
```

`<image>` 接受很多属性，比如之前说介绍过的 `x` `y` `width` `height` 和 `preserveAspectRatio`。

通常，svg 文件包含一个 `svg` 跟元素，但是这个元素可能没有特定的定位和尺寸，以及 `viewBox` 和 `preserveAspectRatio` 值。

当引用一个 svg 图片文件，根 svg 的`x`, `y`, `width` 和 `height`会被忽略。除非 `image` 元素的 `preserveAspectRatio` 设置为了 `defer`，否则也会被忽略。`image` 元素的 `preserveAspectRatio` 属性定义了 svg 图片内容如何适应视口。

当 `preserveAspectRatio` 属性通过引用内容指定后 `viewBox` 值就会被使用。（例如，svg 文件最外层的 svg 元素设置了 `viewBox`）对于那些光栅（PNG，JPEG）的边框（`image` 元素的 `viewBox` 被预设为了 `0 0 图片宽 图片高`）当没有预设值（例如，svg 的根 svg 元素没有指定 `viewBox` 属性。）`preserveAspectRatio` 属性会被忽略，所以就剩 `x` 和 `y` 属性来显示内容了。

例如，如果图片元素引用了 PNG 或 JPEG 和 `preserveAspectRatio="xMinYMin meet"`，图片的比例会保留，图片会被尽可能地在整个视口中放大，图片的左上角会跟视口的左上角对齐（在 image 元素上通过 `x`，`y`，`width`，`height`属性定义的）

如果 `preserveAspectRatio` 值为空，图片的比例就不会被保留。图片左上角 (`x`, `y`)，右下角 (`x`+`width`, `y`+`height`)。

#### 用 `<iframe>` 建立新视口

用 `iframe` 的情况跟 `image` 很像，它也可以有 `x`, `y`, `width`, `height` 和 `preserveAspectratio`。

#### 用 `<foreignObject>` 建立新视口

`foreignObject` 元素建立了一个新视口去渲染内部元素。

`foreignObject` 允许你在 svg 中添加非 svg 内容。foreignObject 通常设定为不一样的命名空间。例如，你可以添加在 svg 元素内添加 HTML 元素。

`foreignObject` 元素允许用 `x`, `y`, `height`, 和 `width` 修改对象的位置和大小。

如果你对此感兴趣，可以看下 [MDN entry](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) 或者 [this practical use case](http://thenittygritty.co/css-masking) by [Christian Schaeffer](http://twitter.com/derschepp) on [The Nitty Gritty Blog](http://thenittygritty.co/).

### 总结

通过嵌套 svg 来建立新的视口和坐标系统，可以专门控制 svg 中的某些部分，此外你无法以相同的方式控制这些。

文章通篇围绕 demo 和用例来思考，在处理 svg 时，嵌套 svg 能给我们更好的控制和灵活性。自适应的 svg 可以创建整洁的效果，在 svg 内容部实现流体元素，在高分辨率屏幕上模拟 css 边框图像，等等。

你有没有更多用嵌套 svg 的例子呢，思考下更有创意的例子?

本文是 `SVG 坐标系统和变换` 的最后一篇了，感谢阅读。
