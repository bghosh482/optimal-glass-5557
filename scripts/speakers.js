import { footer } from "../component/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

import { navbar } from "../component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
var airdopes_data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main---1_400x.png?v=1640081208",
    name: "boat Speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2c9f9a3f-84d6-4470-a077-41994c6a26c9_400x.png?v=1624897000",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main2_400x.png?v=1632893558",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d3e46a5d-cda9-49f8-a24f-b975fdd50689_400x.png?v=1625046393",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_250_black_400x.png?v=1652335909",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img_Blue_400x.png?v=1617170790",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_51433f16-0d98-497d-9acd-9f10f4264701_400x.png?v=1646976976",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/S190-FI-DC_Batman02_e76ad38a-6cd0-41d9-aba5-7e7ec1e6f54e_400x.png?v=1656101320",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/S190-FI-DC_WW02_a7ba0e48-779c-4625-acb9-2f79310b4c8b_400x.png?v=1656101346",
    name: "boat speakers",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-2_400x.png?v=1655534170",
    name: "boat speakers",
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
