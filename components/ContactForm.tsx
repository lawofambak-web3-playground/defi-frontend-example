export default function ContactForm() {
    return (
        <div className='contact-form'>
            <h2>Contact Us!</h2>
            <form className='contact-form-container'>
                <input className='contact-name' type='text' placeholder='Name' />
                <input className='contact-email' type='text' placeholder='Email' />
                <input className='contact-reason' type='text' placeholder='Reason' />
                <button>Submit</button>
            </form>
        </div>
    )
}