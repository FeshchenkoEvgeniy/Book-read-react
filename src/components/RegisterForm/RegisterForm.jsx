import { useDispatch } from "react-redux";
import AboutRegister from "../About/AboutRegister";
import { register } from "../../redux/auth/operation";
import { Link } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {
      elements: { name, email, password },
    } = evt.currentTarget;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ім’я</label>
            <input type="text" required id="name" />
            <label htmlFor="email">Електронна адреса</label>
            <input type="text" required id="email" />
            <label htmlFor="password">Пароль</label>
            <input type="password" minLength={8} required id="password" />
            <label htmlFor="repeatPassword">Підтвердити пароль</label>
            <input type="password" minLength={8} required id="repeatPassword" />
            <button type="submit">Зареєструватися</button>
          </form>
          <span>
            Вже з нами?<Link to="/login">Увійти</Link>
          </span>
        </div>
      </div>
      <AboutRegister />
    </>
  );
}

export default RegisterForm;
