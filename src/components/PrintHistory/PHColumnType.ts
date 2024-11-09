export type PHColumnType = {
  id: number;
  documentName: string;
  printingState: 'success' | 'fail';
  printingTime: Date;
  printerName: string;
  properties: string;
};
