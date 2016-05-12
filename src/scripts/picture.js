/**
 * 背景随机;
 */
var bigImage = document.getElementsByClassName( "bigImage" )[ 0 ];
var change = function() {
    var random = function() {
        return Math.floor( Math.random() * 25 );
    }
    var rand = random();
    // 在手机上不展示窄图,不对称图;
    while ( ( document.body.clientWidth > 440 && rand == 0 ) ) {
        rand = random();
    }
    var image = './images/bg' + rand + '.jpg';
    bigImage.style.backgroundImage = "url(" + image + ")";
    var descs = [];
    descs[ 0 ] = { title: "the shadow 阴影", brief: "此去一别，便是经年; A touching portrayal of a maiden whose beloved is sailing off to war. She is tracing his silhouette onto the wall to have something with which to remember him until he returns. <拉斐尔前派>的作品给人一种温文尔雅,一丝不苟的感觉;只要在他们作品前站一会儿,就仿佛能体会画中的诗意...,好吧,我承认我只是喜欢画中那些扭扭捏捏的妹子..." };
    // descs[ 1 ] = { title: "Svartifoss 斯瓦蒂瀑布", brief: "位于冰岛东南部瓦特纳冰川国家公园,瀑布的白色水流与周围黑色六角形玄武岩柱群形成了鲜明对比。瀑布底部则布满了从柱群上剥落下来的尖锐石块。斯瓦蒂瀑布是众多冰岛瀑布中风格非常鲜明的一个,而它的独特形态激发了冰岛人的无穷想象，许多冰岛建筑的设计灵感都能追溯到这个瀑布;" };
    // descs[ 2 ] = { title: "Sheikh Zayed Grand Mosque 阿布扎比大清真寺", brief: "世界上最大的清真寺之一,为纪念阿联酋开国总统扎耶德·本·苏尔坦·阿勒纳哈扬而建,在这位领袖领导下，阿联酋从一个贫穷的沙漠国家转变成为盛产石油的海湾国家，并拥有了现在的一切。" };
    // descs[ 3 ] = { title: "倒影", brief: "A beautiful reflection of the Wave on a clear autumn afternoon,美国红崖国家保护区,狼丘北部,沙丘经过漫长岁月的钙化演变成砂岩，其中铁矿被氧化後赋予砂岩炫目的红、橙、黄、紫色 泽，而流水和风沙的打磨则令它呈现出光滑似波涛般的奇景" };
    // descs[ 4 ] = { title: "sunset 日落", brief: "Bruges, Belgium;比利时 布鲁日是典型的中世纪古城，保存着大量数世纪前的建筑。早期哥特式建筑已经成为城市特色的一个部分。" };
    var nav = document.getElementsByClassName( "nav" )[ 0 ];
    var desc = document.getElementsByClassName( "desc" )[ 0 ];
    var title = desc.getElementsByClassName( "title" )[ 0 ];
    var brief = desc.getElementsByClassName( "brief" )[ 0 ];
    if ( descs[ rand ] != undefined ) {
        if ( typeof title.innerText == 'string' ) {
            title.innerText = descs[ rand ].title || "";
            brief.innerText = descs[ rand ].brief || "";
        } else if ( typeof title.textContent == 'string' ) {
            title.textContent = descs[ rand ].title || "";
            brief.textContent = descs[ rand ].brief || "";
        }
    } else {
        desc.style.display = "none";
        nav.style.display = "none";
    }
} ;
change();
bigImage.addEventListener("click",function() {
    change();
});
/**
 * welcome
 * 欢迎语，卡片翻转
 */
var isIE = function() {
    if ( !!window.ActiveXObject || "ActiveXObject" in window ) {
        return true;
    } else {
        return false;
    }
};
//卡片点翻转
( function() {
    var wrap = document.getElementById( 'wrap' );
    var title = [].slice.call(wrap.querySelectorAll(".title"));
    var flag = true;
    wrap.addEventListener("click",function(event) {
        event.stopPropagation();
    })
    // 在两个卡片标题添加点击事件翻转;
    title.forEach( function( ele ) {
        ele.addEventListener( "click", function(event) {
            event.stopPropagation();
            if ( flag ) {
                wrap.className = 'opposite';
                flag = false;
                //IE 不支持 transform-style: preserve-3d;
                if ( isIE() ) {
                    setTimeout( function() {
                        contentB.style.backfaceVisibility = "visible";
                    }, 490 );
                }
            } else {
                wrap.className = 'front';
                flag = true;
                if ( isIE() ) {
                    setTimeout( function() {
                        contentB.style.backfaceVisibility = "hidden";
                    }, 490 );
                }
            }
        } )
    } )
} )();
//写入欢迎语;
( function() {
    var wel = document.querySelector( ".wel" );
    var wel_desc = document.querySelector( ".wel-desc" );
    var welcome = [ { lang: "Salut", desc: "法语" }, { lang: "Bangawoyo", desc: "韩语" }, { lang: "Moshimoshi", desc: "日语" }, { lang: "Hoi", desc: "荷兰语" }, { lang: "Yasou", desc: "希腊语" }, { lang: "Salaam", desc: "阿拉伯语" }, { lang: "Hej", desc: "瑞典语" }, { lang: "Hi", desc: "英语" }, { lang: "Witaj", desc: "波兰语" }, { lang: "Szia", desc: "匈牙利语" }, { lang: "Moyo", desc: "希鲁巴语" }, { lang: "Mike", desc: "赫必语" }, { lang: "Kaixo", desc: "巴斯克语" } ];
    var rand = Math.floor( Math.random() * welcome.length );
    wel.innerHTML = welcome[ rand ].lang + ", 朋友";
    wel_desc.innerHTML = "现在你懂得怎样用" + welcome[ rand ].desc + "打招呼了!";
} )()
/**
 * display
 * 包含移动端触摸，PC端滑轮监听；移动背景动画；
 */
