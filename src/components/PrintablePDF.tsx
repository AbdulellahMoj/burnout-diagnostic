import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { quizQuestions } from '../data/content';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function PrintablePDF() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = () => {
    setIsGenerating(true);
    try {
      // Create a new PDF document (A4 size)
      const doc = new jsPDF();

      // Title
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text('Occupational Burnout Diagnostic', 14, 20);

      // Subtitle
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Based on the Maslach Burnout Inventory (MBI)', 14, 26);

      // Instructions
      doc.setFontSize(11);
      doc.text('Instructions: For each statement, circle the number that best describes how often you feel this way:', 14, 36);
      doc.setFont('helvetica', 'bold');
      doc.text('1 = Never    2 = Rarely    3 = Sometimes    4 = Often    5 = Always', 14, 42);

      // Table Data
      const tableData = quizQuestions.map((q, i) => [
        `${i + 1}. ${q.t}`,
        '1', '2', '3', '4', '5'
      ]);

      // Generate Table
      autoTable(doc, {
        startY: 48,
        head: [['Statement', '1', '2', '3', '4', '5']],
        body: tableData,
        theme: 'grid',
        headStyles: { 
          fillColor: [40, 40, 40], 
          textColor: [255, 255, 255], 
          fontStyle: 'bold', 
          halign: 'center' 
        },
        columnStyles: {
          0: { cellWidth: 'auto' },
          1: { cellWidth: 12, halign: 'center' },
          2: { cellWidth: 12, halign: 'center' },
          3: { cellWidth: 12, halign: 'center' },
          4: { cellWidth: 12, halign: 'center' },
          5: { cellWidth: 12, halign: 'center' },
        },
        styles: { 
          fontSize: 10, 
          cellPadding: 3,
          valign: 'middle'
        },
        margin: { left: 14, right: 14 }
      });

      // Get the Y position where the table ended
      const finalY = (doc as any).lastAutoTable.finalY || 200;
      
      // Scoring Instructions
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Scoring Instructions:', 14, finalY + 10);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Add up the numbers you circled to get your total score (Minimum: 15, Maximum: 75).', 14, finalY + 16);

      // Score Ranges
      doc.setFont('helvetica', 'bold');
      doc.text('15 - 30 (Healthy):', 14, finalY + 24);
      doc.setFont('helvetica', 'normal');
      doc.text('You are managing well. Keep protecting your rest.', 48, finalY + 24);

      doc.setFont('helvetica', 'bold');
      doc.text('31 - 45 (Warning):', 14, finalY + 30);
      doc.setFont('helvetica', 'normal');
      doc.text('Early signs of burnout. Identify drains and restructure.', 48, finalY + 30);

      doc.setFont('helvetica', 'bold');
      doc.text('46 - 55 (Moderate):', 14, finalY + 36);
      doc.setFont('helvetica', 'normal');
      doc.text('Meaningful burnout. Reduce active commitments.', 50, finalY + 36);

      doc.setFont('helvetica', 'bold');
      doc.text('56 - 75 (Critical):', 14, finalY + 42);
      doc.setFont('helvetica', 'normal');
      doc.text('High burnout. Seek support and prioritize recovery immediately.', 46, finalY + 42);

      // Save the PDF
      doc.save('burnout_diagnostic.pdf');
    } catch (error) {
      console.error("Failed to generate PDF", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full bg-ui-warm border-2 border-ui-border rounded-3xl p-6 md:p-12 shadow-clay-card text-center">
      <div className="w-20 h-20 mx-auto bg-clay-lemon-500/20 text-clay-lemon-500 rounded-2xl flex items-center justify-center mb-6 border-2 border-clay-lemon-500">
        <FileText size={32} />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-ui-text mb-4">Printable Class Handout</h2>
      
      <p className="text-clay-charcoal mb-10 max-w-lg mx-auto leading-relaxed">
        Download a clean, single-page PDF of the diagnostic tool. Perfect for printing and sharing with your class or team. It includes all 15 questions and the scoring rubric.
      </p>

      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className="inline-flex items-center gap-3 px-8 py-4 bg-clay-lemon-500 border-2 border-clay-lemon-400 rounded-xl text-black font-bold uppercase tracking-wide hover-brutalist focus-dashed transition-all disabled:opacity-50"
      >
        <Download size={20} />
        {isGenerating ? 'Generating PDF...' : 'Download PDF'}
      </button>
    </div>
  );
}
