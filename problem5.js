/**
 * 1,2,…,9の数をこの順序で、”+”、”-“、またはななにもせず
 * 結果が100となるあらゆる組合せを出力するプログラムを記述する.
 *
 * 方針:
 *   ツリーを使って全部の組み合わせを総当たりで試す
 */
(function() {
  var sourceNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var operations = ['+', '-', ''] // 操作の一覧 ※''は何もしない
  var results = [];

  /*
   * ツリー生成して解く
   */
  function solve() {
    // ルート
    var tree = {
      operations: [], // 操作を保持
      nodes: [] // 子ノード
    };
    // 最初の数字を入れておく
    tree.operations.push(sourceNumbers.shift());
    walk(tree, sourceNumbers);
  }

  /**
   * 再帰でツリーに全組み合わせをセットする
   * @param node 対象のノード
   * @param numbers 残っている数字
   */
  function walk(node, numbers) {
    if (numbers.length === 0) {
      evaluteOperations(node);
      return;
    }
    var number = numbers[0]; // 対象の数字
    operations.forEach(function(operation) {
      // 操作と数字を追加して新しいノードを作る
      var newNode = {
        operations: node.operations.concat([operation, number]),
        nodes: []
      };
      walk(newNode, numbers.slice(1)); // 今作ったノード対象にして再帰
      node.nodes.push(newNode); // 結果を子ノードに登録
    })
  }

  /**
   * 操作の結果が100になるやつだけ選ぶ
   * @param node 対象ノード
   */
  function evaluteOperations(node) {
    if (eval(node.operations.join('')) === 100) {
      results.push(node.operations.join('') + " = 100");
    }
  }

  solve();

  results.forEach(function(result) {
    console.log(result);
  });
})();
