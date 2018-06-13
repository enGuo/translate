# Linear Gradient

Perhaps more exciting than just fills and strokes is the fact that you can also create and apply gradients as either fills or strokes.

> 并非只能简单填充颜色和描边，更令人兴奋的是，你还可以创建和并在填充和描边上应用渐变色。

There are two types of gradients: linear and radial. You **must** give the gradient an `id` attribute; otherwise it can't be referenced by other elements inside the file.  Gradients are defined in a defs section as opposed to on a shape itself to promote reusability.

> 有两种类型的渐变：线性渐变和径向渐变。你必须给渐变内容指定一个 id 属性，否则文档内的其他元素就不能引用它。为了让渐变能被重复使用，渐变内容需要定义在 defs 标签内部，而不是定义在形状上面。

Linear gradients change along a straight line. To insert one, you create a [`<linearGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient 'The <linearGradient> SVG element lets authors define linear gradients to fill or stroke graphical elements.') node inside the definitions section of your SVG file.

> 线性渐变沿着直线改变颜色，要插入一个线性渐变，你需要在 SVG 文件的 defs 元素内部，创建一个 linearGradient 节点。

## Basic example

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="Gradient1">
<stop class="stop1" offset="0%"/>
<stop class="stop2" offset="50%"/>
<stop class="stop3" offset="100%"/>
</linearGradient>
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="red"/>
<stop offset="50%" stop-color="black" stop-opacity="0"/>
<stop offset="100%" stop-color="blue"/>
</linearGradient>
<style type="text/css"><![CDATA[
#rect1 { fill: url(#Gradient1); }
.stop1 { stop-color: red; }
.stop2 { stop-color: black; stop-opacity: 0; }
.stop3 { stop-color: blue; }
]]></style>
</defs>

<rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100"/>
<rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)"/>

</svg>
```

Screenshot

Live sample

![](https://developer.mozilla.org/files/722/SVG_Linear_Gradient_Example.png)

Open in CodePen Open in JSFiddle

Above is an example of a linear gradient being applied to a `<rect>` element. Inside the linear gradient are several [`<stop>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop 'The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.') nodes. These nodes tell the gradient what color it should be at certain positions by specifying an `offset` attribute for the position, and a `stop-color` attribute. This can be assigned directly or through CSS. The two methods have been intermixed for the purposes of this example. For instance, this one tells the gradient to start at the color red, change to transparent-black in the middle, and end at the color blue. You can insert as many stop colors as you like to create a blend that's as beautiful or hideous as you need, but the offsets should always increase from 0% (or 0 if you want to drop the % sign) to 100% (or 1). Duplicate values will use the stop that is assigned furthest down the XML tree. Also, like with fill and stroke, you can specify a `stop-opacity` attribute to set the opacity at that position (again, in FF3 you can also use rgba values to do this).

> 以上是一个应用了线性渐变的 rect 元素的示例。线性渐变内部有几个 stop 结点，这些结点通过指定位置的 offset（偏移）属性和 stop-color（颜色中值）属性来说明在渐变的特定位置上应该是什么颜色；可以直接指定这两个属性值，也可以通过 css 来指定他们的值，该例子中混合使用了这两种方法。例如：该示例中指明了渐变开始颜色为红色，到中间位置时变成半透明的黑色。最后变成了蓝色。虽然你可以根据需求按照自己的喜好掺入很多中间颜色，但是偏移量应该始终从 0%开始（或者 0 也可以，百分号可以扔掉），到 100%（或 1）结束。如果 stop 设置的位置有重合，将使用 XML 树中较晚设置的值。而且，类似与填充和描边，你也可以指定属性 stop-opacity 来设置某个位置的半透明度（同样，对于 FF3 你也可以设置 rgba 值）。

```html
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

To use a gradient, we have to reference it from an object's `fill` or `stroke` attributes. This is done the same way you reference elements in CSS, using a `url`. In this case, the url is just a reference to our gradient, which I've given the creative ID, "Gradient". To attach it, set the `fill` to `url(#Gradient)`, and voila! Our object is now multicolored. You can do the same with `stroke`.

> 使用渐变时，我们需要在一个对象的属性 fill 或属性 stroke 中引用它，这跟你在 css 中使用 url 引用元素的方法一样。在本例中，url 只是一个渐变的引用，我们已经给这个渐变一个 ID--"Gradient"。想要附加它，将属性 fill 设置为 url(#Gradient)即可。现在对象就变成多色的了，也可以用同样的方式处理 stroke。

The `<linearGradient>` element also takes several other attributes, which specify the size and appearance of the gradient. The orientation of the gradient is controlled by two points, designated by the attributes `x1`, `x2`, `y1`, and `y2`. These attributes define a line along which the gradient travels. The gradient defaults to a horizontal orientation, but it can be rotated by changing these. Gradient2 in the above example is designed to create a vertical gradient.

> linearGradient 元素还需要一些其他的属性值，它们指定了渐变的大小和出现范围。渐变的方向可以通过两个点来控制，它们分别是属性 x1,x2,y1 和 y2，这些属性定义了渐变路线走向。渐变色默认是水平方向的，但是通过修改这些属性，就可以旋转该方向。下例中的 Gradient2 创建了一个垂直渐变。

```html
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
```

**Note:** You can also use the `xlink:href` attribute on gradients too. When it is used, attributes and stops from one gradient can be included on another. In the above example, you wouldn't have to recreate all the stops in Gradient2.

> 注意：你也可以在渐变上使用 xlink:href 属性。如果使用了该属性时，一个渐变的属性和颜色中值（stop）可以被另一个渐变包含引用。在下例中，你就不需要再 Grandient2 中重新创建全部的颜色中值（stop）

```html
<linearGradient id="Gradient1">
<stop id="stop1" offset="0%"/>
<stop id="stop2" offset="50%"/>
<stop id="stop3" offset="100%"/>
</linearGradient>
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"
xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Gradient1"/>
```

I've included the xlink namespace here directly on the node, although usually you would define it at the top of your document. More on that when we [talk about images](https://developer.mozilla.org/en-US/Web/SVG/Tutorial/Other_content_in_SVG 'en-US/Web/SVG/Tutorial/Other content in SVG').

## Radial Gradient

Radial gradients are similar to linear ones but draw a gradient that radiates out from a point. To create one you add a [`<radialGradient>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient 'The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.') element to the definitions section of your document.

> 径向渐变与线性渐变相似，只是它是从一个点开始发散绘制渐变。创建径向渐变需要在文档的 defs 中添加一个 radialGradient 元素。

## Basic example

```html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient id="RadialGradient1">
<stop offset="0%" stop-color="red"/>
<stop offset="100%" stop-color="blue"/>
</radialGradient>
<radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
<stop offset="0%" stop-color="red"/>
<stop offset="100%" stop-color="blue"/>
</radialGradient>
</defs>

<rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient1)"/>
<rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient2)"/>

</svg>
```

Screenshot

Live sample

![](https://developer.mozilla.org/files/726/SVG_Radial_Gradient_Example.png)

Open in CodePen Open in JSFiddle

The stops used here are the same as before, but now the object will be red in the center, and in all directions gradually change to blue at the edge. Like linear gradients, the `<radialGradient>` node can take several attributes to describe its position and orientation. However, unlike linear gradients, it's a bit more complex. The radial gradient is again defined by two points, which determine where its edges are. The first of these defines a circle around which the gradient ends. It requires a center point, designated by the `cx` and `cy` attributes, and a radius, `r`. Setting these three attributes will allow you to move the gradient around and change its size, as shown in the second `rect` above.

> 中值（stops）的使用方法与之前一致，但是现在这个对象的颜色是中间是红色的，且向着边缘的方向渐渐的变成蓝色。跟线性渐变一样，radialGradient 节点可以有多个属性来描述其位置和方向，但是它更加复杂。径向渐变也是通过两个点来定义其边缘位置，两点中的第一个点定义了渐变结束所围绕的圆环，它需要一个中心点，由 cx 和 cy 属性及半径 r 来定义，通过设置这些点外卖看看呀移动渐变范围并改变它的大小，如上例的第二个 rect 所展示的。

The second point is called the focal point and is defined by the `fx` and `fy` attributes. While the first point described where the edges of the gradient were, the focal point describes where its middle is. This is easier to see with an example.

> 第二个点被称为焦点，由 fx 和 fy 属性定义。第一个点描述了渐变边缘位置，焦点则描述了渐变的中心，如下例。

## Center and focal point

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1"
xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient id="Gradient"
cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
<stop offset="0%" stop-color="red"/>
<stop offset="100%" stop-color="blue"/>
</radialGradient>
</defs>

<rect x="10" y="10" rx="15" ry="15" width="100" height="100"
fill="url(#Gradient)" stroke="black" stroke-width="2"/>

<circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2"/>
<circle cx="35" cy="35" r="2" fill="white" stroke="white"/>
<circle cx="60" cy="60" r="2" fill="white" stroke="white"/>
<text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">(fx,fy)</text>
<text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx,cy)</text>

</svg>
```

Screenshot

Live sample

![](https://developer.mozilla.org/files/727/SVG_Radial_Grandient_Focus_Example.png)

Open in CodePen Open in JSFiddle

If the focal point is moved outside the circle described earlier, its impossible for the gradient to be rendered correctly, so the spot will be assumed to be within the edge of the circle. If the focal point isn't given at all, it's assumed to be at the same place as the center point.

> 因为如果焦点如之前描述的那样被移到圆圈的外面，渐变将不能正确呈现，所以该点会被假定在圆圈范围内。如果没有给出焦点，将认为该点与中心点的位置一致。

Both linear and radial gradients also take a few other attributes to describe transformations they may undergo. The only other one I want to mention here is the `spreadMethod` attribute. This attribute controls what happens when the gradient reaches its end, but the object isn't filled yet. It can take on one of three values, "pad", "reflect", or "repeat". "Pad" is what you have seen so far. When the gradient reaches its end, the final offset color is used to fill the rest of the object. "reflect" causes the gradient to continue on, but reflected in reverse, starting with the color offset at 100% and moving back to the offset at 0%, and then back up again. "Repeat" also lets the gradient continue, but instead of going backwards, it just jumps back to the beginning and runs again.

> 线性渐变和径向渐变都需要一些额外的属性用于描述渐变过程，这里我希望额外提及一个 spreadMethod 属性，该属性控制了当渐变到达终点的行为，但是此时该对象尚未被填充颜色。这个属性可以有三个值：pad、reflect 或 repeat。Pad 就是目前我们见到的效果，即当渐变到达终点时，最终的偏移颜色被用于填充对象剩下的空间。reflect 会让渐变一直持续下去，不过它的效果是与渐变本身是相反的，以 100%偏移位置的颜色开始，逐渐偏移到 0%位置的颜色，然后再回到 100%偏移位置的颜色。repeat 也会让渐变继续，但是它不会像 reflect 那样反向渐变，而是跳回到最初的颜色然后继续渐变。

## spreadMethod

```html
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient id="GradientPad"
cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
spreadMethod="pad">
<stop offset="0%" stop-color="red"/>
<stop offset="100%" stop-color="blue"/>
</radialGradient>
<radialGradient id="GradientRepeat"
cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
spreadMethod="repeat">
<stop offset="0%" stop-color="red"/>
<stop offset="100%" stop-color="blue"/>
</radialGradient>
<radialGradient id="GradientReflect"
cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
spreadMethod="reflect">
<stop offset="0%" stop-color="red"/>
<stop offset="100%" stop-color="blue"/>
</radialGradient>
</defs>

<rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#GradientPad)"/>
<rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientRepeat)"/>
<rect x="120" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientReflect)"/>

<text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">Pad</text>
<text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">Repeat</text>
<text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">Reflect</text>

</svg>
```

Screenshot

Live sample

![](https://developer.mozilla.org/files/728/SVG_SpreadMethod_Example.png)

Open in CodePen Open in JSFiddle

Both gradients also have an attribute named `gradientUnits`, which describes the unit system you're going to use when you describe the size or orientation of the gradient. There are two possible values to use here: `userSpaceOnUse` or `objectBoundingBox`. `objectBoundingBox` is the default, so that's what has been shown so far. It essentially scales the gradient to the size of your object, so you only have to specify coordinates in values from zero to one, and they're scaled to the size of your object automatically for you. `userSpaceOnUse` essentially takes in absolute units. So you have to know where your object is, and place the gradient at the same place. The radialGradient above would be rewritten:

> 两种渐变都有一个叫做 `gradientUnits` （渐变单元）的属性，它描述了用来描述渐变的大小和方向的单元系统。该属性有两个值：`userSpaceOnUse`，`objectBoundingBox`。默认值为`objectBoundingBox`，我们目前看到的效果都是在这中系统下的，它大体上定义了对象的渐变大小范围，所以你只要指定从 0 到 1 的坐标值，渐变就会自动的缩放到对象相同大小。`userSpaceOnUse` 使用绝对单元，所以你必须知道对象的位置，并将渐变放在同样地位置上。上例中的 radialGradient 需要被重写。

```html
<radialGradient id="Gradient" cx="60" cy="60" r="50" fx="35" fy="35" gradientUnits="userSpaceOnUse">
```

You can also then apply another transformation to the gradient by using the `gradientTransform` attribute, but since we haven't [introduced transforms](https://developer.mozilla.org/en-US/Web/SVG/Tutorial/Basic_Transformations 'en-US/Web/SVG/Tutorial/Basic Transformations') yet, I'll leave that for later.


There are some other caveats for dealing with `gradientUnits="objectBoundingBox"` when the object bounding box isn't square, but they're fairly complex and will have to wait for someone more in-the-know to explain them.
