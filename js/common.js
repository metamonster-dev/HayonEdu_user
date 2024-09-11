$(document).ready(function () {
  //PC에서 뷰포트 조정시 화면 리로드
  // if (!/Mobi|Android/i.test(navigator.userAgent)) {
  //     window.addEventListener('resize', function() {
  //         location.reload();
  //     });
  // }

  $(".label_chk_wrap").click(function () {
    // label 안에 있는 checkbox를 찾아서 체크 상태를 반전
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop("checked", !checkbox.prop("checked"));
  });

  // TAB
  $(".tabs button").on("click", function () {
    const idx = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".sub_contents > div")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    AOS.init();
  });

  // SELECT CUSTOM
  $(".select_wrap > button").on("click", function () {
    $(this).next("ul").toggleClass("on");
  });
  $(".select_wrap ul li button").on("click", function () {
    $(this).parents("ul").removeClass("on");
    $(this).parents("ul").prev("button").text($(this).text());
  });

  // aos
  AOS.init();
});
