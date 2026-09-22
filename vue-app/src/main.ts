import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
	theme: {
		defaultTheme: 'dark',
		themes: {
			light: {
				colors: {
					primary: '#416044',
				},
			},
			dark: {
				colors: {
					primary: '#d4ef74',
				},
			},
		},
	},
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
