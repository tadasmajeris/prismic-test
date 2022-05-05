<script lang='ts' setup>
  const { client } = usePrismic()
  const { data: home } = await useAsyncData('home', () => client.getByUID('post', 'home'))
  const cmsData = home.value.data
  import { components } from "../slices"
</script>

<template>
  <main>
    <h1>{{cmsData.title}}</h1>
    <div>{{cmsData.content[0].text}}</div>
    <img :src="cmsData.heroimage.url" />
    <slice-zone :slices="cmsData.slices" :components="components"/>
  </main>
</template>

<style scoped>
  main {
    text-align: center;
  }
  img {
    max-width: 240px;
    padding: 16px;
  }
</style>