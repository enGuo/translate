# Fill and Stroke Attributes

There are several ways to color shapes (including specifying attributes on the object) using inline [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS), an embedded CSS section, or an external CSS file. Most [SVG](https://developer.mozilla.org/en-US/docs/Glossary/SVG) you'll find around the web use inline CSS, but there are advantages and disadvantages associated with each type.

> 现在你可以用你掌握的知识来绘制任何图形了，你的下一个目标是给它们着色。可以使用几种方法来着色，包括指定对象的属性，使用内联 css 样式，或者内嵌的 css 样式，或者使用外部的 css 样式文件。大多数的 web 网站的 SVG 使用的是内联样式 css，对于这些方法都有优缺点。

## Painting 上色

Basic coloring can be done by setting two attributes on the node: `fill` and `stroke`. `Fill` sets the color inside the object and `stroke` sets the color of the line drawn around the object. You can use the same css color naming schemes that you use in HTML, whether that's color names (that is _red_), rgb values (that is _rgb(255,0,0)_), hex values, rgba values, etc.

> 大多数基本的涂色可以通过在元素上设置两个属性来搞定：fill 和 stroke。fill 属性设置对象内容的颜色。stroke 属性设置绘制对象的线条的颜色。你可以使用在 HTML 中的 CSS 颜色的命名方案定义他们的颜色，比如说颜色名（像 red 这种）、rgb 值（像 rgb(255,0,0 这种）、十六进制值、rgba 值，等等。

```xml
<rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"
fill-opacity="0.5" stroke-opacity="0.8"/>
```

In addition, you can specify the opacity of either the `fill` or `stroke` separately in SVG. These are controlled by the `fill-opacity` and `stroke-opacity` attributes.

Note: in Firefox 3+ rgba values are also allowed, and will give the same effect, but for compatibility with other viewers, it's often best to specify the fill/stroke opacity separately. If you specify both an rgba value and a fill/stroke opacity value, both will be applied.

> 此外，在 SVG 中你可以分别定义填充色和边框色的不透明度，属性`fill-opacity`控制填充色的不透明度，属性`stroke-opacity`控制描边的不透明度。

> 注意，FireFox 3+支持 rgba 值，并且能够提供同样的效果，但是为了在其他浏览器中保持兼容，最好将它和填充/描边的不透明度分开使用。如果同时指定了 rgba 值和填充/描边不透明度，它们将都被调用。

## Stroke

In addition to its color properties, there are a few other attributes available to control the way a stroke is drawn on a line.

> 除了颜色属性，还有其他一些属性用来控制绘制描边的方式。

![](https://developer.mozilla.org/@api/deki/files/355/=SVG_Stroke_Linecap_Example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
<line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
<line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
<line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

The `stroke-width` property defines the width of this stroke. Strokes are drawn centered around the path. In the example above, the path is shown in pink, and the stroke in black.

> `stroke-width` 属性定义了描边的宽度。注意，描边是以路径为中心线绘制的，在上面的例子里，路径是粉红色的，描边是黑色的。如你所见，路径的每一侧都有均匀分布的描边。

The second attribute affecting strokes is the `stroke-linecap` property, demonstrated above. This controls the shape of the ends of lines.

> 第二个影响描边的属性是 `stroke-linecap` 属性，如上所示。它控制边框终点的形状。

There are three possible values for `stroke-linecap`:

> `stroke-linecap`属性的值由三种可能值：

- `butt` closes the line off with a straight edge that's normal (at 90 degrees) to the direction of the stroke and crosses its end.
- `square` has essentially the same appearance, but stretches the stroke slightly beyond the actual path. The distance that the stroke goes beyond the path is half the `stroke-width`.
- `round` produces a rounded effect on the end of the stroke. The radius of this curve is also controlled by the `stroke-width`.

> - `butt` 用直线结束线段，它是常规做法，线段边界 90 度垂直于描边的方向，贯穿它的终点。
> - `square` 的效果差不多，但是会稍微超出实际路径的范围，超出的大小由 `stroke-width` 控制。
> - `round` 表示边框的终点是圆角，圆角的半径也是由 `stroke-width` 控制。

Use `stroke-linejoin` to control how the joint between two line segments is drawn.

> 还有一个 `stroke-linejoin` 属性，用来控制两条描边线段之间，用什么方式连接。

![](https://developer.mozilla.org/@api/deki/files/356/=SVG_Stroke_Linejoin_Example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
<polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

<polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
stroke-linecap="round" fill="none" stroke-linejoin="round"/>

<polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

Each of these polylines has two segments. The joint where the two meet is controlled by the `stroke-linejoin` attribute. There are three possible values for this attribute. `miter` extends the line slightly beyond its normal width to create a square corner where only one angle is used. `round` creates a rounded line segment. `bevel` creates a new angle to aid in the transition between the two segments.

> 每条折线都是由两个线段连接起来的，连接处的样式由`stroke-linejoin`属性控制，它有三个可用的值，`miter` 是默认值。表示用正方形画笔在连接处形成尖角。round 表示用圆角连接，实现平滑效果。最后还有一个值 `bevel`，连接处会形成一个斜接。

Finally, you can also use dashed line types on a stroke by specifying the `stroke-dasharray` attribute.

> 最后，你可以通过指定 `stroke-dasharray` 属性，将虚线类型应用在描边上。

![](https://developer.mozilla.org/@api/deki/files/354/=SVG_Stroke_Dasharray_Example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
<path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
<path d="M 10 75 L 190 75" stroke="red"
stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

The stroke-dasharray attribute takes a series of comma-separated numbers as its argument.

> stroke-dasharray 属性的参数，是一组用逗号分割的数字组成的数列。

Note: Unlike paths, these numbers **_must_** be comma-separated (whitespace is ignored).

> 注意，和 path 不一样，这里的数字必须用逗号分割（空格会被忽略）。

The first number specifies a distance for the filled area, and the second a distance for the unfilled area. So in the above example, the second path fills 5 pixel units, with 5 blank units until the next dash of 5 units. You can specify more numbers if you would like a more complicated dash pattern. The first example specifies three numbers, in which case the renderer loops the numbers twice to create an even pattern. So the first path renders 5 filled, 10 empty, 5 filled, and then loops back to create 5 empty, 10 filled, 5 empty. The pattern then repeats.

> 第一个用来表示填色区域的长度，第二个用来表示非填色区域的长度。所以在上面额例子里，第二个路径会先做 5 个像素单位的填色，紧接着是 5 个空白单位，然后又是 5 个单位的填色。如果你想要更复杂的虚线模式，你可以定义更多的数字。第一个例子指定了 3 个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式（奇数个循环两次变偶数个）。所以该路径首先渲染 5 个填色单位，10 个空白单位，5 个填色单位，然后回头以这 3 个数字做一次循环，但是这次是创建 5 个空白单位，10 个填色单位，5 个空白单位。通过这两次循环得到偶数模式，并将这个偶数模式不断重复。

There are additional stroke and fill properties available, including `[fill-rule](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule),` which specifies how to color in shapes that overlap themselves; `[stroke-miterlimit](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit)`, which determines if a stroke should draw miters; and [stroke-dashoffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset), which specifies where to start a dasharray on a line.

> 另外还有一些关于填充和边框的属性，包括 `fill-rule` ，用于定义如何给图形重叠的区域上色，`stroke-miterlimit`，定义什么情况下绘制或不绘制边框连接的 `miter` 效果;还有 `stroke-dashoffset`，定义虚线开始的位置。

## Using CSS

In addition to setting attributes on objects, you can also use CSS to style fills and strokes. Not all attributes can be set via CSS. Attributes that deal with painting and filling are usually available, so `fill`, `stroke`, `stroke-dasharray`, etc... can all be set this way, in addition to the gradient and pattern versions of those shown below. Attributes like `width`, `height`, or path commands, can't be set through CSS. It's easiest just to test and find out what is available and what isn't.

> 除了定义对象属性外，你也可以通过 CSS 来样式化填充和描边。语法和在 html 里使用 css 一样，只不过你要把 `background-coloe`，`border`改成`fill`和`stroke`。注意，不是所有的属性都能用 CSS 来设置。上色和填充的部分一般是可以用 CSS 来设置的，比如，`fill`，`stroke`，`stroke-dasharray` 等，但是不包括下面会提到的渐变和图案等功能。另外，`width`，`height`，以及路径的命令等等，都不能用 CSS 设置。判断它们能不能用 CSS 设置还是比较容易的。

The [SVG specification](http://www.w3.org/TR/SVG/propidx.html 'http://www.w3.org/TR/SVG/propidx.html') decides strictly between attributes that are _properties_ and other attributes. The former can be modified with CSS, the latter not.

> SVG 规范将属性区分成 properties 和 其他 attributes，前者是可以用 css 设置，后者不能。

CSS can be inserted inline with the element via the style attribute:

> css 可以利用 style 属性插入到元素的行间：

```xml
<rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

or it can be moved to a special style section that you include. Instead of shoving such a section into a `<head>` section like you do in HTML, though, it's included in an area called [`<defs>`](https://developer.mozilla.org/en/SVG/Element/defs 'en/SVG/Element/defs'). `<defs>` stands for definitions, and it is here that you can create elements that don't appear in the SVG directly, but are used by other elements.

> 或者利用 style 设置一段样式段落。就像在 html 里这样的 style 一般放在 head 里，在 svg 里 style 则放在 defs 标签里。defs 表示定义，这里可以定义一些不会在 svg 图形中出现，但是可以被其他元素使用的元素。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
<defs>
<style type="text/css"><![CDATA[
#MyRect {
stroke: black;
fill: red;
}
]]></style>
</defs>
<rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

Moving styles to an area like this can make it easier to adjust properties on large groups of elements. You can also use things like the **hover pseudo classes** to create rollover effects:

> 如上把样式放到一块你可以更轻松地调整一大组元素的样式，同样你也可以使用 hover 这样的伪类来创建翻转之类的效果：

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

You can also specify an external stylesheet for your CSS rules through [normal XML-stylesheet syntax](http://www.w3.org/TR/xml-stylesheet/ 'http://www.w3.org/TR/xml-stylesheet/'):

> 你也可以定义一个外部的样式表，但是要符合[normal XML-stylesheet syntax](http://www.w3.org/TR/xml-stylesheet/ 'http://www.w3.org/TR/xml-stylesheet/')的 css 规则:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
<rect height="10" width="10" id="MyRect"/>
</svg>
```

where style.css looks something like:

> style.css 看起来就像这样：

```css
#MyRect {
  fill: red;
  stroke: black;
}
```
