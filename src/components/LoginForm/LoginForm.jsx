import AboutLogin from "../About/AboutLogin";
import Header from "../Header/Header";

function LoginForm() {
  return (
    <>
      <Header />
      <div>
        <div>
          <form>
            <label>Електронна адреса</label>
            <input type="text" required placeholder="your@email.com" />
            <label>Пароль</label>
            <input type="password" required placeholder="Пароль" />
            <button>Увійти</button>
            <a href="/register">Реєстрація</a>
          </form>
        </div>
      </div>
      <AboutLogin />
    </>
  );
}
export default LoginForm;
