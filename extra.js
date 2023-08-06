/*Emphasis[i]やtextarea[i]に格納する前に特殊文字を置き換える*/
function Plus(textarea) {
    //1文字ずつwordとanswordにsplit関数で格納
    var word = textarea.split("");

    //wordの特殊文字を変換しwordhouseに戻す
    var wordhouse = '';
    for (var w = 0; w < word.length; w++) {
        switch (word[w]) {
            case '<': word[w] = '&lt;'; break;
            case '>': word[w] = '&gt;'; break;
            case '&': word[w] = '&amp;'; break;
        }
        wordhouse = wordhouse + word[w];
    }
    return wordhouse;
}

//回答開示時間を調整する
function Answer() {
    now = new Date();
    month = now.getMonth() + 1;
    hour = now.getHours();
    if ((month >= 4) && (hour >= 0)) {
        window.open('answer.html', '_brank', 'noreferrer');
    } else {
        alert('現時刻では表示できません')
    }
}