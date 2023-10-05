<template>
  <div class="w-full h-full min-h-screen font-sans antialiased">
    <div>
      <navbar />
    </div>
    <div class="pb-3 max-h-full">
      <main>
        <NuxtPage />
      </main>
    </div>
    <div class="bottom-0 w-full">
      <BaseFooter />
    </div>
  </div>
</template>
