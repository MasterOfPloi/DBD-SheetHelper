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

    const killerAliases = {
      "Myers": "Shape",
      "Leatherface": "Cannibal",
      "Freddy": "Nightmare",
      "Pyramidhead": "Executioner",
      "Pinhead": "Cenobite",
      "Sadako": "Onryo",
      "Wesker": "Mastermind",
      "Chucky": "GoodGuy",
      "Vecna": "Lich",
      "Dracula": "DarkLord",
      "Kaneki": "Ghoul",
      "Springtrap": "Animatronic",
      "Henry": "First",
      "Jason": "Slasher",
      "Art": "Terrifier"
    };

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

    //Dustin Henderson skins
    "Eddie": "Dustin",

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
    };

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
        "RaccoonCityPoliceStationEastWing", "RaccoonCityPoliceStationWestWing",
        "EyrieofCrows", "DeadSands",
        "GardenofJoy", "GreenvilleSquare", "FreddyFazbearsPizza", "FallenRefuge",
        "ShatteredSquare", "ForgottenRuins",
        "TobaLanding", "NostromoWreckage",
        "TrickstersDelusion",
        "HartshorneMall"
    ];

    const mapAliases = {
      "CT": "CoalTower",
      "Ironworks": "IronworksofMisery",
      "SuffoPit": "SuffocationPit",
      "Azarovs": "AzarovsRestingPlace",
      "Cowshed": "FracturedCowshed",
      "Chapel":"FatherCampbellsChapel",
      "Haddonfield": "LampkinLane",
      "Lerys": "TreatmentTheatre",
      "Temple": "TempleofPurgation",
      "Badham": "BadhamPreschool",
      "Sanctum": "SanctumofWrath",
      "Hawkins": "UndergroundComplex",
      "DDS": "DeadDawgSaloon",
      "Midwich": "MidwichElementarySchool",
      "RPDEast": "RaccoonCityPoliceStationEastWing",
      "RPDWest": "RaccoonCityPoliceStationWestWing",
      "Eyrie": "EyrieofCrows",
      "Greenville": "GreenvilleSquare",
      "Nostromo": "NostromoWreckage"
    };

    if(killers.includes(name))
    {
        folder = "Killers/";
    }
    else if (killerAliases[name])
    {
      folder = "Killers/";
      name = killerAliases[name];
    }
    else if(survivors.includes(name))
    {
        folder = "Survivors/";
    }
    else if (legendarySkins[name])
    {
        folder = "Survivors/";
        name = legendarySkins[name];
    }
    else if(maps.includes(name))
    {
        folder = "Maps/";
    }
    else if(mapAliases[name])
    {
      folder = "Maps/";
      name = mapAliases[name];
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