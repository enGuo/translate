# path

The [`<path>`](https://developer.mozilla.org/en-US/Web/SVG/Element/path) element is the most powerful element in the SVG library of [basic shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes). You can use it to create lines, curves, arcs and more.

> 如上一章所说，`<path>` 元素是 SVG 基本形状中最强大的一个，它不仅能创建其他基本形状，还能创建更多其他形状。

Paths create complex shapes by combining multiple straight lines or curved lines. Complex shapes composed only of straight lines can be created as [polylines](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes#Polyline). While polylines and paths can create similar-looking shapes, polylines require a lot of small straight lines to simulate curves and don't scale well to larger sizes. A good understanding of paths is important when drawing SVGs. While creating complex paths using an XML editor or text editor is not recommended, understanding how they work will allow you to identify and repair display issues in SVGs.

> 另外，path 只需要设定很少的点，就可以创建平滑流畅的线条（比如曲线）。虽然 polyline 元素也能实现类似的效果，但是必须设置大量的点（点越密集，越接近连续，看起来越平滑流畅），并且这种做法不能够放大（放大货单号点的离散更明显）。所以在绘制 SVG 时，对路径的良好理解很重要。虽然用 XML 或文本编辑器来编辑 path 元素不是很容易，但可以帮助我们理解 path 是如何工作的，所以，你就忍了吧。

The shape of a path element is defined by one attribute: `[d](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)` (see more in [basic shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)). The `"d"` attribute contains a series of commands and parameters used by those commands.

> 上一章提到过，path 元素的形状是通过属性 d 定义的，属性 d 的值是一个命令加参数的系列，我们将讲解这些可用的命令，并且展示一些示例。

Each of the commands is instantiated (for example, creating a class, naming and locating it) by a specific letter. For instance, let's move to the x and y coordinates (10, 10). The "Move to" command is called with the letter M. When the parser runs into this letter, it knows you want to move to a point. So, to move to (10,10) you would use the command "M 10 10". After that, the parser begins reading for the next command.

每一命令都用一个关键字母来表示，比如，字母 M 表示的是 Move to 命令，当解析器读到这个命令时，它就知道你是打算移动到某个点。跟在命令字母后面的，是你需要移动到的那个点的 x 和 y 轴坐标。比如移动到(10,10)这个点的命令，应该 写成 "M 10 10"。这段字符结束后，解析器就会去读下一段命令。

All of the commands also come in two variants. An **uppercase letter** specifies absolute coordinates on the page, and a **lowercase letter** specifies relative coordinates (e.g. _move from the last point 10px up and 7px to the left_).

每一个命令都有两种表示方式，一种是用大写字母，表示采用绝对定位。另一种是用小写字母，表示采用相对定位（例如：从上一个点开始，向上移动 10px，向左移动 7px）。

Coordinates in the `"d"` attribute are **always unitless** and hence in the user coordinate system. Later, we will learn how paths can be transformed to suit other needs.

> 因为属性 d 采用的是用户坐标系统，所以不需要标明单位。在后面的教程中，我们会学习到如何让变换路径，以满足更多需求。

## Line commands

There are five line commands for `<path>` nodes. As the name suggests, each one just draws a straight line between two points. The first command is the "Move To" or M, which was described above. It takes two parameters, a coordinate  ' x ' and coordinate ' y ' to move to. If your cursor already was somewhere on the page, no line is drawn to connect the two places. The "Move To" command appears at the beginning of paths to specify where the drawing should start. e.g. :

> path 元素有 5 个画直线的命令，顾名思义，直线命令就是在两个点之间画直线。首先是 Move to 命令，M，前面已经提到过，它需要两个参数，分别是需要移动到的点的 x 轴和 y 轴的坐标。假设，你的画笔当前位于一个点，在使用 M 命令移动画笔后，只会移动画笔，但不会在两点之间画线。因为 M 命令仅仅是移动画笔，但不画线。所以 M 命令经常会出现在路径的开始处，用来指明从何处开始画。

```html
M x y
```

or

```html
m dx dy
```

In the following example we only have a point at (10,10). Note, though, that it wouldn't show up if you were just drawing the path normally. For example:

![](https://developer.mozilla.org/@api/deki/files/45/=Blank_Path_Area.png)

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

<path d="M10 10"/>

<!-- Points -->
<circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

There are three commands that draw lines. The most generic is the "Line To" command, `called with L`. `L` takes two parameters—x and y coordinates—and draws a line from the current position to a new position.

> 能够真正画出线的命令有三个（M 命令是移动画笔位置，但是不画线），最常用的是 Line to 命令，L，L 需要两个参数，分别是一个点的 x 轴和 y 轴坐标，L 命令将会在当前位置和新位置（L 前面画笔所在的点）之间画一条线段。

```html
L x y (or l dx dy)
```

There are two abbreviated forms for drawing horizontal and vertical lines. `H` draws a horizontal line, and `V` draws a vertical line. Both commands only take one argument since they only move in one direction.

> 另外还有两个简写命令，用来绘制平行线和垂直线。H，绘制平行线，V，绘制垂直直线。这两个命令都只带一个参数。标明在 x 轴或 y 轴移动到的位置，因为它们都旨在坐标轴的一个方向上移动。

```html
H x (or h dx)
V y (or v dy)
```

An easy place to start is by drawing a shape. We will start with a rectangle (the same type that could be more easily be made with a `<rect>` element). It's composed of horizontal and vertical lines only:

> 现在我们已经掌握了一些命令，可以开始画一些东西了，先从简单的地方开始，画一个简单的矩形。（同样的效果用`<rect></rect>`元素可以更简单的实现），矩形是由水平线和垂直线组成的，所以这个例子可以很好地展现前面讲的画线的方法。

![](https://developer.mozilla.org/@api/deki/files/292/=Path_Line_Commands.png)

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

<path d="M10 10 H 90 V 90 H 10 L 10 10"/>

<!-- Points -->
<circle cx="10" cy="10" r="2" fill="red"/>
<circle cx="90" cy="90" r="2" fill="red"/>
<circle cx="90" cy="10" r="2" fill="red"/>
<circle cx="10" cy="90" r="2" fill="red"/>

</svg>
```

We can shorten the above path declaration a little bit by using the "Close Path" command, called with `Z`. This command draws a straight line from the current position back to the first point of the path. It is often placed at the end of a path node, although not always. There is no difference between the uppercase and lowercase command.

> 最后，我们可以通过一个"闭合路径命令"Z 来简化上面的 path，z 命令会从当前点画一条直线到路径的起点，尽管我们不总是需要闭合路径，但是它还是会经常被放到路径的最后。另外 Z 命令不区分大小写。

```html
Z (or z)
```

So our path above could be shortened to:

> 所以上面的例子用到的路径，可以简化成这样：

```xml
<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

You can also use the relative form of these commands to draw the same picture. Relative commands are called by using lowercase letters, and rather than moving the cursor to an exact coordinate, they move it relative to its last position. For instance, since our box is 80 x 80, the path element could have been written:

> 你也可以使用这些命令的相对坐标形式来绘制相同的图形，如之前所述，相对命令使用的是小写字母，它们的参数不是指定一个明确的坐标，而是表示相对于它前面的点需要移动多少距离。例如前面得示例，画的是一个 80\*80 的正方形，用相对命令可以这样描述：

```xml
<path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

The path will move to point (10,10) and then move horizontally 80 points to the right, then 80 points down, then 80 points to the left, and then back to the start.

> 上述路径是：画笔移动到(10,10)点，由此开始，向右移动 80 像素构成一条水平线，然后向下移动 80 像素，然后向左移动 80 像素，然后再回到起点。

In these examples, it would probably be simpler to use the `<polygon>` or `<polyline>`elements. However, paths are used so often in drawing SVG that developers may be more comfortable using them instead. There is no real performance penalty or bonus for using one or the other.

> 你可能会为这些命令有什么用，因为 polygon 和 polyine 可以做到画出一样的图形。答案是，这些命令可以做的更多，如果你只是话直线，那么其他元素可能会更好用，但是，path 却是众多开发者在 svg 绘制中经常用到的。据我所知，它们之间不存在性能上的优劣。但是用过脚本生成 path 可能有所不同，因为另外两种方法只需要指明点，儿 path 在这方面的语法会更复杂一些。

## Curve commands

There are three different commands that you can use to create smooth curves. Two of those curves are Bezier curves, and the third is an "arc" or part of a circle. You might have already gained practical experience with Bezier curves using path tools in Inkscape, Illustrator or Photoshop. For a complete description of the math behind Bezier curves, go to a reference like the one on [Wikipedia](http://en.wikipedia.org/wiki/B%C3%A9zier_curve). There are an infinite number of Bezier curves, but only two simple ones are available in path elements: a cubic one, called with C, and a quadratic one, called with Q.

> 绘制平滑曲线的命令有三个，其中两个用来绘制贝赛尔曲线，另外一个用来绘制弧形或者说是圆的一部分。如果你在 inkscape，illustrator 或者 Photoshop 中用过路径工具，可能对贝赛尔曲线有一定程度的了解。欲了解贝赛尔曲线的完整数学讲解，请阅读 wiki。在这里不用讲得太多。贝赛尔曲线的类型有很多，但是在 path 元素里，只存在两种贝赛尔曲线：三次贝赛尔曲线 C 和二次贝赛尔曲线 Q。

### Bezier Curves

The cubic curve, C, is the slightly more complex curve. Cubic Beziers take in two control points for each point. Therefore, to create a cubic Bezier, you need to specify three sets of coordinates.

> 我们从稍微复杂一点的三次贝塞尔曲线 C 入手，三次贝塞尔曲线需要定义一个点和两个控制点。所以用 c 命令创建三次贝赛尔曲线，需要设置三组坐标参数：

```html
C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
```

The last set of coordinates here (x,y) are where you want the line to end. The other two are control points. (x1,y1) is the control point for the start of your curve, and (x2,y2) is the control point for the end. The control points essentially describe the slope of your line starting at each point. The Bezier function then creates a smooth curve that transfers you from the slope you established at the beginning of your line, to the slope at the other end.

> 这里的最后一个坐标(x,y)表示的是曲线的终点，另外两个坐标是控制点(x1,y1)是起点的控制点，(x2,y2)是终点的控制点，如果你熟悉代数或者微积分的话，会更容易理解控制点，控制点描述的是曲线起始点的倾斜率，曲线上各个点的斜率，是从起点斜率到终点斜率的渐变过程。（文字描述不好，维基百科上有图，更直观。）

![Cubic Bézier Curves with grid](https://developer.mozilla.orghttps://mdn.mozillademos.org/files/10401/Cubic_Bezier_Curves_with_grid.png)

```html
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

<path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
<path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
<path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
<path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
<path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
<path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
<path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
<path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
<path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

</svg>
```

The example above creates nine Cubic Bezier curves. As the curves move toward the right, the control points become spread out horizontally. As the curves move downward, they become further separated from the end points. The thing to note here is that the curve starts in the direction of the first control point, and then bends so that it arrives along the direction of the second control point.

> 上面的例子里，创建了 9 个三次贝赛尔曲线。有一点比较遗憾，标记控制点的代码会比较庞大，所以在这里舍去了。（之前所有点都用 circle 标记，此处一样，只不过没把代码列出来）。如果你想更准确地控制它们，可以自己动手把他们画出来。图例上的曲线从左往右看，控制点在水平方向上逐渐分开，图例上的曲线从右往左看，控制点之间离得越来越远。这里要注意观察，曲线沿着起点到第一控制点的方向伸出，逐渐弯曲，然后沿着第二控制点到终点的方向结束。

You can string together several Bezier curves to create extended, smooth shapes. Often, the control point on one side of a point will be a reflection of the control point used on the other side to keep the slope constant. In this case, you can use a shortcut version of the cubic Bezier, designated by the command `S` (or `s`).

> 你可以将若干个贝赛尔曲线连起来，从而创建出一条很长的平滑曲线。通常情况下，一个点某一侧的控制点是它另一侧的控制点的对称（以保持斜率不变）。这样，你可以使用一个简写的贝赛尔曲线命令 S，如下所示：

```html
S x2 y2, x y (or s dx2 dy2, dx dy)
```

`S` produces the same type of curve as earlier, but if it follows another `S` command or a `C` command, the first control point is assumed to be a reflection of the one used previously. If the `S` command doesn't follow another `S` or `C` command, then the current position of the cursor is used as the first control point. In this case the result is the same as what the Q command would have produced with the same parameters. An example of this syntax is shown below, and in the figure to the left the specified control points are shown in red, and the inferred control point in blue.

> S 命令可以用来创建与之前那些曲线一样的贝赛尔曲线，但是，如果 S 命令跟在一个 C 命令或者另一个 S 命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。如果 S 命令单独使用，前面没有 C 命令或者另一个 S 命令，那么它的两个控制点就会被假设为另一个点。下面是 S 命令的语法示例，如图中的某个控制点用红色标示，与它对称的控制点用蓝色标示。

![ShortCut_Cubic_Bezier_with_grid.png](https://developer.mozilla.orghttps://mdn.mozillademos.org/files/10405/ShortCut_Cubic_Bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
<path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

The other type of Bezier curve, the quadratic curve called with Q, is actually a simpler curve than the cubic one. It requires one control point which determines the slope of the curve at both the start point and the end point. It takes two arguments: the control point and the end point of the curve.

> 另一种可用的贝赛尔曲线是二次贝塞尔曲线 Q，它比三次贝赛尔曲线简单，只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。

```html
Q x1 y1, x y (or q dx1 dy1, dx dy)
```

![Quadratic Bézier with grid](https://developer.mozilla.orghttps://mdn.mozillademos.org/files/10403/Quadratic_Bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
<path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

As with the cubic Bezier curve, there is a shortcut for stringing together multiple quadratic Beziers, called with T.

> 就像三次贝赛尔曲线有一个 S 命令，二次贝塞尔曲线有一个差不多的 T 命令，可以通过更简短的参数，延长二次贝赛尔曲线。

```html
T x y (or t dx dy)
```

This shortcut looks at the previous control point you used and infers a new one from it. This means that after your first control point, you can make fairly complex shapes by specifying only end points.

This only works if the previous command was a Q or a T command. If it is not, then the control point is assumed to be the same as the previous point, and you'll only draw lines.

> 和之前一样，快捷命令 T 会通过前一个控制点，推断出一个新的控制点。这意味着，在你的第一个控制点后面，可以只定义终点，就创建出一个相当复杂的曲线。需要注意的是，T 命令前面必须是一个 Q 命令，或者是另一个 T 命令，才能达到这种效果。如果 T 单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线。

![Shortcut_Quadratic_Bezier_with_grid.png](https://developer.mozilla.orghttps://mdn.mozillademos.org/files/10407/Shortcut_Quadratic_Bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
<path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Both curves produce similar results, although the cubic allows you greater freedom in exactly what your curve looks like. Deciding which curve to use is situational and depends on the amount of symmetry your line has.

> 虽然三次贝赛尔曲线拥有更大的自由度，但是两种曲线能达到的效果总是差不多的。具体使用哪种曲线，通常取决于需求，以及对曲线对称性的依赖程度。

### Arcs

The other type of curved line you can create using SVG is the arc, called with A. Arcs are sections of circles or ellipses. For a given x-radius and y-radius, there are two ellipses that can connect any two points (as long as they're within the radius of the circle). Along either of those circles there are two possible paths that you can take to connect the points, so in any situation there are four possible arcs available. Because of that, arcs have to take in quite a few arguments:

> 弧形命令 A 是另一个创建 SVG 曲线的命令。基本上，弧形可以视为圆形或椭圆形的一部分。假设，已知椭圆形的长轴半径和短轴半径，并且已知两个点（在椭圆上），根据半径和两点，可以画出两个椭圆，在每个椭圆上根据两点都可以画出两种弧形。所以，仅仅根据半径和两点，可以画出四种弧形，为了保证创建的弧形唯一，A 命令需要用到比较多的参数：

```html
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

At its start, the arc element takes in two arguments for the x-radius and y-radius. If you need to, look up [ellipses](https://developer.mozilla.org/en-US/Web/SVG/Element/ellipse) to see how they behave. The final two arguments designate the x and y coordinates to end the stroke. Together, these four values define the basic structure of the arc.

The third parameter describes the rotation of the arc. This is best explained with an example:

> 弧形命令 A 的前两个参数分别是 x 轴半径和 y 轴半径，他们的作用很明显，不用多做解释，如果你不是很清楚它们的作用，可以参考一些椭圆命令中的相同参数。弧形命令 A 的第三个参数表示弧形的旋转情况，下面的例子可以很好地解释它：

![SVGArcs_XAxisRotation_with_grid](https://developer.mozilla.orghttps://mdn.mozillademos.org/files/10409/SVGArcs_XAxisRotation_with_grid.png)

```xml
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
<path d="M10 315
L 110 215
A 30 50 0 0 1 162.55 162.45
L 172.55 152.45
A 30 50 -45 0 1 215.1 109.9
L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
</svg>
```

The example shows a path element that goes diagonally across the page. At its center, two elliptical arcs have been cut out (x radius = 30, y radius = 50). In the first one, the x-axis-rotation has been left at 0, so the ellipse that the arc travels around (shown in gray) is oriented straight up and down. For the second arc, though, the x-axis-rotation is set to -45 degrees. This rotates the ellipse so that it is aligned with its minor axis along the path direction, as shown by the second ellipse in the example image.

如图例所示，画布上有一条对角线，中间有两个椭圆弧被对角线切开（x radius = 30，y = radius = 50）。第一个椭圆弧的 x-axis-rotation （x 轴旋转角度）是 0，所以弧形所在的椭圆是正置的（没有倾斜）。在第二个椭圆弧汇总，x-axis-rotation 设置为-45，所以这是一个旋转了 45 度的椭圆，并以短轴为分割线，形成了两个对称的弧形。参看图示中的第二个椭圆形。

For the unrotated ellipse in the image above, there are only two different arcs and not four to choose from because the line drawn from the start and end of the arc goes through the center of the ellipse. In a slightly modified example you can see the two ellipses that form the four different arcs:

> 对于上图没有旋转的椭圆，只有 2 中弧形可以选择，不是 4 中，因为两个点连线（也就是对角线）正好穿过了椭圆的中心。像下面这张图，就是普通的情况，可以画出两个椭圆，四种弧。

![Show the 4 arcs on the Ellipse example](https://developer.mozilla.orghttps://mdn.mozillademos.org/files/15822/SVGArcs_XAxisRotation_with_grid_ellipses.png)

```html
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
<path d="M10 315
L 110 215
A 36 60 0 0 1 150.71 170.29
L 172.55 152.45
A 30 50 -45 0 1 215.1 109.9
L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
<circle cx="150.71" cy="170.29" r="2" fill="red"/>
<circle cx="110" cy="215" r="2" fill="red"/>
<ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue"/>
<ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue"/>
</svg>
```

Notice that each of the blue ellipses are formed by two arcs, depending if you travel clockwise or counter-clockwise. Each ellipse has one short arc and one long arc. The two ellipses are just mirror images of each other. They are flipped along the line formed from the start->end points.

If the start->end points are farther than the ellipse's x and y radius can reach, the ellipse's radii will be minimally expanded so it could reach the start->end points. The interactive codepen at the bottom of this page demonstrates this well. To determine if your ellipse's radii is large enough to require expanding, you would need to solve a system of equations such as [this on wolfram alpha](<https://developer.mozilla.org<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>>). This computation is for the non-rotated ellipse with start->end (110, 215)->(150.71, 170.29). The solution, (x, y), is the center of the ellipse(s). The solution will be [imaginary](<https://developer.mozilla.org<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>>) if your ellipse radii is too small. This second computation is for the non-rotated ellipse with start->end (110, 215)->(162.55, 162.45). The solution has a small imaginary component because the ellipse was just barely expanded.

The four different paths mentioned above are determined by the next two argument flags. As mentioned earlier, there are still two possible ellipses for the path to travel around and two different possible paths on both ellipses, giving four possible paths. The first argument is the large-arc-flag. It simply determines if the arc should be greater than or less than 180 degrees; in the end, this flag determines which direction the arc will travel around a given circle. The second argument is the sweep-flag. It determines if the arc should begin moving at positive angles or negative ones, which essentially picks which of the two circles you will travel around. The example below shows all four possible combinations, along with the two circles for each case.

![](https://developer.mozilla.org/@api/deki/files/345/=SVGArcs_Flags.png)

> 上面提到的四种不同路径将由接下来的两个参数决定。如前所讲，还有两种可能的椭圆用来形成路径，它们给出的四种可能的路径中，两种不同的路径。这里要讲的参数是 large-arc-flag（角度大小）和 sweep-frag（弧形方向），large-arc-flag 决定弧线是大于还是小于 180 度，0 表示小角弧度，1 表示大角弧度，sweep flag 表示弧形的方向，0 表示从起点到终点沿逆时针画弧，1 表示从起点到终点沿顺时针画弧。下面的例子展示了这四种情况。

```xml
<svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
<path d="M80 80
A 45 45, 0, 0, 0, 125 125
L 125 80 Z" fill="green"/>
<path d="M230 80
A 45 45, 0, 1, 0, 275 125
L 275 80 Z" fill="red"/>
<path d="M80 230
A 45 45, 0, 0, 1, 125 275
L 125 230 Z" fill="purple"/>
<path d="M230 230
A 45 45, 0, 1, 1, 275 275
L 275 230 Z" fill="blue"/>
</svg>
```

Arcs are an easy way to create pieces of circles or ellipses in your drawings. For instance, a pie chart would require a different arc for each piece.

> 你应该已经猜到了，最后两个参数是指定弧形的终点，弧形可以简单地创建图形或椭圆形图标，比如你可以创建若干片弧形，组成一个饼图。

If you're transitioning to SVG from [Canvas](https://developer.mozilla.org/en/HTML/Canvas), arcs can be the hardest thing to learn, but are also much more powerful. Complete circles and ellipses are actually the only shapes that canvas arcs have trouble drawing. Because the start and end points for any path going around a circle are the same point, there are an infinite number of circles that could be chosen, and the actual path is undefined. It's possible to approximate them by making the start and end points of your path slightly askew, and then connecting them with another path segment. For example, you can make a circle with an arc for each semicircle. At that point, it's often easier to use a real circle or ellipse node instead. This interactive demo might help you understand the concepts behind SVG arcs: [http://codepen.io/lingtalfi/pen/yaLWJG](https://developer.mozilla.orghttp://codepen.io/lingtalfi/pen/yaLWJG) (tested in chrome and firefox only, might not work in your browser)

> 如果你是从 canvas 过度到 SVG，那么弧形会比较难以掌握，但它也是非常强大的。用路径来绘制完整的圆或者椭圆是比较困难的，因为圆上的任意点都可以是起点同时也是重点，无数种方案可以选择，真正的路径无法定义。通过绘制连续的路径段落，也可以达到近似的效果，但使用真正的 circle 或者 ellipse 元素会更容易些。
