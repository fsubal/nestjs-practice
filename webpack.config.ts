import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import ManifestPlugin from 'webpack-manifest-plugin';

export default (options: Partial<webpack.Configuration>) => {
  return [
    {
      ...options,
      name: 'server',
      entry: ['webpack/hot/poll?100', './src/main.ts'],
      watch: true,
      externals: [
        nodeExternals({
          whitelist: ['webpack/hot/poll?100'],
        }),
      ],
      plugins: [...options.plugins, new webpack.HotModuleReplacementPlugin()],
    },
    (_env: unknown, argv: { mode: webpack.Configuration['mode'] }) => {
      return {
        mode: argv.mode,
        name: 'client',
        entry: {
          main: './src/views/main.client.ts',
        },
        output: {
          filename: '[name].[contenthash].js',
          path: path.resolve(__dirname, 'public', 'bundles'),
          chunkFilename: '[name].[contenthash].js',
          publicPath: 'bundles',
        },
        loaders: [
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
        plugins: [
          new ManifestPlugin({
            fileName: 'manifest.json',
            publicPath: 'bundles',
            writeToFileEmit: true,
          }),
        ],
      };
    },
  ];
};
