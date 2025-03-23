import service from '@/utils/request.ts'
import type { UseProps } from '@/components/GlobalHeader.vue'
import type { ColumnProps } from '@/components/ColumnList.vue'

export const api = {
  // 获取用户列表
  getUsers: (): Promise<UseProps> => service.get('/users'),
  getLables: (): Promise<never> => service.get('/lable'),
  getCards: (): Promise<ColumnProps> => service.get('/cards'),
  // 新增注册用户接口
  registerUser: (email: string, password: string): Promise<any> => 
    service.post('/users', { email, password }),
}

export default api
