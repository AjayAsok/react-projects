import "../App.css";
export const RightNav = () => {
    return (
        <>
            <div className="row pl-2">
                <div className="col-10 card m-5 p-2 text-center connect-item">
                    <a href="https://www.linkedin.com/in/ajay-asok">
                        <img src="linkedin.svg" width="30" height="30" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/AjayAsok/">
                        <img src="github.svg" width="30" height="30" alt="Github" />
                    </a>
                    <a href="https://www.facebook.com/ajay.asok.92">
                        <img src="facebook.svg" width="30" height="30" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/a__ja__y/">
                        <img src="instagram.svg" width="30" height="30" alt="Instagram" />
                    </a>
                    <a href="https://join.skype.com/invite/kINSZY1vNEkg">
                        <img src="skype.svg" width="30" height="30" alt="Skype" />
                    </a>
                </div>
            </div>
        </>
    )
}