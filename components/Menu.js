import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/about"><a><span onClick={props.onToggleMenu}>Why Us</span></a></Link></li>
                <li><Link href="/services"><a><span onClick={props.onToggleMenu}>Services</span></a></Link></li>
                <li><Link href="/rates"><a><span onClick={props.onToggleMenu}>Our Rates</span></a></Link></li>
                <li><Link href="/areas"><a><span onClick={props.onToggleMenu}>Covered Areas</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/#contact" className="button special fit">Contact Us</a></li>
                <li><a href="/faq" className="button fit">FAQs</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
