module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'app.css' : /^app/
      }
    }
  },
  plugins: {
    babel: {presets: ['es2015']}
  },
  server: {
    port: 6832,
  }
};
