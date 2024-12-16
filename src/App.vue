<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <NavBar />
    <main class="container px-4 mx-auto py-8">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>BrewKeeper - Made with ❤️ by Ivan Hirskyy</p>
    </footer>
    <TheModal />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import TheModal from './components/TheModal.vue'
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
