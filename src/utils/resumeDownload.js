/**
 * Utility function to handle resume download
 * Triggers a download of the resume PDF file
 */
export const downloadResume = () => {
  const resumeUrl = "/Pavan_Kusunuri_Resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Pavan_Kusunuri_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
