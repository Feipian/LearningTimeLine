   // webpack.config.js
   module.exports = {
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'raw-loader', // Use raw-loader to import Markdown files as text
            },
        ],
    },
};