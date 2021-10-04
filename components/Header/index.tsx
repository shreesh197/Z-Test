import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/types";
import Sidebar from "../Sidebar";

const Header = ({
    isHome,
    title
} : {
    isHome: boolean;
    title: string;
}) => {
    const router = useRouter();

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const totalItems = useSelector((state: StoreState) => state.marketState.total);
    
    // console.log(isSidenavOpen)
    return(
        <div>
            <nav style={{ background: 'white', padding: 0, width: '100%' }}>
                <div className="row main-nav" id="navbar">
                    <div className="col-1">
                        <button className="header_btns">
                            {isHome ? (
                                <FaBars className="headerIcons"  onClick={()=>setIsSidenavOpen(true)} />
                            ) : (
                                <img src="/images/back_icon.svg" onClick={()=>router.back()} />
                            )}
                        </button>
                    </div>
                    <div
                        className="col-3"
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            paddingRight: 0
                        }}>
                        {isHome ? <span className="heading">Site Logo</span> : title}
                    </div>
                    <div
                        className="col-8"
                        style={{
                            justifyContent: 'flex-end',
                            textAlign: 'right'
                        }}>
                        <button
                            className="header_btns"
                            style={{ marginRight: '15px' }}
                            onClick={() => router.push('/cart')}>
                            <img
                                src="/images/shopcart.svg"
                            />
                            {totalItems}
                        </button>
                        <button className="header_btns" onClick={() => router.push('/profile')}>
                            <FaUserCircle className="headerIcons" />
                        </button>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isSidenavOpen} setIsOpen={setIsSidenavOpen} />
        </div>
    );
}

export default Header;