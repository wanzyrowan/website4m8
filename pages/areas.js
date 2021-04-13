import Head from "next/head"
import Typist from 'react-typist';

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <Head>
            <title>P&amp;S | Areas Covered</title>
            <meta name="description" content="Elements Page" />
        </Head>

        <div id="main" className="alt">
            <Banner textDisable={true} styleClasses="style2 aboutPage" />
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1><Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 1}}>Areas Covered</Typist></h1>
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
