import request from '@/service';

export const getUserInfo = async (params?: object) => {
  let data = {};
  try {
    data = await request({
      url: '/videos',
      method: 'GET',
      params,
    });
  } catch (error: any) {
    console.log(error.message);
  }
  console.dir(data);
  return data;
};
