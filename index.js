const loadingList = ['static/loading_idol.gif', 'static/loading_normal.gif'];
document.getElementById('loadingImage').src = loadingList[Math.floor(Math.random() * 2)];

const container = document.getElementsByClassName('dropContainer')[0];
container.addEventListener('animationend', (e) => {
    if (e.target === container) {
        container.remove();
    }
});

document.getElementsByClassName('drop')[0].addEventListener('animationend', () => {
    document.getElementById('player').play();
})

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    const player = document.getElementById('player');
    if (!player.paused && !player.ended && 0 < player.currentTime) {
        logo.classList.add('disable');
        player.pause();
    } else {
        logo.classList.remove('disable');
        player.play();
    }
});

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var centerX = windowWidth / 2;
var centerY = windowHeight / 2;

window.addEventListener('resize', (e) => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
})

const left = document.getElementsByClassName('left')[0];
const avatar = document.getElementById('komori');

const mainContainer = document.getElementsByClassName('main')[0];
mainContainer.addEventListener('mousemove', function (e) {
    var event = e || window.event;
    var x = event.clientX - centerX;
    var y = event.clientY - centerY;
    // left.style.transform = `translateX(${x / windowWidth * 10}px)`;
    avatar.style.transform = `rotateY(${x / windowWidth * 10}deg) translateX(${x / windowWidth * 10}px)`;
    // mainContainer.style.setProperty('--translateX', '' + (x / windowWidth * 40));
    // console.log(`x ${event.clientX}  y ${event.clientY}`)
});

const accept = document.getElementById('accept');
accept.addEventListener('click', () => {
    for (i of document.getElementsByClassName('loading')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('dropContainer')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('drop')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('pulse1')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('pulse2')) {
        i.style.animationPlayState = 'initial'
    }
    document.getElementsByClassName('agreement')[0].remove();
    
});



// (function () {
    // var imgPX = 0;
    // var imgPY = 0;
    // var divWidth = 0;
    // var divHeight = 0;
    // var flag = false;

    // var preserve3d = document.querySelector(".preserve3d");

    // console.log(preserve3d.offsetLeft, preserve3d.offsetTop)
    // console.log(preserve3d.clientWidth, preserve3d.clientHeight)

    // preserve3d.addEventListener("mouseenter", function (e) {
    //     flag = true;
    //     var evt = e || window.event;
    //     imgPX = preserve3d.offsetLeft;
    //     imgPY = preserve3d.offsetTop;
    //     divWidth = preserve3d.clientWidth;
    //     divHeight = preserve3d.clientHeight;

    //     document.addEventListener("mousemove", function (e) {
    //         if (flag) {
    //             var evt = e || window.event;
    //             var mouseX = evt.clientX - imgPX;
    //             var mouseY = evt.clientY - imgPY;
    //             var X = mouseX - divWidth / 2;
    //             var Y = divHeight / 2 - mouseY;
    //             preserve3d.style.transform =
    //                 `rotateY(${ X / 20 }deg) rotateX(${ Y / 20 }deg)`
    //         }
    //     });

    //     document.addEventListener("mouseout", function () {
    //         flag = false;
    //         preserve3d.style.transform = `rotateY(${ 0 }deg) rotateX(${ 0 }deg)`
    //         document.removeEventListener("mouseout", function () {
    //             flag = false;
    //         });
    //     })

    // });
    
// })();