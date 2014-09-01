tabset = false;
tabId = 0;

chrome.browserAction.onClicked.addListener(function(tab) {
    if (tabset) {
	chrome.tabs.move(tabId, {'windowId': tab.windowId, index: -1});
	tabset = false;
	chrome.browserAction.setIcon({path: {'19': 'icon19in.png', '38': 'icon38in.png'}});
    } else {
	tabId = tab.id;
	tabset = true;
	chrome.browserAction.setIcon({path: {'19': 'icon19out.png', '38': 'icon38out.png'}});
}
});
