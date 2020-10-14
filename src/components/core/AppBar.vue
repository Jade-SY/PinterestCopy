<template>
  <div>
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="pa-2"
    >
      <v-btn icon
        ><v-icon color="red accent-4" size="30">mdi-pinterest</v-icon></v-btn
      >
      <router-link to="/">
        <v-btn depressed height="50" rounded v-on="on">
          홈
        </v-btn></router-link
      >
      <router-link to="/">
        <v-btn depressed color="white" height="50" rounded>
          팔로잉
        </v-btn></router-link
      >

      <v-text-field
        v-model="search"
        label="Search"
        placeholder="검색"
        prepend-inner-icon="mdi-magnify"
        dense
        rounded
        filled
        single-line
        hide-details
        height="50"
        class="mx-lg-10"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-chat-processing</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="red darken-3">mdi-arrow-left-drop-circle</v-icon>
      </v-btn>
      <v-icon>mdi-chevron-down</v-icon>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="white" icon v-bind="attrs" v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <p>계정</p>
            <v-list-item v-for="(item, index) in account" :key="index">
              <v-btn depressed color="transparent"
                ><v-list-item-title>{{ item.title }}</v-list-item-title></v-btn
              >
            </v-list-item>
            <p>옵션 더 보기</p>
            <v-list-item v-for="(item, index) in options" :key="index">
              <v-btn depressed color="transparent"
                ><v-list-item-title>{{ item.title }}</v-list-item-title></v-btn
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    account: [
      { title: '다른 계정 추가' },
      { title: '무료 Business 계정 추가' },
    ],
    options: [
      { title: '설정' },
      { title: '홈피드 조정' },
      { title: 'Windows 앱 설치' },
      { title: '도움 받기' },
      { title: '약관 및 개인정보 보기' },
      { title: '로그아웃' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
}
</style>
