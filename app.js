function copyElementToClipboard(){
    const email = "indrek93@gmail.com";
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$(document).ready(function(){
    $(".toggle-darkmode").click(function(){
        $(".toggle-darkmode").toggleClass("toggle-darkmode-rotate-button");
        $("body").toggleClass("body-darkmode");
        $(".background-1").toggleClass("background-1-darkmode")
        $(".background-2").toggleClass("background-2-darkmode")
        $(".background-3").toggleClass("background-3-darkmode")
        $(".background-4").toggleClass("background-4-darkmode")
    })
  });