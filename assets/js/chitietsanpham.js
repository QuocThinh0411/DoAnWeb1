var index = 1;
 function changeImage(){

    var imgs = ["../image/unadd.png","../image/add.png"];

   
document.getElementById("addtof").src = imgs[index];
index++;

if(index == 2)
{
    index =0;   
}

}

function gotocart(){
 
    window.location="../layout/cart.html"
}
      




function chonmau(){
    var value = document.getElementById("chonmau");
    var image = document.getElementById("img_main");
    var image1 = document.getElementById("img_1");
    var image2 = document.getElementById("img_2");
    var image3 = document.getElementById("img_3");



    if (value.value == 'red'){
        image.src = "../image/sanpham (18).jpg";
     image1.src ="../image/sanpham (14).jpg"
     image2.src ="../image/sanpham (15).jpg"
     image3.src ="../image/sanpham (16).jpg"

    } else if(value.value == 'blue'){
        image.src = "../image/sanpham (14).jpg";
     image1.src ="../image/sanpham (18).jpg"
     image2.src ="../image/sanpham (15).jpg"
     image3.src ="../image/sanpham (16).jpg"

    }
     else if(value.value == 'green'){
     image.src = "../image/sanpham (15).jpg";
     image1.src ="../image/sanpham (18).jpg"
     image2.src ="../image/sanpham (14).jpg"
     image3.src ="../image/sanpham (16).jpg"

    }
   
    else if(value.value == 'lightblue'){
        image.src = "../image/sanpham (16).jpg";
     image1.src ="../image/sanpham (18).jpg"
     image2.src ="../image/sanpham (14).jpg"
     image3.src ="../image/sanpham (15).jpg"

    }
    
}