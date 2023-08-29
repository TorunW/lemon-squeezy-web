import qrCode from './assets/qr-code.svg';
import closeOutline from './assets/close-outline.svg';
import './App.css';
import { useState } from 'react';
import { auth, db } from './firebase/firebase-config.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        console.log(user);

        const docRef = await addDoc(collection(db, 'mail'), {
          title: 'Delete from website',
          message: user.email,
        });
        console.log('Document written with ID: ', docRef.id);
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          console.log(err.code);
        }
        if (
          err.code === 'auth/invalid-email' ||
          err.code === 'auth/user-not-found'
        ) {
          console.log(err.code);
        }
        if (err.code === 'auth/too-many-requests') {
          console.log(err.code);
        }
        console.log(err);
      });
  };

  const openModal = (type: string) => {
    setIsOpen(true);
    setModalType(type === 'privacy' ? 'privacy' : 'delete');
  };
  return (
    <>
      <div
        className={isOpen === true ? 'pageHasOverlay' : 'pageWithoutOverlay'}
      >
        {isOpen === true && modalType === 'delete' ? (
          <div className='modalOverlay'>
            <img
              onClick={() => setIsOpen(false)}
              src={closeOutline}
              className='close'
            />
            <h2>Delete acount forever?</h2>
            <p>
              confirm your email and password. After account has been delete all
              data will be lost.
            </p>
            <div className='form'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
              />
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
              />
              <button
                type='submit'
                className='submit'
                onClick={() => signInUser()}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='page'>
          <div className={isOpen === true ? 'card' + ' cardBlur' : 'card'}>
            <h1>Lemon Squeezy</h1>
            <p>
              Delve into our app to uncover a world brimming with tantalizing
              cocktail recipes. Save and organize your favorites for later while
              also rating them based on your personal taste.
            </p>
            <p>
              <span>
                Cheers to discovering the art of cocktails, one recipe at a
                time!
              </span>
            </p>
          </div>
          <div className={isOpen === true ? 'links' + ' linkBlur' : 'links'}>
            <img src={qrCode} className='logo' />
          </div>
        </div>
        <div className={isOpen === true ? 'footerBlur' + ' footer' : 'footer'}>
          <p className='read-the-docs'>
            <button>
              <a
                target='_blank'
                href='https://www.freeprivacypolicy.com/live/6a4323e6-3bab-434b-b4f8-e61fee614440'
              >
                Privacy Policy
              </a>{' '}
            </button>
            <button onClick={() => openModal('delete')}>Delete account</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
