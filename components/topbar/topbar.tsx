import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { MdDarkMode, MdShare } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import CONFIG from "../../config";
import Logo from "../logo/logo";
import styles from "./topbar.module.css";

export default function Topbar() {
  const [color, setColor] = useState("#ffffff");

  function onEnter() {
    setColor("#808080");
  }

  function onLeave() {
    setColor("#ffffff");
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Link href="/">
            <a className={cn(styles.item, styles.path)}>
              <Logo color={color} />
              <span className={styles.text}>Path</span>
            </a>
          </Link>
        </li>
        <li>
          <a
            className={styles.item}
            href={CONFIG.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
            <span className={styles.text}>Code</span>
          </a>
        </li>
        <li>
          <a
            className={styles.item}
            href={CONFIG.CASPER}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoBook />
            <span className={styles.text}>Docs</span>
          </a>
        </li>
        <li>
          <button className={styles.item}>
            <MdShare />
            <span className={styles.text}>Share</span>
          </button>
        </li>
        <li>
          <button className={styles.item}>
            <MdDarkMode />
            <span className={styles.text}>Mode</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
