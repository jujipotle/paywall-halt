chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        blacklist: [
            {
                urlKey: "chegg.com",
                serviceName: "Chegg",
                description: "Subscription Required"
            },
            {
                urlKey: "netflix.com",
                serviceName: "Netflix",
                description: "Subscription Required"
            },
            {
                urlKey: "hulu.com",
                serviceName: "Hulu",
                description: "Subscription Required"
            },
            {
                urlKey: "latimes.com",
                serviceName: "Los Angeles Times",
                description: "Subscription Required"
            },
            {
                urlKey: "coursehero.com",
                serviceName: "Course Hero",
                description: "Subscription Required"
            },
            {
                urlKey: "wsj.com",
                serviceName: "The Wall Street Journal",
                description: "Subscription Required"
            },
            {
                urlKey: "quizlet.com",
                serviceName: "Quizlet",
                description: "3 Solutions Free"
            },
            {
                urlKey: "study.com",
                serviceName: "Study.com",
                description: "Pay to see full lesson"
            },
            {
                urlKey: "technologyreview.com",
                serviceName: "MIT Technology Review",
                description: "3 Stories Free"
            },
            {
                urlKey: "nytimes.com",
                serviceName: "The New York Times",
                description: "3 Stories Free"
            },
            {
                urlKey: "bloomberg.com",
                serviceName: "Bloomberg",
                description: "1 Story Free"
            },
            {
                urlKey: "washingtonpost.com",
                serviceName: "The Washington Post",
                description: "4 Week Free Trial"
            },
        ],
        whitelist: []
    });
});