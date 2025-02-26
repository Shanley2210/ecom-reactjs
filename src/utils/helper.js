import { addProductToCart } from '@/apis/cartService';

export const handleaddProductToCartCommon = (
    userId,
    setIsOpen,
    setType,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoading,
    handleGetListProductsCart
) => {
    if (!userId) {
        setIsOpen(true);
        setType('login');
        toast.warning('Please login to add products to cart');
        return;
    }
    if (!sizeChoose) {
        toast.warning('Please choose size');
        return;
    }

    //console.log(details);

    const data = {
        userId,
        productId,
        quantity,
        size: sizeChoose
    };

    //console.log(data);

    setIsLoading(true);

    addProductToCart(data)
        .then((res) => {
            setIsOpen(true);
            setType('cart');
            toast.success('Add Product to cart successfully');
            setIsLoading(false);
            handleGetListProductsCart(userId, 'cart');
        })
        .catch((err) => {
            toast.error('Add Product to cart failed');
            setIsLoading(false);
        });
};
