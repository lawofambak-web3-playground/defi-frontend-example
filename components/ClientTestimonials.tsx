interface Testimonial {
    name: string;
    message: string;
    audited: boolean;
}

const testimonials: Testimonial[] = [{name: 'Bob', message: 'Building with XYZ has allowed our protocol access to more liquidity which is essential for users.', audited: true}, {name: 'Alice', message: 'The XYZ team has made it simple and easy for new developers to quickly build and integrate their platform.', audited: true}, {name: 'Mark', message: 'XYZ has such a welcoming and supportive community that embodies the true culture of Web3 and DeFi.', audited: false}];

export default function ClientTestimonials() {
    return (
        <div className='client-testimonials'>
            <h2 style={{padding: '10px'}}>Client Testimonials</h2>
            {testimonials.filter(testimonial => testimonial.audited).map(testimonial =>
                <div className='client-testimonial' key={testimonial.name}>
                    <h3>{testimonial.name}</h3>
                    <p style={{fontStyle: 'italic'}}>{testimonial.message}</p>
                </div>    
            )}
        </div>
    )
}