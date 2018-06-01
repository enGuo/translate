# SVG 坐标系统和变换之二

SVG 元素可以通过缩放，平移，倾斜和旋转来实现跟用 css 来变换 HTML 元素类似的效果。然而，涉及到坐标系统变换产生的影响必然有一定差别。在这篇文章中我们讨论 SVG 的 transform 和 css 属性。包括如何使用，以及你必须了解的 SVG 坐标系统变换的知识。

这是 SVG 坐标系统和变换之二，上一篇介绍了必备的 SVG 坐标系统相关基础知识，特别是 `viewBox` 和 `preserveAspectRatio` 属性。

* [SVG 坐标系统之一 viewport, `viewBox`, & `preserveAspectRatio`](./svg-coordinate-systems.md)
* [SVG 坐标系统之二 `transform`](./svg-transformations.md)
* [SVG 坐标系统之三 – Establishing New Viewports](./nesting-svgs.md)

继续阅读前，请确保你已经了解了 [SVG 坐标系统之一 viewport, `viewBox`, & `preserveAspectRatio`](./svg-coordinate-systems.md) 的相关知识。

### `transform` 属性值

`transform` 属性用于给元素声明一个或多个变换效果。 属性值以逗号分隔，例如 **rotation**, **scaling**, **translation**, **skewing** 。变换函数跟 css 中 transform 原理类似，只是参数不同。

注意下面的函数语法只在 `transform` 属性中有效。

#### Matrix

可以通过 `matrix()` 函数给 SVG 元素添加一个或多个变换相关。语法如下：

```html
matrix(<a> <b> <c> <d> <e> <f>)
```

上述声明通过一个有 6 个值的变化矩阵声明一个变换。`matrix(a,b,c,d,e,f)` 等同于 **matrix \[a b c d e f\]**

如果不精通数学最好不要用这个函数。而对于精通的，可以阅读 [here](http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined) 获取更多数学知识。因为这个函数比较少用，就此跳过。

#### Translation

平移一个 SVG 元素可以通过 `translate()` 函数。语法如下：

```html
translate(<tx> [<ty>])
```

`translate()` 接受一个或两个值，分别代表水平跟垂直。`tx` 代表 x 轴。 `ty` 代表 y 轴。

`ty` 是可选项，缺省默认为 0。`tx` 和 `ty` 可以通过空格或逗号隔开，不带单位时默认使用当前用户系统单位。

下面是一个元素往右平移 100 ，往下平移 300 的例子：

```html
<circle cx="0" cy="0" r="100" transform="translate(100 300)" />
```

同样可以使用逗号 `translate(100, 300)`

#### Scaling

通过 `scale()` 改变 SVG 元素的大小。语法如下：

```html
scale(<sx> [<sy>])
```

`scale()` 接受两个值，`sx` 表示水平方向的缩放。 `sy` 表示垂直方向的缩放。

`sy` 可选，缺省默认为 0。可用空格或逗号分隔，允许无单位。

下面是元素放大两倍的例子：

```html
<rect width="150" height="100" transform="scale(2)" x="0" y="0" />
```

下面是元素水平方向放大两倍，垂直方向缩小一半的例子：

```html
<rect width="150" height="100" transform="scale(2 0.5)" x="0" y="0" />
```

同样也能用逗号分隔 `scale(2, .5)`。

注意，当元素缩放时，它的整个坐标系统也跟着缩放，视口中的元素会重新定位，后续会讨论细节。

#### Skew

SVG 元素可以倾斜，可以使用 `skewX` 或 `skewY` ：

```html
skewX(<skew-angle>)
skewY(<skew-angle>)
```

`skewX` 表示 x 轴方向的倾斜，`skewY` 表示 y 轴方向的倾斜，缺省单位为度。

同样倾斜也会使视口元素重新定位，后续会讨论细节。

#### Rotation

通过 `routate()` 函数可以旋转一个 SVG 元素，语法如下：

```html
rotate(<rotate-angle> [<cx> <cy>])
```

`rotate()` 函数基于给定点和角度进行旋转，与 css 中的旋转不同的是不能声明度以外的单位，角度单位默认缺省，且默认为度。

`cx` 和 `cy` 是可选项，用于定义旋转点。不设置，默认为用户坐标系统原点。（不了解的同学可以看上一篇文章）

`rotate()` 就像 css 中 `transform: rotate()` 和 `transform-origin` 的简写形式。旋转中心默认是使用用户坐标系的左上角，可以通过 `rotate()` 自定义旋转中心点。

