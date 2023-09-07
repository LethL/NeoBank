import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class BasicAgent {
  protected _http: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this._http = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
      baseURL,
      ...config,
    });
  }
}
