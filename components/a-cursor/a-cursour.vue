<template>
  <div class="circle-cursor" :class="{ 'circle-cursor--visible': isVisible }"></div>
</template>

<script>
import './a-cursor.scss';

export default {
  name: 'ACursor',

  data() {
    return {
      isVisible: false,
    };
  },

  mounted() {
    this.start();
  },

  beforeDestroy() {
    this.destroy();
  },

  methods: {
    start() {
      document.body.addEventListener('mouseenter', this.onMouseEnter);
      document.addEventListener('mousemove', this.onMouseMove);
      document.body.addEventListener('mouseleave', this.onMouseLeave);
    },
    destroy() {
      document.body.removeEventListener('mouseenter', this.onMouseEnter);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.body.removeEventListener('mouseleave', this.onMouseLeave);
    },
    onMouseMove(e) {
      this.$el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    },
    onMouseEnter(e) {
      this.onMouseMove(e);
      this.isVisible = true;
    },
    onMouseLeave() {
      this.isVisible = false;
    },
  },
};
</script>
