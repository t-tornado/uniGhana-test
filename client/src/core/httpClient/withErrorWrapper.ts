import { AxiosError } from "axios";

export const HttpWithErrorWrapper = (cb?: Function) => {
  return async function (...args: any[]) {
    try {
      await cb?.(...args);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.error);
      } else throw new Error(error.message);
    }
  };
};
