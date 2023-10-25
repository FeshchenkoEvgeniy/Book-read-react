import { useDispatch } from "react-redux";
import AboutLogin from "../About/AboutLogin";
import { login } from "../../redux/auth/operation";
import { Link } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();

  const handleSumbit = (evt) => {
    evt.preventDefault();
    const {
      elements: { email, password },
    } = evt.currentTarget;

    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSumbit}>
            <label htmlFor="email">Електронна адреса</label>
            <input
              type="text"
              required
              id="email"
              placeholder="your@email.com"
            />
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              required
              minLength={8}
              id="password"
              placeholder="Пароль"
            />
            <button type="submit">Увійти</button>
          </form>
          <Link to="/register">Реєстрація</Link>
        </div>
      </div>
      <AboutLogin />
    </>
  );
}
export default LoginForm;
