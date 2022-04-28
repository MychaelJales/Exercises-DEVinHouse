<template>
  <div>
    {{`${hrFormatado}:${minFormatado}:${segFormatado}`}}
  </div>
</template>

<script>
export default {
  name: 'myCronometro',
  data () {
    return {
      cronometro: {},
      seg: 0,
      min: 0,
      hr: 0,
      segFormatado: '00',
      minFormatado: '00',
      hrFormatado: '00',
    }
  },
  props: {
    iniciar: Boolean,
  },
  methods: {
    controlaCronometro() {
      if (this.iniciar) {
        this.cronometro.start = setInterval(()=> {
          this.seg += 1;
      }, 1000);
      } else {
        clearInterval(this.cronometro.start);
      }
    },
    formataCronometro() {
      /* const { seg, min, hr, segFormatado, minFormatado, hrFormatado } = this; */
      if (this.seg < 10) {
        this.segFormatado = `0${this.seg}`
      } else if (this.seg > 9 && this.seg < 60) {
        this.segFormatado = this.seg;
      } else {
        this.seg = 0;
        this.min += 1;
      }
      if (this.min < 10) {
        this.minFormatado = `0${this.min}`
      } else if (this.min > 9 && this.min < 60) {
        this.minFormatado = this.min;
      } else {
        this.min = 0;
        this.hr += 1;
      }
      if (this.hr < 10) {
        this.hrFormatado = `0${this.hr}`
      } else if (this.hr > 9 && this.hr < 25) {
        this.hrFormatado = this.hr;
      } else {
        this.hr = 0;
      }
    }
  },
  watch: {
    iniciar() {
      this.controlaCronometro();
    },
    seg() {
      this.formataCronometro();
    }
  },
}
</script>

<style>
</style>
