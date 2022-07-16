<script setup lang="ts">
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { getVideos } from '@/apis/home';

// router
const router = useRouter();

// state
const videoList: any = ref([]);

// events
const getVideoList = async () => {
  try {
    const { videos }: any = await getVideos({
      pageNum: 1,
      pageSize: 20,
    });
    videoList.value = videos ?? [];
  } catch (error) {
    console.log(error);
  }
};

const showDetail = (videoId: string) => {
  router.push({
    name: 'Watch',
    params: {
      videoId,
    },
  });
};

// lifecylce
onMounted(() => {
  getVideoList();
});
</script>

<template>
  <div class="sc-AxmLO gmtmqV">
    <div class="sc-fzokOt hLgJkJ">
      <h2>Recommended</h2>
      <div class="sc-fzoLsD fYZyZu">
        <a v-for="v in videoList" :key="v?._id" @click="showDetail(v?._id)">
          <div class="sc-fzozJi dteCCc">
            <img
              class="thumb"
              :src="
                v?.cover ||
                `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`
              "
              alt="thumbnail"
            />
            <div class="video-info-container">
              <div class="channel-avatar">
                <img
                  :src="v?.user?.avatar ?? `https://joeschmoe.io/api/v1/random`"
                  alt="channel avatar"
                  class="sc-AxhCb eSwYtm"
                  style="margin-right: 0.8rem"
                />
              </div>
              <div class="video-info">
                <h4>{{ v?.title }}</h4>
                <span class="secondary">{{ v?.description }}</span>
                <p class="secondary">
                  <span>{{ v?.viewsCount }} views</span> <span>• </span>
                  <span>{{ dayjs(v?.createdAt).format('YYYY-MM-DD') }}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
