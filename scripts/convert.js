const fs = require('fs');
const path = require('path');

// The custom loader of angular new build system DO NOT support the '.ts' files
// So we need to convert the '.ts' files to '.txt' files as a workaround

const dirList = [
    './src/app/pages/demo-basic/basic/basic-dataset',
    './src/app/pages/demo-basic/basic/basic-events',
    './src/app/pages/demo-basic/basic/basic-init-opts',
    './src/app/pages/demo-basic/basic/basic-instance',
    './src/app/pages/demo-basic/basic/basic-loading',
    './src/app/pages/demo-basic/basic/basic-simple',
    './src/app/pages/demo-basic/basic/basic-themes',
    './src/app/pages/demo-basic/basic/basic-update',
    './src/app/pages/demo-advanced/advanced/connect-charts',
    './src/app/pages/demo-advanced/advanced/line-draggable',
    './src/app/pages/demo-gl/gl-bar3d/bar3d-dataset',
    './src/app/pages/demo-series/series-graph/graph-force-layout',
    './src/app/pages/demo-series/series-graph/graph-simple',
    './src/app/pages/demo-series/series-heatmap/heatmap-calendar',
    './src/app/pages/demo-series/series-heatmap/heatmap-discrete',
    './src/app/pages/demo-series/series-tree/tree-from-left-to-right',
    './src/app/pages/demo-series/series-tree/tree-radial',
];

for (let dir of dirList) {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;
    
        files.forEach(file => {
            if (path.extname(file) === '.ts') {
                const filePath = path.join(dir, file);
                const outputFilePath = path.join(dir, file.replace('.ts', '.txt'));
    
                // 读取 .ts 文件内容
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) throw err;
    
                    // 写入到 .txt 文件
                    fs.writeFile(outputFilePath, data, (err) => {
                        if (err) throw err;
                        console.log(`${file} -- copied --> ${outputFilePath}`);
                    });
                });
            }
        });
    });
}

