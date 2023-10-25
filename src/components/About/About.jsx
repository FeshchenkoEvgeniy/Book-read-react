import { Link } from "react-router-dom";
import css from "./About.module.css";
function About() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Books Reading</h2>
      <div className={css["list-сontainer"]}>
        <p className={css["list-title"]}>Допоможе вам</p>
        <ul>
          <li className={css["list-item"]}>
            <p className={css["list-text"]}>
              Швидше сформулювати свою ціль і розпочати читати
            </p>
          </li>
          <li className={css["list-item"]}>
            <p className={css["list-text"]}>
              Пропорційно розподілити навантаження на кожний день
            </p>
          </li>
          <li className={css["list-item"]}>
            <p className={css["list-text"]}>Відстежувати особистий успіх</p>
          </li>
        </ul>
      </div>
      <div className={css["list-сontainer"]}>
        <p className={`${css["list-title"]} ${css.mt}`}>Також ви зможете</p>
        <ul>
          <li className={css["list-item"]}>
            <p className={css["list-text"]}>
              Формувати особисту думку незалежну від інших
            </p>
          </li>
          <li className={css["list-item"]}>
            <p className={css["list-text"]}>
              Підвищити свої професійні якості опираючись на нові знання
            </p>
          </li>
          <li className={css["list-item"]}>
            <p className={css["list-text"]}>Стати цікавим співрозмовником</p>
          </li>
        </ul>
      </div>
      <div className={css["link-wrapper"]}>
        <Link to="/login" className={css.link}>
          Увійти
        </Link>
        <Link to="/register" className={css.link}>
          Реєстрація
        </Link>
      </div>
    </div>
  );
}

export default About;
