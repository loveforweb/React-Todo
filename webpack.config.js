var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules', './app/components', './app/api', './app/actions'
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss',
            actions: 'app/actions/actions.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders:  [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};