import { footer } from "../component/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

import { navbar } from "../component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
var airdopes_data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d6c575d-bb23-4ba3-a144-eeabb6ae0a9a_400x.png?v=1625045497",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d6eddcd1-2d1b-47a6-9103-77e629241a09_400x.png?v=1625045647",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-2_400x.png?v=1616562632",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_400x.png?v=1625045491",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0893f345-8dbf-4b30-a3fd-8f717bb34d93_400x.png?v=1625045856",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c9b304e6-1451-4ac7-95a1-5aa1cf51df05_400x.png?v=1625046144",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
    name: "boAt Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
    name: "boAt Rockerz",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
];
var added = JSON.parse(localStorage.getItem("boat")) || [];
localStorage.setItem("boat", JSON.stringify(airdopes_data));
airdopes_data.forEach(function (elem) {
  var div = document.createElement("div");

  div.setAttribute("id", "div_niks");
  var div2 = document.createElement("div");
  div2.setAttribute("id", "div2_niks");
  var image = document.createElement("img");
  image.src = elem.image;
  image.setAttribute("class", "niks_photo");
  var name = document.createElement("h3");
  name.innerText = elem.name;
  name.setAttribute("class", "niks_same1");
  var rating = document.createElement("p");
  rating.innerText = elem.rating;
  rating.setAttribute("class", "niks_same2");
  var price = document.createElement("h3");
  price.innerText = elem.price;
  price.setAttribute("class", "niks_same1");
  var button = document.createElement("button");
  button.innerText = "Add to cart";
  button.setAttribute("class", "btn_niks");
  button.addEventListener("click", function () {
    AddToCart(elem);
  });
  div.append(image, name, rating, price, button);
  // div.append(image,div2)
  // div2.append(name,rating,price,button)
  // div.append(image,div2)
  //    document.getElementById("box_niks").append(div,div2)
  document.getElementById("box_niks").append(div);
});
function AddToCart(elem) {
  alert("Item added to cart");
  added.push(elem);
  localStorage.setItem("boat", JSON.stringify(added));
}
