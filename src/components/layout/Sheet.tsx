import type { ReactNode } from "react";

/** The die-cut sheet every section sits on. */
export function Sheet({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto my-[clamp(14px,3vw,44px)] max-w-325 overflow-clip rule rounded-[10px] bg-paper shadow-lift-3 max-[521px]:m-0 max-[521px]:rounded-none max-[521px]:border-x-0 max-[521px]:shadow-none">
      {children}
    </div>
  );
}
