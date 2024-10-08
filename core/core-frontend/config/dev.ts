export default {
  server: {
    proxy: {
      '/api/f': {
        target: 'http://49.235.142.190:8100',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/f/, '')
      },
      // 使用 proxy 实例
      '/api': {
        target: 'http://49.235.142.190:8100',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, 'de2api')
      }
    },
    port: 80
  }
}
