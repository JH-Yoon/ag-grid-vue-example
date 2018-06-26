const path = require('path');

module.exports = {
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             config: {
    //                 path: './postcss.config.js'
    //             }
    //         }
    //     }
    // },
    configureWebpack: {
        resolve: {
            alias: {
                // Make sure *our* version of ag-grid & vue is always loaded.
                // This is needed for `yarn link / npm link` to work and prevent duplicate versions of these libs
                // being loaded
                'ag-grid/main': path.resolve(__dirname , 'node_modules/ag-grid/main.js'),
                'ag-grid$': path.resolve(__dirname , 'node_modules/ag-grid/main.js'),
                vue$: path.resolve(__dirname , 'node_modules/vue/dist/vue.common.js')
            }
        },
        performance : {
            hints : false
        }
    }
};