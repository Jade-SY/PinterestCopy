<template>
  <div class="gallery" @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="image-wrapper">
      <img :src="url" alt="image" class="gallery-item" />
      <transition name="fade">
        <div class="cover" v-if="isShow">
          <v-text-field
            v-model="categoty"
            solo
            append-icon="mdi-chevron-down"
            class="menu"
            label="Regular"
            @click="menuClick"
          >
          </v-text-field>
          <div class="right-btn" @click="menuClick">저장</div>
          <v-card width="200" class="list-card" v-if="isMenuShow">
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
          <div class="under-wrapper">
            <v-btn icon dark>
              <v-icon>mdi-upload</v-icon>
            </v-btn>
            <v-btn icon dark>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </div>
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
      isMenuShow: true,
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
    menuClick() {
      this.isMenuShow != this.isMenuShow;
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
  width: 60%;
  margin: 20px;
  border-radius: 10px 0 0 10px;
}
.right-btn {
  width: 20%;
  height: 49px;
  position: absolute;
  right: 48px;
  top: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 49px;
  border-radius: 0 10px 10px 0;
  background: rgb(180, 0, 0);
  display: inline-block;
}
.list-card {
  top: -54px;
  left: 15px;
  z-index: 3;
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

.under-wrapper {
  position: absolute;
  right: 10px;
  bottom: 10px;
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
