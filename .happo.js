const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: '000a78f8b3',
    apiSecret: '74183ea6796e6947939da53e5',

    targets: {
        'chrome': new RemoteBrowserTarget('chrome', {
            viewport: '1024x768',
        }),
        'chrome-mobile': new RemoteBrowserTarget('chrome', {
            viewport: '375x768',
        }),
        safari: new RemoteBrowserTarget('safari', {
            viewport: '1024x768',
            scrollStitch: true,
        }),
        'ios-safari': new RemoteBrowserTarget('ios-safari', {
            viewport: '375x768',
            scrollStitch: true,
        }),
    },
};