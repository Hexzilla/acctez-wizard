import * as React from "react";
import { PlasmicHomepage } from "./plasmic/blank_project/PlasmicHomepage";
import WizardTimeLine from "./WizardTimeLine";

function Homepage_(props, ref) {
  return <PlasmicHomepage
    root={{ ref }}
    {...props}
    timeline={<WizardTimeLine />}
  />;
}

const Homepage = React.forwardRef(Homepage_);

export default Homepage;
