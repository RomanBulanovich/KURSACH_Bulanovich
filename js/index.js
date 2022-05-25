let arr = ["rgb(82, 124, 240)", "rgb(65, 140, 170)", "rgb(63, 138, 168)","rgb(82, 124, 240)"];
let colorState = 0;
let colorState1 = 0;
$.fn.extend({
  toggleText: function (a, b) {
    return this.text(this.text() == b ? a : b);
  },
});
window.onload = function () {
  $(".button.form").click(function () {
    $(".button.form").toggleText("Отправлено", "Отправить");
    switchColor($(".button.form"));
  });
  function switchColor(trg) {
    colorState++;
    if (colorState >= arr.length) {
      colorState = 0;
    }
    trg.css("background", arr[colorState]);
  }
  $(".button.popip").click(function () {
    $(".button.popip").toggleText("Выбрать", "Выбранно");
    switchColor($(".button.popip"));
  });
  function switchColor(trg) {
    colorState1++;
    if (colorState1 >= arr.length) {
      colorState1 = 0;
    }
    trg.css("background", arr[colorState1]);
  }
};
$(".price").click(function(e)
{
  console.log($(e.target).parents(".content").children(".title").text());
  console.log($(e.target).parents(".content").children(".text").text());
  console.log((e.target).innerText);
  $(".popup").addClass("open")
  $(".popup .wrapper .title").text($(e.target).parents(".content").children(".title").text())
  $(".popup .wrapper img").attr("src",$(e.target).parents(".product_item").children(".img").children("img").attr("src"))
  $(".popup .cost").text((e.target).innerText)
  $(".popup .button").click(function(){
    $(".popup").removeClass("open");
  })
}
)
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});

