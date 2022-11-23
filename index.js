let btnValid = document.getElementById("submit");
let questions = document.getElementById("questions");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let inputs = document.querySelectorAll("input[type='checkbox']");
const progressBar = document.getElementById("progression-bar");
const discover = document.getElementById("discover");
let textGreeny = document.getElementById("txt-results");

let goodChoice = 0;
let midChoice = 0;
let badChoice = 0;
let scoreUser = 0;

console.log(progressBar, discover);

let test = "0";
let i = 0;
let arrayQuestion = [
    "Le plus souvent, comment achetez-vous vos appareils ?",
    "A quelle fréquence changez vous de téléphone?",
    "À votre domicile, vous utilisez :",
    "Laissez-vous votre téléphone charger toute la nuit ?",
    "Comment stockez-vous vos données ?",
    "Avez-vous l’habitude de vous rendre sur des sites de streaming ?",
    "Regardez-vous vos vidéos avec la qualité maximale ?",
    "Utilisez-vous le mode sombre ?",
    "Saisissez-vous souvent l’URL des sites que vous voulez visiter ?",
    "Utilisez-vous un moteur de recherche éco-responsable ?",
    "Supprimez-vous régulièrement vos mails ?",
    "Etes vous au courant qu’il existe des générateurs d’adresse mail à durée limitée pour l’adhésion par exemple aux newsletters?",
];
let arrayAnswer = [
    {
        choice1: "Neufs",
        choice2: "Reconditionnées",
        choice3: "D'occasion",
    },
    {
        choice1: "Tous les ans",
        choice2: "Entre 1 et 3 ans",
        choice3: "Quand mon téléphone est cassé",
    },
    {
        choice1: "Vos données cellulaires",
        choice2: "Ça dépend de ma connexion ",
        choice3: "Votre Wifi",
    },
    {
        choice1: "Oui, toujours",
        choice2: "Parfois",
        choice3: "Jamais",
    },
    {
        choice1: "Sur le cloud",
        choice2: "Sur un disque dur externe ou une clé USB",
        choice3: "Sur mon stockage local (Téléphone, Ordinateur)",
    },
    {
        choice1:
            "Oui, je consomme beaucoup de contenu en streaming (musique, plateforme VOD…)",
        choice2:
            "J’essaye de limiter au maximum ma consommation de ce genre de ce site",
        choice3: "Non",
    },
    {
        choice1: "Oui, toujours",
        choice2: "Cela dépend de ma fonction de ma connexion",
        choice3: "Non, j’y prête attention",
    },
    {
        choice1: "Jamais",
        choice2: "Non, seulement de temps en temps",
        choice3: "Oui, tout le temps",
    },
    {
        choice1: "Non, jamais",
        choice2: "De temps en temps",
        choice3: "Oui",
    },
    {
        choice1: "Jamais",
        choice2: "Seulement quand j’y pense",
        choice3: "Oui, toujours",
    },
    {
        choice1: "Non, pas vraiment",
        choice2: "Seulement quand j’y pense",
        choice3: "Oui, régulièrement",
    },
    {
        choice1: "Je ne connais pas",
        choice2: "Je sais que ça existe mais je n’en utilise pas",
        choice3: "Oui",
    },
];

function check(checked = true) {
    inputs.forEach((input) => {
        input.checked = checked;
    });
}

function btnClicked() {
    if (i < 12) {
        btnValid.addEventListener("click", (e) => {
            if (propal1.checked == true) {
                badChoice += 0;
            }
            if (propal2.checked == true) {
                midChoice += 1;
            }
            if (propal3.checked == true) {
                goodChoice += 2;
            }

            e.preventDefault();
            check((cheked = false));

            i++;

            questions.innerHTML = `<h3> ${arrayQuestion[i]}`;

            answer1.innerHTML = ` ${arrayAnswer[i].choice1}`;
            answer2.innerHTML = ` ${arrayAnswer[i].choice2}`;
            answer3.innerHTML = ` ${arrayAnswer[i].choice3}`;
            scoreUser = badChoice + midChoice + goodChoice;
            var percent = 0;

            percent = (scoreUser * 100) / 24;
            console.log(badChoice, midChoice, goodChoice, scoreUser, percent);
            console.log(percent);
            console.log(document.location.pathname);
            if (i >= 11) {
                localStorage.setItem("percent", percent);
                document.location.href = "/Résultats/results.html";

                page2();
            }
        });
    }
}
// if (document.location.pathname != "/R%C3%A9sultats/results.html") {
//     var percent = 0;
//     btnClicked();
// } else {
//     page2();
//     btnClicked();
// }
btnClicked();
function page2() {
    const percentttt = localStorage.getItem("percent");
    discover.addEventListener("click", () => {
        console.log(percentttt);
        percents.innerHTML = `${percentttt}%`;
        progressBar.style.width = percentttt + "%";
        if (percentttt > 66) {
            textGreeny.innerHTML =
                "Félicitations ! Tu es officiellement un(e) “Greeny” ! Tu es conscient(e) de ce qui est bon pour la planète et tu adoptes de bonnes habitudes. N’hésite pas à consulter nos articles pour atteindre les 100% !";
        } else if (percentttt > 33) {
            textGreeny.innerHTML =
                "Tu es sur la bonne voie pour devenir un(e) vrai(e) Greeny ! Tu commences à adopter de bonnes habitudes mais certaines sont encore à améliorer. Si tu le souhaites, tu peux te rendre sur notre page blog et consulter nos articles pour commencer dès maintenant.";
        } else {
            textGreeny.innerHTML =
                "Attention ! Tes pratiques et habitudes ne sont pas optimales pour notre planète. Nous avons confiance en toi pour t’améliorer et devenir un vrai Greeny. Consulte nos articles  pour commencer dès maintenant.";
        }
    });
}

if (document.location.pathname != "/index.html") {
    page2();
}
