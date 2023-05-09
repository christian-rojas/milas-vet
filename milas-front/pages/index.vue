<template>
  <div>
    <NavBar />
      <carousel-home />
      <hr>
      <booking-vet></booking-vet>
  </div>
</template>

<script>
import CarouselHome from '../components/CarouselHome.vue';
import BookingVet from '../components/BookingVet.vue';
import NavBar from '~/components/NavBar.vue';

export default {
    name: "IndexPage",
    components: { NavBar, CarouselHome, BookingVet }
}
</script>
