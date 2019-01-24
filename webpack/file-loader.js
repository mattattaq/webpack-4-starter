module.exports = function(paths){
    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpg|svg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]',
                                publicPath: 'images/',
                                outputPath: 'images/'
                            }  
                        }
                    ]
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]',
                                publicPath: 'fonts/',
                                outputPath: 'fonts/'
                            }  
                        }
                    ]
                },
            ],
        },
    };
};