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

  // SELECT CUSTOM
  $(".select_wrap > button").on("click", function () {
    $(this).parents(".select_wrap").toggleClass("on");
  });
  $(".select_wrap ul li button").on("click", function () {
    $(this).parents(".select_wrap").removeClass("on");
    $(this).parents("ul").prev("button").text($(this).text());
  });

  // FILE CUSTOM
  $(".file_style01 .file_btn input[type=file]").on("change", function () {
    const fileName = $(this).val().split("\\").pop();

    $(this).parents(".file_style01").addClass("isFile");
    $(this).parents(".file_style01").find(".file_name").text(fileName);
  });
  $(".file_style01 .cancel_btn").on("click", function () {
    $(this).parents(".file_style01").removeClass("isFile");
    $(this).parents(".file_style01").find(".file_btn input[type=file]").val("");
    $(this).parents(".file_style01").find(".file_name").text("");
  });

  // TAB
  const tabSlide = new Swiper(".tab_slide", {
    slidesPerView: "auto",
    // spaceBetween: 24,
    // centeredSlides: true,
  });
  $(".tabs_event button").on("click", function () {
    const idx = $(this).parents("li").index();
    $(this).parents("li").addClass("active").siblings().removeClass("active");
    if ($(this).parents(".tabs_event").hasClass("tab_slide")) {
      tabSlide.slideTo(idx);
    }
    $(".sub_contents > div")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    AOS.init();
  });

  // AOS
  AOS.init();

  window.tabSlide = tabSlide;
});

// MODAL
const modalOpen = (modalId) => {
  $(`#${modalId}`).addClass("show");
  $("body").addClass("hidden");
};
const modalClose = (modalId) => {
  $(`#${modalId}`).removeClass("show");
  $("body").removeClass("hidden");
};
