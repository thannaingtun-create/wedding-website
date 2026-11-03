/*
  WEDDING WEBSITE CUSTOMIZATION
  Update the details below with the couple's confirmed information.
  For the RSVP form to collect responses online, connect a form service.
  See README.md for the setup guide.
*/
const weddingConfig = {
  groomName: "မောင်အေးမင်းစိုး",
  brideName: "မခင်ချိုတင့်",
  dateText: "DATE TO BE ANNOUNCED",
  dateLong: "Date to be announced",
  timeText: "Time will be announced soon",
  venueName: "Venue to be announced",
  venueAddress: "Location details will be shared soon.",
  googleMapsUrl: "",
  dressCode: "Elegant & festive"
};

document.querySelectorAll(".name-placeholder").forEach((el, index) => {
  // The same couple names are repeated in the hero and closing section.
  el.textContent = index % 2 === 0 ? weddingConfig.groomName : weddingConfig.brideName;
});
document.getElementById("heroDate").textContent = weddingConfig.dateText;
document.getElementById("detailDate").textContent = weddingConfig.dateLong;
document.getElementById("detailTime").textContent = weddingConfig.timeText;
document.getElementById("detailVenue").textContent = weddingConfig.venueName;
document.getElementById("detailAddress").textContent = weddingConfig.venueAddress;
document.getElementById("dressCode").textContent = weddingConfig.dressCode;
const mapLink = document.getElementById("mapLink");
if (weddingConfig.googleMapsUrl) {
  mapLink.href = weddingConfig.googleMapsUrl;
  mapLink.hidden = false;
}

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
  });
});
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

// Front-end demo only: it does not save/send the RSVP anywhere.
document.getElementById("rsvpForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const guestName = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("formMessage");
  if (!guestName || !attendance) {
    message.textContent = "အမည်နဲ့ တက်ရောက်နိုင်မနိုင်ကို ဖြည့်ပေးပါ။";
    return;
  }
  const reply = attendance === "yes" ? "တက်ရောက်မည်" : "တက်ရောက်နိုင်မည် မဟုတ်ပါ";
  message.textContent = `ကျေးဇူးတင်ပါတယ် ${guestName}။ ${reply} ဟု ရွေးချယ်ထားပါတယ်။ ဒီ Demo မှာ အဖြေကို Online မသိမ်းဆည်းရသေးပါ။`;
  form.reset();
});
