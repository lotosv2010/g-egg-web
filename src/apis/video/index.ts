import request from '@/service';

export const createVideo = async (data: any) => {
  return (await request({
    url: '/videos',
    method: 'POST',
    data,
  })) as any;
};

export const getVideo = async (videoId: string) => {
  return (await request({
    url: `/videos/${videoId}`,
    method: 'GET',
  })) as any;
};
