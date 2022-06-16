document.querySelector("#loginBtn").addEventListener("click", function(){
    swal({
        title: 'Welcome!',
        text:  "Login Successful",
        type: "success"
    }).then(function(){
        window.location.href = "index.html";
    })
  })