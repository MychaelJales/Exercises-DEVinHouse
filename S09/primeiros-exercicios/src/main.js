import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.directive('font-size', {
    beforeMount(el) {
        el.addEventListener('mouseover', () => {
            el.style = 'font-size:20px'
        });
        el.addEventListener('mouseout', () => {
            el.style = 'font-size:15px'
        });
    },
})
.mount('#app');
