import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClientClass {
  private base: Axios;
  constructor(baseURL: string) {
    this.base = axios.create({ baseURL });
  }

  async get<T = any>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): Promise<AxiosResponse<T>> {
    return this.base.get(url, config);
  }

  async put<T, D = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return this.base.put(url, data, config);
  }

  async post<T, D = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return this.base.post(url, data, config);
  }

  async patch<T = any, D = any>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<T>> {
    return this.base.patch(url, data, config);
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): Promise<AxiosResponse<T>> {
    return this.base.get(url, config);
  }
}

export const Http = new HttpClientClass("");
