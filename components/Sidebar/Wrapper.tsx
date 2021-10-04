const SidebarWrapper = ({
    isOpen,
    setIsOpen,
    children
} : {
    isOpen: boolean;
    setIsOpen : (val: boolean) => void;
    children: React.ReactNode;
}) => {
    return(
        <div id="mySidenav" className={`mobile sidenav ${isOpen ? 'sidenav-active' : ''}`}>
            <div>
                <div className="contaner">
                    <div className="row m-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex detailTab py-3">
                                    <a
                                        href="javascript:void(0)"
                                        className="closebtn"
                                        onClick={()=>setIsOpen(false)}>
                                        &times;
                                    </a>
                                    <div className="noimage "></div>
                                    <p
                                        className="detailDescription"
                                        style={{
                                            fontSize: '24px',
                                            lineHeight: '28px'
                                        }}>
                                        &nbsp; Hi, {'User'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-3" style={{ padding: 0 }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarWrapper;