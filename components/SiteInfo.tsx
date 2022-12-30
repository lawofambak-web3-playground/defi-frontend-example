import ClientTestimonials from './ClientTestimonials';
import ProtocolMetrics from './ProtocolMetrics';

export default function ProtocolInfo() {
    return (
        <section className='protocol-info'>
            <div className='protocol-info-container'>
                <ClientTestimonials />
                <ProtocolMetrics />
            </div>
        </section>
    )
}