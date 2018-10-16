<template>
  <div>
    
    <!-- start Navigation Main -->
    <vs-navbar>
      <vs-navbar-title>
        Nuxtsax
      </vs-navbar-title>
      
      <vs-spacer></vs-spacer>

      <vs-input vs-icon="search" placeholder="Search" v-model="search"/>
      
      <ul class="vs-navbar-list--desktop">
        <vs-navbar-item 
          v-for="(mainNavItem, index) in mainNavItems" 
          :key="mainNavItem.title"
          :index="index">
          <nuxt-link :to="mainNavItem.url"> {{ mainNavItem.title }} </nuxt-link>
        </vs-navbar-item>
      </ul>

      <vs-button @click="isSidebarOpen = !isSidebarOpen" vs-type="flat" vs-icon="menu" class="vs-navbar-trigger"></vs-button>
    </vs-navbar>
    <!-- end Navigation Main -->


    <!-- start Navigation Sidebar -->
    <vs-sidebar parent="body" color="primary" class="sidebarx" spacer v-model="isSidebarOpen">

      <div class="sidebar-header" slot="header">
        <vs-avatar  size="70px" src="https://avatars0.githubusercontent.com/u/14091662?s=88&v=4"/>

        <h4>
          My Name
          <vs-button color="primary" vs-icon="more_horiz" vs-type="flat"></vs-button>
        </h4>

      </div>

      <div class="vs-navbar-list--mobile">
        <vs-sidebar-item 
          v-for="(mainNavItem, index) in mainNavItems" 
          :key="mainNavItem.title"
          :index="index"
          :icon="mainNavItem.icon"
          :to="mainNavItem.url">
          {{ mainNavItem.title }}
        </vs-sidebar-item>
      </div>

      <vs-sidebar-item 
        v-for="(secondNavItem, index) in secondNavItems" 
        :key="secondNavItem.title"
        :index="mainNavItemsLength + index"
        :icon="secondNavItem.icon"
        :to="secondNavItem.url">
        {{ secondNavItem.title }}
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item 
        v-for="(thirdNavItem, index) in thirdNavItems" 
        :key="thirdNavItem.title"
        :index="mainNavItemsLength + secondNavItemsLength + index"
        :icon="thirdNavItem.icon"
        :to="thirdNavItem.url">
        {{ thirdNavItem.title }}
      </vs-sidebar-item>

      <div class="sidebar-footer" slot="footer">
        <vs-button vs-icon="reply" color="danger" vs-type="flat">log out</vs-button>
        <vs-button vs-icon="settings" color="primary" vs-type="border"></vs-button>
      </div>

    </vs-sidebar>
    <!-- end Navigation Sidebar -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeItem: 0,
      search: '',
      mainNavItems: [
        { title: 'Home', url: '/', icon: 'home' },
        { title: 'Screener', url: '/screener', icon: 'show_chart' },
        { title: 'Tools', url: '/tools', icon: 'apps' }
      ],
      secondNavItems: [
        { title: 'Dashboard', url: '/dashboard', icon: 'question_answer' },
        { title: 'History', url: '/history', icon: 'gavel' }
      ],
      thirdNavItems: [
        { title: 'Configurations', url: '/config', icon: 'verified_user' },
        { title: 'Profile', url: '/profile', icon: 'account_box' },
        { title: 'Card', url: '/card', icon: '' }
      ],
      isSidebarOpen: false
    }
  },

  computed: {
    mainNavItemsLength() {
      return this.mainNavItems.length
    },
    secondNavItemsLength() {
      return this.secondNavItems.length
    }
  }
}
</script>

<style lang="scss" scoped>

.vs-navbar .vs-navbar-item {
  display: inline-block;
}

.vs-navbar-list--desktop {
  display: none;
  @include desktopUp {
    display: block;
  }
}

.vs-navbar-list--mobile {
  display: block;
  @include desktopUp {
    display: none;
  }
}

.vs-navbar-trigger {
  border-radius: 0;
}

// .vs-navbar-trigger {
//   display: flex;
//   @include desktopUp {
//     display: none;
//   }
// }

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > button {
      margin-left: 10px;
    }
  }
}
.sidebar-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > button {
    border: 0px solid rgba(0,0,0,0);
    border-left: 1px solid rgba(0,0,0,.07);
    border-radius: 0px;
  }
}
</style>