<template>
  <div>
    <h1>hello</h1>
    <div>{{home.data}}</div>
  </div>
</template>

<script lang='ts' setup>
  const { client } = usePrismic()
  const { data: home } = await useAsyncData('home', () => client.getByUID('post', 'home'))
</script>
