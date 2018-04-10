module.exports = {
  servers: {
    one: {
      "host": "139.59.33.198",
      "username": "root",
      "pem": "/home/chan1di/.ssh/id_rsa"
    }
  },

  meteor: {
    name: 'app-name',
    path: '/Applications/',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      "NODE_ENV": "production",
      "PORT": "3005",
      "ROOT_URL": "http://",
      "MAIL_URL": "smtp://",
      "MONGO_URL": "mongodb://"
    },
    dockerImage: 'abernix/meteord:node-8.4.0-base',
    deployCheckWaitTime: 120,
    enableUploadProgressBar: true
  }
};