/**
 * フィボナッチ
 */
function fibnacchi(count) {
  var results = [];
  var memo = {}; // メモ化
  for (var i = 0; i < count; i++) {
    results.push((function req(n) {
      if (!memo[n]) {
        memo[n] = (n <= 1) ? n : req(n - 1) + req(n - 2);
      }
      return memo[n];
    })(i));
  }
  return results;
}

console.log(fibnacchi(100));
