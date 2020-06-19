<template>
  <div id="app">
    <button v-on:click="a()">翻译此页</button>
  </div>
</template>
<script>
export default {
  name: "app",
  props: ["c"],
  methods: {
    a: function() {
      window.open("https://translate.bifrost.finance/project/bifrost-network/en#");
    }
  }
};
</script>
<style  scoped>
button:hover{
    color :#fff;
    background-color: hsl(152,46%,48%);

}
button{
    font-size: 13px;
    font-weight: 550;
    letter-spacing: 1px;
    background-color:#fff;
    color: hsl(152,46%,48%);
    height: 2.5rem;
    width: 7rem;
    margin: 0px;
    padding: 0px;
    border: 1.5px solid hsl(152,46%,48%);
    outline: none;
    border-radius: 5px;
}
</style>