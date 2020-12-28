// Exercici 1

// Mostra els literals en format ES6

// var li =
//  '<li>' +
// '<div class="row">' +
// '<div class="col-md-4">' +
// '<img src="' + moviePoster + '" height="250" alt="" />' +
// '</div>' +
// '<div class="col-md-8">' +
// '<h2>' + movieTitle + '</h2>' +
// '</div>' +
// '</div>' +
// '</li>';

let moviePoster = "https://images.wallpapersden.com/image/download/it-2017-horror-movie-poster_am1lbGmUmZqaraWkpJRnbmhnrWduaGc.jpg";
let movieTitle = "IT"; 

let li =
`<li>
<div class="row"> 
<div class="col-md-4"> 
<img src="${moviePoster}" height="250" alt="Poster IT" /> 
</div> 
<div class="col-md-8"> 
<h2> ${movieTitle} </h2> 
</div> 
</div> 
</li>`;

console.log(li);