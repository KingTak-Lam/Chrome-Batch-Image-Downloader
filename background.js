chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'download') {
    chrome.downloads.download({
      url: request.url,
      filename: request.filename,
      saveAs: false
    })
    .then(downloadId => {
      console.log('下载开始:', downloadId);
      sendResponse({ success: true, downloadId });
    })
    .catch(error => {
      console.error('下载失败:', error);
      sendResponse({ success: false, error: error.message });
    });

    return true;
  }
});
