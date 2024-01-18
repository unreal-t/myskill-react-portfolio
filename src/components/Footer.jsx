import { Component } from "react";
import Fade  from "react-awesome-reveal";
import PropTypes from 'prop-types';


class Footer extends Component {
    static propTypes = {
        data: PropTypes.any,
    }
    render() {
        if (!this.props.data) return null;

        const networks = this.props.data.social.map((network) => (
            <li key={network.name}>
                <a href={network.url}>
                    <i className={network.className} />
                </a>

            </li>
        ));

        return (
            <footer>
                <div className="row">
                    <Fade bottom>
                        <div className="twelve columns">
                            <ul className="social-links">{networks}</ul>
                            <ul className="copyright">
                                <li>&copy; Copyright 2024 Anril Tasa Siregar</li>
                                <li>
                                    Design by {" "}
                                    <a title="Styleshout" href="http://www.styleshout.com/">
                                        Styleshout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Fade>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;