# css 揭秘

<table>
    <tbody>
        <tr>
            <td>
                <h1>术语翻译对照表</h1>
                <table>
                    <thead>
                        <tr>
                            <th>原文</th>
                            <th>本书译法</th>
                            <th>其它译法（未采用）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>CSS</strong>
                            </td>
                            <td>-</td>
                            <td>层叠样式表、级联样式表、样式单</td>
                        </tr>
                        <tr>
                            <td>cascade</td>
                            <td>层叠（机制）</td>
                            <td>级联</td>
                        </tr>
                        <tr>
                            <td>fallback</td>
                            <td>回退（机制、措施、方案）</td>
                            <td>后备、回落、降级</td>
                        </tr>
                        <tr>
                            <td>selector</td>
                            <td>选择符</td>
                            <td>选择器、选择式</td>
                        </tr>
                        <tr>
                            <td>specification</td>
                            <td>（技术）规范</td>
                            <td>规格说明书</td>
                        </tr>
                        <tr>
                            <td>spec</td>
                            <td>〃</td>
                            <td>〃</td>
                        </tr>
                        <tr>
                            <td>specificity</td>
                            <td>（选择符的）优先级</td>
                            <td>特异性、权重</td>
                        </tr>
                        <tr>
                            <td>feature</td>
                            <td>特性</td>
                            <td>功能</td>
                        </tr>
                        <tr>
                            <td>markup</td>
                            <td>（结构）标记</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tag</td>
                            <td>标签</td>
                            <td>标记</td>
                        </tr>
                        <tr>
                            <td>attribute</td>
                            <td>（标签）属性</td>
                            <td>特性</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>property</strong>
                            </td>
                            <td>（对象、样式）属性</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>颜色</td>
                            <td>色彩</td>
                        </tr>
                        <tr>
                            <td>transition</td>
                            <td>过渡（动画）</td>
                            <td>变换</td>
                        </tr>
                        <tr>
                            <td>transform</td>
                            <td>变形</td>
                            <td>变换</td>
                        </tr>
                        <tr>
                            <td>translate</td>
                            <td>位移</td>
                            <td>转移、转化</td>
                        </tr>
                        <tr>
                            <td>animation</td>
                            <td>动画</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>gradient</td>
                            <td>渐变（色、图案）</td>
                            <td>过渡</td>
                        </tr>
                        <tr>
                            <td>linear-gradient</td>
                            <td>线性渐变</td>
                            <td>直线～</td>
                        </tr>
                        <tr>
                            <td>radial-gradient</td>
                            <td>径向渐变</td>
                            <td>辐射～</td>
                        </tr>
                        <tr>
                            <td>conic-gradient</td>
                            <td>角向渐变</td>
                            <td>角度～、圆锥～</td>
                        </tr>
                        <tr>
                            <td>background</td>
                            <td>背景</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>background color</td>
                            <td>背景色</td>
                            <td>背景颜色</td>
                        </tr>
                        <tr>
                            <td>background image</td>
                            <td>背景图像</td>
                            <td>背景图片</td>
                        </tr>
                        <tr>
                            <td>(background) repeat</td>
                            <td>（重复）平铺</td>
                            <td>重复</td>
                        </tr>
                        <tr>
                            <td>(repeating) tile</td>
                            <td>（平铺）贴片</td>
                            <td>瓦片、瓷砖</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Box Model</strong>
                            </td>
                            <td>盒模型</td>
                            <td>盒子模型</td>
                        </tr>
                        <tr>
                            <td>padding</td>
                            <td>内边距</td>
                            <td>补白</td>
                        </tr>
                        <tr>
                            <td>margin</td>
                            <td>外边距</td>
                            <td>边距</td>
                        </tr>
                        <tr>
                            <td>margin collapsing</td>
                            <td>外边距重叠</td>
                            <td>～叠加、～重合、～塌陷</td>
                        </tr>
                        <tr>
                            <td>border</td>
                            <td>边框</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>outline</td>
                            <td>描边</td>
                            <td>外框、轮廓</td>
                        </tr>
                        <tr>
                            <td>flexbox</td>
                            <td>伸缩盒（布局）</td>
                            <td>弹性盒、弹性盒子</td>
                        </tr>
                        <tr>
                            <td>block (level) element</td>
                            <td>块级元素</td>
                            <td>块元素</td>
                        </tr>
                        <tr>
                            <td>inline element</td>
                            <td>行内元素</td>
                            <td>内联～、行间～</td>
                        </tr>
                        <tr>
                            <td>container</td>
                            <td>容器</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>wrapper</td>
                            <td>容器</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>UI</strong>
                            </td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tab</td>
                            <td>标签页</td>
                            <td>标签、页签、选项卡</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>preprocessor</td>
                            <td>预处理器</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>bug</td>
                            <td>-</td>
                            <td>（程序）缺陷、漏洞</td>
                        </tr>
                        <tr>
                            <td>(CSS) hack</td>
                            <td>-</td>
                            <td>招数、偏方、CSS 黑客程序</td>
                        </tr>
                        <tr>
                            <td>hacky</td>
                            <td>有 hack 的味道（感觉）</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>（未完）</p>
                <hr>
                <ul>
                    <li>“本书译法” 一列中的
                        <code>-</code> 表示不译，直接采用英文原文。</li>
                    <li>“其它译法” 一列中的
                        <code>-</code> 表示暂无其它译法。</li>
                    <li>波浪号（
                        <code>～</code>）表示省略与前面重复的部分字词。</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## 其他

* 注释（Comment）
* 语句（Statement）
* 规则集（Rule-set）
* At 规则（At-rule）
* 媒体查询（Media query）
* 媒体查询列表（Media query list）
* 媒体类型（Media type）
* 表达式（Expression）
* 媒体特性（Media feature）
* 块（Block）
* 声明块（Declaration block）
* 选择器（Selector）
* 简单选择器（Simple selector）
* 通用选择器（Universal selector）
* ID 选择器（ID selector）
* 类选择器（Class selector）
* 属性选择器（Attribute selector）
* 伪类（Pseudo-class）
* 伪元素（Pseudo-element）
* 连接符/结合符（Combinator）
* 后代选择器（Descendant combinator）
* 子选择器（Child combinator）
* 相邻选择器（Adjacent sibling combinator）
* 普通兄弟选择器（General sibling combinator）
* 声明（Declaration）
* 属性（Property）
* 值（Value）
* 函数（Function）
* 关键字（Keyword）
* 标识(biāo zhì)符（Identifier）
* 字符串（String）
* URL
* 数值（Number）
* 百分数（Percentage）
* 长度（Length）
* 单位（Unit）
* 颜色（Color）
* 前缀（Vendor prefix）
