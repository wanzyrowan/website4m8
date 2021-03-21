import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import GrowingNumber from '../components/GrowingNumber'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section className="special orange">
                    <div className="inner">
                        <header className="">
                            <h2>MEET US</h2>
                        </header>
                        <p>P and S Gas Safe Engineers  is an established family business working in Greater London and Home Counties, with over 20 year’s experience in gas, electric and dual fuel cooker repairs, installations and service.</p>
                        <ul className="actions">
                            <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                        </ul>
                    </div>
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
                <section className="special blue">
                    <div className="inner">
                        <h2>TESTIMONIALS</h2>
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
            </div>

        </div>
    </Layout>
)
