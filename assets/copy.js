document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach(button => {
        button.innerHTML = "📋"; // Clipboard icon by default

        button.addEventListener("click", function () {
            const codeBlock = this.nextElementSibling.textContent;
            navigator.clipboard.writeText(codeBlock).then(() => {
                this.innerHTML = "✔️"; // Change to checkmark on success
                setTimeout(() => {
                    this.innerHTML = "📋"; // Revert back after 2 sec
                }, 2000);
            }).catch(err => console.error("Error copying text: ", err));
        });
    });
});
