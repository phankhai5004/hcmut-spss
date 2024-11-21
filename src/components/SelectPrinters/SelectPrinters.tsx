import PDFPreview from '../Preview/Preview';
import SelectPrintersTable from './SelectPrintersList';

export default function SelectPrinters() {
  return (
    <div className="grid grid-cols-2 gap-10 pt-10">
      <SelectPrintersTable />
      <PDFPreview />
    </div>
  );
}
