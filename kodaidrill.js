'use strict'

//問題数
let qNum = 20; //最後はconst になおす？

//問題数の大きさの配列用意
let questionArray= [];
for(let counter_e=1;counter_e<=qNum;counter_e++){
    questionArray.push(counter_e);
}

//問題の数だけ、divを生成
const mondai =document.getElementById("mondai");
for(let counter_a=1;counter_a<=qNum;counter_a++){
    //各問div
    const creatediv = document.createElement("div");
    creatediv.id='mondai'+ counter_a;
    mondai.appendChild(creatediv);
    //中にそれぞれ３つdiv作成
    const mondai_content =document.getElementById('mondai'+ counter_a);
    //1
    const creatediv_title = document.createElement("div");
    creatediv_title.id ='qTitle'+ counter_a;
    creatediv_title.className='qTitle';
    mondai_content.appendChild(creatediv_title);
    //2
    const creatediv_que = document.createElement("div");
    creatediv_que.id ='question'+ counter_a;
    creatediv_que.className='question';
    mondai_content.appendChild(creatediv_que);
    //3
    const creatediv_ans = document.createElement("div");
    creatediv_ans.id ='answer'+ counter_a;
    creatediv_ans.className='answer';
    mondai_content.appendChild(creatediv_ans);

    //qTitleに「x問目」と記入
    const createh4_qTitle=document.createElement("h4");
    const tText = document.createTextNode(counter_a+"問目");
    createh4_qTitle.appendChild(tText);
    const qTitleId= document.getElementById('qTitle'+counter_a);
    qTitleId.appendChild(createh4_qTitle);
}

//問題一覧

let question=["問題"];
let answer=["答え"];

