var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://img.freepik.com/foto-gratis/hombre-guapo-camisa-blanca-posando-chico-atractivo-peinado-moda-hombre-confiado-barba-corta-chico-adulto-cabello-castano-retrato-primer-plano_186202-8538.jpg", "https://i.pinimg.com/236x/d5/f8/3c/d5f83c809b2f6ceb70a0310883f1fe87.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Libro de Familia Santelli","Rodolfo", "Lismelia", "Mathias", "Sofia"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = images[i];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
