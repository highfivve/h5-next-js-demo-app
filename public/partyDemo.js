console.log("partyDemo.js", "hello world from party demo script");

const title = window.document.createElement("h1");
title.textContent = "It is me!!";
window.document.body.appendChild(title);

// TODO forwarding doesn't work for functions, because they are not SERIALIZABLE!
// console.log("partyDemo.js", "trying to refresh h5v_content_1");
// window.moli.que.push((adTag) => {
//   console.log("partyDemo.js", "executing moli que");
//   adTag.refreshAdSlot("h5v_content_1");
// });

// TODO maybe add a "pubads.isReady" check if pubads is already loaded

// Test what a que implementation may look like!
const events = window.dataLayer || [];
events.forEach((event) => {
  console.log("initial events", event);
  if (typeof event === "function") {
    event(this);
  }
});

window.dataLayer = {
  push: (event) => {
    console.log("directly processed", event);

    // this will always be an empty function as functions are not serializable
    if (typeof event === "function") {
      event({ foo: "bar", moli: window.moli });
    }

    // we will need something like this
    // window.dataLayer.push( {fn: 'refreshAdSlots', args: ['h5v_content_1']})
  },
};
