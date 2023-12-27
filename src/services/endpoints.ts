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
        getOne: 'product/get-one/',
        getAll: '/product/get-all',
        getRecomended: '/product/get-all?recommended=true',
        getFrequently: '/product/get-all?friquentlysold=true',
        getNewest: '/product/get-all/?newest=true',
        getOnSale: '/product/get-all?onsale=true',
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
        getOneByUserId: '/oqim/get-one/by-user/',
        create: '/oqim/create',
    },
};
