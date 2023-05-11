<template>
  <div id="booking">
    <div class="container">
      <b-card bg-variant="light" header="Reserva" class="text-center">
        <div id="datepicker" class="mb-3">
          <b-form-datepicker
            id="example-datepicker"
            :start-weekday="1"
            :date-disabled-fn="dateDisabled"
            locale="es"
            :min="min"
            placeholder="Escoge una fecha"
            dropdown
            weekday-header-format="narrow"
            menu-class="w-100"
            calendar-width="100%"
            size="lg"
          ></b-form-datepicker>
        </div>
        <div id="clock">
          <b-dropdown id="dropdown-1" class="bg-info">
            <template #button-content>
              <div style="display: inline-flex">
                <b-icon-clock class="d-flex"></b-icon-clock>
                <p style="margin-left: 15px; margin-bottom: 0px !important">
                  {{ text ?? '12:00' }}
                </p>
              </div>
            </template>
            <div v-for="(todo, index) in todos" :key="index">
              <b-dropdown-item @click="setText(todo)">
                {{ todo }}
              </b-dropdown-item>
            </div>
          </b-dropdown>
        </div>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
          :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
          @input="$v.form.email.$touch"
        ></b-form-input>
      </b-form-group>
      </b-card>
    </div>
  </div>
</template>
<script lang="js">
import { defineComponent } from "vue";
import { BIconClock } from 'bootstrap-vue'
import { required, email } from 'vuelidate/lib/validators'

export default defineComponent({
components: {
  BIconClock
},
  data() {
    return {
      email: '',
      form: {
        email: ''
      },
      min: new Date(),
      todos: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
      text: null,
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

  validations () {
    return {
      form: {
        email: { required, email }
      }
    }
  },
  methods: {
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13
    },
    setText(text) {
      this.text = text
    },
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
<style lang="css">
#clock {
  display: flex;
  justify-content: center;
}
#dropdown-1__BV_toggle_ {
  background-color: #17a2b8 !important;
}
</style>
