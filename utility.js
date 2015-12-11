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

// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
	var dest = {};
	var i, name;
	var complexObjs;
	var j, val;
	var props;

	if (complexProps) {
		for (i = 0; i < complexProps.length; i++) {
			name = complexProps[i];
			complexObjs = [];

			// collect the trailing object values, stopping when a non-object is discovered
			for (j = propObjs.length - 1; j >= 0; j--) {
				val = propObjs[j][name];

				if (typeof val === 'object') {
					complexObjs.unshift(val);
				}
				else if (val !== undefined) {
					dest[name] = val; // if there were no objects, this value will be used
					break;
				}
			}

			// if the trailing values were objects, use the merged value
			if (complexObjs.length) {
				dest[name] = mergeProps(complexObjs);
			}
		}
	}

	// copy values into the destination, going from last to first
	for (i = propObjs.length - 1; i >= 0; i--) {
		props = propObjs[i];

		for (name in props) {
			if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
				dest[name] = props[name];
			}
		}
	}

	return dest;
}

