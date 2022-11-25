/**
 * const、letの変数宣言
 */

//  /**
//   * 従来の書き方
//   */
//  var val1 = "var変数";
//  console.log(val1);

//  /**
//   * var変数は上書き可能
//   */
//  val1 = "var変数は上書き";
//  console.log(val1);

// //  var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// // 2015年以降の書き方
// let val2 = "let変数";
// console.log(val2);

// // letも上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能！！
// let val2 = "let変数を再宣言";

// // 変数が上書きされるときはletを使用

// // constは上書きも再宣言も不可能
// const val3 = "const変数";
// console.log(val3);

// // constが上書きできないことを確認
// // val3 = "const上書き";

// // constは再宣言できないことを確認
// const val3 = "const再宣言";

// objectを定義
// // オブジェクトの場合はconstであっても変数を上書きできる

// const val4 = {
//   name: "ahi",
//   age: 26,
// };

// val4.name = "あひ";

// // constで定義したオブジェクトはプロパティの変更追加が可能
// val4.address = "北海道";
// console.log(val4);

// // 配列の場合もconstで変数の変更を確認
// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[0] = "bird";

// val5.push("monkey");

// // reactの開発ではほとんど"const"を使って定義
// // 変更が必要なものは"state"を使う

/**
 * テンプレート文字列　ES2015で追加された昨日
 * 文字列の中にjsの変数を埋め込めるようになった
 */

//  const name = "きたわき";
//  const age = 26;
// //  「私の名前はきたわきです。年齢は26歳です」

// // // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // ES2015以降　テンプレート文字列を使用
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// //  例、渡したstringの引数をそのまま返す
//  function func1(str) {
//    return str;
// //  }
// const func1 = function(str){
//   return str;
// }
//  console.log(func1("ファンク１です"));

// // ES2015以降の機能 アロー関数
// const func2 = (str) => str;

// console.log(func2("ファンク2です"));

// const func3 = (num1, num2) => {
//   return num1+num2;
// }

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "けんし",
//   age: 26,
// }

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['けんし', '26'];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
//  */
// const sayHello =(name="ゲスト")=> console.log(`こんにちは${name}さん`);
// sayHello("けんし");

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1+num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);//配列の中身を順番に処理する

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;//分割代入

// console.log(num1);

// console.log(num2);
// // console.log(...arr3);

// // 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; //配列のコピー
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // // ＝で配列コピーはダメなのか？＝＞だめ。
// // const arr8 = arr4;
// // arr8[0] = 100;
// // console.log(arr8);//→[100,20]
// // console.log(arr4);//→[100,20]こっちも添え字0の箇所が１００でアップデートされている

// const arr9 = [...arr4]; //スプレッド構文で配列のコピー(継承の方が分かりやすい)
// arr9[0] = 100;
// console.log(arr9);//→[100, 20]
// console.log(arr4);//→[10, 20]

/**
 * mapやfilterを使った配列の処理
 *
 */
const nameArr = ["田中", "やまだ", "中田"];
// 従来はfor文
// for (let index = 0; index < nameArr.length; index++){
// console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`${index+1}番目は${name}です`));

// // フィルターReturn文である条件の配列だけ抽出するときに使用
// const numArr = [1,2,3,4,5];

// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name === "中田"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })

// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時：条件がflaseの時
const val1 = 1 > 0 ? 'trueです' : 'falseです';
console.log(val1);
