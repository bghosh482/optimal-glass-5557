import { navbar } from "../component/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

import { footer } from "../component/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();
var airdopes_data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-2_400x.png?v=1613457301",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_affc1a7f-f714-4952-9c58-3de269539350_400x.png?v=1645099233",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1800-2_400x.png?v=1613457305",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ABAaupera-FI02_400x.png?v=1657437576",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AB1600DPP_12_1_400x.png?v=1637211337",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f6f2331a-5616-4b54-b400-0fbd8e7ce451_400x.png?v=1625046020",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f6f2331a-5616-4b54-b400-0fbd8e7ce451_400x.png?v=1625046020",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1580-2_4d21c7b8-7232-4207-8fd3-3db05adf3faa_400x.png?v=1633004695",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/24a22560-015e-4da6-b50a-2f54c5da2679_400x.png?v=1625046253",
    name: "boat Audio",
    rating: "⭐4.7|1397 reviews",
    price: "1399",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/83768c76-396a-4cca-9c11-d133764abbe6_400x.png?v=1624881782",
    name: "boat Audio",
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
