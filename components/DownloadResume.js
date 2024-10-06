import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';  // This loads the default Roboto font

// Load the default fonts into pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const DownloadResume = () => {
  const handleDownload = () => {
    const resumeElement = document.getElementById('resume-preview');
    const htmlContent = resumeElement.innerHTML;

    // Convert HTML to a PDFMake format
    const pdfMakeContent = htmlToPdfmake(htmlContent);
    const docDefinition = {
      content: pdfMakeContent,
      defaultStyle: {
        font: 'Roboto', // Use the default Roboto font
      },
    };

    // Generate and download the PDF
    pdfMake.createPdf(docDefinition).download('Quotation.pdf');
  };

  return (
    <button onClick={handleDownload}>
      Download Quotation
    </button>
  );
};

export default DownloadResume;
