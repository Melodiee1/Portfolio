import './aboutMe.css';
import { Link } from 'react-router-dom'

function AboutMe() {

    return (
        <div className='AboutMe_main'>
            <div className="sec_one">
                <h2>
                    <div className="HI">HI, I'm</div>
                    <div className="first_name">Ajesh</div>
                    <div className="last_name">Kharel</div>
                </h2>

                <div className="speciality">
                    <div className="sec_one">
                        <div className="react">React</div>
                        +
                        <div className="typeScript">Typescript</div>
                    </div>
                    <div className="dev">Developer</div>
                </div> <br /> <br />

                <div className="text">
                    Introducing myself as a <u>14 student from Nepal</u>, Koshi (south Asia), am a student of <a href="https://www.facebook.com/pashupati.school.jhiljhile/" target='_blank'>Pashupati Academy</a> currently in grade 8. Beyond that, I'm a self taught React + Typesript Developer who likes to bring rough ideas into clean web experiences. You can navigate to my projects from the navigation bar above.
                </div> <br /> <br /> <br />

                <div className="get_two_know_me">
                    You can navigate to <Link to='/contact'>Contact Me</Link> page to get in touch with me...
                </div>
            </div>

            <div className="sec_two">
                <img src="/myself.jpg" alt="My image with black and dim bacground" />
            </div>
        </div>
    )
}
export default AboutMe;