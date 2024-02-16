import './About.css'
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Samir from '../../assets/samir.jpg';

function About() {
    return (
        <section id="about">
            <h1>About Us</h1>
            <p><h2>Description: </h2><span>Inspired by the passion for programming and problem solving, I decided to
            create this software. A Biostatistics solver / calculator to make it easier for students in my
            university to solve and understand Biostatistics and also, as a foundational project for
            Holberton School.</span></p>
            <h2>Meet the Developer:</h2>
            <p id='meet_me'>Started learning how to code in 2020. Since then, he has explored areas of Frontend development, DevOps, Low level programming and Backend development.</p>
            <div>
                <img src={Samir} alt="" />
                <div>
                    <a href="https://www.linkedin.com/in/scisamir">
                        <FaLinkedin fontSize='1.8rem' />
                        <p>LinkedIn</p>
                    </a>
                    <a href="http://github.com/scisamir">
                        <FaGithub fontSize='1.8rem' />
                        <p>GitHub</p>
                    </a>
                    <a href="https://twitter.com/ScientistSamir">
                        <FaTwitter fontSize='1.8rem' />
                        <p>Twitter</p>
                    </a>
                </div>
            </div>
            
            <p id='project_repo'>Project's Github Repo: <a href="https://github.com/scisamir/bster">Here</a></p>
        </section>
    )
}

export default About