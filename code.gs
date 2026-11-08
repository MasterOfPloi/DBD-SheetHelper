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
        "Slasher", "Judgment", "Terrifier"
    ];

    const survivors = [
        "Dwight", "Meg", "Claudette", "Jake", "Nea", "Laurie", "Ace",
        "Bill", "Feng", "David", "Quentin", "Tapp", "Kate", "Adam",
        "Jeff", "Jane", "Ash", "Nancy", "Steve", "Yui", "Zarina",
        "Cheryl", "Felix", "Elodie", "Yun-Jin", "Jill", "Leon", "Mikaela",
        "Jonah", "Yoichi", "Haddie", "Ada", "Rebecca", "Vittorio", "Thalita",
        "Renato", "Gabriel", "Nicolas", "Ellen", "Alan", "Sable", "Aestri",
        "Lara", "Trevor", "Taurie", "Orela", "Rick", "Michonne", "Vee",
        "Dustin", "Eleven", "Tae-Young", "Shane", "Aurora", "Sienna"
    ];

    const legendarySkins = {
    //Alan Wake skins
    "Rose": "Alan",
    "Saga": "Alan",
    
    //Cheryl Mason skins
    "Cybil": "Cheryl",
    "James": "Cheryl",
    "Lisa": "Cheryl",
    "Maria": "Cheryl",
    "Hinako": "Cheryl",

    //Ellen Ripley skins
    "Rain": "Ellen",
    "William": "Ellen",
    
    //Feng Min skins
    "2B": "Feng",

    //Jill Valentine skins
    "Claire": "Jill",
    "Sheva": "Jill",

    //Leon S. Kennedy skins
    "Carlos": "Leon",
    "Chris": "Leon",

    //Michonne Grimes skins
    "Maggie": "Michonne",

    //Nancy Wheeler skins
    "Robin": "Nancy",

    //Renato Lyra skins
    "Tubarao": "Renato",

    //Rick Grimes skins
    "Daryl": "Rick",
    "Glenn": "Rick",
    "Negan": "Rick",

    //Steve Harrington skins
    "Jonathan": "Steve",

    //Trevor Belmont skins
    "Alucard": "Trevor",
    "Richter": "Trevor",
    "Soma": "Trevor",

    //Vittorio Toscano skins
    "Geralt": "Vittorio",

    //Yui Kimura skins
    "A2": "Yui"
    }

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
        "TrickstersDelusion",
        "HartshorneMall"
    ];

    if(killers.includes(name))
    {
        folder = "Killers/";
    }
    else if(survivors.includes(name))
    {
        folder = "Survivors/";
    }
    else if (legendarySurvivors[name])
    {
        folder = "Survivors/";
        name = legendarySurvivors[name];
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