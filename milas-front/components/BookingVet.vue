<template>
  <div>
    <!-- <date-picker v-model="date" :config="options"></date-picker> -->
    <!-- <input
      class="form-control"
      type="date"
      step="1"
      min="2023-04-26T17:00:00"
    />
    <input
      id="time-picker"
      ref="picture"
      type="time"
      name="time-picker"
      min="09:00"
      max="19:00"
      value="12:00"
      @focus="esto"
    /> -->
    <!-- <vue-flatpickr v-model="selectedDate" :config="config"></vue-flatpickr> -->
    <b-form-datepicker id="example-datepicker" class="mb-2"></b-form-datepicker>
    <!-- <input
      id="time-picker"
      ref="picture"
      type="time"
      name="time-picker"
      min="09:00:00"
      max="19"
      value="12:00"
    /> -->
    <!-- <b-time locale="en" @context="onContext"></b-time> -->
  </div>
</template>
<script lang="js">
import { defineComponent } from "vue";
// import VueDatePicker from '@vuepic/vue-datepicker';
export default defineComponent({
components: {
  // VueDatePicker
},
  data() {
    return {
      selectedDate: null,
      date: new Date(),
      config: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true,
      },
      options: {
        format: 'DD/MM/YYYY hh',
        useCurrent: true,
        allowInputToggle: false,
      },
    }
  },
  mounted() {
    // const height = this.$refs.picture
    // height.addEventListener('change', function () {
    //   const selectedTime = height.value
    //   const roundedTime = selectedTime.slice(0, -3) + ':00'
    //   height.value = roundedTime
    // })


  },
  methods: {
    esto() {
      const horasDeshabilitadas = [8, 7, 6];
      const horaSelector = this.$refs.picture;
      for (let i = 0; i < horasDeshabilitadas.length; i++) {
        const opcion = horaSelector.querySelector('option[value="' + horasDeshabilitadas[i] + ':00"]');
          if (opcion) {
              opcion.disabled = true;
          }
      }
    },
  },
})
</script>
<style lang="css"></style>
