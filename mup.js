module.exports = {
    servers: {
        one: {
            host: '139.59.33.198',
            username: 'root',
            pem:  '~/.ssh/id_12b8cabb3882421084f446d98b2f4e49' // pem key
                // or leave blank for authenticate from ssh-agent}
        }
    },

    meteor: {
        name: 'meteor',
        path: '.',
        docker: {
            image: 'abernix/meteord:base',
        },
        servers: {
            one: {}
        },
        buildOptions: {
            serverOnly: true,
        },
        env: {
            "ROOT_URL": 'https://www.leaflestjs12.com',
            "DDP_DEFAULT_CONNECTION_URL": "http://139.59.33.198:3005",
            "MONGO_URL": "mongodb://localhost:27017/meteor"
        },

        //dockerImage: 'kadirahq/meteord'
        deployCheckWaitTime: 120,
        enableUploadProgressBar: true
    },
    mongo: { //must required
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
