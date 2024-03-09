import axios from "axios";

export const website = "https://example.com";
export const baseUrl = "https://example.com/api/v1";


export const request = axios.create({
  baseURL: baseUrl,
});


