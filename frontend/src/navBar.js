import React, { Component, useState }  from 'react';
import { Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import App from './LoginService';

//управление кнопочкой логина
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className="login" variant='outline-primary' onClick={handleShow}>
        {!localStorage.getItem('token') ? "Log in" : localStorage.getItem('username')}
      </Button>

      <Modal show={show} onHide={handleClose}>
       <Route exact component={App} />
      </Modal>
    </>
  );
}

class NavBar extends Component{
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      collapsed: false,
      opend: "",
      auth: "no", 
    };
  }
  componentDidMount(){
    const { match: { params } } = this.props;
    this.setState({opend: params.id});

  }
  componentDidUpdate(prevProps) {
    const { match: { params } } = this.props;
    if (params.id !== this.state.opend) {
      this.setState({opend: params.id});
    }
  }

  toggleNavbar() {
    const { match: { params } } = this.props;
    this.setState({
      collapsed: !this.state.collapsed,
      opend: params.id
    });
  }

  handleShow() {
    this.setState({
      auth: "login",
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const opend = this.state.opend;

    const pic = collapsed ? "nav_row nav_row_in" : "nav_row nav_row_in active";
    const classCollapse = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    
    const classUtils = (opend.toString() === "utils") ? 'navbar-nav show' : 'navbar-nav unShow';
    const classGames = (opend.toString() === "minigames") ? 'navbar-nav show' : 'navbar-nav unShow';
    const classCustomer = (opend.toString() === "customers" || opend.toString() === "utils") ? 'navbar-nav show' : 'navbar-nav unShow';


    return(
      <>
        <div className="container">          
          <nav className="navbar navbar-light bg-light transparent-nav">
            <a className="navbar-brand" href="#">ORBY-project</a>

            <Example /> 

            <svg className={pic} viewBox="0 0 100 100" width="80" onClick={this.toggleNavbar}>
              <path
                    className="line top"
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
              <path
                    className="line middle"
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
              <path
                    className="line bottom"
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
            </svg>

            <div className={classCollapse}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} className="nav-link" to="/minigames">Mini Games</Link>
                </li> 
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} className="nav-link" to="/utils">Utils</Link>
                </li>        
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} className="nav-link" to="/sunny">Sunny robot</Link>
                </li>      
              </ul>
            </div>

            <div className="menu-navbar">
              <ul className={classCustomer}>
                <li className="nav-item">
                  <Link  className="nav-link" to="/utils/customers">CUSTOMERS</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/utils/customers/customer">CREATE CUSTOMER</Link>
                </li>
              </ul>
            </div>

            <div className="menu-navbar">
              <ul className={classGames}>
                <li className="nav-item">
                  <Link  className="nav-link" to="/minigames/tictacgame/">Tic Tac Game</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/minigames/takeballgame/">Take Crazy Ball</Link>
                </li>
              </ul>
            </div>

            <div className="menu-navbar">
              <ul className={classUtils}>

                <li className="nav-item">
                  <Link  className="nav-link" to="/utils/calculator/">Calculator</Link>
                </li>
              </ul>
            </div>

        </nav>
      </div>
    </>
    );
  }
}

export default NavBar;




