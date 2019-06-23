// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function firstUpperCase(str) {
    //将字符串转化为小写，并拆分成单词
    str = str.toLowerCase().split(' ');
    //循环将每个单词的首字母大写
    for (var i = 0; i < str.length; i++) {
      //选取首个字符
      var char = str[i].charAt(0);
      //将首字符替换为大写
      str[i] = str[i].replace(char, function(s) {
        return s.toUpperCase();
      })
    }
    //拼合数组
    str = str.join(' ');
    return str;
  }
firstUpperCase(sentence);


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
console.log(money.match(/[\d]+|[\D]+/g)[1]);
