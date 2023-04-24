<template>
  <div>
    <NavBar />
    <div class="container">
      <carrousel-home />
    </div>
  </div>
</template>

<script>
import CarrouselHome from '../components/Carrousel-home.vue';
import NavBar from '~/components/NavBar.vue';

export default {
    name: "IndexPage",
    components: { NavBar, CarrouselHome }
}
</script>
