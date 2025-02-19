import React from 'react'
import st from './About.module.css'

const About = () => {
    return (
        <div className={st.container}>
            <h3>Project created with {" "}
                <a href="https://www.thedogapi.com/" className={st.link} target='_blank' rel='noreferrer'>
                    The Dog API
                </a>
            </h3>
            <p>Plain CSS, react.js, redux, express.js, node.js, Sequelize, and PostgreSQL</p>
            <p>You can find the code at{" "}
                <a href="https://github.com/fabriziocl/Dogs" className={st.link} target='_blank' rel='noreferrer'>
                    my GitHub repo.
                </a>
            </p>
        </div>
    )
}

export default About