var nav = document.getElementsByClassName( "nav" )[ 0 ];
var bigImage = document.getElementsByClassName( "bigImage" )[ 0 ];
var desc = document.getElementsByClassName( "desc" )[ 0 ];
var up = function() {
    if ( nav.className.indexOf( "displayed" ) <= -1 ) {
        nav.className += " displayed",
            bigImage.className += " displayed",
            desc.className += " displayed";
        //根据描述的高度来设置;动画的高度;
        var openImg = document.querySelector( ".bigImage.displayed" );
        var height = desc.offsetHeight;
        //大图的动画效果;
        openImg.style.bottom = height + "px";
        //nav的动画效果;
        var openNav = document.querySelector( ".nav.displayed" );
        openNav.style.bottom = ( 15 + height ) + "px";
    }
};
var down = function() {
        //bigImg还原
        var open = document.querySelector( ".bigImage.displayed" );
        open.style.bottom = "0";
        //移除类名
        nav.className = nav.className.replace( " displayed", "" );
        bigImage.className = bigImage.className.replace( " displayed", "" );
        desc.className = desc.className.replace( " displayed", "" );
        //nav还原
        var openNav = document.querySelector( ".nav" );
        openNav.style.bottom = "15px";
    }
    //滑轮,点击;展示描述;
var toggleHistoryThumbnails = function( e ) {
    var wheelDelta, detail, keydownCode,
        wheelEvent = !1,
        keyEvent = !1,
        touchend = !1,
        registeredKeyCodes = [ 38, 40, 32 ];
    if ( "mousewheel" === e.type || "DOMMouseScroll" === e.type ) {
        wheelDelta = e.wheelDelta;
        detail = e.detail;
        wheelEvent = !0;
    } else if ( "keydown" === e.type ) {
        if ( keydownCode = e.which, registeredKeyCodes.indexOf( keydownCode ) <= -1 ) return;
        keyEvent = !0;
    } else if ( "touchend" === e.type ) {
        touchend = !0;
    }
    if ( !(
            ( wheelEvent && 0 > wheelDelta || detail > 0 || keyEvent && 38 === keydownCode ) && nav.className.indexOf( "displayed" ) > -1 || ( wheelEvent && wheelDelta > 0 || detail < 0 || keyEvent && 40 === keydownCode ) && nav.className.indexOf( "displayed" ) <= -1 ) ) {
        if ( nav.className.indexOf( "displayed" ) <= -1 ) {
            up();
            return
        }
        down();
    }
}
document.addEventListener( "mousewheel", this.toggleHistoryThumbnails );
document.addEventListener( "DOMMouseScroll", this.toggleHistoryThumbnails );
document.addEventListener( "keydown", this.toggleHistoryThumbnails );
nav.addEventListener( "click", this.toggleHistoryThumbnails );
//手机触摸;
( function() {
    var startY, endY, end;
    document.addEventListener( "touchstart", function( event ) {
        var touch = event.touches[ 0 ];
        startY = touch.pageY;
        end = !1;
    } )
    document.addEventListener( "touchmove", function( event ) {
        var touch = event.touches[ 0 ];
        endY = touch.pageY;
    } )
    document.addEventListener( "touchend", function( event ) {
        //触发end;
        end = !0;
        if ( startY < endY ) {
            down();
        } else if ( startY > endY ) {
            up();
        }
    } )
    document.addEventListener( "touchcancel", function( event ) {
            if ( startY < endY ) {
                down();
            } else if ( startY > endY ) {
                up();
            }
        } )
        //nav 监听;
    nav.addEventListener( "touchend", function( event ) {
        //避免与点击冲突;
        event.preventDefault();
        if ( nav.className.indexOf( "displayed" ) <= -1 ) {
            up();
            return
        }
        down();
    } )
    nav.addEventListener( "touchcancel", function( event ) {
        event.preventDefault();
        if ( end ) {
            return;
        }
        if ( nav.className.indexOf( "displayed" ) <= -1 ) {
            up();
            return
        }
        down();
    } )
} )()

