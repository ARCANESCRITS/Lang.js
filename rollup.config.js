import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
    entry: './src/Lang.ts',
    dest: './dist/Lang.js',
    format: 'es',
    plugins: [
        typescript(),
        babel({
            "babelrc": false,
            "include": "src/**",
            "exclude": "node_modules/**",
            "presets": ["es2015-rollup", "stage-2"],
            "plugins": ["transform-object-assign"],
        })
    ],
    external: ['lodash']
}
