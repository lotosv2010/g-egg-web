import { defineStore } from 'pinia';
import { localCache } from '@/utils';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    title: 'App',
    theme: 'default',
    language: 'zh',
    user: localCache.getItem('user') ?? {},
  }),
  // getters
  getters: {
    // title: (state) => state.title,
    token: (state) => state.user?.token,
  },
  actions: {
    setTitle(payload: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.title = payload;
    },
    setTheme(payload: string) {
      this.theme = payload;
    },
    async setLanguage(payload: string) {
      // 模拟接口请求
      await new Promise((resolve) => {
        setTimeout(() => {
          this.language = payload;
          resolve(payload);
        }, 1000);
      });
    },
    setUser(payload: any) {
      this.user = payload;
      localCache.setItem('user', payload);
    },
  },
});