function questionRefresh() {

    //１問目
    var rand11=Math.floor(Math.random()*2); //0-1
    var rand12=Math.floor(Math.random()*2); //0-1
    var rand13=Math.floor(Math.random()*2); //0-1
    var rand14=Math.floor(Math.random()*2); //0-1
    var rand15=Math.floor(Math.random()*2); //0-1
    var rand16=Math.floor(Math.random()*2); //0-1
    question[1] = "２進数 1"+rand11+rand12+rand13+rand14+rand15+rand16+"は、10進数でいくつでしょうか？"
    answer[1] = 64+rand11*32+rand12*16+rand13*8+rand14*4+rand15*2+rand16;

    //２問目
    var rand21=Math.ceil(Math.random()*5)*200; //1-5 *200
    var rand22=Math.floor(Math.random()*4)*10+30; //3-6 *10
    var rand23=Math.floor(Math.random()*4+1)*5; //1-4 *5
    var rand24=rand21*(100+rand22)*(100-rand23)/10000-rand21
    question[2] = "ある商品について、原価の"+rand22+"%の利益が得られるように定価を設定しました。しかしその商品があまり売れなかったため、後に"+rand23+"%引きで売ったところ、１品あたりの利益は"+rand24+"円になりました。原価はいくらだったでしょうか？"
    answer[2] =rand21+"円";

    //３問目
    var rand31=Math.floor(Math.random()*2); //0-1
    var rand32=Math.floor(Math.random()*2); //0-1
    var rand33=Math.floor(Math.random()*2); //0-1
    var rand34=Math.floor(Math.random()*2); //0-1
    var rand35=Math.floor(Math.random()*2); //0-1
    var rand36=Math.floor(Math.random()*2); //0-1
    var rand37=64+rand31*32+rand32*16+rand33*8+rand34*4+rand35*2+rand36;
    question[3] = "10進数 "+ rand37 +"は、2進数でいくつでしょうか？";
    answer[3] ="1"+rand31+rand32+rand33+rand34+rand35+rand36;

    //４問目
    var rand41=Math.floor(Math.random()*3); //0-2
    var rand42=Math.floor(Math.random()*3); //0-2
    var rand43=Math.floor(Math.random()*3); //0-2
    var rand44=Math.floor(Math.random()*3); //0-2
    var rand45=Math.floor(Math.random()*3); //0-2
    var rand46=Math.floor(Math.random()*3); //0-2
    var rand47=729+rand41*243+rand42*81+rand43*27+rand44*9+rand45*3+rand46;
    question[4] = "10進数 "+ rand47 +"は、3進数でいくつでしょうか？";
    answer[4] ="1"+rand41+rand42+rand43+rand44+rand45+rand46;

    //５問目
    var rand51=Math.floor(Math.random()*3); //0-2
    var rand52=Math.floor(Math.random()*3); //0-2
    var rand53=Math.floor(Math.random()*3); //0-2
    var rand54=Math.floor(Math.random()*3); //0-2
    var rand55=Math.floor(Math.random()*3); //0-2
    var rand56=Math.floor(Math.random()*3); //0-2
    question[5] = "3進数 1"+rand51+rand52+rand53+rand54+rand55+rand56+"は、10進数でいくつでしょうか？"
    answer[5] = 729+rand51*243+rand52*81+rand53*27+rand54*9+rand55*3+rand56;

    //６問目-1
    if (Math.floor(Math.random()*2) === 1){
    var rand61=Math.floor(Math.random()*4+1); //1-4
    var rand62=Math.floor(Math.random()*5); //0-4
    var rand63=Math.floor(Math.random()*5); //0-4
    var rand64=Math.floor(Math.random()*5); //0-4
    var rand65=rand61*125+rand62*25+rand63*5+rand64;
    question[6] = "10進数 "+ rand65 +"は、5進数でいくつでしょうか？";
    answer[6] =""+rand61+rand62+rand63+rand64;
    }else{
    //６問目-2
    var rand61=Math.floor(Math.random()*4+1); //1-4
    var rand62=Math.floor(Math.random()*5); //0-4
    var rand63=Math.floor(Math.random()*5); //0-4
    var rand64=Math.floor(Math.random()*5); //0-4
    question[6] = "5進数"+rand61+rand62+rand63+rand64+"は、10進数でいくつでしょうか？"
    answer[6] = rand61*125+rand62*25+rand63*5+rand64;
    }

    //７問目
    var rand71=Math.floor(Math.random()*5+1); //1-5
    var rand72=Math.floor(Math.random()*3+3); //3-5
    var rand73=Math.floor(Math.random()*6+10); //10-15
    var rand74=(rand72-1)*rand73;
    question[7]="現在母が"+(rand71+rand74)+"歳，娘が"+rand71+"歳である。母の年齢が娘の"+rand72+"倍になるのは，何年後でしょうか？";
    answer[7]=(rand73-rand71)+"年後"

    //８問目
    var rand80=Math.floor(Math.random()*5+12); //12-16
    var rand81=Math.floor(Math.random()*Math.pow(rand80, 2)*8+Math.pow(rand80, 2)); //256-
    var rand82=rand81.toString(rand80);
    question[8] = "10進数 "+ rand81 +"は、"+rand80+"進数でいくつでしょうか？";
    answer[8] =rand82;

    //９問目
    var rand90=Math.floor(Math.random()*5+12); //12-16
    var rand91=Math.floor(Math.random()*Math.pow(rand90, 2)*8+Math.pow(rand90, 2)); //256-
    var rand92=rand91.toString(rand90);
    question[9] = "10進数 "+ rand91 +"は、"+rand90+"進数でいくつでしょうか？";
    answer[9] =rand92;

    //１０問目
    var rand100=Math.floor(Math.random()*5+12); //12-16
    var rand101=Math.floor(Math.random()*Math.pow(rand100, 2)*8+Math.pow(rand100, 2)); //256-
    var rand102=rand101.toString(rand100);
    question[10] = rand100+"進数 "+ rand102 +"は、10進数でいくつでしょうか？";
    answer[10] =rand101;

    //１１問目
    var rand110=Math.floor(Math.random()*5+12); //12-16
    var rand111=Math.floor(Math.random()*Math.pow(rand110, 2)*8+Math.pow(rand110, 2)); //256-
    var rand112=rand111.toString(rand110);
    question[11] = rand110+"進数 "+ rand112 +"は、10進数でいくつでしょうか？";
    answer[11] =rand111;

    //１２問目-1
    if (Math.floor(Math.random()*2) === 1){
    var rand121=Math.floor(Math.random()*10+10)*500; //5000-9500
    var rand122=Math.floor(Math.random()*(rand121/500-5))*500;
    var rand123=Math.floor(Math.random()*4+1)*500; //500-2000
    question[12] ="PさんがQ君に"+rand121+"円を渡してカバンを買ってもらった所，Qさんが買ってくれたカバンは実際には"+rand122+"円でした。元々Q君はPさんに"+rand123+"円借りていた場合，Q君はPさんにいくら返せば貸し借りがなくなるでしょうか？";
    answer[12] =(rand121-rand122-rand123)+"円";
    }else{
    //１２問目-2
    var rand121=Math.floor(Math.random()*10+10)*500; //5000-9500
    var rand122=Math.floor(Math.random()*(rand121/500-5))*500;
    var rand123=Math.floor(Math.random()*4+1)*500; //500-2000
    question[12] ="PさんがQ君に"+rand121+"円を渡してカバンを買ってもらった所，Qさんが買ってくれたカバンは実際には"+rand122+"円でした。元々PさんはQ君に"+rand123+"円借りていた場合，Q君はPさんにいくら返せば貸し借りがなくなるでしょうか？";
    answer[12] =(rand121-rand122+rand123)+"円";
    }

    //１３問目
    var rand131=Math.floor(Math.random()*5+1)*100; //100-500
    var rand132=Math.floor(Math.random()*5+5)*5; //5-9*5
    var rand133=Math.floor(Math.random()*5+5)*5; //5-9 *5
    var rand134=rand132*36/10;
    var rand135=rand132*rand133-rand131;
    question[13]="時速"+rand134+"kmで走る長さ"+rand131+"mの列車が，長さ"+rand135+"mのトンネルに入ってから完全に出るまで何秒かかるでしょうか？";
    answer[13]=rand133+"秒";

    //１４問目
    var rand141=Math.floor(Math.random()*5+1)*100; //100-500
    var rand142=Math.floor(Math.random()*5+5)*5; //5-9*5
    var rand143=Math.floor(Math.random()*5+5)*5; //3-9 *5
    var rand144=rand142*36/10;
    var rand145=rand142*rand143-rand141;
    question[14]="長さ"+rand141+"mの列車が，長さ"+rand145+"mの橋を完全に渡り終えるま"+rand143+"秒かかったという。列車の時速は何km/hでしょうか？"
    answer[14]=rand144+"km/h"

    //１５問目
    var rand151=Math.floor(Math.random()*5+1)*100; //100-500
    var rand152=Math.floor(Math.random()*5+5)*5; //5-9*5
    var rand153=Math.floor(Math.random()*7+3)*5; //3-9 *5
    var rand154=rand152*36/10;
    var rand155=rand152*rand153+rand151;
    question[15]=rand154+"km/hで走る長さ"+rand151+"mの列車が，長さ"+rand155+"mのトンネルに完全に隠れているのは何秒間でしょうか？"
    answer[15]=rand153+"秒間"

    //１６問目
    var rand161=Math.floor(Math.random()*3+1)*15/10; 
    var rand162=Math.floor(Math.random()*(rand161*20/3-9)+9)*15/100;
    var rand163=Math.floor(Math.random()*6+5)*20; 
    var rand164=Math.round(Math.abs(rand161*100-rand162*100))*(rand163/20)/3/100;
    question[16]="一周"+rand164+"kmの池の周りをP君が時速"+rand161+"km、Q君が時速"+rand162+"kmで同じ方向に歩きます。追い越すのは何分後でしょうか？"
    answer[16]=rand163+"分後"

    //１７問目
    var rand171=Math.floor(Math.random()*3+1)*15/10; 
    var rand172=Math.floor(Math.random()*(rand171*20/3-9)+9)*15/100;
    var rand173=Math.floor(Math.random()*6+5)*20; 
    var rand174=Math.round(Math.abs(rand171*100+rand172*100))*(rand173/20)/3/100;
    question[17]="一周"+rand174+"kmの池の周りをP君が時速"+rand171+"km、Q君が時速"+rand172+"kmで反対方向に歩きます。出会うのは何分後でしょうか？"
    answer[17]=rand173+"分後" 

    //１８問目
    var rand181=Math.floor(Math.random()*4+3)*6/10;
    var rand182=Math.floor(Math.random()*5+3)*5/10; 
    var rand183=(rand182-1)*10;
    var rand184=rand181*rand182;
    var rand185=rand184/6;
    question[18]="家から駅まで"+rand185+"kmある。太郎君は時速"+rand181+"kmで駅に向かい，"+rand183+"分後に兄が時速X kmで駅に向かった。その結果、太郎君と兄は同時に駅に着いた。さて兄は時速何km/hで走ったでしょうか？"
    answer[18]=rand184+"km/h" 

    //１９問目
    var rand191=Math.floor(Math.random()*3+2);
    var rand192=Math.floor(Math.random()*2+1)+rand191;
    var rand193=(rand191+rand192)/(rand192-rand191)*rand191;
    var rand194=(rand191+rand192)/(rand192-rand191)*rand192;
    question[19]="20kmの道のりを行きは時速"+rand193+"km，帰りは時速"+rand194+"kmで走りました。平均の速さは時速でいくつでしょうか？"
    answer[19]=(rand191+rand193)+"km/h" 

    //２０問目
    var rand201=Math.floor(Math.random()*3+1)*12/10;
    var rand202=Math.floor(Math.random()*3+1)*10;
    var rand203=Math.floor(Math.random()*3+4)*10;
    var rand204=(rand202+rand203)/10;
    var rand205=(rand201/1.2)*rand204/10;
    question[20]=rand205+"kmの通のりを行きは"+rand202+"分で帰りは"+rand203+"分で走りました。平均の速さは時速でいくつでしょうか？"
    answer[20]=rand201+"km/h" 


    //qNum = 20;
    console.log(question[qNum],answer[qNum]);
}

