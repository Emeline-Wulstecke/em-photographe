import React, { useState } from 'react';
import './admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loginError = useSelector(state => state.auth.error);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handlelogIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      await dispatch(logIn({ email, password }));
      navigate('/home');
    } catch (error) {
      setIsLoading(false);
      // Gérer l'erreur de connexion ici
    }
  };

  return (
    <main id="login">
      <section className="login">
        <h2>Admin</h2>
        {loginError && <p className="errorLogin">{loginError}</p>}
        <form onSubmit={handlelogIn}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Mot de passe </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button id="submit" type="submit" disabled={isLoading}>
            {isLoading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>
        <p className="forgotLogin">Mot de passe oublié</p>
      </section>
    </main>
  );
};

export default Admin;