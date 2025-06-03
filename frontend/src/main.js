import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.less';
import './assets/tailwind.css';
import components from './components/global';
import Router from './router/index';

const app = createApp(App)

// components
for (const i in components) {
  app.component(i, components[i])
}

app.use(Router).mount('#app')
