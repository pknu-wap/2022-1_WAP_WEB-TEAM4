(function() {
const outputElem = document.querySelector('.output');
    const peanutElem = document.querySelector('.peanut');
    //const peanutElem2 = document.querySelector('.peanut2');
    // const peanutElem3 = document.querySelector('.peanut3');

    let num = 0;

    function showValue() { 
        let posY = peanutElem.getBoundingClientRect().top;
            //peanut의 바뀌는 위치에 따른 top위치값이 나옴
            
        outputElem.innerHTML = posY;

        if (posY < window.innerHeight * 0.2) {
            peanutElem.classList.add('zoom');
        

        } else {
            peanutElem.classList.remove('zoom');
        

        }
    }

    window.addEventListener('scroll', function() {
        showValue();
    });

    showValue();

})();
  