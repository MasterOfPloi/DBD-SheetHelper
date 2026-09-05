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
        "Slasher", "Judgment"
    ];

    const survivors = [
        "Dwight", "Meg", "Claudette", "Jake", "Nea", "Laurie", "Ace",
        "Bill", "Feng", "David", "Quentin", "Tapp", "Kate", "Adam",
        "Jeff", "Jane", "Ash", "Nancy", "Steve", "Yui", "Zarina",
        "Cheryl", "Felix", "Elodie", "Yun-Jin", "Jill", "Leon", "Mikaela",
        "Jonah", "Yoichi", "Haddie", "Ada", "Rebecca", "Vittorio", "Thalita",
        "Renato", "Gabriel", "Nicolas", "Ellen", "Alan", "Sable", "Aestri",
        "Lara", "Trevor", "Taurie", "Orela", "Rick", "Michonne", "Vee",
        "Dustin", "Eleven", "Tae-Young", "Shane", "Aurora"
    ];

    const maps = [
        "CoalTower", "GroaningStorehouse", "IronworksofMisery", "ShelterWoods", "SuffocationPit",
        "AzarovsRestingPlace", "BloodLodge", "GasHeaven", "WreckersYard", "WretchedShop",
        "FracturedCowshed", "RancidAbattoir", "RottenFields", "ThompsonHouse", "TormentCreek",
        "DisturbedWard", "FatherCampbellsChapel",
        "LampkinLane",
        "PaleRose", "GrimPantry",
        "TreatmentTheatre",
        "MothersDwelling", "TempleofPurgation",
        "BadhamPreschool",
        "TheGame",
        "FamilyResidence", "SanctumofWrath",
        "MountOrmondResort", "OrmondLakeMine",
        "UndergroundComplex",
        "DeadDawgSaloon",
        "MidwichElementarySchool",
        "RPDEast", "RPDWest",
        "EyrieofCrows", "DeadSands",
        "GardenofJoy", "GreenvilleSquare", "FreddyFazbearsPizza", "FallenRefuge",
        "ShatteredSquare", "ForgottenRuins",
        "TobaLanding", "NostromoWreckage",
        "TrickstersDelusion"
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