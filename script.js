
const projectLinks = {
  knotted: './knotted/index.html',
  ezplan: 'https://www.figma.com/proto/B0AULf7xMKEK6BJB8Wkcov/APP-DESIGN?node-id=243-281&t=TuLsapNepo5rGfw7-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A5&starting-point-node-id=213%3A2126&show-proto-sidebar=1'
};

document.querySelectorAll('.web-link[data-link]').forEach(link => {
  const url = projectLinks[link.dataset.link];

  if (!url) return;

  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
