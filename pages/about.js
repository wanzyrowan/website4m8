import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <Head>
            <title>P&amp;S Gas Safe Engineers | About</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <Banner textDisable={true} styleClasses="style2 aboutPage" />
            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>Who we are and what we can do</h1>
                        </header>
                        <span className="image main"><img src="/static/images/gas_engineers_about_us_banner.jpg" alt="" /></span>
                        <p>
                            With over 30 years experience, from Corgi to Gas Safe all our Gas Safe Engineers are highly skilled, registered and fully insured. We offer a number of professional services at highly competitive prices: gas, electric and dual fuel cooker connection and disconnection, gas, electric and dual fuel cooker servicing, gas, electric and dual fuel ovens and gas, electric and dual fuel cooker, hobs and ovens service and repair.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                    </div>
                </section>
                <section className="orange">
                </section>
            </div>

        </div>
    </Layout>
)
