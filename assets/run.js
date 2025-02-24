document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".run-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let codeBlock = this.nextElementSibling; // Get the <pre> block
            let code = codeBlock.innerText.trim(); // Extract the code

            // Find the output container (assumes there is a div for output after .code-container)
            let outputContainer = this.closest(".code-container").nextElementSibling;
            if (!outputContainer) {
                console.error("Output container not found.");
                return;
            }

            // Create an iframe to execute the code safely
            let iframe = document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "500px";
            iframe.style.border = "1px solid black";

            // Clear previous output and append new iframe
            outputContainer.innerHTML = "";
            outputContainer.appendChild(iframe);

            // Write code into the iframe
            let doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();
            doc.write(code);
            doc.close();
        });
    });
});
