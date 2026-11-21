if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => {
                console.log("Service Worker successfully registered!");
            })
            .catch((error) => {
                console.log("Service Worker registration failed:", error);
            });
    });
}