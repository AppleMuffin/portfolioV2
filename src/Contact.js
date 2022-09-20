import Form from "./Form";
import { FaFacebookF, FaLinkedin, FaGithub, FaMediumM } from 'react-icons/fa';
const Contact = () => {
  return(
    <section className="contact" id="contact">
      <div className="wrapper">
        <h2>Contact</h2>

        <div className="contactBox">
          <div className="contactText">
            <h3>Get in Touch</h3>
            <p>Got a question? Let's chat! you can reach me at jeremychaidev@gmail.com, through any of the social links below, or you can ask a question.</p>
            <ul className="socials">
              <a href="https://www.facebook.com/jeremy.chai.7/">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/jeremychai28/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/AppleMuffin">
                <FaGithub />
              </a>
              <a href="https://medium.com/@AppleMuffin">
                <FaMediumM />
              </a>
            </ul>
          </div>
          <Form />
        </div>

      </div>
    </section>
  )
}

export default Contact;