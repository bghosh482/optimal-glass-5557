import { footer } from "../component/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();

import { navbar } from "../component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
var airdopes_data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b6960b52-58d9-4e72-bd08-e4ae4f111bb2_400x.png?v=1645517420",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_400x.png?v=1648723865",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_e269db64-c847-4f30-b904-ccb4d973ae52_400x.png?v=1655526604",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_white_400x.png?v=1641206209",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c5f9fe7c-c012-4d93-ba0c-b25267c0560d_400x.png?v=1647426797",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_eb862c0f-658f-43a2-99c2-65783233f592_400x.png?v=1641980344",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-pink_9a1088cc-2e91-4acb-9d7c-841033532bfe_400x.png?v=1615468286",
    name: "boat Airdopes",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_400x.png?v=1658150489",
    name: "boat Airdopes",
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
