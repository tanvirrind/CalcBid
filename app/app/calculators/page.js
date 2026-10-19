import { redirect } from "next/navigation";

// No calculator index inside the app — the picker lives on /app home.
export default function CalculatorsIndex() {
  redirect("/app");
}
