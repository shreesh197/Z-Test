import { useRouter } from "next/dist/client/router";
import ProductDetails from "../../../../components/Products/Details";

const ProductDetailPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    return <ProductDetails id={id} />
}

export default ProductDetailPage;