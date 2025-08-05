// 當前頁面開啟後，隨機出現錯誤訊息（模擬干擾）
setTimeout(() => {
  const messages = [
    "⚠️ 警告：您無權瀏覽此資料。",
    "連線錯誤：無法載入完整檔案。",
    "███ 錯誤：記錄損毀。"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
}, Math.random() * 3000 + 2000);
