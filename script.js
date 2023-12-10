const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const title = document.querySelector (".title")
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ( ) => {
    question.innerHTML = "Aaaaa, aku juga sayang sama kamu!!";
    title.innerHTML = "MWAH MWAH MWAH MWAH!!"
    gif.src =
        "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", ( ) => {
    const noBtnrect = noBtn.getBoundingClientRect( );
    const maxX = window.innerWidth - noBtnrect.width;
    const maxY = window.innerHeight - noBtnrect.height;

    const randomX = Math.floor(Math.random( ) * maxX);
    const randomY = Math.floor(Math.random( ) * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});