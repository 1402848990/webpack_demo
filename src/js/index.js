/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import '../css/index.css';
import '../css/index.scss';
import { cloneDeep } from 'lodash';
import print from './print';
import Other from './other';

console.log('hello webpack');
const obj = { name: 'wang' };
const { name } = obj;
console.log('name', name);
// const obj2 = { ...obj };
const p = new Promise((r) => {
  setTimeout(() => {
    console.log('ok22');
    r('ok4');
  }, 1000);
});
console.log(p);
print();
console.log('index-module', module);

const clone = cloneDeep(obj);
console.log('clone', clone);
