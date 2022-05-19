<template>
  <ul>
    <li>
      <nuxt-link to="/" :class="{active: $route.path=='/'}">Home</nuxt-link>
      <nuxt-link to="/about" :class="{active: $route.path=='/about'}">About</nuxt-link>
      <nuxt-link to="/contact" :class="{active: $route.path=='/contact'}">Contact</nuxt-link>
    </li>
  </ul>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  li {
    margin: 0 4px;
  }
  a {
    color: black;
    text-decoration: none;
    padding: 8px;
    font-family: Arial, Helvetica, sans-serif;
  }
  a.active {
    text-decoration: underline;
  }
</style>