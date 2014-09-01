tabset = false;
tabId = 0;

function setTab(id) {
    tabId = id;
    tabset = true;
    chrome.browserAction.setTitle({title: 'Move tab here'});
    chrome.browserAction.setIcon({path: {'19': 'icon19out.png', '38': 'icon38out.png'}});
}

function clearSetTab() {
    tabset = false;
    chrome.browserAction.setTitle({title: 'Move this tab'});
    chrome.browserAction.setIcon({path: {'19': 'icon19in.png', '38': 'icon38in.png'}});
}

function moveTab(windowId, tabid) {
    chrome.tabs.get(tabId, function(tab){
	if (tab) {
	    chrome.tabs.move(tabId, {'windowId': windowId, index: tabid}, function(movedTab){
		    chrome.tabs.update(movedTab.id, {active: true});
});
	}
	clearSetTab();
    });
}

chrome.tabs.onRemoved.addListener(function(id, removeInfo) {
	if (id === tabId) {
	    clearSetTab();
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
    if (tabset) {
	moveTab(tab.windowId, (tab.index + 1));
    } else {
	if (tab.hasOwnProperty('id')) {
	    setTab(tab.id);
	}
    }
});
