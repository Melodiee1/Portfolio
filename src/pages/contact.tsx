import { Link } from 'react-router-dom';
import './contact.css';

function Contact() {

    return (
        <div className="contact-me-page body-container">
            <div className="int-container">
                {/* Header */}
                <div className="section-one header-container">
                    <h2>Contact Me</h2>
                    <div className="text">Get to know me — send an email or reach out directly on social media.</div>
                </div>

                {/* Body */}
                <section className="section-two">
                    <div className="email-container">
                        {/* Email form container*/}
                        <div className="email-form-container">
                            <form>
                                <div className="input-container">
                                    <label>Full Name</label>
                                    <input type="text" className="field" placeholder="Enter your full name..." />
                                </div>

                                <div className="input-container">
                                    <label>Email</label>
                                    <input type="email" className="field" placeholder="Enter your email..." />
                                </div>

                                <div className="input-container">
                                    <label>Message</label>
                                    <textarea className="message-container field" placeholder="Type your message..." />
                                </div>

                                <button type="submit">Send Message</button>
                            </form>
                        </div>

                        {/* Reach Out Container*/}
                        <div className="reach-out-container">
                            {MapReachOutCards()}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-links-container">
                        {MapSocialLinks()}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Contact;

function MapReachOutCards() {
    interface reach_out_data { title: string; image: string; content: string; }
    const reachOutData: reach_out_data[] = [
        { title: 'Email', image: '/others/mail.png', content: 'ajeshkharel5@gmail.com' },
        { title: 'Phone-number', image: '/others/call.png', content: '981-xxxxxxx' },
        { title: 'Location', image: '/others/location.png', content: 'Nepal, Koshi Province - Jhapa district' },
        { title: 'Response Time', image: '/others/timer.png', content: 'Usually within 34 hours' },
    ];

    function ReachOutCard({ title, image, content }:
        { title: string, image: string, content: string }
    ) {
        return (
            <div className="reach-out-card">
                <img src={image} />
                <div className="content">
                    <div className="sec-one">{title}</div>
                    <div className="sec-two">{content}</div>
                </div>
            </div>
        )
    }
    function MapCard() {
        return reachOutData.map(button => (
            <ReachOutCard key={button.title} title={button.title} image={button.image} content={button.content} />
        ))
    }

    return <div> {MapCard()} </div>
}
function MapSocialLinks() {
    interface social_links { title: string; image: string, path: string }
    const socialLinks: social_links[] = [
        { title: 'Instagram', image: '/socialMedia/Instagram.png', path: '' },
        { title: 'Facebook', image: '/socialMedia/Facebook.png', path: '' },
        { title: 'Github', image: '/socialMedia/Github.png', path: '' },
    ];
    function SocialLinkCard({ title, image, path }:
        { title: string; image: string; path: string }
    ) {
        return (
            <li>
                <Link to={path}>
                    <img src={image} alt={title} />
                </Link>
            </li>
        )
    }
    function MapLinks() {
        return socialLinks.map((link) => (
            <SocialLinkCard key={link.title} title={link.title} image={link.image} path={link.path} />
        ));
    };

    return <div> {MapLinks()} </div>
} 
