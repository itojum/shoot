//定義
let		gScreen;

let screen_width=0;         //画面サイズ 横
let screen_height=0;        //画面サイズ 縦

let Vscreen_width=1000;         //仮想画面サイズ 横
let Vscreen_height=1000;         //仮想画面サイズ タテ

let viewX=500;                //視点X
let viewY=500;                //視点Y
let view_width=500;         //表示 横
let view_height=500;         //表示 タテ


function Paint(){
    let image = new Image();
    image.src="images/back.png";

    let image2 = new Image();
    image2.src="images/side.png";

    image.onload = function(){
        const	g = gScreen.getContext( "2d" );
        g.imageSmoothingEnabled=g.msimageSmoothingEnabled=0; 
        g.drawImage( image, 500, 500 , 500, 500);

        entity(g);

        g.font="40px 'arial'";
        g.fillStyle = "red";
        let i = 0;
        for(i;i<player.hp%100;i++)g.fillText("■", 505+i*21, 525);
        g.fillStyle = "gray";
        for(i;i<5;i++)g.fillText("■", 505+i*21, 525);

        g.font="bold 18px 'ＭＳ ゴシック'";;
        g.fillStyle = "darkblue";
        g.fillText("スコア:"+Math.floor(score), 505, 550);

        const	ca = document.getElementById( "main" );
        const	canvas = ca.getContext( "2d" );
        canvas.imageSmoothingEnabled=canvas.msimageSmoothingEnabled=0; 

        canvas.drawImage(gScreen, viewX, viewY, view_width, view_height, 0, 0, ca.width, ca.height);
    }
}

window.onresize=function(){
    Resize();
}

window.onload=function(){
    setInterval(tick, 5);           //   5/1000秒周期    5*200
    addEventListener( "keydown", key_down );
    addEventListener( "keyup", key_up );

    gScreen = document.createElement( "canvas" );
    gScreen.width=Vscreen_width;
    gScreen.height=Vscreen_height;

    side = document.createElement( "canvas" );
    side.width=Vscreen_width;
    side.height=Vscreen_height;
    Resize();
}

function Resize(){
    const	ca = document.getElementById( "main" );

    let screen_width = document.documentElement.clientWidth/1.3;
    let screen_height = document.documentElement.clientHeight/1.3;

    if(screen_width>screen_height)screen_width=screen_height;
    if(screen_width<screen_height)screen_height=screen_width;

    if(screen_width<200 || screen_height<200){
        screen_width=200;
        screen_height=200;
    }
    screen_width=screen_width*1.2;

    let margin_left = (document.documentElement.clientWidth - screen_width) /2;
    ca.style.marginLeft = margin_left + 'px';
    ca.width=screen_width*0.8;
    ca.height=screen_height;

    Paint();            //ペイント
}