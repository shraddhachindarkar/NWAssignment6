module.exports = {
    'Login Page Initial Render': function(browser) {
      var register = browser.page.commandsRegister();
  
      register.navigate()
        .validateForm()
  
      browser.end();
    },
  
  
  
    'Try to login with no username or password': function(browser) {
      var register = browser.page.commandsRegister();
      
      register.navigate()
        .register()
        .validateError('User name or password is Invalid')
  
      browser.end();
    },
  
  
  
    'Try to Register with a username and no password': function(browser) {
      var register = browser.page.commandsRegister();
  
      register.navigate()
        .fillInForm('abc', '')
        .register()
        .validateError('User name or password is Invalid')
  
      browser.end();
    },
    'Register with username and password': function(browser) {
      var register = browser.page.commandsRegister();
      
      register.navigate()
        .fillInForm('ShraddhaC@hexaware.com','Shri123')
        .register()
        .validateError('User name or password is Invalid')
  
      browser.end();
    },
  };
  