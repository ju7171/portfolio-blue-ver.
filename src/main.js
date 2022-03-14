const menu = document.querySelector('.header-hamburger');
const mobileMeun = document.querySelector('.mobile-nav');
const mobileMeunbut = document.querySelector('#aboutme');
const subComment = document.getElementsByClassName('sub-comment');
const mainTypingtxt = document.querySelector('.typing-txt');
const mainTyping = document.querySelector('.typing');



menu.addEventListener('click', function (ev) {
    menu.classList.toggle('is-active')
    mobileMeun.classList.toggle('is-active')
    //빈링크가 실행되지 않도록 링크의 기본 속성을 막고,
    //클릭이벤트가 일어난 요소(this)에 active라는 클래스명이 없으면 넣어주고 있으면 뺀다.
});

//네브메뉴에서 클릭하면 해당섹션으로 이동함과 동시에 네브가 접힘
function hideNav() {
    menu.classList.toggle('is-active')
    mobileMeun.classList.toggle('is-active')
};

// 메인멘트 타이핑효과
let typingBool = false;
let typingIdx = 0;
let typingTxt = mainTypingtxt.textContent; // 타이핑될 텍스트를 가져온다 
typingTxt = typingTxt.split(""); // 한글자씩 자른다 
if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    typingBool = true;
    var tyInt = setInterval(typing, 100); // 반복동작. let으로 선언하면 clearInterval(tyInt) 종료가 안됨
}

function typing() {
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
        mainTyping.append(typingTxt[typingIdx]); // 한글자씩 이어준다
        typingIdx++;
    } else {
        clearInterval(tyInt); //끝나면 반복종료 
    }
}



