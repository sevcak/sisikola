const splash = document.querySelector('#intro-splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 1000);
})

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.getElementById("intro-splash").style.display = 'none';
    }, 3000);
})