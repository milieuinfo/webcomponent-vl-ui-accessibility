import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

const copyConfig = {
  targets: [{ src: 'src/*', dest: 'distribute' }],
};
const config = {
  input: 'src/index.js',
  output: {
    dir: 'distribute',
    format: 'es',
  },
  plugins: [minifyHTML(), copy(copyConfig), resolve()],
  preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;
