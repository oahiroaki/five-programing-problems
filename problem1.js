function sumByForLoop(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumByWhileLoop(list) {
  var sum = 0, i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumByRecursion(list) {
  function sum(s, l) {
    if (l.length === 0) {
      return s;
    }
    var v = l.pop()
    return sum(s + v, l);
  }
  return sum(0, list);
}

var list = [1, 2, 3, 4, 5];
console.log('Forループで: ' + sumByForLoop(list));
console.log('Whileループで: ' + sumByWhileLoop(list));
console.log('再帰で: ' + sumByRecursion(list));
