'use strict'

//問題数
let qNum = 50; //最後はconst になおす？

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
    question[1] = "２進数 1"+rand11+rand12+rand13+rand14+rand15+rand16+"は、10進数でいくつでしょうか？";
    answer[1] = 64+rand11*32+rand12*16+rand13*8+rand14*4+rand15*2+rand16;

    //２問目
    var rand21=Math.ceil(Math.random()*5)*200; //1-5 *200
    var rand22=Math.floor(Math.random()*4)*10+30; //3-6 *10
    var rand23=Math.floor(Math.random()*4+1)*5; //1-4 *5
    var rand24=rand21*(100+rand22)*(100-rand23)/10000-rand21;
    question[2] = "ある商品について、原価の"+rand22+"%の利益が得られるように定価を設定しました。しかしその商品があまり売れなかったため、後に"+rand23+"%引きで売ったところ、１品あたりの利益は"+rand24+"円になりました。原価はいくらだったでしょうか？";
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
    answer[7]=(rand73-rand71)+"年後";

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
    question[12] ="AさんはB君に"+rand121+"円を渡してTシャツを買ってもらえないか頼みました。次の日、B君が買ってくれたTシャツは実際には"+rand122+"円でした。実は、元々B君はAさんに"+rand123+"円借りていた場合，B君はAさんにいくら返せば２人の貸し借りがなくなるでしょうか？";
    answer[12] =(rand121-rand122-rand123)+"円";
    }else{
    //１２問目-2
    var rand121=Math.floor(Math.random()*10+10)*500; //5000-9500
    var rand122=Math.floor(Math.random()*(rand121/500-5))*500;
    var rand123=Math.floor(Math.random()*4+1)*500; //500-2000
    question[12] ="AさんはB君に"+rand121+"円を渡してTシャツを買ってもらえないか頼みました。次の日、B君が買ってくれたTシャツは実際には"+rand122+"円でした。実は、元々AさんはB君に"+rand123+"円借りていた場合，B君はAさんにいくら返せば２人の貸し借りがなくなるでしょうか？";
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
    question[14]="長さ"+rand141+"mの列車が，長さ"+rand145+"mの橋を完全に渡り終えるま"+rand143+"秒かかったという。列車の時速は何km/hでしょうか？";
    answer[14]=rand144+"km/h";

    //１５問目
    var rand151=Math.floor(Math.random()*5+1)*100; //100-500
    var rand152=Math.floor(Math.random()*5+5)*5; //5-9*5
    var rand153=Math.floor(Math.random()*7+3)*5; //3-9 *5
    var rand154=rand152*36/10;
    var rand155=rand152*rand153+rand151;
    question[15]=rand154+"km/hで走る長さ"+rand151+"mの列車が，長さ"+rand155+"mのトンネルに完全に隠れているのは何秒間でしょうか？";
    answer[15]=rand153+"秒間";

    //１６問目
    var rand161=Math.floor(Math.random()*3+1)*15/10; 
    var rand162=Math.floor(Math.random()*(rand161*20/3-9)+9)*15/100;
    var rand163=Math.floor(Math.random()*6+5)*20; 
    var rand164=Math.round(Math.abs(rand161*100-rand162*100))*(rand163/20)/3/100;
    question[16]="一周"+rand164+"kmの池の周りをP君が時速"+rand161+"km、Q君が時速"+rand162+"kmで同じ方向に歩きます。追い越すのは何分後でしょうか？";
    answer[16]=rand163+"分後";

    //１７問目
    var rand171=Math.floor(Math.random()*3+1)*15/10; 
    var rand172=Math.floor(Math.random()*(rand171*20/3-9)+9)*15/100;
    var rand173=Math.floor(Math.random()*6+5)*20; 
    var rand174=Math.round(Math.abs(rand171*100+rand172*100))*(rand173/20)/3/100;
    question[17]="一周"+rand174+"kmの池の周りをP君が時速"+rand171+"km、Q君が時速"+rand172+"kmで反対方向に歩きます。出会うのは何分後でしょうか？";
    answer[17]=rand173+"分後";

    //１８問目
    var rand181=Math.floor(Math.random()*4+3)*6/10;
    var rand182=Math.floor(Math.random()*5+3)*5/10; 
    var rand183=(rand182-1)*10;
    var rand184=rand181*rand182;
    var rand185=rand184/6;
    question[18]="家から駅まで"+rand185+"kmある。太郎君は時速"+rand181+"kmで駅に向かい，"+rand183+"分後に兄が時速X kmで駅に向かった。その結果、太郎君と兄は同時に駅に着いた。さて兄は時速何km/hで走ったでしょうか？";
    answer[18]=rand184+"km/h";

    //１９問目
    var rand191=Math.floor(Math.random()*3+2);
    var rand192=Math.floor(Math.random()*2+1)+rand191;
    var rand193=(rand191+rand192)/(rand192-rand191)*rand191;
    var rand194=(rand191+rand192)/(rand192-rand191)*rand192;
    question[19]="20kmの道のりを行きは時速"+rand193+"km，帰りは時速"+rand194+"kmで走りました。平均の速さは時速でいくつでしょうか？";
    answer[19]=(rand191+rand193)+"km/h";

    //２０問目
    var rand201=Math.floor(Math.random()*3+1)*12/10;
    var rand202=Math.floor(Math.random()*3+1)*10;
    var rand203=Math.floor(Math.random()*3+4)*10;
    var rand204=(rand202+rand203)/10;
    var rand205=(rand201/1.2)*rand204/10;
    question[20]=rand205+"kmの通のりを行きは"+rand202+"分で帰りは"+rand203+"分で走りました。平均の速さは時速でいくつでしょうか？";
    answer[20]=rand201+"km/h";

    //２１問目
    var rand211=Math.floor(Math.random()*3+1)*2;
    var rand212=Math.floor(Math.random()*2+1)*2+1;
    var rand213=Math.floor(Math.random()*3+1)*5*(rand211+rand212);
    var rand214=rand213*rand211/(rand211+rand212);
    question[21]="A君B君の家は"+rand213+"km離れています。お互いの家に向けて同時に，Aは時速"+rand211+"km，Bは時速"+rand212+"kmで走り出したら，A君は出会うまでに何km歩く必要があるでしょうか？";
    answer[21]=rand214+"km";

    //２２問目
    var rand221=Math.floor(Math.random()*6+1)*2;
    var rand222=Math.floor(Math.random()*3+1)*3;
    var rand223=Math.floor(Math.random()*5+1);
    var rand224=Math.floor(Math.random()*2+2);
    var rand225=Math.floor(Math.random()*2+1);
    var rand226=rand221*rand222*rand223/rand224/rand225
    question[22]=rand221+"人が毎日"+rand222+"時間働くと"+rand223+"日で終わる仕事を，"+rand224+"日間毎日"+rand225+"時間働いて終わらせるためには，何人必要でしょうか？";
    answer[22]=rand226+"人";

    //２３問目
    var rand231=Math.floor(Math.random()*5+6);
    var rand232=Math.floor(Math.random()*10+10);
    var rand233=Math.floor(Math.random()*2+2);
    var rand234=Math.floor(Math.random()*3+3);
    var rand235=Math.ceil((rand231*rand232-rand233*rand234)/10);
    if (Math.floor(Math.random()*2) === 1){
        question[23]="あるプロジェクトを完成させるには，"+rand231+"人で行うと"+rand232+"分かかります。最初に"+rand233+"人で"+rand234+"分仕事をすると，あと10分で終わらせなければいけないことがわかりました。最低でも何人追加する必要があるでしょうか？";
        answer[23]=(rand235-rand233)+'人(答えるのは追加人数なのか働く人数なのかに注意！)';
    }else{
        question[23]="あるプロジェクトを完成させるには，"+rand231+"人で行うと"+rand232+"分かかります。最初に"+rand233+"人で"+rand234+"分仕事をすると，あと10分で終わらせなければいけないことがわかりました。最後の10分は、最低でも何人で仕事をする必要があるでしょうか？";
        answer[23]=(rand235-rand233)+'人(答えるのは追加人数なのか働く人数なのかに注意！)';
    }

    //２４問目
    var rand241=Math.floor(Math.random()*16+5);
    var rand242=Math.floor(Math.random()*16+5);
    var rand243=Math.floor(Math.random()*16+5);
    var rand244=Math.floor(Math.random()*16+5);
    question[24]=(rand241+rand242+rand243+rand244)+"人のクラスでアンケートを取りました。その結果、スマホを持っている人は"+(rand241+rand244)+"人、パソコンを持っている人は"+(rand241+rand242)+"人，どちらも持っている人は"+rand241+"人でした。どちらも持っていないは何人ですか？";
    answer[24]=rand213+"人";

    //２５問目
    var rand251=Math.floor(Math.random()*1+40); //40
    var rand252=Math.floor(Math.random()*11+20);
    var rand253=Math.floor(Math.random()*11+20);
    var rand254=rand252+rand253-rand251;
    question[25]=rand251+"人のクラスでアンケートを取りました。その結果、スマホを持っている人は"+rand252+"人，パソコンを持っている人は"+rand253+"人でした。どちらも持っている人は最低でも何人はいますか？";
    answer[25]=rand254+"人";

    //２６問目
    var rand261=Math.floor(Math.random()*10+3)*5; 
    var rand262=Math.floor(Math.random()*10+3)*5;
    var rand263=Math.floor(Math.random()*3+1)*2000;
    var rand264=rand263*(100-rand261)*(100-rand262)/10000;
    question[26]=rand263+"ページある本があります。A君は月曜日に全体の"+rand261+"%を読みました。そして火曜日には残りのページの"+rand262+"％を読みました。残っているのは何ページでしょうか？";
    answer[26]=rand264+"ページ";

    //２7問目
    var rand271=Math.floor(Math.random()*3+2)*100; 
    var rand272=Math.floor(Math.random()*2+1)*100+rand271;
    var rand273=Math.floor(Math.random()*6)+15;
    var rand274=Math.floor(Math.random()*2+1); 
    var rand275=rand273-(rand271/100*rand274);
    var rand276=rand273+(rand272/100*rand274);
    question[27]=rand276+"%の食塩水"+rand271+"gと，"+rand275+"%の食塩水"+rand272+"gを混ぜたら，濃度は何%になりますか？";
    answer[27]=rand273+"%";

    //２８問目
    var rand281=Math.floor(Math.random()*7+3)*15; 
    var rand282=(Math.floor(Math.random()*4-2)*2+1)*15+rand281; 
    var rand283=(rand281-rand282)/15+12;
    question[28]="西経"+rand281+"°で12時の時，西経"+rand282+"°では何時でしょうか？";
    answer[28]=rand283+"時";

    //２９問目
    var rand291=Math.floor(Math.random()*9+1)*15; 
    var rand292=Math.floor(Math.random()*7+1)*15; 
    var rand293=(rand291+rand292)/15+4;
    question[29]="西経"+rand291+"°で4時の時，東経"+rand292+"°では何時でしょうか？"
    answer[29]=rand293+"時";

    //３０問目
    var rand301=Math.floor(Math.random()*76+25)*5/10; 
    var rand302=Math.floor(Math.random()*2+1)*25000;
    var rand303=rand301*Math.pow(10, 10)/Math.pow(rand302, 2);
    question[30]="面積が"+rand301+"km^2 の施設は，"+rand302+"分の１の縮尺で描いた地図の中では，何 cm^2 であらわされますか？";
    answer[30]=rand303+"cm^2";

    //３１問目
    var rand311=Math.floor(Math.random()*76+25)*5/10; 
    var rand312=Math.floor(Math.random()*2+1)*25000;
    var rand313=rand301*Math.pow(10, 10)/Math.pow(rand312, 2);
    question[31]=rand312+"分の１の縮尺で描いた地図上面積が"+rand313+"cm^2 の施設は，実際には何km^2の面積を持つでしょうか？";
    answer[31]=rand311+"km^2";

    //３２問目
    var rand321=Math.floor(Math.random()*4+6); 
    var rand322=Math.floor(Math.random()*(rand321-3)+3);
    var rand323=Math.floor(Math.random()*3+1);
    var rand324=(rand321+rand322)/2;
    var rand325=rand321*rand323;
    var rand326=rand322*rand323;
    question[32]="静水時に時速"+rand324+"kmの船が川の上流と下流にある２つの町を往復しています。行きは"+rand325+"時間，帰りは"+rand326+"時間かかるとすると，町は何km離れていますか。";
    answer[32]=(rand326*rand321)+"km";

    //３３問目
    var rand332=Math.floor(Math.random()*2+1)*60*21;
    var rand333=Math.floor(Math.random()*3+3)*5/10;
    var rand334=rand332/(2*rand333-1);
    var rand335=rand332/(4*rand333-1);
    var rand336=Math.ceil((rand332/30+1)/rand333);
    question[33]="水槽に一定の水が入っていて，そこへ常に水が一定量入り続けている。そこで2台の排水ポンプを使うと"+rand334+"分で空になりました。また、4台の排水ポンプを使った場合では"+rand335+"分で空になりました。30分以内に空にするには何台必要でしょうか？";
    answer[33]=rand336+"台";

    //３４問目
    var rand341=Math.floor(Math.random()*3+2)*45; 
    var rand342=Math.floor(Math.random()*2+1)*3; 
    var rand343=rand341/5;
    var rand344=rand341/3;
    var rand345=(rand341-rand342*8)/3;
    if (Math.floor(Math.random()*2) === 1){
        question[34]="P君だと一人で"+rand343+"日，Q君だと一人で"+rand344+"日かかる仕事があります。最初に2人で"+rand342+"日間働き，残りをQ君一人でやると，あと何日で終わりますか？";
        answer[34]=rand345+"日";
    }else{
        question[34]="P君だと一人で"+rand343+"日，Q君だと一人で"+rand344+"日かかる仕事があります。最初に2人で"+rand342+"日間働き，残りをQ君一人でやると，全部で何日で終わりますか？";
        answer[34]=(rand345+rand342)+"日";
    }

    //３５問目
    var rand351=Math.floor(Math.random()*11+5);
    if (Math.floor(Math.random()*2) === 1){  
        var rand352=Math.floor(Math.random()*3+7)*5;
    }else{
        var rand352=Math.floor(Math.random()*3+11)*5;
    }
    var rand353=Math.floor(Math.random()*21+50);
    var rand354=(rand352-50)/10*rand351+rand353;
    question[35]="次の時の、A君の点数を求めてください。標準偏差："+rand351+"、偏差値："+rand352+"、平均点："+rand353+"点";
    answer[35]=rand354+"点";

    //３６問目
    var rand361=Math.floor(Math.random()*3+5); //予定 チョコ50
    var rand362=Math.floor(Math.random()*(9-rand361)+rand361+1); //予定 飴x
    var rand363=Math.floor(Math.random()*4+6)*10;
    var rand364=rand361*50+rand362*rand363; //予定
    var rand365=rand362*50+rand361*rand363; //実際
    if (Math.floor(Math.random()*2) === 1){ 
        var rand366="50円のチョコ"
        answer[36]=rand361+"個";
    }else{
        var rand366=rand363+"円の飴"
        answer[36]=rand362+"個";
    }
    question[36]="A君は50円のチョコと"+rand363+"円の飴を買おうと思い、ぴったりの金額である"+rand364+"円持って駄菓子屋へ行きました。しかし、それぞれの買う個数を逆にしてしまったため払ったお金は"+rand365+"円でした。元々の予定では"+rand366+"をいくつ買うつもりだったでしょうか？";

    //３７問目
    var rand371=Math.floor(Math.random()*7+5)*15; 
    var rand372=Math.floor(Math.random()*4+6)*15; 
    var rand373=21-(rand371+rand372)/15;
    question[37]="東経"+rand371+"°で21時の時，西経"+rand372+"°では何時でしょうか？"
    answer[37]=rand373+"時";

    //３８問目
    var rand381=Math.floor(Math.random()*20+10); //10
    var rand382=Math.floor(Math.random()*20*10); //50
    var rand383=rand381+rand382;
    var rand384=rand381*10+rand382*50;
    question[38]="ここには10円玉と50円玉が合計で"+rand383+"枚あります。この硬貨は合計で"+rand384+"円になります。では、10円玉は何枚あるでしょうか？";
    answer[38]=rand381+"枚";

    //３９問目
    var rand391=Math.ceil(Math.random()*5)*200; //1-5 *200 原価
    var rand392=Math.floor(Math.random()*4)*10+30; //3-6 *10 
    var rand393=Math.floor(Math.random()*4+1)*5; //1-4 *5　割引き
    var rand394=rand391*(100+rand392)*(100-rand393)/10000-rand391;
    question[39]="ある商品について、原価の"+rand392+"%の利益が得られるように定価を設定しました。その後"+rand393+"%引きで売ったら，１品あたりの利益は"+rand394+"円だった。定価はいくらでしょうか?";
    answer[39]=(rand391*(100+rand392)/100)+"円";

    //４０問目
    var rand402=Math.floor(Math.random()*2+1)*60*21;
    var rand403=Math.floor(Math.random()*3+3)*5/10;
    var rand404=rand402/(2*rand403-1);
    var rand405=rand402/(4*rand403-1);
    var rand406=Math.floor(Math.random()*3+2)*2; 
    question[40]="最初から一定の水が入っている水槽に，さらに水が毎分"+rand406+"Lずつ入り続けています。そこで2台の排水ポンプを使うと"+rand404+"分で空になりました。また、4台のポンプでは"+rand405+"分で空になりました。ポンプ1台あたり、毎分どれだけ排水できるでしょうか？";
    answer[40]=(rand406*rand403)+"L/分";

    //４１問目
    var rand411=Math.floor(Math.random()*5+15)*10; //Aラムネ値段
    var rand412=Math.floor(Math.random()*2+1)*10; //Cチョコ値段
    var rand413=Math.floor(Math.random()*4+2); //倍
    var rand414=(rand413+1)*10+rand412; //Bキャンディ値段
    var rand415=Math.floor(Math.random()*10+6); //Aラムネ個数
    var rand416=Math.floor(Math.random()*3+1); //Cチョコ個数
    var rand417=rand416*rand413; //Bキャンディ個数
    var rand418=rand411*rand415+rand414*rand417+rand412*rand416;
    var rand419=Math.floor(Math.random()*3);
    if (rand419 === 0){ 
        var rand410="ラムネ";
        answer[41]=rand415+"個";
    }else if(rand419 === 1){
        var rand410="キャンディ";
        answer[41]=rand417+"個";
    }else{
        var rand410="チョコ";
        answer[41]=rand416+"個";
    }
    question[41]=rand411+"円のラムネ，"+rand414+"円のキャンディ，"+rand412+"円のチョコを合計"+(rand415+rand416+rand417)+"個を"+rand418+"円で買いました。キャンディをチョコの"+rand413+"倍の数だけ買った時，"+rand410+"はいくつ買いましたか？";

    //４２問目
    var rand421=Math.floor(Math.random()*17+4); 
    var rand422=Math.floor(Math.random()*3+1)*120;
    var rand423=rand421*rand422/100;
    var rand424=rand422-rand423;
    if (Math.floor(Math.random()*2) === 1){ 
        answer[42]=rand423+"g";
        var rand425="食塩"
    }else{
        answer[42]=rand424+"g";
        var rand425="水"
    }
    question[42]=rand421+"%の食塩水"+rand422+"gに含まれる"+rand425+"は何gでしょうか。";

    //４３問目
    var rand431=Math.floor(Math.random()*6+4); 
    var rand432=Math.floor(Math.random()*4+2)*45;
    var rand433=rand432/90*(10-rand431);
    question[43]="濃度"+rand431+"％の食塩水"+rand432+"gに食塩を何gか混ぜ、濃度10％の食塩水を作りました。食塩は何g混ぜたでしょうか";
    answer[43]=rand433+"g";

    //４４問目
    var rand441=Math.floor(Math.random()*6+15); 
    var rand442=Math.floor(Math.random()*(rand441-12)+10);
    var rand443=Math.floor(Math.random()*6+5)*10; //じゃがいも値段
    var rand444=Math.floor((Math.random()*( ( (rand441-1)*rand443/10 + 1 ) - (rand442+1)*rand443/10 ) ) + (rand442+1)*rand443/10)*10 //所持金
    var rand445=rand443*rand441-rand444;
    var rand446=rand444-rand443*rand442;
    question[44]="じゃがいもを"+rand441+"コ買おうとしたら"+rand445+"円足りませんでした。そのため，"+rand442+"個買ったら，"+rand446+"円あまりました。持ってるお金はいくらでしたでしょうか？";
    answer[44]=rand444+"円";

    //４５問目
    var rand451=Math.floor(Math.random()*5+11); 
    if(rand451===11) var rand452=89;
    else if(rand451===12) var rand452=144;
    else if(rand451===13) var rand452=233;
    else if(rand451===14) var rand452=377;
    else if(rand451===15) var rand452=610;
    question[45]="次の数列の"+rand451+"番目はいくつでしょうか？　1,1,2,3,5,8,,,";
    answer[45]=rand452;

    //４６問目
    var rand461=Math.floor(Math.random()*3+3)*10; 
    var rand462=Math.floor(Math.random()*4+2)*100;
    var rand463=Math.floor(Math.random()*21+20); 
    var rand464=rand462*6/100;
    var rand465=(rand462-rand461)*rand463;
    question[46]="静水時の速さが時速"+rand464+"kmの船があります。川の流れの速さが分速"+rand461+"mのとき、この船が"+rand465+"m上るのにかかる時間は何分でしょう。";
    answer[46]=rand463+"分";

    //４７問目
    var rand477=Math.floor(Math.random()*4+6); //比率差
    var rand478=Math.floor(Math.random()*3+2); //自転車速度比率
    var rand479=rand478+rand477; //電車速度比率   
    var rand471=Math.floor(Math.random()*11+10)*10; //自転車速度
    var rand472=rand471*rand479/rand478; //電車速度
    var rand473=Math.floor(Math.random()*2+1)*rand477*rand478; //すれちがい間隔
    var rand474=(rand479+rand478)/(rand479-rand478)*rand473;  //追い越され間隔
    var rand475=rand472*6/100;

    question[47]="ある線路に沿った道路を、A君は分速"+rand471+"mの速さの自転車で走っています。線路には電車が両方向に等間隔で走っています。その時、A君は"+rand474+"分おきに電車に追いこされ，"+rand473+"分おきに電車とすれちがいました。電車の速さは時速何kmでしょうか。";
    answer[47]=rand475+"km/h";

    //４８問目
    var rand481=Math.floor(Math.random()*3+1)*2+1;
    var rand480=Math.floor(Math.random()*2+1);
    var rand482=rand480*rand481; //くじ本数
    var rand483=Math.floor(Math.random()*(rand481-1)+1);
    var rand484=rand480*rand483; //あたり本数
    var rand485=rand481*rand481; //分母
    var rand486=rand483*(rand481-rand483)*2; //分子
    question[48]=rand482+"本のうち"+rand484+"本にあたりがあるくじがある。最初にAさんがくじをひき結果を見てくじを戻し、その後にBさんがくじを引いた。この時、どちらか１人のみがあたりを引いた確率はいくつでしょうか？";
    answer[48]=rand486+"/"+rand485;

    //４９問目
    var rand491=Math.floor(Math.random()*6+3);
    var rand492=Math.floor((Math.random()*( ( rand491 ) - 1 ) ) + 1);
    var rand493=rand491; //分子
    var rand494=rand492; //分母
    var rand495=1;
    var rand496=1;
    for (let j=1;j<=rand492;j++){
        var rand495=rand495*rand493;
        var rand496=rand496*rand494;
        rand493--;
        rand494--;
    }
    var rand498=Math.pow( 2, rand491 ); 
    var rand497=rand495/rand496/rand498;
    var srcr = rand497.toString().split(".");
    var bo49 = Math.pow( 10, srcr[1].length );
    var shi49 = parseInt( srcr[0] ) * bo49 + parseInt( srcr[1] ) ;
    var flag49;
    do{
    flag49 = false;
    for( var i = shi49; i > 1; i-- ){
    if( shi49%i == 0 && bo49%i == 0 ){
    shi49/=i; bo49/=i;
    flag49 = true;
    }
    }
    }while( flag49 );
    var rand490=shi49 + "/" + bo49 ;
    question[49]="コイン"+rand491+"枚を投げた時、"+rand492+"枚が表である確率はいくつでしょうか？";
    answer[49]=rand490;

   //５０問目
   var rand501=Math.floor(Math.random()*50+51); 
   var rand502=(1+rand501)*rand501/2;
   question[50]="一回目の操作では１段目に石を１つ置く。二回目の操作では、２段目に石を２つ置く。三回目の操作では、３段目に石を３つ置く。このようにして同様の操作を行っていく場合を考える。では、"+rand501+"回の操作をし終わった時、石は合計でいくつ置いたでしょうか？";
   answer[50]=rand502+"個";

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
    questionRefresh();
    for(let counter_b=1;counter_b<=qNum;counter_b++){
        randQNumber=randomQuestionArray[counter_b-1];
        const createp_que=document.createElement("p");
        const createp_ans=document.createElement("p");
        var qText = document.createTextNode(question[randQNumber]);
        var aText = document.createTextNode(answer[randQNumber]);
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