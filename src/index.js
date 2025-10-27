import './styles.css';
import _ from 'lodash';
import logo from './images/logo.png';

const image = document.createElement('img');
image.src = logo;
document.body.appendChild(image);

const message = _.join(['Привіт', 'від', 'Webpack!'], ' ');
console.log(message);
