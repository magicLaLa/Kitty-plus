<template>
  <div class="text—box">
    <div>{{ text }}</div>
  </div>
</template>

<script lang="ts">
import './style/index.less';

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'MedexText',
})
export default class MedexText extends Vue {
  @Prop({ default: '' }) readonly text!: string;

  public created() {
    console.log('HelloWorld created', this.text);
  }
}
</script>