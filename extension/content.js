chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ("getUrl" == request.message) {
		if ("undefined" != typeof location.href && location.href) {
			chrome.runtime.sendMessage({
				"message": "returnUrl",
				"tabId": request.tabId,
				"url": location.href
			});
		}
	}
});
