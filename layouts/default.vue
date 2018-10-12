<template>
  <div class="l-default">
    <vs-row>
      <vs-col>
        <TheHeader/>
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col>
        <nuxt/>
      </vs-col>
    </vs-row>

    
    <TheSidebar/>
    
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheSidebar from '~/components/TheSidebar.vue'

export default {
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>


<style>

body {
  font-family: 'Montserrat', sans-serif;
}

</style>
