import App from '../App.vue'
import recom from '../pages/recom/recom.vue'

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转top页面
        {
            path: '',
            redirect: '/recom'
        },
        //头条
        {
            name: 'recom',
            path: '/recom',
            component: recom
        },
        // //所有商铺列表页
        // {
        //     path: '/msite',
        //     component: msite,
        // },
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