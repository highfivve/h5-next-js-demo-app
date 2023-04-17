"use client";
import React, { useEffect } from "react";
import { executeMoliCommand } from "~/ads/refreshAdSlot";

export type AdSlotClientSideProps = {
  readonly id: string;
};

export const AdSlotClientSide: React.FC<AdSlotClientSideProps> = ({ id }) => {
  useEffect(() => {
    console.log("refreshAdSlot", id);
    executeMoliCommand((moli) => moli.refreshAdSlot(id));
  }, [id]);
  return (
    <div id={id} className="min-h-[250px] min-w-[300px]">
      Ad Slot here
    </div>
  );
};
