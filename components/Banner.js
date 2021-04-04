const Banner = (props) => {

    if(props.textDisable)
        return(
            <section id="banner" className="style2" />
        );
    else
        return(
            <section id="banner" className={props.styleClasses}>
                <div className="inner">
                    <header className="major">
                        <h1>Trusted Gas Safe Engineers</h1>
                    </header>
                    <div className="content">
                        <p>Our Engineers are Gas Safe registered, fully licensed and insured.<br />
                        We have helped thousands of customers accross Greater London and Home Counties.</p>
                        <ul className="actions">
                            <li><a href="#one" className="button next scrolly">Our Services</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
}

export default Banner
