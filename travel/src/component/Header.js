import {Link} from 'react-router-dom';
import logo from './logo.jpg'
import './Header.css'
import IconButton from '@material-ui/core/IconButton';
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    return(
        <div className="main">
            <img
                className='header_logo'
                src={logo}
                alt=""
                width="60"
                height="60"
            />

            <IconButton>
                <Link to="/aboutme">
                    {/* <ContactPhoneIcon fontSize="large" className="header_icon" /> */}
                    <i className='fa fa-address-card fa-solid' />
                </Link>
            </IconButton>
        </div>
    )
}

export default Header