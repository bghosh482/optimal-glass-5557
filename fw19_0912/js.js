let count=1;
let total=document.querySelectorAll('.btn');
total.forEach(function(element){
    element.addEventListener('click',function(){
        // document.querySelector('.left-container')
        // document.querySelector('.left-sec-container');
        // document.querySelector('.left-third-contaier')
        if(count==0){
        document.querySelector('.left-container').style.display='block'
        document.querySelector('.left-sec-container').style.display='none'
        document.querySelector('.left-third-contaier').style.display='none'
        document.getElementById('cat1').style.color='red';
        document.getElementById('cat2').style.color='black'
        document.getElementById('cat3').style.color='black'

        // element.innerText="Continue"

        }
        else if(count==1){
            document.querySelector('.left-container').style.display='none'
        document.querySelector('.left-sec-container').style.display='block'
        document.querySelector('.left-third-contaier').style.display='none'
        document.getElementById('cat1').style.color='black';
        document.getElementById('cat2').style.color='red'
        document.getElementById('cat3').style.color='black'
        // element.innerText="Continue"

        
        }
        else if(count==2){
            
            document.querySelector('.left-container').style.display='none'
        document.querySelector('.left-sec-container').style.display='none'
        document.querySelector('.left-third-contaier').style.display='block'
        document.getElementById('cat1').style.color='black';
        document.getElementById('cat2').style.color='black'
        document.getElementById('cat3').style.color='red'
        // element.innerText="buss bahut hua"
        console.log(element)
        }
        else{
            // count=1;
        // element.innerText="buss bahut hua"

        }
        console.log(count)
        count++
    })
})


// cat 
let data=document.querySelectorAll('.cat');
console.log(data)
data.forEach(function(element){
    
    element.addEventListener('click',function(event){
       
        let value=element.innerText;
        // console.log(value)
        // document.querySelectorAll('.btn')[2].innerText='continue'

        if(value=='Mobile'){
            document.querySelector('.left-container').style.display='block'
        document.querySelector('.left-sec-container').style.display='none'
        document.querySelector('.left-third-contaier').style.display='none'
        document.getElementById('cat1').style.color='red';
        document.getElementById('cat2').style.color='black'
        document.getElementById('cat3').style.color='black'
        // element.style.color='red'
        count=0;
        }
        else if(value=='Address'){
            document.querySelector('.left-container').style.display='none'
            document.querySelector('.left-sec-container').style.display='block'
            document.querySelector('.left-third-contaier').style.display='none'
            document.getElementById('cat1').style.color='black';
            document.getElementById('cat2').style.color='red'
            document.getElementById('cat3').style.color='black'
        // element.style.color='red'

            count=1;
        }
        else if(value=='Pay'){
            document.querySelector('.left-container').style.display='none'
            document.querySelector('.left-sec-container').style.display='none'
            document.querySelector('.left-third-contaier').style.display='block'
            document.getElementById('cat1').style.color='black';
            document.getElementById('cat2').style.color='black'
            document.getElementById('cat3').style.color='red'
        // element.style.color='red'

            count=2;
        }
    })
})

// display function
// let arr=[
//     {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_400x.png?v=1648108782",name:"swati Parmar",price:54,rating:2.5},
//     {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_400x.png?v=1648108782",name:"swati Parmar",price:67,rating:2.5},
//     {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",name:"swati Parmar",price:45,rating:3.5},
//     {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",name:"swati Parmar",price:545,rating:4.5},


// ] 

var arr = JSON.parse(localStorage.getItem("boat"))||[];

function displayPay(arr){
    let sumu=0;
    let addingPayProduct= document.getElementById("productFinal");
    addingPayProduct.innerHTML="";
    arr.forEach(function (elem) {
        let card = document.createElement("div");
        card.id="card";
        let imagePay = document.createElement("img");
        imagePay.src = elem.image;
    
        let detailDiv = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = elem.name;
    
        let quantityPay = document.createElement("p");
        // var rating = document.createElement("p")
        quantityPay.innerText = "Rating : " + elem.rating;
        // quantityPay.innerText = "Quantity : 1";
    
        let pricePay = document.createElement("p");
        pricePay.innerText = "Price : ₹ " + elem.price;
        sumu= sumu+ Number(elem.price);
        console.log(sumu);
    
        detailDiv.append(name, quantityPay, pricePay);
        card.append(imagePay, detailDiv);
        addingPayProduct.append(card);
       
});
}
displayPay(arr)
function subTotal(){
    let sum=0;
    arr.forEach(function(elem){
        sum+=elem.price
    })
    document.getElementById('subtotal').innerText="₹"+sum; 
    // Total
    document.getElementById('subbTotal').innerText="₹"+sum; 

}
subTotal(arr)

document.getElementById("closeBtn").addEventListener("click", function(){
    document.querySelector("#Parentcontainer").style.display="none";
});

document.getElementById("Confirm").addEventListener("click", function(){
    window.location.href="payimg.html"
})