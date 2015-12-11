// Some useful functions and snippets

// returns elements in that are in a but not in b
// subtractAsSets([4, 5, 6], [4, 5, 7]) => [6]
var subtractAsSets = function(a, b) {
    var result = [], inB = {}, i, n;
    for (i = 0, n = b.length; i < n; i++) {
        inB[b[i]] = true;
    }
    for (i = 0, n = a.length; i < n; i++) {
        if (!inB[a[i]]) {
            result.push(a[i]);
        }
    }
    return result;
};
  
	// Checks to see if an obj exists in an Array
containsObject: function(obj, array){
	for (var i = 0; i < array.length; i++){
		if (array[i] == obj){
			return true;
		}
	}
	return false;
},
// Copy of Ext 4 'replace' function
insert: function(array, index, removeCount, insert){
		if (insert && insert.length) {
			if (index < array.length) {
				array.splice.apply(array, [index, removeCount].concat(insert));
			} else {
				array.push.apply(array, insert);
			}
		} else {
			array.splice(index, removeCount);
		}
		return array;
},
// Concat two arrays
extend: function(array1, array2){
	array2.forEach(function(v){
		array1.push(v);
	});
}
