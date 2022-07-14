import client from '../database/connection.js'

export const indexController = async (_, res) => {
  try {
    client.connect()
    const result = await client.query('SELECT NOW()')
    client.end()
    res.send(result.rows[0])
  } catch (error) {
    res.status(500).send(error)
  }
}
