import { tns } from "tiny-slider";

console.log("Hello World");

var slider = tns({
  container: ".owl-carousel",
  items: 3,
  slideBy: "item",
});

console.log(slider);
