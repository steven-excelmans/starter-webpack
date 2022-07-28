import './css/styles.scss';

//Alpine.js
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

//app
const start = () => {
    console.log('>>> starting application');
}

start();
