document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.topImg div');
    const totalImages = images.length;
  
    function showNextImage() {
      images[currentIndex].style.opacity = 0;
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].style.opacity = 1;
    }
  
    setInterval(showNextImage, 5000); // 5秒ごとに画像を切り替える
  
    // 最初の画像を表示
    images[currentIndex].style.opacity = 1;

    // フェードイン効果を追加
    setTimeout(() => {
        document.querySelector('.topTxt').classList.add('fade-in');
    }, 1000); // 1秒後にフェードイン

    setTimeout(() => {
        document.querySelector('header').classList.add('header-fade-in');
    }, 2000); // 2秒後にフェードイン
});
