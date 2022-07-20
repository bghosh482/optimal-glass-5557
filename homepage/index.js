let image = [
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A-131-Banner_0e6d2056-3bd5-4ee0-8bd3-7a2a50e30e30_1400x.jpg?v=1657953240",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-pro-banner-zest_1400x.gif?v=1657645605",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wireless-banner_1_1400x.png?v=1657290971",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A131-banner-new_1_1400x.png?v=1658248789",
];

// let best_seller = [
//   {
//     badge: "new-arrival",
//     img: [
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_400x.png?v=1657775492",
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/06_2538c55d-bcc7-48a8-a569-60a6330c1dc4_400x.jpg?v=1657775492",
//     ],
//     name: "boAt Airdopes 131 PRO",
//     rate: 5.0,
//     review: 2,
//     actualprice: 2990,
//     discountprice: 1299,
//   },
//   {
//     badge: "best-seller",
//     img: [
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_400x.png?v=1642405569",
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
//     ],
//     name: "boAt Airdopes 131 - Wireless...",
//     rate: 4.8,
//     review: 1116,
//     actualprice: 2990,
//     discountprice: 1299,
//   },
//   {
//     badge: "you save",
//     img: [
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781",
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_400x.png?v=1648108782",
//     ],
//     name: "boAt Watch Wave Lite",
//     rate: 4.8,
//     review: 31,
//     actualprice: 6690,
//     discountprice: 1799,
//   },
// ];
let i = 0;
let img_src = document.getElementById("img_src");
img_src.src = image[i];

document.getElementById("next").addEventListener("click", () => {
  if (image.length == i) {
    i = 0;
  }

  img_src.src = image[i];
  i++;
});
