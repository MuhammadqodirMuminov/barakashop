export const EndPointes = {
    auth: {
        signIn: '/auth/admin/login',
        getme: '/auth/getme',
    },
    category: {
        getAll: '/category/get-all',
    },
    product: {
        getAll: '/product/get-all',
        getRecomended: '/product/get-all?recommended=true',
        getFrequently: '/product/get-all?friquentlysold=true',
        getNewest: '/product/get-all/?newest=true',
        getOne: 'product/get-one/',
    },
    ads: {
        getAll: '/ads/get-all',
    },
    detail: {
        getDetail: `/product/get-one/`
    },
    payment: {
        getAll: '/payment/get-all',
        getOne: '/payment/get-one',
        create: "/payment/create"
    },
    profile: {
        editPassword: "/user/update/password/"
    }
};
