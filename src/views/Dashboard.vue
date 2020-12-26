<template>
  <div>
    <div id="id" class="flex justify-between px-5">
      <p class="text-red-400 text-light text-md">
        Welcome, {{ user.username }}
      </p>
      <p class="text-red-400 text-light text-sm">
        {{ new Date().toUTCString() }}
      </p>
    </div>
    <div class="flex flex-wrap">
      <DashboardCard title="Start a class" background="bg-pink-200">
        <p class="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          rem et quo, autem minus cumque neque consectetur voluptates
          dignissimos
        </p>
        <button class="bg-gray-700 text-white px-2 py-1 rounded mt-6">
          Continue
        </button>
      </DashboardCard>
      <DashboardCard
        title="Statistics"
        background="bg-yellow-300"
      ></DashboardCard>
      <DashboardCard
        title="Group Statistics"
        background="bg-yellow-100"
      ></DashboardCard>
      <DashboardCard
        title="Achievements"
        background="bg-purple-300"
      ></DashboardCard>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import DashboardCard from "../components/DashboardCard.vue";

export default {
  components: {
    DashboardCard,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: rgb(116, 115, 115);
}
</style>
