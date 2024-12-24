import { useNavigate } from "react-router-dom";
import "./Photos.css";

const importAll = (r) => r.keys().map(r);

export default function Photos() {
  const navigate = useNavigate();

  const photos = importAll(require.context('../images/photography', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
      <div className="scrollable-page">
        <header className="photo-header">
          <h1 className="photo-title">Photos</h1>
          <button 
            className="photo-close-btn"
            onClick={() => navigate('/')}
            >×</button>
        </header>
        <div className="photo-grid">
          {Object.values(photos).map((src, index) => (
            <img key={index} src={src} alt={"Photo" + index} className="photo-grid-item"/>
          ))}
        </div>
      </div>
    </div>
  );
}
