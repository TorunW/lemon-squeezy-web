import qrCode from './assets/qr-code.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='page'>
        <div className='card'>
          <h1>Lemon Squeezy</h1>
          <p>
            Delve into our app to uncover a world brimming with tantalizing
            cocktail recipes. Save and organize your favorites for later while
            also rating them based on your personal taste.
          </p>
          <p>
            <span>
              Cheers to discovering the art of cocktails, one recipe at a time!
            </span>
          </p>
        </div>
        <div className='links'>
          <img src={qrCode} className='logo' alt='Vite logo' />
        </div>
      </div>
      <div className='footer'>
        <p className='read-the-docs'>Privacy Policy * Delete account </p>
      </div>
    </>
  );
}

export default App;
