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

document.addEventListener("gesturestart", (e) => {
    e.preventDefault();
}, { passive: false });

document.addEventListener("gesturechange", (e) => {
    e.preventDefault();
}, { passive: false });

let lastTouchEnd = 0;

document.addEventListener("touchend", (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });
