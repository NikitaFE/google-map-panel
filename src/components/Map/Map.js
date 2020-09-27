import React from 'react';
import './Map.scss';

const URL = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4949.450795118476!2d39.1975786!3d51.6648639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b2efad8c4467b%3A0x7dbf6f63a1c498e5!2z0JLQvtGA0L7QvdC10LbRgdC60LjQuSDQvtCx0LvQsNGB0YLQvdC-0Lkg0LrRgNCw0LXQstC10LTRh9C10YHQutC40Lkg0LzRg9C30LXQuQ!5e0!3m2!1sru!2sua!4v1601063734139!5m2!1sru!2sua';

function App() {
  return (
    <div className="map">
      <iframe
        className="map__frame"
        title="map"
        src={URL}
        width="600"
        height="450"
        frameBorder="0"
        tabIndex="0"
      ></iframe>
    </div>
  );
}

export default App;
