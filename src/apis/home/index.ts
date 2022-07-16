import request from '@/service';

export const getVideos = async (params?: object) => {
  return (await request({
    url: '/videos',
    method: 'GET',
    params,
  })) as any;
};
