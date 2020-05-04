import React, { Component, useState }  from 'react';
import { Route } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WrappedApp from './LoginService';

import  { connect } from 'react-redux'

import  { navBarCollapse } from './redux/actions'

import {
  multilanguage,
  changeLanguage,
  loadLanguages
} from "redux-multilanguage";



//управление кнопочкой логина
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className="login" variant='outline-primary' onClick={handleShow}>
        {!localStorage.getItem('token') 
          ? "Log in" 
          : localStorage.getItem('username')}
      </Button>

      <Modal show={show} onHide={handleClose}>
       <Route exact component={WrappedApp} />
      </Modal>
    </>
  );
}

class NavBar extends Component{
  state = {language: 'en'}

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      collapsed: false,
      opend: "",
      auth: false, 
    };
  }
  componentDidMount(){
    const { match: { params } } = this.props;
    this.setState({opend: params.id});
    this.loadLanguages();
  }

  loadLanguages() {
    this.props.dispatch(loadLanguages({
        languages: {
          en: require("./languages/en.json"),
          ru: require("./languages/ru.json")
        }
      })
    );
  }

  changeLanguage = e => {
    const languageCode = e.target.value;
    this.props.dispatch(changeLanguage(languageCode));
  };

  componentDidUpdate(prevProps) {
    const { match: { params } } = this.props;
    if (params.id !== this.state.opend) {
      this.setState({opend: params.id});
    }
  }

  toggleNavbar() {
    this.props.dispatch(navBarCollapse())
  }

  handleShow() {
    this.setState({
      auth: true,
    });
  }
  render() {
    const opend = this.state.opend;

    const pic = this.props.navBarCollapse 
                ? "nav_row nav_row_in" 
                : "nav_row nav_row_in active";
    const classCollapse = this.props.navBarCollapse 
                          ? 'collapse navbar-collapse' 
                          : 'collapse navbar-collapse show';
    
    const classUtils = (opend.toString() === "utils") 
                        ? 'navbar-nav show' 
                        : 'navbar-nav unShow';
    const classGames = (opend.toString() === "minigames") 
                        ? 'navbar-nav show' 
                        : 'navbar-nav unShow';
    const classCustomer = (opend.toString() === "customers" 
                          || opend.toString() === "utils") 
                              ? 'navbar-nav show' 
                              : 'navbar-nav unShow';
    
    const { strings, currentLanguageCode } = this.props;

    const theme_navbar_brand = this.props.theme 
                  ? "navbar-brand"
                  : "navbar-brand blackTheme"
    const theme_navbar_link = this.props.theme 
                  ? "nav-link"
                  : "nav-link blackTheme"

    return(
      <>
        <div className="lang_select">
          <select className="custom-select mr-sm-2" 
                  id="inlineFormCustomSelect" 
                  value={currentLanguageCode} 
                  onChange={this.changeLanguage}>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </div>

        <div className="container">          
          <nav className="navbar navbar-light transparent-nav" id="navBar">
            <p className={theme_navbar_brand} id="navBar">ORBY-project</p>

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
                <li className="nav-item" id="navBar">
                  <Link onClick={this.toggleNavbar} 
                        className={theme_navbar_link}
                        to="/about">{strings["navBarAbout"]}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} 
                        className={theme_navbar_link}
                        to="/minigames">{strings["navBarMiniGames"]}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} 
                        className={theme_navbar_link} 
                        to="/timeshow">{strings["navBarTimeShow"]}
                  </Link>
                </li> 
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar} 
                        className={theme_navbar_link} 
                        to="/utils">{strings["navBarUtils"]}
                  </Link>
                </li>        
                <li className="nav-item">
                  <Link onClick={this.toggleNavbar}
                        className={theme_navbar_link}
                        to="/sunny">{strings["navBarSunny"]}
                  </Link>
                </li>      
              </ul>
            </div>

            <div className="menu-navbar">
              <ul className={classCustomer}>
                <li className="nav-item">
                  <Link className={theme_navbar_link} 
                        to="/utils/customers">
                        {strings["navBarCustumers"]}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={theme_navbar_link}
                        to="/utils/customers/customer">
                        {strings["navBarCreateCustumer"]}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-navbar">
              <ul className={classGames}>
                <li className="nav-item">
                  <Link className={theme_navbar_link}
                        to="/minigames/tictacgame/">
                        {strings["navBarTcTacGame"]}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={theme_navbar_link}
                        to="/minigames/takeballgame/">
                        {strings["navBarTakeCrazyBall"]}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-navbar">
              <ul className={classUtils}>

                <li className="nav-item">
                  <Link className={theme_navbar_link}
                        to="/utils/calculator/">
                        {strings["navBarCalculator"]}
                  </Link>
                </li>
              </ul>
            </div>

        </nav>
      </div>
    </>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    navBarCollapse: state.navBarCollapse,
    theme: state.theme
  };
}

const WrappedNavBar = connect(mapStateToProps)(multilanguage(NavBar));

export default WrappedNavBar;



