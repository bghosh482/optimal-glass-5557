import { navbar } from "./component/navbar.js";
import { footer } from "./component/footer.js";

let images = [
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A-131-Banner_0e6d2056-3bd5-4ee0-8bd3-7a2a50e30e30_1400x.jpg?v=1657953240",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-pro-banner-zest_1400x.gif?v=1657645605",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wireless-banner_1_1400x.png?v=1657290971",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A131-banner-new_1_1400x.png?v=1658248789",
];

let best_seller = [
  {
    badge: "new-arrival",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_400x.png?v=1657775492",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/06_2538c55d-bcc7-48a8-a569-60a6330c1dc4_400x.jpg?v=1657775492",
    ],
    name: "boAt Airdopes 131 PRO",
    rate: 5.0,
    review: 2,
    actualprice: 2990,
    discountprice: 1299,
  },
  {
    badge: "best-seller",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_400x.png?v=1642405569",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
    ],
    name: "boAt Airdopes 131 - Wireless...",
    rate: 4.8,
    review: 1116,
    actualprice: 2990,
    discountprice: 1299,
  },
  {
    badge: "you save",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_400x.png?v=1648108782",
    ],
    name: "boAt Watch Wave Lite",
    rate: 4.8,
    review: 31,
    actualprice: 6690,
    discountprice: 1799,
  },
  {
    badge: "you save",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_400x.png?v=1648108782",
    ],
    name: "boAt Watch Wave Lite",
    rate: 4.8,
    review: 31,
    actualprice: 6690,
    discountprice: 1799,
  },
];

let dealOftheDay = [
  {
    badge: "new-arrival",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_400x.png?v=1656750183",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_400x.png?v=1656750183",
    ],
    name: "boAt BassHeads 100",
    rate: 4.8,
    review: 407,
    actualprice: 999,
    discountprice: 379,
  },
  {
    badge: "new-arrival",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_400x.png?v=1641801688",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_400x.png?v=1641801688",
    ],
    name: "boAt Rockerz 330",
    rate: 4.8,
    review: 258,
    actualprice: 2990,
    discountprice: 1499,
  },
  {
    badge: "new-arrival",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-102-red_400x.png?v=1633152280",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_400x.png?v=1633152280",
    ],
    name: "boAt BassHeads 102",
    rate: 4.8,
    review: 154,
    actualprice: 1290,
    discountprice: 449,
  },
  {
    badge: "new-arrival",
    img: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_400x.png?v=1656750183",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_400x.png?v=1656750183",
    ],
    name: "boAt BassHeads 100",
    rate: 4.8,
    review: 407,
    actualprice: 999,
    discountprice: 379,
  },
];

let videoData = [
  {
    url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_FfXPPuT9SCQLJn37agEu2_card_thumbnail.mp4?v=11263625270727142314",
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_64x64.png?v=1657869596",
    name: "boAt Airdopes 141",
    des: "Airpodes TWS",
    actualprice: 4490,
    discountprice: 1499,
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_Z0-RLJlUCNvOBH3jAQq0V_card_thumbnail.mp4?v=17400666481025471640",
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-4_1_64x64.png?v=1656016935",
    name: "boAt Storm Pro ",
    des: "Smart watches",
    badge: "new launch",
    actualprice: 6690,

    discountprice: 2999,
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_J5jruxliHDOaP6CargKes_card_thumbnail.mp4?v=7823576618366193591",
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_64x64.png?v=1657869596",
    name: "boAt Airdopes 141 ",
    des: "Airpodes TWS",
    badge: "new launch",
    actualprice: 4490,

    discountprice: 1499,
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_TfTmvwmD0FlcxKDUtLTGE_card_thumbnail.mp4?v=756950886930560398",
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_64x64.png?v=1625045744",
    name: "boAt Airdopes 141 ",
    des: "Airpodes TWS",
    badge: "new launch",
    actualprice: 4490,

    discountprice: 1499,
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_KA4RPukHqJ4Oa3h0nmL2Y_card_thumbnail.mp4?v=8880057425593345752",
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_64x64.png?v=1650387008",
    name: "boAt Watch Xtend‌",
    des: "Smart watches",
    badge: "new launch",
    actualprice: 7990,

    discountprice: 3499,
  },
];
let nav = document.getElementById("navbar");
let ft = document.getElementById("footer");
let card = document.getElementById("card");
let dealday = document.getElementById("dealday");
let boatArr = JSON.parse(localStorage.getItem("boat")) || [];

nav.innerHTML = navbar();
ft.innerHTML = footer();
let i = 0;
function slideShow() {
  setInterval(function () {
    if (i == images.length) {
      i = 0;
    }

    let image = document.createElement("img");
    image.src = images[i];
    document.querySelector("#image").innerHTML = null;
    document.querySelector("#image").append(image);

    i++;
  }, 2000);
}

