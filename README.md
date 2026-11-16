# DBD-SheetHelper
This simple Google Sheets Apps Script replaces instances of character names (both killer and survivor) with their respective pictures.

# Usage
This application needs to be entered into your Google Sheets Apps Script to work. The easiest way to do this is:
- Open the sheet you want to use this extension in
- Click on Extensions > Apps Script
- Copy Paste the contents of the code.gs file into the opened project (and delete the original function), then save the Apps Script
- Whenever you now edit a cell, it will convert the name of a killer, survivor, or map into an image of that killer, survivor, or map

# Aliases
Certain killers, survivors, or maps are known by multiple names. As such, the following names will convert into the name the system uses. This means that if you write an alias into a cell (e.g. Myers), it will automatically turn into the right name and image (e.g. Shape).
Killers:
- Myers -> Shape
- Leatherface -> Cannibal
- Freddy -> Nightmare
- Pyramidhead -> Executioner
- Pinhead -> Cenobite
- Sadako -> Onryo
- Wesker -> Mastermind
- Chucky -> GoodGuy
- Vecna -> Lich
- Dracula -> DarkLord
- Kaneki -> Ghoul
- Springtrap -> Animatronic
- Henry -> First
- Jason -> Slasher
- Art -> Terrifier

Maps:
- CT -> CoalTower
- Ironworks -> IronworksofMisery
- SuffoPit -> SuffocationPit
- Azarovs -> AzarovsRestingPlace
- Cowshed -> FracturedCowshed
- Chapel -> FatherCampbellsChapel
- Haddonfield -> LampkinLane
- Lerys -> TreatmentTheatre
- Temple -> TempleofPurgation
- Badham -> BadhamPreschool
- Sanctum -> SanctumofWrath
- Hawkins -> UndergroundComplex
- DDS -> DeadDawgSaloon
- Midwich -> MidwichElementarySchool
- RPDEast -> RaccoonCityPoliceStationEastWing
- RPDWest -> RaccoonCityPoliceStationWestWing
- Eyrie -> EyrieofCrows
- Greenville -> GreenvilleSquare
- Nostromo -> NostromoWreckage

# Legendary Skins (Survivors)
Some survivors have legendary skins that change their appearance significantly. These skins can be entered into a cell (e.g. Saga), and the system will automatically convert it into the underlying survivor (e.g. Alan). These names include:
Alan Wake:
- Rose
- Saga

Cheryl Mason:
- Cybil
- James
- Lisa
- Maria
- Hinako

Dustin Henderson:
- Eddie

Ellen Ripley:
- Rain
- William

Feng Min:
- 2B

Jill Valentine:
- Claire
- Sheva

Leon S. Kennedy:
- Carlos
- Chris

Michonne Grimes:
- Maggie

Nancy Wheeler:
- Robin

Renato Lyra:
- Tubarao

Rick Grimes:
- Daryl
- Glenn
- Negan

Steve Harrington:
- Jonathan

Trevor Belmont:
- Alucard
- Richter
- Soma

Vittorio Toscano:
- Geralt

Yui Kimura:
- A2

# Issues
- Certain killers, survivors, and maps may show black backgrounds and/or white or coloured fringes around the image. Certain maps may also appear to be slightly distorted. This seems mostly an issue with the images and I don't know whether it can be fixed.