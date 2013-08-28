(function (Package) {
    "use strict";

    Package.describe({
        summary: 'Paper.js bundled for meteor'
    });

    Package.on_use(function (api, where) {
        
        //client side
        api.add_files([
            
        ], 'client');

        
    });

}(Package));