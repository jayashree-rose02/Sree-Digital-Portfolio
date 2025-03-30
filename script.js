function downloadCV() {
    const link = document.createElement('a');
    link.href = 'new_cv.pdf'; // Change this to your new PDF file name
    link.download = 'Your_Updated_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
