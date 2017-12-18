exports.config = {
  paths: {
    public: 'public',
    watched: ['app', 'test', 'vendor']
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css',
      order: {
        after: /styl\/app\.styl/
      }
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  npm: {
    enabled: true,
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: 'popper.js'
    }
  },
  plugins: {
    on: ['postcss-brunch'],
    autoReload: {
      enabled: {
        css: 'on',
        js: 'on',
        assets: 'off'
      },
      port: [9485, 9487, 9491, 9495],
      delay: 10,
      forceRepaint: true
    },
    babel: {
      presets: ['env'],
      ignore: [/^node_modules/]
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    gzip: {
      paths: {
        javascript: 'javascripts',
        stylesheet: 'stylesheets',
      },
      removeOriginalFiles: false,
      renameGzipFilesToOriginalFiles: false
    },
    imageoptmizer: {
      smushit: true,
      path: 'app/assets'
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
        require('csswring')()
      ]
    },
    pug: {
      doctype: 'html',
      basedir: 'app',
      staticBasedir: 'app/assets',
      staticPretty: false,
      pugRuntime: false,
      compileDebug: true,
      sourceMap: true
    },
    retina: {
      regexp: /(@2[xX])\.(?:gif|jpeg|jpg|png)$/,
      path: 'images',
      assetsPath: 'public',
      minWidth: 0,
      minHeight: 0
    },
    sprites: {
      path: 'app/assets/images/sprites',
      destCSS: 'app/styl/_sprites.styl',
      destSprites: 'app/assets/images',
      cssFormat: 'stylus',
      algorithm: 'top-down',
      engine: 'pixelsmith',
      imgOpts: {
        format: 'auto',
        quality: 100
      }
    },
    stylus: {
      plugins: [
        require('autoprefixer-stylus')({browsers: ['last 8 versions']})
      ]
    }
  },
  conventions: {
    ignored: [
      /\.md$/,
      /views\/includes\//,
      /styl\/imports\//
    ],
    assets: [
      /assets\//,
      /files\//
    ]
  },
  modules: {
    wrapper: 'commonjs',
    definition: 'commonjs',
    autoRequire: {
      'app.js': ['initialize']
    }
  },
  notifications: {
    app: 'Brunch',
    levels: ['error', 'warn', 'info']
  },
  optimize: false,
  server: {
    port: 3333,
    hostname: 'localhost',
    base: '',
    indexPath: 'index.html',
    noPushState: true,
    noCors: false,
    stripSlashes: true
  },
  sourceMaps: true,
  fileListInterval: 265,
  watcher: {
    usePolling: true
  },
  hooks: {
    preCompile() {
      console.log('Brunch - Ready to compile');
      return Promise.resolve();
    },
    onCompile(generatedFiles, changedAssets) {
      console.log(generatedFiles.map(f => f.path));
      console.log('Brunch - Compilation completed');
      return Promise.resolve();
    }
  }
};
