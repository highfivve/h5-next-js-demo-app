import React, { type PropsWithChildren } from "react";

export type CardProps = {
  readonly title: string;
};

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  title,
  children,
}) => {
  return (
    <div className="flex max-w-sm flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="text-lg">{children}</div>
    </div>
  );
};
