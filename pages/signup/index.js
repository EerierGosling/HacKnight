import { useEffect } from "react";

export default Form = () => {
    useEffect(() => {
        const widgetScriptSrc = "https://tally.so/widgets/embed.js";

        const load = () => {
            // Check if Tally is defined on the window object
            if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
                window.Tally.loadEmbeds();
            } else {
                // Fallback if window.Tally is not available
                document
                    .querySelectorAll("iframe[data-tally-src]:not([src])")
                    .forEach((iframeEl) => {
                        iframeEl.src = iframeEl.dataset.tallySrc;
                    });
            }
        };

        // Load or reload Tally embeds if Tally is already defined
        if (window.Tally) {
            load();
            return;
        }

        // Add the script only if it's not already loaded
        if (!document.querySelector(`script[src="${widgetScriptSrc}"]`)) {
            const script = document.createElement("script");
            script.src = widgetScriptSrc;
            script.async = true;
            script.onload = load; // Handle successful loading
            script.onerror = () =>
                console.error("The Tally script failed to load."); // Handle script load errors
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div
            style={{
                background: "white",
                width: "100vw",
                height: "100vh",
                overflow: "auto",
            }}>
            <iframe
                data-tally-src="https://tally.so/r/wz1rea"
                loading="lazy"
                style={{
                    width: "100%", // Use 100% to ensure it fits the container
                    height: "100%", // Use 100% to fill the div container
                    border: "none", // Removes the default iframe border
                }}
                title="HacKnight Signup"></iframe>
        </div>
    );
};
