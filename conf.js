exports.config = {

    specs: ['./specs/paymentSuccess-spec.js'],

    onPrepare: function() {
      browser.driver.manage().window().maximize();
      browser.ignoreSynchronization=true;
    },
  };