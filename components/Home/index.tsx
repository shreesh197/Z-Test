import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { getCategories } from "../../services/apiEndpoints";
import Layout from "../Layout";
import Link from 'next/link';
import { uuid } from "uuidv4";
import { FaImage } from 'react-icons/fa';
import { Spin } from 'antd';
import { useRouter } from "next/dist/client/router";

const Home = () => {

    const router = useRouter();

    const [categoriesList, setCategoriesList] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=>{
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setIsLoading(true);
        const data = await getCategories();
        setCategoriesList(data);
        setIsLoading(false);
    }

    return(
        <Layout 
            isHome={true} 
            title = {'Home'}
        >
            <Carousel nextIcon={true} prevIcon={true} style={{marginBottom: '20px'}}>
                <Carousel.Item>
                    <img
                        src={'/images/sliderImage.jpg'}
                        className="img-fluid1"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="row col-12 heading" style={{justifyContent: 'center', textAlign: 'center', paddingLeft: '40px'}}>
                Shop by Categories        
            </div>  
            <div className="row">
                {categoriesList.length > 0 && categoriesList.map((category) => (
                    <div
                        key={uuid()}
                        className="col-4"
                        style={{
                            marginRight: '-5px',
                            marginBottom: '10px'
                        }}>
                        <Link
                            href={`/category/${category}`}
                        >
                            <a>
                                <div className="category_container">
                                    <div
                                        className="row col-12"
                                        style={{
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            padding: '0px 0px 0px 30px'
                                        }}>
                                        <FaImage className="headerIcons" />
                                    </div>
                                    <div
                                        className="row col-12 font-12x mt-1"
                                        style={{
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            padding: '0px 0px 0px 30px',
                                            color:'#2D84EC'
                                        }}
                                    >
                                        {category}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
                {categoriesList.length === 0 && (
                    <Spin tip="Loading..." size="large" spinning={true} />
                )}
            </div>
            <a className="goToSearch">
                <button
                    onClick={()=>router.push('/search')}
                    style={{ borderRadius: '50%' }}
                >
                <img
                    src={'/images/search.svg'}
                    style={{ height: "26px", width: "27px", marginBottom: "3px" }}
                />
                </button>
            </a>
        </Layout>
    );
}

export default Home;