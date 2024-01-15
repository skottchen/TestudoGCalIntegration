const importBtn = document.createElement("button");
const link = document.querySelector('a');
const popupBody = document.querySelector("body");
importBtn.style.backgroundColor = "lightblue";
importBtn.textContent = "Import my schedule to Google Calendar!";
importBtn.classList.add("import-btn");

//this function was provided by the Chrome Extension API
async function getCurrentTab() {//returns a promise
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function verifyCurrectTabAndOpenPopup() {
    return getCurrentTab().then(
        function (response) {
            return response;
        }
    ).then(
        function (response) {
            if (response.url.startsWith('https://app.testudo.umd.edu/#/main/schedule?termId')) {
                link.remove();
                popupBody.appendChild(importBtn);
            }
        }
    )
}

verifyCurrectTabAndOpenPopup();

