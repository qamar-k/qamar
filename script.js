// دالة لإخفاء شاشة التحميل بعد 3 ثوانٍ
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
}

// التأكد من أن الصفحة تعرض بعد 3 ثوانٍ
window.addEventListener('load', () => {
  setTimeout(hideLoadingScreen, 3000);
});
