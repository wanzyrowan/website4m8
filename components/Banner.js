const Banner = (props) => {

    if(props.textDisable)
        return(
            <section id="banner" className={props.styleClasses} />
        );
    else
        return(
            <section id="banner" className={props.styleClasses}>
                <div className="inner">
                    <header className="major">
                        <h1>{props.title}</h1>
                    </header>
                    <div className="content">
                        <p>{props.content}</p>
                        <ul className="actions">
                            <li><a href="#one" className="button next scrolly">{props.button}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
}

export default Banner
