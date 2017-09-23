const Main = resolve => require(['views/main/index.vue'], resolve) // 主页框架
const sysLead = resolve => require(['views/sysLead/index.vue'], resolve) // 系统引导页

export default [
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统'
        },
        children: [
            {
                path: '/sysLead',
                name: 'sysLead',
                component: sysLead,
                meta: {
                    title: '系统引导页'
                }
            }
        ]
    }
]