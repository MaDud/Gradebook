const path = require( 'path' );

module.exports = {

    // bundling mode
    // mode: 'production',

    //generate source map
    devtool: 'source-map',

    //add devServer
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    //compile project when it changes
    // watch: true,

    // entry files
    entry: './src/assets/ts/main.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};