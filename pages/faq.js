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
                    <Collapsible trigger="Are P&amp;S engineers fully qualified?">
                        <p>
                            All of our engineers are fully qualified and this can be verified by “<a href="https://www.gassaferegister.co.uk/" target="_blank">Gas Safe</a>”.
                        </p>
                        <p>
                            They all carry photo ID’s providing evidence of who they are and their competence. 
                        </p>
                    </Collapsible>
                    <Collapsible trigger="Are P&amp;S engineers insured?">
                        <p>
                            All of our engineers have full public liability insurance.
                        </p>
                    </Collapsible>
                    <Collapsible trigger="Are there any guarantees on P&amp;S work?">
                        <p>
                            All of our work is guaranteed and receipt of workmanship will be issued on completion of work carried out. 
                        </p>
                    </Collapsible>
                    <Collapsible trigger="Are P&amp;S engineers “CORGI”?">
                        <p>
                            Yes, but “CORGI” name has changed to “Gas Safe” (All 8000 British Gas Engineers are now “<a href="https://www.gassaferegister.co.uk/" target="_blank">Gas Safe</a>” certified).
                        </p>
                    </Collapsible>
                    <Collapsible trigger="What shall I consider when buying a new appliance?">
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
