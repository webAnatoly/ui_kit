import './main.scss';
import Ripple from './components/buttons/Ripple';


document.addEventListener("DOMContentLoaded", function(event) {
  new Ripple({buttons: document.querySelectorAll('.btn-rect')})
});

console.log('test my build');