var images = ["https://thumbs.dreamstime.com/b/beautiful-businesswoman-cartoon-character-business-woman-holding-clipboard-vector-illustration-white-background-198943109.jpg", "https://previews.123rf.com/images/vectorkif/vectorkif1709/vectorkif170900013/85709526-business-man-cartoon-character-in-smart-clothes-office-style-young-handsome-businessman-in-suit-stan.jpg", "https://i.pinimg.com/originals/cb/74/cd/cb74cd3f288ef63bd2ca93a566edda95.jpg","https://image.shutterstock.com/image-vector/cute-kid-welcomevector-illustration-260nw-514865776.jpg","https://thumbs.dreamstime.com/b/family-kids-happy-family-cartoon-caracters-family-family-mother-father-brothers-family-couple-children-group-73828734.jpg"];
var names = ["Mom", "Dad", "Me", "Brother","Us"];
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
