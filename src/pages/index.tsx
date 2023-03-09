import React, { useEffect } from "react";

import "normalize.css";

import { useQuery } from "@apollo/client";

import { GET_ALL_USERS } from "@/graphql/query/users";
import PageContainerSC from "@/UI/SC/PageContainerSC";

export default function Home() {
  const { data, loading } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data]);

  return <PageContainerSC>123</PageContainerSC>;
}
