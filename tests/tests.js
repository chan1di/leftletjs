/*========For alaska=========*/

describe('Alaska', () => {
    it('Submitting Alaska', function() {
        browser.url("https://www.commerce.alaska.gov/cbp/main/search/entities");
        // browser.waitForExist('.dnn_ContentPane', 20000);
        browser.pause('3000');
        browser.setValue('#EntityName', 'asd');
        browser.pause('3000');
        browser.click('input.dccedBtn');
        browser.pause('3000');
    });
});
/*==========================*/