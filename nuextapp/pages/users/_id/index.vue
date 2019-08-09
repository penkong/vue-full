<template>
  <!-- it use router by in different -->
  <h1>single page, ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate(data) {
    console.log(data)
    // return data.params.id == 1;
    return true
  }
}
</script>

