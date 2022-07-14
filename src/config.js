import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 8080
export const HOST = process.env.HOST || 'localhost'
export const DB_USERNAME = process.env.DB_USERNAME || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
export const DB_NAME = process.env.DB_NAME || 'test'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 5432
