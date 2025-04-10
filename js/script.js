const btnMenu = document.querySelector("nav .btn-menu");
const menu = document.querySelector("nav .menu");

btnMenu.addEventListener("click",function(){
    this.classList.toggle("x-mark");
    menu.classList.toggle("open");
});

// navigation for sections

// Збираэмо масив посилань на секції сторінки
const sectionLinks=document.querySelectorAll("nav li a[data-goto]");

// Перевіряємо наявність потрібних посилань, порівнявши розмір масиву з нулем
if(sectionLinks.length > 0){
    //Прикріплюємо на кожне посилання функцію обробки кліку за допомогою циклу
    for(let a=0;a<sectionLinks.length;a++){
        sectionLinks[a].onclick=function(){
            onSectionLink(sectionLinks[a]);
        }
    }
    function onSectionLink(link){
        if(link.dataset.goto && document.querySelector(link.dataset.goto)){
            const gotoBlock = document.querySelector(link.dataset.goto);
            const gotoBlockPos = gotoBlock.getBoundingClientRect().top+scrollY;

            window.scrollTo({
                top:gotoBlockPos,
                behavior:"smooth"
            });            
        }
        if(menu.classList.contains("open")){
            menu.classList.remove("open");
            btnMenu.classList.remove("x-mark");
        }

    }
}

// scrollUp - прокрутка вгору

const arrowUp=document.querySelector(".scrollUp");
const headSite = document.querySelector("header");

window.onscroll = function(){
    if(window.scrollY > headSite.offsetHeight)
        arrowUp.style.opacity="1";
    else
        arrowUp.style.opacity="0";
}

arrowUp.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});