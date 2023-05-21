let enemy_spawn=[0,200,300,400,500,500,500,500,600];
let bullets = [];           //弾を格納
let enemys = [];            //敵を格納
let score=0;        //総合スコア
let times=0;        //タイム
let shot=0;

let bullet_ct=0;            //弾cooltime
let start=0;                //スタートカウント

document.bgColor = "#202020";
class Player{
    constructor(img,x,y){

        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = img;
        this.sizeX = 48;
        this.sizeY = 48;
        this.hp=5;
    }
    shot(){
        const bulleter = new bullet("images/player_shot.png",player.x+25, player.y, 0,-2.5,1);
        bullets.push(bulleter);
        bullet_ct=45;
    }
}
class bullet{
    constructor(img,x,y,moveX,moveY,type,angle,time){
        this.x=x;
        this.y=y;
        this.moveX=moveX;
        this.moveY=moveY;
        this.img = new Image();
        this.img.src = img;

        this.angle=angle;
        this.type=type;

        this.time=time;
        if(this.type==1){
            this.bom=false;
            if(angle){
                this.bom=true;
            }
        }
        if(this.type==2){
            this.cutX=0;
            this.cutY=0;
            this.count=0;
        }else if(this.type==3){
            this.cutX=16;
            this.cutY=0;
            this.count=0;
        }else if(this.type==4){
            this.cutX=32;
            this.cutY=0;
            this.count=0;
        }else if(this.type==5){
            this.cutX=0;
            this.cutY=16;
            this.count=0;
        }else if(this.type==6){
            this.cutX=16;
            this.cutY=16;
            this.count=200;
        }else if(this.type==7){
            this.cutX=32;
            this.cutY=16;
            if(time!=1001)this.count=100;
            if(time==1001)this.count==5000;
        }else if(this.type==8){
            this.cutX=0;
            this.cutY=32;
            this.count=0;
        }else if(this.type==9){
            this.cutX=16;
            this.cutY=32;
            this.count=0;
        }else if(this.type==10){
            this.cutX=32;
            this.cutY=32;
            this.count=0;
        }
    }
    shot_6(x,y){
        for(let angle=0;angle<360;angle=angle+60){
        const Move=circle(angle);
        const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0]*0.6, Move[1]*0.6, 7, angle,1001);
        bullets.push(bulleter);
        }
    }
}
class Enemy{
    constructor(img,x,y,moveX,moveY,sizeX,sizeY,ct,type){
        this.img = new Image();
        this.img.src = img;
        this.x=x;
        this.y=y;
        
        this.moveX=moveX;
        this.moveY=moveY;


        this.sizeX=sizeX;
        this.sizeY=sizeY;

        this.max_ct=ct;
        this.ct=ct;

        this.type=type;

        if(this.type==1){
            this.cutX=0;
            this.cutY=0;
            this.hp=2;
            this.count=0;
            this.max_ct=450;
            
        }else if(this.type==2){
            this.cutX=62;
            this.cutY=0;
            this.count=200;
            this.hp=2;
            this.max_ct=500;
            this.ct=300;
        }else if(this.type==3){
            this.cutX=124;
            this.cutY=0;
            this.count=0;
            this.hp=2;
            this.max_ct=800;
            this.ct=300;
        }else if(this.type==4){
            this.cutX=0;
            this.cutY=62;
            this.count=0;
            this.hp=2;
        }else if(this.type==5){
            this.cutX=62;
            this.cutY=62;
            this.count=0;
            this.hp=2;
        }else if(this.type==6){
            this.cutX=124;
            this.cutY=62;
            this.count=0;
            this.hp=2;
            this.max_ct=1000;
            this.ct=1000;
        }else if(this.type==7){
            this.cutX=0;
            this.cutY=124;
            this.count=0;
            this.hp=2;
            this.ct=500;
        }else if(this.type==8){
            this.cutX=62;
            this.cutY=124;
            this.count=0;
            this.hp=2;
            this.ct=1000;
        }else if(this.type==9){
            this.cutX=124;
            this.cutY=124;
            this.count=0;
            this.hp=2;
            this.ct=1200;
        }

        enemys.push(this);
    }
    shot1(x,y){
        let bulleter = new bullet("images/enemy_shot.png",x-10, y, 0, 0.6, 2, 0,1000);
        bullets.push(bulleter);

        bulleter = new bullet("images/enemy_shot.png",x+12, y, 0, 0.6, 2, 0,1000);
        bullets.push(bulleter);
    }
    shot2(x,y){
        for(let angle=40;angle<150;angle=angle+20){
        const Move=circle(angle);
        const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0]*0.8, Move[1]*0.8,3, angle,1000);
        bullets.push(bulleter);
        }
    }

    shot3(x,y){
        for(let angle=0;angle<360;angle=angle+60){
        const Move=circle(angle);
        const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0], Move[1], 4, angle,5000);
        bullets.push(bulleter);
        }
    }
    shot4(x,y){
        for(let angle=0;angle<360;angle=angle+45){
        const Move=circle(angle);
        const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0]*0.8, Move[1]*0.8, 5, angle,5000);
        bullets.push(bulleter);
        }
    }
    shot5(x,y){
        let bulleter = new bullet("images/enemy_shot.png",x-15, y, -0.8, 1, 6, 0,5000);
        bullets.push(bulleter);
        bulleter = new bullet("images/enemy_shot.png",x+17, y, 0.8, 1, 6, 0,5000);
        bullets.push(bulleter);
        }
    shot6(x,y){
        for(let angle=0;angle<360;angle=angle+90){
        const Move=circle(angle);
        const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0], Move[1], 7, angle,5000);
        bullets.push(bulleter);
        }
    }
    shot7(x,y){
        let bulleter = new bullet("images/enemy_shot.png",x, y, -0.9, 0.5, 8, 0,5000);
        bullets.push(bulleter);
        bulleter = new bullet("images/enemy_shot.png",x, y, 0.9, 0.5, 8, 0,5000);
        bullets.push(bulleter);
        bulleter = new bullet("images/enemy_shot.png",x, y, -0.5, 0.5, 8, 0,5000);
        bullets.push(bulleter);
        bulleter = new bullet("images/enemy_shot.png",x, y, 0.5, 0.5, 8, 0,5000);
        bullets.push(bulleter);
        }
    shot8(x,y){
        for(let angle=0;angle<360;angle=angle+30){
            const Move=circle(angle);
            const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0]*0.8, Move[1]*0.8, 9, angle,500);
            bullets.push(bulleter);
        }
    }
    shot9(x,y){
        let angle = Math.floor(Math.random()*360)+1
            const Move=circle(angle);
            const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0]*0.8, Move[1]*0.8, 10, angle,500);
            bullets.push(bulleter);
    }
    shot_3(x,y){
        for(let angle=0;angle<360;angle=angle+22.5){
        const Move=circle(angle);
        const bulleter = new bullet("images/enemy_shot.png",x, y, Move[0]*2, Move[1]*2, 2, angle,1000);
        bullets.push(bulleter);
        }
    }
}


