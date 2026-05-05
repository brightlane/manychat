function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // replace special characters
    .replace(/[^a-z0-9\s-]/g, "")
    // replace spaces with dashes
    .replace(/\s+/g, "-")
    // collapse multiple dashes
    .replace(/-+/g, "-");
}

// example usage
// console.log(slugify("Best CRM Software 2026!!"));

module.exports = slugify;
