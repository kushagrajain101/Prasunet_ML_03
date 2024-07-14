document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const messageDiv = document.getElementById('message');

    uploadForm.addEventListener('submit', function (event) {
        if (fileInput.files.length === 0) {
            event.preventDefault();
            messageDiv.textContent = 'Please select a file to upload.';
        } else {
            messageDiv.textContent = '';
        }
    });
});
