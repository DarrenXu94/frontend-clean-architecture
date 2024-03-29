import { useSnapshot } from "valtio";
import { Product } from "../../domain/product";
import { state } from "../../services/store";
import { Cookie } from "../_common/Cookie";
import styles from "./Front.module.css";

export function Front() {
  const { cookies } = useSnapshot(state);

  return (
    <main>
      <h1>Cookies</h1>
      <ul className={styles.list}>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
