document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission to server
    // Implement saving functionality here, like sending data to a server
    console.log("Save data");
});

function exportData() {
    // Implement export functionality here, like generating a CSV or PDF
    console.log("Export data");
}
