import { CiSearch } from "react-icons/ci";
import styles from "./search.module.css";

export const Search = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <label>
          <input type="text" placeholder="Search" spellCheck="false"/>
          <CiSearch />
        </label>
      </div> 
    </div>
  );
};
