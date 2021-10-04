import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getAllProducts } from "../../services/apiEndpoints";

const Search = () => {

    const router = useRouter();
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getAllProducts();
        setProductList(data);
    }

    const handleSearching = (e : any) => {
        setSearchKeyword(e.target.value);
    }

    const items = productList.filter((data) => {
        if(searchKeyword == null) return data;
        if(data.title.toLowerCase().includes(searchKeyword.toLowerCase())) return data;
    }).map((data, index) => {
        return(
        <>  
            {index < 20 &&         //limit to 20 items
                <>
                    <div className="col-1">
                        <FaSearch
                            className="headerIcons"
                            style={{ color: '#888888', height: '18px' }}
                        />
                    </div>
                    <div className="col-11" style={{padding: '0px 0px 0px 30px'}}>
                        
                        <p style={{marginBottom: 0}}>
                            {data.title.length > 20 ? `${data.title.substr(0, 20)}..` : data?.title}
                        </p>
                            
                    </div>
                    <hr style={{width: '100%'}} /> 
                </>
            }
        </>
        );
    })

    return(
        <div
            className="container-fluid main"
            id="mobileHome"
            style={{ margin: 0, padding: 0 }}>
            <div className="row Home-area1" style={{ margin: 0, padding: 0 }}>
                <div className="col-12 main-home-main-area1">
                    {/* Header */}

                    <nav
                        style={{
                            background: 'white',
                            padding: 0,
                            width: '100%'
                        }}>
                        <div className="row main-nav">
                            <div
                                className="col-2"
                                style={{
                                    paddingTop: '5px',
                                    paddingLeft: '18px'
                                }}>
                                <button
                                    className="back_button"
                                    onClick={()=>router.back()}>
                                    <img src="/images/back_icon.svg" />
                                </button>
                            </div>
                            <div className="col-10" style={{ paddingLeft: 0 }}>
                                <div className="row col-12 searchbar1 ">
                                    <input
                                        type="text"
                                        id="search_field1"
                                        name="search_field"
                                        // value={searchKeyword}
                                        onChange={(e)=>handleSearching(e)}
                                        className="search_input"
                                        placeholder="Type here to search a City"
                                        autoFocus
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="row" style={{marginTop: '20px'}}>
                        {items}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;