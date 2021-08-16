var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://lh3.googleusercontent.com/proxy/KCzVb0mD-DWJmjwakjKD8QLLqEE7Y9-Ztf7Hv4tsh3a_6GWonvfn_PY4Dz0LNxIuWJCWpV2f1Wu5sb5adnHQcaVcR3skeJf7OvFExLk4ug", "https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171207137/91230755-young-girl-kid-character-standing-cartoon-vector-illustration.jpg", "family.png"];
var names = ["Mom", "Dad", "Me", "Us"];
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
