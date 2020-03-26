exports.config = {
    specs: ['./specs/login-spec.js'],
    onPrepare: function() {
      browser.driver.manage().window().maximize();
      browser.ignoreSynchronization=true;
    },
  
  
  };