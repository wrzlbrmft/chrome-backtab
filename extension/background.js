chrome.browserAction.onClicked.addListener(function(tab) {
	if (typeof tab.openerTabId != "undefined" && tab.openerTabId) {
		chrome.tabs.get(tab.openerTabId, function(tab) {
			chrome.tabs.update(tab.id, {
				"active": true
			});
		});
	}
	else {
		chrome.tabs.sendMessage(tab.id, {
			"message": "getReferrer",
			"index": tab.index
		});
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message == "openReferrer") {
		if (typeof request.url != "undefined" && request.url) {
			chrome.tabs.create({
				"index": request.index,
				"url": request.url
			});
		}
	}
});

