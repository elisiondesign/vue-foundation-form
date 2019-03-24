// eslint-disable-next-line no-unused-vars
import axios, { AxiosPromise } from 'axios';

export default function getAsset(path: string): AxiosPromise<any> {
  return axios.get(path);
}
