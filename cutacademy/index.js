
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


    //slick
    $('.slick1').slick({ 
        autoplay: true, 
        dots: true,
    });
     


    // //scrool
    // ScrollReveal().reveal('.appeal', { 
    //     duration: '1000', // アニメーションの完了にかかる時間
    //     viewFactor: '0.3', // 0~1,どれくらい見えたら実行するか
    //     distance: '200px',
    //     reset: false   // 何回もアニメーション表示するか
    //   });
    // ScrollReveal().reveal('.appeal-achi', { 
    // duration: '1000', // アニメーションの完了にかかる時間
    // viewFactor: '0.1', // 0~1,どれくらい見えたら実行するか
    // distance: '200px',
    // reset: false   // 何回もアニメーション表示するか
    // });

    // //scroll check
    // $(window).on('load scroll',function (){
	// 	$('.skilllist').each(function(){
	// 		//ターゲットの位置を取得
	// 		var target1 = $(this).offset().top;
	// 		//スクロール量を取得
	// 		var scroll1 = $(window).scrollTop();
	// 		//ウィンドウの高さを取得
	// 		var winheight1 = $(window).height();
	// 		//ターゲットまでスクロールするとフェードインする
	// 		if (scroll1 > target1 - winheight1 + 200){
	// 			//クラスを付与
    //             $(this).addClass('checked');
	// 		}else if (scroll1 < target1 - winheight1 + 200){
    //             $(this).removeClass('checked');
    //         }
	// 	});
	// });

    

    // //scroll header
    // $(window).on('load scroll',function (){
	// 	$('#headertop').each(function(){
	// 		// //ターゲットの位置を取得
	// 		// var target = $(this).offset().top;
	// 		//スクロール量を取得
	// 		var scroll = $(window).scrollTop();
	// 		// //ウィンドウの高さを取得
	// 		// var winheight = $(window).height();
	// 		//ターゲットまでスクロールするとフェードインする
	// 		if (scroll > 100){
	// 			//クラスを付与
	// 			$(this).addClass('headershow');
    //             $('.toggle-btn span').css('background','#000')
	// 		}
    //         else if (scroll < 100){
    //             $(this).removeClass('headershow');
    //             $('.toggle-btn span').css('background','#fff')
    //         }
	// 	});
	// });

});