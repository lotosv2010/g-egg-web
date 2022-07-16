<script setup lang="ts">
// 事件传递参考：https://blog.csdn.net/csl125/article/details/124262027
import { ref, defineEmits, reactive } from 'vue';
import { createVideo } from '@/apis/video';
import { useRouter } from 'vue-router';

// router
const router = useRouter();

// state
const file: any = ref(null);
const video: any = ref(null);
const inputVideo = reactive({
  title: '',
  description: '',
  vodVideoId:
    'http://v9-default.ixigua.com/c0acc05549904cf0ea49ec44ce7ea8e3/62d2b76a/video/tos/cn/tos-cn-v-0064/0e4f981193f34213a8f56e40e4c6fb22/?filename=1080P.mp4',
  cover: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
});

// events
const emit = defineEmits(['close']);
const close = () => {
  emit('close', false);
};

const handleFile = (e: any) => {
  const element = e.target;
  const fileObj = element.files[0];
  video.value.src = URL.createObjectURL(fileObj);
};

const save = async () => {
  try {
    const res = await createVideo(inputVideo);
    close();
    router.push({
      name: `Watch`,
      params: {
        videoId: res.video._id,
      },
    });
  } catch (error: any) {
    console.error(error?.response?.data);
  }
};
</script>

<template>
  <div class="sc-AxiKw dZbDOR">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <div class="modal-header-left">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" @click="close">
              <g>
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ></path>
              </g>
            </svg>
            <h3>Upload Video</h3>
          </div>
          <div style="display: block">
            <button class="sc-AxirZ erzyjX" @click.prevent="save">Save</button>
          </div>
        </div>
        <div class="tab video-form">
          <input ref="file" required type="file" @change="handleFile" />
          <video ref="video" controls></video>
          <input v-model="inputVideo.title" required type="text" placeholder="Enter the title" />
          <textarea v-model="inputVideo.description" required placeholder="Tell viewers about your video"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>
