// Update the couple and event details here before publishing.
const weddingConfig = {
  groomName: "မောင်အေးမင်းစိုး",
  brideName: "မခင်ချိုတင့်",
  dateText: "November 5, 2026",
  dateLong: "Thursday , November 5, 2026",
  timeText: "10:00 AM - `11:30 AM",
  venueName: "CAG ဧဝံဂေလိဘုရားကျောင်း ",
  venueAddress: "နေရာ — ၅၄ လမ်း၊ ၃၅ လမ်းနှင့် ၃၆ လမ်းကြား၊ CAG ဧဝံဂေလိဘုရားကျောင်း၊ မန္တလေးမြို။",
  googleMapsUrl: "",
  dressCode: "Elegant & festive"
};

document.addEventListener("DOMContentLoaded", () => {
  const put = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  put("groomHero", weddingConfig.groomName);
  put("brideHero", weddingConfig.brideName);
  put("heroDate", weddingConfig.dateText);
  put("dateLong", weddingConfig.dateLong);
  put("timeText", weddingConfig.timeText);
  put("venueName", weddingConfig.venueName);
  put("venueAddress", weddingConfig.venueAddress);
  put("dressCode", weddingConfig.dressCode);
  put("footerNames", `${weddingConfig.groomName} & ${weddingConfig.brideName}`);

  const map = document.getElementById("mapLink");
  if (weddingConfig.googleMapsUrl) { map.href = weddingConfig.googleMapsUrl; map.hidden = false; }

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));

  const buttons = [...document.querySelectorAll(".gallery-item")];
  const box = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  let current = 0;
  function show(i) {
    current = (i + buttons.length) % buttons.length;
    image.src = buttons[current].dataset.image;
    box.classList.add("open"); box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    box.classList.remove("open"); box.setAttribute("aria-hidden", "true");
    image.src = ""; document.body.style.overflow = "";
  }
  buttons.forEach((b, i) => b.addEventListener("click", () => show(i)));
  document.getElementById("lightboxClose").addEventListener("click", close);
  document.getElementById("lightboxPrev").addEventListener("click", () => show(current - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => show(current + 1));
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // Demo only: no response is sent to a server or saved online.
  document.getElementById("rsvpForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("guestName").value.trim();
    const answer = document.getElementById("attendance").value;
    if (!name || !answer) return;
    document.getElementById("rsvpMessage").textContent = answer === "yes"
      ? `ကျေးဇူးတင်ပါတယ် ${name}။ မင်္ဂလာပွဲမှာ တွေ့ဆုံဖို့ မျှော်လင့်နေပါတယ်။`
      : `အကြောင်းပြန်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ် ${name}။`;
    e.target.reset();
  });
});
