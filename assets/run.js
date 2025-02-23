document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".run-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let codeBlock = this.nextElementSibling; // Get the <pre> block
            let code = codeBlock.textContent.trim(); // Extract the code

            // Find the output container
            let outputContainer = this.closest(".code-container").nextElementSibling;

            // Create an iframe to execute the code safely
            let iframe = document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "500px";
            iframe.style.border = "1px solid black";

            // Set iframe document content
            outputContainer.innerHTML = ""; // Clear previous output
            outputContainer.appendChild(iframe);
            let doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();
            doc.write(code);
            doc.close();
        });
    });
});
