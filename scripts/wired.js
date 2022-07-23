import { footer } from "../component/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

import { navbar } from "../component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var airdopes_data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_400x.png?v=1625046386",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fb095277-170c-44ad-9fb8-937342daaef7_400x.png?v=1625046391",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1red_09dd8ad5-5cc8-47b3-8e1b-5c4bfa05be7e_400x.png?v=1592544752",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_orange_400x.png?v=1646036367",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_orange_400x.png?v=1646036367",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/08119dcb-d777-44af-b556-3492e5b4b7f0_400x.png?v=1625046271",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/08119dcb-d777-44af-b556-3492e5b4b7f0_400x.png?v=1625046271",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_400x.png?v=1625046386",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2176f9c3-7b8b-4c29-b6e9-668e45aa6c97_47337d1c-5c17-44d6-b243-f677d8b7586f_400x.png?v=1628674232",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8c4844c5-4a79-4549-a4ab-af2d10efca7e_400x.png?v=1643619646",
    name: "boat Wired",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
];
var added = JSON.parse(localStorage.getItem("boat")) || [];
localStorage.setItem("boat", JSON.stringify("airdopes_data"));
airdopes_data.forEach(function (elem) {
  var div = document.createElement("div");

  div.setAttribute("id", "div_niks");
  var div2 = document.createElement("div");
  div2.setAttribute("id", "div2_niks");

  var btn2 = document.createElement("button");
  btn2.innerText = "Best Seller";
  btn2.setAttribute("class", "btn2_niks");
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
