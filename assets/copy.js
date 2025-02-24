
document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", function () {
        let codeBlock = this.closest(".code-container").querySelector("pre code"); // Select the correct code block
        let text = codeBlock.innerText; // Get the code text
        navigator.clipboard.writeText(text).then(() => {
            this.innerText = "Copied!";
            setTimeout(() => {
                this.innerText = "Copy";
            }, 1500);
        }).catch(err => console.error("Failed to copy:", err));
    });
});
