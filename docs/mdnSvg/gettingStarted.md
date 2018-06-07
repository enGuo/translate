# Getting Started 入门

```html
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

## Basic properties of SVG files

- The first important thing to notice is the order of rendering of elements

The globally valid rule for SVG files is , that later elements are rendered

atop previous elements.The further down an elements is the more will be visible.

> 最值得注意的一点是元素的渲染顺序。SVG 文件全局有效的规则是“后来居上”，越后面的元素越可见。

- SVG files on the web can be displayed directly in the browser or embedded in HTML files via several methods

> web 上的 svg 文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到 HTML 文件中：

- if the HTML is XHTML and is delivered as type `application/xhtml+xml`,the SVG can be directly embedded in the XML source.

> 如果 HTML 是 XHTML 并且声明类型为 `application/xhtml+xml` ，可以直接把 SVG 嵌入到 XML 源码中。

- if the HTML is HTML5,and the browser is a conforming HTML5 browser,the SVG can be directly embedded,too.However,

there may be syntax changes necessary to conform to the HTML5 specification

> 如果 HTML 是 HTML5 并且浏览器支持 HTML5，同样可以直接嵌入 SVG，然而为了符合 HTML5 标准，可能需要做一些语法调整。

- The svg file can be reference with an `object` element

> 可以通过 `object` 元素引用 SVG 文件

`<object data='image.svg' type='image/svg+xml'/>`

- Likewise an `iframe` element can be used

> 类似的也可以使用 `iframe` 元素引用 SVG 文件

`<iframe src='image.svg'></iframe>`

- An `img` element can be used theoretically,too.However this technique doesn't work in Firefox before 4.0

> 理论上同样可以使用 `img` 元素，但是在低于 4.0 版本的 Firefox 中不起作用。

- Finally SVG can be created dynamically with Javascript and injected into the

HTML DOM. With this method replacement technologies can be implemented for browser

which normally can't process SVG.

> 最后 SVG 可以通过 JavaScript 动态创建并注入到 HTML DOM 中。这样具有一个优点，可以对浏览器使用替代技术，在不能解析 SVG 的情况下，可以替换创建的内容。

## SVG File Types SVG 文件类型

SVG files come in two flavors. Normal SVG files are simple text files containing SVG markup. The recommended filename extension for these files is '.svg'(all lowercase)

> SVG 文件有两种形式。普通文件是包含 SVG 标记的简单文本文件。推荐使用“.svg”（全部小写）作为此类文件的扩展名。

Due to the potentially massive size SVG files can reach when used for some applications

(e.g., geographical applications),the SVG specification also allows for gzip-compressed

SVG files.The recommended filename extension for these files is ".svgz" (all lowercase).

Unfortunately it is very problematic to get gzip-compressed SVG files to work reliably

across all SVG capable user agents when served from Microsofts IIS server,and Firefox

can not load gzip-compressed SVG from the local computer. Avoid gzip-compressed SVG

except when you are publishing to a webserver that tou know will serve it correctly(see below)

> 由于在某些应用（比如地图应用等）中使用时，SVG 文件可能会很大，SVG 标准同样允许 gzip 压缩的 SVG 文件。
> 推荐使用“.svgz”(全部小写)作为此类文件扩展名。不幸的是，人工服务器是微软的 IIS 服务器，使 gzip 压缩的 SVG 文件在所有的可用的 SVG 的用户代理商可靠地起作用是相当困难的，
> 而且 Firefox 不能在本地机器上加载 gzip 压缩的 SVG 文件。除非知道处理发布内容的 web 服务器可用正确处理 gzip，否则要避免使用 gzip 压缩的 SVG。

## A Word on Webservers

Now that you have an idea of how to create basic SVG files, the next stage is to upload them to a Webserver. There are some gotchas at this stage though. For normal SVG files, servers should send the HTTP headers:

> 如果你已经知道了如何创建基本 SVG 文件，下一步就是把它们上传到 web 服务器，但是在这阶段有一些陷阱。对于普通 SVG 文件，服务器应该会发送下面的 HTTP 头：

```
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

For gzip-compressed SVG files, servers should send the HTTP headers:

> 对于 Gzip 压缩的 svg 文件，服务器应该会发送下面的 HTTP 头

```
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

You can check that your server is sending the correct HTTP headers with your SVG files by using the Network Monitor panel or a site such as web-sniffer.net. Submit the URL of one of your SVG files and look at the HTTP response headers. If you find that your server is not sending the headers with the values given above, then you should contact your Web host. If you have problems convincing them to correctly configure their servers for SVG, there may be ways to do it yourself. See the server configuration page on the w3.org for a range of simple solutions.

> 可以利用 Network Monitior panel 或者 web sniffer.net 之类的网站来检查服务器是否给 SVG 文件发送正确的 HTTP 头，向 web-sniffer.net 提交你的一个 SVG 文件的链接，然后查看 HTTP 响应头。如果发现服务器没有发送上述的响应头部值，那么你应该联系你的服务器供应商。如果不能说服他们为 svg 修正服务器配置，可能还有一些我们可以自行解决的办法， 请阅读 SVG 维基的 server configuration page 以找到一些简单的解决方案。

Server misconfiguration is a very common reason for SVG failing to load, so make sure you check yours. If your server is not configured to send the correct headers with the SVG files it serves, then Firefox will most likely show the markup of the files as text or encoded garbage, or even ask the viewer to choose an application to open them.

> 服务器配置错误是 SVG 加载失败的常见原因，所以一定要确保你的服务器配置正确。如果不能把服务器配置成给 SVG 文件发送正确的响应头，这时 Firefox 很有可能把该文件的标记显示成文本或乱码，甚至会要求查看者选择打开文件的应用程序。
