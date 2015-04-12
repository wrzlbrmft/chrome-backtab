var tabs = {};

chrome.browserAction.onClicked.addListener(function(tab) {
	if ("undefined" != typeof tabs[tab.id]) {
		chrome.tabs.update(tabs[tab.id].openerTabId, {
				"active": true
			},
			function(openerTab) {
				if ("undefined" == typeof openerTab) {
					chrome.tabs.create({
						"index": tab.index,
						"url": tabs[tab.id].openerTabUrl
					});
				}
			}
		)
	}
});

chrome.tabs.onCreated.addListener(function(tab) {
	if ("undefined" != typeof tab.openerTabId && tab.openerTabId) {
		chrome.tabs.sendMessage(tab.openerTabId, {
			"message": "getUrl",
			"tabId": tab.id
		});
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ("returnUrl" == request.message) {
		tabs[request.tabId] = {
			"openerTabId": sender.tab.id,
			"openerTabUrl": request.url
		};
	}
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
	delete tabs[tabId];
});
