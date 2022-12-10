var index = 1;
changeImage = function(){

    var imgs = ["./assets/image/sanpham (1).jpg","./assets/image/sanpham (2).jpg","./assets/image/sanpham (3).jpg"];

    var imgs2 = ["./assets/image/sanpham (4).jpg","./assets/image/sanpham (5).jpg","./assets/image/sanpham (6).jpg"];
document.getElementById("infoimg").src = imgs[index];
document.getElementById("khuyenmaiimg").src = imgs2[index];
index++;
if(index == 3)
{
    index =0;   
}

}
setInterval(changeImage,2000); 