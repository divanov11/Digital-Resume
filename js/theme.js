let theme = localStorage.getItem('portfolio-theme');
let themeCSS = document.querySelector("link#theme-css");

if (theme !== null){
    if (theme == "light"){
        themeCSS.href = "styles/light.css";
        document.getElementById("themeLight").style.background = "#000";
        document.getElementById("themeLight").style.color = "#fff";
    }
}else{
    themeCSS.href = "";
    document.getElementById("themeDark").style.background = "#fff";
    document.getElementById("themeDark").style.color = "#000";
}

Array.from(document.querySelectorAll('button.themeBtn')).forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.id == "themeLight"){
            localStorage.setItem('portfolio-theme', 'light');
            themeCSS.href = "styles/light.css";
            document.getElementById("themeLight").style.background = "#000";
            document.getElementById("themeLight").style.color = "#fff";
            document.getElementById("themeDark").removeAttribute("style");
        }
        if (e.target.id == "themeDark"){
            localStorage.removeItem('portfolio-theme');
            themeCSS.href = "";
            document.getElementById("themeDark").style.background = "#fff";
            document.getElementById("themeDark").style.color = "#000";
            document.getElementById("themeLight").removeAttribute("style");
        }
    })
})