import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export function createToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "user_123456", 
      {
        expiresIn: "1d",
      },
      (error, token) => {
        error ? reject(error) : resolve(token);
      }
    );
  });
}
