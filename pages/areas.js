import Head from "next/head"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <Head>
            <title>P&amp;S Gas Safe Engineers | Areas Covered</title>
            <meta name="description" content="Elements Page" />
        </Head>

        <div id="main" className="alt">
            <Banner textDisable={true} styleClasses="style2 aboutPage" />
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Areas Covered</h1>
                    </header>
                    <ul className="alt">
                        <li><b>E1</b> | Whitechapel, Stepney, Mile End</li>
                        <li><b>E1W</b> | Wapping</li>
                        <li><b>E2</b> | Bethnal Green, Shoreditch</li>
                    </ul>
                </div>
            </section>

        </div>
    </Layout>
)
