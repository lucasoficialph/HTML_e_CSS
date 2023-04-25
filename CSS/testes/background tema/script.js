let temaBox = document.querySelector('.temaBox')
let temaBoxBtn = document.querySelector('.temaBox-btn')
let body = document.querySelector('body')
let titulo = document.querySelector('.titulo')
let solAnimation = document.querySelector('.sol-animation')
let luaAnimation = document.querySelector('.lua-animation')

temaBox.addEventListener('click', () =>{
    temaBoxBtn.classList.toggle('temaBoxBtnMove')
    body.classList.toggle('temadark')
    titulo.classList.toggle('temaWhite')
    if(body.classList.contains('temadark')){titulo.innerHTML = 'Dark'}
    else{titulo.innerHTML = 'White'}
    solAnimation.classList.toggle('moveClimaSol')
    luaAnimation.classList.toggle('moveClimaLua')
})

