import React from "react";
import Header from "../Header";

const Layout = ({
    children,
    title,
    isHome = false
} : {
    children: React.ReactNode;
    title: string;
    isHome?: boolean;
}) => {
    return(
        <div className="service_home" id="mobileHome">
            <div className="container-fluid main" style={{ margin: 0, padding: 0 }}>
                <div className="row Home-area1" style={{ margin: 0, padding: 0 }}>
                    <div className="col-12 main-home-main-area1">
                        <Header isHome={isHome} title={title} />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Layout;