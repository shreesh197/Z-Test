import { useRouter } from "next/dist/client/router";
import Products from "../../../components/Products/List";

const ProductsPage = () => {
    const router = useRouter();
    const name = router.query.name as string;
    return <Products name={name} />
}

export default ProductsPage;