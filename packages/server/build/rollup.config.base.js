import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import tslint from 'rollup-plugin-tslint';
import {name, main, module} from '../package.json';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    input: './src/index.ts',
    plugins: [
        resolve({extensions}),
        commonjs(),
        typescript(),
        tslint({
            throwOnError: true,
        })
    ],
    output: [
        {
            file: main,
            name,
            format: 'umd',
            sourcemap: 'inline'
        },
        {
            file: module,
            format: 'es',
            sourcemap: 'inline'
        }
    ]
}
