require('esbuild').build({
  entryPoints: ['widget.js'],
  bundle: true,
  outfile: 'dist/widget.js',
  loader: { '.js': 'jsx' },
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',              // fallback
    'process': '{}',                  // avoid "process is not defined"
  }
}).catch(() => process.exit(1));
