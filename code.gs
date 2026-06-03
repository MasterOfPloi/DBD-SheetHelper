function getImageUrl(name) {
    const base = "https://raw.githubusercontent.com/MasterOfPloi/DBD-SheetHelper/main/images/";

    let folder = "";

    const killers = [
        "Trapper", "Wraith", "Hillbilly", "Nurse", "Shape", "Hag", "Doctor",
        "Huntress", "Cannibal", "Nightmare", "Pig", "Clown", "Spirit", "Legion",
        "Plague", "GhostFace", "Demogorgon", "Oni", "Deathslinger", "Executioner", "Blight",
        "Twins", "Trickster", "Nemesis", "Cenobite", "Artist", "Onryo", "Dredge",
        "Mastermind", "Knight", "SkullMerchant", "Singularity", "Xenomorph", "GoodGuy", "Unknown",
        "Lich", "DarkLord", "Houndmaster", "Ghoul", "Animatronic", "Krasue", "First",
        "Slasher"
    ];

    const survivors = [
        "Dwight", "Meg", "Claudette", "Jake", "Nea", "Laurie", "Ace",
        "Bill", "Feng", "David", "Quentin", "Tapp", "Kate", "Adam",
        "Jeff", "Jane", "Ash", "Nancy", "Steve", "Yui", "Zarina",
        "Cheryl", "Felix", "Elodie", "Yun-Jin", "Jill", "Leon", "Mikaela",
        "Jonah", "Yoichi", "Haddie", "Ada", "Rebecca", "Vittorio", "Thalita",
        "Renato", "Gabriel", "Nicolas", "Ellen", "Alan", "Sable", "Aestri",
        "Lara", "Trevor", "Taurie", "Orela", "Rick", "Michonne", "Vee",
        "Dustin", "Eleven", "Tae-Young"
    ]

    if(killers.includes(name))
    {
        folder = "Killers/";
    }
    else if(survivors.includes(name))
    {
        folder = "Survivors/";
    }
    else
    {
        return null;
    }

    return base + folder + name + ".png";
}

function onEdit(e) {
  const cell = e.range;
  const character = e.value;

  const url = getImageUrl(character);

  if(!url)
  {
    return;
  }
  cell.setFormula(`=IMAGE("${url}")`);
  
}