let player = new Player("images/player.png",720,1000);       //プレイヤー


let key_code=['false','false','false','false','false'];

function entity(g){             //物体表示
    if(key_code[0]=='true' && player.x>490)player.x=player.x-1;
    if(key_code[1]=='true' && player.y>500)player.y=player.y-1;
    if(key_code[2]=='true' && player.x<1010-player.sizeX)player.x=player.x+1;
    if(key_code[3]=='true' && player.y<1000-player.sizeY)player.y=player.y+1;


    if(player.hp<100 || Math.floor(player.hp/100)%30<15)g.drawImage( player.img, player.x, player.y, player.sizeX,player.sizeY);
    if(player.hp>=100)player.hp=player.hp-100;

    bullets.forEach((i,index) =>{
    if(i.type==1)g.drawImage( i.img, i.x-4, i.y-4, 12, 12);
    if(i.type>=2)g.drawImage( i.img, i.cutX, i.cutY, 16, 16, i.x-4, i.y-4, 12, 12);

    i.x=i.x+i.moveX;         //moveの向きに移動
    i.y=i.y+i.moveY;         //moveの向きに移動

        hitplayer(i,index);

        hit_enemy(i,index);

        if(i.type==1 && i.bom==true)bom(i.x,i.y);

    if(i.type==1)if(i.x < 400 || i.x > 1200 || i.y<490 || i.y>1200)bullets.splice(index,1);
    if(i.type!=1)if(i.x < 400 || i.x > 1200 || i.y<400 || i.y>1200)bullets.splice(index,1);
    })

    enemys.forEach((l,number) =>{
        if(l.hp<100 || Math.floor(l.hp/100)%50<25)g.drawImage( l.img, l.cutX, l.cutY, 62, 62, l.x-30, l.y-30 ,l.sizeX + 10, l.sizeY + 10);
        if(l.hp>=100)l.hp=l.hp-100;

        g.font="20px 'arial'";
        g.fillStyle = "red";
        g.fillText("♡"+l.hp%100, l.x-10, l.y-25);

        if(l.y>=1100)enemys.splice(number,1);

        l.x=l.x+l.moveX;
        l.y=l.y+l.moveY;

        if(player.hp<100 && player.x + player.sizeX-5 > l.x && player.x + player.sizeX/3 <l.x+30 && player.y + player.sizeY > l.y && player.y + player.sizeY/3 <l.y+30){
            player.hp--;
            player.hp=player.hp+20000;
        }

    })

}

