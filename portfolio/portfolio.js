
$(function(){

    //nav
    $('.toggle-btn').on('click', function() {
        $('#header').toggleClass('open');
    });

    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });

    $('nav li a').on('click', function() {
        $('#header').removeClass('open');
    });


    //scrool
    ScrollReveal().reveal('.appeal', { 
        duration: '800', // アニメーションの完了にかかる時間
        viewFactor: '0.2', // 0~1,どれくらい見えたら実行するか
        distance: '200px',
        reset: true   // 何回もアニメーション表示するか
      });

    //scroll
    $(window).on('load scroll',function (){
		$('#headertop').each(function(){
			// //ターゲットの位置を取得
			// var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			// //ウィンドウの高さを取得
			// var winheight = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > 100){
				//クラスを付与
				$(this).addClass('headershow');
                $('.toggle-btn span').css('background','#000')
			}
            else if (scroll < 100){
                $(this).removeClass('headershow');
                $('.toggle-btn span').css('background','#fff')
            }
		});
	});


    //skytext
    new Vivus('skytext',//2）で付与したID名を書く
    {
    type: 'oneByOne', //1パスずつ書く
    start: 'inViewport', //ビューポート内に表示されたらスタート
    duration: 500, //速さ
    delay: 300,
    animTimingFunction:Vivus.LIINAR//イージング 
    });

});