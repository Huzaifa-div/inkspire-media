const fs = require('fs');

const inkspireSvg = fs.readFileSync('public/trace-inkspire.svg', 'utf8');
const bothSvg = fs.readFileSync('public/trace-both.svg', 'utf8');

// The path commands start with M
function splitSubpaths(pathData) {
  // split on M, but keep M with each subpath
  return pathData.trim().split(/(?=M\s)/).filter(Boolean);
}

const matchInk = inkspireSvg.match(/d="([^"]+)"/);
const matchBoth = bothSvg.match(/d="([^"]+)"/);

if (matchInk && matchBoth) {
  const inkSubpaths = splitSubpaths(matchInk[1]);
  const bothSubpaths = splitSubpaths(matchBoth[1]);
  console.log('Ink subpaths count:', inkSubpaths.length);
  console.log('Both subpaths count:', bothSubpaths.length);

  // In the image, 'media' is located at the bottom (y > 175) and x between 140 and 315
  // Let's compute bounding box of each subpath in bothSubpaths
  function getSubpathBBox(sub) {
    const nums = sub.match(/[-+]?[0-9]*\.?[0-9]+/g);
    if (!nums || nums.length < 2) return null;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < nums.length; i += 2) {
      const x = parseFloat(nums[i]);
      const y = parseFloat(nums[i + 1]);
      if (!isNaN(x)) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
      }
      if (!isNaN(y)) {
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
    return { minX, maxX, minY, maxY };
  }

  const inkspirePaths = [];
  const mediaPaths = [];

  bothSubpaths.forEach((sub, i) => {
    const bbox = getSubpathBBox(sub);
    if (!bbox) return;
    // If y is predominantly below 180 and x < 312, it's 'media'!
    // Notice the 'p' descender has maxY > 200, but minY is up around 130-140!
    // The letters of 'media' (m, e, d, i, a) have minY > 175!
    if (bbox.minY > 175 && bbox.minX < 312 && !(bbox.minX > 310 && bbox.maxX < 325)) {
      mediaPaths.push(sub);
    } else {
      inkspirePaths.push(sub);
    }
  });

  console.log('Classified inkspire subpaths:', inkspirePaths.length);
  console.log('Classified media subpaths:', mediaPaths.length);

  // Let's create an SVG that renders inkspire in black/cream and media in gold!
  const combinedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="145 35 330 190" width="330" height="190">
  <!-- inkspire in current text color -->
  <path d="${inkspirePaths.join(' ')}" fill="currentColor" />
  <!-- media in shiny gold -->
  <path d="${mediaPaths.join(' ')}" fill="#C9A961" />
</svg>`;

  fs.writeFileSync('public/inkspire-media-exact.svg', combinedSvg);
  console.log('Generated public/inkspire-media-exact.svg successfully!');
}
