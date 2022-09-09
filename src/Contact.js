import Form from "./Form";

const Contact = () => {
  return(
    <section className="contact" id="contact">
      <div className="wrapper">
        <h2>Contact</h2>

        <div className="contactBox">
          <div className="contactText">
            <h3>Get in Touch</h3>
            <p>Got a question? Let's chat! you can reach me at jeremy4322@gmail.com, through any of the social links below, or you can ask a question to the right.</p>
            <ul className="socials">
              <a href="https://www.facebook.com/jeremy.chai.7/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/jeremy-chai-9a7b9381/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/AppleMuffin">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://medium.com/@AppleMuffin">
                <i className="fa-brands fa-medium"></i>
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