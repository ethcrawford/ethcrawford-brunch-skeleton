var PATHS = {
  boxmodel: 'vendor/styles/box-model.min.css',
  normalize: 'vendor/styles/normalize.min.css',
  modulargrid: 'vendor/styles/modular-grid.min.css',
  jquery: 'vendor/scripts/jquery.min.js',
  visuallyhidden: 'vendor/styles/visually-hidden.min.css',
  base: 'app/styles/blocks/base.styl'
}

exports.files = {
  javascripts: {
    joinTo: 'app.js',
    order: {
      before: [
        PATHS.jquery
      ]
    }
  },

  stylesheets: {
    joinTo: 'app.css',
    order: {
      before: [
        PATHS.boxmodel,
        PATHS.normalize,
        PATHS.modulargrid,
        PATHS.visuallyhidden,
        PATHS.base
      ]
    }
  }

}

exports.paths = {
  public: 'public',
  watched: ['app', 'test', 'vendor']
}

exports.npm = {
  enabled: false
}

exports.modules = {
  wrapper: false,
  definition: false
}

exports.plugins = {
  pug: {
    pugRuntime: false,
    compileDebug: false
  }
}
