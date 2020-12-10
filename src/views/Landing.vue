<template>
  <div class="md:flex flex-row-reverse flex-1 bg-gray-50 bg-white dark:bg-black">
    <div class="flex flex-col justify-center items-center md:w-2/4">
      <img src="../assets/friends.png" alt="true friends" class=" " />
    </div>
    <div class="md:w-2/4 md:flex flex-col items-center justify-center px-4">
      <h1
        class="text-blue-900 text-xl text-left md:text-3xl font-semibold md:text-center dark:text-blue-100"
      >
        Introducing the Platform
      </h1>
      <p class="text-gray-500 md:w-2/3 text-left md:text-center dark:text-white">
        An avenue where people connect around common interests
      </p>
      <div class="flex flex-col md:flex-row w-full md:w-auto mt-5">
        <router-link
          to="/login"
          class="bg-blue-900 text-white md:mr-5 px-10 py-2 md:py-1 rounded text-center mt-2"
          >Log In</router-link
        >
        <router-link
          to="/register"
          class="bg-white text-blue-900 md:mr-5 px-10 py-2 md:py-1 rounded text-center mt-2 border-2 border-blue-900"
          >Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>
