const tueurs = [
  {
    titre: "Ogre de Santa Cruz",
    nomDuTueur: "<strong>Nom Du Tueur :</strong> Edmund Emil Kemper III",
    age: "<strong>Age :</strong> 18 décembre 1948",
    sexe: "<strong>Sexe :</strong> Masculin",
    description:
      "<strong>Statut du tueur :</strong> Meurtrier, Nécrophile, Viol.",
    anneeDuCrime:
      "<strong>Année Du Crime :</strong> 27 août 1964-21 avril 1973",
    nombreDeVictime: "<strong>Nombre De Victime :</strong> 10",
    anneeDeSortie: "<strong>Date De Modif :</strong> 23 novembre 2024",
    nomDeLauteur: "Aude/Wikipédia",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Kempermugshot.jpg?20160323074306",
  },
  {
    titre: "Manson",
    nomDuTueur: "<strong>Nom du Tueur:</strong> Charles Manson",
    age: "<strong>Age :</strong> mort a 83 ans",
    sexe: "<strong>Sexe :</strong> Masculin",
    description:
      "<strong>Statut du tueur :</strong> Criminel, Tueur en serie, Gourou, Musicien.",
    anneeDuCrime:
      "<strong>Année du crime:</strong> 8 aout 1969 au 10 aout 1969",
    nombreDeVictime: "<strong>Nombre De Victime :</strong>  7 ",
    anneeDeSortie: "<strong>Date de Modif :</strong> 14 Septembre 2024",
    nomDeLauteur: "Mickael/Wikipedia",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Manson1968.jpg/300px-Manson1968.jpg",
  },
  {
    titre: "Le Cannibale de Milwaukee ",
    nomDuTueur: "<strong> Nom Du Tueur :</strong> Jeffrey Dahmer",
    age: "<strong> Age :</strong> 34 ans",
    sexe: "<strong> Sexe :</strong> Masculin",
    description:
      "<strong> Statut Du Tueur :</strong> Meurtres, Agressions sexuelles, Exhibitionnisme, Cannibalisme.",
    anneeDuCrime: "<strong> Année Du Crime :</strong> entre 1978 et 1991",
    nombreDeVictime: "<strong> Nombre De Victime :</strong> 17 jeunes hommes",
    anneeDeSortie: "<strong> Date De Modification :</strong> 27 novembre 2024",
    nomDeLauteur: "Julien.B/Wikipédia",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Jeffrey_Dahmer_HS_Yearbook.jpg",
  },
];

// const articles = document.createElement("div");
// articles.classList.add("articles");
// console.log(articles);

// const article = document.createElement("div");
// article.classList.add("article");

// articles.appendChild(article);

// document.body.appendChild(articles)

// const articles = document.getElementById('articles')

const articles = document.getElementById("articles");
const button = document.createElement("button");

for (let i = 0; i < tueurs.length; i++) {
  articles.innerHTML += `<div class="article ${[i]}>
                           <h2>${tueurs[i].titre}</h2>
                           <ul class="charlesManson">
                           <li>${tueurs[i].nomDuTueur}</li>
                           <li>${tueurs[i].age}</li>
                           <li>${tueurs[i].sexe}</li>
                           <li>${tueurs[i].description}</li>
                           <li>${tueurs[i].anneeDuCrime}</li>
                           <li>${tueurs[i].nombreDeVictime}</li>
                           <li>${tueurs[i].anneeDeSortie}</li>
                           <li>${tueurs[i].nomDeLauteur}</li>
                           </ul>
                           <img src="${
                             tueurs[i].cover
                           }" alt="Portrait de tueurs">
                          
                           </div>`;
  button.innerText = "Viens voir!";
}

const article1 = document.getElementsByClassName("article")[0];
const article2 = document.getElementsByClassName("article")[1];
const article3 = document.getElementsByClassName("article")[2];

// article1.addEventListener("click", () => {
//   console.log(article1);
// });

// article2.addEventListener("click", () => {
//   console.log(article2);
// });

// article3.addEventListener("click", () => {
//   console.log(article3);
// });

for (let i = 0; i < articles.length; i++) {
  article1,
    article2,
    article3.addEventListener("click", () => {
      console.log(articles[i]);
    });
}

const titre = document.getElementById("titre");
const audio = document.getElementById("audio");

titre.addEventListener("mouseover", function () {
  audio.play();
});

button.classList.add("my-button");
button.addEventListener("click", function () {
  // window.location.href.blanck = "tpun.html";
  window.open("tpun.html", "_blank");
});

const container = document.getElementById("articles");
articles.appendChild(button);
