import { redirect } from "next/navigation";
import { API_GROUPS, groupSlug, DEFAULT_ENDPOINT } from "@/data/api";

export default function ApiIndex() {
  redirect(`/api/${groupSlug(API_GROUPS[0].id)}/${DEFAULT_ENDPOINT.id}`);
}
