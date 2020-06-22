<template>
  <div class="container">
    <div>
      <div>
        <input type="text" :value="message" @input="onInput" />
      </div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Logo from "~/components/Logo.vue";
import { createMapper } from "vuex-smart-module";
import demoStore from "~/store/demo";

const demoMapper = createMapper(demoStore);

export default Vue.extend({
  components: {
    Logo
  },
  computed: {
    ...demoMapper.mapState(["message"])
  },
  methods: {
    ...demoMapper.mapActions(["setMessage"]),
    onInput({ target }) {
      this.setMessage(target.value);
    }
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
