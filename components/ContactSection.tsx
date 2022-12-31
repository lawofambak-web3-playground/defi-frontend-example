import ExtraSiteInfo from './ExtraSiteInfo';
import ContactForm from './ContactForm';

export default function ContactSection() {
    return (
        <section className='contact-section'>
            <div className='contact-section-container'>
                <ExtraSiteInfo />
                <ContactForm />
            </div>
        </section>
    )
}