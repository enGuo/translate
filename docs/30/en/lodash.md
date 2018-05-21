---
layout: SpecialLayout
sidebar: auto
---

# lodash 英文

1.  Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

1.  Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

1.  Creates a new array concatenating array with any additional arrays and/or values.

1.  Creates an array of array values not included in the other given arrays using SameValueZerofor equality comparisons. The order and references of result values are determined by the first array. Note: Unlike \_.pullAll, this method returns a new array.

1.  This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result valuesare determined by the first array. The iteratee is invoked with one argument: (value). Note: Unlike _.pullAllBy, this method returns a new array.

1.  This method is like _.difference except that it accepts comparatorwhich is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator isinvoked with two arguments: (arrVal, othVal). Note: Unlike _.pullAllWith, this method returns a new array.

1.  Creates a slice of array with n elements dropped from the beginning.

1.  Creates a slice of array with n elements dropped from the end.

1.  Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

1.  Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

1.  Fills elements of array with value from start up to, but not including, end. Note: This method mutates array.

1.  This method is like \_.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

1.  This method is like \_.findIndex except that it iterates over elements of collection from right to left.

1.  Flattens array a single level deep.

1.  Recursively flattens array.

1.  Recursively flatten array up to depth times.

1.  The inverse of \_.toPairs; this method returns an object composed from key-value pairs.

1.  Gets the first element of array.

1.  Gets the index at which the first occurrence of value is found in arrayusing SameValueZerofor equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.

1.  Gets all but the last element of array.

1.  Creates an array of unique values that are included in all given arrays using SameValueZerofor equality comparisons. The order and references of result values are determined by the first array.

1.  This method is like \_.intersection except that it accepts iterateewhich is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result valuesare determined by the first array. The iteratee is invoked with one argument: (value).

1.  This method is like \_.intersection except that it accepts comparatorwhich is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator isinvoked with two arguments: (arrVal, othVal).

1.  Converts all elements in array into a string separated by separator.

1.  Gets the last element of array.

1.  This method is like \_.indexOf except that it iterates over elements of array from right to left.

1.  Gets the element at index n of array. If n is negative, the nth element from the end is returned.

1.  Removes all given values from array using _.without, this method mutates array. Use _.removeto remove elements from an array by predicate.

1.  This method is like _.pull except that it accepts an array of values to remove. Note: Unlike _.difference, this method mutates array.

1.  This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value). Note: Unlike _.differenceBy, this method mutates array.

1.  This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal). Note: Unlike _.differenceWith, this method mutates array.

1.  Removes elements from array corresponding to indexes and returns an array of removed elements. Note: Unlike \_.at, this method mutates array.

1.  Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked withthree arguments: (value, index, array). Note: Unlike _.filter, this method mutates array. Use _.pullto pull elements from an array by value.

1.  Reverses array so that the first element becomes the last, the second element becomes the second to last, and soon. Note: This method mutates array and is based on Array#reverse.

1.  Creates a slice of array from start up to, but not including, end. Note: This method is used instead of Array#slice to ensure dense arrays are returned.

1.  Uses a binary search to determine the lowest index at which valueshould be inserted into array in order to maintain its sort order.

1.  This method is like \_.sortedIndex except that it accepts iterateewhich is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).

1.  This method is like \_.indexOf except that it performs a binary search on a sorted array.

1.  This method is like \_.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.

1.  This method is like \_.sortedLastIndex except that it accepts iterateewhich is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).

1.  This method is like \_.lastIndexOf except that it performs a binary search on a sorted array.

1.  This method is like \_.uniq except that it's designed and optimized for sorted arrays.

1.  This method is like \_.uniqBy except that it's designed and optimized for sorted arrays.

1.  Gets all but the first element of array.

1.  Creates a slice of array with n elements taken from the beginning.

1.  Creates a slice of array with n elements taken from the end.

1.  Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

1.  Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

1.  Creates an array of unique values, in order, from all given arrays using SameValueZerofor equality comparisons.

