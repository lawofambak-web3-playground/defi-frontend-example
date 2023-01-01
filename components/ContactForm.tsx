export default function ContactForm() {
    return (
        <div className='contact-form'>
            <h2>Contact Us!</h2>
            <form className='contact-form-container'>
                <label className='contact-name'>
                    Name
                    <input className='contact-name-input' type='text' />
                </label>
                <label className='contact-email'>
                    Email
                    <input className='contact-email-input' type='text' />
                </label>
                <label className='contact-reason'>
                    Reason
                    <textarea className='contact-reason-input' rows={4} wrap='hard' />
                </label>
                <input className='contact-submit' type='submit' value='Submit' />
            </form>
        </div>
    )
}