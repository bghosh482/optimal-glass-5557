
function gerData(){
let data = JSON.parse(localStorage.getItem('dataLS'));
let x = false;
    let Email = document.querySelector('#email').value
    let pass = document.querySelector('#password').value

    data.forEach(el => {
        if(Email === el.email && pass === el.password){
            x = true
        }
    });
    if(x==true){
        alert("login successful")
        window.location.href = "index.html";
    }else{
        alert("try again")
    }
}