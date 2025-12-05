import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Request failed');
      }

      const data = await res.json();
      // Include original password in state (for display purposes only)
      navigate('/welcome', { state: { ...data, originalPassword: form.password } });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-grid" />

      <motion.div
        className="register-card"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, boxShadow: '0 25px 70px rgba(255, 59, 59, 0.25)' }}
      >
        <motion.div
          className="card-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <div className="card-header">
          <p className="eyebrow">KAAR TECHNOLOGIES</p>
          <h1>Registration form for Kaar Technologies</h1>
          <p className="subtext">
            Developed by Amithesh Christus A
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <Field
            icon={<FaUser />}
            label="Username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
          />
          <Field
            icon={<FaEnvelope />}
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Field
            icon={<FaLock />}
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.01, boxShadow: '0 15px 30px rgba(255, 59, 59, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            {loading ? <span className="spinner" /> : 'Create Account'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

function Field({ icon, label, name, type, value, onChange }) {
  const isFilled = value.length > 0;

  return (
    <motion.label
      className="field"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className={`field-label ${isFilled ? 'floated' : ''}`}>{label}</span>
      <div className="field-wrapper">
        <span className="field-icon">{icon}</span>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
          className="field-input"
        />
        <span className="field-focus" />
      </div>
    </motion.label>
  );
}

export default Register;

