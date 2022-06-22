import * as React from "react";
import { PlasmicHomepage } from "./plasmic/blank_project/PlasmicHomepage";

function Homepage_(props, ref) {
  return <PlasmicHomepage root={{ ref }} {...props} />;
}

const Homepage = React.forwardRef(Homepage_);

export default Homepage;
