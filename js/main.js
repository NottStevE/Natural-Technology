import { home_page } from "./componentes/homepage.js";
import { insertar_menu } from "./componentes/menu.js";
import { estadistica } from "./componentes/estadistica.js";


export let root = document.querySelector("#root");
home_page();
insertar_menu();
estadistica();