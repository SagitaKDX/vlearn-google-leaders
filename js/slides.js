    const slides = [...document.querySelectorAll(".slide")];
    const parts = [...document.querySelectorAll(".rail button")];
    const count = document.getElementById("count");
    let i = 0;
    const show = (n) => {
      i = Math.max(0, Math.min(slides.length - 1, n));
      slides.forEach((s, k) => s.classList.toggle("active", k === i));
      const part = slides[i].dataset.part;
      parts.forEach((b, k) => b.classList.toggle("active", String(k) === part));
      const total = String(slides.length).padStart(2, "0");
      count.textContent = String(i + 1).padStart(2, "0") + " / " + total;
    };
    parts.forEach((b) => b.addEventListener("click", () => show(Number(b.dataset.go))));
    window.addEventListener("keydown", (e) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        show(i + 1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        show(i - 1);
      } else if (e.key === "Home") show(0);
      else if (e.key === "End") show(slides.length - 1);
    });
    document.addEventListener("click", (e) => {
      if (e.target.closest("button, a, header")) return;
      if (e.clientX > innerWidth * 0.78) show(i + 1);
      else if (e.clientX < innerWidth * 0.22) show(i - 1);
    });
    show(0);
  
