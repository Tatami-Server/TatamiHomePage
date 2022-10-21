'use strict';

{


  //日付表示
  const dayNames = new Array('日','月','火','水','木','金','土');

  const dt = new Date();
  const y = dt.getFullYear();
  const m = ("00" + (dt.getMonth()+1)).slice(-2);
  const d = ("00" + (dt.getDate())).slice(-2);
  const day = dt.getDay();
  const dayName = dayNames[day];
  const result = y + "/" + m + "/" + d + "(" + dayName + ")";
  const span = document.getElementById("today");
  span.innerHTML = result;
  //クエスト表示
  let names = new Array('ダイヤモンドを10個集める','3000G消費する','ガチャでURを引き当てる','5000G稼ぐ','一部屋以上建築する', '#畳サーバー でツイートする', '普段行かない資源ワールドで採集する' , 'ガチャを10回引く','ネザライトインゴットを獲得する');
  const number = 1;
  const list = document.getElementById('list');
  const btn = document.getElementById('button');

  // 占い表示
  const fortune_results = new Array('大吉' , '中吉' , '小吉' , '吉', '凶');
  const fortune_texts = new Array(
    '絶好調!!今日はURが出る予感!!',
    '稼ぐなら今日だ!',
    '大体いつも通りの1日だよ!',
    'こういう日は配信アーカイブでも見直そう。',
    'まあそんな日もあるさ…。',
    );
  
  const fortune_label = document.getElementById('fortune-label');
  const fortune_text = document.getElementById('fortune-text');
  const fortune_result = document.getElementById('fortune-result');
  const fortune_content = document.getElementById('fortune-content');
  const splash_text = document.getElementById('splash-text');

  // クエストを省く
  function quest_list() {
    let newArray = [];

      const cbx = document.form1.cbx;
      for (let i = 0; i < cbx.length ; i++) {
        if (!cbx[i].checked) {//(chk1[i].checked === true)と同じ
          let num = Number(cbx[i].value);
          newArray.push(names[num]);
        }
    }
    return newArray;
  }




  function randomSelect(array, num)
  {
    let newArray = [];

    while(newArray.length < num && array.length > 0)
    {
      // 配列からランダムな要素を選ぶ
      let rand = Math.floor(Math.random() * array.length);


      // 選んだ要素を別の配列に登録する
      newArray.push(array[rand]);
      // もとの配列からは削除する
      array.splice(rand, 1);
    }
    return newArray; 
  }

  
  function displayList()
  {
    const attenbance_names = quest_list();
    const selectedNames = randomSelect(attenbance_names.slice(), number);
    for (let i = 0 ; i < selectedNames.length ; i ++ ) {
      const li = document.createElement('li');
      li.innerHTML = selectedNames[i];
      list.appendChild(li);
    }
    
    list.style.display = 'block' ;
    fortune_result.style.display = 'inline-block';
    fortune_label.style.display = 'none' ;
    
  }
  function initializeList()
  {
    while(list.firstChild){
      list.removeChild(list.firstChild);
    }
  }

  function fortune() 
  {
    const fortune_number =  Math.floor(Math.random() * fortune_results.length);
    fortune_result.innerHTML = fortune_results[fortune_number];
    fortune_text.innerHTML = fortune_texts[fortune_number];
    btn.disabled = true;

    if (fortune_number == 0 || fortune_number == 4) 
    {
      play("./music/zyaki.mp3"); // 音楽を再生
      splash_text.innerHTML = "こ、これは、、、⁈"
      
  

      window.setTimeout(function(){
        fortune_content.style.animation = "none";
    }, 10);

      $("#splashbg").addClass("splashbg");
      $("#splash").addClass("splash");
      //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
      $("#splash").delay(2000).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
          $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
      });

      if ( fortune_number == 0 ) {
        fortune_content.innerHTML = "大当たり!!";
        window.setTimeout(function(){
          play("./music/atari.mp3");
      }, 2500);
        window.setTimeout(function(){
          play("./music/pati.mp3");
          btn.disabled = false;
      }, 4200);
      }

      if (fortune_number == 4) {
        fortune_content.innerHTML = "残念…";
        window.setTimeout(function(){
          play("./music/hazure.mp3")
          btn.disabled = false;
      }, 2500);
      }

    }
    else{
      $('#body').removeClass('appear');
      $("#splashbg").removeClass("splashbg");
      $("#splash").removeClass("splash");
      fortune_content.innerHTML = "";
      window.setTimeout(function(){
        btn.disabled = false;
      }, 2500);
      fortune_content.style.animation = "0.1s linear infinite rotation1";

    }

    
  }

  btn.addEventListener('click', () => {
    quest_list();
    initializeList();
    displayList();
    fortune() ;
    // effect();

  });




}
