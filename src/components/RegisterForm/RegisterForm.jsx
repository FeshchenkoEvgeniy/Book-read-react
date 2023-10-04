import AboutRegister from "../About/AboutRegister";
import Header from "../Header/Header";

function RegisterForm() {
  return (
    <>
      <Header />
      <div>
        <div>
          <form>
            <label htmlFor="name">Ім’я</label>
            <input type="text" required id="name" />
            <label htmlFor="email">Електронна адреса</label>
            <input type="text" required id="email" />
            <label htmlFor="password">Пароль</label>
            <input type="password" required id="password" />
            <label htmlFor="repeatPassword">Підтвердити пароль</label>
            <input type="password" required id="repeatPassword" />
            <button type="submit">Зареєструватися</button>
          </form>
          <span>
            Вже з нами?<a href="/login">Увійти</a>
          </span>
        </div>
      </div>
      <AboutRegister />
    </>
  );
}

export default RegisterForm;
