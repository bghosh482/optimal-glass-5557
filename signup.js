


let data = JSON.parse(localStorage.getItem('dataLS')) ||[];

function getData(){

    let name = document.querySelector('#name').value;
    let lname = document.querySelector('#last_name').value;
    let email=document.querySelector('#email').value;
    let password = document.querySelector('#password').value
    let obj = {
        name : name,
        lastName : lname,
        email: email,
        password: password
    }
    data.push(obj)
    localStorage.setItem("dataLS",JSON.stringify(data))
    window.location.href="login.html"
}