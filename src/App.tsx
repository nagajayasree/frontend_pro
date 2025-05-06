import './App.css';
import StarRating from './StarRating/StarRating';

export function App() {
  return (
    <div className="container">
      <StarRating totalStars={5} />
    </div>
  );
}
