import React, { useState } from "react";

import About from "@/components/About/About";
import { AboutContext } from "@/context";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const AboutPage = () => {
  const [about, setAbout] = useState<string>("about");

  return (
    <AboutContext.Provider value={[about, setAbout]}>
      <PageContainerSC>
        <About />
      </PageContainerSC>
    </AboutContext.Provider>
  );
};

export default AboutPage;
