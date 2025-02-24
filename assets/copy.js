document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const codeBlock = this.nextElementSibling.querySelector('code').innerText;
        navigator.clipboard.writeText(codeBlock).then(() => {
            this.innerHTML = "Copied!"; // Change to "Copied!"
            this.classList.add('copied');

            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-clipboard"></i>'; // Restore icon
                this.classList.remove('copied');
            }, 2000);
        });
    });
});
/*document.querySelectorAll(".copy-btn").forEach(button => {
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
});*/
