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
