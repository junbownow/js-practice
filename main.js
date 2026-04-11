//// モーダル（div実装）
// 必要な要素の取得
const openModalDiv = document.getElementById('open-modal-div');
const closeModalDiv = document.getElementById('close-modal-div');
const overlayDiv = document.getElementById('overlay-div');

// 開く
openModalDiv.addEventListener('click', () => {
  overlayDiv.style.display = 'flex';
});

// 閉じる
closeModalDiv.addEventListener('click', () => {
  overlayDiv.style.display = 'none';
});

// 閉じる（モーダル以外の場所をクリックで閉じる）
document.addEventListener('click', (e) => {
  if (e.target === overlayDiv) {
    overlayDiv.style.display = 'none';
  }
});

//// モーダル（dialog実装）
// 必要な要素の取得
const openModalDialog = document.getElementById('open-modal-dialog');
const closeModalDialog = document.getElementById('close-modal-dialog');
const dialogBox = document.getElementById('dialog-box');

// 開く
openModalDialog.addEventListener('click', () => {
  dialogBox.showModal();
});

// 閉じる
closeModalDialog.addEventListener('click', () => {
  dialogBox.close();
});

// 閉じる（:backdropクリックで閉じる）
document.addEventListener('click', (e) => {
  if (e.target === dialogBox) {
    dialogBox.close();
  }
});

//// タブ切り替え
// 必要な要素の取得
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// 切り替え処理
tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // 全ての要素からactive除外
    tabBtns.forEach((b) => b.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    // クリックしたボタンと、ボタンに紐づくコンテンツにactive付与
    btn.classList.add('active');
    const targetId = btn.dataset.btn;
    document.getElementById(targetId).classList.add('active');
  });
});

//// アニメーション（CSS）
// 必要な要素の取得
const animationStart = document.getElementById('animation-start');
const animationReset = document.getElementById('animation-reset');
const animationBox = document.getElementById('animation-box');

// 開始ボタン
animationStart.addEventListener('click', () => {
  animationBox.classList.add('active');
});

// リセットボタン
animationReset.addEventListener('click', () => {
  animationBox.classList.remove('active');
});

//// アニメーション（GSAP）
// 必要な要素の取得
const gsapStart = document.getElementById('gsap-start');
const gsapReset = document.getElementById('gsap-reset');
const gsapBox = document.getElementById('gsap-box');

// 開始ボタン
gsapStart.addEventListener('click', () => {
  gsap.to(gsapBox, {
    duration: 0.6,
    opacity: 1,
    y: 0,
    ease: 'power2.out',
  });
});

// リセットボタン
gsapReset.addEventListener('click', () => {
  gsap.to(gsapBox, {
    duration: 0.3,
    opacity: 0,
    y: 20
  });
});


//// ハンバーガーメニュー
// 必要な要素の取得
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerMenu = document.getElementById('hamburger-menu');

// 開閉
hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburgerBtn.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

// ハンバーガーメニュー外をクリックで閉じる
document.addEventListener('click', () => {
  hamburgerBtn.classList.remove('active');
  hamburgerMenu.classList.remove('active');
});

// ハンバーガーメニュー内のリンククリックで閉じる
hamburgerMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  });
});

// ハンバーガーメニューのリンク以外をクリックで閉じない
hamburgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});


//// スクロールアニメーション（IntersectionObserver）
// 必要な要素の取得
const ioBoxes = document.querySelectorAll('#io-boxes .scroll-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(ioBoxes).indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 500);
    }
  });
}, { threshold: 0.3 });

ioBoxes.forEach((box) => {
  observer.observe(box);
});


//// スクロールアニメーション（ScrollTrigger）
// 必要な要素の取得
const gsapScrollBoxes = document.querySelectorAll('#gsap-boxes .gsap-scroll-box');

gsapScrollBoxes.forEach((box, index) => {
  gsap.to(box, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: index * 0.5,
    scrollTrigger: {
      trigger: box,
      start: 'top 80%',
    }
  });
});
