/* eslint-disable no-console */
import { cloneDeep } from 'lodash';
import moment from 'moment';

const obj = { herName: 'qian' };
const objDeep = cloneDeep(obj);

console.log('objDeep', objDeep);

const nowTime = Date().now();
const nowDate = moment(nowTime).format();
console.log('nowDate', nowDate);

function otherFun() {
  const nameWang = 'wang';
  console.log('nameWang', nameWang);
}

export default otherFun;
