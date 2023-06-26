import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cartlength}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i className="fa-solid fa-shirt"></i> Yourselection <i className="fa-solid fa-mobile"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><div><i className="fa-solid fa-house"></i></div></Link>
        </li>
       </ul>
      <form className="d-flex"> 
      <Link className="btn btn primary mx-2" to="/cart" role='button'><div><i className="fa-solid fa-cart-arrow-down"></i><sup>{cartlength}</sup></div></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
