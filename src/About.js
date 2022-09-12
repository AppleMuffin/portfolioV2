import me from './me.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return(
    <section className="about" id="about">
      <div className="wrapper">
        <h2>About</h2>
        <div className="aboutMe">
          <div className="aboutText">
            <h3>Hello! My name is Jeremy, and I am a front-end web developer from Toronto.</h3>
            <p>I love to develop responsive web applications with a focus on responsive design and clean code.</p>
            <p>
              I have past experience in consulting, specializing in environment and sustainability. With my past 3 years experience
              leading successful projects for clients across Canada, I'm an extremely flexible individual who vies for challenging
              problems. If you have need of my services, feel free to <Link to="/contact">reach out!</Link> </p>

              <p>In my spare time, you can find me woodworking, weight lifting at the gym, trying (in vain) to find a group to play Dungeons & Dragons, or working on programming side projects.</p>
          </div>
        <div className="me">
          <img src={me} alt="a portrait of me" />
        </div>
      </div>
    </div>
    </section >
  )
}

export default About;