import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/operations';

export const LogIn = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);
  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    console.log(userData);
    dispatch(loginThunk(userData));
    // loginUser(userData).then(data => console.log(data), navigate('/contacts'));
    e.target.reset();
  };
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Email
          <input
            type="email"
            name="email"
            title="Need to add email using this format 'email@email.com'"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            title="add you password"
            required
          />
        </label>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};
