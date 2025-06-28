import React, { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setIsSubscribed(true);
        setEmail('');
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter-content">
                    <div className="newsletter-text">
                        <h2 className="newsletter-title">Stay Updated</h2>
                        <p className="newsletter-description">
                            Get notified about new articles, projects, and insights delivered straight to your inbox.
                        </p>
                    </div>
                    <div className="newsletter-form-wrapper">
                        {!isSubscribed ? (
                            <form className="newsletter-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="newsletter-input"
                                    />
                                    <button type="submit" className="btn btn-primary newsletter-btn">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="newsletter-privacy">
                                    No spam, unsubscribe at any time.
                                </p>
                            </form>
                        ) : (
                            <div className="newsletter-success">
                                <div className="success-icon">✓</div>
                                <h3>Thanks for subscribing!</h3>
                                <p>You'll receive updates about new content and projects.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
