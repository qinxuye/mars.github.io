import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: '开源产品品牌名称',
            briefIntroduction: '关于开源产品的简单介绍',
            buttons: [
                {
                    text: '立即开始',
                    link: '/zh-cn/docs/demo1.html',
                    type: 'primary',
                },
                {
                    text: '查看Github',
                    link: '',
                    type: 'normal',
                },
            ],
        },
        introduction: {
            title: '开源产品的介绍',
            desc: '开源产品的简单介绍，提供一些该产品的优点、特性描述等',
            img: '/img/architecture.png',
        },
        features: {
            title: '特性一览',
            list: [
                {
                    img: '/img/feature_transpart.png',
                    title: '特性1',
                    content: '特性1的简单概括',
                },
                {
                    img: '/img/feature_loadbalances.png',
                    title: '特性2',
                    content: '特性2的简单概括',
                },
                {
                    img: '/img/feature_service.png',
                    title: '特性3',
                    content: '特性3的简单概括',
                },
                {
                    img: '/img/feature_hogh.png',
                    title: '特性4',
                    content: '特性4的简单概括',
                },
                {
                    img: '/img/feature_runtime.png',
                    title: '特性5',
                    content: '特性5的简单概括',
                },
                {
                    img: '/img/feature_maintenance.png',
                    title: '特性6',
                    content: '特性6的简单概括',
                },
            ],
        },
        start: {
            title: '快速开始',
            desc: '简单描述',
            img: '/img/quick_start.png',
            button: {
                text: '阅读更多',
                link: '/zh-cn/docs/demo1.html',
            },
        },
        users: {
            title: '用户',
            desc: <span>简单描述</span>,
            list: [
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
            ],
        },
    },
    'en-us': {
        brand: {
            brandName: 'Mars',
            briefIntroduction: 'Mars is a tensor-based unified framework for large-scale data computation.',
            buttons: [
                {
                    text: 'Quick Start',
                    link: 'https://mars-project.readthedocs.io/en/latest/install.html',
                    type: 'primary',
                },
                {
                    text: 'View on Github',
                    link: 'https://github.com/mars-project/mars',
                    type: 'normal',
                },
            ],
        },
        introduction: {
            title: 'A scalable analytics in Python',
            desc: 'Mars can scale in to a single machine, and scale out to a cluster with thousands of machines. Both the local and distributed version share the same piece of code, it\'s fairly simple to migrate from a single machine to a cluster due to the increase of data.',
            img: '/img/architecture.svg',
        },
        features: {
            title: 'Feature List',
            list: [
                {
                    img: '/img/feature_transpart.png',
                    title: 'scalable to thousands of clusters',
                    content: 'feature description',
                },
                {
                    img: '/img/feature_loadbalances.png',
                    title: 'familiar to numpy and pandas user',
                    content: 'feature description',
                },
                {
                    img: '/img/feature_service.png',
                    title: 'feature3',
                    content: 'feature description',
                },
                {
                    img: '/img/feature_hogh.png',
                    title: 'feature4',
                    content: 'feature description',
                },
                {
                    img: '/img/feature_runtime.png',
                    title: 'feature5',
                    content: 'feature description',
                },
                {
                    img: '/img/feature_maintenance.png',
                    title: 'feature6',
                    content: 'feature description',
                },
            ],
        },
        start: {
            title: 'Quick start',
            desc: 'This guide gets you started with Mars with a simple tensor multiplication.',
            img: '/img/quick_start.png',
            button: {
                text: 'READ MORE',
                link: 'https://mars-project.readthedocs.io/en/latest/install.html',
            },
        },
        users: {
            title: 'users',
            desc: <span>some description</span>,
            list: [
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
                '/img/users_alibaba.png',
            ],
        },
    },
};
