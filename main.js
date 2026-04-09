//// モーダル（div実装）
// 必要な要素の取得
const openModalDiv = document.getElementById('open-modal-div');
const closeModalDiv = document.getElementById('close-modal-div');
const overlayDivBox = document.getElementById('overlay-div');
const modalDivBox = document.getElementById('modal-div-box');

// 開くボタン
openModalDiv.addEventListener('click', () => {
  overlayDivBox.style.display = 'flex';
});

// 閉じるボタン
closeModalDiv.addEventListener('click', () => {
  overlayDivBox.style.display = 'none';
});

// オーバーレイクリックで閉じる
overlayDivBox.addEventListener('click', () => {
  overlayDivBox.style.display = 'none';
});

// モーダル本体クリックでは閉じない
modalDivBox.addEventListener('click', (e) => {
  e.stopPropagation();
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

// 閉じる（::backdropクリックで閉じる）
dialogBox.addEventListener('click', (e) => {
  if (e.target === dialogBox) {
    dialogBox.close();
  }
});

//// タブ切り替え
// 必要な要素の取得
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // 全ての要素からactiveを除外
    tabBtns.forEach((b) => b.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    // クリックしたタブと紐づいているコンテンツにactive付与
    btn.classList.add('active');
    const targetId = btn.dataset.btn;
    document.getElementById(targetId).classList.add('active');
  });
});

//// アニメーション（CSS）
// 必要な要素の取得
const animationBox = document.getElementById('animation-box');
const animationStart = document.getElementById('animation-start');
const animationReset = document.getElementById('animation-reset');

// 開始
animationStart.addEventListener('click', () => {
  animationBox.classList.add('active');
});

// リセット
animationReset.addEventListener('click', () => {
  animationBox.classList.remove('active');
});

//// アニメーション（GSAP)
// 必要な要素の取得
const gsapBox = document.getElementById('gsap-box');
const gsapStart = document.getElementById('gsap-start');
const gsapReset = document.getElementById('gsap-reset');

// 開始
gsapStart.addEventListener('click', () => {
  gsap.to(gsapBox, {
    duration: 0.6,
    opacity: 1,
    y: 0,
    ease: 'power2.out',
  });
});

// リセット
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

// メニュー外クリックで閉じる
document.addEventListener('click', () => {
  hamburgerBtn.classList.remove('active');
  hamburgerMenu.classList.remove('active');
});