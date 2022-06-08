(function() {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue;

    function resizeHandler() { // 창의 크기가 변해도 일정하게 비율을 유지, interative web 개발에서 거의 필수적 
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function () {
        const scrollPer = this.scrollY / maxScrollValue; // 따로 뺀 이유는 scrollPer을 2번 쓰려고
        const zMove = scrollPer * 100 - 420; // 숫자값에 따라 스크롤 할 수 있는 양이 달라짐, -490은 house를 처음 볼 때 -490vw했기 때문
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)'; // 스크롤 할 때 마다 Z값이 움직인다
        // progress bar
        barElem.style.width = scrollPer * 100 + '%';
    });

    window.addEventListener('mousemove', function (e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2; // 화면의 중앙을 0,0으로 만드는 식 
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2; // 나중에 많이 쓰임, 복붙해서 쓰면 된다
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 8) + 'deg) rotateY(' + (mousePos.x * 8) + 'deg)'; // 마우스의 움직임에 따라 화면이 움직임
    });

    window.addEventListener('resize', resizeHandler); // 창의 크기가 변해도 일정하게 비율을 유지
    
    stageElem.addEventListener('click', function (e) {
        new Character({
            xPos: e.clientX / window.innerWidth * 100,
            speed: Math.random() * 0.5 + 0.2
        });
    });

    selectCharacterElem.addEventListener('click', function (e) {
        const value = e.target.getAttribute('data-char');
        document.body.setAttribute('data-char', value);
    });

    resizeHandler(); // maxScrollValue 값을 선언하기 위해

})();
