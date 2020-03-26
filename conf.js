exports.config = {
    specs: ['./specs/*-spec.js'],
    onPrepare: function() {
      browser.driver.manage().window().maximize();
      browser.ignoreSynchronization=true;
    },
  
  
  };