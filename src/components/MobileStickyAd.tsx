"use client";
import React, { useEffect } from "react";
import { executeMoliCommand } from "~/ads/refreshAdSlot";

export type MobileStickyAdProps = {
  readonly id: string;
};

export const MobileStickyAd: React.FC<MobileStickyAdProps> = ({ id }) => {
  useEffect(() => {
    console.log("refreshAdSlot mobile sticky", id);
    executeMoliCommand((moli) => moli.refreshAdSlot(id));
  }, [id]);
  return (
    <div className="h5-sticky-ad u-hidden-desktop" data-ref="sticky-ad">
      <div id={id} className="h5-sticky-ad-container"></div>
      <button
        className="h5-sticky-ad-close"
        data-ref="sticky-ad-close"
        aria-label="Anzeige entfernen"
      ></button>
    </div>
  );
};
