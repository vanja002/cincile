function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        document.getElementById("loginStatus").innerHTML = "Uspešno ste se prijavili!";
    } else {
        document.getElementById("loginStatus").innerHTML = "Pogrešno korisničko ime ili lozinka. Pokušajte ponovo.";
    }
}

function otkaziodustani() {
    var usernameInput = document.getElementById("username").value = "";
    var passwordInput = document.getElementById("password").value = "";
}


var slike = ["slike/image1.jpg", "slike/image2.jpg", "slike/image3.jpg"];
var trenutnaSlikaIndex = 0;
var cene = [];
for (var i = 0; i < slike.length; i++) {
    cene.push((i + 1) * 250 + "RSD");
}

function prethodnaSlika() {
    trenutnaSlikaIndex--;
    if (trenutnaSlikaIndex < 0) {
        trenutnaSlikaIndex = slike.length - 1;
    }
    prikaziSliku();
}

function sledecaSlika() {
    trenutnaSlikaIndex++;
    if (trenutnaSlikaIndex >= slike.length) {
        trenutnaSlikaIndex = 0;
    }
    prikaziSliku();
}

function prikaziSliku() {
    var slika = document.getElementById("slika");
    slika.src = slike[trenutnaSlikaIndex];
    var cena = document.getElementById("cena");
    cena.innerHTML = "Cena: " + cene[trenutnaSlikaIndex];
}
// function posalji(event) {
//     event.preventDefault();
//     var formData = {
//         ime: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         kakoSaznali: document.getElementById("how-found").value,
//         poruka: document.getElementById("message").value
//     };

//     console.log("Podaci iz forme:");
//     console.log("Ime: " + formData.ime);
//     console.log("Email: " + formData.email);
//     console.log("Kako ste saznali za nas: " + formData.kakoSaznali);
//     console.log("Poruka: " + formData.poruka);
// }

function promenaStila() {
    document.getElementById("stil").style.backgroundColor = '#6a4f74';
    document.getElementById("naslov").style.fontFamily = "Arial, sans-serif";
    document.getElementById("naslov").style.fontSize = "45px";
    document.getElementById("naslov").style.color = "beige";
}

function hranaZaCincile(kilogrami) {

    const kilogramiBroj = parseFloat(kilogrami);

    if (isNaN(kilogramiBroj) || kilogramiBroj <= 0) {
        return "Molimo vas unesite validnu vrednost za kilograme.";
    }

    const hrana = kilogramiBroj * 0.05;

    return `Činčila treba da pojede ${hrana} kg hrane dnevno.`;
}

function izracunaj() {
    const kilogrami = document.getElementById("kilogrami").value;
    const rezultat = hranaZaCincile(kilogrami);
    document.getElementById("rezultat").innerText = rezultat;
}
let korpa = [];
function dodajUKorpu(boja, cena) {
    let cincila = { boja, cena };
    korpa.push(cincila);
    console.log(korpa);
}
function prikaziKorpu() {
    let proizvod = "";
    let suma = 0;
    for (let index = 0; index < korpa.length; index++) {
        let cincila = korpa[index];
        proizvod += "Boja: " + cincila.boja + "&nbsp Cena: " + cincila.cena + "<br>";
        suma += parseInt(cincila.cena);
    }
    if (korpa.length > 0) {
        proizvod += "Ukupna cena: " + suma + " RSD<br>";
        document.getElementById("dugme").style.display = "block";
        document.getElementById("dugme").style.textAlign = "center";
        document.getElementById("dugme").style.fontSize = "35px";
    }
    let korpica = document.getElementById("korpa");
    korpica.innerHTML = proizvod;
    document.getElementById("prikazKorpe").style.display = "flex";
    document.getElementById("prikazKorpe").style.textAlign = "center";
    document.getElementById("prikazKorpe").style.justifyContent = "center";
    document.getElementById("prikazKorpe").style.alignItems = "center";
    korpica.style.fontSize = "40px";
}

function kupi() {
    korpa = [];
    prikaziKorpu();
    document.getElementById("dugme").style.display = "none";
}

function brigaOCincilama(imeCincile) {
    let polje = document.getElementById('briga-o-cincili');
    polje.innerHTML += "<p>Brineš se o činčili po imenu: " + imeCincile + "</p>";
    polje.innerHTML += "<h4>Hranjenje</h4><p> Pravilna ishrana ključna je za zdravlje činčila. Pazite da im uvek osigurate" +
        "svežu vodu i uravnoteženu ishranu koja uključuje visokokvalitetnu hranu za činčile i povremene poslastice poput suvog voća ili povrća.</p> ";
    polje.innerHTML += "<h4>Higijena</h4><p>Čišćenje kaveza: Redovito čistite kavez vaše cincile barem jednom nedeljno." +
        "Uklonite sav otpad i zamijenite posteljinu ili piljevinu. Pazite da kavez bude uvijek suh i čist kako biste spriječili" +
        "razvoj bakterija i neugodnih mirisa. Kupanje: Cincile su čiste životinje koje se same brinu za svoju higijenu.Nisu potrebna" +
        "redovita kupanja, ali možete im pružiti mogućnost kupanja u prašini za kupanje koja je posebno dizajnirana za cincile.Prašina " +
        "će pomoći u uklanjanju viška masnoće s njihove dlake i održavanju njezine prirodne sjajnosti. Njega dlake: Redovito četkanje" +
        "cincilove dlake pomoći će u sprječavanju stvaranja čvorova i uklanjanju mrtve dlake.Možete koristiti posebne četke dizajnirane za" +
        "cincile kako biste nježno četkali njihovu mekanu dlaku.</p > ";
    polje.innerHTML += "<h4>Igra</h4><p>Igračke za grickanje: Činčile takođe vole da grickaju, pa im pružite bezbedne igračke poput drvenih" +
        "kuglica, loptica ili grana voćaka kao što su jabuka ili šljiva. Ove igračke ne samo da će ih zabaviti, već će im pomoći i održavati zdrave zube." +
        "Tuneli i lavirinti: Postavite tunel ili lavirint u kavez vaše činčile. Mogu se kupiti ili napraviti kod kuće od kartona ili plastičnih cevi." +
        "Činčile takođe vole da istražuju i provode vreme u skrivanju i istraživanju, pa će im ovo biti odličan izvor zabave.</p>";
    polje.innerHTML += "<h4>Provera zdravlja</h4><p>Redovite posete veterinaru važni su za održavanje zdravlja vaše činčile. Veterinar može" +
        "proveriti njihovo opšte zdravstveno stanje, dati preporuke o ishrani i pružiti bilo kakve potrebne medicinske tretmane.</p>";
    polje.style.fontSize = "30px";
}

function pokreniBrisanje() {
    let imeCincile = document.getElementById('ime-cincile').value;
    brigaOCincilama(imeCincile);
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('visitCount')) {
      let count = parseInt(localStorage.getItem('visitCount'));
      count++;
      document.getElementById('visit-count').textContent = count;
      localStorage.setItem('visitCount', count);
    } else {
      localStorage.setItem('visitCount', 1);
      document.getElementById('visit-count').textContent = 1;
    }
  });

  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
  
    var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    var dateString = day + '/' + month + '/' + year;
  
    document.getElementById('current-time').textContent = timeString + ' ' + dateString;
  }
  
  setInterval(updateClock, 1000);
  
  