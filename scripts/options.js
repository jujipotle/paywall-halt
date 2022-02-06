function addWhitelistItem(item) {
    chrome.storage.sync.get({whitelist: []}, (data) => {
        if (!chrome.runtime.lastError) {
            data.whitelist.push(item)
            chrome.storage.sync.set({
                whitelist: data.whitelist 
            })
        } else {
            console.log(chrome.runtime.lastError)
        }
    })
}

function readLists() {
    chrome.storage.sync.get({whitelist: []}, (data) => {
        if (!chrome.runtime.lastError) {
            let whitelist = data.whitelist
            let blacklist = data.blacklist
            console.log(whitelist, blacklist)
        } else {
            console.error(chrome.runtime.lastError)
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#blacklistForm").addEventListener("submit", function(e, item) {
        e.preventDefault()
        addWhitelistItem(document.getElementById("blacklistItem").value)
    });
    document.querySelector('#printBlacklistBtn').addEventListener('click', readLists);

    document.querySelector("#whitelistForm").addEventListener("submit", function(e, item) {
        e.preventDefault()
        addWhitelistItem(document.getElementById("whitelistItem").value)
    });
    document.querySelector('#printWhitelistBtn').addEventListener('click', readLists);
})