1.  This method is like \_.union except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the firstarray in which the value occurs. The iteratee is invoked with one argument: (value).

1.  This method is like \_.union except that it accepts comparator which is invoked to compare elements of arrays. Result values are chosen from the first array in which the value occurs. The comparator is invokedwith two arguments: (arrVal, othVal).

1.  Creates a duplicate-free version of an array, using SameValueZerofor equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determinedby the order they occur in the array.

1.  This method is like \_.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determinedby the order they occur in the array. The iteratee is invoked with one argument: (value).

1.  This method is like \_.uniq except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.The comparator isinvoked with two arguments: (arrVal, othVal).

1.  This method is like \_.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zipconfiguration.

1.  This method is like \_.unzip except that it accepts iteratee to specify how regrouped values should be combined. The iteratee is invoked with the elementsof each group: (...group).

1.  Creates an array excluding all given values using SameValueZerofor equality comparisons. Note: Unlike \_.pull, this method returns a new array.

1.  Creates an array of unique values that is thesymmetric differenceof the given arrays. The order of result values is determined by the order they occur in the arrays.

1.  This method is like \_.xor except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which by which they're compared. The order of result values is determinedby the order they occur in the arrays. The iteratee is invoked with one argument: (value).

1.  This method is like \_.xor except that it accepts comparator which is invoked to compare elements of arrays. The order of result values is determined by the order they occur in the arrays. The comparatoris invoked with two arguments: (arrVal, othVal).

1.  Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the secondof which contains the second elements of the given arrays, and so on.

1.  This method is like \_.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.

1.  This method is like \_.zipObject except that it supports property paths.

1.  This method is like \_.zip except that it accepts iteratee to specify how grouped values should be combined. The iteratee is invoked with the elements ofeach group: (...group).

1.  Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

1.  Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|1. key, collection). Note: This method returns true forempty collections becauseeverything is true of elements of empty collections.

1.  Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection)1. . Note: Unlike \_.remove, this method returns a new array.

1.  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

1.  This method is like \_.find except that it iterates over elements of collection from right to left.

1.  Creates a flattened array of values by running each element in collectionthru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).

1.  This method is like \_.flatMap except that it recursively flattens the mapped results.

1.  This method is like \_.flatMap except that it recursively flattens the mapped results up to depth times.

1.  Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false. Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays.To avoid this behavior use _.forInor _.forOwn for object iteration.

1.  This method is like \_.forEach except that it iterates over elements of collection from right to left.

1.  Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating thekey. The iteratee is invoked with one argument: (value).

1.  Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZerois used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.

1.  Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are providedto each invoked method. If path is a function, it's invoked for, and this bound to, each element in collection.

1.  Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key.The iteratee is invoked with one argument: (value).

1.  Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments: (value, index|key, collection). Many lodash methods are guarded to work as iteratees for methods like _.reject, and _.some. The guarded methods are: ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words

1.  This method is like \_.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc"for descending or "asc" for ascending sort order of corresponding values.

1.  Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).

1.  Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulatoris not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments: (accumulator, value, index|key, collection). Many lodash methods are guarded to work as iteratees for methods like _.reduceRight, and _.transform. The guarded methods are: assign, defaults, defaultsDeep, includes, merge, orderBy, and sortBy

1.  This method is like \_.reduce except that it iterates over elements of collection from right to left.

1.  The opposite of \_.filter; this method returns the elements of collectionthat predicate does not return truthy for.

1.  Gets a random element from collection.

1.  Gets n random elements at unique keys from collection up to the size of collection.

1.  Creates an array of shuffled values, using a version of theFisher-Yates shuffle.

1.  Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyedproperties for objects.

1.  Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|1. key, collection).

1.  Creates an array of elements, sorted in ascending order by the results of running each element in a collectionthru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equalelements. The iteratees are invoked with one argument: (value).

1.  Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).

1.  The opposite of \_.before; this method creates a function that invokes func once it's called n or more times.

1.  Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.

1.  Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.

