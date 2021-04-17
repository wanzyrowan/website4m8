import Head from "next/head"

import Typist from 'react-typist';
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
                    <header className="major">
                        <h1><Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 1}}>Frequently Asked Questions</Typist></h1>
                    </header>
                    <Collapsible trigger="Are your engineers fully qualified?">
                        <p>
                            All of our engineers are fully qualified and this can be verified by “<a href="https://www.gassaferegister.co.uk/" target="_blank">Gas Safe</a>”.
                        </p>
                        <p>
                            They all carry photo ID’s providing evidence of who they are and their competence. 
                        </p>
                    </Collapsible>
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
