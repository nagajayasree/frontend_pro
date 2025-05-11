import './App.css';
import NewsletterCard from './Newsletter Card/NewsletterCard';
import StarRating from './StarRating/StarRating';

export function App() {
  return (
    <div className="container">
      {/* <StarRating totalStars={5} /> */}
      <NewsletterCard />
    </div>
  );
}
