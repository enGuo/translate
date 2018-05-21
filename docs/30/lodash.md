---
layout: SpecialLayout
sidebar: auto
pageClass: custom-page-class
---

# lodash 中文

1.  将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

1.  创建一个新数组，包含原数组中所有的非假值元素。例如 false, null

1.  创建一个新数组，将 array 与任何数组 或 值连接在一起。

1.  创建一个具有唯一 array 值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero

1.  这个方法类似\_.difference ，除了它接受一个 iteratee （愚人码头注：迭代器）， 调用 array 和 values 中的每个元素以产生比较的标准。&nbsp;结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（愚人码头注：首先使用迭代器分别迭代 array 和 values

1.  这个方法类似\_.difference ，除了它接受一个 comparator （愚人码头注：比较器），它调用比较 array，values 中的元素。&nbsp;结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)

1.  创建一个切片数组，去除 array 前面的 n 个元素。（n 默认值为 1。）

1.  创建一个切片数组，去除 array 尾部的 n 个元素。（n 默认值为 1。）

1.  创建一个切片数组，去除 array 中从 predicate 返回假值开始到尾部的部分。predicate 会传入 3 个参数： (value, index, array)。

1.  创建一个切片数组，去除 array 中从起点开始到 predicate 返回假值结束部分。predicate 会传入 3 个参数： (value, index, array)。

1.  使用 value 值来填充（替换） array，从 start 位置开始, 到 end 位置结束（但不包含 end 位置）。

1.  Note: 这个方法会改变 array（愚人码头注：不是创建新数组）。

1.  该方法类似\_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。

1.  这个方式类似 \_.findIndex， 区别是它是从右到左的迭代集合 array 中的元素。

1.  减少一级 array 嵌套深度。

1.  将 array 递归为一维数组。

1.  根据 depth 递归减少 array 的嵌套层级

1.  与\_.toPairs 正好相反；这个方法返回一个由键值对 pairs 构成的对象。

1.  获取数组 array 的第一个元素。

1.  使用 SameValueZero 等值比较，返回首次 value 在数组 array 中被找到的 索引值， 如果 fromIndex 为负值，将从数组 array 尾端索引进行匹配。

1.  获取数组 array 中除了最后一个元素之外的所有元素（愚人码头注：去除数组 array 中的最后一个元素）。

1.  创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero 进行相等性比较。（愚人码头注：可以理解为给定数组的交集）

1.  这个方法类似 \_.intersection，区别是它接受一个 iteratee 调用每一个 arrays 的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。

1.  这个方法类似 \_.intersection，区别是它接受一个 comparator 调用比较 arrays 中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。

1.  将 array 中的所有元素转换为由 separator 分隔的字符串。

1.  获取 array 中的最后一个元素。

1.  array (Array): 要检索的数组。

1.  这个方法类似 \_.indexOf ，区别是它是从右到左遍历 array 的元素。

1.  获取 array 数组的第 n 个元素。如果 n 为负数，则返回从数组结尾开始的第 n 个元素。

1.  移除数组 array 中所有和给定值相等的元素，使用 SameValueZero

1.  这个方法类似\_.pull

1.  这个方法类似于\_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values 的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)

1.  这个方法类似于 \_.pullAll，区别是这个方法接受 comparator 调用 array 中的元素和 values 比较。comparator 会传入两个参数：(arrVal, othVal)

1.  根据索引 indexes，移除 array

1.  移除数组中 predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入 3 个参数： (value, index, array)

1.  反转 array

1.  裁剪数组 array，从 start 位置开始到 end 结束，但不包括 end

1.  使用二进制的方式检索来决定 value 值 应该插入到数组中 尽可能小的索引位置，以保证 array 的排序。

1.  这个方法类似 \_.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和 value 值比较来计算排序。iteratee 会传入一个参数：(value)。

1.  这个方法类似 \_.indexOf，除了它是在已经排序的数组 array 上执行二进制检索。

1.  此方法类似于\_.sortedIndex，除了 它返回 value 值 在 array 中尽可能大的索引位置（index）。

1.  这个方法类似 \_.sortedLastIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和 value 值比较来计算排序。iteratee 会传入一个参数：(value)。

