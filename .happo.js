const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: '4d84576e0f',
    apiSecret: '19d344588c7894312680e3993',

    targets: {
        'chrome-desktop': new RemoteBrowserTarget('chrome', {
            viewport: '1024x768',
        }),
        safari: new RemoteBrowserTarget('safari', {
            viewport: '1024x768',
            scrollStitch: true,
        }),
        'ios-safari': new RemoteBrowserTarget('ios-safari', {
            viewport: '1024x768',
            scrollStitch: true,
        }),
    },

};