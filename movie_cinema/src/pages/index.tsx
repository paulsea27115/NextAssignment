import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";

export default function Home() {
  return <div>홈입니다.</div>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