1.  这个方法类似 \_.lastIndexOf，除了它是在已经排序的数组 array 上执行二进制检索。

1.  这个方法类似 \_.uniq，除了它会优化排序数组。

1.  这个方法类似 \_.uniqBy，除了它会优化排序数组。

1.  获取除了 array 数组第一个元素以外的全部元素。

1.  创建一个数组切片，从 array 数组的起始元素开始提取 n 个元素。

1.  创建一个数组切片，从 array 数组的最后一个元素开始提取 n 个元素。

1.  从 array 数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。

1.  从 array 数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。

1.  创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero 做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）

1.  这个方法类似 \_.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。

1.  这个方法类似 \_.union， 除了它接受一个 comparator 调用比较 arrays 数组的每一个元素。 comparator 调用时会传入 2 个参数： (arrVal, othVal)。

1.  创建一个去重后的 array 数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。

1.  这个方法类似 \_.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。

1.  这个方法类似 \_.uniq， 除了它接受一个 comparator 调用比较 arrays 数组的每一个元素。 comparator 调用时会传入 2 个参数： (arrVal, othVal)。

1.  这个方法类似于\_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（愚人码头：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）

1.  此方法类似于\_.unzip，除了它接受一个 iteratee 指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。

1.  创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero

1.  创建一个给定数组唯一值的数组，使用 symmetric difference 做等值比较。返回值的顺序取决于他们数组的出现顺序。

1.  这个方法类似 \_.xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays

1.  该方法是像 \_.xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用 2 个参数：(arrVal, othVal).

1.  创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

1.  这个方法类似 \_.fromPairs，除了它接受 2 个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。

1.  这个方法类似 \_.zipObject，除了它支持属性路径。

1.  这个方法类似于\_.zip，不同之处在于它接受一个 iteratee

1.  创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理 collection 中每个元素后返回的结果，每个 key（键）对应的值是 iteratee（迭代函数）返回该 key（键）的次数（愚人码头注：迭代次数）。 iteratee 调用一个参数：(value)。

1.  通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index|key, collection)

1.  遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)

1.  遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用 3 个参数： (value, index|key, collection)。

1.  这个方法类似\_.findLast 是从右至左遍历 collection （集合）元素的。

1.  创建一个扁平化（愚人码头注：同阶数组）的数组，这个数组的值来自 collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。

1.  这个方法类似 \_.flatMapDeep 会继续扁平化递归映射的结果。

1.  该方法类似\_.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。

1.  调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用 3 个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false

1.  这个方法类似 \_.forEachRight 是从右到左遍历集合中每一个元素的。

1.  创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。

1.  检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。

1.  调用 path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。任何附加的参数提供给每个被调用的方法。如果 methodName（方法名）是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。

1.  创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成 key（键）的最后一个元素。iteratee（迭代函数）调用 1 个参数：(value)。

1.  创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用 3 个参数：

1.  此方法类似于\_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。

1.  创建一个分成两组的元素数组，第一组包含 predicate（断言函数）返回为 truthy（真值）的元素，第二组包含 predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用 1 个参数：(value)。