1.  Creates a function that invokes func with the this binding of thisArgand partials prepended to the arguments it receives. The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments. Note: Unlike native Function#bind, this method doesn't set the "length" property of bound functions.

1.  Creates a function that invokes the method at object[key] with partialsprepended to the arguments it receives. This method differs from _.bind by allowing bound functions to reference methods that may be redefined or don't yet exist. SeePeter Michaux's articlefor more details. The _.bindKey.placeholder value, which defaults to \_ in monolithic builds, may be used as a placeholder for partially applied arguments.

1.  Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining funcarguments, and so on. The arity of func may be specified if func.lengthis not sufficient. The _.curry.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments. Note: This method doesn't set the "length" property of curried functions.

1.  This method is like _.partialRight instead of _.partial. The _.curryRight.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments. Note: This method doesn't set the "length" property of curried functions.

1.  Creates a debounced function that delays invoking func until after waitmilliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debouncedfunction return the result of the last funcinvocation. Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more thanonce during the wait timeout. If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0. See _.debounce and _.throttle.

1.  Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.

1.  Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.

1.  Creates a function that invokes func with arguments reversed.

1.  Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing the result based on the arguments providedto the memoized function. By default, the first argument provided to the memoized function is used as the mapcache key. The funcis invoked with the this binding of the memoized function. Note: The cache is exposed as the cache property on the memoized function. Its creation may be customized by replacing the \_.memoize.Cacheconstructor with one whose instances implement the Mapmethod interface of clear, delete, get, has, and set.

1.  Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.

1.  Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.

1.  Creates a function that invokes func with its arguments transformed.

1.  Creates a function that invokes func with partials prepended to the arguments it receives. This method is like _.bind except it does notalter the this binding. The _.partial.placeholder value, which defaults to \_ in monolithic builds, may be used as a placeholder for partially applied arguments. Note: This method doesn't set the "length" property of partially applied functions.

1.  This method is like _.partial except that partially applied arguments are appended to the arguments it receives. The _.partialRight.placeholder value, which defaults to \_ in monolithic builds, may be used as a placeholder for partially applied arguments. Note: This method doesn't set the "length" property of partially applied functions.

1.  Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument valueat the second index is provided as the second argument, and so on.

1.  Creates a function that invokes func with the this binding of the created function and arguments from start and beyond provided as an array. Note: This method is based on therest parameter.

1.  Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply. Note: This method is based on thespread operator.

1.  Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancelmethod to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether funcshould be invoked on the leading and/or trailing edge of the waittimeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttledfunction return the result of the last func invocation. Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the throttled function is invoked more thanonce during the wait timeout. If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0. See _.throttle and _.debounce.

1.  Creates a function that accepts up to one argument, ignoring any additional arguments.

1.  Creates a function that provides value to wrapper as its first argument. Any additional arguments provided to the function are appended to thoseprovided to the wrapper. The wrapper is invoked with the thisbinding of the created function.

1.  Casts value as an array if it's not one.

1.  Creates a shallow clone of value. Note: This method is loosely based on thestructured clone algorithmand supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values suchas error objects, functions, DOM nodes, and WeakMaps.

1.  This method is like \_.clone except that it recursively clones value.

1.  This method is like \_.cloneWith except that it recursively clones value.

1.  This method is like \_.clone except that it accepts customizer which is invoked to produce the cloned value. If customizer returns undefined, cloning is handled by the method instead. The customizer is invoked with up to four arguments; (value [, index|key, object, stack]).

1.  Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object. Note: This method is equivalent to \_.conforms when source is partially applied.

1.  Performs a SameValueZerocomparison between two values to determine if they are equivalent.

1.  Checks if value is greater than other.

1.  Checks if value is greater than or equal to other.

1.  Checks if value is likely an arguments object.

1.  Checks if value is classified as an Array object.

1.  Checks if value is classified as an ArrayBuffer object.

1.  Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.

1.  This method is like \_.isArrayLike except that it also checks if valueis an object.

1.  Checks if value is classified as a boolean primitive or object.

