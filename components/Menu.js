import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>Why Us</span></a></Link></li>
                <li><Link href="/generic"><a><span onClick={props.onToggleMenu}>Services</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Covered Areas</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Blog</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Contact Us</a></li>
                <li><a href="#" className="button fit">FAQs</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
