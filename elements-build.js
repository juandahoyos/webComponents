const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        'dist/medidores/runtime-es5.js',
        'dist/medidores/polyfills-es5.js',
        'dist/medidores/scripts.js',
        'dist/medidores/main-es5.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/medidores.js');
    await fs.copyFile(
        'dist/medidores/styles.css',
        'elements/styles.css'
    );
})();
