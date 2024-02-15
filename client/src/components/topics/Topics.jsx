import './Topics.css'
import { Link } from 'react-router-dom'
import { TiArrowBack } from "react-icons/ti"
import { IoMdHome } from "react-icons/io"
import { IoMdSearch } from "react-icons/io"
import { IoMdPlayCircle } from "react-icons/io"
import { FaSave } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import correlation from '../../assets/correlation.png'
import linear_regression from '../../assets/linear-regression.jpg'
import binomial_distribution from '../../assets/binomial-distribution.png'
import chisquare from '../../assets/chisquare.jpg'
import anova from '../../assets/anova.jpg'

const FeaturedTopics = [
    {
        img: correlation,
        name: 'Correlation'
    },
    {
        img: linear_regression,
        name: 'Linear Regression'
    },
    {
        img: binomial_distribution,
        name: 'Binomial Distribution'
    },
]

const OtherTopics = [
    {
        img: chisquare,
        name: 'Chi Square'
    },
    {
        img: anova,
        name: 'ANOVA'
    },
]

function Topic({ value }) {
    return (
        <div className="topic">
            <div className="topic_image">
                <img src={value.img} alt="correlation" />
            </div>
            <div className="topic_description">
                <p className="topic_intro">{value.name}</p>
                <Link to='/correlation'><button className="go_to_topic">Solve</button></Link>
            </div>
        </div>
    )
}

function Topics() {
    return (
        <section id="topics">
            <main>
                <h2>Featured</h2>
                <div className="the_topics">
                    {FeaturedTopics && FeaturedTopics.map((value, key) => (
                        <Topic key={key} value={value} />
                    ))}
                </div>
                <h2>Others</h2>
                <div className="the_topics">
                    {OtherTopics && OtherTopics.map((value, key) => (
                        <Topic key={key} value={value} />
                    ))}
                </div>
            </main>
        </section>
    )
}

export default Topics