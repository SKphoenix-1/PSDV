document.querySelectorAll('.run-btn').forEach(button => {
    button.addEventListener('click', function() {
        const codeBlock = this.parentElement.querySelector('code').innerText;
        
        // Find or create an output container below the code snippet
        let outputContainer = this.parentElement.querySelector('.code-output');
        if (!outputContainer) {
            outputContainer = document.createElement('div');
            outputContainer.className = 'code-output';
            this.parentElement.appendChild(outputContainer);
        }

        // Create an iframe for running the code
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        iframe.style.border = '1px solid #ccc';
        outputContainer.innerHTML = ''; // Clear previous output
        outputContainer.appendChild(iframe);

        // Inject the code into the iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(codeBlock);
        iframeDoc.close();
    });
});/*document.addEventListener("DOMContentLoaded", function () {
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
});*/
