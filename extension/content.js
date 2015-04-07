chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message == "getReferrer") {
		chrome.runtime.sendMessage({
			"message": "openReferrer",
			"index": request.index,
			"url": document.referrer
		});
	}
});
