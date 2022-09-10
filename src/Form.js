const Form = () => {
  return (
    <form action="https://formspree.io/f/mgeqwbrv" method="POST">
      <div className="nameEmail">
        <label htmlFor="name"></label>
        <input name="name" type="text" placeholder="Name" required />
        <label htmlFor="email"></label>
        <input name="email" type="email" placeholder="Email" required />
      </div>
      <label htmlFor="message"></label>
      <textarea name="message" rows="10" cols="12" placeholder="Your message here" required></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;