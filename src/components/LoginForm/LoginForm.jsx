import { useDispatch } from "react-redux";
import AboutLogin from "../About/AboutLogin";
import Header from "../Header/Header";
import { login } from "../../redux/auth/operation";

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
      <Header />
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
            <a href="/register">Реєстрація</a>
          </form>
        </div>
      </div>
      <AboutLogin />
    </>
  );
}
export default LoginForm;
