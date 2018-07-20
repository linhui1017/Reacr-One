import bowser from 'bowser';
import Default from './Default';
import IOS from './IOS';

class Viewport {

  constructor(config) {

    
    const browser = bowser.getParser(window.navigator.userAgent);
  
    let userTechData = browser.parse();
   
    let {parsedResult} = userTechData;

     let conf = {...config, ...parsedResult};

  

    // handle the case where we don't detect the browser
    if (conf) {
      console.log('browser.name: ', conf.browser.name);
      console.log('browser.version: ', conf.browser.version);
      console.log('browser.os: ', conf.os.name);


    }

    switch (conf.os.name.toLowerCase()) {
      case 'ios':
        return new IOS(conf);
      default:
        return new Default(conf);
    }



  }


}

export default Viewport;