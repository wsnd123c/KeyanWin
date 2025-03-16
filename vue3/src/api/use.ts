import service from '@/utils/request.ts';
import type {UseProps} from "@/components/GlobalHeader.vue";
export const api = {
  // 获取用户列表
  getUsers: (): Promise<UseProps> => service.get('/users'),
  getLables:(): Promise<never> =>service.get('/lable')
};

export default api;
