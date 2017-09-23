const Login = resolve => require(['views/log/login.vue'], resolve) // 登录

export default [
    {
        path: '/log',
        name: 'log',
        component: Login,
        meta: {
            title: '登录',
        }
    }
]