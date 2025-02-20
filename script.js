document.getElementById('downloadLink').addEventListener('click', function() {
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Resume-ayush'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
