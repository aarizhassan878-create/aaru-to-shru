// Lots of falling hearts — more alive!
const emojis = ["❤️", "💖", "🩷", "💛", "🤍", "✨", "🌹", "🥰"];
setInterval(() => {
    let h = document.createElement("div");
    h.classList.add("heart");
    h.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = Math.random() * 8 + 8 + "s";
    h.style.fontSize = Math.random() * 30 + 35 + "px";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 16000);
}, 400);

// Countdown on page4 only
if (document.getElementById("days")) {
    const newYear = new Date("Jan 1, 2026 00:00:00").getTime();
    setInterval(() => {
        let now = new Date().getTime();
        let dist = newYear - now;
        if (dist < 0) {
            document.querySelector(".countdown").innerHTML = "<h2 style='font-size:2.5em; animation:pulse 2s infinite;'>Happy New Year 2026, My Love! 🎉🥂❤️</h2>";
            return;
        }
        document.getElementById("days").innerText = Math.floor(dist / (1000*60*60*24));
        document.getElementById("hours").innerText = Math.floor((dist % (1000*60*60*24)) / (1000*60*60));
        document.getElementById("minutes").innerText = Math.floor((dist % (1000*60*60)) / (1000*60));
        document.getElementById("seconds").innerText = Math.floor((dist % (1000*60)) / 1000);
    }, 1000);
}