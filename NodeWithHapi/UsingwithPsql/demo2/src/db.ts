import pg from 'pg'

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'AsdfGhjk@123',
    database : 'hapidemo'
})

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
})

export default client;