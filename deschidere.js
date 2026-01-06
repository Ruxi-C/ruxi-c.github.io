let buton=document.getElementById('deschideHamburger');
buton.addEventListener("click", function () {
    let meniu = document.getElementById("bara");
    const stil = window.getComputedStyle(meniu);
    if(stil.getPropertyValue("display") === "none"){
        meniu.classList.add('afis');
    }
    else{
        meniu.classList.remove('afis');
    }
});