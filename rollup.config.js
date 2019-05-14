import resolve from 'rollup-plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";

export default {
  input: './src/index.ts',
  output: {
    file: './lib/index.js',
    name: 'XLodash',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    typescript()
  ]
}
