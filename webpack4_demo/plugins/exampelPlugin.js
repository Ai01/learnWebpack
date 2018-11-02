class HelloWorldPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('HelloCompilationPlugin', compilation => {
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('Hello compilation!');
      });
    });

    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World!');
      console.log(this.options);
    })


    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      var filelist = 'In this build:\n\n';

      for (var filename in compilation.assets) {
        filelist += ('- '+ filename +'\n');
      }

      compilation.assets['filelist.md'] = {
        source() {
          return filelist;
        },
        size() {
          return filelist.length;
        }
      };

      callback();
    });
  }
}

module.exports = HelloWorldPlugin;
