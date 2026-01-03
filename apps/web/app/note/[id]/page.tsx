import { CreateOrEditNote } from "../../../pages-x/CreateOrEditNote";

export default async function createNote({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <CreateOrEditNote id={id} />;
}