1.  压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(愚人码头注：作为 iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(愚人码头注：accumulator 参数在第一次迭代的时候作为 iteratee（迭代函数）第一个参数使用。) iteratee 调用 4 个参数：

1.  assign, defaults, defaultsDeep, includes, merge, orderBy

1.  这个方法类似 \_.reduce ，除了它是从右到左遍历 collection（集合）中的元素的。

1.  从 collection（集合）中获得一个随机元素。

1.  从 collection（集合）中获得 n 个随机元素。

1.  创建一个被打乱值的集合。 使用 Fisher-Yates shuffle 版本。

1.  返回 collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。

1.  通过 predicate（断言函数） 检查 collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用 3 个参数：(value,index|key, collection)。

1.  创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用 1 个参数： (value)。

1.  获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。

1.  创建一个调用 func 的函数。调用 func 时最多接受 n 个参数，忽略多出的参数。

1.  创建一个调用 func 的函数，通过 this 绑定和创建函数的参数调用 func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用 func 的结果。

1.  创建一个调用 func 的函数，thisArg 绑定 func 函数中的 this (愚人码头注：this 的上下文为 thisArg) ，并且 func 函数会接收 partials

1.  创建一个函数,在 object[key]上通过接收 partials

1.  创建一个函数，该函数接收 func 的参数，要么调用 func 返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的 func 参数的函数，可以使用 func.length

1.  这个方法类似 \_.partial

1.  创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（愚人码头注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func

1.  推迟调用 func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给 func。

1.  延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给 func。

1.  创建一个函数，调用 func 时候接收翻转的参数。

1.  创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。 默认情况下用第一个参数作为缓存的 key。 func 在调用时 this

1.  创建一个针对断言函数 func 结果取反的函数。 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。

1.  创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。

1.  创建一个函数，调用 func 时参数为相对应的 transforms 的返回值。

1.  创建一个函数。 该函数调用 func，并传入预设的 partials 参数。 这个方法类似 \_.bind，除了它不会绑定 this

1.  这个函数类似 \_.partial

1.  创建一个函数,调用 func 时，根据指定的 indexes 调整对应位置参数。其中第一个索引值是对应第一个参数，第二个索引值是作为第二个参数，依此类推。

1.  创建一个函数，调用 func 时，this 绑定到创建的新函数，并且 start

1.  创建一个函数，调用 func 时，this 绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply

1.  创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func

1.  创建一个最多接受一个参数的函数，忽略多余的参数。

1.  创建一个函数。提供的 value 包装在 wrapper 函数的第一个参数里。 任何附加的参数都提供给 wrapper 函数。 被调用时 this 绑定在创建的函数上。

1.  如果 value 不是数组, 那么强制转为数组。

1.  创建一个 value

1.  这个方法类似\_.clone，除了它会递归拷贝 value。（愚人码头注：也叫深拷贝）。

1.  这个方法类似 \_.cloneWith，除了它会递归克隆 value。

1.  这个方法类似 \_.clone，除了它接受一个 customizer 定制返回的克隆值。 如果 customizer 返回 undefined 将会使用拷贝方法代替处理。 customizer 调用 4 个参数： (value [, index|key, object, stack])。

1.  通过调用断言 source 的属性与 object 的相应属性值，检查 object 是否符合 source。当 source 偏应用时，这种方法和 \_.conforms

1.  执行 SameValueZero 比较两者的值，来确定它们是否相等。

1.  检查 value 是否大于 other。

1.  检查 value 是否大于或者等于 other。

1.  检查 value 是否是一个类 arguments 对象。

1.  检查 value 是否是 Array 类对象。

1.  检查 value 是否是 ArrayBuffer 对象。

1.  检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 value.length 是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。

1.  这个方法类似\_.isArrayLike。除了它还检查 value 是否是个对象。

1.  检查 value 是否是原始 boolean 类型或者对象。

1.  检查 value 是否是个 buffer。

1.  检查 value 是否是 Date 对象。

1.  检查 value 是否是可能是 DOM 元素。

1.  检查 value

1.  这个方法类似 \_.isEqual。 除了它接受一个 customizer 用来定制比较值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入 6 个参数：(objValue, othValue [, index|key,object, other, stack])

1.  检查 value 是否是 Error, EvalError, RangeError, ReferenceError

1.  检查 value

1.  检查 value 是否是 Function 对象。

1.  检查 value

1.  检查 value

1.  检查 value 是否为一个 Map 对象。

1.  执行一个深度比较，来确定 object 是否含有和 source

1.  这个方法类似 \_.isMatch。 除了它接受一个 customizer 定制比较的值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入 5 个参数：(objValue, srcValue, index|key, object,source)。

1.  检查 value 是否是 NaN

1.  检查 value

1.  检查 value 是否是 null 或者 undefined。

1.  检查 valuealue 是否是 null。

1.  检查 value 是否是原始 Number

1.  检查 value 是否为 Object 的 language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))

1.  检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。

1.  检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。

1.  检查 value 是否为 RegExp 对象。

1.  检查 value

1.  检查 value 是否是一个 Set 对象。

1.  检查 value 是否是原始字符串 String 或者对象。

1.  检查 value 是否是原始 Symbol 或者对象。

1.  检查 value 是否是 TypedArray。

1.  检查 value 是否是 undefined.

