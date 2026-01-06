let i=0, k, croc=0;
const proiecte=["matENro - Platformă online de pregătire pentru Evaluarea Națională", "Baza de date a platformei matENro", "Joc în Java"];
const sursePoze=["../index 1 M.png", "../BazadeDate.png", "../joc.png"];
const idPuncte=["p1", "p2", "p3"];
const texte=["Pornind de la experiența ca voluntar meditator pentru elevi de gimnaziu din mediul rural, am creat matENro, o platformă online cu teste interactive de pregătire pentru Evaluarea Națională. <br/> Aceasta este mai mult decât o culegere sau o simplă platformă de evaluare, având ca scop dezvoltarea competenței utilizatorilor de a aplica diferite concepte studiate în rezolvarea de exerciții și probleme prin înțelegerea pașilor necesari unei soluții. <br/> matENro oferă teste interactive de tip quiz, pe modelul subiectelor de examen, adaptate contextului, la matematică (toate tipurile de subiecte) și limba română (itemi obiectivi), astfel încât pregătirea poate deveni ceva plăcut.<br/>Funcțiile inovatoare precum Hint (indicii) și modul Pas cu Pas (întrebări ajutătoare la problemele complexe) permit elevilor să se familiarizeze cu pașii necesari pentru rezolvarea unei probleme, pe care devin capabili să-i utilizeze la rândul lor când parcurg subiectele de examen.<br/>Totodată, platforma pune la dispoziție rezolvări detaliate ale problemelor din teste, mai ușor de înțeles decât obișnuitele bareme schematice.\nAm realizat acest site de la zero, aceasta fiind o modalitate de a-mi aplica și dezvolta cunoștințele de HTML, CSS și JavaScript.", "Luând în considerare modul de funcționare a platformei matENro create de mine, am realizat o bază de date pentru monitorizarea eficientă a modului în care este folosită de utilizatori, pentru a identifica, de exemplu, tipurile de probleme cel mai des accesate, cele cu o rată mai mică de reușită sau evoluția utilizatorilor după mai multe accesări ale testelor din platformă.<br/>Această bază de date are ca scop păstrarea evidenței utilizatorilor, a textelor disponibile în platformă, respectiv a itemilor din care este alcătuit fiecare test, precum și a sesiunilor fiecărui utilizator în platformă și a interacțiunii acestuia cu fiecare dintre exerciții. <br/> De asemenea, am creat un model pentru a permite utilizatorilor să acumuleze badge-uri (recompense) în funcție de activitatea lor în platformă.<br/>Pentru realizarea acestui proiect, am utilizat limbajul SQL și Oracle APEX.", "Am creat un joc de tip labirint, în care utilizatorul se poate deplasa cu ajutorul tastelor săgeți de pe tastatură.<br/> Scopul jucătorului este acela de a colecta cât mai multe puncte în timp ce parcurge drumul către ieșirea din labirint, fără a atinge pereții labirintului.<br/>Pentru realizarea acestui proiect, am folosit limbajul Java."];
function schimbaText(){
    document.getElementById("poza").src = sursePoze[i];
    document.getElementById("titlu").innerHTML = proiecte[i];
    document.getElementById("mesaj").innerHTML = texte[i];
    if(i==2){
        document.getElementById("sageataDreapta").style.color="rgb(129, 133, 212)";
    }
    else {
        document.getElementById("sageataDreapta").style.color="rgb(5, 44, 239)";
    }
     if(i==0){
        document.getElementById("sageataStanga").style.color="rgb(129, 133, 212)";
        document.getElementById("link").style.display="block";
    }
    else {
        document.getElementById("sageataStanga").style.color="rgb(5, 44, 239)";
        document.getElementById("link").style.display="none";
    }
    document.getElementById(idPuncte[i]).className = "fa-solid fa-circle";
    for(k=0; k<=2; k++){
        if(k!=i){
            document.getElementById(idPuncte[k]).className = "fa-regular fa-circle";
        }
    }
}

function inainte(){
    if(i<2){
        i++;
    }
    schimbaText();
}

function inapoi(){
    if(i>0){
        i--;
    }
    schimbaText();
}

function atrib0(){
    i=0;
    schimbaText();
}

function atrib1(){
    i=1;
    schimbaText();
}

function atrib2(){
    i=2;
    schimbaText();
}

function mesaj(){
    window.alert("Nu ai acces la aceste informații!");
}

function ascunde(){
    if(window.innerWidth<600){
        let meniu = document.getElementById('bara');
        meniu.classList.remove('afis');
}
}