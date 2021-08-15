var images = ["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387701617l/120654.jpg", "https://ak.picdn.net/shutterstock/videos/1014618032/thumb/8.jpg", "https://ak.picdn.net/shutterstock/videos/1015448638/thumb/2.jpg", "https://i.pinimg.com/originals/39/47/6f/39476f69d99b889b6ef9ca57091a79c6.jpg"];
var names = ["Family Book", "Mom", "Dad", "Me"];
var i = 0;

function update(){

var array_length = images.length - 1;
var updated_image = images[i];
var updated_text = names[i];

document.getElementById("family_book_image").src = updated_image;
document.getElementById("name").innerHTML = updated_text;

i++;


if(i>array_length){
i = 0;
                
}
}