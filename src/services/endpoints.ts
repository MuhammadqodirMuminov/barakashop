export const EndPointes = {
    auth: {
        signIn: '/auth/admin/login',
        getme: '/auth/getme',
    },
    category: {
        getOne: '/category/get-one/',
        getAll: '/category/get-all',
        getRecomended: '/category/get-all?recommendation=true',
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
        getDetail: `/product/get-one/`,
    },
    oqim: {
        getAll: '/oqim/get-all',
        getOne: '/oqim/get-one/',
    },
};
