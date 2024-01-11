const header = document.querySelector("header");
window.addEventListener("scroll", function (){
    header.classList.toggle("sticky", window.scrollY > 100);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const downloadBtn = document.querySelector(".btn2");
const fileLink = "CV.pdf";
const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Téléchargement dans <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Téléchargement dans <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Télécharger</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);