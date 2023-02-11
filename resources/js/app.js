import '../css/app.css'
import Alpine from 'alpinejs'
import loadComponents from './components/loadComponents'

window.Alpine = Alpine

loadComponents(Alpine.data).then(() => Alpine.start())
