exports.config = {
  paths: {
    public: 'public',
    watched: ['app', 'test', 'vendor']
  },
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },
  npm: {
    enabled: true
  },
  plugins: {
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
    gzip: {
      paths: {
        javascript: 'javascripts',
        stylesheet: 'stylesheets',
      },
      removeOriginalFiles: false,
      renameGzipFilesToOriginalFiles: false
    },
    imageoptmizer: {
      smushit: false,
      path: 'app/images'
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
      pugRuntime: true,
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
    }
  },
  conventions: {
    ignored: [
      'app/assets/**/*.md',
      'app/assets/views/includes/*.pug',
      'app/styl/imports/*.styl'
    ],
    assets: [/files\//]
  },
  modules: {
    wrapper: 'commonjs',
    definition: 'commonjs',
    autoRequire: {
      'js/app.js': ['initialize']
    }
  },
  notifications: {
    app: 'Brunch',
    levels: ['error', 'warn', 'info']
  },
  optimize: true,
  server: {
    port: 3333,
    hostname: '0.0.0.0',
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
