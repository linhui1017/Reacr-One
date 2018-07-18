import { detect } from 'detect-browser';
import Default from './Default';
import IOS from './IOS';

class Viewport {

  constructor(config) {

    const browser = detect();

    // handle the case where we don't detect the browser
    if (browser) {
      console.log('browser.name: ', browser.name);
      console.log('browser.version: ', browser.version);
      console.log('browser.os: ', browser.os);
    }

    let conf = {...config,
      'browser':{...browser}};


    switch (browser.os.toLowerCase()) {
      case 'ios':
        return new IOS(conf);
      default:
        return new Default(conf);
    }



  }


}

export default Viewport;