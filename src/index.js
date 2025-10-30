import './styles.css';
import _ from 'lodash';
import logo from './images/logo.png';
import './test.ts';

const image = document.createElement('img');
image.src = logo;
document.body.appendChild(image);

const message = _.join(['Привіт', 'від', 'Webpack!'], ' ');
console.log(message);
