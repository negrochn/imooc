<template>
  <header class="header">
    <div class="nav clearfix">
      <div class="logo">
        <a title="首页">
          <img src="https://www.imooc.com/static/img/index/logo.png" title="慕课网">
        </a>
      </div>
      <ul class="nav-item">
        <li v-for="navItem in navItemList" :key="navItem.title">
          <a>
            {{navItem.title}}
            <i v-if="navItem.new" class="icon-new"></i>
          </a>
        </li>
      </ul>
      <div class="login-area">
        <ul class="clearfix">
          <li :class="item.id" v-for="item in loginAreaList" :key="item.id">
            <a>
              <span v-if="item.icon" :class="`icon-${item.icon}`"></span>
              <span v-if="item.title">{{item.title}}</span>
              <span v-if="item.cartnum" class="cart-num">{{item.cartnum}}</span>
              <img v-if="item.img" :src="item.img" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="search-wrap">search-wrap</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {
      navItemList: [
        { title: '免费课程' },
        { title: '实战课程' },
        { title: '金职位', new: true },
        { title: 'wiki' },
        { title: '专栏' },
        { title: '手记' },
      ],
      loginAreaList: [
        { id: 'app-download', title: '下载APP' },
        { id: 'shop-cart', title: '购物车', icon: 'shopping-cart', cartnum: 3 },
        { id: 'remand', icon: 'notifi' },
        { id: 'my-course', title: '我的课程' },
        { id: 'header-avator', img: '//img3.mukewang.com/5d818b1a0001e27d08960896-100-100.jpg' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
  .header {
    .nav {
      .logo {
        float: left;
        margin: 0 20px;
        a {
          display: block;
          width: 140px;
          height: 72px;
          img {
            height: 72px;
            cursor: pointer;
          }
        }
      }
      &-item {
        float: left;
        li {
          float: left;
          a {
            position: relative;
            display: block;
            padding: 0 20px;
            height: 72px;
            line-height: 72px;
            font-size: 16px;
            color: #4D555D;
            cursor: pointer;
            .icon-new {
              position: absolute;
              top: 14px;
              width: 16px;
              height: 16px;
              background: url('https://www.imooc.com/static/img/common/new.png');
            }
          }
        }
      }
      .login-area {
        position: relative;
        float: right;
        ul {
          li {
            float: left;
            a {
              display: block;
              padding: 0 15px;
              width: 60px;
              height: 72px;
              line-height: 72px;
              color: #71777d;
              text-align: center;
              text-decoration: none;
            }
            &.shop-cart {
              margin: 18px 0;
              height: 36px;
              line-height: 36px;
              a {
                box-sizing: border-box;
                display: inline-block;
                padding: 0 18px;
                width: auto;
                height: 36px;
                line-height: 34px;
                text-align: center;
                border: 1px solid #D9DDE1;
                border-radius: 18px;
                [class^="icon-"] {
                  position: relative;
                  top: 2px;
                  margin-right: 8px;
                  font-size: 16px;
                }
                .cart-num {
                  display: inline-flex;
                  margin-left: 8px;
                  padding: 0 5px;
                  height: 16px;
                  line-height: 16px;
                  color: #fff;
                  background-color: #f01414;
                  border-radius: 8px;
                }
              }
            }
            &.remand {
              margin: 12px 0;
              height: 48px;
              a {
                padding: 0;
                [class^="icon-"] {
                  display: block;
                  line-height: 48px;
                  font-size: 22px;
                  text-align: center;
                }
              }
            }
            &.my-course {
              a {
                padding: 0;
              }
            }
            &.header-avator {
              a {
                padding: 0;
                img {
                  margin-top: -5px;
                  width: 32px;
                  height: 32px;
                  text-align: center;
                  vertical-align: middle;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