1.  检查 value 是否是 WeakMap 对象。

1.  检查 value 是否是 WeakSet 对象。

1.  检查 value 是否小于 other。

1.  检查 value 是否小于等于 other。

1.  转换 value 为一个数组。

1.  转换 value 为一个有限数字。

1.  转换 value

1.  转换 value

1.  转换 value 为一个数字。

1.  转换 value 为普通对象。 包括继承的可枚举属性。

1.  转换 value 为安全整数。 安全整数可以用于比较和准确的表示。

1.  转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。

1.  两个数相加。

1.  根据 precision（精度） 向上舍入 number。（愚人码头注： precision（精度）可以理解为保留几位小数。）

1.  两个数相除。

1.  根据 precision（精度） 向下舍入 number。（愚人码头注： precision（精度）可以理解为保留几位小数。）

1.  计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。

1.  这个方法类似 \_.max 除了它接受 iteratee 来调用 array 中的每一个元素，来生成其值排序的标准。 iteratee 会调用 1 个参数: (value) 。

1.  计算 array 的平均值。

1.  这个方法类似 \_.mean， 除了它接受 iteratee 来调用 array 中的每一个元素，来生成其值排序的标准。 iteratee 会调用 1 个参数: (value) 。

1.  计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。

1.  这个方法类似 \_.min 除了它接受 iteratee 来调用 array 中的每一个元素，来生成其值排序的标准。 iteratee 会调用 1 个参数: (value) 。

1.  两个数相乘。

1.  根据 precision（精度） 四舍五入 number。

1.  亮数相减。

1.  计算 array 中值的总和

1.  这个方法类似 \_.summin 除了它接受 iteratee 来调用 array 中的每一个元素，来生成其值排序的标准。 iteratee 会调用 1 个参数: (value) 。

1.  返回限制在 lower 和 upper 之间的值。

1.  检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为 0。 如果 start 大于 end，那么参数会交换以便支持负范围。

1.  产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个 0 到提供数之间的数。 如果 floating 设为 true，或者 lower 或 upper

1.  这个方法类似 \_.assign

1.  这个方法类似 \_.assignIn， 除了它接受一个 customizer ，被调用以产生所分配的值。 如果 customizer 返回 undefined 将会由分配处理方法代替。 customizer 会传入 5 个参数： (objValue, srcValue, key,object, source)

1.  这个方法类似 \_.assign ， 除了它接受一个 customizer 决定如何分配值。 如果 customizer 返回 undefined 将会由分配处理方法代替。customizer 会传入 5 个参数： (objValue, srcValue, key, object, source)

1.  创建一个数组，值来自 object 的 paths 路径相应的值。

1.  创建一个继承 prototype 的对象。 如果提供了 prototype，它的可枚举属性会被分配到创建的对象上。

1.  分配来源对象的可枚举属性到目标对象所有解析为 undefined

1.  这个方法类似 \_.defaults

1.  这个方法类似 \_.find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。

1.  这个方法类似\_.findKey。 不过它是反方向开始遍历的。

1.  使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入 3 个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。

1.  这个方法类似 \_.forIn。 除了它是反方向开始遍历 object 的。

1.  使用 iteratee 遍历自身的可枚举属性。 iteratee 会传入 3 个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。

1.  这个方法类似 \_.forOwn。 除了它是反方向开始遍历 object 的。

1.  创建一个函数属性名称的数组，函数属性名称来自 object 对象自身可枚举属性。

1.  创建一个函数属性名称的数组，函数属性名称来自 object 对象自身和继承的可枚举属性。

1.  根据 object 对象的 path 路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。

1.  检查 path 是否是 object 对象的直接属性。

1.  检查 path 是否是 object 对象的直接或继承属性。

1.  创建一个 object 键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。

1.  这个方法类似 \_.invert，除了倒置对象 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。每个反转键相应反转的值是一个负责生成反转值 key 的数组。iteratee 会传入 3 个参数：(value) 。

1.  调用 object 对象 path 上的方法。

1.  创建一个 object

1.  创建一个 object

1.  反向版 \_.mapValues。 这个方法创建一个对象，对象的值与 object 相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的。iteratee 调用三个参数： (value, key, object)。

