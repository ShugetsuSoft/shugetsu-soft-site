let Fontmin = require('fontmin');

let srcPath = './*.ttf'
let destPath = './'
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,?!/\\*&^%$#@!()+_`~=-[]{}|"\'<>优雅的镜像站敲代码的白毛萌妹指挥萌妹的讨厌啥也不会的团欺咸鱼酒某世界级非著名空想家温然想拥有电脑的码字人'


let fontmin = new Fontmin()
    .src(srcPath)
    .use(Fontmin.glyph({
        text: text
    }))
    .use(Fontmin.ttf2woff())
    .use(Fontmin.css())
    .dest(destPath)

fontmin.run(function (err, files, stream) {
    if (err) {
        console.error(err);
    }
    console.log('done');
});
