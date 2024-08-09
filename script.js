if(window.innerWidth<=900){
    document.querySelector('nav').addEventListener('click',()=>{
       let openMenu=document.createElement('div'); 
       openMenu.style.cssText=`
        display:flex;
        justify-content:center;
        align-items:center;
        width;100%;
        height:100vh;
        flex-direction:column;
        text-shadow:1px 1px black;
        color:white;
        background:#41C36D;
        top:0;
       `;
       openMenu.setAttribute('id','openMenu');
       document.querySelector('body').prepend(openMenu);
       openMenu.innerHTML=`<a href="/">Главная</a><a href="#services">Услуги</a><a href="#doctors">Врачи</a>`;
       document.querySelector('body').style.overflow="hidden";
       document.querySelector('#openMenu').addEventListener('click',()=>{
        document.querySelector('#openMenu').remove();
        document.querySelector('body').style.overflow="auto";
       })
    });
}