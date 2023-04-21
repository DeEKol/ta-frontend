import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import DocsForm from "@/components/Docs/DocsForm/DocsForm";
import DocsList from "@/components/Docs/DocsList/DocsList";
import { DELETE_DOCS } from "@/graphql/mutations/docs";
import { GET_ALL_COUNTERPARTIES } from "@/graphql/query/counterparty";
import { GET_ALL_DOCS } from "@/graphql/query/docs";
import type { Counterparty, Docs } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import TitleSC from "@/UI/SC/TitleSC";

export const participantInCounterparty = (
  arr: Counterparty[],
  participant: string,
) => {
  return arr.filter((elem) => elem.participant === participant);
};

const DocsPage = () => {
  const [form, setForm] = useState<Docs>({
    id: undefined,
    date: "",
    post: false,
    pay: false,
    contractorId: 0,
    consumerId: 0,
  });

  const {
    data: allDocs,
    loading: loadingDocs,
    error,
    refetch,
  } = useQuery(GET_ALL_DOCS);
  const { data: allCounterparty, loading: loadingCounterparty } = useQuery(
    GET_ALL_COUNTERPARTIES,
  );
  const [deleteDocs] = useMutation(DELETE_DOCS);

  const [docs, setDocs] = useState<Docs[]>([]);
  // const [counterparties, setCounterparties] = useState<Counterparty[]>([]);
  const [contractors, setContractors] = useState<Counterparty[]>([]);
  const [consumers, setConsumers] = useState<Counterparty[]>([]);

  useEffect(() => {
    if (!loadingDocs && !loadingCounterparty) {
      const arrDocs = allDocs.docs;
      setDocs(arrDocs);

      const arrCounterparties = allCounterparty.counterparties;
      // setCounterparties(arrCounterparties);
      setContractors(
        participantInCounterparty(arrCounterparties, "Исполнитель"),
      );
      setConsumers(participantInCounterparty(arrCounterparties, "Заказчик"));

      setForm((prevState) => ({
        ...prevState,
        contractorId: participantInCounterparty(
          arrCounterparties,
          "Исполнитель",
        )[0].id,
        consumerId: participantInCounterparty(arrCounterparties, "Заказчик")[0]
          .id,
      }));
    }
  }, [allDocs, allCounterparty]);

  return !loadingDocs &&
    !loadingCounterparty &&
    form.consumerId != 0 &&
    form.contractorId != 0 ? (
    <PageContainerSC>
      <TitleSC>Документы</TitleSC>
      <DocsForm
        form={form}
        contractors={contractors}
        consumers={consumers}
        setForm={setForm}
        refetch={refetch}
      />
      <DocsList
        deleteDocs={deleteDocs}
        docs={docs}
        contractors={contractors}
        consumers={consumers}
        setForm={setForm}
        refetch={refetch}
      />
    </PageContainerSC>
  ) : (
    <PageContainerSC>{error?.name}</PageContainerSC>
  );
};

export default React.memo(DocsPage);
