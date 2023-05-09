<template>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="../static/assets/1.png"
        ></b-carousel-slide>
  
        <b-carousel-slide img-src="../static/assets/2.png">
          <h1>Hello world!</h1>
        </b-carousel-slide>
  
        <b-carousel-slide img-src="../static/assets/3.png"></b-carousel-slide>
  
      </b-carousel>

    </div>
  </template>
  
  <script lang="js">
    export default {
      data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      }
    }
  </script>