下例演示了如何修改旋转中心点：

```html
<g id="parrot" transform="rotate(45 50 50)" x="0" y="0">
    <!-- elements making up a parrot shape -->
</g>
```

当元素想围绕它的中心旋转时，你可能会想到用 css 的 `50%,50%` 的方式，可惜，在 `rotate` 函数中，只能用绝对坐标。但是，你可以再 css 的 `transform` 属性中使用 `transform-origin` 属性。后续会讨论更多细节。

### 坐标系变换

我们已经认识了所有 SVG 变换相关的函数。现在来深入 SVG 添加变换后的视觉效果部分，这是 SVG 变换的重点，因为它们被称为 “坐标系统变换” 而不仅仅是 “元素变换”。

在 [规范中](http://www.w3.org/TR/SVG/coords.html), `transform` 属性被作为建立用户空间（新坐标系统）的两个属性中的一个。另外一个是 `viewBox` ，什么意思呢？

> The `transform` attribute establishes a new user space (current coordinate system) on the element it is applied to.

有点类似与在 HTML 元素上添加 css 变换，导致 HTML 元素坐标系发生了变化，组合使用变换时尤为明显。即便非常多的相似点，当 svg 的变换还是有些不同的。

主要的不同是坐标系，HTML 元素的坐标系建立在自身。而 SVG 是当前坐标系或者用户空间。

当给 SVG 元素添加 `transform` 属性时，意味着复制了一份用户坐标系，你可以认为是拷贝了一个新图层，这个图层的坐标系是基于用户给定的 （`viewBox`）

然后，`transform` 在新坐标系上起作用，意味着元素会在变换坐标系中重新绘制。

下面通过可视化来理解如何添加 SVG 变换，如图所示：

![](/images/svg/svg-transforms-canvas.png)

下面来变换鹦鹉和狗的组合元素：

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <g id="parrot">
        <!-- shapes and paths forming the parrot -->
    </g>
    <g id="dog">
        <!-- shapes and paths forming the dog -->
    </g>
</svg>
```

灰色坐标是通过 `viewBox` 建立的画布初始坐标系。简单起见，使用同一个坐标，即 `viewBox` 与视口一致。

用户空间初始化好了，接着来变换元素，我们先让鹦鹉向左移动 150，再向下移动 200。

即便鹦鹉由很多 路径和形状组成，只要 `transform` 属性作用于 `<g>` ，就会对整个路径和形状起到变换作用。 详情参阅 [article on structuring and grouping SVGs](http://sarasoueidan.com/blog/structuring-grouping-referencing-in-svg)。

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <g id="parrot" transform="translate(150 200)">
        <!-- shapes and paths forming the parrot -->
    </g>
    <!-- ... -->
</svg>
```

结果如下：

![](/images/svg/svg-transformations-translate.png)

SVG 中的变换和 HTML 元素上 css 中的一样简单直观。我们之前提到在元素上添加 `transform` 属性时会在元素上创建一个新的用户坐标系。下图显示了初始化坐标系的副本，它在鹦鹉发生变换时建立，注意观察鹦鹉当前坐标系是如何变换的。

![](/images/svg/svg-transformations-translate-system.png)

需要注意重要的一点是元素当前坐标系是复制初始坐标系的，意味着它不是建立在元素边界盒上，新坐标系的尺寸受制于元素尺寸。这就是 HTML 和 SVG 坐标系之间的区别。

把狗移动到画布的右下角会更明显，假设把狗往右下方移动 50，会怎么显示呢。注意，狗的坐标原点并不是基于狗边框的左上角。另外注意狗和它新的坐标系看起来它们好像移动到了画布新的一层上。

![](/images/svg/svg-transformations-translate-dog.png)

接着我们试一下缩放：

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <g id="parrot" transform="scale(2)">
        <!-- shapes and paths forming the parrot -->
    </g>
    <!-- ... -->
</svg>
```

对 SVG 元素进行缩放跟缩放 HTML 元素不太一样，缩放后，SVG 元素在视口的位置会发生改变。如图，注意对比前后大小及位置的改变。

![](/images/svg/svg-transformations-scale.png)

从上面图例中可以发现，不仅是元素的大小变成了 2 倍，坐标系也也变成了 2 倍。

原因很明了：元素的当前坐标系统改变了，鹦鹉画在了新的坐标系，在本例中，当前坐标系放大的结果跟设置 `viewBox = "0 0 400 300"` 的 zoom in 效果类似。

效果如下：

![](/images/svg/svg-transformations-scale-system.png)

鹦鹉的当前新坐标系统被放大了，自身也被 “zooming in”。注意在当前坐标系统里，鹦鹉没有重新定位，只是相对于 viewport 重新定位了。鹦鹉依然基于坐标系左上角的原点被放大。

如果我们设置不同的缩放比 `transform="scale(2 0.5)"`，效果跟 `viewBox = "0 0 400 1200"` 类似。

![](/images/svg/svg-transformations-scale-2.png)

注意鹦鹉在缩放坐标系中的位置，并将其与初始系统中的位置（半透明鹦鹉）进行对比：保留 x 和 y 的坐标。

在 SVG 中倾斜元素还会导致元素由于当前坐标系统的倾斜而被 “移动”。

假设我们使用 `skewX` 函数对沿 x 轴的狗进行一个倾斜变换。比如倾斜 25 度：

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <!-- ... -->
    <g id="dog" transform="skewX(25)">
        <!-- shapes and paths forming the dog -->
    </g>
</svg>
```

如图是变换后的结果：

![](/images/svg/svg-transformations-skew-system.png)

注意坐标系倾斜导致狗的位置原点也改变了。

下图是，修改 `skewY()` 的结果

![](/images/svg/svg-transformations-skew-system-2.png)

接着，让我们旋转鹦鹉。旋转的原点默认是当前用户坐标系统的左上角。旋转的同时，坐标系也旋转了。下面是旋转 45 的例子：

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <g id="parrot" transform="rotate(45)">
        <!-- shapes and paths forming the parrot -->
    </g>
    <!-- ... -->
</svg>
```

效果如下：

![](/images/svg/svg-transformations-rotate.png)

你可能给希望自定义旋转的原点，通过在 `transform` 属性中使用 `rotate()` 函数，你可以指定原点。比如，鹦鹉相对自己中心点旋转。通过鹦鹉的宽高和位置，可以计算出中心点在 150,170。鹦鹉可以绕这个点旋转：

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <g id="parrot" transform="rotate(45 150 170)">
        <!-- shapes and paths forming the parrot -->
    </g>
    <!-- ... -->
</svg>
```

效果如下：

![](/images/svg/svg-transformations-rotate-center.png)

我们说过这些变换会应用到左边系中，正因如此，元素最终被影响和转换。那么在坐标系的原点 0,0 上旋转是怎么样的呢？

当你改变中心点或旋转，坐标系会跟着变换，旋转一定的角度，同时会平移一段距离，这取决于你旋转中心点：

```html
<g id="parrot" transform="rotate(45 150 170)">
```

相当于执行了一系列的旋转和平移：

```html
<g id="parrot" transform="translate(150 170) rotate(45) translate(-150 -170)">
```

当前坐标系被移到了你指定的中心点，接着旋转你指定的角度，最后镜像平移：

![](/images/svg/svg-transformations-rotate-center-system.png)

在进入下一节之前，我们先来讨论嵌套和链式转换。首先，转换元素上建立的当前用户坐标系统是独立的。下图显示了建立在狗和鹦鹉上的两个坐标系，以及它们是如何相互独立的。

![](/images/svg/svg-transformations-multiple.png)

在鹦鹉和狗发生变换后会建立新的坐标系统。

还要注意的是，每个当前坐标系仍然在 SVG 使用了`viewBox` 属性后的坐标系中。任何在 `viewBox` 中的变换都将影响整个画布和里面的每个元素，无论它们是否有自己的坐标系统。

例如，下面是通过修改 `viewBox ="0 0 800 600"` 到 `viewBox="0 0 600 450"`的结果。整个画布被放大了，元素的任何转换仍然不变。

![The result of changing the user coordinate system on the entire canvas.](/images/svg/svg-transformations-multiple-2.png)

#### 嵌套和链式变换

通常希望给某个元素添加多个转换，同时应用多个变换可以认为是链式变换。

对于链式变换值得注意的是，跟 HTML 元素的转换类似，每个转换一个接着一个地应用于坐标系统。

例如，在对一个元素旋转后，平移它。那么平移将是根据新的坐标系统进行的，而非没有旋转前的坐标系统。

试下 `transform="rotate(45 150 170) translate(200)"`

![](/images/svg/svg-transformations-rotate-translate.png)

坐标系统一直在变换

注意当你倾斜一个元素的时候，坐标系统将不在是正交直线。会变成[skew coordinates](http://en.wikipedia.org/wiki/Skew_coordinates)，简单的说，坐标系已经不成九十度了，会按倾斜的角度计算一个新的值。

嵌套转换的意思当一个转换元素的子元素也发生了转换。此时，子元素的转换会叠加。

实际上，嵌套转换跟链式转换有点类似。唯一的区别是，它不 hi 对一个元素应用一系列转换，而是自动地将转换应用到它的执行器上，然后最终它自己的转换应用到自己，就像我们在链式上一个接一个地应用转换一样。

这个对于你处理元素间相互联系的情况非常有帮助，比如，你要给狗的尾巴加动画，这个尾巴是狗组合下的子孙元素。

```html
<svg width="800" height="800" viewBox="0 0 800 600">
    <!-- ... -->
    <g id="dog" transform="translate(..)">
        <!-- shapes and paths forming the dog -->
        <g id="head">
            <!-- .. -->
        </g>
        <g id="body" transform="rotate(.. .. ..)">
            <path id="tail" d="..." transform="rotate(..)">

            </path>
            <g id="legs">
                <!-- ... -->
            </g>
        </g>
    </g>
</svg>
```

假设，我们要平移狗这个组合，然后旋转它的身体，最后，给尾巴添加旋转的动画。

当尾巴旋转的同时，继承了身体坐标系的转换。同样也继承了整个狗的转换。结果看起来就是一个完整的联动动画。

如你所见，嵌套转换跟链式转换同时对尾巴产生了影响。

### 用 css 属性转换 SVG

在 SVG 2，the `transform` attribute is referred to as the `transform` property （ svg 中的属性跟 css 中的属性 ）；因为 SVG 的转换在[CSS3 Transforms specification](http://dev.w3.org/csswg/css-transforms/)已 "exported" 。接着结合了 SVG Transforms, CSS 2D Transforms, and CSS 3D Transforms specifications 等。

css 中 transform 规范 中的 transform 属性可以应用在 SVG 元素。然而，`transform`属性的函数需要遵循 css 规范的语法。函数参数必须要带逗号，空格无效。但在逗号前后可以有空格。`rotate()`方式不再接受 `<cx> <cy>` 旋转中心点的值了，可以用 `transform-origin` 属性。另外，css 的转换函数的角度和坐标系统需要指定单位。比如用于角度的 `rad` 用于坐标系统的 `px`，`em`等。

例子如下：

```css
#parrot {
  transform-origin: 50% 50%; /* center of rotation is set to the center of the element */
  transform: rotate(45deg);
}
```

另外 SVG 元素可以通过 css 的 3D 转换实现三维空间转换，然而，跟 HTML 元素的坐标系统不同的是，坐标系统保持不变。意味着，3D 旋转看起来不一样，除非你改变旋转中心点。

```css
#SVGel {
  transform: perspective(800px) rotate3d(1, 1, 0, 45deg);
}
```

由于使用 css 转换 SVG 元素与使用 css 转换 HTML 元素的语法几乎是一样的，就此跳过

也就是书殴打和在撰写本文时，某些浏览器和某些特性的实现仍然不完整。由于浏览器支持更改的速度非常快，所以我建议你可以尝试下这些属性，以确定哪些有效，哪些无效，并确定可以开始用哪些。

注意，一旦实现了可以用 css 转换 svg 元素，建议你使用 css 转换函数语法，即使您转换应用于 `transform` 属性的形式。也就是说，上面提到的 `transform` 属性函数的语法仍然有效。

### `transform` 动画

SVG 转换可以动画，跟 css transform 一样。可以用 css 动画和过度就像处理 HTML 元素一样。

SVG `transform` 属性可以通过用 SVG `<animateTransform>` 元素，`<animateTransform>` 元素是用于 SVG 动画的三个元素之一。

`<animateTransform>`超出了本文讨论范围，今后文章可能会涉及。

### 总结

首先，如果对 SVG 坐标系统的概念不是很清楚的话，用起来是非常蛋疼的。特别是当你还出于 css HTML 的转换系统中，而且还用同样的方式处理 SVG。

但是，一旦掌握了他们的工作方式，就可以更好地控制 SVG 画布，并且更容易操作元素了。

在本系列的最后一部分，我将介绍如何嵌套 SVG 并建立新的 viewport 和 viewbox。请继续关注。

希望本文对你有用，感谢阅读!
