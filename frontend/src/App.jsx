import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Register from './Register';
import './App.css';

function Welcome() {
  const location = useLocation();
  const data = location.state;
  const [showDecrypted, setShowDecrypted] = useState(false);

  if (!data) {
    return (
      <div className="welcome-card">
        <h1>No data</h1>
        <p>Please submit the registration form first.</p>
      </div>
    );
  }

  const { username, email, hashedPassword, createdAt, originalPassword } = data;
  const createdLabel = createdAt ? new Date(createdAt).toLocaleString() : 'Not provided';

  return (
    <div className="welcome-card">
      <div className="welcome-header">
        <p className="eyebrow">Welcome</p>
        <h1>{username}</h1>
        <p className="subtext">Here are the details you submitted:</p>
      </div>
      <div className="welcome-details">
        <div>
          <p className="label">Mail</p>
          <p className="value">{email}</p>
        </div>
        <div>
          <p className="label">Created At</p>
          <p className="value">{createdLabel}</p>
        </div>
        <div className="password-section">
          <p className="label">Password (hashed)</p>
          <p className="value mono">{hashedPassword}</p>
          {originalPassword && (
            <>
              <motion.button
                className="decrypt-btn"
                onClick={() => setShowDecrypted(!showDecrypted)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {showDecrypted ? 'Hide' : 'Decrypt'}
              </motion.button>
              {showDecrypted && (
                <motion.div
                  className="decrypted-password"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="label">Original Password</p>
                  <p className="value mono">{originalPassword}</p>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
