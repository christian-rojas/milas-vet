<template>
  <div>
    <NavBar />
      <carousel-home />
      <hr>
      <jumbo-info />
      <info-services />
      <booking-vet></booking-vet>
  </div>
</template>

<script>
import InfoServices from '../components/InfoServices.vue';
import CarouselHome from '../components/CarouselHome.vue';
import BookingVet from '../components/BookingVet.vue';
import NavBar from '~/components/NavBar.vue';
import JumboInfo from '~/components/JumboInfo.vue'

export default {
    name: "IndexPage",
    components: { NavBar, CarouselHome, BookingVet, InfoServices, JumboInfo }
}
</script>
