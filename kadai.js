//kadai8.html
function clickEvent1() {
    alert('area = 15 pop = 86 dens = 5.73 name = "sagami"')
}

function clickEvent2() {
    alert('試運転')
}

function clickEvent3() {
    //putは誤りを格納して出力。Emphasisは比較結果をHTML上に出力
    var textarea, put = [], Emphasis = [];
    //回答を配列内に格納
    //サーバーに模範解答を置いてそれを利用できればいいが技術力が足りない
    //FileReader('pae0801-finished.c');
    var answer = ['#include <stdio.h>']
    answer.push('#define NLEN 14');
    answer.push('#define Lsize (sizeof(list) / sizeof(struct town))');
    answer.push('struct town {');
    answer.push('  int area, pop;');
    answer.push('  char name[NLEN + 1];');
    answer.push('};');
    answer.push('double getDens(struct town t) { return (double)t.pop / t.area; }');
    answer.push('void printTown(struct town t) {');
    answer.push('  printf("area=%d pop=%d ", t.area, t.pop);');
    answer.push('  printf("dens=%4.2f ", getDens(t));');
    answer.push('  printf("name=%s¥n", t.name);');
    answer.push('}');
    answer.push('int main(void) {');
    answer.push('  struct town list[] = {');
    answer.push('      {33, 22, "honmachi"}, {30, 17, "kishine"},  {40, 18, "kosugi"},');
    answer.push('      {12, 11, "kouen"},    {27, 35, "fujisawa"}, {50, 11, "kouza"},');
    answer.push('      {17, 90, "musashi"},  {36, 13, "oono"},     {40, 53, "ootsuka"},');
    answer.push('      {15, 86, "sagami"},   {20, 67, "shibuya"},  {34, 15, "uehara"},');
    answer.push('      {18, 60, "yoyogi"}};');
    answer.push('  int i, mi;');
    answer.push('  double d, md;');
    answer.push('  mi = 0;');
    answer.push('  md = getDens(list[0]);');
    answer.push('  for (i = 0; i < Lsize; i++) {');
    answer.push('    d = getDens(list[i]);');
    answer.push('    if (d > md) {');
    answer.push('      md = d;');
    answer.push('      mi = i;');
    answer.push('    }');
    answer.push('  }');
    answer.push('  printTown(list[mi]);');
    answer.push('  return 0;');
    answer.push('}');

    textarea = document.form.text.value;
    var msg = document.getElementById("msg");
    var result = document.getElementById("result");
    textarea = textarea.split("\n"); //改行を改行タグに置き換える
    //1行ずつ比較していく
    for (var i = i2 = space = 0; i < textarea.length || i < answer.length; i++) {
        var getarea = textarea[i].replace(/\s+/g, ""); //空欄削除
        if (getarea == "") { //空行飛ばす
            space++;
            continue;
        }

        for (var ansi = 0; ansi < textarea.length || ansi < answer.length; ansi++) {
            answer[ansi] = (String(answer[ansi])).replace(/\s+/g, "");
            if (getarea == answer[ansi] && (-1 <= i - ansi && i - ansi <= 1)) {
                Emphasis[i] = Plus(textarea[i]);
                break;
            } else if (getarea != answer[ansi] && (ansi == (textarea.length - 1) || ansi == (answer.length - 1))) {
                textarea[i] = Plus(textarea[i]);
                Emphasis[i] = '<strong>' + textarea[i] + '</strong>';
                put[i2] = (i + 1) + '行:' + textarea[i];

                /*1文字ずつ読み込んでいく。return0;ならreturnまで読み込んだ後に次があっているか、存在してるか*/
                var phrase = getarea.split("");
                var duo = '';
                for (var phrasei = 0; phrasei < phrase.length; phrasei++) {
                    duo = duo + phrase[phrasei];
                    if (duo == 'return') {
                        if (phrase[phrasei + 1] == '' || phrase[phrasei + 1] == ';') {
                            put[i2] = (i + 1) + '行:' + textarea[i] + '//返り値がありません'
                            break;
                        }
                    }
                }

                i2++;
                break;
            }
        }
    }

    //出力
    //CSSで間違っている箇所を赤く強調する
    result.innerHTML = Emphasis.join("<br>");
    msg.innerHTML = put.join("<br>");
}