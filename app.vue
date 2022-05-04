<script lang='ts' setup>
  const { client } = usePrismic()
  const { data: home } = await useAsyncData('home', () => client.getByUID('post', 'home'))
  const cmsData = home.value.data
</script>

<template>
  <div>
    <h1>{{cmsData.title}}</h1>
    <div>{{cmsData.content[0].text}}</div>
    <img :src="cmsData.heroimage.url" />
  </div>
</template>

<style scoped>
  img {
    max-width: 600px;
  }
</style>