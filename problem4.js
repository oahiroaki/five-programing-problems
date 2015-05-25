/**
 * 数を並び替えて可能な最大の数を返す.
 *
 * 方針:
 * 1.一番大きな桁数の数に合わせて、足りない桁を*で埋めつつ文字列に変更する.
 *   [50, 2, 1, 9] => ['50', '2*', '1*', '9*']
 * 2.文字列をコードの降順でソートする.
 *   ['9*', '50', '2*', '1*']
 * 3.元の数字に戻して繋げる
 *   [9, 50, 2, 1] => 95021
 */
function maxNumberFromList(list) {
  // 桁埋めして文字列に変更
  function toOrder(val, digit) {
    var str = '';
    for (var i = 0; i < digit; i++) {
      str += (val.charAt(i) !== '') ? val.charAt(i) : '*';
    }
    return str;
  }

  var maxDigit = Math.max.apply(null, list.map(function(val) {
    return val.toString().length;
  }));

  return list.map(function(val) {
    return {
      value: val,
      order: toOrder(val + '', maxDigit)
    }
  }).sort(function(a, b) {
    return (b.order > a.order) ? 1 : -1;
  }).map(function(obj) {
    return obj.value;
  }).join('');
}

console.log(maxNumberFromList([50, 2, 1, 9]));
