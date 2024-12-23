const books = [
  {
    id: 1,
    title: "Le Petit Prince",
    genre: "Fiction",
    price: 10,
    rating: 4.8,
    cover:
      "https://www.gallimard-bd.fr/assets/media/cache/cover_medium/gallimard_img/image/A60339.jpg",
  },
  {
    id: 2,
    title: "1984",
    genre: "suspense",
    price: 15,
    rating: 4.7,
    cover:
      "https://m.media-amazon.com/images/I/61KJGDUD9cL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "JavaScript for Beginners",
    genre: "Informatique",
    price: 25,
    rating: 4.3,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvpszTYXSkWlT-6SOR8n413EfDQJYFULVNA&s",
  },
  {
    id: 4,
    title: "CSS Mastery",
    genre: "Informatique",
    price: 20,
    rating: 4.5,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozlzrQEV59lXLbbkFysqjviHZLoTqvYjMZg&s",
  },
  {
    id: 5,
    title: "Harry Potter",
    genre: "Fiction",
    price: 8,
    rating: 4.9,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTHN3KNQuYA81jII2lO7pWi39W-kPZRXhMg&s",
  },
  {
    id: 6,
    title: "Clean Code",
    genre: "Informatique",
    price: 30,
    rating: 4.7,
    cover:
      "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
  },
];

const app = document.getElementById("app");

books.map((book) => {
  const div = document.createElement("div");
  div.className = "book-card";
  div.innerHTML = `
            <div class="book-details">
                <h2>${book.title} </h2> 
                <p>Genre: <span class="badge badge-${book.genre}">${book.genre}</span></p>
                <p>Prix: ${book.price}€</p>
                </div>
                <div class="book-cover">
                <a href="detail.html?id=${book.id}">Detail</a>
                <button id="btn">click</button>
                <img src="${book.cover}" alt="${book.title}">
            </div>
 `;

  // div.addEventListener('click', ()=>{
  //         console.log('click', book.id)
  //     })
  app.appendChild(div);
});
