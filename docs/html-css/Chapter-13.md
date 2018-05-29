---
layout: SpecialLayout
---

# 表单

HTML 表单元素允许从网站访问者中收集输入，比如，邮件列表，联系表单和博客评论等。对于从网站获利的机构来说，表单不可或缺。

![Examples of text inputs, textareas, radio buttons, checkboxes, and other HTML form elements](/images/html-css/html-form-elements-939709.png)

表单意味着钱，电商通过它销售产品，saas 公司通过它收取服务费用，以及非营利组织通过它筹集资金。很多公司都是通过表单数据来衡量网站质量的，因为很多数据来源都来自表单。这意味着，表单需要持续 A/B 测试和优化。

![Diagram: frontend form elements sending input to backend server for processing](/images/html-css/form-frontend-and-backend-2a0f80.png)

表单包含：前端和服务端。前者处理表达外观（由 HTML 和 css 定义），后者处理逻辑。（数据库中数据，电子邮件等。）本章主要讲前端，后端在以后的教程会涉及。

## 安装

表达美化比较难。在码字前最好有个模型来表示你想要构建的界面。比如：

![Mobile and desktop web page mockups with several form elements](/images/html-css/responsive-form-mockup-963e65.png)

如你所见，这是一个模拟的会议发言表单。包含了几乎所有的表单元素：文本，单选按钮，下来菜单，复选框，提交按钮。

创建 `form` 目录，在创建 `speaker-submission.htm`文件：

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Speaker Submission</title>
    <link rel='stylesheet' href='styles.css'/>
  </head>
  <body>
    <header class='speaker-form-header'>
      <h1>Speaker Submission</h1>
      <p><em>Want to speak at our fake conference? Fill out
        this form.</em></p>
    </header>
  </body>
</html>
```

接着创建 `styles.css` ：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #5d6063;
  background-color: #eaedf0;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.3;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.speaker-form-header {
  text-align: center;
  background-color: #f6f7f8;
  border: 1px solid #d6d9dc;
  border-radius: 3px;

  width: 80%;
  margin: 40px 0;
  padding: 50px;
}

.speaker-form-header h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
```

本着移动优先，这些基础样式实现了移动布局，并给桌面布局提供了基础。后续用媒体查询实现固定宽度。

## HTML 表单

表单 `<from>` 接受多个属性，比较重要的有：`action` 和 `method` 比如：

```html
<form action='' method='get' class='speaker-form'>
</form>
```

