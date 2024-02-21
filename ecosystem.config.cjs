module.exports = {
    apps: [
      {
        name: 'MovieApp',
        port: '5000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  