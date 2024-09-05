//PC에서 뷰포트 조정시 화면 리로드
if (!/Mobi|Android/i.test(navigator.userAgent)) {
    window.addEventListener('resize', function() {
        location.reload();
    });
}