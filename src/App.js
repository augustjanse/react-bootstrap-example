import logo from "./logo.svg";
import "./App.css";

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function App() {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip>{"description"}</Tooltip>}
    >
      <span>Hover</span>
    </OverlayTrigger>
  );
}

export default App;
