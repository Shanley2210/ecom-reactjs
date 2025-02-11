import axiosClient from './axiosClient';

const getProducts = async () => {
    const res = await axiosClient.get('/product?page=1&limit=10');

    return res.data;
};

export { getProducts };
