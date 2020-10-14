<template>
  <div class="gallery" @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="image-wrapper">
      <img :src="url" alt="image" class="gallery-item" />
      <transition name="fade">
        <div class="cover" v-if="isShow">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="categoty"
                solo
                append-icon="mdi-chevron-down"
                class="menu"
                v-bind="attrs"
                v-on="on"
              >
                Dropdown
              </v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </transition>
    </div>
    <!-- <div class="gallery-desc" v-if="isMouseOver">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div class="list">
            <v-btn color="white" width="260" depressed v-bind="attrs" v-on="on">
              구독
              <v-icon>mid-chevron-down</v-icon>
            </v-btn>
            <v-btn color="red darken-3" class="save" depressed>저장</v-btn>
          </div>
        </template>
        <v-list>
          <v-text-field
            v-model="search"
            label="Search"
            placeholder="검색"
            dense
            rounded
            filled
            single-line
            hide-details
            height="50"
            class="mx-lg-10"
          ></v-text-field>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title
              ><a href="#">{{ item.title }}</a></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn depressed rounded></v-btn>
      <v-btn depressed fab><v-icon>mdi-upload</v-icon></v-btn>
      <v-btn depressed fab><v-icon>mdi-dots-horizontal</v-icon></v-btn>
    </div> -->
    <p class="name">{{ author }}</p>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: ['url', 'author'],
  data() {
    return {
      isShow: false,

      isMouseOver: false,
      categoty: 'cloth',
      items: [
        { title: 'Repository' },
        { title: 'Repository' },
        { title: 'Repository' },
        { title: 'Repository' },
      ],
    };
  },
  methods: {
    mouseover() {
      this.isShow = true;
      this.isMouseOver = true;
    },
    mouseleave() {
      this.isShow = false;
      this.isMouseOver = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
}
.image-wrapper {
  position: relative;
}
.gallery-item {
  border-radius: 10px;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 7px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
}
.menu {
  width: 80%;
  margin: 20px;
  border-radius: 10px;
}
//anmation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// .name {
//   font-weight: bold;
// }
// .gallery-desc {
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 3;
//   padding: 10px;
// }
// .v-btn {
//   opacity: 0.9;
// }
// .list {
//   width: 270px;
//   position: relative;
//   border-radius: 10px;
//   overflow: hidden;
// }
// .save {
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 40px;
//   background: red;
//   color: #fff;
//   font-weight: bold;
// }
</style>
