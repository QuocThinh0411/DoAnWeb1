function addevents() {

    //redirect to chitietsanpham.html
    var elements = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            window.location = "chitietsanpham.html"
        }, false);
    }

    // var elements = document.getElementsByClassName("name");

    // var myFunction = function () {
    //     window.location = "chitietsanpham.html"
    // };

    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener('click', myFunction, false);
    // }
} 
