(function (Package) {
    "use strict";

    Package.describe({
        summary: 'Paper.js bundled for meteor'
    });

    Package.on_use(function (api, where) {
        
        //client side
        api.add_files([
            'lib/paper-full.js'
        ], 'client');
        
      	if(api.export){
            api.export('paper');
        }
    });

}(Package));