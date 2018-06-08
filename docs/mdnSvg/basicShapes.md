# Basic shapes

There are several basic shapes used for most SVG drawing. The purpose of these shapes is fairly obvious from their names. Some of the attributes that determine their position and size are given, but an element reference would probably contain more accurate and complete descriptions along with other properties that won't be covered in here. However, since they're used in most SVG documents, it's necessary to give them some sort of introduction.

> 这里介绍的几个基本的形状用于大多数 SVG 绘图。通过这些形状的命名可以知道其用途。给它们一些属性可以确定它们的位置和大小，但一个元素参考可能包含对元素属性的更准确和完整的描述，这里先不做介绍。然而，由于有些元素可以用在大多数 SVG 文档中，所以很有必要在这里介绍这部分元素。

## Basic shapes

To insert a shape, you create an element in the document. Different elements correspond to different shapes and take different attributes to describe the size and position of those shapes. Some are slightly redundant in that they can be created by other shapes, but they're all there for your convenience and to keep your SVG documents as short and as readable as possible. All the basic shapes are shown in the image to the right. The code to generate that looks something like:

> 想要插入一个形状，你可以在文档中创建一个元素。不同元素对应不同形状，并且使用不同的属性来定义图形的大小和位置。有一些形状因为可以由其他形状创建而略显冗余，但是用起来方便，可让我们的 SVG 文档简洁易懂。右边的图片展示了所有的基本形状。代码如下。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

**Note:** The `stroke`, `stroke-width` and `fill` attributes are explained later in the tutorial.

### Rectangles

The [rect](/) element does exactly what you would expect and draws a rectangle on the screen. There are really only 6 basic attributes that control the position and shape of the rectangle on screen here. The image shown earlier shows two rect elements, which I admit is a bit redundant. The one on the right has its rx and ry attributes set, giving it rounded corners. If they're not set, they default to 0.

> 就像你能联想到的，rect 元素会在屏幕上绘制一个矩形。其实只要 6 个基本属性就可以控制它在屏幕上的位置和形状。上面的图例中最先展示了 2 个矩形，虽然这有点冗余了。右边的那个图形设置了 rx 和 ry 属性用来控制圆角。如果没有设置圆角，则默认为 0。

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

x

The x position of the top left corner of the rectangle.

> 矩形左上角的 x 位置

y

The y position of the top left corner of the rectangle.

> 矩形左上角的 y 位置

width

The width of the rectangle

> 矩形宽度

height

The height of the rectangle

> 矩形高度

rx

The x radius of the corners of the rectangle

> 圆角 x 方位的半径

ry

The y radius of the corners of the rectangle

> 圆角的 y 方位的半径

### Circle

As you would have guessed, the [circle](/en-US/Web/SVG/Element/circle 'en-US/Web/SVG/Element/circle') element draws a circle on the screen. There are really only 3 attributes that are applicable here.

> 正如你猜到的，circle 元素会在屏幕上绘制一个圆形。它只有 3 个属性用来设置圆形。

```xml
<circle cx="25" cy="75" r="20"/>
```

r

The radius of the circle.

cx

The x position of the center of the circle.

cy

The y position of the center of the circle.

### Ellipse

[Ellipse](/en-US/Web/SVG/Element/ellipse 'en-US/Web/SVG/Element/ellipse')s are actually just a more general form of the circle element, where you can scale the x and y radius (commonly called the semimajor and semiminor axis by math people) of the circle separately.

> Ellipse 是 circle 元素更通用的形式，你可以分别缩放圆的 x 半径和 y 半径（通常数学家称之为长轴半径和短轴半径）

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

rx

The x radius of the ellipse.

ry

The y radius of the ellipse.

cx

The x position of the center of the ellipse.

cy

The y position of the center of the ellipse.

### Line

[Line](/en-US/Web/SVG/Element/line 'en-US/Web/SVG/Element/line')s are again, just straight lines. They take as attributes two points which specify the start and end point of the line.

> Line 绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置。

```xml
<line x1="10" x2="50" y1="110" y2="150"/>
```

x1

The x position of point 1.

y1

The y position of point 1.

x2

The x position of point 2.

y2

The y position of point 2.

### Polyline

[Polyline](/en-US/Web/SVG/Element/polyline 'en-US/Web/SVG/Element/polyline')s are groups of connected straight lines. Since that list can get quite long, all the points are included in one attribute:

> Polyline 是一组连接在一起的直线。因为它可以有很多点，折线的所有点位置都放在一个 points 属性中。

```xml
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```

points

A list of points, each number separated by a space, comma, EOL, or a line feed character. Each point must contain two numbers, an x coordinate and a y coordinate. So the list (0,0), (1,1) and (2,2) could be written: "0 0, 1 1, 2 2".

> 点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表(0,0)(1,1)和(2,2)可以写成这样"0 0,1 1,2 2"

### Polygon

[Polygon](/en-US/Web/SVG/Element/polygon 'en-US/Web/SVG/Element/polygon')s are a lot like polylines in that they're composed of straight line segments connecting a list of points. For polygons though, the path automatically returns to the first point for you at the end, creating a closed shape. Note that a rectangle is a type of polygon, so a polygon can be used to create a `<rect/>` element in cases where you need a little more flexibility.

> polygon和折线很像，它们都是由连接一组点集的直线构成。不同的是，polygon的路径在最后一个点处自动回到第一个点。需要注意的是，矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个矩形。


```xml
<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
```

points

A list of points, each number separated by a space, comma, EOL, or a line feed character. Each point must contain two numbers, an x coordinate and a y coordinate. So the list (0,0), (1,1) and (2,2) could be written: "0 0, 1 1, 2 2". The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0).

### Path

[Path](/en-US/Web/SVG/Element/path 'en-US/Web/SVG/Element/path') is probably the most general shape that can be used in SVG. Using a path element you can draw rectangles (with or without rounded corners), circles, ellipses, polylines, and polygons. Basically any of the other types of shapes, bezier curves, quadratic curves, and many more. For that reason, paths alone will be [the next section](/en-US/Web/SVG/Tutorial/Paths 'en-US/Web/SVG/Tutorial/Paths') in this tutorial, but for now I will just point out that there is a single attribute used to control its shape.

> path可能是SVG中最常见的形状。你可以用path元素绘制矩形（直角矩形或者圆角矩形）、圆形、椭圆、折线形、多边形，以及一些其他的形状，例如贝塞尔曲线、2次曲线等曲线。因为path很强大也很复杂，所以会在下一章进行详细介绍。这里只介绍一个定义路径形状的属性。

```xml
<path d="M 20 230 Q 40 205, 50 230 T 90230"/>
```

d

A list of points and other information about how to draw the path. See the [Paths](/en-US/Web/SVG/Tutorial/Paths 'en-US/Web/SVG/Tutorial/Paths') section for more information.