function bom(x,y){
    bullets.forEach((i,index) =>{
        if(i.type!=1 && i.x > x-40 && i.x < x+40 && i.y > y-40 && i.y < y+40){
            bullets.splice(index,1);
            score=score+0.2;
        }

    })
}
function hitplayer(i,index){
    if(i.type >= 2 && player.hp<100 && player.x + player.sizeX-5 > i.x && player.x + player.sizeX/3 <i.x && player.y + player.sizeY > i.y && player.y + player.sizeY/3 <i.y){
        player.hp--;
        if(player.hp!=0){
            player.hp=player.hp+20000;
        }else {finish();}
            bullets.splice(index,1);
    }
}
function hit_enemy(i,index){
    if(i.type==1 && i.bom==false)enemys.forEach((l,number) =>{
        if(l.hp<100 && l.x + l.sizeX /2 >= i.x && l.x - l.sizeX /2 <= i.x && l.y + l.sizeY /2 >= i.y && l.y - l.sizeY /2 <= i.y){
            l.hp--;
            l.hp=l.hp+8000;
            if(l.hp==8000){
                enemys.splice(number,1);
                score=score+10;
            }
            bullets.splice(index,1);
            
            $("#boss-damage").get(0).play();
        }})
}

document.onmouseup = function (event){      //マウスクリック
    if(start==300){

}
}
function key_up(event){                 //キーを離したことを検知
    let key = event.keyCode;
    if(key==37)key_code[0]='false'
    if(key==38)key_code[1]='false'
    if(key==39)key_code[2]='false'
    if(key==40)key_code[3]='false'
    if(key==32)key_code[4]='false'
}
function key_down(event){                 //キーを押したことを検知
    //event.preventDefault();       //画面移動禁止
    if(start==300){let key = event.keyCode;
    
    if(key==37)key_code[0]='true'
    if(key==38)key_code[1]='true'
    if(key==39)key_code[2]='true'
    if(key==40)key_code[3]='true'
    if(key==32)key_code[4]='true'
    }
}
function ready(){                   //開始時カウント
    player.y=player.y-0.5;
    Paint();
    start++;
}

function enemy_tick(){          //敵の行動
    enemy_shot();
    N_bullet();
    S_enemy();
}