1.  Checks if value is a buffer.

1.  Checks if value is classified as a Date object.

1.  Checks if value is likely a DOM element.

1.  Checks if value is an empty object, collection, map, or set. Objects are considered empty if they have no own enumerable string keyed properties. Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they havea length of 0. Similarly, maps and sets are considered empty if they have a size of 0.

1.  Performs a deep comparison between two values to determine if they are equivalent. Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps,numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodesare compared by strict equality, i.e. ===.

1.  This method is like \_.isEqual except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with up to six arguments: (objValue, othValue [, index|key, object, other, stack]).

1.  Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.

1.  Checks if value is a finite primitive number. Note: This method is based on Number.isFinite.

1.  Checks if value is classified as a Function object.

1.  Checks if value is an integer. Note: This method is based on Number.isInteger.

1.  Checks if value is a valid array-like length. Note: This method is loosely based on ToLength.

1.  Checks if value is classified as a Map object.

1.  Performs a partial deep comparison between object and source to determine if object contains equivalent property values. Note: This method is equivalent to _.matches when source is partially applied. Partial comparisons will match empty array and empty object sourcevalues against any array or object value, respectively. See _.isEqualfor a list of supported value comparisons.

1.  This method is like \_.isMatch except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, index|key, object, source).

1.  Checks if value is NaN. Note: This method is based on Number.isNaN and is not the same as global isNaN which returns true for undefined and other non-number values.

1.  Checks if value is a pristine native function. Note: This method can't reliably detect native functions in the presence of the core-js package becausecore-js circumvents this kind of detection. Despite multiple requests, the core-js maintainer has made it clear:any attempt to fix the detection will be obstructed. As a result, we're left with little choice but to throwan error. Unfortunately, this also affects packages, likebabel-polyfill, which rely on core-js.

1.  Checks if value is null or undefined.

1.  Checks if value is null.

1.  Checks if value is classified as a Number primitive or object. Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the \_.isFinite method.

1.  Checks if value is thelanguage typeof Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))

1.  Checks if value is object-like. A value is object-like if it's not nulland has a typeof result of "object".

1.  Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.

1.  Checks if value is classified as a RegExp object.

1.  Checks if value is a safe integer. An integer is safe if it's an IEEE-754 double precision number which isn't theresult of a rounded unsafe integer. Note: This method is based on Number.isSafeInteger.

1.  Checks if value is classified as a Set object.

1.  Checks if value is classified as a String primitive or object.

1.  Checks if value is classified as a Symbol primitive or object.

1.  Checks if value is classified as a typed array.

1.  Checks if value is undefined.

1.  Checks if value is classified as a WeakMap object.

1.  Checks if value is classified as a WeakSet object.

1.  Checks if value is less than other.

1.  Checks if value is less than or equal to other.

1.  Converts value to an array.

1.  Converts value to a finite number.

1.  Converts value to an integer. Note: This method is loosely based on ToInteger.

1.  Converts value to an integer suitable for use as the length of an array-like object. Note: This method is based on ToLength.

1.  Converts value to a number.

1.  Converts value to a plain object flattening inherited enumerable string keyed properties of value to own properties of the plain object.

1.  Converts value to a safe integer. A safe integer can be compared and represented correctly.

1.  Converts value to a string. An empty string is returned for nulland undefined values. The sign of -0 is preserved.

1.  Adds two numbers.

1.  Computes number rounded up to precision.

1.  Divide two numbers.

1.  Computes number rounded down to precision.

1.  Computes the maximum value of array. If array is empty or falsey, undefined is returned.

1.  This method is like \_.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

1.  Computes the mean of the values in array.

1.  This method is like \_.mean except that it accepts iteratee which is invoked for each element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value).

1.  Computes the minimum value of array. If array is empty or falsey, undefined is returned.

1.  This method is like \_.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

1.  Multiply two numbers.

1.  Computes number rounded to precision.

1.  Subtract two numbers.

1.  Computes the sum of the values in array.

1.  This method is like \_.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. The iteratee is invoked with one argument: (value).

