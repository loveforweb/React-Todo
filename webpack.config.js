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
            __dirname, 'node_modules', 'public/components'
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss',
            AddTodo: 'app/components/AddTodo',
            TodoApp: 'app/components/TodoApp',
            TodoList: 'app/components/TodoList',
            Todo: 'app/components/Todo',
            TodoSearch: 'app/components/TodoSearch',

            TodoAPI: 'app/api/TodoAPI'
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