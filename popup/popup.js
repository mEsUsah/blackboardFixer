document.addEventListener('DOMContentLoaded', function () {
    const manipulateBtn = document.getElementById('manipulateBtn');

    manipulateBtn.addEventListener('click', async function () {
        try {
            let tabs = await chrome.tabs.query({active: true, currentWindow: true});
            
            chrome.tabs.sendMessage(tabs[0].id, {
            action: 'bb_changeHeight',
            });

            // Provide visual feedback
            manipulateBtn.textContent = 'Fuck yeah!! 🤘';
            manipulateBtn.style.background = '#34a853';
            manipulateBtn.classList.add('shaking');

        } catch (error) {
            manipulateBtn.textContent = 'Error occurred';
            manipulateBtn.style.background = '#ea4335';
        }
    });
});