1.  Clamps number within the inclusive lower and upper bounds.

1.  Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

1.  Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer. Note: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produceunexpected results.

1.  Assigns own enumerable string keyed properties of source objects to the destination object. Source objects areapplied from left to right. Subsequent sources overwrite property assignments of previous sources. Note: This method mutates object and is loosely based on Object.assign.

1.  This method is like \_.assign except that it iterates over own and inherited source properties. Note: This method mutates object.

1.  This method is like \_.assignIn except that it accepts customizerwhich is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizeris invoked with five arguments: (objValue, srcValue, key, object, source). Note: This method mutates object.

1.  This method is like \_.assign except that it accepts customizerwhich is invoked to produce the assigned values. If customizer returns undefined, assignment is handled by the method instead. The customizeris invoked with five arguments: (objValue, srcValue, key, object, source). Note: This method mutates object.

1.  Creates an array of values corresponding to paths of object.

1.  Creates an object that inherits from the prototype object. If a properties object is given, its own enumerable string keyed properties are assigned to the created object.

1.  Assigns own and inherited enumerable string keyed properties of source objects to the destination object for alldestination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values ofthe same property are ignored. Note: This method mutates object.

1.  This method is like \_.defaults except that it recursively assigns default properties. Note: This method mutates object.

1.  This method is like \_.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.

1.  This method is like \_.findKey except that it iterates over elements of a collection in the opposite order.

1.  Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

1.  This method is like \_.forIn except that it iterates over properties of object in the opposite order.

1.  Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

1.  This method is like \_.forOwn except that it iterates over properties of object in the opposite order.

1.  Creates an array of function property names from own enumerable properties of object.

1.  Creates an array of function property names from own and inherited enumerable properties of object.

1.  Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

1.  Checks if path is a direct property of object.

1.  Checks if path is a direct or inherited property of object.

1.  Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

1.  This method is like \_.invert except that the inverted object is generated from the results of running each element of object thru iteratee. The corresponding inverted value of each inverted key is an array of keys responsible for generatingthe inverted value. The iteratee is invoked with one argument: (value).

1.  Invokes the method at path of object.

1.  Creates an array of the own enumerable property names of object. Note: Non-object values are coerced to objects. See theES specfor more details.

1.  Creates an array of the own and inherited enumerable property names of object. Note: Non-object values are coerced to objects.

1.  The opposite of \_.mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).

1.  Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).

1.  This method is like \_.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects intothe destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively.Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequentsources overwrite property assignments of previous sources. Note: This method mutates object.

1.  This method is like \_.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. If customizer returns undefined, merging is handled by the method instead. The customizer is invoked with six arguments: (objValue, srcValue, key, object, source, stack). Note: This method mutates object.

1.  The opposite of _.pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted. Note: This method is considerably slower than _.pick.

1.  The opposite of \_.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for. The predicate is invoked with two arguments: (value, key).

1.  Creates an object composed of the picked object properties.

1.  Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).

1.  This method is like \_.get except that if the resolved value is a function it's invoked with the this binding of its parent object and its result is returned.

1.  Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are createdfor all other missing properties. Use \_.setWith to customize path creation. Note: This method mutates object.

1.  This method is like \_.set except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefinedpath creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject). Note: This method mutates object.

1.  Creates an array of own enumerable string keyed-value pairs for objectwhich can be consumed by \_.fromPairs. If object is a map or set, its entries are returned.

1.  Creates an array of own and inherited enumerable string keyed-value pairs for object which can be consumed by \_.fromPairs. If object is a map or set, its entries are returned.

