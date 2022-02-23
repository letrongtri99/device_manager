import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import omit from 'lodash.omit';
import { store } from '@stores/index';
import { commonActions } from '@stores/slices/common';

const __DEV__ = process.env.NODE_ENV === 'development';

function loader() {
  let requestCount = 0;

  return function (isLoading: boolean) {
    if (isLoading) {
      requestCount++;
    } else if (requestCount > 0) {
      requestCount--;
    }

    store.dispatch(commonActions.setLoading(!!requestCount));
  };
}

const setLoading = loader();

const ConnectionInstance = Axios.create({
  timeout: 20000,
  baseURL: process.env.SNOWPACK_PUBLIC_WATT_API_URL,
  paramsSerializer(params) {
    params = omit(params, 'showLoading');

    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          let ids = '';
          param.forEach((p, i) => {
            if (i + 1 === param.length) {
              ids += `${p}`;
            } else {
              ids += `${p},`;
            }
          });
          searchParams.append(key, ids);
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  },
});

ConnectionInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    if (requestConfig.params?.showLoading !== false) {
      setLoading(true);
    }

    return requestConfig;
  },
  (error) => {
    setLoading(false);
    if (__DEV__) {
      console.error('WATT API Request Error:', error);
    }
    return Promise.reject(error);
  },
);

ConnectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.config.params?.showLoading !== false) {
      setLoading(false);
    }

    // Try to find the access token from response
    if (response.data?.token?.accessToken) {
      ConnectionInstance.defaults.headers = {
        ...ConnectionInstance.defaults.headers,
        Authorization: `Bearer ${response.data?.token?.accessToken}`,
      };
    }

    return response;
  },
  (error) => {
    setLoading(false);
    if (__DEV__) {
      console.error('WATT API Response Error:', error);
    }
    const errorMessage = error?.response?.data?.message;
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  },
);

export const setToken = (token: string) => {
  ConnectionInstance.defaults.headers = {
    ...ConnectionInstance.defaults.headers,
    Authorization: `Bearer ${token}`,
  };
};

export const clearToken = () => {
  delete ConnectionInstance.defaults.headers.Authorization;
};

export default ConnectionInstance;