//シャッフル用
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}  

//問題生成
let randQNumber;
let randomQuestionArray =[];
function seisei(){
    randomQuestionArray=shuffle(questionArray);
    for(let counter_b=1;counter_b<=qNum;counter_b++){
        randQNumber=randomQuestionArray[counter_b-1];
        const createp_que=document.createElement("p");
        const createp_ans=document.createElement("p");
        questionRefresh();
        const qText = document.createTextNode(question[randQNumber]);
        const aText = document.createTextNode(answer[randQNumber]);
        createp_que.appendChild(qText);
        createp_ans.appendChild(aText);
        const questionNumId =document.getElementById("question"+counter_b);
        const answerNumId =document.getElementById("answer"+counter_b);
        questionNumId.appendChild(createp_que);
        answerNumId.appendChild(createp_ans);
    }
}
seisei();

//更新ボタン
function koushin(){
    //既存を削除
    for(let counter_c=1;counter_c<=qNum;counter_c++){
        const questionRemove =document.getElementById("question"+counter_c);
        questionRemove.removeChild(questionRemove.firstChild);
        const answerRemove =document.getElementById("answer"+counter_c);
        answerRemove.removeChild(answerRemove.firstChild);
    }
    //新たに生成
    seisei();
    
    //答え表示リセット
    var answersw_check=document.getElementById("answer1");
    if(answersw_check.classList.contains("answerhidden_off")){
        for(let counter_f=1;counter_f<=qNum;counter_f++){
            var answerCN = document.getElementById('answer'+counter_f); 
            answerCN.classList.toggle('answerhidden_off');
        }
    }
}

//答え表示ボタン
function answer_onoff(){
    for(let counter_f=1;counter_f<=qNum;counter_f++){
        var answerCN = document.getElementById('answer'+counter_f); 
        answerCN.classList.toggle('answerhidden_off');
    }
　}