// モーダル（div実装）
// 必要な要素の取得
const openModalDiv = document.getElementById('open-modal-div');
const closeModalDiv = document.getElementById('close-modal-div');
const overlayDiv = document.getElementById('overlay-div');
const modalDivBox = document.getElementById('modal-div-box');

// 開く
openModalDiv.addEventListener('click', () => {
  overlayDiv.style.display = 'flex';
});

// 閉じるボタン
closeModalDiv.addEventListener('click', () => {
  overlayDiv.style.display = 'none';
});

// オーバーレイクリックで閉じる
overlayDiv.addEventListener('click', () => {
  overlayDiv.style.display = 'none';
});

// モーダルボックスないクリックでは閉じない
modalDivBox.addEventListener('click', (e) => {
  e.stopPropagation();
});

// モーダル（dialog実装）
// 必要な要素の取得
const openModalDialog = document.getElementById('open-modal-dialog');
const closeModalDialog = document.getElementById('close-modal-dialog');
const dialogBox = document.getElementById('dialog-box');

// 開く
openModalDialog.addEventListener('click', () => {
  dialogBox.showModal();
});

// 閉じる(ボタン)
closeModalDialog.addEventListener('click', () => {
  dialogBox.close();
});

// 閉じる(::backdropクリックで閉じる)
dialogBox.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === dialogBox) {
    dialogBox.close();
  }
});
