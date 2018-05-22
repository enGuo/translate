# The Design of HTML5

* Watch [the video](https://vimeo.com/15755349) of this talk.
* Download [the slides](http://adactio.com/extras/slides/designofhtml5.pdf).

> 李松峰老师翻译，Jeremy Keith 在 Fronteers 2010 上的主题演讲

I would like to talk to you today about The Design of HTML5. So there’s two parts to this: one is, of course, HTML5. I could stand up here and just talk about HTML5 but that’s not what I’m going to do because if you want to know what is in HTML5 you can Google it, you can read books, you can go and read the spec.

> 今天我想跟大家谈一谈 HTML5 的设计。主要分两个方面：一方面，当然了，就是 HTML5。我可以站在这儿只讲 HTML5，但我并不打算这样做，因为如果你想了解 HTML5 的话，你可以 Google，可以看书，甚至可以看规范。

Actually, some other people are going to be talking about the contents of the spec. Steve Faulkner will be talking about accessibility and HTML5. Paul Irish is going to go through a whole bunch of the APIs that are in HTML5. So I’m not just going to stand up here and run through what’s in HTML5.

> 实际上，确实有人会谈到规范的内容。史蒂夫·福克纳（Steve Faulkner）会讲 HTML5 与可访问性。而保罗·艾里什（Paul Irish）则会讲 HTML5 提供的各种 API。因此，我今天站在这里，不会光讲一讲 HTML5 就算完事了。

Actually, before I even get started I should probably clarify what I mean by HTML5, which seems kind of crazy ‘cause why should I have to clarify what I mean by HTML5 when what I mean by HTML5 is HTML5? There’s a specification, it’s called HTML5 and when I say HTML5 that’s what I am referring to. The problem is other people are using the term HTML5 to refer to just about anything, which can be problematic. For example, referring to CSS3 as HTML5 for some reason seems to be a common technique. That’s not what I’m referring to. When I say HTML5 I don’t mean CSS3, I mean HTML5.

> 说老实话，在正式开始之前，我想先交待清楚我所说的 HTML5 到底是什么意思。这话听起来有点搞笑：这会子你一直在说 HTML5，难道我们还不知道什么是 HTML5 吗？大家知道，有一个规范，它的名字叫 HTML5。我所说的 HTML5，指的就是这个规范。但问题是，有些人所说的 HTML5，指的不仅仅是这个规范，还有别的意思。比如说，用 HTML5 来代指 CSS3 就是一种常见的叫法。我可不是这样的。我所说的 HTML5，不包含 CSS3，就是 HTML5。

We’ve been here before with terms. It used to be that Ajax meant something specific and then, after a while, it just became “doing anything cool with Javascript.” That was Ajax, right? And now the same thing seems to be happening to the term HTML5. It’s supposed to mean a specific specification and now it just means “doing anything cool (fullstop) on the web.” But that’s not the HTML5 I mean. I don’t mean this umbrella term that covers anything that’s new these days. I’m specifically talking about the specification: HTML5.

> 类似的术语问题以前也有过。Ajax 本来是一种含义明确的技术，但过了不久，它的含义就变成了“用 JavaScript 来做一切好玩的东西”。这就是 Ajax，对不对？今天，HTML5 也面临同样的问题，它本来指的是一个特定的规范，但如今含义却成了“在 Web 上做一切好玩的事。”我说的不是这种 HTML5，不是这种涵盖了最近刚刚出现的各种新东东的 HTML5。我说的仅仅是规范本身：HTML5。

As I said, it’s not so much the contents I want to talk about. It’s not going through a checklist of what’s in HTML5. It’s the other side of it, it’s the design of HTML5. What I want to talk about is not so much what is in the spec but why these things are in the spec, what the process was in thinking of these things when designing a specification.

> 刚才已经说了，我今天想要讲的内容不多，也没有打算介绍 HTML5 都包含什么。今天我要讲的是它的另一方面，即 HTML5 的设计。换句话说，我要讲的不是规范里都包含什么，而是规范里为什么会包含它们，以及在设计这个规范的时候，设计者们是怎么看待这些东西的。

## Design principles

A design principle is essentially a belief, a tenant, a concept that you rally behind. It doesn’t matter wether your making a specification or if you are making a physical object or a piece of software or a programming language. You will probably find a design principle or multiple design principles behind all good examples of anything that has been built collaboratively. And it’s not just from the world of the web. Throughout history there example of design principles behind large scale constructions like countries, societies.

> 设计原理本质上是一种信念、一种想法、一个概念，是你行动的支柱。不管你是制定规范，还是制造一种有形的物品，或者编写软件，甚至发明编程语言。你都能找到背后的一个或者多个设计原理，多人协作的任何成果都是例证。不仅仅 Web 开发领域是这样。纵观人类历史，像国家和社会这样大规模的构建活动背后，同样也有设计原理。

To give you an example, from the United States of America, this is a design principle built into the Declaration of Independence.

> 就拿美国为例吧，美国的设计原理都写在了《独立宣言》中了。

We hold these Truths to be self-evident, that all Men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.

> 我们认为这些真理是不言而喻的，人人生而平等，造物主赋予了每个人不可剥夺的权利，包括生存、自由和追求幸福。

They have the watchwords in there: life, liberty, the pursuit of happiness. These are the keys things enthroned into the constitution, this is what we are all about, these are the principles on which we want to build our society.

> 这里有一句口号：生存、自由和追求幸福。这是被写进宪法中的核心理念，它关系到我们所有人的一切，也就是我们构建自己社会的原则。

Another example would be from Karl Marx whose writing were used as a basis for building societies throughout the 20th century and a lot of it could be boiled down to this one design principle:

> 还有一个例子，就是卡尔·马克思（Karl Marx），他的著作在 20 世纪曾被奉为建设社会主义的圭臬。其基本思想大致可以归结为下面这条设计原理：

From each according to his ability, to each according to his need.

> 各尽所能，各取所需。

So here we have this design principle guiding an economic system.

> 这其实就是一种经济体系背后的设计原理。

Another example, much older than that but using a similar principle to this would be:

> 还有一个例子，比前面两个的历史更久远一些，不过大同小异：

Do unto others as you would have them do unto you.

> 人人为我，我为人人。

A very simple, small design principle from Jesus Christ, a Nazarene Jew from two thousand years ago. And this design principle theoretically is what drives a number of religions that have been built on top of the teachings of this principle. The principles and the practices sometimes go out of sync.

> 这个极为简单的设计原理，是两千年前的拿撒勒犹太人耶稣基督提出来的。而这条原则成为了后来许多宗教的核心教义。原理与实践有时候并不是同步的。

Here’s an example from fiction. When George Orwell wrote Animal Farm he had a fictional society and that fictional society was built upon a design principle. In this case the design principle was:

> 下面是小说中的一个例子。英国小说家乔治·奥威尔（George Orwell）笔下的《动物庄园》，就是在一条设计原理的基础上构建起来的虚拟社会。这条设计原理是：

Four legs good, two legs bad.

> 四条腿的都是好人，两条腿的都是坏蛋！

What’s interesting is that in Animal Farm, as the society changes, as the society evolves for the worse, the design principle changes along with it so the design principle comes <q>four legs good, two legs better</q> as the animal farm itself changes but it’s interesting to see this in works of fiction.

> 《动物庄园》中有意思的是，随着社会的变迁——变得越来越坏，这条设计原理也跟着发生了改变，变成了“四条腿的都是好人，两条腿的就更好了。”最关键的是，即使是在虚构的作品里，设计原理都是存在的。

There is another work of fiction that has three design principles baked in and that’s from the canon of work from Isaac Asimov on robotics. He coined the term robotics and he basically ensconced these three laws of robotics, three fairly simple design principles but then build a whole canon of would around them, about fifty books, each permutations examining these design principles from different aspects. You’re probably familiar with the three laws of robotics I’m sure.

> 还有一套虚构的作品是以三条设计原理为基础构建起来的，那就是美国著名小说家艾萨克·阿西莫夫（Issac Asimov）的机器人经典系列。阿西莫夫发明了机器人学这个术语，并提出了机器人学三大法则，然后在这三个简单的设计原理基础上创作了一系列经典作品——大约有 50 本书。无论作品的情节如何变化，实际上都是从不同的角度来阐释这三大设计原理。我想，在座各位对机器人三大法则都不应该陌生。

A robot may not injure a human being or, through inaction, allow a human being to come to harm.

> 机器人不得伤害人类，或袖手旁观人类受伤害。

A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.

> 机器人必须服从人类命令，除非命令违反第一法则。

A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.

> 机器人必须自卫，只要不违背第一和第二法则。

This is, I think, the first example in fiction of design principles for a piece of software. In this case it would be a price of software to run a positronic brain in a robot that’s designed to the three simple design principles. But I think this might be the start of actually having design principles for software. And since then we see design principles for a lot of really good software.

> 这些恐怕是第一次出现在小说中的针对软件的设计原理了。虽然基于这三个设计原理的软件运行在虚构的机器人的“正电子脑”中，但我想这应该是软件设计原理的事实开端。从此以后，我们才看到大量优秀软件背后的设计原理。

Tim Berners-Lee who, as you know, co-invented the web. He has a document on the W3C website where he keeps his own set of personal design principles at a URL. They are kind of sprawling, there are a lot of them there, he adds to them, he adjusts them, he takes things away as time goes on but I think it’s a really good idea to have a personal set of design principles somewhere.

> 蒂姆·伯纳斯-李（Tim Berners-Lee），Web 的发明者，在 W3C 的网站上发表过一份文档，其中有一个 URL 给出了他自己的一套设计原理。这些设计原理并不那么容易理解，不仅多，而且随着时时间推移，他还会不断补充、修改和删除。不过我还是觉得把自己认同的设计原理写出来放在某个地方真是个不错的主意。

Actually, Bert Bos, co-inventor of CSS, he’s got great document on the W3C website that is kind of a meta design principles document. Like how to design building a format, whether it’s CSS or anything else. It is well worth reading.

> 实际上，CSS 的发明人之一伯特·波斯（Bert Bos），也在 W3C 的网站上放着一份文档，其中讲的都是基本的设计原理，比如怎样设计并构建一种格式，无论是 CSS 还是其他格式。推荐大家看一看。

So if you root around the W3C site you find a bunch of these design principles including TIm Berners-Lee’s personal ones and you see the watchwords he’s taken from schools of software engineering: decentralisation, tolerance, simplicity, modularity. These are key watchwords that he keeps in mind as they come up with formats.

> 只要你在 W3C 的站点中随便找一找，就可以发现非常多的这种设计原理，包括蒂姆·伯纳斯-李个人的。当然，你还会看到他从软件工程学校里借用的一些口号：分权（decentalisation）、容忍（tolerance）、简易（simplicity）、模块化（modularity）。这些都是在他发明新格式的时候，头脑中无时无刻不在想的那些关键词。

You’re all pretty familiar with the work of Tim Berners-Lee as you use it everyday. He invented the web, co-invented the web with Robert Cailliau, and as well as inventing the web itself he also came up with the language that we use everyday on the web and that language is of course HTML: HyperText Markup Language.

> 在座各位对蒂姆·伯纳斯-李的贡献都是非常熟悉的，因为大家每天都在用。他发明了 Web，与罗伯特·卡里奥（Robert Cailliau）共同发明了 Web，而且在发明 Web 的同时，也发明了我们每天都在 Web 上使用的语言。当然，这门语言就是 HTML：超文本标记语言。

## HTML

This is an early history of HTML, it started with version two point zero. There never was a HTML one. If anyone ever tells you they have been doing HTML since version one, they are bullshitting you. There was a document called HTML Tags that contained a handful of tags that still exists today but it wasn’t an official specification.

> HTML 最早是从 2.0 版开始的。从来就没有 1.0 版。如果有人告诉你说，他最早是从 HTML 1.0 开始使用 HTML 的，那他绝对是在忽悠你。从前确实有一个名叫 HTML Tags 的文档，其中的部分标签一直用到现在，但那个文档并非官方的规范。

This whole idea of using tags, angle brackets, ‘p’ or ‘h1’ or what have you; that isn’t something than Tim Berners-Lee came up with. He was basically taking an existing vocabulary from SGML, the particular version of SGML that was in use at CERN at the time. So even back then he wasn’t creating things from scratch; that’s an important lesson that you can still see in the evolution of HTML. Build on what’s come before rather than trying to build something from scratch.

> 使用标签、尖括号、p 或 h1，等等，并不是蒂姆·伯纳斯-李首创的想法。当时的 SGML 里就有了这些概念，而且当时的 CERN（Conseil Europeen pour la Recherche Nucleaire，欧洲核子研究委员会）也在使用 SGML 的一个特定的版本。也就是说，即便在那个时代，他也没有白手起家；这一点在 HTML 后来的发展过程中也体现了出来：继往开来、承前启后，而不是另立门户、从头开始。

So this HTML Tags document was the first version of HTML but wasn’t an official version. The first official version was HTML 2.0 which didn’t come from the W3C. HTML 2.0 was from the IETF, the Internet Engineering Task Force. They were responsible for putting out a lot of standards before the W3C really started off. But from version three onwards it was at the W3C, the World Wide Web Consortium, where later versions of HTML were specced.

> 换句话说，这篇名为 HTML Tags 的文档可以算作 HTML 的第一个版本，但它却不是一个正式的版本。第一个正式版本，HTML 2.0，也不是出自 W3C 之手。HTML 2.0 是由 IETF，因特网工程任务组（Internet Engineering Task Force）制定的。在 W3C 成立之前，IETF 已经发布了不少标准。但从第三个版本开始往后，W3C，万维网联盟（World Wide Web Consortium）开始接手，并负责后续版本的制定工作。

There was some fairly rapid movement in the nineties. As you can see, the nineties were a pretty turbulent time for anyone building websites back then. We had the browser wars, it was pretty messy. We had a lot of proprietary shit being thrown into browsers. They were trying to compete on having the best proprietary shit. It was kind of a messy time and it wasn’t clear at all at this time if HTML was even going to be around and if HTML was going to last as the format for the web.

> 20 世纪九十年代 HTML 有过几次快速的发展。众所周知，在那个时代要想构建网站，可是一项十分复杂的工程。浏览器大战曾令人头疼不已。市场竞争的结果就是各家浏览器里都塞满了各种专有的特性，都试图在专有特性上胜人一筹。当时的混乱程度不堪回首，HTML 到底还重不重要，或者它作为 Web 格式的前景如何，谁都说不清楚。

You can see it evolved fairly quickly, 3.2, 4.0, 4.01 from 1997 to 1999; very rapid evolution. What happened with 4.01 is the W3C stepped back, looked at it and said “Okay, this is good, we are done with HTML; HTML 4.01 is the final version of HTML, we don’t need a HTML working group anymore.”

> 从 1997 年到 1999 年，HTML 的版本从 3.2 到 4.0 到 4.01，经历了非常快的发展。问题是到了 4.01 的时候，W3C 的认识发生了倒退，他们说“好了，这个版本就这样了，HTML 也就这样了；HTML 4.01 是 HTML 的最后一个版本了，我们用不着 HTML 工作组了。”

They didn’t stop working on the language but it was no longer HTML they were interested in. Right after HTMl 4.01, they came up with XHTML 1.0. It sounds completely different but actually XHTML 1.0 was the same as HTML 4.01. I mean literally, the contents of the specification were the same, the vocabulary was the same, all the same elements, all the same attributes. The only difference, the only difference, was that in XHTML 1.0 you would use XML syntax. So that meant all your attributes had to be lowercase, all your elements had to be lowercase, all your attributes had to be quoted, you had to remember to use closing tags and you had to self close tags like img and br.

> W3C 并没有停止开发这门语言，只不过他们对 HTML 不再感兴趣了。在 HTML 4.01 之后，他们提出了 XHTML 1.0。虽然听起来完全不同，但 XHTML 1.0 与 HTML 4.01 其实是一样的。我的意思是说，从字面上看这两个规范的内容是一样的，词汇表是一样的，所有的元素是一样，所有的属性也都是一样的。唯一一点不同之处，就是 XHTML 1.0 要求使用 XML 语法。也就是说，所有属性都必须使用小写字母，所有元素也必须使用小写字母，所有属性值都必须加引号，你还得记着使用结束标签，记着对 img 和 br 要使用自结束标签。

From the point of view of the contents of the spec, exactly the same. There really was no difference. In a sense it really was just coding style, because to a browser if you served up HTML 4.01, HTML 3.2 or you served up XHTML 1.0 it didn’t matter, it was all the same to the browser; it would make the same DOM tree. But what was kind of nice about XHTML 1.0 was because it had this kind of stricter syntax, it was a sort of coding style that people could get behind.

> 从规范本身的内容来看，实际上是相同的，没有什么不同。不同之处就是编码风格，因为对浏览器来说，读取符合 HTML 4.01、HTML 3.2，或者 XHTML 1.0 规范的网页都没有问题，对浏览器来说这些网页都是一样的，都会生成相同的 DOM 树。只不过人们会比较喜欢 XHTML 1.0，因为不少人认同它比较严格的编码风格。

This time period of 2000, this was when the web standards project was picking up steam, and developers were really pissed off with all this proprietary crap that was being thrown into browsers; they were getting angry and saying to browsers “Why don’t you just follow the damn specifications?” And CSS is really starting to take off in a big way, and they kind of latched on to XHTML 1.0, they were like “Okay this is going to be best practice”, even though as I said, there’s really no difference between HTML 4.01 and XHTML 1.0. But okay, professionals always use lowercase elements, always use lowercase attributes, always quote your attributes: it was a good body of practice, so a lot of people got behind that syntax.

> 到了 2000 年，Web 标准项目（Web Standards Project）的活动开展得如火如荼，开发人员对浏览器里包含的那些乱七八糟的专有特性已经忍无可忍了。大家都很生气，就骂那些浏览器厂商“遵守个规范就他妈的真有那么难吗？”当时 CSS 有了长足的发展，而且与 XHTML 1.0 结合得也很紧密，CSS 加 XHTML 1.0 基本上就可以算是“最佳实践”了。虽然在我看来 HTML 4.01 与 XHTML 1.0 没有本质上的不同，但大家都接受了。专业的开发人员能做到元素全部小写，属性全部小写，属性值也全部加引号：由于专业人员起到了模范带头作用，越来越多的人也都开始支持这种语法。

I did for example! So for the last 10 years I’ve been using the XHTML 1.0 doctype, and one of the reasons is that it makes the validator a more powerful tool for me, right? So if I’m writing XHTML 1.0 and I run that through the validator it’s going to tell me if I forgot to quote an attribute, or if I forgot to include the closing tag, stuff like this. Whereas if I was writing in HTML 4.01 that stuff would be legal, it wouldn’t necessarily catch it.

> 我就是一个例子！过去的 10 年，我一直都使用 XHTML 1.0 文档类型，原因是这样一来验证器就能给我帮上很大的忙，对不对？只要我写的是 XHTML 1.0，然后用验证器测试，它就能告诉我是不是忘了给属性值加引号，是不是没有结束某个标签，等等等等。而如果我写的是 HTML 4.01，同样的问题就变成了有效的了，验证器就不一定会提醒我了。

That’s the reason why I’ve been using XHTML 1.0. And I’m guessing that a lot of people …hands up those who use XHTML 1.0. Okay. HTML 4.01? A few people. Any others, shout them out? HTML5, good for you! Anything older, anybody use older doctypes? No?

> 这就是我一直使用 XHTML 1.0 的原因。我估计很多人都……使用 XHTML 1.0 的朋友，请把手举起来。好的。HTML 4.01 呢？人少多了。一直没有举手的呢，大声点，你们用什么？HTML5，也很好！更早的呢，还有人使用更早的文档类型吗？没有了？

I’ve been using XHTML 1.0 for 10 years now because it makes validators a more useful tool. Is anybody using XHTML 1.1? Are you now? Keep those hands up. Are you serving your documents as XML? Some? Well the ones you’re not are not XHTML 1.1.

> 10 年来我一直使用 XHTML 1.0，就是因为验证器能够真正帮到我。有人用 XHTML 1.1 吗？你知道有人用吗？请举手，别放下。有人把网页标记为 XML 文档吗？有吗？那你们使用的就不是 XHTML 1.1。

This is the big issue. After XHTML 1.0 came XHTML 1.1, a small point increase, doesn’t sound like much, and again there’s nothing new in the spec from a vocabulary point of view, it’s all the same elements, it’s all the same attributes. The only difference was that now with XHTML 1.1 you must serve your documents as XML. With XHTML 1.0 you could serve them as HTML if you wanted, and that’s exactly what we do because you’d be kind of crazy to serve your documents as XML.

> 这就是个大问题。XHTML 1.0 之后是 XHTML 1.1，只是小数点后面的数字加了一个 1，而且从词汇表的角度看，规范本身没有什么新东西，元素也都相同，属性也都相同。但对 XHTML 1.1 来说，唯一的变化是你必须把自己的文档标记为 XML 文档。在使用 XHTML 1.0 的时候，还可以把文档标记为 HTML，而我们也正是这样做的，否则把文档标记为 XML 没准真会把人逼疯的。

One of the reasons why it’d be crazy to serve your documents as XML is that Internet Explorer can’t handle it. Well it can now on version 9. It’s like “Aww, thatt’s so cute”, that it’s still even thinking about it. That boat has sailed! So the world’s leading browser at the time couldn’t even handle documents sent as XML and this specification was mandating that you must send the documents as XML, it was kind of crazy.

> 为什么这么说呢？首先，把文档标记为 XML 后，Internet Explorer 不能处理。当然，IE9 是可以处理了。恐怕有人会讲“真是太可爱了”，他们到现在居然都没有忘了这件事。这艘船终于靠岸了！不过那时候，作为全球领先的浏览器，IE 无法处理接收到的 XML 文档类型的文档，而规范又要求你以 XML 文档类型来发送文档，这不把人逼疯才怪呢。

So XHTML 1.1 was just not that realistic, and the reason why you would not want to send your documents as XML even to browsers that understand XML is the error handling model of XML. The syntax of XML, okay I’ve got no problems with lowercase attributes, lowercase elements, always quote your attributes, that’s fine, in fact I kind of like it, but the error handling model of XML is this: When the parser comes across an error, stop parsing. That’s in the specification. So when you serve up XHTML 1.1 as XML, and let’s say you open it up in Firefox and you have one uncoded ampersand, just one on the whole page, then what you’ll see is the yellow screen of death. Firefox will say “Nope, you can’t see this web page because there’s one error on this page”. That is the correct behaviour according to the XML specification, for Firefox to stop right there and not render anything else is actually correct according to XML. Not HTML, because HTML has never had an error handling model, but according to the rules of XML that is correct.

> 所以说 XHTML 1.1 有点脱离现实，而你不想把文档以 XML 格式发送给那些能够理解 XML 的浏览器，则是因为 XML 的错误处理模型。XML 的语法，无论是属性小写，元素小写，还是始终要给属性值加引号，这些都没有问题，都很好，事实上我也喜欢这样做，但 XML 的错误处理模型却是这样的：解析器如果遇到错误，停止解析。规范里就是这么写的。如果你把 XHTML 1.1 标记为 XML 文档类型，假设你用 Firefox 打开这个文档，而文档中有一个和号（&amp;）没有正确编码，就算整个页面中就这一处错误，你看到的也将是黄屏，浏览器死掉了。Firefox 会说：“没戏了，页面中有一个错误，你看不到这个网页了。”根据 XML 规范，这样处理是正确的，对 Firefox 而言，遇到错误就停止解析，并且不呈现其他任何内容是严格按照 XML 规范做的。因为它不是 HTML，HTML 根本就没有错误处理模型，但根据 XML 规范，这样做没错。

So that’s another reason why you’d not want to serve your documents as XML. And then the next iteration was XHTML 2, and you’ll notice there’s no date next to that because it never actually got finished.

> 这就是为什么你不会把文档标记为 XML 的另一个原因。接下来，新的版本是 XHTML 2，大家注意后面没有日期，因为这个规范并没有完成。

Now, XHTML 2, I want to be very clear on this, is actually a really, really nice specification, a really good specification …from a theoretical point of view. I mean the people building the spec were very, very smart people. Actually the main guy leading the spec was Stephen Pemberton, who is a resident of these parts, an incredibly smart guy, and it’s a fantastic specification and it would be a wonderful format if everyone agreed to use it but it’s just not that practical.

> 现在就说说 XHTML 2，我很愿意把问题说清楚，XHTML 2 实际上真是一个非常非常好的规范，确实非常好……从理论的角度来说。我的意思是说，制定这个规范的人都是非常非常有头脑的。直说吧，领导制定这个规范的家伙是斯蒂芬·彭伯顿（Stephen Pemberton），他应该是本地人，是一个聪明过人的家伙。规范本身也很了不起，如果所有人都同意使用的话，也一定是一个非常好的格式。只不过，还不够实际。

For one thing, it still uses the XML error handling model, you’re supposed to serve your documents as XML, forget about it: we’re not going to do that. And two: it was deliberately going to break backwards compatibility with existing versions of HTML. At one point they were talking about deprecating the img element, which seems kind of crazy to people working on the web every day, but, you know, they had good theoretical reasons for doing this, that the object element might be a better thing to use.

> 首先，XHTML 2 仍然使用 XML 错误处理模型，你必须保证以 XML 文档类型发送文档；这一点不言自明：没人愿意这样做。其次，XHTML 2 有意不再向后兼容已有的 HTML 的各个版本。他们甚至曾经讨论过废除 img 元素，这对每天都在做 Web 开发的人来说确实有点疯了的味道。但我们知道，他们之所以这样做，理论上确实有充足的理由——使用 object 元素可能会更好。

So XHTML 2, despite the fact that it was a great format in theory, never took off in practice, and it was never going to take off in practice because authors like you and me were never going to get behind something like that, that breaks backwards compatibility, and neither were browser makers. Browser makers are committed to maintaining backwards compatibility.

> 因此，无论 XHTML 2 在理论上是多么完美的一种格式，但却从未有机会付诸实践。而之所以难以将其付诸实践，就是因为像你我这样的开发人员永远不会支持它，它不向后兼容。同样，浏览器厂商也不会，浏览器厂商必须要保证向后兼容。

And there’s one simple reason why XHTML 1.1 is really not that widely used as XML, and why XHTML 2 never took off, and it’s down to a design principle, and that design principle is Postel’s Law. You’ve got to:

> 为什么 XHTML 1.1 没有像 XML 那样得到真正广泛地应用，为什么 XHTML 2 从未落到实处？因为它违反了一条设计原理，这条设计原理就是著名的伯斯塔尔法则（Postel’s Law）。大家都知道：

Be conservative in what you send; be liberal in what you accept.

> 发送时要保守；接收时要开放。

Now be liberal in what you accept, that’s what the web is built on. People making web browsers have to be liberal in what they accept because they are given some pretty crappy stuff to accept, right? A lot of documents on the web are not pretty, but that’s the way the web is. The web has kind of evolved in a very messy way, but it’s a beautiful mess. There’s a lot of badly-formed documents out there and it would be great if everyone was writing proper XML and everything was well formed, but that’s not the reality. The reality is Postel’s Law.

> 没错，接收的时候要开放，而这也正是 Web 得以构建的基础。开发浏览器的人必须敞开胸怀，接收所有发送给浏览器的东西，因为它们过去一直都在接收那些不够标准的东西，对不对？Web 上的很多文档都不规范，但那正是 Web 发展的动力。从某种角度讲，Web 走的正是一条混沌发展之路，虽然混沌，但却非常美丽诱人。在 Web 上，格式不规范的文档随处可见，但那又怎样呢？如果所有人都能够写出精准的 XML，所有文档的格式都十分正确，那当然好了。可是，那不现实。现实是伯斯塔尔法则。

So as professionals we try to be conservative in what we send, we try to use best practices, we try to make sure our documents are well-formed, but from a browser’s perspective, they must be liberal in what they accept.

> 作为专业人士，在发送文档的时候，我们会尽量保守一些，尽量采用最佳实践，尽量确保文档格式良好。但从浏览器的角度说，它们必须以开放的姿态去接收任何文档。

And if you think about the error handling model of XML, when it’s applied to XHTML 1.1 and XHTML 2, that error handling model is a draconian error handling model. It’s definitely not being liberal in what it accepts, it’s quite the opposite to say when you encounter a single error stop parsing; that’s the opposite of the Robustness Principle.

> 有人可能会说 XML 有错误处理模型，XHTML 1.1 和 XHTML 2 都使用该模型，但那个错误处理模型太苛刻了。它绝对不符合接收时开放这个法则，遇到一个错误就停止解析怎么能叫开放呢？我们只能说它与健壮性法则（也就是伯斯塔尔法则）是对立的。

## HTML5

So we get to HTML5, which didn’t come directly from the W3C. What happened was, there hadn’t been an HTML working group since the end of the twentieth century, some people at the W3C kind of think “Maybe there’s still life in HTML, if we just extended it a bit more. Instead of concentrating all our efforts on XHTML we could improve the forms in HTML, we could make HTML a bit more application-like, and just evolve it a bit more.”

> 之后，就到了 HTML5，但 HTML5 并不是由 W3C 直接制定的。故事的经过是这样的，到 20 世纪末的时候，还没有 HTML 工作组，W3C 内部的一些人就开始琢磨了，“HTML 也许还可以更长寿一点，只要我们对它稍加扩展就行了。只要把我们放在 XHTML 上的时间和精力拿出一部分来，就可以提升一下 HTML 中的表单，可以让 HTML 更接近编程语言，就可以让它更上一层楼。”

So there was a workshop in 2004 of W3C members, and Ian Hickson, who was working at Opera at the time, he put forward this proposal to extend HTML, to do some work on HTML. It paralleled XHTML 2, but to continue working on HTML, to expand it a bit more. And they had a vote and the W3C voted “No”, that HTML was dead and XHTML 2 was the future. So these browser makers, Opera, Apple, a few others said “That’s fine, we’re just going to go over here and we’re going to work on this stuff by ourselves, outside the W3C”. So they formed the Web Hypertext Applications Technology Working Group, WHATWG—it’s a good thing they called themselves a working group rather than a task force.

> 于是，在 2004 年 W3C 成员内部的一次研讨会上，当时 Opera 公司的代表伊恩·希克森（Ian Hickson）提出了一个扩展和改进 HTML 的建议。他建议新任务组可以跟 XHTML 2 并行，但是在已有 HTML 的基础上开展工作，目标是对 HTML 进行扩展。W3C 投票表决的结果是——“反对”，因为 HTML 已经死了，XHTML 2 才是未来的方向。然后，Opera、Apple 等浏览器厂商，以及其他一些成员说：“那好吧，不指望他们了，我们自已一样可以做这件事，我们脱离 W3C。”他们成立了 Web Hypertext Applications Technology Working Group（Web 超文本应用技术工作组，WHATWG）——可巧的是，他们自称工作组，而不是特别小组（task force），这就为 HTML5 将来的命运埋下了伏笔。

What they decided to do was, completely outside the W3C, continue working on HTML and throwing in some new stuff, and because they’re browser makers, not only are they coming up with this stuff, but they’re also shipping it. They’re coming up with good ideas and putting it into browsers.

> WHATWG 决定完全脱离 W3C，在 HTML 的基础上开展工作，向其中添加一些新东西。这个工作组的成员里有浏览器厂商，因此他们不仅可以说加就加，而且还能够一一实现。结果，大家不断提出一些好点子，并且逐一做到了浏览器中。

And things move pretty fast. They start getting stuff done. Meanwhile over at W3C with XHTML 2, nothing much is really happening. In terms of actual implementations, there really isn’t much is happening.

> WHATWG 的工作效率很高，不久就初见成效。在此期间，W3C 的 XHTML 2 没有什么实质性的进展。特别是，如果从实现的角度来说，用原地踏步形容似乎也不为过。

So then an interesting thing happens, which was in a blog post in 2006, Tim Berners-Lee said “You know what? We were wrong. We were actually wrong to expect the whole web to turn to XML overnight, that was pretty unrealistic of us, and yeah, we probably should re-charter the HTML working group”. So that’s exactly what happened. The W3C started up an HTML5 working group in 2007. And the first question they had of course was “Well, do we start from scratch? Or do we take as our basis all this work that’s been done since 2004 over at this other group called WHATWG?” And that was a no-brainer, of course they were going to take the existing work and they should build on that, so they had a vote and they agreed “Yeah, we’re going to build on what the WHATWG are doing”. So now they need to work together with the WHATWG.

> 结果，一件有意思的事情发生了。那是在 2006 年，蒂姆·伯纳斯-李写了一篇博客，说：“你们知道吗？我们错了。我们错在企图一夜之间就让 Web 跨入 XML 时代，我们的想法太不切实际了，是的，也许我们应该重新组建 HTML 工作组了。”善哉斯言，后来的故事情节果真就是这样发展的。W3C 在 2007 年组建了 HTML5 工作组。这个工作组面临的第一个问题，毫无疑问就是“我们是从头开始做起呢，还是在 2004 年成立的那个叫 WHATWG 的工作组既有成果的基础上开始工作呢？”答案是显而易见的，他们当然希望从已经取得的成果着手，以之为基础展开工作。于是他们又投了一次票，同意“在 WHATWG 工作成果的基础上继续开展工作”。好了，这下他们要跟 WHATWG 并肩战斗了。

Second question is how to make that smoother; who should be the editor at the W3C? Should we have the same editor that they have over at the WHATWG, which is Ian Hickson who is these days working with Google. And they had a vote and said “Yeah, actually it would make things better if Ian Hickson was the editor of the HTML5 spec at the W3C as well as being the editor of the spec over at WHATWG.”

> 第二个问题就是如何理顺两个工作组之间的关系。W3C 这个工作组的编辑应该由谁担任？是不是还让 WHATWG 的编辑，也就是现在 Google 的伊恩·希克森来兼任？于是他们又投了一次票，赞成“让伊恩·希克森担任 W3C HTML5 规范的编辑，同时兼任 WHATWG 的编辑，更有助于新工作组开展工作。”

So they voted on that. And that’s kind of the situation today. So it is one format, but it lives in two places. You’ve got the specification listed on the WHATWG site and it’s also listed on the W3C site.

> 这就是他们投票的结果，也就是我们今天看到的局面：一种格式，两个版本。WHATWG 的网站上有这个规范，而 W3C 的站点上同样也有一份。

It’s a little bit confusing if you’re coming to it cold: “Which one is the real spec?” Well, they are both the same …kind of. Actually, the specifications will diverge in the future. They have started to diverge slightly. The idea is that the W3C is working on nailing down a specific specification that will go to last call, and that will become a working draft, and it will be set in stone.

> 如果你不了解内情，很可能会产生这样的疑问：“哪个版本才是真正的规范？”当然，这两个版本内容是一样的……基本上相同。实际上，这两个版本将来还会分道扬镳。现在已经有了分道扬镳的迹象了。我的意思是说，W3C 最终要制定一个具体的规范，这个规范会成为一个工作草案，定格在某个历史时刻。

Whereas at the WHATWG they go for a constant iteration. So even if it is currently called HTML5, it’s actually not the greatest term for what the WHATWG is working on. It’s better to think of this as just plain HTML or web technologies, ‘cause that’s the idea there. But it’s definitely a confusing situation that there are these two groups working on what is basically the same specification. It can be quite confusing.

> 而 WHATWG 呢，他们还在不断地迭代。即使目前我们说的 HTML5，也不能完全涵盖 WHATWG 正在从事的工作。最准确的理解是他们正在开发一项简单的 HTML 或 Web 技术，因为这才是他们工作的核心目标。然而，同时存在两个这样的工作组，这两个工作组同时开发一个基本相同的规范，这无论如何也容易让人产生误解。误解就可能造成麻烦。

Then there is the processes behind the two groups, because they are quite different, philosophically speaking. The way that things work at the WHATWG is essentially a dictatorship. You’ve got Ian Hickson as the editor. He will listen to all sides, everyone states their arguments and then he does what he thinks is the right thing to do.

> 其实这两个工作组背后各自有各自的流程，因为它们的理念完全不同。在 WHATWG，可以说是一种独裁的工作机制。我刚才说了，伊恩·希克森是编辑。他会听取各方意见，在所有成员各抒己见，充分陈述自己的观点之后，他批准自己认为正确的意见。

At the W3C it’s the opposite. It’s a democracy. Everyone gets a say and everyone gets a vote. And it’s the vote that matters, the vote that decides. Now on the face of it, the WHATWG way of doing things sounds horrible. It sounds really bad. It’s like “That’s not a way to run any kind of project!”

> W3C 则截然相反，可以说是一种民主的工作机制。所有成员都可以发表意见，而且每个人都有投票表决的权利。这个流程的关键在于投票表决。从表面上看，WHATWG 的工作机制让人不好接受。岂止是不好接受，简直是历史的倒退。相信谁都会认为“运作任何项目都不能采取这种方式！”

And the W3C way sounds great. Sounds very egalitarian. In practice however, the WHATWG way works pretty darn well. And I think it works well because of Ian Hickson. He is actually a really, really good editor. He is almost robotic in his ability to listen to arguments dispassionately.

> W3C 的工作机制听起来让人很舒服。至少体现了人人平等嘛。但在实践中，WHATWG 的工作机制运行得非常非常好。我认为之所以会这样，主要归功于伊恩·希克森。他的的确确是一个非常称职的编辑。他在听取各方意见时，始终可以做到丝毫不带个人感情色彩。

The W3C way, which is very fair in principle, actually can get bogged down quite quickly in process and procedure, and it takes a long time to get stuff done. So what works best in a way, I think, is to have a mixture of the two. So the fact that these two bodies are working on the same spec, I think, they kind of complement each other quite well.

> 从原理上讲，W3C 的工作机制很公平，而实际上却非常容易在某些流程或环节上卡壳，造成工作停滞不前，一件事情要达成决议往往需要花费很长时间。那到底哪种工作机制最好呢？我认为，最好的工作机制是将二者结合起来。而事实也是两个规范制定主体在共同制定一份相同的规范，我想，这倒是非常有利于两种工作机制相互取长补短。

One of the reasons why they can work together is because of the design of HTML5. It’s because they have thought from the start what they are trying to achieve. So as well as there being the specification itself, that lives in a document on the W3C site—this is the specification for HTML5 language—there is another document on the W3C site, and that is HTML design principles. And one of the editors of this document is here in this room with us today, Anne Van Kesteren. So if you have any questions about this document, you can ask Anne.

> 两个工作组之所以能够同心同德，主要原因是 HTML5 的设计思想。因为他们从一开始就确定了设计 HTML5 所要坚持的原则。结果，我们不仅看到了一份规范，也就是 W3C 站点上公布的那份文档，即 HTML5 语言规范，还在 W3C 站点上看到了另一份文档，也就是 HTML 设计原理。而这份文档的一位编辑今天也来到了我们大会的现场，他就是安妮·奇泰丝（Anne Van Kesteren）。如果大家对这份文档有问题，可以请教安妮。

It’s an excellent document, it’s really good. And essentially what it is, is: You’ve got the W3C and the WHATWG trying to work together. And it’s like the odd couple, right? How will they ever get on? Well, this document kind of enshrines what they are working on, what they can both agree on.

> 这份文档非常好，真的非常出色。这份文档，可以说见证了 W3C 与 WHATWG 同心协力共谋发展的历程。难道你们不觉得他们像是一对欢喜冤家吗？那他们还怎么同心同德呢？这份文档忠实地记录了他们一道做了什么，他们共同拥护什么。

I want to talk through those things. Because if they can all agree on what’s in this document, then I think, HTML5 will be a great specification, and they have agreed that this is what they’re working towards. So you can see that the watchwords are compatibility, utility, interoperability. So for all the differences between the WHATWG and the W3C—and there are plenty of differences—they also have this stuff in common. And that’s the most important thing. That they have common ground and that they have enshrined that common ground into a designs principles document.

> 接下来，我想要讲的就是这份文档。因为，既然他们能就这份文档达成共识，那么我相信，HTML5 必将是一个伟大的规范，而他们已经认可这就是他们的共同行动纲领。为此，你才会看到诸如兼容性、实用性、互用性之类的概念。即便 W3C 与 WHATWG 之间再有多大的分歧——确实相当多——至少他们还有这份文档中记录的共识。这一点才是至关重要的。正因为他们有了共识，才有了这份基于共识描述设计原理的文档。

## Avoid needless complexity

I’d like to show you some of the design principles that you can find in this document. Here is one, very simple: avoid needless complexity. Seems fairly straightforward. I’ll illustrate it with an example.

> 下面我就给大家介绍一些这份文档中记载的设计原理。第一个，非常简单：避免不必要的复杂性。好像很简单吧。我用一个例子来说明。

Let’s suppose I’m writing an HTML 4.01 specification. I open up my document and I type the doctype. Has anyone got that doctype memorised? Okay, no, I guess not. It’s possible… I mean, you’re a geeky bunch. Somebody here might have memorised it. This is the html 4.01 doctype

> 假设我使用 HTML 4.01 规范，我打开文档，输入 doctype。这里有人记得 HTML 4.01 的 doctype 吗？好，没有，我猜没有。除非……我的意思是说，你是傻冒。现场恐怕真有人背过，这就是 HTML 4.01 的 doctype：

`<!DOCTYPE html PUBLIC "-//W3C/DTD HTML 4.01//EN""http://www.w3.org/TR/html4/strict.dtd">`

I don’t keep that stuff memorised, because this is why we have text snippets, that’s why we have google, why we have templates.

> 我不记这个两行代码，不然还要记事本、要 Google、要模板有什么用呢？

What about if I’m writing it for XHTML 1.0, which I have been writing for ten years now. Anyone got the doctype for that? It’s kind of an equally long string:

> 要是我使用 XHTML 1.0 呢，这个规范我都已经用了 10 年了。有谁记得住这个 doctype 吗？没错，它的长度跟 HTML 4.01 的差不太多：

`<!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

They are basically the same. This document is XHTML 1. And that’s essentially what it’s saying. So in HTML5, to omit needless complexity, the doctype is simply:

> 是不是，基本上相同。它要告诉浏览器的是：这个文档是 XHTML 1.0 的文档。那么在 HTML 5 中，省掉不必要的复杂性，doctype 就简化成了：

`<!DOCTYPE html>`

And that’s it. Now, even I can remember that one. I don’t need to keep a text snippet for that. I have to say when I first saw this doctype, that this was supposed the doctype for HTML, I was somewhat taken aback: “Shouldn’t the number five be in there somewhere, you know?” I thought: “What are they saying here? Are they saying this is it? This is the only version of HTML that’ll ever be, we’re going to get it right first time and there’ll never be a need for another version of HTML?” That seemed so arrogant. But that’s not what they’re saying at all. Instead what you have to understand is why doctypes exist in the first place. It’s not for browsers. Doctypes exist for validators. So the reason why I slap an XHTML 1.0 doctype on the top of my document is that when I feed it through a validator, the validator checks against that doctype.

> 仅此而已。好了，就连我也能过目不忘了。我用不着把这几个字符记在记事本里了。我得说，在我第一次看到这个 doctype 的时候——我当然以为这是一个 HTML 文档的 doctype——被它吓了一跳：“是不是还少一个数字 5 啊？”我心里想：“这个 doctype 想告诉浏览器什么呢？就说这个文档是 HTML 吗？难道这是有史以来唯一一个 HTML 版本吗，这件事我得首先搞清楚，HTML 今后永远不会再有新版本了吗？”好一副唯我独尊的架式！我错了，因为这个 doctype 并没有这个意思。为此，必须先搞清楚为什么文档一开头就要写 doctype。它不是写给浏览器看的。Doctype 是写给验证器看的。也就是说，我之所以要在文档一开头写那行 XHTML 1.0 的 doctype，是为了告诉验证器，让验证器按照该 doctype 来验证我的文档。

A browser doesn’t care. Let’s say I’m writing HTML 3.2. At top of my document I put the doctype for HTML 3.2. And then somewhere in my document I use an element that was first introduced in HTML 4.01. What’s the browser going to do? Is it going to not render that element, because it was introduced in a version of HTML later than the doctype has specified? No, of course not! It’s gonna render the element, because of Postel’s law, because of robustness. It’s got to be liberal in what it accepts. So browsers are not checking against any type of format, validators do, validators care. This is the reason why doctypes exist.

> 浏览器反倒无所谓了。假设我写的是 HTML 3.2 文档，文档开头写的是 HTML 3.2 的 doctype。而在文档中某个地方，我使用了 HTML 4.01 中才出现的一个元素。浏览器会怎么处理这种情况？它会因为这个元素出现在比 doctype 声明的 HTML 版本更晚的规范中，就不解释呈现该元素吗？不会，当然不会！它照样会解释呈现该元素，别忘了伯斯塔尔法则，别忘了健壮性。浏览器在接收的时候必须要开放。因此，它不会检查任何格式类型，而验证器会，验证器才关心格式类型。这才是存在 doctype 的真正原因。

And because one of the design principles of HTML5, it’s going to be backwards compatible and future compatible, that any future versions of HTML—and there will be an HTML6 and an HTML7, whatever—but they need to be backwards compatible with the current version of HTML, which is HTML5. Hence having a version number in your doctype doesn’t really make much sense, even to a validator.

> 而按照 HTML5 的另一个设计原理，它必须向前向后兼容，兼容未来的 HTML 版本——不管是 HTML6、HTML7，还是其他什么——都要与当前的 HTML 版本，HTML5，兼容。因此，把一个版本号放在 doctype 里面没有多大的意义，即使对验器证也一样。

Now, I say the doctypes aren’t for browsers; that’s mostly true. There is one instance where it matters to browsers what doctype you’re using, and you are probably all familiar with it. It’s not the reason why doctypes exist, it’s a hack that uses doctypes. And that’s when Microsoft were introducing CSS, getting ahead of the standard, they tried putting CSS into the browser, they had their own box model—in some ways a more intuitive box model than the standard box model—and then the standards come out, and the standards are using a different one. What could they do? They want to support the standards, but they also have to maintain backwards compatibility with the old way they were doing things. How can they tell if an author means I want to use standards or I want to use the old-fashion way?

> 刚才，我说 doctype 不是为浏览器写的，这样说大多数情况下没有问题。在有一种情况下，你使用的 doctype 会影响到浏览器，相信在座诸位也都知道。但在这种情况下，Doctype 并非真正用得其所，而只是为了达到某种特殊的目的才使用 doctype。当初微软在引入 CSS 的时候，走在了标准的前头，他们率先在浏览器中支持 CSS，也推出了自己的盒模型——后来标准发布了，但标准中使用了不一样的盒模型。他们怎么办？他们想支持标准，但也想向后兼容自己过去推出的编码方式。他们怎么知道网页作者想使用标准，还是想使用他们过去的方式？

So the trick they came up with is a very clever hack. It was to use the presence of a doctype, of a valid doctype as the trigger for standards mode rather than quirks mode. And that is very clever. And that’s generally what we do today, when we put a doctype on the document. We’re saying, “I want to use the standards mode,” but that’s not why doctypes were invented. That’s a hack that happens to use doctypes.

> 于是，他们想出了一个非常巧妙的主意。那就是利用 doctype，利用有效的 doctype 来触发标准模式，而不是兼容模型（quiks mode）。这个主意非常巧妙。我们今天也都是这样在做，在我们向文档中加入 doctype 时，就相当于声明了“我想使用标准模式”，但这并不是发明 doctype 的本意。这只是为了达到特殊的目的在利用 doctype。

The six million dollar question is, “Wait a minute, if I go ahead and slap doctype html on the top of the document, and I feed that to Internet Explorer, is it going to use standards mode or is it going to use quirks mode?”

> 下面我出一道有奖抢答题，听好：“一分钟后开始，如果你手快的话，第一个在文档前面写完 doctype html，然后我用 Internet Explorer 打开你的文档，会触发它的标准模式，还是会触发它的兼容模式？”

It turns out, this is the minimum number of characters necessary to trigger standards mode in Internet Explorer. I think that illustrates the kind of fundamental approach to HTML5: that it’s not about the theoretical benefits. It’s not about, “Oh, wouldn’t it be nice if authors had a nice short doctype that was easy to memorise?” Yeah, that would be nice, but if it doesn’t work in existing browsers, then forget about it. So there’s this great balance between something that’s theoretically a good idea—a nice short doctype—and practically a good idea, because it still triggers standards mode. And the doctype is a good example.

> 答案是，这是在 Internet Explorer 中触发标准模式的最少字符数目。我认为这也说明了 HTML5 规范的本质：它不追求理论上的完美。HTML5 所体现的不是“噢，给作者一个简短好记的 doctype 不好吗？”，没错，简短好记是很好，但如果这个好记的 doctype 无法适应现有的浏览器，还不如把它忘了更好。因此，这个平衡把握得非常好，不仅理论上看是个好主意——简短好记的 doctype，而且实践中同样也是个好主意——仍然可以触发标准模式。应该说，Doctype 是一个非常典型的例子。

And there’s other examples that are omitting needless complexity, avoiding needless complexity in the spec. For example, in previous versions of HTML, in HTML 4.01, suppose I want to specify the character encoding of my document. The ideal way is, you have the server send the character encoding in the heading, but you can also specify it at the document level:

> 还有一个例子，同样可以说明规范是如何省略不必要的复杂性，避免不必要的复杂性的。如果前面的文档使用的是 HTML 4.01，假设我要指定文档的字符编码。理想的方式，是通过服务器在头部信息中发送字符编码，不过也可以在文档这个级别上指定：

`<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`

Again, I wouldn’t memorise this. I’ve got better things to do with my brain cells, but this is how you specify it, that I want to be the document to be UTF-8. So this is how you do it in HTML 4.01. And in XHTML 1.0 you’ve got to do a bit more, because as well as the meta element itself you also have to declare it in the xml opening tag.

> 同样，我也不会把这行代码背下来。我还想省下自己的脑细胞去记点别的更有价值的东西呢。不过，如果我想指定文档使用 UTF-8 编码，只能添加这行代码。这是在 HTML 4.01 中需要这样做。要是你在 XHTML 1.0 指定同样的编码，就得多敲一下键盘，因为你还得声明 meta 元素位于一个开始的 XML 标签中。

`<?xml version="1.0" encoding="UTF-8" ?><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>`

In HTML5, it turns out that all you have to do is say:

> 在 HTML5 中，你要敲的字符只有：

`<meta charset="utf-8">`

Nice and short. And I can memorise that.

> 简短好记。我能背下来。

Once again, it turns out this works. Not only works in very modern browsers: this works today in all browsers. Because it turns out that when we were feeding these meta elements to browsers, they were parsing them like this: “Meta blah blah blah blah blah charset utf-8”. That’s essentially what a browser sees when it parses that string. And it has to, because of Postel’s Law, right?

> 同样，这样写也是有效的。它不仅适用于最新版本的浏览器，只要是今天还有人在用的浏览器都同样有效。为什么？因为在我们把这些 meta 元素输入浏览器时，浏览器会这样解释它：“元数据（meta）点点点点点，字符集（charset）utf-8。”这就是浏览器在解释那行字符串时真正看到的内容。它必须看到这些内容，根据就是伯斯塔尔法则，对不对？

I keep coming back to the Robustness Principle, but people get this wrong so browsers think “Okay, I think somebody is trying to specify a character set …oh yeah, utf-8”. That’s just getting codified into the spec. Now it’s okay to just leave out the blahs and just write meta charset=”utf-8”.

> 我多次提到健壮性原理，但总有人不理解。我们换一种说法，浏览器会想“好，我觉得作者是想要指定一个字符集……看，没错，utf-8。”这些都是规范里明文规定的。如今，不仅那个斜杠可以省了，而且总共只要写 meta charset=”utf-8″就行了。

There are some more examples of omitting needless complexity, avoiding needless complexity. But the needless complexity can be avoided without breaking in existing browsers. For example, in HTML5 if I’m linking off to a stylesheet by using a link element and I say rel=”stylesheet” and then I say type=”text/css”, well I’m kind of repeating myself. And it turns out for a browser, I’m repeating myself. A browser doesn’t need both things. A browser is perfectly fine saying rel=”stylesheet” because it’s going to guess that your serving up CSS. You don’t have to include the type attribute. You’ve already said it was a stylesheet; you don’t have to say it again. You could if you want; if you want to include the type attribute, go ahead.

> 关于省略不必要的复杂性，或者说避免不必要的复杂性的例子还有不少。但关键是既能避免不必要的复杂性，还不会妨碍在现有浏览器中使用。比如说，在 HTML5 中，如果我使用 link 元素链接到一个样式表，我说了 rel=”stylesheet”，然后再说 type=”text/css”，那就是重复自己了。对浏览器而言，我就是在重复自己。浏览器用不着同时看到这两个属性。浏览器只要看到 rel=”stylesheet”就够了，因为它可以猜出来你要链接的是一个 CSS 样式表。所以就不用再指定 type 属性了。你不是已经说了这是一个样式表了嘛；不用再说第二次了。当然，愿意的话，你可以再说；如果你想包含 type 属性，请便。

And likewise, if you’re using a script element and you say type=”text/javascript”, the browser kinda already knows that. What else would you be using on the web? If you want to use a different scripting language on the web, go for it. I don’t think any browsers will support you.

> 同样地，如果你使用了 script 元素，你说 type=”text/javascript”，浏览器差不多就知道是怎么回事了。对 Web 开发而言，你还使用其他的脚本语言吗？如果你真想用其他脚本语言，没人会阻拦你。但我要奉劝你一句，任何浏览器都不会支持你。

You can add a type attribute if you want. But you can leave it out and the browser is going to assume you’re using JavaScript. Avoiding. Needless. Complexity.

> 愿意的话，你可以添加一个 type 属性。不过，也可以什么都不写，浏览器自然会假设你在使用 JavaScript。避免-不必要的-复杂性。

## Support existing content

Support existing content. This is really important because a lot of people are thinking of HTML5 as new and shiny; that it’s all about what’s coming in the future, going to make the web better in the future. And it is, right? Obviously we have to think about the future in making the web a better place, but they have to think about the past. And remember a lot of people on the working group the W3C, these are browser makers so they very much have to think about supporting existing content. This is the watchword of anyone who has ever had to build a browser: you have to support existing content.

> 支持已有的内容。这一点非常重要，因为很多人都认为 HTML5 很新，很闪亮；它应该代表着未来发展的方向，应该把 Web 推向一个新的发展阶段。这就是 HTML5，对吗？显然，我们都会考虑让 Web 的未来发展得更好，但他们则必须考虑过去。别忘了 W3C 这个工作组中有很多人代表的是浏览器厂商，他们肯定是要考虑支持已有内容的。只要你想构建一款浏览器，就必须记住这个原则：必须支持已有的内容。

Let me show you an example of how HTML5 supports existing content.

> 下面我们就来看一个 HTML5 支持已有内容的例子。

Here we have four different ways of writing the same thing. There’s an img element and there’s a paragraph element with an attribute on it. The only difference is the syntax. You serve any one of these four pieces of code, pieces of markup, to a browser and the browser will serve it into the same DOM tree, no problem whatsoever. From a browser’s perspective, there are no differences between these four pieces of markup. And so in HTML5 you can go ahead and use any syntax you want.

> 这个例子展示了编写同样内容的四种不同方式。上面是一个 img 元素，下面是带一个属性的段落元素。四种写法唯一的不同点就是语法。把其中任何一段代码交给浏览器，浏览器都会生成相同的 DOM 树，没有任何问题。从浏览器的角度看，这四种写法没有区别。因而在 HTML5 中，你可以随意使用下列任何语法。

```html
<img src="foo" alt="bar"/>
<p class="foo">Hello world</p>

<img src="foo" alt="bar">
<p class="foo">Hello world

<IMG SRC="foo" ALT="bar">
<P class="foo">Hello world</P>

<img src=foo alt=bar>
<p class="foo">Hello world</p>
```

Now to us looking at this, we kind of look at this and go “No, no, no. One of those is right and three of those—something is fishy.” No, you should be quoting your attributes! Come on! We all quote our attributes. Uppercase elements? Didn’t we leave that behind ten years ago?

> 好了，看到这几段代码，恐怕有人会说“不对不对不对。其中只有一个是对的，另外三个——说不好。”不对，应该经属性值加引号！拜托，我们可是一直都给属性值加引号的！元素名大写对吗？这种做法 10 年不是就被抛弃了吗？

And so I kind of get a queasy feeling when I see that this is all now allowed in HTML5 because I have been writing XHTML 1.0 for ten years now and I have gotten pretty used to that coding style. But you have to understand, from a browser’s perspective, this is all really the same. It really doesn’t matter.

> 看到 HTML5 同时允许这些写法，我心里忍不住一阵阵想吐。我写了 10 年的 XHTML 1.0，已经非常适应严格的语法了。但你必须明白，站在浏览器的角度上，这些写法实际上都是一样的。确实没有什么问题。

Doesn’t make anyone else queazy? You look at this and think “Ooh, this is sloppy, this is bad?” Is it just me? Am I the only one?

> 还有谁也感到不舒服了吗？有谁看到这些之后想“噢，这不是乱写嘛，这样做不对”？只有我这样想吗？还有别人吗？

But they have to support existing content and existing content looks like this. Right? This is the way browsers already work because of Postel’s Law.

> 但是，HTML5 必须支持已经存在的内容，而已有的内容就是这个样子的。不是吗？根据伯斯塔尔法则，浏览器没有别的选择。

And some people said “This just will not do. We need some kind of trigger within the language to say the author knows what they are doing.” They want to use one particular syntax, like the XHTML syntax, for example, rather than a different syntax. And I can see why that’s what people want. But I disagree that it has to be in the language itself. Because what we are talking about here essentially is a coding style or a writing style rather than being syntactically correct. So what I think is needed for professionals like us is lint tools, because we have lint tools for other technologies we use.

> 有人可能会说“这样不行。我觉得语言本身应该提供一种开关，让作者能够表明自己想做什么。”比如说，想使用某种特定的语法，像 XHTML，而不是使用其他语法。我理解这些人的想法。但我不赞成在语言里设置开关。因为我们讨论的只是编码风格或者写作风格，跟哪种语法正确无关。对于像我们这样的专业人士，我认为可以使用 lint 工具（一种软件质量保证工具，或者说是一种更加严格的编译器。它不仅可以象普通编译器那样检查出一般的语法错误，还可以检查出那些虽然完全合乎语法要求，但很可能是潜在的、不易发现的错误），对其他技术我们不是也在使用 lint 工具嘛。

For example, with JavaScript. JavaScript is another example of a kind of messy, sloppy language that is powerful because it is messy and sloppy and there are many different ways of writing it. In javascript you’re supposed to put a semi-colon at the end of every statement but you don’t have to, because javascript will perform semi-colon insertion …which does sound quite painful.

> 比如说对 JavaScript 使用 lint 工具。JavaScript 同样也是比较混乱、不严谨的例子，但它非常强大，原因恰恰是它混乱、不严谨，而且有很多不同的编码方式。在 JavaScript，你可以在每条语句末尾加上分号，但不是必需的，因为 JavaScript 会自动插入分号……是不是听起来有点不好接受？

So we have tools like JSlint: jslint.org from Douglas Crockford, where it says right there on the page “JSlint will hurt your feelings.” But it’s a really good tool because you can make perfectly good javascript and run it through JSlint and it will say “Okay, this JavaScript is valid but your doing it wrong. This coding style: I don’t like it. I disagree with it. It’s not good.” That’s actually really handy when your working in a team because you can all have one coding style you all agree on.

> 正因为如此，才有了像 JSlint 这样的工具，在道格拉斯·克劳克福德（Douglas Crockford）的网站 jslint.org 上面。有个网页上写着“JSlint 可能会伤害你的感情。”但这确实是个非常棒的工具，它可以把 JavaScript 代码变得完美无瑕。如果你通过 JSlint 运行 JavaScript，它会告诉你“好，你的 JavaScript 代码有效，但写法不妥。你这种编码风格啊，我不喜欢。不赞成你这样写。这样写不好。”特别是对团队，对于要使用统一的编码风格的团队，JSlint 是非常方便的工具。

I think that if your working in a team, even if your working alone, you need to settle on one syntax. No one syntax is superior to another in terms of browsers parsing it, but I do think that as professionals, we say “This is my coding style.” But I don’t think that needs to be in the language. I think that lint tools helps all that. There are now lint tools. If you go to htmllint.com, you can run your HTML5 documents through it and it will check for things like, have you quoted your attributes, are the elements lowercase, or you can click checkboxes to say what you want.

> 我个人认为，不仅对团队来说，就算是你自己写代码，也要坚持一种语法风格。从浏览器解析的角度讲，不存在哪种语法比另一种更好的问题，但我认为，作为专业人士，我们必须能够自信地讲“这就是我的编码风格。”然而，我不认为语言里应该内置这种开关。你可以使用 lint 工具来统一编码风格。现在就来说说 lint 工具。大家可以登录 htmllint.com，在其中运行你的 HTML5 文档，它会帮你检查属性值是否加了引号，元素是否小写，你还可以通过勾选复选框来设置其他检查项。

So it’s not a return to sloppy mark up if you don’t want it to be. And as I said, they have to allow this in HTML5 because this is what browsers allow. And it all comes back to Postel’s Law. We keep coming back to Postel’s Law.

> 但这不意味着拒绝粗心大意的标记，做不做清理完全取决于你自己。我说过，因为浏览器必须支持已有的内容，HTML5 自然也不能例外。归根结底还是伯斯塔尔法则。我们始终离不开伯斯塔尔法则。

## Solve real problems

Another design principle in HTML5 is to solve real problems. It seems obvious and yet there are plenty of formats and specifications out there that, in my opinion, are solving theoretical problems rather than real problems. This is all about solving problems people have today, solving the pain points.

> HTML5 的另一个设计原理是解决现实的问题。显而易见的是，解决各种问题的格式和规范已经比比皆是了，但是在我看来，那些格式和规范要解决的都是理论问题，而非现实问题。这条设计原理才是真正要解决今天的人们所面临的现实问题、令人头疼的问题。

I’ll give you an example. Here’s one I think you might be able to relate to. Let’s say in HTML 4 or XHTML 1, I’ve got this piece on my page, a block of content, and I want the whole thing to be clickable, right? But it’s got a headline and a paragraph and maybe its got an image in there too. Now I want the whole thing to be clickable so I need three link elements. So I open up my headline, my h2 for example, and then I’ve got my text and thats what I wrap in the a element. And then I open up the paragraph and then I open up another link, and then I wrap that and then I put the text in that…

> 下面我来举个例子。相信这个例子有不少人都遇到过。假设我使用 HTML 4 或 XHTML 1，页面中已经有了一块内容，我想给整块内容加个链接，怎么办？问题是这块内容里包含一个标题，一个段落，也许还有一张图片。如果我想给它们全部都可以点击，必须使用 3 个链接元素。于是，我得先把光标放在标题（比如说 h2 元素）中，写一个链接标签，然后再选中所有要包含到链接里面来的文本。接着，再把光标放在段落里，写一个链接标签，然后把段落中的文本放在链接里……

```html
<h2><a href="/path/to/resource">Headline text</a></h2>
<p><a href="/path/to/resource">Paragraph text.</a></p>
```

In HTML5, all I simply do is wrap the whole thing in an a element.

> 在 HTML5 中，我只要简单地把所有内容都包装在一个链接元素中就行了。

```html
<h2><a href="/path/to/resource">Headline text</a></h2>
<p><a href="/path/to/resource">Paragraph text.</a></p>
```

Yes, it’s a load of block elements but yet I can wrap them in an a element. This is great. I know this is great because I have been in this situation, where I’ve needed do this. And I for one welcome our new HTML5 overlords.

> 在 HTML5 中，我只要简单地把所有内容都包装在一个链接元素中就行了。

It’s solving a real world problem. I bet you have come across this problem before as well.

Now here is the great thing about it. This isn’t something that browsers now have to go out and start supporting. This is something which exists in browsers already because people were doing this kind of stuff already, even though it wasn’t legal yet. So essentially all that HTML5 is saying is “What you have been doing for years? That’s actually allowed now.”

> 那这到底解决的是什么问题呢？浏览器不必因此重新写代码来支持这种写法。这种写法其实早就已经存在于浏览器中了，因为早就有人这样写了，当然以前这样写是不合乎规范的。所以，说 HTML5 解决现实的问题，其本质还是“你都这样写了很多年了吧？现在我们把标准改了，允许你这样写了。”

## Pave the cowpaths

This design principal is probably the most buzzwordy: pave the cowpaths. I don’t know if you have heard that in a business meeting, “run it up the flag pole, pave the cowpaths.” But it is actually a very good design principal because essentially what it is saying is, when you are deciding what to tackle—where are the pain points—look at where people are already finding hacks to patch these problems today. That is essentially where you should concentrate your efforts. Look at where people are already coming up with solutions.

> 在所有设计原理中，这一条恐怕是最响亮的了——求真务实。不知道大家有没有在公司里开会时听到过这种口号：“开拓进取，求真务实。”实际上，除了作为企业的口号，它还是一条非常重要的设计原理，因为求真务实对于 HTML 的含义是：在解决那些令人头痛的问题之前，先看看人们为应对这些问题都想出了哪些办法。集中精力去理解这些“民间的”解决方案才是当务之急。

A good example of paving the cowpaths are the new semantic elements in HTML5. And there are not that many: it’s not infinitely extensible, which I think is a good thing. It’s basically a handful. But they’re good. You’ve got header, footer, section, article …and a lot of these will be familiar to you. I mean the names of these will be familiar to you already even if you’re not using HTML5 because you will have been using class names such as class=”header” or “heading” or “head” or class=”footer” or “foot”. Or IDs, if your saying id=”header”, id=”footer”. These are already fairly familiar things.

> HTML5 中新的语义元素就是遵循求真务实原理的反映。新增的元素不算多，谈不上无限的扩展性，但却不失为一件好事。尽管数量屈指可数，但意义却非同一般。这些新元素涉及头部（header）、脚部（footer）、分区（section）、文章（article）……，相信大家都不会觉得陌生。我的意思是说，即便你不使用 HTML5，也应该熟悉这些称呼，这些都是你曾经使用过的类名，比如 class=”header”/“head”/“heading”，或 class=”footer”/“foot”。当然，也可能是 ID，id=”header”，id=”footer”。这些不都是我们已经司空见惯了的嘛。

So, for example, today you might be writing a document like this.

> 好，举个例子吧，假设你今天写了下面这个文档。

```html
<body>

<div id="header">...</div>

<div id="navigation">...</div>

<div id="main">...</div>

<div id="sidebar">...</div>

<div id="footer">...</div>

</body>
```

You’ve got a div id=”header”. You’ve got a div id=”navigation”. Stuff like this. In HTML5 you’ll be able to swap out these elements. And when talking about these new elements, this is the way it is often presented: “Oh look, it’s great: you can swap out these divs with ids for these new HTML5 elements.”

> 这里有一个 div 使用了 id=”header”，另一个 div 使用了 id=”navigation”，……。怎么样，都轻车熟路了吧？在 HTML5 中，这些元素都可以换掉。说起新增的语义元素，它们价值的一方面可以这样来体现：“嘿，看啊，这样多好，用 HTML5 新增的元素可以把这些 div 都替换掉。”

```html
<body>

<header>...</header>

<nav>...</nav>

<div id="main">...</div>

<aside>...</aside>

<footer>...</footer>

</body>
```

And that’s true: you can. These elements work at the document level like this and that’s good. But if that were the only reason these elements were introduced, then that would be kind of a waste of effort.

> 当然了，你可以这样做。在文档级别上使用这些元素没有问题。但是，假如新增这些元素的目的仅仅是为了取代原来的 div，那就真有点多此一举了。

While you can use these elements in the document level as a replacement for IDs, it’s much more useful, in my opinion, to think of them as a replacement for classes.

While you can use these new elements this way, at the document level, as a replacement for IDs, it’s much more useful in my opinion to think of them as and replacement for classes, because the real power comes in that you can use these things multiple times per page, not once per page. Yes, you’ve got a header for your document and you have a footer for your document; you also have a header and a footer for each section within your document. And each section might have another section within it and that could have a header and that could have a footer, right?

> 虽然在这个文档中，我们用这些新元素来替换的是 ID，但在我个人看来，将它们作为类的替代品更有价值。为什么这么说呢？因为这些元素在一个页面中不止可以使用一次，而是可以使用多次。没错，你可以为文档添加一个头部（header），再添加一个脚部（footer）；但文档中的每个分区（section）照样也都可以有一个头部和一个脚部。而每个分区里还可以嵌套另一个分区，被嵌套的分区仍然可以有自己的头部和脚部，是这样吧？

It’s these four elements: section, article, aside and nav, that are the really powerful ones because they introduce a whole new content model that hasn’t existed in any previous version of HTML; this idea of sectioning content. Up ‘till now we’ve used divs to kind of group things together, but divs are just like any other element, they don’t have any extra semantic meaning. While section, article, aside and nav are essentially saying “This is like a document within a document.” Anything that’s inside one of these elements will have its own outline, its own heading, its own footer.

> 这四个新元素：section、article、aside 和 nav，之所以说它们强大，原因在于它们代表了一种新的内容模型，一种 HTML 中前所未有的内容模型——给内容分区。迄今为止，我们一直都在用 div 来组织页面中的内容，但与其他类似的元素一样，div 本身并没有语义。但 section、article、aside 和 nav 实际上是在明确地告诉你——这一块就像文档中的另一个文档一样。位于这些元素中的任何内容，都可以拥有自己的概要、标题，自己的脚部。

The way to think about it is basically section, the most generic one, is thematically related content. And article is a specialised kind of section. Aside is a specialised kind of section. Nav is a specialised kind of section.

> 其中最为通用的 section，可以说是与内容最相关的一个。而 article 则是一种特殊的 section。Aside 呢，是一种特殊的 section。最后，Nav 也是一种特殊的 section。

So, whereas today I might have markup that looks like this, where I’m using classes to delineate the different parts of a page—using divs, right?

> 好，即便是现在，你照样可以使用 div 和类来描述页面中不同的部分，就像下面这样：

```html
<div class="item">
<h2>...</h2>
<div class="meta">...</div>
<div class="content">...</div>
<div class="links">...</div>
</div>
```

There might be the meta content about who wrote this piece of content. We have some links at the bottom, stuff like that. With HTML5, I basically can say that this is like a document in itself, by using sectioning content, by using something like section or article or aside, I can say “This kinda stands alone.” And I can use header and use footer.

> 其中包含可能是有关内容作者的元数据，而下面会给出一些链接，差不多就这样。在 HTML5 中，我完全可以说这块内容就是一个文档，通过对内容分区，使用 section 或 article 或 aside，我可以说“这一块完全是可以独立存在的。”因此，我当然可以使用 header 和 footer。

```html
<section class="item">
<header><h1>...</h1></header>
<footer class="meta">...</footer>
<div class="content">...</div>
<nav class="links">...</nav>
</section>
```

Notice also that the footer doesn’t necessarily have to be at the bottom, right? The important thing about header, footer, aside, nav, is the semantics. It’s nothing to do with positioning. We think of the word footer and we think “Oh, that comes at the bottom.” We think of aside as a side bar. But if you look at the specification, it’s all about the content. So the content that you put in the footer could be things like the byline, who wrote this, and that’s the element that you use. It doesn’t say “Must come at the bottom of the document or the bottom of the section”.

> 请注意，即便是 footer，也不一定非要出现在下面，不是吗？这几个元素，header、footer、aside、nav，最重要的是它们的语义；跟位置没有关系。一想到 footer 这个词，我们总会不由自主地想，“噢，应该放在下面。”同样，我们把 aside 想象成一个侧边栏。可是，如果你看一看规范，就会发现这些元素只跟内容有关。因此，放在 footer 中的内容也可以是署名，文章作者之类的，它只是你使用的一个元素。这个元素并没有说“必须把我放在文档或者分区的下面。”

The really interesting thing here, though, is not that I’ve swapped out some divs with classes for some new elements, but the fact that I swapped out an H2 element for an H1. Shock, horror! What if I already have an H1 on the page?! The Google siren will go off and my SEO will be terrible and the world will end.

You can have multiple H1s in a document. This is not something new to HTML5. You have always been able to have multiple H1s in a document—shock, horror. I’ve met working professionals on the web who have thought for years that it was in the specification that you could only have one H1 in a document. There has been a lot of SEO snake oil peddled on this subject. SEO has a lot of dogma attached to it. And by dogma, I mean belief without data. And the dogma has traditionally been like “Oh, if you ever put more than one H1 in the page you will die.” In HTML5, every time you open a new piece of sectioning content, section, article, aside, nav, whatever, you can begin with H1 again, rather than having to stick to whatever level you were at; H2, H3, whatever it was.

> 这里，请注意，最重要的还不是我用几个新元素替换了原来的 div 加类，而是我把原来的 H2 换成了 H1——震撼吧，我看到有人发抖了。我碰到过不少职业的 Web 开发人员，多年来他们一直认为规范里说一个文档中只能有一个 H1。还有一些自诩为万能的 SEO 秘诀同样说要这样。很多 SEO 的技巧其实是很教条的。所谓教条，意思就是不相信数据。过去，这种教条表现为“不行，页面中包含两个以上的 H1，你就会死掉的。”在 HTML5 中，只要你建立一个新的内容块，不管用 section、article、aside、nav，还是别的元素，都可以在其中使用 H1，而不必担心这个块里的标题在整个页面中应该排在什么级别；H2、H3，都没有问题。

This is incredibly powerful. This could really revolutionise content management. The fact that now, you can literally think about your chunks of content as standalone content that can be taken out of context. Now, depending on the context within it finds itself on the page, this H1 would have the role of being an H2 or H3, depending on where it finds itself within the document. It can be a little weird to get your head around at first, but I actually think this is possibly the most powerful part of the new semantic elements in HTML5; that they’re literally standalone elements, and we get this whole new level of headings in there.

> 这个变化太厉害了。想一想吧，这个变化对内容管理是革命性的。因为现在，你可以把每个内容分区想象一个独立的、能够从页面中拿出来的部分。此时，根据上下文不同，这个独立部分中的 H1，在整个页面中没准会扮演 H2 或 H3 的角色——取决于它在文档中出现的位置。面对这个突如其来的变化，也许有人的脑子会暂时转不过弯来。不要紧，但我可以告诉你，我认为这才是 HTML5 中这些新语义标记的真正价值所在。换句话说，我们现在有了独立的元素了，这些元素中的标题级别可以重新定义。

I could have a document with a section in it, that section could have a section within it, or an article, and sections in articles, articles in sections, sections in sections, articles in articles. And each one could have H1s to H6s all the way down so there’s like H-infinite at this point. But when you’re dealing with your content, or your content management system, they are standalone, properly standalone chunks of content now. And that’s very powerful.

> 我的文档中可能会包含一个分区，这个分区中可能会嵌套另一个分区，或者一篇文章，然后文章再嵌套分区，分区再嵌套文章、嵌套分区，文章再嵌套文章。而且每个分区和文章都可以拥有自己的 H1 到 H6。从这个意义上讲，H 元素真可谓“子子孙孙，无穷匮也”了。但是，在你编写内容或者内容管理系统的时候，它们又都是独立的，完全独立的内容块。这才是真正的价值所在。

And this is not some wacky idea that the working group came up with, or the W3C came up with recently. Here’s an email from Tim Berners-Lee from 1991, an email to Dan Connolly, he’s explaining about this HTML thing, and he says “You know …you know what I’d prefer, instead of H1, H2 and all that stuff, I’d like for it to be this nested section element, and a generic H element, so that we could just nest our levels within it.” Now we don’t have this generic H element, we’re still using H1 and H2—that’s because we’re still supporting the existing content—but we’re finally seeing this idea realised 20 years later.

> 实际上，这个点子并不 HTML5 工作组拍脑门想出来的，也不是 W3C 最近才提出来的。下面这几句话摘自蒂姆·伯纳斯-李 1991 年的一封邮件，邮件是发给丹·康纳利（Dan Connolly）的。他在邮件中解释了对 HTML 的理解，他说：“你知道……知道我的想法，我认为 H1、H2 这样单调地排下去不好，我希望它成为一种可以嵌套的元素，或者说一个通用的 H 元素，我们可以在其中嵌套不同的层次。”但后来，我们没有看到通用的 H 元素，而是一直在使用 H1 和 H2——那是因为我们一直在支持已有的内容。20 年后的今天，这个理想终于实现了。

## Degrade gracefully

Here’s a principle that I’m sure that you’re all familiar with already, which is degrading gracefully. We’ve all being doing this for years anyway. With progressive enhancement we get graceful degradation for free.

> 下一条原理大家应该都很熟悉了，那就是平稳退化。毕竟，我们已经遵守这条规则好多年了。渐进增强的另一面就是平稳退化。

One of my favourite examples of this principal in action in HTML5 is the way that forms have been enhanced in HTML5 using the type attribute. So this is a whole bunch of new values that you can give to type like number, search, range, all that stuff.

> 有关 HTML5 遵循这条原理的例子，就是使用 type 属性增强表单。下面列出了可以为 type 属性指定的新值，有 number、search、range，等等。

```
input type="number"
input type="search"
input type="range"
input type="email"
input type="date"
input type="url"
```

The great thing is what browsers do when they encounter this. Existing browsers, not future browsers, existing browsers that don’t understand this stuff, the way they degrade gracefully is whenever they see a type value they don’t understand, they just treat it like text.

> 最关键的问题在于浏览器在看到这些新 type 值时会如何处理。现有的浏览器，不是将来的浏览器，现有的浏览器是无法理解这些新 type 值的。但在它们看到自己不理解的 type 值时，会将 type 的值解释为 text。

You write input type=”foo”, input type=”bar”, and every browser out there will say, “Eh, he probably meant text.” So that means you can start using this stuff and be secure in the knowledge the browsers that don’t understand it will simply treat it like input type=”text”—a great example of browsers practicing graceful degradation.

> 无论你写的是 input type=”foo”还是 input type=”bar”，现有的任何浏览器都会说：“嗯，也许作者的意思是 text。”因而，你从现在开始就可以使用这些新值，而且你也可以放心，那些不理解它们的浏览器会把新值看成 type=”text”，而这真是一个浏览器实践平稳退化原理的好例子。

So this type equals=”number”, for example. Suppose you have an input that requires a number. You could say the input type is number and then in a browser that understands that input type, you might get a nice control like this little spinner thing. Right? And then in a browser that doesn’t understand it, you just get a text input, which is what you would have used anyway. So why not just say, input type=”number” and you get that spinner for free?

> 比如说，你现在输入了 type=”number”。假设你需要一个输入数值的文本框。那么你可以把这个 input 的 type 属性设置为 number，然后理解它的浏览器就会呈现一个可爱的小控件，像带小箭头图标的微调控件之类的。对吧？而在不理解它的浏览器中，你会看到一个文本框，一个你再熟悉不过的文本框。既然如此，为什么不能说输入 type=”number”就会得到一个带小箭头图标的微调控件呢？

You can have min and max and all that stuff in there as well, but it degrades gracefully. That’s the key issue.

> 当然，你还可以设置最小和最大值属性，它们同样可以平稳退化。这是问题的关键。

Input type=”search”. You might as well start using it because, in a browser like Safari you get this nice Operating System level search control and a little X you can click away the search term with. And in all other browsers you just get a text input, as if it were input type=”text”, which is what you would have used anyway. So why not just say input type=”search”? It doesn’t hurt, right?

> 再看 input type=”search”。你也可以考虑一下这种输入框，因为这种输入框在 Safari 中会被呈现为一个系统级的搜索控件，右边还有一个点击即可清除搜索关键词的 X。而在其他浏览器中，你得到的则是一个文本框，就像你写的是 input type=”text”一样，也就是你已经非常熟悉的文本框。那为什么还不使用 input type=”search”呢？它不会有什么副作用，没有，对不对？

New attributes have been added as well. You’ve got this placeholder attribute you can throw in. You know this pattern, right? You’ve got some text that’s already inside the input. Not a label — a placeholder and a label are two very different things. It’s an example value that’s sort of greyed out. You click in there and it goes away. You click out and type again, it’ll come back.

> HTML5 还为输入元素增加了新的属性，比如 placeholder（占位符）。有人不知道这个属性的用处吗，没有吧？没错，就是用于在文本框中预先放一些文本。不对，不是标签（label）——占位符和标签完全不是一回事。占位符就是文本框可以接受的示例内容，一般颜色是灰色的。只要你一点击文本框，它就消失了。如果你把已经输入的内容全部删除，然后单击了文本框外部，它又会出现。

We can hack this stuff together with JavaScript today, but now with HTML5 you just use a placeholder attribute.

> 使用 JavaScript 编写一些代码当然也可以实现这个功能，但 HTML5 只用一个 placeholder 属性就帮我们解决了问题。

And what you can do as well, if you still want to do it with JavaScript for browsers that don’t support this, is it’s pretty easy in JavaScript to test — does the browser understand the placeholder attribute? If it does, just step back, get out the way, don’t do anything. If it doesn’t, then include your JavaScript to mimic this functionality.

> 当然，对于不支持这个属性的浏览器，你还是可以使用 JavaScript 来实现占位符功能。通过 JavaScript 来测试浏览器支不支持该属性也非常简单。如果支持，后退一步，把路让开，乐享其成即可。如果不支持，可以再让你的 JavaScript 来模拟这个功能。

Now, I couldn’t talk about HTML5 without bringing up this subject—HTML5 versus Flash. You may have heard about this. You may have read about this somewhere. And I really don’t get it. I’m really puzzled by this whole battle that’s supposedly going on.

> 现在，我不得不提到另一个话题了：HTML5 对 Flash。也许你早听说过了，或者在哪里看到了这方面的讨论。说实话，我一点也不明白。我搞不懂人们怎么会仅仅凭自己的推测来展开争论。

First of all, when people talk about HTML5 versus Flash, they’re not talking about HTML5 and they’re not talking about Flash. They are talking about a subset of HTML5 and a subset of Flash. Specifically, they’re talking about video. So whenever you hear, “HTML5 versus Flash” they probably mean HTML5 video versus Flash video.

> 首先，他们所说的 HTML5 对 Flash，并不是指的 HTML5，也不是指的 Flash。而是指 HTML5 的一个子集和 Flash 的一个子集。具体来说，他们指的是视频。因此，不管你在哪里听到别人说“HTML5 对 Flash”，那很可能说的只是 HTML5 视频对 Flash 视频。

And another thing, this framing of it as HTML5 versus Flash—like you have to choose: which side are you on? That’s just not the case. Because of the way that the spec has been designed, you can have your cake and eat it too.

> 其次，一说 HTML5 对 Flash，就好像你必须得作出选择一样：你站在哪一边？实际上不是这样的。HTML5 规范的设计能够让你做到鱼和熊掌兼得。

So this is the way that it works with the new video element — a really nice element, really simple, elegant design. You have an opening video tag, a closing video tag, and in between you put your fallback content. Fallback content, not accessibility content, fallback content. So this is for browsers that don’t understand the video element.

> 好，下面就来看看这个新的 video 元素；真是非常贴心的一个元素，而且设计又简单，又实用。一个开始的 video 元素，加一个结束的 video 元素，中间可以放后备内容。注意，是后备内容，不是保证可访问性的内容，是后备内容。下面就是针对不支持 video 元素的浏览器写的代码：

```html
<video src="movie.mp4">
<!-- 后备内容 -->
</video>
```

So what would you put, for example, for your fallback content? Well, you can put a Flash movie. You can have HTML5 video and Flash video. You don’t have to choose.

> 那么，在后备内容里面放些什么东西呢？好，你可以放 Flash 影片。这样，HTML5 的视频与 Flash 的视频就可以协同起来了。你不用作出选择。

```html
<video src="movie.mp4">
<object data="movie.swf">
<!-- 后备内容 -->
</object>
</video>
```

It’s not quite as simple as that, of course, because here I am sending in H264, and some browsers will understand that. Other browsers don’t understand that.

> 当然，你的代码实际上并没有这么简单。因为这里我使用了 H264，部分浏览器支持这种视频格式。但有的浏览器不支持。

Don’t get me started on the whole formats thing, because I’ll get really upset. Not because of the technologies. I don’t care about the technologies, but the fact that patents and lawyers and intellectual property and other enemies of the web are getting in the way of me building better websites.

> 对不起，请不要跟我谈视频格式，我一听就心烦。不是因为技术。技术倒无所谓，关键是会牵扯到一大堆专利还有律师、知识产权等等，这些都是 Web 的天敌，对我建网站一点好处都没有。

But actually what you have to do is — put your fallback in there as well — you can have different formats. And you can specify these different formats using the source element rather than the source attribute if you want.

> 可你实际上要做的，仅仅就是把后备内容放在那而已，后备内容可以包含多种视频格式。如果愿意的话，可以使用 source 元素而非 src 属性来指定不同的视频格式。

```html
<video>
<source src="movie.mp4">
<source src="movie.ogv">
<object data="movie.swf">
<a href="movie.mp4">download</a>
</object>
</video>
```

Here I’ve kind of got four different levels going on. I got:

1.  Okay, if the browser understands the video element and it understands H264, it gets that.
2.  If the browser understands the video element and it understands Ogg, then it gets the second one.
3.  If the browser doesn’t understand the video element, then I’ll try to give it Flash.
4.  If the browser doesn’t support the video element or Flash, then I give it just a download link.

> 上面的代码中包含了 4 个不同的层次。

> 1、如果浏览器支持 video 元素，也支持 H264，没什么好说的，用第一个视频。

> 2、如果浏览器支持 video 元素，支持 Ogg，那么用第二个视频。

> 3、如果浏览器不支持 video 元素，那么就要试试 Flash 影片了。

> 4、如果浏览器不支持 video 元素，也不支持 Flash，我还给出了下载链接。

It’s kind of like you’ve got Inception going on right here. You’ve got different levels that you can go down.

> 不错，一开始就能考虑这么周到很难得啊。有了这几个层次，已经够完善了。

I think it’s a good idea to hedge your bets and serve up your video both ways. If you’re only serving video using the video element, you’re kind of shooting yourself in the foot, I think. But if you’re only serving your video with Flash, you’re kind of doing an equal disservice. You should probably do it both ways.

> 总之，我是建议你各种技术要兼顾，无论是 HTML5，还是 Flash，一个也不能少。如果只使用 video 元素提供视频，难免搬起石头砸自己的脚，我个人认为。而如果只提供 Flash 影片，情况也好不到哪去，性质是一样的。所以还是应该两者兼顾。

Why would you want to do this? Well, suppose you’ve got some kind of, I don’t know, handheld device that doesn’t support Flash and you want to make sure they get your content too, right?

> 为什么要兼顾这两种技术呢？假设你需要面向某些不支持 Flash 的手持设备——只是举个例子——提供视频，你当然希望手持设备的用户能够看到视频了，不是吗？

The reason why it’s such a problem that you have to have these different formats and the reason why flash has been so successful with video and audio comes down to another design principle, and that’s the principle of Metcalfe’s Law:

> 至于为什么要使用不同的格式，为什么 Flash 视频和音频如此成功，我想可以归结为另一个设计原理，即梅特卡夫定律(Metcalfe’s Law)：

The value of a network is proportional to the square of the number of connected users of the system.

> 网络价值同网络用户数量的平方成正比。

He was talking about telephony networks when he came up with this law, but it applies to pretty much anything. The value of a network increases basically the more people are using the network. Everybody uses Facebook because everybody uses Facebook. It’s not that it’s inherently valuable but the fact that everyone’s on it is what makes it so valuable.

> 梅特卡夫的这个定律虽然是针对电话网提出来的，但在很多领域里也是适用的。使用网络的用户越多，网络的价值也就越大。人人都上 Facebook，还不是因为人人都上 Facebook 嘛。虽然 Facebook 真正的价值不在于此，但只有人人都上才会让它的变得如此有价值。

A good example of Metcalfe’s Law would be whomever bought the first fax machine. Why did they buy it? It was pretty useless. But as soon as other people started buying fax machines, then it starts to gain value.

> 梅特卡夫定律也适用于传真机。如果只有一个人购买了传真机，当然没有什么用处。但如果其他人也陆续购买了传真机，那么他的投资会就得到回报。

So, when you’ve got competing formats and different ways of encoding things you’re not getting the benefit of Metcalfe’s Law and I get upset that we have to encode our video in different ways and I can’t just encode it in one way and send it to the browser. This is why Flash has been very successful in the video / audio areas. It’s that they can serve up one thing to the browser and have that supposedly work. Basically making use of Metcalfe’s Law.

> 当然，面对竞争性的视频格式和不同的编码方式，你感觉不到梅特卡夫定律的作用，我也很讨厌以不同的方式来编码视频，但只向浏览器发送用一种方式编码的视频是行不通的。而这也正是 Flash 在视频/音频领域如此成功的原因。你只要把 Flash 影片发送给浏览器就好了，然后安装了插件的浏览器都能正常播放。本质上讲，Flash 利用了梅特卡夫定律。

## Priority of constituencies

The final design principle I’ll leave with is my favourite, and there’s no code examples to show you for this one. This is much more philosophical and that’s the priority of constituencies.

> 今天我要讲的最后一个设计原理，也是我个人最推崇的一个，但没有要展示的代码示例。这个原理更有哲学的味道，即最终用户优先。

This one’s really about working together. This solves that problem of when there’s an issue, when you’ve got a problem you’ve got to tackle and you’ve got the W3C wants to do it one way and the WHATWG wants to do it another way, and this person thinks it should be done this way and this person thinks it should be done another way …here’s a flag in the sand to say “here’s how we’ll solve the problem:”

> 这个设计原理本质上是一种解决冲突的机制。换句话说，当你面临一个要解决的问题时，如果 W3C 给出了一种解决方案，而 WHATWG 给出了另一种解决方案，一个人这么想，另一个人那么想……这时候，有人站出来说：“对这个问题我们这样来解决。”

In case of conflict, consider users over authors over implementors over specifiers over theoretical purity.

> 一旦遇到冲突，最终用户优先，其次是作者，其次是实现者，其次标准制定者，最后才是理论上的完满。

Theoretical purity: that’s like building the best format we possibly can do. Specifiers are the working groups, W3C, etc. Implementors are browser makers. The authors; that’s us, right? Look how high up the chain we are! We’re second only to users—which is the way it should be right? The users come first. And that means our voice is very very important in this process.

> 理论上的完满，大致是指尽可能创建出最完美的格式。标准制定者，指的是工作组、W3C，等等。实现者，指的是浏览器厂商。作者，就是我们这些开发人员，对吧？看看我们在这个链条里面的位置多靠上啊！我们的地位仅次于最终用户——事情本来就该这个样子。用户是第一位的。而我们的声音在标准制定过程中也同样非常非常重要。

Hixie has stated often that, as features are being proposed and debated for HTML5, if there were a browser manufacturer who said of a feature, “we would never support that feature, never implement that feature in our browser,” then that feature’s coming out of the spec. Because if you put that feature into the spec anyway then the spec will be fiction, right? Because the implementors are refusing to implement that.

> Hixie（即 Ian Hickson， Acid2、Acid3 的作者及维护者，HTML5、CSS 2.1 规范的制定者）经常说，在有人建议了某个特性，而 HTML5 工作组为此争论不下时，如果有浏览器厂商说“我们不会支持这个特性，不会在我们的浏览器中实现这个特性”，那么这个特性就不会写进规范。因为即使是把特性写进规范，如果没有厂商实现，规范不过是一纸空文，对不对？实现者可以拒绝实现规范。

Because, according to the priority of constituencies, we are higher up the chain than the implementors, if we have a problem with something in the spec—if we think, “We disagree with this; we will never implement what you’ve specified in our documents”, then equally it should come out of the spec, because our voice should carry more weight. I like that! This basically makes us very powerful, right? And I think that’s a good thing.

> 而根据最终用户优先的原理，我们在链条中的位置高于实现者，假如我们发现了规范中的某些地方有问题，我们想“这样规定我们不能同意，我们不支持实现这个特性”，那么就等于把相应的特性给否定了，规范里就得删除，因为我们的声音具有更高的权重。我觉得这样挺好！本质上是我们拥有了更大的发言权，对吧？我认为开发人员就应该拥有更多的发言权。

I think this is probably the most important design principle because it acknowledges you have to have design principles when you’re building a format, when you’re building software. It’s just the way that the world works. It might seem obvious: users over authors over implementors over specifiers, but if you think about other specifications like XHTML2, it was the complete opposite way around. Theoretical purity was the most important thing and the users—what with the draconian error handling—came very much at the end of that chain. I’m not saying that was wrong but I think that was a very different philosophical approach.

> 我觉得这应该是最重要的一条设计原理了，因为它承认了你的权利，无论是设计一种格式，还是设计软件，这条原理保证了你的发言权。而这条原理也正道出了事物运行的本质。难道还不够明显吗？用户的权利大于作者，作者的权利大于实现者，实现者的权利大于标准制定者。然而，反观其他规范，比如 XHTML2，你就会发现完全相反的做法。把追求理论的完满放在第一位，而把用户——需要忍受严格错误处理带来的各种麻烦的用户——放在了链条的最底端。我并没有说这种做法就是错误的，但我认为这是一种完全不同的思维方式。

So I think that whatever you’re doing, whether it’s building a format like HTML5 or whether it’s building a website, whether it’s building a content management system, having design principles is really really useful.

> 因此，我认为无论你做什么，不管是构建像 HTML5 这样的格式，还是构建一个网站，亦或一个内容管理系统，明确你的设计原理都至关重要。

Software, like all technologies, is inherently political. Code inevitably reflects the choices, biases and desires of its creators.

> 软件，就像所有技术一样，具有天然的政治性。代码必然会反映作者的选择、偏见和期望。

I’ll give you an example. The Drupal community got in touch with Mark Boulton and Leisa Reichelt to redesign the Drupal interface. They set out to come up with design principles. They didn’t just sit down and scribble them onto a piece of paper, they took a long time to boil it down to these four design principles that they were going to operate with:

>下面我们讲一个例子。Drupal 社区曾联系马克·博尔顿（Mark Boulton）和丽莎·雷贺特（Leisa Reichilt）设计 Drupal 的界面。他们计划遵循一些设计原理。为此，他们并没有纸上谈兵，而是经过了一段时间的思考和酝酿，提出指导将来工作的 4 个设计原理：

> 1.  Make the most frequent tasks easy and less frequent tasks achievable.

> 简化最常见的任务，让不常见的任务不至于太麻烦。

> 2.  Design for the 80%.

> 只为 80%设计。

> 3.  Privilege the Content Creator.

> 给内容创建者最大的权利。

> 4.  Make the default settings smart.

> 默认设置智能化。

And actually when I spoke to Mark about this it’s really those two: “design for the 80%” and “privilege the content creator.” And that’s good, taking a stand and saying “We’re going to value the content creator more than any other people in this project.” That’s an important thing to remember about design principles because a lot of the time the idea of the design principle is that you’re not going to please everyone. The whole point is we don’t aim to please everyone, we’re deciding who’s the most valuable. They decided the content creator was the most important thing.

> 实际上，我在跟马克谈到这个问题时，马克说主要还是那两个，即“只为 80%设计。给内容创建者最大的权利。”这就很不错了，至少它表明了立场，“我们认为内容创建者比这个项目中的任何人都重要。”在制定设计原理时，很多人花了很多时间都抓不住重点，因为他们想取悦所有人。关键在于我们不是要取悦所有人，而是要明确哪些人最重要。他们认为内容创建者是最重要的。

This other principle, design for the 80%, this is a really common design principle. It’s a common pattern in nature. It’s called the Pareto principle.

> 另一条设计原理，只为 80%设计，其实是一条常见的设计原理，也是一种通用模式，即帕累托原理（Pareto principle）。

Pareto was an Italian economist that noticed this ratio, the eighty/twenty ratio, that twenty percent of the population has eighty percent of the wealth. It’s mapped onto a power law distribution that shows up everywhere in nature. And it turns out that when you’re writing software or you’re building something, it’s kinda the same, that you can achieve with twenty percent of the effort you can hit eighty percent of the use cases. The final twenty percent of the use cases are going to probably require eighty percent more effort. So sometimes it’s a good design principle to say only design for that eighty percent, because we know you can do it with twenty percent of the effort.

> 帕累托是意大利经济学家，他提出这个比例，80/20，说的是世界上 20%的人口拥有 80%的财富。这个比例又暗合了自然界各个领域的幂律分布现象。总之，无论你是编写软件，还是制造什么东西，都是一样的，即 20%的努力可以触及 80%的用例。最后 20%的用例则需要付出 80%甚至更多的努力。因此，有时候据此确定只为 80%设计是很合理的，因为我们知道为此只要付出 20%的努力即可。

Microformats, for example, very much use the Pareto principle in solving some use cases and not going to worry about some of the edge cases. They know they won’t please everyone; that’s not what they’re aiming to do. They’ve got lot of design principles, it’s really worth reading all of them but it’s captured in:

> 再比如，微格式同样也利用了帕累托原理，只处理常见用例，而没有考虑少数情形。他们知道自己不会让所有人都满意；而他们的目标也不是让所有人都满意。他们遵循的设计原理很多，也都非常有价值，但最吸引人的莫过于下面这条了：

Design for humans first, machines second.

> 首先为人类设计，其次为机器设计。

Again, it might seem obvious to you and to me but there are examples of other formats where it’s the other way around: where the ease of parsing for machines was more important than the ease of parsing to the users.

> 同样，你我都会觉得这是一条再明显不过的道理，但现实中仍然有不少例子违反了这条原理：容易让机器理解（解析）比容易让用户理解更重要。

So I think it’s really good to look at these design principles other people got out there and whatever you’re doing, think about what the design principles are and nail them to the wall. Basically have a URL where you publish this stuff, like the Mozilla foundation has done, right, these are the design principles that are behind Mozilla:

> 所以，我认为平常多看一看别人推崇的设计原理，有助于做好自己手头的工作。你可以把自己认为有道理的设计原理贴在墙上。当然，你可以维护一个 URL，把自己认为有价值的设计原理分享出来，就像 Mozilla 基金会那样，对不对，以下是 Mozilla 的设计原理：

The effectiveness of the Internet as a public resource depends upon interoperability (protocols, data formats, content), innovation and decentralised participation worldwide.

Transparent community-based processes promote participation, accountability, and trust.

> Internet 作为一种公共资源，其运作效率取决于互通性（协议、数据格式、内容）、变革及全球范围内的协作。

> 基于透明社区的流程有助于增进协作、义务和信任。

I think it’s a really good thing to do. And there’s a design principle that it seems to me has driven a lot of really good projects. It’s driven the web itself and I think it’s certainly a philosophy that’s behind HTML5. And that’s a design principle you’ve definitely heard of and that’s:
 
> 我觉得像这样的设计原理都非常好。而有了设计原理，我认为才更有希望设计出真正有价值的产品。设计原理是 Web 发展背后的驱动力，也是通过 HTML5 反映出来的某种思维方式。我想，下面这条原理你绝对不会陌生：

Rough consensus and running code.

> 大多数人的意见和运行的代码。

Right? It keeps cropping up over and over and for me, it kind of encapsulates what the web is about and captures where HTML5 is heading.

> 对不对？这句话经常在我脑际回响，它囊括了 Web 的真谛，触及了 HTML5 的灵魂。

So this is probably one I would nail to the wall in my office and say this is the design principle of the web: rough consenus and running code.

> 也许我该把这条原理打印出来贴到办公室的墙上，让它时刻提醒我，这就是 Web 的设计原理：大多数人的意见和运行的代码。

Ok so I’m gonna leave it there. And if you have any comments about any of this you can contact me on twitter @adactio. I sometimes blog about this stuff on adactio.com and I’m going to give a shameless plug that yes, I have a book out.

Thank you very much for listening.

> 我想，今天的演讲就到这里了。如果大家有什么想法可以在 twitter 上通过[@adactio](https://github.com/adactio)找到我。有时候我也会在自己的博客，adactio.com 上写写有关这个主题的文章。最后，可能还要顺便给我自己做个广告，我刚出了一本书，希望大家关注。

> 非常感谢大家。

## Questions

Oh, do we have time for questions? Oh, cool. I thought—I didn’t realise I had time. Who’s got questions? I love questions. Anybody? Don’t be shy. We have microphones, so …oh, there, okay. The microphone is coming to you, sir.

**Audience member**: If you’re using HTML 4.01, let’s say, are you allowed to use HTML5 elements in there? Or is it does it make sense, will browsers actually support it? Or should you really use HTML5 if you want to use HTML5 elements?

**Jeremy**: I would recommend using the doctype HTML rather than a legacy doctype like HTML 4.01. It’s not because of the browser support, because as I said, browsers will render whatever they can. I guess I need to define what I mean by “support” here.

With these new semantic elements—you know, section, article—you can just go ahead and use them in browsers and the browsers will go ahead and render them and style them fine …except for one browser that you’re all familiar with, but a little bit of javascript will help. A kick up the ass and Internet Explorer can understand them as well.

But it’s not so much that these browsers understand what these new elements are, it’s just that these browsers will let you write any element you want. You can write a ‘foo’ element and a ‘bar’ element and you can still go ahead and style them. The new version of Firefox will properly understand HTML5, will understand these elements.

So you can go ahead and use section or article in HTML 4, but then your doctype will be invalid. If you run it against a validator it will say “I have no idea what a ‘section’ is, an ‘article’ is”. But the browser won’t complain, it will parse it just fine. So it depends what you want to do.

So I would recommend changing the doctype as well, just so you get the nice green tick from the validator. You can use this stuff without changing your doctype, but I would recommend changing the doctype. In fact, if at the minimum you change the doctype, then you can start messing around with this stuff as you feel comfortable.

But here’s something else you can do if you’re still using HTML 4.01 and you want to get to grips with the semantics of these new elements. You don’t necessarily start having to use these new elements themselves, but you could take the names and use them as class names. This is what I’m doing now with a lot of client work. In terms of my personal work, I’m just going ahead and using section and article, nav, aside, header, footer, but in client work I’m like, “Okay, I better ease off a bit on this.” I will still use divs, but I’ll say `div class="section"`, `div class="header"`, `div class="footer"`, so I’ll reuse the vocabulary with class names.

It’s kind of handy, because a lot of the time you’ll be handing off these documents to be turned over to some server side programmer that has to build the actual app, and I need to document why I chose these class names, and by using the class names from HTML5, I have existing documentation, which is the HTML 5 spec. I simply say “If you want to know what ‘section’ means, or ‘article’ means, here’s a URL that explains the semantics of it”. I’m not using the element, I’m using the class names, but the semantics are the important thing.

So that’s an idea, if you don’t want to dive into using these new elements, maybe just use the class names instead.

Do we have another question? Over here, we’ve got one. There’s a microphone coming your way.

**Audience member**: You touched on input types there. When you use an input type that’s not recognised by the browser and you interrogate the input type, it reports type text.

**Jeremy**: Yes, that’s correct.

**Audience member**: In CSS, when you style it with an attribute selector, it styles with the original type that you specified.

**Jeremy**: Excellent.

**Audience member**: What’s going on?

**Jeremy**: I guess there are different parsing rules for CSS and HTML. I don’t know is the answer to your question. It’s a good question. I don’t know, but I guess it’s different parsing models, the way that CSS would parse from the way HTML would parse.

But the fact that you can query with javascript, does the browser think this is `input type="number"`, `input type="range"`, is actually really really handy, because you can use the javascript fallback depending on whether it responds with its input type text or not. That’s actually pretty handy.

But I don’t know why CSS does things differently than HTML. I’m not a browser maker. Don’t we have browser makers in the room somewhere? So that might be a good question to ask them, why it works that way. But it’s a good question.

**Anne Van Kesteren**: I can answer it if you want.

**Jeremy**: I hear a voice from beyond.

**Anne**: The difference is that in javascript you use the IDL attribute, or the property, and you don’t actually query the actual attribute value, because you would usually getAttribute. You would actually get back, like, search instead of text.

**Jeremy**: Right, so that’s a good point. Actually, I’m going to do a quick bit of live coding. It’s going to go horribly wrong.

Ninety-nine times out of a hundred, there’s no difference between using getAttribute and using just the dot syntax, right? `img.src` …it makes no difference ninety-nine times out of a hundred whether you say `img.src` in javascript or whether you say `img.getAttribute('src')`. It’s going to be the same thing ninety-nine times out of a hundred. With the input types we can use the fact that in some cases it’s not quite the same. So let’s say we create a new input element…

**Audience member**: It’s not appearing on the screen, by the way.

**Jeremy**: Oh, shoot. Well, sorry about that. Looks like keynote …. Let me do… sorry. Sorry. Okay, thank you. Thank you for pointing that out.

So let’s say we create a new input type. Let’s see if I get this wrong. And now I say test.setAttribute, and I’m not saying set the test.type attribute, I’m saying set the test attribute to be whatever it is we’re testing, but let’s say the input type was range. And then we can query if test.type is equal to text, right? Then we know, time for some javascript fallback.

This code is probably horrible, I can’t believe I’m trying to do JavaScript with PPK looking at the screen.

But you get the idea. Here’s one of the few times that there’s a slight difference between getAttribute and the dot syntax. It’s important.

So that’s a good point, but if you were to query in javascript getAttribute, you would get the correct report, the same as with CSS, whereas what you’re querying is probably .type –- you’re going to get ‘text’. I think that would explain that reasonably well. Let me just do something…

So, any other questions? I hope that helped. Who’s got the microphone? I’m somewhat blind up here. You’ve got the microphone coming your way …and there we go.

**Audience member**: Hello

**Jeremy**: Hello

**Audience member**: When you want to start using HTML5 for your website, will it improve your position in the search engines?

**Jeremy**: I’ll tell you what improves your position in search engines, write good content! It’s crazy but it’ll work!

**Audience member**: That’s the first place, but…

**Jeremy**: Obviously, and you know what? Everything after that is secondary …it’s not secondary, it’s tertiary. It’s less than tertiary. The most important thing is you’ve got good content. Structure it well, obviously. The fact that you’re using headings at all in a document is good and the fact you’re using semantic markup is good but most important is good content. Now the fine details—whether this element or that element gets ranked more by Google—it changes every week anyway and I know earlier I was pointing out every section or article can start with H1—“Oh my God, what will Google do?” I will point out that Ian Hickson does actually work at Google so I wouldn’t worry too much about it, frankly.

Look, here’s my approach to SEO, if you’re thinking in terms of SEO (Search Engine Optimisation) you’re doing it wrong. You want to be thinking in terms of people optimisation because Google practices people optimisation. So, when someone enters a search term in Google, Google is now thinking “what is the best document, what’s the best resource I can give to this person who’s trying to find a result for this search?” and so it thinks in terms of what people want and when it’s analysing a document it’s thinking about “what do people want out of this document?”. So when you’re creating your documents instead of thinking about what does Google want—because Google is thinking about what people want—why don’t you just cut out the middle man and think “what do people want?” and if you do that, you’ll get good “SEO” anyway because Google is also practising this people optimisation, so cut out the middle man. Don’t think about Google, think about your content, think about your users. Think about using the best semantics available and by a happy coincidence, you will get good SEO from that.

As for the fine details, of which element is better than the other element, it doesn’t matter nearly as much as having relevant, well written, well structured content. Oh, what’s that excellent, excellent phrase you have in Dutch: miereneuker, right? Miereneuker: that’s what a lot of SEO is about.

I got to use that, that was awesome.

One more question, Who’s got a hands up? I can’t see a thing, so …run microphone, run!

**Audience member**: Hi, you mentioned that you don’t use HTML5 on your own websites for customers, but you’ve been talking about using it today, for about an hour now.

**Jeremy**: Yep.

**Audience member**: Why is that?

**Jeremy**: Well I’d use the doctype. Obviously, no problem using a doctype. I was talking specifically about the new semantic elements: section, article, nav, aside; I’d stick to using div `class="section"`, `div class="article"`. It depends on the client, but there’s a very very very small use case where they might not get the styles and that is, like i said, you can style these elements in every browser but to style them in Internet Explorer you have to use a little bit of JavaScript, right? You have to say… so for some bizarre reason you have to tell Internet Explorer that an element exists by saying `document.createElement('section')`. Now you can style them in Internet Explorer. It doesn’t make any sense, but that’s the way it works. And Remy sharp has written a nice little piece of code that encapsulates all of this, and it’s on Google Code so you can just point at it and jobs a good ‘un.

So, there’s a very very very small possibility of your audience using Internet Explorer (less than 9) and having JavaScript switched off in which case they then won’t get the styles that you apply to any of these new elements. So, for that very small use case, I’m a little bit more cautious about using the new semantic elements but I absolutely use HTML5 in my client sites because what I’ll do is, maybe I won’t use section, article, nav and aside , I’ll use `div class="section"`, `div class="article"` and so on, but I will start using the new input types, I’ll use `input type="search"` because—why not? I will start using the placeholder attribute—why not? I will start using ARIA roles. Right? You can use ARIA roles in any version of HTML but in HTML5, it’s valid! Right? The role attribute is valid. So you can go ahead and start using ARIA roles in your document. Frankly, for that reason alone, it’s worth switching over to using the HTML5 doctype in my opinion.

So, you weren’t quite correct saying I’m not using HTML5 on client sites, I am using HTML5 on client sites, I’m not necessarily using the new structural elements and that’s because there’s that potential for a small portion of the audience to not get the styles for those new elements, if I’m using them as styling points; I don’t necessarily have to use them as styling points.

I think I’m out of time …okay, I’m out of time. Thank you.
