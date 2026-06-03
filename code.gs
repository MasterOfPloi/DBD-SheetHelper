function getImageUrl(name) {
    const base = "https://raw.githubusercontent.com/YourName/DBD-SheetHelper/main/images/";

    const files = {
      "Trapper": "Killers/Trapper.png",
      "Wraith": "Killers/Wraith.png"
    };

    return files[name] ? base + files[name] : null;
}

function onEdit(e) {
  const cell = e.range;
  const character = e.value;

  const url = getImageUrl(character);

  if (url) {
    cell.setFormula(`=IMAGE("${url}")`);
  }
}