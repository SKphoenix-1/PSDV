document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".code-container pre code").forEach((codeBlock) => {
        let lines = codeBlock.innerHTML.split("\n"); // Split into lines
        let minIndent = Math.min(
            ...lines
                .filter(line => line.trim().length > 0) // Ignore empty lines
                .map(line => line.match(/^ */)[0].length) // Find leading spaces
        );

        // Remove common indentation from all line
        let formattedCode = lines.map(line => line.slice(minIndent)).join("\n");

        // Preserve code formatting safely
        codeBlock.innerHTML = formattedCode.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    });
});