`action` 属性添加表单发送的 URL。当用户按 submit 按钮后，表单内容就会被发送到这里。由服务器定义 ULR 并处理数据，常用后端技术包括：[Node.js](https://nodejs.org/en/), [PHP](http://php.net/), 和 [Ruby on Rails](http://rubyonrails.org/)

![Diagram: <form> action and method attributes sent to backend server](/images/html-css/form-action-attribute-68258a.png)

`method` 接受 [`post`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) 或 [`get`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) 方法。用于定义表单如何发送给后端服务，一般是由服务器决定，但常规是修改数据时使用 `post` 获取时使用 `get`。

`action` 为空提交到当前 URL。结合 get 方法，可以让我们检查表单的内容。

### 美化表单

没内容不代表不可以嵌套 DIV 容器并添加样式：

```css
.speaker-form {
  background-color: #f6f7f8;
  border: 1px solid #d6d9dc;
  border-radius: 3px;

  width: 80%;
  padding: 50px;
  margin: 0 0 40px 0;
}
```

## 文本输入字段

`<input/>` 通常用于收集用户输入：

```html
<div class='form-row'>
  <label for='full-name'>Name</label>
  <input id='full-name' name='full-name' type='text'/>
</div>
```

首先，div 容器用于添加样式，常用于分离 input 元素。接着，添加 `<label>` 用于语义化，它的 `for` 属性跟 `input` 的 `id` 相对应。

![Diagram: for attribute of <label> pointing to id attribute of <input> element](/images/html-css/label-element-for-attribute-313489.png)

可以修改 `type` 来改变 input 的外观，用于交互式用户输入。后续会介绍其他类型的 input。记住不能滥用 `Id` 选择器，这里它只用于连接 `label` 元素。

![Diagram: name attribute of <input> element sending variable to server](/images/html-css/sending-input-variable-to-server-653369.png)

`name` 定义名称。`value` 用于记录用户输入，它可以预先设置值。

### 美化文本输入框

`input` 同样可以美化。添加如下样式：

```css
.form-row {
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
}

.form-row input[type='text'] {
  background-color: #ffffff;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  width: 100%;
  padding: 7px;
  font-size: 14px;
}

.form-row label {
  margin-bottom: 15px;
}
```

`input[type='text']` 是 css 选择器的一种，称为属性选择器。它只会匹配 `type` 属性为 `text` 的 input。这样我们只会给文本输入框添加样式，会忽略 `<input type='radio'/>` 。详情参阅[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

所有样式都在 `.form-row` 命名空间下，隔离 input 和 label 的样式使得创建不同类型的表单更加容易。下面讲到单选按钮是，我们就会知道为什么不在全局下添加 `input[type='text']` 和 `label` 选择器了。

自后基于基础样式给桌面布局添加媒体查询相关样式：

```css
@media only screen and (min-width: 700px) {
  .speaker-form-header,
  .speaker-form {
    width: 600px;
  }
  .form-row {
    flex-direction: row;
    align-items: flex-start; /* To avoid stretching */
    margin-bottom: 20px;
  }
  .form-row input[type='text'] {
    width: 250px;
    height: initial;
  }
  .form-row label {
    text-align: right;
    width: 120px;
    margin-top: 7px;
    padding-right: 20px;
  }
}
```

不知道 flex 的魅力的同学，可以看之前的章节

![Web page showing single text field styled with CSS](/images/html-css/styling-text-input-field-6e4ed3.png)

## 电子邮件输入框

不同类型的输入框可能有不同的输入验证，比如电子邮件输入框只接受电子邮件地址：

```html
<div class='form-row'>
  <label for='email'>Email</label>
  <input id='email'
         name='email'
         type='email'
         placeholder='joe@example.com'/>
</div>
```

电子邮件输入框除了会自动检查用户输入外，其他表现与文本输入框差不多。在火狐浏览器中，您可要输入非电子邮件地址，然点击输入以外的部分，使其失去焦点。它应该会变成红色来告知用户输入错误。谷歌和 safari 只会在提交表单的时候验证，后续操作会演示。

![Web page showing invalid email field value highlighted with red border](/images/html-css/firefox-invalid-email-input-f98cc1.png)

不仅仅是验证，它会告知浏览器我们需要的电子邮件地址，浏览器会相应提升用户体验。比如，智能手机浏览器中的电子邮件输入框会提供一个电子邮件专用键盘，并且有 `@` 字符。

`placeholder` 属性用于在表单值为空时候的文本占位符。

还有别的验证规则如：`required`, `minlength`, `maxlength`, 和 `pattern` 属性，详情参阅[`<input/>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)。

### 美化电子邮件输入框

可以这么做：

```css
/* Change this rule */
.form-row input[type='text'] {
  background-color: #ffffff;
  /* ... */
}

/* To have another selector */
.form-row input[type='text'],
.form-row input[type='email'] {
  background-color: #ffffff;
  /* ... */
}
```

同样我们不会用 `input` 选择器来匹配，因为它会给所有的 input 元素都添加样式。比如单选框和复选框，这让维护变得非常棘手。正确使用 css 选择器给元素添加样式也是必备技能。

别忘了 PC 端的样式，添加媒体查询样式 （注意，我们先给后面可能用到的 select 和 textarea 也添加样式）

```css
@media only screen and (min-width: 700px) {
  /* ... */
  .form-row input[type='text'],
  .form-row input[type='email'],    /* Add */
  .form-row select,                 /* These */
  .form-row textarea {
    /* Selectors */
    width: 250px;
    height: initial;
  }
  /* ... */
}
```

在来添加媒体查询外的基础样式，输入框验证结果样式：通过伪类 `:valid`（验证通过）和 `:invalid`（验证失败）来实现：

```css
.form-row input[type='text']:invalid,
.form-row input[type='email']:invalid {
  border: 1px solid #d55c5f;
  color: #d55c5f;
  box-shadow: none; /* Remove default red glow in Firefox */
}
```

伪类 `:focus` 用于给聚焦的 input 元素添加样式，这使得我们的表单样式更加多样化。

## 单选按钮

把 input 的 type 修改为 radio，可以让它变成单选按钮。稍微复杂一点，单选按钮一般是组合，允许用户选择其中一项。

![Diagram: <fieldset> wrapping a <legend> and a series of radio buttons with associated <label> elements](/images/html-css/radio-label-fieldset-legend-elements-0affe5.png)

意味着每个 input 元素都需要 label，还得用`<fieldset>` 和 `<legend>` 去组合，同时需要遵循：

* 用 `<fieldset>`包裹, 用 `<legend>` 添加标签。
* 每个按钮都需要 label 关联起来。
* 组内的每个单选按钮的 name 属性都一样。
* 每个单选按钮的 `value`属性都不一样。

如下：

```html
<fieldset class='legacy-form-row'>
  <legend>Type of Talk</legend>
  <input id='talk-type-1'
         name='talk-type'
         type='radio'
         value='main-stage' />
  <label for='talk-type-1' class='radio-label'>Main Stage</label>
  <input id='talk-type-2'
         name='talk-type'
         type='radio'
         value='workshop'
         checked />
  <label for='talk-type-2' class='radio-label'>Workshop</label>
</fieldset>
```

跟文本输入框不一样，单选按钮不会接受用户的输入。所以每个单选按钮都有一个固定的 value 属性值，这个值用于选中某个单选按钮后发送给服务端。另外，每个单选按钮都有一样的 name 值，因为这样才知道哪些是一组的。

还有个新的属性 `checked`，是一个布尔值属性。在 input 元素中，要么有这个值，要么没有。有意味着默认选中。

### 美化单选按钮

美化单选按钮相对难些：`<fieldset>` 和 `<legend>` 默认样式比较丑，而且在浏览器中的缺省设置也不一致。另外 `<fieldset>` 不支持 flexbox。

别怕!还有 float 呢!细心的你可能发现了，我们用 `.fegacy-form-row`类名代替了之前的 `.form-row` 。因为它将于其他元素完全分离，使用 float 而不是 flexbox。

![Diagram: mobile layout created with block box <label> versus desktop layout with label as floated left](/images/html-css/radio-button-float-layout-df003b.png)

添加基础样式：

```css
.legacy-form-row {
  border: none;
  margin-bottom: 40px;
}

.legacy-form-row legend {
  margin-bottom: 15px;
}

.legacy-form-row .radio-label {
  display: block;
  font-size: 14px;
  padding: 0 20px 0 10px;
}

.legacy-form-row input[type='radio'] {
  margin-top: 2px;
}

.legacy-form-row .radio-label,
.legacy-form-row input[type='radio'] {
  float: left;
}
```

针对桌面端添加媒体查询相关样式：

```css
@media only screen and (min-width: 700px) {
  /* ... */
  .legacy-form-row {
    margin-bottom: 10px;
  }
  .legacy-form-row legend {
    width: 120px;
    text-align: right;
    padding-right: 20px;
  }
  .legacy-form-row legend {
    float: left;
  }
}
```

就布局而言，这是一个好的跨浏览器的解决方案。定制按钮的外观是篇外话了，可以用 checked 属性，但是有点复杂。读者可自行谷歌 custom radio button CSS。

## 下拉框

下拉菜单是单选按钮的另一种形式，它允许用户从多个选项中选择一个。

```html
<div class='form-row'>
  <label for='t-shirt'>T-Shirt Size</label>
  <select id='t-shirt' name='t-shirt'>
    <option value='xs'>Extra Small</option>
    <option value='s'>Small</option>
    <option value='m'>Medium</option>
    <option value='l'>Large</option>
  </select>
</div>
```

和单选按钮一样也有 `name` 和 `value` 属性用于传递到后端服务器。但它们不是在单个元素上定义，而是通过 `select` 和 `option` 元素。

### 美化下拉框

下拉框也是很难美化的，原因在于它复杂的交互型，在设备间会发现显著变化。比如，在 Iphone 上，点击下拉框会弹出一个本地可滚动的 UI 组件用于快速导航。

![Screenshot showing three <option> elements in the scrolling <select> menu at the bottom of an iPhone screen](/images/html-css/select-dropdown-in-iphone-a9968d.png)

建议尽量让浏览器/设备去预设下拉框，不过就算只用简单的样式也非常难，比如你要修改下拉框的字体。

```css
.form-row select {
  width: 100%;
  padding: 5px;
  font-size: 14px; /* This won't work in Chrome or Safari */
}
```

在火狐上可行，但是谷歌和 safari 就挂了。此时就得用 `appearance` 浏览器前缀来解决了：

```css
.form-row select {
  width: 100%;
  padding: 5px;
  font-size: 14px; /* This won't work in Chrome or Safari */
  -webkit-appearance: none; /* This will make it work */
}
```

`-webkit` 只对谷歌和 safari 生效（webkit 渲染引擎），而火狐则不受影响。这其实是个黑魔法，甚至 MDN 都不建议使用这个 css 属性。[not to use this CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance)

创建表单难免会遇此类样式问题，如果你需要定制化样式，建议用单选框或者 JavaScript UI 控件。如[Bootstrap Dropdowns](http://getbootstrap.com/javascript/#dropdowns) and [jQuery Selectmenu’s](https://jqueryui.com/selectmenu/#default)，至少你已经知道了问题所在，接下来你可以从下拉框 issues [here](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Advanced_styling_for_HTML_forms#Dealing_with_the_select_nightmare)查看更多问题。

## Textareas

`<textarea>` 允许输入多行文本，用于收集用户提供的大量文本。适用于传记，散文，评论等。接着在表单中添加 `<textarea>` 和一段描述。

```html
<div class='form-row'>
  <label for='abstract'>Abstract</label>
  <textarea id='abstract' name='abstract'></textarea>
  <div class='instructions'>Describe your talk in 500 words or less</div>
</div>
```

它不像 `<input/>` 自闭合标签，需要用 `</textarea>` 闭合。可以用 `value` 属性添加默认文本。

### 美化文本框

可以给文本框添加如下样式：

```css
.form-row textarea {
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;

  border: 1px solid #d6d9dc;
  border-radius: 3px;

  min-height: 200px;
  margin-bottom: 10px;
  padding: 7px;
  resize: none;
}

.form-row .instructions {
  color: #999999;
  font-size: 14px;
  margin-bottom: 30px;
}
```

浏览器默认可以把 `textarea` 修改为任意大小，当然我们也可以通过 `resize` 属性禁用。

针对桌面端，可以这么处理：

```css
@media only screen and (min-width: 700px) {
  /* ... */
  .form-row .instructions {
    margin-left: 120px;
  }
}
```

## 复选框

复选框有点像单选框，但可以多选。这就简单了，因为浏览器不需要针对哪个复选框是同一组的。也就是说不用 `<fieldset>` 包裹或者用 `name` 属性：

```html
<div class='form-row'>
  <label class='checkbox-label' for='available'>
  <input id='available'
         name='available'
         type='checkbox'
         value='is-available'/>
  <span>I’m actually available the date of the talk</span>
  </label>
</div>
```

这里的 `label` 和之前的不太一样。`label` 包裹了 `input` 元素。这是合法的，而去更容易实现布局，另外仍然建议使用 `for` 属性。

### 美化复选框

手机端不需要 `margin-bottom` ：

```css
.form-row .checkbox-label {
  margin-bottom: 0;
}
```

针对媒体查询处理如下：

```css
@media only screen and (min-width: 700px) {
  /* ... */
  .form-row .checkbox-label {
    margin-left: 120px;
    width: auto;
  }
}
```

宽度自适应可以使用 `width:auto`

![Web page with several HTML form elements, including a checkbox](/images/html-css/adding-a-checkbox-8a0541.png)

## 提交按钮

最后，添加提交按钮：

```html
<div class='form-row'>
  <button>Submit</button>
</div>
```

单击按钮可以让浏览器验证表单所有 input 元素，如果没有任何验证问题，则会提交到 `action` URL。如果你输入错误的邮件地址，应该会看到一条错误信息。

![Screenshot showing invalid input error message for email field](/images/html-css/chrome-invalid-email-input-3ae531.png)

这就是用户输入发送到服务器的过程。首先，将一些值输入到 input ，验证邮件地址，然后，单击按钮并在浏览器中检查生成的 URL，你应该可以看到：

```
speaker-submission.html?full-name=Rick&email=rick%40internetingishard.com&talk-type=workshop&t-shirt=l&abstract=Derp.&available=is-available
```

`?` 后面的东西表示了表单的变量。每个 input 的 name 属性后面跟着一个等号。变量间用 `&` 分割。如果我们有一个后端服务器，它将非常容易地提取出所有这些信息。查询数据库，并通知表单是否提交成功。

### 美化提交按钮

之前有学过如何通过伪类美化按钮。之前是给 a 标签添加样式，同样也可以给 button 添加样式。

![Web page showing the form’s submit button](/images/html-css/styling-a-submit-button-7e80de.png)

添加厦门样式美化按钮：

```css
.form-row button {
  font-size: 16px;
  font-weight: bold;

  color: #ffffff;
  background-color: #5995da;

  border: none;
  border-radius: 3px;

  padding: 10px 40px;
  cursor: pointer;
}

.form-row button:hover {
  background-color: #76aeed;
}

.form-row button:active {
  background-color: #407fc7;
}
```

更复选框一样，需要 `120px` 的左偏移量。

```css
@media only screen and (min-width: 700px) {
  /* ... */
  .form-row button {
    margin-left: 120px;
  }
}
```

## 总结

本章介绍了场景的 HTML 表单元素，现在我们可以用它们来手机用户数据了。

* `<input type='text'/>`
* `<input type='email'/>`
* `<input type='radio'/>`
* `<select>` 和 `<option>`
* `<textarea>`
* `<input type='checkbox'/>`
* `<button>`

要构造更完美的表单需要学习额外的内容，它超出了本教程的范围。另外，一般有两种处理表单的方法：

* 用 `action` 属性，重定向到成功或失败的界面。不需要任何 JavaScript
* 利用 AJax 技术，在不离开界面的情况下提交表单。直接用 JavaScript 将成功或失败信息显示在同一界面。

根据组织架构的不同，有些前端可能不需要处理这一部分的工作。如果是的话，建议跟后端人员多沟通。确保正确的键值对。

最后一章将讨论 web 字体和每个 web 开发人员应该知道的实用的排版原则。
