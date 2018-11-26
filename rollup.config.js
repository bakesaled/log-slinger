import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/' + pkg.cjs,
      format: 'cjs',
    },
    {
      file: 'dist/' + pkg.module,
      format: 'es',
    },
    {
      name: 'logSlinger',
      file: 'dist/' + pkg.main,
      format: 'umd'
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: "src/tsconfig.lib.json"
    }),
  ],
}