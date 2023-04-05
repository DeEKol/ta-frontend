import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import DocsForm from "@/components/Docs/DocsForm/DocsForm";
import DocsList from "@/components/Docs/DocsList/DocsList";
import { DELETE_DOCS } from "@/graphql/mutations/docs";
import { GET_ALL_DOCS } from "@/graphql/query/docs";
import type { Docs } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const DocsPage = () => {
  const [form, setForm] = useState<Docs>({
    id: undefined,
    date: "",
    post: false,
    pay: false,
    contractorId: 0,
    consumerId: 0,
  });

  const { data, loading, error, refetch } = useQuery(GET_ALL_DOCS);
  const [deleteDocs] = useMutation(DELETE_DOCS);

  const [docs, setDocs] = useState<Docs[]>([]);

  useEffect(() => {
    if (!loading) {
      const arr = data.docs;
      setDocs(arr);
    }
  }, [data]);

  return !loading ? (
    <PageContainerSC>
      <DocsForm
        form={form}
        setForm={setForm}
        refetch={refetch}
      />
      <DocsList
        deleteDocs={deleteDocs}
        docs={docs}
        setForm={setForm}
        refetch={refetch}
      />
    </PageContainerSC>
  ) : (
    <PageContainerSC>{error?.name}</PageContainerSC>
  );
};

export default React.memo(DocsPage);
