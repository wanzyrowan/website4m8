import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import GrowingNumber from '../components/GrowingNumber'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="homeOne">
                    <div className="inner">
                        <header className="">
                            <h2>About Us</h2>
                        </header>
                        <p>P and S Gas Safe Engineers  is an established family business working in Greater London and Home Counties, with over 20 year’s experience in gas, electric and dual fuel cooker repairs, installations and service.</p>
                    </div>
                </section>
                <section id="two" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>Electric and Dual Fuel</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Cooker Connection</h3>
                            <p>feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Gas Safety Certificate</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Service and Repairs</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="one" className="major">
                    <div className="justify-between">
                        <GrowingNumber limit={900} interval={10} />
                        <GrowingNumber limit={800} interval={10}/>
                        <GrowingNumber limit={600} interval={10}/>
                        <GrowingNumber limit={700} interval={10}/>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
