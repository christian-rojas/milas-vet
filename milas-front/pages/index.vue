<template>
  <div>
    <NavBar />
    <div class="container">
      <carrousel-home />
      <hr>
      <booking-vet></booking-vet>
    </div>
  </div>
</template>

<script>
import CarrouselHome from '../components/Carrousel-home.vue';
import BookingVet from '../components/BookingVet.vue';
import NavBar from '~/components/NavBar.vue';

export default {
    name: "IndexPage",
    components: { NavBar, CarrouselHome, BookingVet }
}
</script>
