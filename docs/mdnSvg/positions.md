# positions 坐标定位

In this article, we examine how Scalable Vector Graphics (SVG) represents the positions and sizes of objects within a drawing context, including coordinate system and what a "pixel" measurement means in a scalable context.

> 本文将介绍 SVG 坐标定位及画布中对象尺寸相关知识，包括坐标系统以及像素度量在可缩放中的意义。

## The grid

![](/images/mdnSvg/Canvas_default_grid.png)

For all elements, SVG uses a coordinate system or **grid** system similar to the one used by [canvas](/) (and by a whole lot of other computer drawing routines). That is, the top left corner of the document is considered to be the point (0,0), or point of origin. Positions are then measured in pixels from the top left corner, with the positive x direction being to the right, and the positive y direction being to the bottom. Note that this is the opposite of the way you're taught to graph as a kid. However, this is the same way elements in HTML are positioned (By default, LTR documents are considered not the RTL documents which position X from right-to-left).

> 对于所有元素，SVG 使用的坐标系统或者说网格系统，和 Canvas 用的差不多(所有计算机绘图都差不多)。这种坐标系统是：以界面的左上角为(0,0)坐标点，坐标以像素为单位，X 轴正方向是向右，Y 轴正方向是向下。注意，这和你小时候所教的绘图方式是相反的。但是在 HTML 文档中，元素都是用这种方式定位的。

#### Example:

The element

```html
<rect x="0" y="0" width="100" height="100" />
```

defines a rectangle from the upper left corner, that spans from there 100px to the right and to the bottom.

> 定义一个矩形，即从左上角开始，向右延展 100px，向下延展 100px，形成一个 100\*100 大的矩形。

### What are "pixels"?

In the most basic case one pixel in an SVG document maps to one pixel on the output device (a.k.a. the screen). But SVG wouldn't have the "Scalable" in its name, if there weren't several possibilities to change this behaviour. Much like absolute and relative font sizes in CSS, SVG defines absolute units (ones with a dimensional identifier like "pt" or "cm") and so-called user units, that lack that identifier and are plain numbers.

> 基本上，在 SVG 文档中的 1 个像素对应输出设备（比如显示屏）上的 1 个像素。但是这种情况可是可以改变的，否则 SVG 的名字里也不至于会有 "Scalable" （可缩放）这个词。如同 css 可以定义字体的绝对大小和相对大小，SVG 也可以定义绝对大小（比如使用 pt 或 cm 标识维度）同时 SVG 也能使用相对大小，只需要给出数字，不标明单位，输出时就会采用用户的单文。

Without further specification, one user unit equals one screen unit. To explicitly change this behaviour, there are several possibilities in SVG. We start with the `svg` root element:

> 在没有进一步规范说明的情况下，1 个用户单位等同于 1 个屏幕单位。要明确改变这种设定，SVG 里有很多方法。我们从 SVG 根元素开始：

```html
<svg width="100" height="100">
```

The above element defines a simple SVG canvas with 100x100px. One user unit equals one screen unit.

> 上面元素定义了一个 100\*100px 的 svg 画布，这里 1 用户单位等同于 1 屏幕单位

```html
<svg width="200" height="200" viewBox="0 0 100 100">
```

The whole SVG canvas here is 200px by 200px in size. However, the `viewBox` attribute defines the portion of that canvas to display. These 200x200 pixels display an area that starts at user unit (0,0) and spans 100x100 user units to the right and to the bottom. This effectively zooms in on the 100x100 unit area and enlarges the image to double size.

> 这里定义的画布尺寸是 200\*200px，但是 viewBox 属性定义了画布上可以显示的区域：从(0,0)点开始，100 宽\*100 高的区域。这个 100\*100 的区域，会放到 200\*200 的画布上显示。于是就形成了放大两倍的效果。

The current mapping (for a single element or the whole image) of user units to screen units is called **user coordinate system**. Apart from scaling the coordinate system can also be rotated, skewed and flipped. The default user coordinate system maps one user pixel to one device pixel. (However, the device may decide, what it understands as one pixel.) Lengths in the SVG file with specific dimensions, like "in" or "cm", are then calculated in a way that makes them appear 1:1 in the resulting image.

> 用户单位和屏幕单位的隐射关系本称为用户坐标系统。除了缩放之外，坐标系统还可以旋转、倾斜、翻转。默认的用户坐标系统 1 用户像素等于设备上的 1 像素（但是设备上可能会自己定义 1 像素到底是多大。）在定义了具体尺寸单位的 SVG 中，比如单位时 cm 或 in，最终图形会以实际大小的 1 比 1 比例呈现。

A quote from the SVG 1.1 specification illustrates this:

> 下面是引自 SVG1.1 规范的一段说明：

> \[...\] suppose that the user agent can determine from its environment that "1px" corresponds to "0.2822222mm" (i.e., 90dpi). Then, for all processing of SVG content: \[...\] "1cm" equals "35.43307px" (and therefore 35.43307 user units)

> 假设在用户的设备环境里，1px 等于 0.2822222 毫米（即分辨率是 90dpi），那么所有的 SVG 内容都会按照这种比例处理：1cm 等于 35.43307px（即 35.43307 用户单位）
