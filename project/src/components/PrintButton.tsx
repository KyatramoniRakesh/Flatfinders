import React, { useCallback } from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  contentRef: React.RefObject<HTMLElement>;
}

const PrintButton: React.FC<PrintButtonProps> = ({ contentRef }) => {
  const handlePrint = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Property Details</title>
          <style>
            body { font-family: Arial, sans-serif; }
            img { max-width: 100%; height: auto; }
            .print-content { max-width: 1000px; margin: 0 auto; padding: 20px; }
            @media print {
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="print-content">
            ${content.innerHTML}
          </div>
          <script>
            window.onload = () => {
              window.print();
              window.onafterprint = () => window.close();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
  }, [contentRef]);

  return (
    <button
      onClick={handlePrint}
      className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors"
    >
      <Printer className="h-5 w-5" />
      <span>Print Details</span>
    </button>
  );
};

export default PrintButton;