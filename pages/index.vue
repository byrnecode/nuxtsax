<template>
  <section class="container">
    <div>
      <TheTest/>

      <div>
        <vs-button color="primary" vs-type="filled">Primary</vs-button>
        <vs-button color="success" vs-type="filled">Success</vs-button>
        <vs-button color="danger" vs-type="filled">Danger</vs-button>
        <vs-button color="warning" vs-type="filled">Warning</vs-button>
        <vs-button color="dark" vs-type="filled">Dark</vs-button>
        <vs-button color="rgb(134, 4, 98)" vs-type="filled">RGB</vs-button>
        <vs-button disabled vs-type="filled">Disabled</vs-button>
        <vs-button vs-color="primary" vs-type="filled" to="/components/list.html">Router</vs-button>
      </div>
      <div>
        <vs-button color="primary" vs-type="border" vs-icon="home">Home</vs-button>
        <vs-button color="warning" vs-type="filled" vs-icon="star">Star</vs-button>
        <vs-button color="success" vs-type="flat" vs-icon="done">Done</vs-button>
        <vs-button color="dark" vs-type="line" vs-icon="menu">menu</vs-button>
        <vs-button color="danger" vs-type="gradient" vs-icon="favorite">favorite</vs-button>
        <vs-button disabled color="primary" vs-type="border" vs-icon="home">Disabled</vs-button>
      </div>
    </div>
  </section>
</template>

<script>
import TheTest from '~/components/TheTest.vue'

export default {
  components: {
    TheTest
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
