function onEdit(e) {
  const cell = e.range;
  const value = e.value;

  const images = {
    "Trapper":
      "https://your-image-url/trapper.png"
  };

  if (images[value]) {
    cell.setFormula(`=IMAGE("${images[value]}")`);
  }
}