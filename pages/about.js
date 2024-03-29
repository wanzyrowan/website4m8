import Head from "next/head"
import Link from 'next/link'
import Typist from 'react-typist';

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <Head>
            <title>P&amp;S | About</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <Banner textDisable={true} styleClasses="style2 aboutPage" />
            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1><Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 1}}>Who We Are and What We Can Do</Typist></h1>
                        </header>
                        <span className="image main"><img src="/static/images/gas_engineers_about_us_banner.jpg" alt="" /></span>
                        <p>
                            With over 30 years experience, from Corgi to Gas Safe all our Gas Safe Engineers are highly skilled, registered and fully insured. We offer a number of professional services at highly competitive prices: gas, electric and dual fuel cooker connection and disconnection, gas, electric and dual fuel cooker servicing, gas, electric and dual fuel ovens and gas, electric and dual fuel cooker, hobs and ovens service and repair.
                        </p>
                        <p>
                            All of our gas, electric cooker, oven and hob jobs are carried out by fully qualified electricians who are up to date with current electrical and gas safe regulations. You can be sure that your electric cooker, oven, hob or range will be connected according to the industry standard.
                        </p>
                        <p>
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
                        </p>
                    </div>
                </section>
                <section className="orange">
                </section>
            </div>
        </div>
    </Layout>
)
