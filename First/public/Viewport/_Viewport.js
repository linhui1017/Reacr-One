
import React from 'react';
import { detect } from 'detect-browser';
import Default from './Default';

class Viewport  {

    constructor(config) {
     
        const browser = detect();
 
        // handle the case where we don't detect the browser
        if (browser) {
          console.log(browser.name);
          console.log(browser.version);
          console.log(browser.os);
        }
        



        return React.createElement(Default, config, null);

    }


}

export default Viewport;