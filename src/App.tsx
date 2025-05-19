import './App.css';
import ChipsInput from './ChipsInput/ChipsInput';
import NewsletterCard from './NewsletterCard/NewsletterCard';
import StarRating from './StarRating/StarRating';

export function App() {
  return (
    <div className="container">
      {/* <StarRating totalStars={5} /> */}
      {/* <NewsletterCard /> */}
      <ChipsInput />
    </div>
  );
}
