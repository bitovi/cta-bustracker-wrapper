import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

export default {
    apiKey,
    baseUrl
};