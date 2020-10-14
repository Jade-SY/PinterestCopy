<template>
  <div class="container">
    <div
      class="masonry-container"
      v-masonry
      item-selector=".item"
      column-width="100"
      gutter="5"
      fit-width="true"
    >
      <gallery-item
        v-masonry-tile
        class="item"
        v-for="(item, index) in images"
        :key="index"
        :url="item.download_url"
        :author="item.author"
      >
      </gallery-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Gallery',
  components: {
    GalleryItem: () => import('@/components/gallery/GalleryItem.vue'),
  },
  data() {
    return {
      isMouseOver: false,
    };
  },
  computed: { ...mapState(['images']) },
  methods: {
    mouseover() {
      this.isMouseOver = true;
    },
    mouseleave() {
      this.isMouseOver = false;
    },
  },
  beforeMount() {
    this.$http.get('https://picsum.photos/v2/list').then((images) => {
      console.log(images);
      let resizeImage = images.data.map((el) => {
        let tmpArr = el.download_url.split('/');
        let deleted = tmpArr.splice(-2, 2);
        tmpArr.push(`300/${Math.floor((deleted[1] / deleted[0]) * 300)}.webp`);
        el.download_url = tmpArr.join('/');
        return el;
      });
      //   this.$store.commit('setImages', images.data);
      this.$store.commit('setImages', resizeImage);
    });
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 100px;
}
.masonry-container {
  margin: 0 auto;
}
</style>
