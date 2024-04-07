# rollup-plugin-rm

Rollup plugin for rm command at build start or end.

## Install

```sh
$ npm i rollup-plugin-rm -D
```

## Usage

```js
import rm from 'rollup-plugin-rm'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [rm('dist', 'buildStart')]
}
```

Or `rm` at the build end hook:

```js
rm('dist/types', 'buildEnd')
```

## License

[MIT](./LICENSE) copyright © 2024-present alex wei
