import React, { useEffect, useState } from "react";
import { getProductsOfCategory } from "../../services/apiEndpoints";
import Layout from "../Layout";
import { uuid } from "uuidv4";
import { Spin } from 'antd';
import Link from 'next/link';

const Products = ({
    name
} : {
    name: string
}) => {

    if(!name) return <Spin tip="Loading..." size="large" spinning={true} />

    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=>{
        fetchCategoryProducts();
    }, [name]);

    const fetchCategoryProducts = async () => {
        setIsLoading(true);
        const data = await getProductsOfCategory(name);
        setProductsList(data);
        setIsLoading(false);
    }

    return(
        <Layout isHome={false} title={name}>
            <div className="row outerBody" style={{marginTop: '20px'}}>
                {productsList.length > 0 && productsList.map((product) => (
                    <div className="col-6">
                        <Link href={`/category/${name}/product/${product.id}`}>
                            <a>
                                <div 
                                    key={uuid()}
                                    className="oneProduct"
                                >
                                    <div className="row commonRow">
                                        <div className="col-12" style={{marginBottom:"10px"}}>
                                            <img 
                                                src={product?.image} 
                                                height="50px"
                                            />
                                        </div>
                                        <div className="col-12">
                                            {product.title.length > 40 ? `${product.title.substr(0,40)}..` : product.title}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
                {productsList.length === 0 && (
                    <Spin tip="Loading..." size="large" spinning={true} />
                )}
            </div>
        </Layout>
    );
}

export default Products;