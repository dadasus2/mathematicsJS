var priklad = document.getElementById("math");
var text = document.getElementById("h1");
var buttonClose = document.getElementById("wrapperClose");
var hodnoceni = document.getElementById("hodnoceni");
var result;
var outputMath;
var a;
var b;
var streak;

PrikladGenerator();

function PrikladGenerator() {
    a = Math.floor(Math.random() * (50 - 0 + 1)) + 1;
    b = Math.floor(Math.random() * (50 - 0 + 1)) + 1;
    result = a + b;
    outputMath = a + " + " + b;
    text.innerText = outputMath;
}



var streakNum = 0;
function Kontrola() {
    var wrapper = document.getElementById("wrapper");
    var wrapperStreak = document.getElementById("wrapperStreak")
    var input = document.getElementById("value").value;
    var streak = document.getElementById("streak");

    if (input == result) {
        hodnoceni.innerText = "Správně";
        document.getElementById("value").value = "";
        streakNum++;
        gsap.from('.priklad', {
            autoAlpha: 0, x: -100, ease: "power4.out", duration: 1,
        })
        gsap.from('.hodnoceni', {
            autoAlpha: 0, x: -100, ease: "power4", duration: 1,
        })
        gsap.from('.streak', {
            autoAlpha: 0, x: -100, ease: "power4", duration: 1,
        })
        streak.innerText = streakNum;
        PrikladGenerator();
    }

    else {

        hodnoceni.innerText = "Špatně, zkus znova";
        gsap.from('.hodnoceni', {
            autoAlpha: 0, ease: "power4", duration: 0.5,
        })
        wrapperStreak.innerText = "Dosáhl jsi skóre: " + streakNum;
        streakNum = 0;
        streak.innerText = streakNum;
        hodnoceni.innerText = "hodnocení";
        wrapper.style.display = "flex";
        document.getElementById("value").value = "";
        PrikladGenerator();
    }

}
wrapperClose.addEventListener('click', () => {
    wrapper.style.display = "none";
})




