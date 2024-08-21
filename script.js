//to switch to the dark mode or light mode
let dayNight = document.querySelector(".day-night");
let banner = document.querySelector(".banner");

dayNight.addEventListener('click', ()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#name", {
    strings: ["Jay Pawar", "Frontend Developer", "Backend Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
});