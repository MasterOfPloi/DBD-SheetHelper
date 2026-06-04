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
    ];

    const maps = [
        "Coal Tower", "Groaning Storehouse", "Ironworks of Misery", "Shelter Woods", "Suffocation Pit",
        "Azarov's Resting Place", "Blood Lodge", "Gas Heaven", "Wreckers Yard", "Wretched Shop",
        "Fractured Cowshed", "Rancid Abattoir", "Rotten Fields", "Thompson House", "Torment Creek",
        "Disturbed Ward", "Father Campbell's Chapel",
        "Lampkin Lane",
        "The Pale Rose", "Grim Pantry",
        "Treatment Theatre",
        "Mother's Dwelling", "Temple of Purgation",
        "Badham Preschool",
        "The Game",
        "Family Residence", "Sanctum of Wrath",
        "Mount Ormond Resort", "Ormond Lake Mine",
        "The Underground Complex",
        "Dead Dawg Saloon",
        "Midwich Elementary School",
        "RPD East", "RPD West",
        "Eyrie of Crows", "Dead Sands",
        "Garden of Joy", "Greenville Square", "Freddy Fazbear's Pizza", "Fallen Refuge",
        "The Shattered Square", "Forgotten Ruins",
        "Toba Landing", "Nostromo Wreckage",
        "Trickster's Delusion"
    ];

    if(killers.includes(name))
    {
        folder = "Killers/";
    }
    else if(survivors.includes(name))
    {
        folder = "Survivors/";
    }
    else if(maps.includes(name))
    {
        folder = "Maps/"
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