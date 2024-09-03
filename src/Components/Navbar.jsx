import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="above">
        <div ><img className="first" alt="me"src="https://seeklogo.com/images/G/g20-logo-999777FCD8-seeklogo.com.png"></img></div>
        <div class="topBar">
          दिल्ली नगर निगम | Municipal Corporation of Delhi
        </div>
        <div className="deep">
        <div ><img className="second" alt="me"src="https://cdn.pixabay.com/photo/2022/05/26/22/08/satyamev-jayate-7223886_1280.png"></img></div>
        <div ><img className="third" alt="me"src="https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png"></img></div>
        </div>
    </div>
    <div><nav className='navbar'>
        <a href="Home">Home<span></span></a>
        <a href="About">About<span></span></a>
        <a href="Service">Service<span></span></a>
        <a href="Contact">Contact<span></span></a>
    </nav>
    </div>

    <div className="image">
        <div className="box">
        <img   className="imgk" src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2014/10/Residential-building.jpg?fit=1158%2C690&ssl=1"    
         alt="myImage"></img>
        </div>
        <div className = "boxtwo">
        <Link to = '/Register'>
            <button className='beautiful-button'>LogIn</button>
        </Link>    
        <Link to="/Login">
            <button className='beautiful-button'>SignUp</button>
            </Link>
        </div>
    </div>
    <div className="wrap">
      
    <div className="wrapper">
        <div className="one">
            <img    className="same" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctGLXN0qGt4eFVH3CxW9VEIyjKau_SI8kQw&s"style={{height:"10em" , width:"15em" , borderRadius:"20px" , backgroundSize:"cover", 
        margin: "10px"}} alt="myImage"></img>
        </div>
        <div className="two">
             <img    className="same" src="https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896894.jpg"style={{height:"10em" , width:"15em" , borderRadius:"20px" , backgroundSize:"cover",
        margin: "10px"}} alt="myImage"></img>
        </div>
        <div className="three">
        <img     className="same" src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"style={{height:"10em" , width:"15em" , borderRadius:"20px" , backgroundSize:"cover",
        margin: "10px"}} alt="myImage"></img>
        </div>

        </div>
        
        <div className="about">
          <div className="About">About</div>
          <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus ipsa, dignissimos adipisci consectetur laudantium non deleniti reiciendis impedit, similique voluptatibus qui. Tempora rem rerum tenetur quos corrupti culpa porro?</div>
        </div>
        
      </div>
 
        <footer>
  <div class="footer-container">
    <div class="footer-section">
      <h4>About Us</h4>
      <p>We are a team of passionate developers creating useful and efficient applications for various needs.</p>
    </div>
    <div class="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Contact Us</h4>
      <p>Email: info@example.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main Street, City, Country</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</footer>

  

    
    </>
  )
}

export default Navbar