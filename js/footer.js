async function loadFooter() {
  const res = await fetch("../footer.html", {
    cache: "no-store"
  });
  const html = await res.text();
  document.getElementById("footer").innerHTML = html;
}

loadFooter();
