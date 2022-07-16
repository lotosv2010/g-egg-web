import request from '@/service';

export const createVideo = async (data: any) => {
  return (await request({
    url: '/videos',
    method: 'POST',
    data,
  })) as any;
};
