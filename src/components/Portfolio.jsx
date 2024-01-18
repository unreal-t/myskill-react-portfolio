import {Component} from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";
import PropTypes from 'prop-types';


let id = 0;
class Portfolio extends Component {
    static propTypes = {
        data: PropTypes.any,
    }
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map((projects) => {
            const projectImage = `images/portfolio/${projects.image}`;

            return (
                <div key={id++} className="columns portfolio-item">
                    <div className="item-wrap">
                        <Zmage alt={projects.title} src={projectImage} />
                        <div style={{textAlign: "center"}}>{projects.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out some of my works</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Portfolio;