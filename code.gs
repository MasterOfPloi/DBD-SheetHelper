function getImageUrl(name) {
    const base = "https://raw.githubusercontent.com/MasterOfPloi/DBD-SheetHelper/main/images/";

    const files = {
      "Trapper": "Killers/Trapper.png",
      "Wraith": "Killers/Wraith.png"
      "Hillbilly": "Killers/Hillbilly.png"
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