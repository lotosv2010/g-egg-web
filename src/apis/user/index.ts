import request from '@/service';
import { ILoginInput, LoginPayload } from './types';

export const login = async (data: ILoginInput) => {
  return (await request<ILoginInput, LoginPayload>({
    url: '/users/login',
    method: 'POST',
    data,
  })) as LoginPayload;
};
