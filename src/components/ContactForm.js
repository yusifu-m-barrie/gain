import "./ContactForm.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a Message to us</h1>
            <form>
                <input placeholder="FullName" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;