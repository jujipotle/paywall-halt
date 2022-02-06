chrome.storage.sync.get(['whitelist', 'blacklist'], (data) => {
    if (!chrome.runtime.lastError) {
        let blacklist = data.blacklist;
        let whitelist = data.whitelist;

        var websites = document.getElementsByTagName('a');
        for (var website of websites) {
            var url = website.href;
            var isPaywall = false;
            var paywallName = "";
            var paywallDescription = "";

            for (var blacklisted of blacklist) {
                if (!whitelist.includes(blacklisted.serviceName) && !whitelist.includes(blacklisted.urlKey) && url.includes(blacklisted.urlKey)) {
                    isPaywall = true;
                    paywallName = blacklisted.serviceName;
                    paywallDescription = blacklisted.description;
                    break;
                }
            }

            if (isPaywall) {
                var elem = document.createElement("h1");
                elem.className="warning";
                var node = document.createTextNode(paywallName + ": " + paywallDescription);
                elem.appendChild(node);
                website.appendChild(elem);
            }
        }
        var all = document.getElementsByClassName("warning");
        for (var i = 0; i < all.length; i++) {
            all[i].style.color = 'red';
            all[i].style.fontSize = "large";
        }
    } else {
        console.error(chrome.runtime.lastError)
    }
})
