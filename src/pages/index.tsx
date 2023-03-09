import React from "react";

import "normalize.css";

import { useQuery } from "@apollo/client";

import { GET_ALL_USERS } from "@/graphql/query/users";
import PageContainerSC from "@/UI/SC/PageContainerSC";

export default function Home() {
  const { data, loading } = useQuery(GET_ALL_USERS);

  return (
    !loading && <PageContainerSC>{data.users[0].username}</PageContainerSC>
  );
}
