import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/layout';
import HelloWorld from '@/components/HelloWorld';

import Library from '@/components/Library';
import Books from '@/components/library/books';
import Comics from '@/components/library/comics';
import Mangas from '@/components/library/mangas';

import auth from '@/auth';
import Login from '@/components/auth/Login.vue';
import Logout from '@/components/auth/Logout.vue';

Vue.use(Router);

function evaluateHome (to, from, next) {
  if(to.name == 'Home' && auth.loggedIn()) {
    next('/home');
  } else if(to.name == 'Home' && !auth.loggedIn()) {
    next('/login');
  }

  next();
};

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
};

const Route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout,
      beforeEnter: evaluateHome,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'logout',
          name: 'Logout',
          component: Logout,
        },
        {
          path: 'home',
          name: 'HelloWorld',
          component: HelloWorld,
          beforeEnter: requireAuth ,
        },
        {
          path: 'library',
          name: 'Library',
          component: Library,
          beforeEnter: requireAuth,
          children: [
            {
              name: 'library-books',
              path: 'books',
              component: Books,
            },
            {
              name: 'library-comics',
              path: 'comics',
              component: Comics,
            },
            {
              name: 'library-mangas',
              path: 'mangas',
              component: Mangas,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    },
  ]
});

export default Route;
