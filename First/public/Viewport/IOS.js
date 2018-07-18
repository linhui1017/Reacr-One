
class IOS {
    constructor(config) {

        this.Config = config;
    }

    fixed() {
 
        console.log('%c IOS Viewport Fixed! ', 'color: #F40000; font-size: 12px');

        if (this.Config.browser.version === '11.0.0') {

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

