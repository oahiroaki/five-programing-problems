/**
 * １個ずつ２つのリストをつなげる
 */
function concatListByTurn(list1, list2) {
  var results = [];
  var length = (list1.length > list2.length) ? list1.length : list2.length;
  for (var i = 0; i < length; i++) {
    if (list1.length > i) {
      results.push(list1[i]);
    }
    if (list2.length > i) {
      results.push(list2[i]);
    }
  }
  return results;
}
console.log(concatListByTurn(['a', 'b', 'c'], [1, 2, 3]));
