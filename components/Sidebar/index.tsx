import { useRouter } from "next/dist/client/router";
import React from "react";
import SidebarWrapper from "./Wrapper";

const Sidebar = ({
    isOpen,
    setIsOpen
} : {
    isOpen: boolean;
    setIsOpen : (val: boolean) => void;
}) => {

    const router = useRouter();

    return(
        <SidebarWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <p className="home_para" onClick={() => router.push('/')}>
                Home
            </p>
            <p className="home_para" onClick={() => router.push('/profile')}>
                My Profile
            </p>
            <p className="home_para" onClick={() => router.push('/cart')}>
                My Cart
            </p>
            {/* <p className="home_para" onClick={userData ? handleLogout : goToLogin}>
                {userData ? 'Logout' : 'Login'}
            </p> */}
        </SidebarWrapper>
    )
}

export default Sidebar;