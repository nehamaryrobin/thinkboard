import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";

// const redis = new Redis({
// url: process.env.UPSTASH_REDIS_REST_URL,
// token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

// const ratelimit = new Ratelimit({
// redis: redis,
// limiter: Ratelimit.fixedWindow(10, "1 h"), // 10 requests per hour
// });

// const rateLimiter = async (req, res, next) => {
// try {
//     const {success} = await ratelimit.limit("my-rate-limit");

//     if(!success) {
//         return res.status(429).json({message: "Too many requests. Please try again later."});
//     }

//     next();

// } catch (error) {
//     console.error("Rate limiting error:", error);
//     res.status(500).json({message: "Internal server error"});
//     next(error);
// }
// }

// export default rateLimiter;