slideShow();

function append(container, data) {
  container.innerHTML = null;
  data.forEach((ele) => {
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let ndiv1 = document.createElement("div");
    let ndiv2 = document.createElement("div");
    let ndiv3 = document.createElement("div");
    let ndiv4 = document.createElement("div");
    let ndiv5 = document.createElement("div");
    let ndiv6 = document.createElement("div");
    let idiv1 = document.createElement("div");
    let idiv2 = document.createElement("div");
    let idiv3 = document.createElement("div");
    let idiv4 = document.createElement("div");
    let pdiv = document.createElement("div");
    let badge = document.createElement("h3");
    badge.innerText = ele.badge;
    div1.append(badge);
    let image = document.createElement("img");
    image.src = ele.img[0];

    div2.addEventListener("mouseenter", () => {
      image.src = ele.img[1];
    });

    div2.addEventListener("mouseleave", () => {
      image.src = ele.img[0];
    });
    div2.append(image);
    let name = document.createElement("h3");
    name.innerText = ele.name;
    ndiv1.append(name);
    ndiv1.classList.add("name");
    let rating = document.createElement("p");
    rating.innerText = ele.rate;
    idiv1.append(rating);
    let hori = "|";
    idiv2.append(hori);
    let i = document.createElement("i");
    i.className = "fa-solid fa-star";
    idiv4.append(i);
    let review = document.createElement("p");
    review.innerText = `${ele.review} reviews`;
    idiv3.append(review);
    ndiv2.append(idiv4, idiv1, idiv2, idiv3);
    ndiv2.classList.add("dr");
    let hr = document.createElement("hr");
    ndiv3.append(hr);

    let actualPrice = document.createElement("h4");
    actualPrice.innerText = `₹ ${ele.actualprice}`;
    actualPrice.classList.add("actprice");
    let discountprice = document.createElement("h4");
    discountprice.classList.add("disprice");
    discountprice.innerText = `₹ ${ele.discountprice}`;
    pdiv.append(discountprice, actualPrice);
    ndiv4.append(pdiv);
    pdiv.classList.add("price");
    let save = document.createElement("p");
    save.classList.add("save");
    save.innerText = `You Save ₹ ${
      ele.actualprice - ele.discountprice
    }(${Math.ceil(
      ((ele.actualprice - ele.discountprice) / ele.actualprice) * 100
    )}%)`;
    ndiv5.append(save);

    let btn = document.createElement("button");

    btn.innerText = "Add to cart";
    btn.addEventListener("click", () => {
      addToCart(ele);
    });
    ndiv6.append(btn);
    ndiv6.classList.add("addtocart");
    div3.append(ndiv1, ndiv2, ndiv3, ndiv4, ndiv5, ndiv6);
    div3.classList.add("description");
    div.append(div1, div2, div3);
    container.append(div);
  });
}
function addToCart(ele) {
  // console.log(ele);
  boatArr.push(ele);
  // console.log(boatArr);
  localStorage.setItem("boat", JSON.stringify(boatArr));
  window.location.reload();
}

append(card, best_seller);
append(dealday, dealOftheDay);

function videoAppend() {
  let short = document.getElementById("short");
  short.innerHTML = null;
  videoData.forEach((ele) => {
    let videoCard = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let ndiv1 = document.createElement("div");
    let ndiv2 = document.createElement("div");
    let ndiv3 = document.createElement("div");
    div2.classList.add("videodes");
    let video = document.createElement("video");
    let source = document.createElement("source");

    source.src = ele.url;
    video.append(source);
    video.autoplay = true;
    // video.controls = true;
    video.loop = true;
    let image = document.createElement("img");
    div1.append(video);

    let name = document.createElement("p");
    name.innerText = ele.name;

    let des = document.createElement("p");
    des.innerText = ele.des;
    ndiv1.append(name, des);
    ndiv1.className = "video-text";
    let hr = document.createElement("hr");
    hr.id = "hr";
    ndiv2.append(hr);

    let actualprice = document.createElement("p");
    actualprice.innerText = `₹${ele.actualprice}`;
    let discountprice = document.createElement("p");
    discountprice.innerText = `₹${ele.discountprice}`;
    ndiv3.append(discountprice, actualprice);
    ndiv3.className = "video-price";
    let img = document.createElement("img");
    img.src = ele.imgurl;
    img.id = "v_img";

    /*--------------*/

    div2.append(ndiv1, ndiv2, ndiv3, img);
    videoCard.append(div1, div2);
    short.append(videoCard);
  });
}

videoAppend();
document.getElementById("cart-click").addEventListener("click", () => {
  window.location.href = "../fw19_0912/cart.html";
});

let boatProduct = JSON.parse(localStorage.getItem("boat"));
document.getElementById("total_product").innerText = boatProduct.length;
