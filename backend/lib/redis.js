import Redis from "ioredis" //redis is a key value store
import dotenv from "dotenv"

dotenv.config()

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// await client.set('foo', 'bar');