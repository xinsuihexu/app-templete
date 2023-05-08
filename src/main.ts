import App from './App.vue'
import init from './init'

import './styles/main.css'

const app = createApp(App)

init(app).then(() => {
    app.mount('#app')
})
