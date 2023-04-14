export type MoliTag = {
  refreshAdSlot(domId: string): void;
};

export type MoliCommand = (moli: MoliTag) => void;

export type MoliQueue = {
  readonly que: {
    push: MoliCommand;
  };
};

declare const window: {
  moli: MoliQueue;
};

export const executeMoliCommand = (cmd: MoliCommand): void => {
  window.moli = window.moli || { que: [] };
  window.moli.que.push(cmd);
};
