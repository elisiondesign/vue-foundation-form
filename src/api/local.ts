// eslint-disable-next-line no-unused-vars
import axios, { AxiosPromise } from 'axios';

const baseURL = 'http://localhost:8080';

const api = axios.create({
  baseURL,
});

export default function getAsset(path: string): AxiosPromise<any> {
  return api.get(path);
}