1.  创建一个对象，这个对象的 key 与 object 对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。 iteratee 调用三个参数： (value, key, object)。

1.  该方法类似\_.assign

1.  该方法类似\_.merge，除了它接受一个 customizer，调用以产生目标对象和来源对象属性的合并值。如果 customizer 返回 undefined

1.  反向版 \_.pick; 这个方法一个对象，这个对象由忽略属性之外的 object 自身和继承的可枚举属性组成。（愚人码头注：可以理解为删除 object 对象的属性）。

1.  反向版 \_.pickBy；这个方法一个对象，这个对象忽略 predicate（断言函数）判断不是真值的属性后，object 自身和继承的可枚举属性组成。predicate 调用与 2 个参数：(value, key)。

1.  创建一个从 object 中选中的属性的对象。

1.  创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性。 predicate 调用 2 个参数：(value, key)。

1.  这个方法类似 \_.get， 除了如果解析到的值是一个函数的话，就绑定 this 到这个函数并返回执行后的结果。

1.  设置 object 对象中对应 path 属性路径上的值，如果 path 不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 使用 \_.setWith 定制 path

1.  这个方法类似\_.set，除了它接受一个 customizer，调用生成对象的 path。 如果 customizer 返回 undefined 将会有它的处理方法代替。 customizer 调用 3 个参数： (nsValue, key, nsObject)

1.  创建一个 object 对象自身可枚举属性的键值对数组。这个数组可以通过\_.fromPairs 撤回。如果 object 是 map 或 set，返回其条目。

1.  创建一个 object 对象自身和继承的可枚举属性的键值对数组。这个数组可以通过\_.fromPairs 撤回。如果 object 是 map 或 set，返回其条目。

1.  移除 object 对象 path

1.  该方法类似\_.updateWith 来自定义生成的新 path。updater 调用 1 个参数：(value)

1.  该方法类似\_.update，不同之处在于它接受 customizer，调用来生成新的对象的 path。如果 customizer 返回 undefined，路径创建由该方法代替。customizer 调用有三个参数：(nsValue, key, nsObject)

1.  创建 object

1.  创建 object

1.  创建一个 lodash 对象，包装 value 后的对象启用隐式方法链。返回的数组、集合、方法相互之间能够链式调用。检索唯一值或返回原始值会自动解除链条并返回计算后的值，否则需要调用 \_#value

1.  创建一个 lodash 包装实例，包装 value 以启用显式链模式。要解除链必须使用 \_#value 方法。

1.  这个方法调用一个 interceptor 并返回 value。interceptor 调用 1 个参数： (value)。 该方法的目的是 进入 方法链序列以便修改中间结果。

1.  这个方法类似\_.tap， 除了它返回 interceptor 的返回结果。该方法的目的是"传递" 值到一个方法链序列以取代中间结果。

1.  启用包装对象为 iterable。

1.  这个方法是 \_.at 的包装版本 。

1.  创建一个 lodash 包装实例，启用显式链模式。

1.  执行链式队列并返回结果。

1.  获得包装对象的下一个值，遵循 iterator protocol。

1.  创建一个链式队列的拷贝，传入的 value 作为链式队列的值。

1.  这个方法是 \_.reverse

1.  执行链式队列并提取解链后的值。

1.  转换字符串 string 为 驼峰写法。

1.  转换字符串 string 首字母为大写，剩下为小写。

1.  转换字符串 string 中拉丁语扩展字母-A 为基本的拉丁字母，并且去除组合变音标记。

1.  检查字符串 string 是否以给定的 target 字符串结尾。

1.  转义 string

1.  转义 RegExp

1.  转换字符串 string 为 kebab case.

1.  转换字符串 string 以空格分开单词，并转换为小写。

1.  转换字符串 string 的首字母为小写。

1.  如果 string 字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。

1.  如果 string 字符串长度小于 length 则在右侧填充字符。 如果超出 length 长度则截断超出的部分。

1.  如果 string 字符串长度小于 length 则在左侧填充字符。 如果超出 length 长度则截断超出的部分。

1.  转换 string 字符串为指定基数的整数。 如果基数是 undefined 或者 0，则 radix 基数默认是 10，如果 string 字符串是 16 进制，则 radix 基数为 16

