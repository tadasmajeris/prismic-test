<script lang='ts' setup>
  const { client } = usePrismic()
  const { data: cmsData } = await useAsyncData('home', () => client.getByUID('post', 'home'))
  const page = cmsData.value.data
  import { components } from "~/slices"
</script>

<template>
  <main>
    <h1>{{page.title}}</h1>
    <div>{{page.content[0].text}}</div>
    <img :src="page.heroimage.url" />
    <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/>
  </main>
</template>

<style scoped>
  main {
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
  }
  a {
    display: block;
    padding: 8px 0;
    margin-bottom: 16px;
  }
  img {
    max-width: 240px;
    padding: 16px;
  }
</style>