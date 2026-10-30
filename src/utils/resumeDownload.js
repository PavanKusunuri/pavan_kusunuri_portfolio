/**
 * Triggers download of the resume from /public/Pavan_Kusunuri_Resume.pdf
 */
export const downloadResume = () => {
  const resumeUrl = "/Pavan_Kusunuri_Resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Pavan_Kusunuri_Resume_6YOE_Fullstack.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
