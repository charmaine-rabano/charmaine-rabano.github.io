import { proofItems } from "@/content/proof";
import { ProofItem } from "./ProofItem";

export function ProofStrip() {
  return (
    <div className="grid grid-cols-2 gap-3.5 px-(--pad) pb-(--step) min-[1081px]:grid-cols-4">
      {proofItems.map((item) => (
        <ProofItem key={item.label} {...item} />
      ))}
    </div>
  );
}
