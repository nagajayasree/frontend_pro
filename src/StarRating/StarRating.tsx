// Star Rating Component - https://www.frontendpro.dev/frontend-coding-challenges/star-rating-component-geShE1ApkqUoNCqujxOd

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

interface StarRatingProps {
  totalStars: number;
}

const messagesArray = [
  {
    rating: 1,
    message:
      'We are sorry to hear that you had a bad experience. We would like to learn more about what happened and how can we make things right.',
  },
  {
    rating: 2,
    message:
      'We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.',
  },
  {
    rating: 3,
    message:
      "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  },
  {
    rating: 4,
    message:
      "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  },
  {
    rating: 5,
    message:
      "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.",
  },
];

export default function StarRating({ totalStars }: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(messagesArray);
  const stars = Array(totalStars).fill(0);

  return (
    <div className="container">
      <h4>How many stars would you give to our product?</h4>
      <div className="stars-container">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={46}
              style={{ display: 'flex', flexDirection: 'row' }}
              color={rating > index ? 'gold' : 'grey'}
              onClick={() => {
                setRating(index + 1);
                let getMessage = messages.find((m) => m.rating === index + 1);
                setMessage(getMessage?.message as string);
              }}
              onMouseEnter={() => setRating(index + 1)}
            />
          );
        })}
      </div>
      <div className="message-container">
        {message}
        {/* {rating == 1
          ? `We are sorry to hear that you had a bad experience. We would like to learn more about what happened and how can we make things right`
          : rating == 2
          ? `We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues`
          : rating == 3
          ? `Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.`
          : rating == 4
          ? `Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.`
          : rating == 5
          ? `Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.`
          : ``} */}
      </div>
    </div>
  );
}
