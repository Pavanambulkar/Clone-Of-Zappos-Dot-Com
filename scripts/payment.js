document.querySelector("#sub").addEventListener("click", function(){
    swal({
        title: "Good job!",
        text:  "Payment is successful!",
        type: "success"
    }).then(function(){
        window.location.href = "index.html";
    })
 
} );