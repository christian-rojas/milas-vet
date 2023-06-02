<template>
  <div>
    <NavBar />
      <carousel-home />
      <hr>
      <jumbo-info />
      <info-services />
      <!-- <booking-vet></booking-vet> -->
      <calendly-page/>
  </div>
</template>

<script>
import InfoServices from '../components/InfoServices.vue';
import CarouselHome from '../components/CarouselHome.vue';
// import BookingVet from '../components/BookingVet.vue';
import CalendlyPage from '../components/CalendlyPage.vue';
import NavBar from '~/components/NavBar.vue';
import JumboInfo from '~/components/JumboInfo.vue'

export default {
    name: "IndexPage",
    components: { NavBar, CarouselHome, CalendlyPage, InfoServices, JumboInfo }
}
</script>
