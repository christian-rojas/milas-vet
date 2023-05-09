<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img src="./../static/assets/logo.png" width="50px" alt="">
      </b-navbar-brand>

      <b-navnar-item class="m-auto">
        <b-button variant="warning">reserva</b-button>
      </b-navnar-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#services">Servicios</b-nav-item>
          <b-nav-item href="#contact">Contacto</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang=""></style>
