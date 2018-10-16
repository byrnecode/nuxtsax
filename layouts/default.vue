<template>
  <div class="l-default">
    <vs-row>
      <vs-col>
        <AppNav/>
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col>
        <nuxt/>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav
  }
}
</script>


<style lang="scss">

body {
  font-family: 'Montserrat', sans-serif;
}

.vs-navbar .vs-navbar-item a.nuxt-link-exact-active {
  color: #1f74ff;
  font-weight: 700;
}

.vs-sidebar .vs-sidebar-items .vs-sidebar-item a.nuxt-link-exact-active {
  color: #1f74ff;
  font-weight: 700;
  border-right: 3px solid #1f74ff;
}

.vs-sidebar .vs-sidebar-items .vs-sidebar-item-active a.nuxt-link-exact-active {
  border-right: 0;
}

</style>
