import Vue from 'vue';
import './style.scss';

import store from './store/index.js';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } }); //add method to instance objc

import App from './components/App.vue';

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date, 'YYYY-MM-DD')
  }
});
let initialState = Object.assign({}, store.state, { events });
console.log(initialState);

store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
