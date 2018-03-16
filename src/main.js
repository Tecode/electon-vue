// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'babel-polyfill';
import {
  Button,
  Table,
  Layout,
  Sider,
  Content,
  Header,
  Footer,
  MenuItem,
  Submenu,
  BreadcrumbItem,
  Card,
  Icon,
  Breadcrumb,
  Menu
} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
// 按需引入组件
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Layout', Layout);
Vue.component('Sider', Sider);
Vue.component('Content', Content);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Card', Card);
Vue.component('Icon', Icon);
Vue.component('Menu', Menu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
