// Newsletter Card Component - https://www.frontendpro.dev/frontend-coding-challenges/newsletter-card-component-Q3mJZ3AVwbEW4BEKYCKF

import { useState } from 'react';
import './NewsletterCard.css';

export default function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setErrorMessage('Invalid email address');
    } else if (!email || email.length === 0) {
      setErrorMessage('Required email address');
    }
  };

  return (
    <div className="container">
      <h4>Level Up Your Frontend Skills</h4>
      <p>
        Signup for our free newsletter to receive weekly coding challenges that
        will help you improve your frontend development skills.{' '}
      </p>

      <div className="input-container">
        <input
          className="inputfield"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
        <button
          className="btn"
          type="button"
          onClick={() => validateEmail(email)}
        >
          Subscribe
        </button>
      </div>
      {errorMessage}
    </div>
  );
}
