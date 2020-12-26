<template>
  <div class="hidden md:block w-48 bg-gray-50 h-screen px-2 border-r">
    <img src="../assets/coy-logo.png" class="w-24 pt-2 pb-6" alt="logo" />
    <NavItem
      imageUrl="../assets/dashboard.svg"
      name="Dashboard"
      active="true"
      route="home"
    />
    <NavItem
      route="subjects"
      imageUrl="../assets/dashboard.svg"
      name="My Subjects"
    />
    <NavItem
      route="classes"
      imageUrl="../assets/dashboard.svg"
      name="Classes"
    />
    <NavItem
      route="messages"
      imageUrl="../assets/dashboard.svg"
      name="Messages"
    />
    <NavItem
      route="settings"
      imageUrl="../assets/dashboard.svg"
      name="Setings"
    />
    <NavItem
      route="profile"
      imageUrl="../assets/dashboard.svg"
      name="Profile"
    />
    <NavItem
      route="star-war"
      imageUrl="../assets/dashboard.svg"
      name="Star War"
    />
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  components: {
    NavItem,
  },
};
</script>
