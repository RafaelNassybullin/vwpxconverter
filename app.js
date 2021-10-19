let viewport = document.querySelector('.viewport');
let px = document.querySelector('.px');
let result = document.querySelector('.result');
let answer = document.querySelector('.answer');
let setScreenWidth = document.querySelector('.setScreenWidth');
let tip = document.querySelector('.tip');


setScreenWidth.addEventListener('click', () => {
    viewport.value = window.innerWidth;
})

result.addEventListener('click', () => {
    let r = px.value / viewport.value * 100;
    console.log(r)
    let fixres = r.toFixed(3);
    fixres > 0 ? result.innerHTML = fixres + 'vw' : answer.innerHTML = 'result'
    navigator.clipboard.writeText(result.innerText);
    result.innerText = (px.value / viewport.value * 100).toFixed(3) + 'vw';
    tip.classList.add('_slide-tip')

    setTimeout(()=>{
        tip.classList.remove('_slide-tip')
    },2000)

});



