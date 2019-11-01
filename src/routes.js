import Home from 'views/Home.jsx';
import About from 'views/About.jsx';
import Portfolio from 'views/Portfolio.jsx';
import Resume from 'views/Resume.jsx';
import Contact from 'views/Contact.jsx';



let routes = [
    {
        path: "/index",
        name: "Home",
        component: Home,
        layout: "/kernel"
    },
    {
        path: "/index",
        name: "Home",
        component: Home,
        layout: "/kernel"
    },
    {
        path: "/about",
        name: "About",
        component: About,
        layout: "/kernel"
    },
    {
        path: "/Portfolios",
        name: "Portfolio",
        component: Portfolio,
        layout: "/kernel"
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume,
        layout: "/kernel"
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        layout: "/kernel"
    },
];
export default routes;