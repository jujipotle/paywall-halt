function addWhitelistItem(serviceName, urlKey) {
    chrome.storage.sync.get({whitelist: []}, (data) => {
        if (!chrome.runtime.lastError) {
            data.whitelist.push({
              serviceName: serviceName,
              urlKey: urlKey,
              description: "Custom"
            })
            chrome.storage.sync.set({
                whitelist: data.whitelist 
            })
        } else {
            console.log(chrome.runtime.lastError)
        }
    })
}


function addBlacklistItem(serviceName, urlKey) {
    chrome.storage.sync.get({blacklist: []}, (data) => {
        if (!chrome.runtime.lastError) {
            data.blacklist.push({
              serviceName: serviceName,
              urlKey: urlKey,
              description: "Custom"
            })
            chrome.storage.sync.set({
                blacklist: data.blacklist 
            })
        } else {
            console.log(chrome.runtime.lastError)
        }
    })
}

function readLists() {
    chrome.storage.sync.get({whitelist: [], blacklist: []}, (data) => {
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
  document.querySelector("#blacklistForm").addEventListener("submit", function(e, item, urlKey) {
      e.preventDefault()
      addBlacklistItem(document.getElementById("blServiceName").value, document.getElementById("blUrlKey").value)
  });
  document.querySelector('#printBlacklistBtn').addEventListener('click', readLists);

  chrome.storage.sync.get({blacklist: [], whitelist: []}, (data) => {
    document.querySelector("#whitelistForm").addEventListener("submit", function(e, item, urlKey) {
        e.preventDefault()
        addWhitelistItem(document.getElementById("wlServiceName").value, document.getElementById("wlUrlKey").value)
    });

    document.querySelector('#printBlacklistBtn').addEventListener('click', readLists);
      if (!chrome.runtime.lastError) {
        let blList = document.querySelector("#blacklist")

        for (let i = 0; i < data.blacklist.length; i++) {
          let div = document.createElement("div")
          div.innerHTML = `${data.blacklist[i].urlKey}`
          blList.appendChild(div)
        }

        let wlList = document.querySelector("#whitelist")

        for (let i = 0; i < data.whitelist.length; i++) {
          let div = document.createElement("div")
          div.innerHTML = `${data.whitelist[i].urlKey}`
          wlList.appendChild(div)
        }
      } else {
          console.log(chrome.runtime.lastError)
      }
  })
})


