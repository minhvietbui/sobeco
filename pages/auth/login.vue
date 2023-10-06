<script setup lang="ts">
const supabase = useSupabaseClient();

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://sobeco.vercel.app/admin/products',
    },
  });
  if (error) console.log(error);
};
</script>
<template>
  <div class="max-w-[400px] mx-auto px-2 mt-32 pb-80">
    <div class="text-center my-6">Login</div>
    <button
      @click="signInWithOtp"
      class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold bg-cyan-600"
    >
      Sign In Google
    </button>
  </div>
</template>
