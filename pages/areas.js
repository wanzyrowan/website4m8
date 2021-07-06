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
                    <div className="table-wrapper">
                        <table>
                            <tbody className="areasPage">
                                <tr>
                                    <td className="heading">E1</td>
                                    <td>Whitechapel, Stepney, Mile End</td>
                                </tr>
                                <tr>
                                    <td className="heading">E1W</td>
                                    <td>Wapping</td>
                                </tr>
                                <tr>
                                    <td className="heading">E2</td>
                                    <td>Golders Green, Hampstead Gdn Suburb</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item4</td>
                                    <td>Vitae integer tempus condimentum.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item5</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody className="areasPage">
                                <tr>
                                    <td className="heading">Item1</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item2</td>
                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item3</td>
                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item4</td>
                                    <td>Vitae integer tempus condimentum.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item5</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody className="areasPage">
                                <tr>
                                    <td className="heading">Item1</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item2</td>
                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item3</td>
                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item4</td>
                                    <td>Vitae integer tempus condimentum.</td>
                                </tr>
                                <tr>
                                    <td className="heading">Item5</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    </Layout>
)
