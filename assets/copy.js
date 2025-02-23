document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const codeBlock = this.nextElementSibling.innerText;
            navigator.clipboard.writeText(codeBlock).then(() => {
                this.innerText = "Copied!";
                setTimeout(() => {
                    this.innerText = "Copy";
                }, 2000);
            }).catch(err => console.error("Error copying text: ", err));
        });
    });
});
