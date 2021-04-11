import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import GrowingNumber from '../components/GrowingNumber'
import Particles from 'react-particles-js'
import ScrollAnimation from 'react-animate-on-scroll'

export default () => (
    <Layout>
        <div>
            <Banner 
                styleClasses="major homePage"
                title="Trusted Gas Safe Engineers"
                content={["Our Engineers are Gas Safe registered, fully licensed and insured.", <br />, "We have helped thousands of customers accross Greater London and Home Counties."]}
                button="Our Services"
            />

            <div id="main">
                <section className="orange">
                </section>
                <section className="orange">
                    <Particles />
                    <div className="inner special">
                        <ScrollAnimation animateIn="bounceInLeft" initiallyVisible="true"><h2>MEET US</h2></ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" initiallyVisible="true">
                            <p>P and S Gas Safe Engineers  is an established family business working in Greater London and Home Counties, with over 20 year’s experience in gas, electric and dual fuel cooker repairs, installations and service.</p>
                            <ul className="actions">
                                <li><Link href="/about"><a className="button" style={{position: "relative"}}>Learn more</a></Link></li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                     <div className="inner">
                        <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible="true">
                            <div className="row">
                                <div className="4u 12u$(medium)">
                                    <h3 style={{textAlign: "center"}}>Free Quote, No Surprises &#10003;</h3>
                                    <p style={{textAlign: "justify"}}>We don’t charge a call out fee with any paid service. We provide a comprehensive, efficient and professional service with an estimate beforehand.</p>
                                </div>
                                <div className="4u 12u$(medium)">
                                    <h3 style={{textAlign: "center"}}>No Mess Left Behind &#10003;</h3>
                                    <p style={{textAlign: "justify"}}>You won’t have to clean up behind us. We treat your home like we would our own and will clean up and remove any mess with us. It's included!</p>
                                </div>
                                <div className="4u 12u$(medium)">
                                    <h3 style={{textAlign: "center"}}>Best Price Guarantee &#10003;</h3>
                                    <p style={{textAlign: "justify"}}>We are sure to quote the best deals available and stick to our quoted price, so you won't have to worry about any "unexpected" overhead costs.</p>
                                </div>
                                <br />
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
                <section className="orange">
                </section>
                <section id="two" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>Cooker Installations</h3>
                            <ul className="actions">
                                <li><a href="#one" className="button next scrolly">Find Out..</a></li>
                            </ul>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Service, Repairs and Certification</h3>
                                <ul className="actions">
                                    <li><a href="#one" className="button next scrolly">Find Out..</a></li>
                                </ul>   
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section className="orange">
                </section>
                <section className="special blue">
                    <div className="inner">
                        <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible="true"><h2>TESTIMONIALS</h2></ScrollAnimation>
                        <div className="justify-between">
                            <div className="box">
                                <p>
                                    “Gas Cooker Installation Pipework – Good tidy workmanship carried out expertly.” <br /><br /> <i>James Whitbread – London</i>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    “Electrical element replacement for oven. Fantastic, available at short notice.” <br /><br /> <i>Michael Jones – Epsom</i>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    “Clean Oven – Very efficient through work. Quick response rate (within 24 hours) Friendly, helpful.” <br /><br /> <i>Joanna Raphael – Romford</i>
                                </p>
                            </div>
                            <div className="box">
                                <p>
                                    “Repair Gas Oven – Polite And Courteous At All Times And Good At Job.” <br /><br /> <i>John Notes – Epsom</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="special blue">
                    <div className="inner">
                        <h2>OUR EXPERIENCE</h2>
                        <div className="justify-between">
                            <div className="justify-between-item">
                                <GrowingNumber limit={900} interval={10} startFrom={100} />
                                <p>Gas cookers installed</p>
                            </div>
                            <div className="justify-between-item">
                                <GrowingNumber limit={600} interval={10} startFrom={100} />
                                <p>Electric cookers installed</p>
                            </div>
                            <div className="justify-between-item">
                                <GrowingNumber limit={800} interval={10} startFrom={100} />
                                <p>Cookers repaired</p>
                            </div>
                            <div className="justify-between-item">
                                <GrowingNumber limit={700} interval={10} startFrom={100} />
                                <p>Gas Safety certificates Issued</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="orange">
                </section>
            </div>

        </div>
    </Layout>
)
