require('esbuild').build({
  entryPoints: ['widget.js', 'components/MyWidget.js'],
  bundle: true,
  outdir: 'dist',
  minify: true,          // minify for smaller file size
  sourcemap: false,      // no source map for production (optional)
  loader: {
    '.js': 'jsx',
  },
  define: {
    'process.env.NODE_ENV': '"production"',  // useful if your code uses this
  },
}).catch(() => process.exit(1));
