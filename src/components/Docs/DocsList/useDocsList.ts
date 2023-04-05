import type { IDocsListProps } from "@/components/Docs/DocsList/DocsList";

export const useDocsList = ({
  deleteDocs,
  docs,
  setForm,
  refetch,
}: IDocsListProps) => {
  const onChangeFormDocs = (id: number) => {
    const foundDocs = docs.find((doc) => id === doc.id);
    foundDocs &&
      setForm({
        id: foundDocs.id,
        date: new Date(Number(foundDocs.date)).toISOString().split("T")[0],
        post: foundDocs.post,
        pay: foundDocs.pay,
        contractorId: foundDocs.contractorId,
        consumerId: foundDocs.consumerId,
      });
  };

  const onDeleteDocs = (id: number) => {
    deleteDocs({
      variables: {
        removeDocsId: id,
      },
    }).then(() => refetch());
  };

  return { onChangeFormDocs, onDeleteDocs };
};
