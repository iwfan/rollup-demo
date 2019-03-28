import baseConfig from './rollup.config.base';
import {terser} from 'rollup-plugin-terser';

import packageJson from "../package.json";

const name = 'WidgetSDK';

export default [
    baseConfig,
    {
        ...baseConfig,
        plugins: [
            ...baseConfig.plugins,
            terser(),
        ],
        output: [{
            file: packageJson.main.replace('.js', '') + '.min.js',
            name,
            format: 'umd',
            sourcemap: 'inline'
        }]
    }
]
