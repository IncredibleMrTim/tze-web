import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={`flex flex-col gap-10 max-w-300 mx-auto mb-10 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
