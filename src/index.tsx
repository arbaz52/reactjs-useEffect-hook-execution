import { render } from "react-dom";

import WithChild from "./Senario1.example";
import ComponentUsesCustomHook from "./Scenario2.example";

const rootElement = document.getElementById("root");
render(<ComponentUsesCustomHook />, rootElement);
