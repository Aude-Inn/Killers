const killer = [
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

    lien: "https://fr.wikipedia.org/wiki/Edmund_Kemper",
  },
];
console.log(killer);

const articles = document.getElementById("articles");

const lien = document.createElement("a");
lien.href = killer[0].lien;
lien.target = "_blank";
lien.innerText = "En savoir plus sur Wikipédia";
document.body.appendChild(lien);

for (let i = 0; i < killer.length; i++) {
  articles.innerHTML += `<div class="article ${[i]}>
                             <h2>${killer[i].titre}</h2>
                             <ul class="charlesManson">
                             <li>${killer[i].nomDuTueur}</li>
                             <li>${killer[i].age}</li>
                             <li>${killer[i].sexe}</li>
                             <li>${killer[i].description}</li>
                             <li>${killer[i].anneeDuCrime}</li>
                             <li>${killer[i].nombreDeVictime}</li>
                             <li>${killer[i].anneeDeSortie}</li>
                             <li>${killer[i].nomDeLauteur}</li>
                             </ul>
                             <img src="${
                               killer[i].cover
                             }" alt="Portrait de tueurs">
                             <a href=${
                               killer[0].lien
                             }"https://fr.wikipedia.org/wiki/Edmund_Kemper"/>
                             </div>`;
}
