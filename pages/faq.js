import Head from "next/head"

import Layout from '../components/Layout'
import Accordion from 'react-responsive-accordion'

export default () => (
    <Layout>
        <Head>
            <title>P&amp;S | FAQ</title>
            <meta name="description" content="Elements Page" />
        </Head>

        <div id="main" className="alt">
            <Accordion>
                <div data-trigger="A nifty React accordion component">
                    <p>So this is an Accordion component that used the <a href="https://github.com/glennflanagan/react-collapsible">react-collapsible</a> component. How handy.</p>
                </div>
        
                <div data-trigger="What the difference?" data-trigger-when-open="THAT is the difference!">
                    <p>An Accordion is different to a Collapsible in the sense that only one "tray" will be open at any one time.</p>
                </div>
        
                <div data-trigger="I'm responsive and I have a little secret. Look inside.">
                    <p>And this Accordion component is also completely repsonsive. Hurrah for mobile users!</p>
                </div>
            </Accordion>
        </div>
    </Layout>
)
