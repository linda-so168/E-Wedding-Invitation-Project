import html2canvas from 'html2canvas';

const downloadInvite = () => {
  const element = document.getElementById('invite-frame');
  html2canvas(element).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'wedding-invitation.png';
    link.href = canvas.toDataURL();
    link.click();
  });
};