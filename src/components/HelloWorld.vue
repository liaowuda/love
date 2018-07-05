<template>
  <div class="hello">   
    <app-titles v-bind:titlemag="titlemag"></app-titles>
  </div>
</template>

<script>
import Titles from './Titles'
export default {
  name: 'HelloWorld',
  data () {
    return {
      titlemag:'请选择性别'

    }
  },
  proto:{
      title:{
          type:String
      }
    },
    components:{
      "app-titles":Titles
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
