import Head from "next/head"

import Layout from '../components/Layout'
import Collapsible from 'react-collapsible';


export default () => (
    <Layout>
        <Head>
            <title>P&amp;S | FAQ</title>
            <meta name="description" content="Elements Page" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <Collapsible trigger="Wut?">
                        <p>
                            This is the collapsible content. It can be any element or React
                            component you like.
                        </p>
                        <p>
                            It can even be another Collapsible component. Check out the next
                            section!
                        </p>
                    </Collapsible>
                </div>
            </section>
        </div>
    </Layout>
)
