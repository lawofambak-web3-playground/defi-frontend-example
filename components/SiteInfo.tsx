import ClientTestimonials from './ClientTestimonials';
import ProtocolMetrics from './ProtocolMetrics';

export default function SiteInfo() {
    return (
        <section className='site-info'>
            <div className='site-info-container'>
                <ClientTestimonials />
                <ProtocolMetrics />
            </div>
        </section>
    )
}