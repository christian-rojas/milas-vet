<template>
  <div>
    <date-picker v-model="date" :config="options"></date-picker>
  </div>
</template>
<script lang="ts">
import datePicker from 'vue-bootstrap-datetimepicker'
export default {
  components: { datePicker },
  data() {
    return {
      date: new Date(),
      options: {
        format: 'DD/MM/YYYY hh:mm',
        useCurrent: false,
        allowInputToggle: true,
      },
    }
  },
  created() {
    // eslint-disable-next-line no-new
  },
}
</script>
<style lang="css"></style>
