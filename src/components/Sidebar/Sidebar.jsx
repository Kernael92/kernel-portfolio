import React from "react";
import { NavLink, Link } from "react-router-dom";
// node.js library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
    Nav,

} from "reactstrap";

var ps;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false,
        };
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active": "";
    }
    componentDidMount() {
        if(navigator.platform.indexOf('win') > -1) {
            ps = new PerfectScrollbar(this.refs.sidebar, {
                suppressScrollX: true,
                suppressScrollY: false
            });
        }
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
        }
    }
    linkOnClick = () => {
        document.documentElement.classList.remove("nav-open");
    };
    // this function opens and closes the collapse on small devices
    toggleCollapse = () => {
        if(this.state.collapseOpen) {
            this.setState({
                color: "navbar-transparent"
            });
        } else {
            this.setState({
                color: "bg-dark"
            });
        }
        this.setState({ 
            collapseOpen: !this.state.collapseOpen
        });
    };
    render () {
        const { bgColor, routes, logo } = this.props;
        let logoImg = null;
        if (logo !== undefined) {
            if(logo.outterLink !== undefined) {
                logoImg = (
                    <a
                        href={logo.outterLink}
                        className="simple-text logo-mini"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={this.props.toggleSidebar}
                    >
                        <div className="logo-img">
                        <img src={logo.imgSrc} alt="react-logo" />
                        </div>
                    </a>
                );
            } else {
                logoImg = (
                    <Link
                    to={logo.innerLink}
                    className="simple-text logo-mini"
                    onClick={this.props.toggleSidebar}
                    >
                    <div className="logo-img">
                        <img src={logo.imgSrc} alt="react-logo" />
                    </div>
                    </Link>
            );
        }
    }
        return (
            <div className="sidebar" data={bgColor}>
                <div clssName="sidebar-wrapper" ref="sidebar">
                    {logoImg !== null ? ( 
                        <div className="logo">
                            {logoImg}
                        </div>
                    ) : null}
                    <Nav>
                        {routes.map((prop, key) => {
                            if (prop.redirect) return null;
                            return (
                                <li
                                    classNmae={
                                        this.activeRoute(prop.path) + 
                                        (prop.pro ? "active-pro" : "")
                                    }
                                    key={key}
                                >
                                    <NavLink 
                                    to={prop.layout + prop.path}
                                    className="nav-link"
                                    activeClassName="active"
                                    onClick={this.props.toggleSidebar}
                                    >
                                    <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </Nav>
                </div>
            </div>
        );

    }
}

Sidebar.defaultProps = {
    bgColor: "dark",
    routes: [{}]
};
  
Sidebar.propTypes = {
    // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
    // insde the links of this component
    bgColor: PropTypes.oneOf(["dark", "primary", "green"]),
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        // innerLink is for links that will direct the user within the app
        // it will be rendered as <Link to="...">...</Link> tag
        innerLink: PropTypes.string,
        // outterLink is for links that will direct the user outside the app
        // it will be rendered as simple <a href="...">...</a> tag
        outterLink: PropTypes.string,
        // the text of the logo
        text: PropTypes.node,
        // the image src of the logo
        imgSrc: PropTypes.string
    })
};

export default Sidebar;
