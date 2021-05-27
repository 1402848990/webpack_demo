/* eslint-disable no-console */
import moment from 'moment';

function print() {
  console.log('print3');
  console.log('module', module);
  return 'aa3';
}

const nowTime = Date().now();
const nowDate = moment(nowTime).format();
console.log('nowDate', nowDate);

export default print;
