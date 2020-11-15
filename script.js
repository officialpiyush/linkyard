console.log('Thanks Steph for an amazing idea - https://www.instagram.com/p/CE4twpLgf1a/');

console.log(
  'Feel free to check out the original developer who gave the idea to make own Link service - github: https://github.com/stephjs'
);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-CGPXSTF0RS');

async function handleLinks() {
  const res = await fetch("links.json").then(r => r.json());
  const mainDiv = document.getElementById("links-list");

  for (const [key, value] of Object.entries(res)) {
    $(mainDiv).append(
      `
      <a href="${value}" target="_blank" rel="noopener noreferrer">
        <div class="link-list-item">
          <p>${key}</p>
          <i class="ri-external-link-line"></i>
        </div>
      </a> <!-- Link End -->
    `.trim()
    );
  };
}

$(document).ready(function() {
  handleLinks();
});
