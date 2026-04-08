import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { assessmentMethodNote, assessmentQuestionBank } from '../data/content';
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
      doc.text('MBI-GS inspired educational screener', 14, 26);

      // Instructions
      doc.setFontSize(11);
      doc.text('Instructions: For each statement, circle the number that best describes how often you feel this way:', 14, 36);
      doc.setFont('helvetica', 'bold');
      doc.text('0 = Never   1 = Few/year   2 = Monthly   3 = Few/month   4 = Weekly   5 = Few/week   6 = Daily', 14, 42);

      // Table Data
      const tableData = assessmentQuestionBank.map((q, i) => [
        `${i + 1}. ${q.t}`,
        '0', '1', '2', '3', '4', '5', '6'
      ]);

      // Generate Table
      autoTable(doc, {
        startY: 48,
        head: [['Statement', '0', '1', '2', '3', '4', '5', '6']],
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
          1: { cellWidth: 9, halign: 'center' },
          2: { cellWidth: 9, halign: 'center' },
          3: { cellWidth: 9, halign: 'center' },
          4: { cellWidth: 9, halign: 'center' },
          5: { cellWidth: 9, halign: 'center' },
          6: { cellWidth: 9, halign: 'center' },
          7: { cellWidth: 9, halign: 'center' },
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
      doc.text('Use the in-app result page for weighted subscale scoring, consistency checks, and confidence level.', 14, finalY + 16);
      doc.text('This printable form is for reflection and discussion, not diagnosis.', 14, finalY + 22);

      doc.setFontSize(8);
      doc.text(assessmentMethodNote, 14, finalY + 30, { maxWidth: 180 });

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
        Download a printable reflection version of the screening tool. It includes the full expanded question set and frequency options.
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