1.  重复 N 次给定字符串。

1.  替换 string 字符串中匹配的 pattern 为给定的 replacement

1.  转换字符串 string

1.  根据 separator 拆分字符串 string

1.  转换 string

1.  检查字符串 string 是否以 target 开头。

1.  创建一个预编译模板方法，可以插入数据到模板中 "interpolate" 分隔符相应的位置。 HTML 会在 "escape" 分隔符中转换为相应实体。 在 "evaluate" 分隔符中允许执行 JavaScript 代码。 在模板中可以自由访问变量。 如果设置了选项对象，则会优先覆盖 \_.templateSettings

1.  转换整个 string

1.  转换整个 string

1.  从 string 字符串中移除前面和后面的 空格 或 指定的字符。

1.  从 string 字符串中移除后面的 空格 或 指定的字符。

1.  从 string 字符串中移除前面的 空格 或 指定的字符。

1.  截断 string 字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。

1.  注意: 不会转换其他的 HTML 实体，需要转换可以使用第三方库，类似 he。

1.  转换字符串 string 为 空格 分隔的大写单词。

1.  转换字符串 string 的首字母为大写。

1.  拆分字符串 string 中的词为数组 。

1.  尝试调用 func，返回结果 或者 捕捉错误对象。任何附加的参数都会在调用时传给 func。

1.  创建了一个函数，这个函数会迭代 pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。

1.  创建一个函数。 这个函数会 调用 source 的属性名对应的 predicate 与传入对象相对应属性名的值进行断言处理。 如果都符合返回 true ，否则返回 false

1.  创建一个返回 value 的函数。

1.  检查 value，以确定一个默认值是否应被返回。如果 value 为 NaN, null, 或者 undefined，那么返回 defaultValue 默认值。

1.  创建一个函数。 返回的结果是调用提供函数的结果，this 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。

1.  这个方法类似 \_.flow，除了它调用函数的顺序是从右往左的。

1.  这个方法返回首个提供的参数。

1.  创建一个函数，通过创建函数的参数调用 func 函数。 如果 func 是一个属性名，传入包含这个属性名的对象，回调返回对应属性名的值。 如果 func 是一个对象，传入的元素有相同的对象属性，回调返回 true 。 其他情况返回 false 。

1.  创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false

1.  创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false

1.  创建一个调用给定对象 path 上的函数。 任何附加的参数都会传入这个调用函数中。

1.  添加来源对象自身的所有可枚举函数属性到目标对象。 如果 object

1.  释放 \_ 变量为原来的值，并返回一个 lodash 的引用。

1.  这个方法返回 undefined。

1.  创建一个函数，这个函数返回第 n 个参数。如果 n 为负数，则返回从结尾开始的第 n 个参数。

1.  创建一个函数，传入提供的参数的函数并调用 iteratees 返回结果。

1.  建一个函数，传入提供的参数的函数并调用 predicates 判断是否 全部 都为真值。

1.  创建一个函数，传入提供的参数的函数并调用 predicates 判断是否 存在 有真值。

1.  创建一个返回给定对象的 path 的值的函数。

1.  创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step

1.  这个方法类似 \_.range ， 除了它是降序生成值的。

1.  创建一个给定 context 上下文对象的原始的 lodash 函数。

1.  这个方法返回一个新的空数组。

1.  这个方法返回 false.

1.  这个方法返回一个空对象.

1.  这个方法返回一个空字符串。

1.  这个方法返回 true。

1.  调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入 1 个参数： (index)。

1.  转化 value 为属性路径的数组 。

1.  生成唯一 ID。 如果提供了 prefix ，会被添加到 ID 前缀上。

1.  (string): 语义化的版本号。

1.  (Object): 默认情况下，lodash 使用的模板分隔符就像那他们嵌入到 Ruby（ERB）一样。更改以下模板设置使用替代分隔符。

1.  (RegExp): 用于检测 data 属性值是否 HTML 转义。

1.  (RegExp): 用于检测代码来进行评估。

1.  (Object): 用于导入变量到编译模板。

1.  (RegExp): 用于检测 data 属性值是否注入。

1.  (string): 用于引用该数据对象中的模板文本。

1.  lodash 引用。
