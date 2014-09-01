tabset = false;
tabId = 0;

chrome.browserAction.onClicked.addListener(function(tab) {
    if (tabset) {
	chrome.tabs.move(tabId, {'windowId': tab.windowId, index: -1});
	tabset = false;
    } else {
	tabId = tab.id;
	tabset = true;
    }
});
