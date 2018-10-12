<template>
  <div>
    <vs-navbar>
      <vs-navbar-title>
        Nuxtsax
      </vs-navbar-title>
      
      <vs-spacer></vs-spacer>

      <vs-input vs-icon="search" placeholder="Search" v-model="search"/>
      
      <ul class="vs-navbar-list">
        <vs-navbar-item 
          v-for="(navbarItem, index) in navbarItems" 
          :key="navbarItem.title" 
          :index="index">
          <nuxt-link :to="navbarItem.url"> {{ navbarItem.title }} </nuxt-link>
        </vs-navbar-item>
      </ul>

      <vs-button @click="toggleSidebar" vs-type="flat" vs-radius="50%" vs-icon="menu" class="vs-navbar-trigger"></vs-button>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeItem: 0,
      search: '',
      navbarItems: [
          { title: 'Home', url: '/'},
          { title: 'Screener', url: '/screener'},
          { title: 'Tools', url: '/tools'}
        ]
    }
  },

  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebarActive')
    }
  }
}
</script>

<style lang="scss" scoped>

.vs-navbar .vs-navbar-item {
  display: inline-block;
}

.vs-navbar .vs-navbar-item a.nuxt-link-exact-active {
  color: #1f74ff;
}

.vs-navbar-list {
  display: none;
  @include desktopUp {
    display: block;
  }
}

// .vs-navbar-trigger {
//   display: flex;
//   @include desktopUp {
//     display: none;
//   }
// }

</style>