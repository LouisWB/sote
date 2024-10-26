import axios from 'axios';
import qs from 'qs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useToast } from '@/ui/toast/use-toast';

const { toast } = useToast();

// 全局配置
const baseUrl = import.meta.env.VITE_API_DOMAIN;
axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const timeout = 8000;
const service = axios.create({
  baseURL: baseUrl, // 设置统一的请求前缀
  timeout, // 设置统一的超时时长
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const { method, data, headers } = config;

    // 接口进度条显示
    config.onUploadProgress = (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percent = Math.floor((loaded / total) * 100);
      console.log(percent);
    };

    // 接口进度条开始
    NProgress.start();

    // 序列化
    if (['post', 'put', 'delete'].includes(method as string)) {
      config.data = qs.parse(data); //序列化
    }
    return config;
  },
  (error) => {
    message.error(error.data.error.message);
    return Promise.reject(error.data.error.message);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 接口进度条结束
    NProgress.done();
    // 对响应数据进行处理，例如检查统一的字段（如 statusCode)
    if (res.status === 200 || res.data.statusCode === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  },
  (error) => {
    // 接口进度条结束
    NProgress.done();
    toast({
      description: error || error.message || '网络请求失败，请稍后重试',
    });
    return Promise.reject(new Error(error));
  }
);

export default service;
