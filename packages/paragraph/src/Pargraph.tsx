import * as React from "react";

export default function Paragraph({ children }: React.PropsWithChildren) {
  return <p className="text-red-500">{children}</p>;
}
