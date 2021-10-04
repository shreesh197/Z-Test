import React, { useEffect, useState } from "react";
import { getAProductById } from "../../services/apiEndpoints";
import Layout from "../Layout";
import { Spin } from 'antd';
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/actions";

interface ProductDetails {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

const ProductDetails = ({id} : {id: string}) => {

    if(!id) return <Spin tip="Loading..." size="large" spinning={true} />
    
    const [details, setDetails] = useState<ProductDetails>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchProductDetails();
    }, [id]);

    const fetchProductDetails = async () => {
        setIsLoading(true);
        const data = await getAProductById(id);
        setDetails(data);
        setIsLoading(false);
    }

    const addToCartHandler = () => {
        dispatch({
            type: ADD_TO_CART,
            payload: { product: details }
        });
    }

    // console.log('details ==========>', details)

    return(<>
        {details && (
            <Layout isHome={false} title={`${details?.title?.substr(0, 15)}..`}>
                <div className="row col-12" style={{marginTop: '20px', paddingLeft: '40px'}}>
                    <div className="oneProduct" style={{padding: '20px'}}>
                        <div className="row">
                            <div className="col-5" style={{paddingTop: '100px'}}>
                                <img className="img-fluid1" src={details?.image} height="80px"/>
                            </div>
                            <div className="col-7">
                                <p style={{fontSize: '20px'}}>
                                    {details?.title}
                                </p>
                                <p style={{fontSize: '18px'}}>
                                    {details?.category} 
                                </p>
                                <p>
                                    {details?.description.length>150 ? `${details?.description?.substr(0, 150)}..` : details?.description}
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{justifyContent: "center", textAlign: "center"}}>
                            <div className="col-4"></div>
                            <div className="col-4" style={{padding: 0}}>
                                <button 
                                    className="addToCart" 
                                    style={{
                                        marginTop: '20px'
                                    }}
                                    onClick={addToCartHandler}
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        )}
        {!details && (
            <Spin tip="Loading..." size="large" spinning={true} />
        )}
    </>);
}

export default ProductDetails;