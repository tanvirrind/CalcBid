"use client";

import { useParams } from "next/navigation";
import { ClientDetail } from "../../_components/appdata";

export default function ClientPage() {
  const { id } = useParams();
  return (
    <main className="cbapp-page">
      <ClientDetail id={id} />
    </main>
  );
}
