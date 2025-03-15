const express = require('express');
const browserSync = require('browser-sync');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static(__dirname));

// サーバーの起動
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
    // Browser-syncの設定
    browserSync({
        proxy: `localhost:${PORT}`,
        files: [
            '*.html',
            'css/*.css',
            'scripts/*.js',
            'images/*',
            'sound/*'
        ],
        open: false,
        notify: false
    });
}); 