function S_enemy(){
    enemy_spawn.forEach((i,index) =>{
        if(Math.floor(Math.random()*10)>=(index))enemy_spawn[index]=enemy_spawn[index]-0.8;
        if(i<=0){
            let setX=Math.floor(Math.random()*460)+520

            new Enemy("images/enemy.png",setX,450,0,0.2,60,60,(index+1)*100,index+1);
            enemy_spawn[index]=2000;
            }
    })

}

function enemy_shot(){              //敵　発射
    enemys.forEach((l,number) =>{
    l.ct--;
    if(l.ct<=0){
        if(l.type==1){
        l.shot1(l.x,l.y);
        l.ct=l.max_ct;
        }
        else if(l.type==2){
            l.shot2(l.x,l.y);
            l.ct=l.max_ct;
            }
        else if(l.type==3){
            l.shot3(l.x,l.y);
            l.ct=l.max_ct;
            }
        else if(l.type==4){
            l.shot4(l.x,l.y);
            l.ct=l.max_ct;
            }
        else if(l.type==5){
            l.shot5(l.x,l.y);
            l.ct=l.max_ct;
            }
        else if(l.type==6){
            l.shot6(l.x,l.y);
            l.ct=l.max_ct;
            }
        else if(l.type==7){
            l.shot7(l.x,l.y);
            l.ct=l.max_ct;
            }
        else if(l.type==8 && l.ct%50*-1==1){
            l.shot8(l.x,l.y);
            if(l.ct<=-1000)enemys.splice(number,1);
            l.moveY=0;
            }
        else if(l.type==9 && l.ct%5*-1==1){
            l.shot9(l.x,l.y);
            if(l.ct<=-800)enemys.splice(number,1);
            l.moveY=0;
            }
    }})
}
function N_bullet(){
    bullets.forEach((l,number) =>{
        l.count--;
        l.time--;
        if(l.time==0)bullets.splice(number,1);

        if(l.type==1 && l.bom==true){      //常時(1番)
            l.angle=l.angle+0.25;
            let Move=circle(l.angle);
            l.moveX=Move[0]*1.5;
            l.moveY=Move[1]*1.5;
        }
        if(l.type==4){      //常時(4番)
            l.angle=l.angle+0.8;
            let Move=circle(l.angle);
            l.moveX=Move[0];
            l.moveY=Move[1]+0.8;
        }
        if(l.type==9){      //常時(9番)
            l.angle=l.angle+0.2;
            let Move=circle(l.angle);
            l.moveX=Move[0];
            l.moveY=Move[1];
        }
        if(l.type==8){      //常時(8番)
            if(l.x < 500 || l.x > 1000)l.moveX=l.moveX*-1.2;
        }
        if(l.type==6 && l.count<=0 && l.count*-1%100==1 && l.count>=-300){      //常時(6番)
            l.angle=Math.atan2(player.y+24-l.y,player.x+24-l.x);
            l.moveX=Math.cos(l.angle)*0.5;
            l.moveY=Math.sin(l.angle)*0.5;
        }

        if(l.type>2 && l.count==0){
            if(l.type==7){
                l.shot_6(l.x,l.y);
                bullets.splice(number,1);
            }




        }})
}

function circle(angle){
    angle = angle *(Math.PI/180);       //度をラジアンに変換
    const move_X = Math.cos(angle);
    const move_Y = Math.sin(angle);
    return [move_X,move_Y];
}

function finish(){              //エンド
    end = 1;
    start++;

    alert("GAMEOVER");
    location.reload();
}

function tick(){            //繰り返し処理 
    if(start<300)ready();

    if(start==300){
    Paint();
    if(bullet_ct>0)bullet_ct--;
    enemy_tick();

    if(key_code[4]=='true'){
        if(shot==0)player.shot();
        shot++;
        if(shot==75)shot=0
    }else {
        if(shot!=0)shot=0
    }

    times++;
    if(Math.floor(times%500)==1)score=score+times/125;
}}