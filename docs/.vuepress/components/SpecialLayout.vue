<template>
  <div class="translate">
    <div class="cont">
      <Content :custom="false" />
    </div>
    <div class="cont">
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import EN from './EN.js';
export default {
  components: { EN },
  data() {
    return {
      componentId: ''
    };
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      const pathnameArr = location.pathname.replace('.html', '').split('/');
      const compName = `page-en-${pathnameArr[1]}-${
        pathnameArr[pathnameArr.length - 1]
      }`;
      Vue.component(compName, () =>
        import(`../../${pathnameArr[1]}/en/${
          pathnameArr[pathnameArr.length - 1]
        }.md`)
      );
      this.componentId = compName;
    }
  },
  mounted() {
    const container = document.querySelector('.no-sidebar');
    if (container) {
      container.classList = 'theme-container';
    }

    const pathnameArr = location.pathname.replace('.html', '').split('/');
    const compName = `page-en-${pathnameArr[1]}-${
      pathnameArr[pathnameArr.length - 1]
    }`;
    Vue.component(compName, () =>
      import(`../../${pathnameArr[1]}/en/${
        pathnameArr[pathnameArr.length - 1]
      }.md`)
    );
    this.componentId = compName;
  }
};
</script>

<style>
.translate {
  display: flex;
  padding: 50px;
  margin-left: 300px;
}
.content:not(.custom) h1 {
  padding-top: 0;
}
.cont {
  flex: 1;
  padding: 30px;
}
.cont img {
  max-width: 100%;
}
</style>