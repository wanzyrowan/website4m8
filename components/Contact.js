const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">ronald.slim@hotmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>• 0208 659 0921 • </span><span> 07774 758383 •</span><br />
                        <span>• 0208 659 3991 • </span><span> 07958 295458 •</span>
                    </div>
                </section>
                <section>
                    <span><img src="/static/images/check_a_Trade_P_and_S_Gas_Safe_Engineers_small.jpg" alt="" style={{width: "100%"}} /></span>
                    <br />
                    <span><img src="/static/images/gas_safe_engineer_p_and_s_gas_safe_engineers.jpg" alt="" style={{width: "100%"}} /></span>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
