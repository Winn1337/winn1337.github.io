async function loadHeader() {
  const res = await fetch("../header.html", {
    cache: "no-store"
  });
  const html = await res.text();
  document.getElementById("header").innerHTML = html;
}

loadHeader();
