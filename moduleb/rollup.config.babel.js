import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/foo.js',
  targets: [
    {
      dest: './dist/foo.js',
      format: 'umd'
    },
  ],

  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ],

};