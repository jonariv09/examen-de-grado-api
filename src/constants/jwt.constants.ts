import * as dotnev from 'dotenv';

dotnev.config();

const { JWT_SECRET } = process.env;

export const JWT_CONSTANTS = {
  SECRET: JWT_SECRET,
};
