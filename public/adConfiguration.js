window.moli = window.moli || { que: [] };

window.moli.que.push((moli) => {
  console.log("configure ad tag");
  moli.enableSinglePageApp();
  moli.configure({
    environment: "test",
    consent: {
      // do not require a CMP
      enabled: false,
    },
    slots: [
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_content_1",

        // GAM ad unit path
        adUnitPath: "/1234/content_1",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
        behaviour: { loaded: "manual" },

        // all sizes this ad slot supports
        sizes: [[300, 250]],

        // responsive ads configuration
        sizeConfig: [
          { mediaQuery: "(min-width: 300px)", sizesSupported: [[300, 250]] },
        ],
      },
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_content_2",

        // GAM ad unit path
        adUnitPath: "/1234/content_2",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // triggered immediately
        behaviour: { loaded: "eager" },

        // all sizes this ad slot supports
        sizes: [[300, 250]],

        // responsive ads configuration
        sizeConfig: [
          { mediaQuery: "(min-width: 300px)", sizesSupported: [[300, 250]] },
        ],
      },
      // wallpaper stuff
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_header",

        // GAM ad unit path
        adUnitPath: "/1234/header",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
        behaviour: { loaded: "manual" },

        // all sizes this ad slot supports
        sizes: [[728, 90]],

        // responsive ads configuration
        sizeConfig: [
          { mediaQuery: "(min-width: 300px)", sizesSupported: [[728, 90]] },
        ],
      },
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_sidebar_1",

        // GAM ad unit path
        adUnitPath: "/1234/sidebar_1",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
        behaviour: { loaded: "manual" },

        // all sizes this ad slot supports
        sizes: [
          [120, 600],
          [160, 600],
          [300, 600],
        ],

        // responsive ads configuration
        sizeConfig: [
          {
            mediaQuery: "(min-width: 768px)",
            sizesSupported: [
              [120, 600],
              [160, 600],
              [300, 600],
            ],
          },
        ],
      },
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_sidebar_left",

        // GAM ad unit path
        adUnitPath: "/1234/sidebar_left",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
        behaviour: { loaded: "manual" },

        // all sizes this ad slot supports
        sizes: [
          [120, 600],
          [160, 600],
          [300, 600],
        ],

        // responsive ads configuration
        sizeConfig: [
          {
            mediaQuery: "(min-width: 768px)",
            sizesSupported: [
              [120, 600],
              [160, 600],
              [300, 600],
            ],
          },
        ],
      },
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_wallpaper_pixel",

        // GAM ad unit path
        adUnitPath: "/1234/wallpaper_pixel",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
        behaviour: { loaded: "manual" },

        // all sizes this ad slot supports
        sizes: [[1, 1]],

        // responsive ads configuration
        sizeConfig: [
          { mediaQuery: "(min-width: 768px)", sizesSupported: [[1, 1]] },
        ],
      },
      {
        // a div element with this id must be present when the DOM has finished loading
        domId: "h5v_mobile_sticky",

        // GAM ad unit path
        adUnitPath: "/1234/mobile_sticky",

        // configure the GAM slot type (out-of-page, interstitial, anchor ad)
        position: "in-page",

        // trigger the ad slot via moli.refreshAdSlot('h5v_content_1')
        behaviour: { loaded: "manual" },

        // all sizes this ad slot supports
        sizes: [
          [320, 50],
          [300, 50],
        ],

        // responsive ads configuration
        sizeConfig: [
          {
            mediaQuery: "(min-width: 300px) and (max-width: 768px)",
            sizesSupported: [
              [320, 50],
              [300, 50],
            ],
          },
        ],
      },
    ],
  });

  console.log("moli", "requestAds");

  // see if there's a better place to put this
  moli.requestAds();
});
