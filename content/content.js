chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'bb_changeHeight'){
        document.querySelector(".content-item-container-children").style.height = "95vh";
    }
});