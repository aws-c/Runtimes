function openMainDownload() {
    window.location.href = 'main_download_url';
}

function openDownloadUrl(id) {
    const downloadUrlElement = document.getElementById(id);
    const downloadUrl = downloadUrlElement.innerText;
    window.open(downloadUrl, '_blank');
}

function copyDownloadLink(id) {
    const downloadUrlElement = document.getElementById(id);
    const downloadUrl = downloadUrlElement.innerText;

    navigator.clipboard.writeText(downloadUrl)
        .then(() => {
            alert("Download link copied to clipboard!");
        })
        .catch((error) => {
            console.error("Failed to copy: ", error);
        });
}
