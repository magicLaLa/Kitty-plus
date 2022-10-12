<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MedexText } from 'kitty-plus';

@Component({
  name: 'Test',
  components: {
    MedexText,
  },
})
export default class Test extends Vue {}
</script>

<template>
  <div class="main-box">
    <MedexText text="tests" />
  </div>
</template>

<style scoped lang="less">
.main-box {
  background-color: aquamarine;
}
</style>
