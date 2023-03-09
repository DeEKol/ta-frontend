import React, { useContext } from "react";

import { AboutContext } from "@/context";

const About = () => {
  const [about] = useContext(AboutContext);

  return <div>{about}</div>;
};

export default React.memo(About);
