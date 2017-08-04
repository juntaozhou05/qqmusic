import App from '../App.vue'
import recom from '../pages/recom/recom.vue'
import musicList from '../pages/musicList/musicList.vue'
import musicOne from '../pages/musicOne/musicOne.vue'
import musicTop from '../pages/musicTop/musicTop.vue'
import musicDetail from '../pages/musicDetail/musicDetail.vue'

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转top页面
        {
            path: '',
            redirect: '/recom'
        },
        //首页
        {
            name: 'recom',
            path: '/recom',
            component: recom
        },
        //热歌列表
        {
            name: 'musicList',
            path: '/musicList',
            component: musicList
        },
        //一人一首招牌歌列表
        {
            name: 'musicOne',
            path: '/musicOne',
            component: musicOne
        },
        //轮播列表
        {
            name: 'musicTop',
            path: '/musicTop',
            component: musicTop
        },
        //音乐播放页面
        {
            name: 'musicDetail',
            path: '/musicDetail',
            component: musicDetail
        },
        // //特色商铺列表页
        // {
        //     path: '/food',
        //     component: food
        // },
        // //搜索页
        // {
        //     path: '/search/:geohash',
        //     component: search
        // },
        // //商铺详情页
        // {
        //     path: '/shop',
        //     component: shop,
        //     children: [{
        //         path: 'foodDetail', //食品详情页
        //         component: foodDetail,
        //     }, {
        //         path: 'shopDetail', //商铺详情页
        //         component: shopDetail,
        //         children: [{
        //             path: 'shopSafe', //商铺安全认证页
        //             component: shopSafe,
        //         }, ]
        //     }]
        // },

    ]
}]