// background.js

// 現在のタブの表示状態を保持する変数
let imageVisible = false;

// アクションボタンがクリックされた時のイベントリスナー
chrome.action.onClicked.addListener(function(tab) {
  // 表示状態を切り替える
  imageVisible = !imageVisible;

  // コンテンツスクリプトにメッセージを送信する
  chrome.tabs.sendMessage(tab.id, { showImage: imageVisible }, function(response) {
    console.log(response.status);
  });
});
