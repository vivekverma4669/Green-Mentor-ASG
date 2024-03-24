import "../styles/hf.css";
import {NavLink , Link} from 'react-router-dom';

const Footer =()=>{
    return (

  <footer>
    <div className="footer-container">
        <div className="sec aboutus">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam minus quo illo numquam vel incidunt pariatur hic commodi expedita tempora praesentium at iure fugiat ea, quam laborum aperiam veritatis.</p>
            <ul className="sci">
                <li> <a href="#"> <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"/></a></li>
                <li><a href=""><img style={{filter : "invert()"}} src="https://cdn.icon-icons.com/icons2/2428/PNG/512/youtube_black_logo_icon_147044.png"/></a></li>
                <li><a href="#"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png"/></a></li>
            </ul>
        </div>
        <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to='/'>Home</Link></li> 
              <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
        <div className="sec contactBx">
            <h2>Contact Info</h2>
            <ul className="info">
                <li>
             
                    <span><i className='bx bxs-map'></i></span>
                    <span> <br />  gurgaon Haryana <br /> india</span>
                </li>
                <li>
                    <span><i className='bx bx-envelope' ></i></span>
                    <p><a href="support@magnetbrains.com">support@greenmentors.com</a></p>
                </li>
            </ul>
        </div>
    </div>
</footer>

)
}
export default Footer;