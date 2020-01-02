import path from 'path';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';

export default (
  _env: unknown,
  argv: { mode: webpack.Configuration['mode'] },
) => {
  return {
    mode: argv.mode,
    name: 'client',
    entry: {
      main: './src/views/main.client.tsx',
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'public', 'bundles'),
      chunkFilename: '[name].[contenthash].js',
      publicPath: '/bundles/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [path.resolve(__dirname, 'src', 'views')],
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.json'),
                happyPackMode: true,
                transpileOnly: true,
                compilerOptions: {
                  // dynamic import がしたいので esnext を設定
                  module: 'esnext',
                  experimentalDecorators: false,
                  target: 'es5',
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ManifestPlugin({
        fileName: 'manifest.json',
        publicPath: '/bundles/',
        writeToFileEmit: true,
      }),
    ],
  };
};
