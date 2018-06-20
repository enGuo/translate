# Patterns

Patterns are arguably one of the more confusing fill types to use in SVG. They're also very powerful, so they're worth talking about and getting at least a fundamental grasp on. Like gradients, the [`<pattern>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern "The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals ("tiled") to cover an area.") element should be put in the `<defs>` section of your SVG file.

> 在我看来 patterns（图案）是 SVG 中用到的最让人混淆的填充类型之一。它的功能非常强大，所以我认为他们值得讨论一下并且我们应至少对他们有最基本的了解。跟渐变一样，pattern 需要放在 SVG 文档的 defs 内部。

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="Gradient1">
<stop offset="5%" stop-color="white"/>
<stop offset="95%" stop-color="blue"/>
</linearGradient>
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
<stop offset="5%" stop-color="red"/>
<stop offset="95%" stop-color="orange"/>
</linearGradient>

<pattern id="Pattern" x="0" y="0" width=".25" height=".25">
<rect x="0" y="0" width="50" height="50" fill="skyblue"/>
<rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
<circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
</pattern>
</defs>

<rect fill="url(#Pattern)" stroke="black" width="200" height="200"/>
</svg>
```

Screenshot

Live sample

![](https://developer.mozilla.org/files/725/SVG_Pattern_Example.png)

Open in CodePen Open in JSFiddle

Inside the pattern element, you can include any of the other basic shapes you've included before, and each of them can be styled using any of the styles you've learned before, including gradients and opacity. Here we've just drawn two rectangle elements inside our pattern (which overlap, and one of which is twice the size of the other and is used to fill in the entire pattern), and one circle.

> 在 pattern 元素内部你可以包含任何之前包括过的其他基本形状，并且每个形状都可以使用之前学习过的任何样式美化，包括渐变和半透明。这里我们在 pattern 中绘制两个矩形（两个矩形互相重叠），一个矩形是另一个矩形大小的二倍，且用于填充整个 pattern 和一个圆。

The confusing thing about patterns is defining a unit system and their size. In the example above, we've defined a `width` and `height` attribute on the pattern element, to describe how far the pattern should go before it begins repeating itself again. There are also `x` and `y` attributes available if you want to offset the start point of this rectangle somewhere within your drawing. The reason they've been used here is described below.

> 关于 pattern 容易混淆的事是，pattern 定义了一个单元系统以及他们的大小。上例中，我们在 pattern 元素上定义了 width 和 height 属性。用于描述在重复下一个图案之前应该跨过多远。如果你想呀在绘制时偏移矩形的开始点，也可以使用 x 和 y 属性，原因如下。

As with the `gradientUnits` attribute used above, patterns also have an attribute, `patternUnits` which specifies the units that these attributes will take. It defaults to "objectBoundingBox" as it did above, so a value of 1 is scaled to the width/height of the object you're applying the pattern to. Since, in this case, we wanted the pattern to repeat 4 times horizontally and vertically, the height and width are set to 0.25. That means the patterns width/height is only 0.25 of the total box size.

> 就像前面使用了 `gradientUnits`属性，同样的 `pattern` 也有一个属性 `patternUnits` 用于描述我们使用的属性单元。这同之前使用的 `objectBoundingBox` 默认值一样，所以当一个值为 1 时，它被缩放到应用 `pattern` 对象的宽高值。因此，我们希望 `pattern` 垂直和水平的重复 4 次，所以宽高被设置为 0.25，这一位置 pattern 的宽高仅为您外框大小的 0.25。

Unlike gradients, patterns then have a second attribute, `patternContentUnits`, which describes the units system used inside the pattern element, on the basic shapes themselves. This attribute defaults to "userSpaceOnUse", the opposite of the `patternUnits` attribute. What this means is that unless you specify one or both of these attributes (`patternContentUnits` and `patternUnits`), the shapes you draw inside your pattern are being drawn in a different coordinate system than the pattern element is using, which can make things a bit confusing when you're writing this by hand. To make this work in the above example, we had to consider the size of our box (200 pixels) and the fact that we wanted the pattern to repeat itself 4 times horizontally and vertically. That means that each pattern unit was a 50x50 square. The two rects and the circle inside the pattern were then sized to fit in a 50x50 box. Anything that we had drawn outside that box wouldn't have been shown. The pattern also had to be offset by 10 pixels so that it would start in the upper left corner of our box, so the x and y attributes of the pattern had to be adjusted to 10/200 = 0.05.

> 与渐变不用，pattern 有第二个属性`patternContentUnits`，它描述了 pattern 元素基于基本形状使用的单元系统，这个属性默认值为`userspaceOnUse`，与 `patternUnits`属性相反，这意味着除非你至少指定其中一个属性值，(`patternContentUnits` 或 `patternUnits`)，否则在 `pattern` 中绘制的形状将与 pattern 元素使用的坐标系不同，当你手写这部分时会容易混淆。为了上上例生效，我们必须考虑我们的边框（200 像素）大小和我们实际希望 pattern 垂直和水平重复 4 次的需求。这意味着每个 pattern 单元应该是 50x50 的方形，pattern 中的两个矩形和圆形的大小会被缩放适应到一个 50x50 的边框里。任何我们绘制在边框外的内容都不会显示。因为我们希望 pattern 从边框的左上角里开始，所以 pattern 也必须偏移 16 像素，也就是 pattern 的 x 和 y 属性需要调整为`10/200 =0.05`

The caveat here is that if the object changes size, the pattern itself will scale to fit it, but the objects inside will not. So while we would still have 4 repeating units inside the pattern, the objects composing that pattern would remain the same size, and you end up with large areas of nothing in between them. By changing the `patternContentUnits` attribute, we can put all the elements into the same unit system:

> 如果对象改变了大小，pattern 会自适应其大小，但是对象里面的内容不会自适应，所以当我们在 pattern 中还是放置 4 个重复的 pattern 时，组成 pattern 的对象将不会保持相同的大小，同时在他们之间会有大片空白区域。通过改变 patternContentUnits 属性，我们可以把所有的元素放到相同的单元系统中：

```xml
<pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
<rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
<rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
<circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
</pattern>
```

Now, because the pattern content is in the same unit system as the pattern, we don't have to offset the box so that the pattern starts in the correct place, and if the object size was changed to a larger one, the pattern would automatically scale so that it had the same number of objects and repeats inside it. This contrasts with the "userSpaceOnUse" system, where if the object changes size the pattern would stay the same and just repeat itself more times to fill the box.

> 现在，因为 pattern 内容与 pattern 本身处于相同的单元系统中，所以我们不用偏移边框以使 pattern 在正确的位置上开始，并且即使对象变大，pattern 也会自动的缩放以保住 pattern 内部的对象数目和重复不变。这与 userSpaceOnUse 系统不同，userSpaceOnUse 系统中如果对象改变大小，pattern 本身会保持不变，只是重复多次去填充边框。

As a slight aside, in Gecko circles seem to have trouble drawing if their radius is set to something less than 0.075 (it is currently unknown whether this is a bug in the pattern element or not). To work around that it is probably best to avoid drawing in "objectBoundingBox" units unless you have to.

> 它有一点点的副作用，在 Gecko 中的圆如果半径设置得小于 0.075（尽管半径应该设置的比这个值大得多。这个可能是 pattern 元素中的一个 bug，或者也不算 bug，我也不太清楚）的话绘制的时候可能会出现问题，为了规避这个问题，可能最好的办法是尽量避免在 objectBoundingBox 单元中绘制图形。

Neither of these uses is what one would normally think of when you think of a pattern. Patterns usually have a set size and repeat themselves independently of what an object's shape is. To create something like this, both the pattern and its contents must be drawn in the current userSpace, so that they don't change shape if the object does:

> 在你想要使用 pattern 的时候，可能你并不中意这些方法中的任何一个，Pattern 通常都是有确认的大小并且重复他们自己，与对象形状独立开来。要想创建这种 pattern，pattern 和它的内容必须在当前用户空间中绘制，这样当对象在做如下操作时他们才不会改变形状：

```xml
<pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
<rect x="0" y="0" width="50" height="50" fill="skyblue"/>
<rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
<circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
</pattern>
```

Of course, this means that the pattern won't scale if you change your object size later. All three of the above examples are shown below on a rectangle that has been slightly elongated to a height of 300px, but I should note its not an exhaustive picture, and there are other options available depending on your application.

> 当然，这意味着如果你后续改变了对象大小，pattern 也不会缩放。上述三个举例在下图中放在一个矩形中展示，高度被轻微拉伸到 300px，但是我注意到这不是完整的图片，并且有些其他选项可能你的应用不支持。

![Image:SVG_Pattern_Comparison_of_Units.png](https://developer.mozilla.org/@api/deki/files/349/=SVG_Pattern_Comparison_of_Units.png)
