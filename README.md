# README #

This is an example for a VUE project with multiple different layouts.
This example is builded based on the vue-router's auth-flow.

Some days ago I faced a problem at work. Wee need to use different layouts for different states: Public and Private layouts.
And with some restrictions:
 - Need a layout for public pages, and another for private ones.
 - Cannot use multiple containers tags. I mean, the components must to be in the root node.
 - We must to handle the body's class for different layouts.

## The Solution
The way that I found: First, use store (vuex) to maintain the session token and can react to the changes (login/logout).
In the layout folder, create an index where is implemented a <component>. In this component mount the private or public layout according to the session token.
Also reacts to the session token. If the user do a logout or login, this current-view change according to the last state.
For the last step, in the main.js. When created, check the token in the localStorage, and do a commit to set the store's status. In this way, the state maintains if the user reloads the page.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Links
https://github.com/vuejs/vue-router/blob/dev/examples/auth-flow/auth.js
