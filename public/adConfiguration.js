window.moli = window.moli || { que: []};

window.moli.que.push(moli => {
    console.log('configure ad tag');
    moli.configure({
        environment: 'test',
        consent: {
            // do not require a CMP
            enabled: false
        },
        slots: [
            {
              // a div element with this id must be present when the DOM has finished loading
              domId: 'h5v_content_1',

              // GAM ad unit path
              adUnitPath: '/1234/content_1',

              // configure the GAM slot type (out-of-page, interstitial, anchor ad)
              position: 'in-page',

              // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
              behaviour: { loaded: 'manual' },

              // all sizes this ad slot supports
              sizes: [[300, 250]],

              // responsive ads configuration
              sizeConfig: [
                { mediaQuery: '(min-width: 300px)', sizesSupported: [[300, 250]] }
              ]
            }
          ]
    });

    // see if there's a better place to put this
    moli.requestAds();
});