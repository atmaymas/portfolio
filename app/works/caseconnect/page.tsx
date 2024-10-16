import Goals from "@/app/ui/components/caseconnect/goals";
import Info from "@/app/ui/components/caseconnect/info";
import { mulish } from "@/app/ui/font";

export default function Page() {
  return (
    <div className={`${mulish.className}`}>
      <Info />
      <Goals />
    </div>
  );
}