1.  An alternative to \_.reduce; this method transforms object to a new accumulator object which is the result of running each of its own enumerable string keyed properties thru iteratee, with each invocation potentially mutating the accumulator object. If accumulator is not provided, a new object with the same [[Prototype]] will be used. The iteratee is invoked with four arguments: (accumulator, value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

1.  Removes the property at path of object. Note: This method mutates object.

1.  This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to customize path creation. The updateris invoked with one argument: (value). Note: This method mutates object.

1.  This method is like \_.update except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefinedpath creation is handled by the method instead. The customizer is invoked with three arguments: (nsValue, key, nsObject). Note: This method mutates object.

1.  Creates an array of the own enumerable string keyed property values of object. Note: Non-object values are coerced to objects.

1.  Creates an array of the own and inherited enumerable string keyed property values of object. Note: Non-object values are coerced to objects.

1.  Creates a lodash object which wraps value to enable implicit method chain sequences. Methods that operate on and return arrays, collections,and functions can be chained together. Methods that retrieve a single value or may return a primitive value willautomatically end the chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with _#value. Explicit chain sequences, which must be unwrapped with _#value, may be enabled using _.chain. The execution of chained methods is lazy, that is, it's deferred until _#value is implicitly or explicitly called. Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion is an optimization to mergeiteratee calls; this avoids the creation of intermediate arrays and can greatly reduce the number of iterateeexecutions. Sections of a chain sequence qualify for shortcut fusion if the section is applied to an array anditeratees accept only one argument. The heuristic for whether a section qualifies for shortcut fusion is subjectto change. Chaining is supported in custom builds as long as the \_#value method is directly or indirectly included in the build. In addition to lodash methods, wrappers have Array and String methods. The wrapper Array methods are: concat, join, pop, push, shift, sort, splice, and unshift The wrapper String methods are: replace and split The wrapper methods that support shortcut fusion are: at, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last, map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, and toArray The chainable wrapper methods are: after, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey, castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create, curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight, fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues, matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight, partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith, shuffle, slice, sort, sortBy, splice, spread, tail, take, takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn, toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith, unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap, xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith The wrapper methods that are not chainable by default are: add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop, random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words

1.  Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with \_#value.

1.  This method invokes interceptor and returns value. The interceptor is invoked with one argument; (value). The purpose of this method is to "tap into" a method chain sequence in order to modify intermediate results.

1.  This method is like \_.tap except that it returns the result of interceptor. The purpose of this method is to "pass thru" values replacing intermediate results in a method chain sequence.

1.  Enables the wrapper to be iterable.

1.  This method is the wrapper version of \_.at .

1.  Creates a lodash wrapper instance with explicit method chain sequences enabled.

1.  Executes the chain sequence and returns the wrapped result.

1.  Gets the next value on a wrapped object following the iterator protocol.

1.  Creates a clone of the chain sequence planting value as the wrapped value.

1.  This method is the wrapper version of \_.reverse . Note: This method mutates the wrapped array.

1.  Executes the chain sequence to resolve the unwrapped value.

1.  Converts string to camel case.

1.  Converts the first character of string to upper case and the remaining to lower case.

1.  Deburrs string by converting Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.

1.  Checks if string ends with the given target string.

1.  Converts the characters "&amp;", "&lt;", "&gt;", '"', and "'" in string to their corresponding HTML entities. Note: No other characters are escaped. To escape additional characters use a third-party library like Mathias Bynens's article (under "semi-related fun fact") for more details. When working with HTML you should always quote attribute values to reduce XSS vectors.

1.  Escapes the RegExp special characters "^", "$", "", ".", "\*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.

1.  Converts string to kebab case.

1.  Converts string, as space separated words, to lower case.

1.  Converts the first character of string to lower case.

1.  Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

1.  Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.

1.  Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.

1.  Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used. Note: This method aligns with the ES5 implementation of parseInt.

1.  Repeats the given string n times.

1.  Replaces matches for pattern in string with replacement. Note: This method is based on String#replace .

1.  Converts string to snake case.

1.  Splits string by separator. Note: This method is based on String#split .

1.  Converts string to start case.

1.  Checks if string starts with the given target string.

1.  Creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over lodash's custom builds documentation. For more information on Chrome extension sandboxes see Chrome's extensions documentation.

1.  Converts string, as a whole, to lower case just like String#toLowerCase.

1.  Converts string, as a whole, to upper case just like String#toUpperCase.

1.  Removes leading and trailing whitespace or specified characters from string.

1.  Removes trailing whitespace or specified characters from string.

1.  Removes leading whitespace or specified characters from string.

1.  Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".

1.  The inverse of \_.escape ; this method converts the HTML entities &amp;amp;, &amp;lt;, &amp;gt;, &amp;quot;, and &amp;#39; in string to their corresponding characters. Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like he .

1.  Converts string, as space separated words, to upper case.

1.  Converts the first character of string to upper case.

1.  Splits string into an array of its words.

1.  Attempts to invoke func, returning either the result or the caught error object. Any additional arguments are provided to func when it's invoked.

1.  Binds methods of an object to the object itself, overwriting the existing method. Note: This method doesn't set the "length" property of bound functions.

1.  Creates a function that iterates over pairs and invokes the corresponding function of the first predicate to return truthy. The predicate-function pairs are invoked with the this binding and arguments of the created function.

1.  Creates a function that invokes the predicate properties of source with the corresponding property values of a given object, returning true if all predicates return truthy, else false. Note: The created function is equivalent to \_.conformsTo with source partially applied.

1.  Creates a function that returns value.

1.  Checks value to determine whether a default value should be returned in its place. The defaultValue is returned if value is NaN, null, or undefined.

1.  Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.

1.  This method is like \_.flow except that it creates a function that invokes the given functions from right to left.

1.  This method returns the first argument it receives.

1.  Creates a function that invokes func with the arguments of the created function. If func is a property name, the created function returns the property value for a given element. If func is an array or object, the created function returns true for elements that contain the equivalent source properties, otherwise it returns false.

1.  Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false. Note: The created function is equivalent to _.isMatch with source partially applied. Partial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons.

1.  Creates a function that performs a partial deep comparison between the value at path of a given object to srcValue, returning true if the object value is equivalent, else false. Note: Partial comparisons will match empty array and empty object srcValue values against any array or object value, respectively. See \_.isEqual for a list of supported value comparisons.

1.  Creates a function that invokes the method at path of a given object. Any additional arguments are provided to the invoked method.

1.  The opposite of \_.method ; this method creates a function that invokes the method at a given path of object. Any additional arguments are provided to the invoked method.

1.  Adds all own enumerable string keyed function properties of a source object to the destination object. If object is a function, then methods are added to its prototype as well. Note: Use \_.runInContext to create a pristine lodash function to avoid conflicts caused by modifying the original.

1.  Reverts the \_ variable to its previous value and returns a reference to the lodash function.

1.  This method returns undefined.

1.  Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

1.  Creates a function that invokes iteratees with the arguments it receives and returns their results.

1.  Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.

1.  Creates a function that checks if any of the predicates return truthy when invoked with the arguments it receives.

1.  Creates a function that returns the value at path of a given object.

1.  The opposite of \_.property ; this method creates a function that returns the value at a given path of object.

1.  Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0. Note: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.

1.  This method is like \_.range except that it populates values in descending order.

1.  Create a new pristine lodash function using the context object.

1.  This method returns a new empty array.

1.  This method returns false.

1.  This method returns a new empty object.

1.  This method returns an empty string.

1.  This method returns true.

1.  Invokes the iteratee n times, returning an array of the results of each invocation. The iteratee is invoked with one argument; (index).

1.  Converts value to a property path array.

1.  Generates a unique ID. If prefix is given, the ID is appended to it.

1.  (string): The semantic version number.

1.  (Object): By default, the template delimiters used by lodash are like those in embedded Ruby (ERB) as well as ES2015 template strings. Change the following template settings to use alternative delimiters.

1.  (RegExp): Used to detect data property values to be HTML-escaped.

1.  (RegExp): Used to detect code to be evaluated.

1.  (Object): Used to import variables into the compiled template.

1.  (RegExp): Used to detect data property values to inject.

1.  (string): Used to reference the data object in the template text.

1.  A reference to the lodash function.
