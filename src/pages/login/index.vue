<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useGlobalStore } from '@/stores';
import { login } from '@/apis/user';

// router
const router = useRouter();
const route = useRoute();

// store
const store = useGlobalStore();

// state
const user = reactive({
  email: '',
  password: '',
});

const error = ref();

// events
const onLogin = async () => {
  try {
    const res = await login(user);
    store.setUser(res?.user ?? {});
    const { redirect }: any = route.query;
    router.push({
      path: redirect ?? '/home',
    });
  } catch (e: any) {
    if (e.response?.status === 422) {
      error.value = e?.response?.data?.detail ?? [
        {
          message: e?.response?.data?.error,
        },
      ];
    } else {
      error.value = [
        {
          message: e?.response?.data?.error,
        },
      ];
    }
  }
};
</script>
<template>
  <div class="gspRov">
    <h2>Login to your account</h2>
    <form>
      <ul v-if="error" class="errors">
        <li v-for="e in error" :key="e">{{ e?.field }} {{ e?.message }}</li>
      </ul>
      <input v-model="user.email" type="email" placeholder="email" />
      <input v-model="user.password" type="password" placeholder="password" />
      <div class="action input-group">
        <span class="pointer">Signup instead</span>
        <button @click.prevent="onLogin">Login</button>
      </div>
    </form>
  </div>
</template>
