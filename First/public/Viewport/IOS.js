import bowser from 'bowser';

class IOS {
    constructor(config) {

        this.Config = config;
    }

    fixed() {
        
        console.log('%c IOS Viewport Fixed! ', 'color: #F40000; font-size: 12px');

        const browser = bowser.getParser(window.navigator.userAgent);
        const isValidBrowser = browser.satisfies({safari: '>1111',});

        if (isValidBrowser) {
            
            console.log('%c IOS safari Version > 10 ', 'color: #F40000; font-size: 12px');
            let rootId = this.Config.id;
 
            document.getElementById(rootId).addEventListener('touchmove', function (e) {
    
                e = e || window.event;
                if (e.preventDefault) {
                    e.preventDefault();
                }
                return false;
            }, true);

        }


    }
}

export default IOS;

