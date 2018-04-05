var MobileBrowser = require('../node_modules/mobile-web-browser-emulator/lib/index.js').MobileBrowser;
console.log(MobileBrowser);
var mobileBrowser = new MobileBrowser();
mobileBrowser.emulate({
    url: 'http://dev.mytrustedaid.com',
    width: 300,
    height: 700
},
function(browser) {
    browser.do(function(driver) {
        driver.getTitle().then(function(title) {
            console.log(title);
        });
    });
});

Meteor.startup(() => {

    Meteor.methods({

        'Create': function(abc) {
            console.log(abc);
            Demo.insert({
                naming: abc,
                status: 'active'
            });
        },

        'Updatedata': function(abc, getID) {

            Demo.update(getID, {
                $set: {
                    naming: abc,
                    createdAt: new Date()
                }
            });

        },

        'Deletdata': function(abc) {
            Demo.remove(abc);
        }

    });

});