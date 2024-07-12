const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');

module.exports = {
    rollup(config, options) {
        config.plugins = [
            replace({
                preventAssignment: true
            }),
            postcss({ modules: true }),
            images({ include: ['**/*.png', '**/*.jpg'] }),
            ...config.plugins,
        ];
        return config;
    },
};
