

const Header = () => {
    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                         <img alt = "SVCC home page" src="/images/SVCCLogo.png"/>
                    </div>       
                    <div className="light">
                        <h4 className="text-info">
                            Silicon Valley Code Camp
                        </h4>
                    </div>
                    <div className="text-info">
                        Hello Mr.Smith &nbsp;&nbsp;
                        <span>
                            <a href="#">Sign-Out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;