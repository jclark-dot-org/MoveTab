tabset = false;
tabId = 0;

function setTab(id) {
    tabId = id;
    tabset = true;
    chrome.browserAction.setIcon({path: {'19': 'icon19out.png', '38': 'icon38out.png'}});
}

function moveTab(windowId) {
    chrome.tabs.move(tabId, {'windowId': windowId, index: -1});
    tabset = false;
    chrome.browserAction.setIcon({path: {'19': 'icon19in.png', '38': 'icon38in.png'}});
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if (tabset) {
	moveTab(tab.windowId);
    } else {
	if (tab.hasOwnProperty('id')) {
	    setTab(tab.id);
	}
    }
});
