import jwt from "jsonwebtoken";


export function createToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET, 
      {
        expiresIn: "1d",
      },
      (error, token) => {
        error ? reject(error) : resolve(token);
      }
    );
  });
}
