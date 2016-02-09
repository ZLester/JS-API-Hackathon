var pokemon = [
  {
    "number": 1,
    "name": "Bulbasaur",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Bulbasaur.png"
  },
  {
    "number": 2,
    "name": "Ivysaur",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Ivysaur.png"
  },
  {
    "number": 3,
    "name": "Venusaur",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Venusaur.png"
  },
  {
    "number": 4,
    "name": "Charmander",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Charmander.png"
  },
  {
    "number": 5,
    "name": "Charmeleon",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Charmeleon.png"
  },
  {
    "number": 6,
    "name": "Charizard",
    "types": ["Fire", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Charizard.png"
  },
  {
    "number": 7,
    "name": "Squirtle",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Squirtle.png"
  },
  {
    "number": 8,
    "name": "Wartortle",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Wartortle.png"
  },
  {
    "number": 9,
    "name": "Blastoise",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Blastoise.png"
  },
  {
    "number": 10,
    "name": "Caterpie",
    "types": ["Bug"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Caterpie.png"
  },
  {
    "number": 11,
    "name": "Metapod",
    "types": ["Bug"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Metapod.png"
  },
  {
    "number": 12,
    "name": "Butterfree",
    "types": ["Bug", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Butterfree.png"
  },
  {
    "number": 13,
    "name": "Weedle",
    "types": ["Bug", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Weedle.png"
  },
  {
    "number": 14,
    "name": "Kakuna",
    "types": ["Bug", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Kakuna.png"
  },
  {
    "number": 15,
    "name": "Beedrill",
    "types": ["Bug", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Beedrill.png"
  },
  {
    "number": 16,
    "name": "Pidgey",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Pidgey.png"
  },
  {
    "number": 17,
    "name": "Pidgeotto",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Pidgeotto.png"
  },
  {
    "number": 18,
    "name": "Pidgeot",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Pidgeot.png"
  },
  {
    "number": 19,
    "name": "Rattata",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Rattata.png"
  },
  {
    "number": 20,
    "name": "Raticate",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Raticate.png"
  },
  {
    "number": 21,
    "name": "Spearow",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Spearow.png"
  },
  {
    "number": 22,
    "name": "Fearow",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Fearow.png"
  },
  {
    "number": 23,
    "name": "Ekans",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Ekans.png"
  },
  {
    "number": 24,
    "name": "Arbok",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Arbok.png"
  },
  {
    "number": 25,
    "name": "Pikachu",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Pikachu.png"
  },
  {
    "number": 26,
    "name": "Raichu",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Raichu.png"
  },
  {
    "number": 27,
    "name": "Sandshrew",
    "types": ["Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Sandshrew.png"
  },
  {
    "number": 28,
    "name": "Sandslash",
    "types": ["Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Sandslash.png"
  },
  {
    "number": 29,
    "name": "Nidoran (♀)",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:NidoranF.png"
  },
  {
    "number": 30,
    "name": "Nidorina",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Nidorina.png"
  },
  {
    "number": 31,
    "name": "Nidoqueen",
    "types": ["Poison", "Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Nidoqueen.png"
  },
  {
    "number": 32,
    "name": "Nidoran (♂)",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:NidoranM.png"
  },
  {
    "number": 33,
    "name": "Nidorino",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Nidorino.png"
  },
  {
    "number": 34,
    "name": "Nidoking",
    "types": ["Poison", "Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Nidoking.png"
  },
  {
    "number": 35,
    "name": "Clefairy",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Clefairy.png"
  },
  {
    "number": 36,
    "name": "Clefable",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Clefable.png"
  },
  {
    "number": 37,
    "name": "Vulpix",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Vulpix.png"
  },
  {
    "number": 38,
    "name": "Ninetales",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Ninetales.png"
  },
  {
    "number": 39,
    "name": "Jigglypuff",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Jigglypuff.png"
  },
  {
    "number": 40,
    "name": "Wigglytuff",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Wigglytuff.png"
  },
  {
    "number": 41,
    "name": "Zubat",
    "types": ["Poison", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Zubat.png"
  },
  {
    "number": 42,
    "name": "Golbat",
    "types": ["Poison", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Golbat.png"
  },
  {
    "number": 43,
    "name": "Oddish",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Oddish.png"
  },
  {
    "number": 44,
    "name": "Gloom",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Gloom.png"
  },
  {
    "number": 45,
    "name": "Vileplume",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Vileplume.png"
  },
  {
    "number": 46,
    "name": "Paras",
    "types": ["Bug", "Grass"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Paras.png"
  },
  {
    "number": 47,
    "name": "Parasect",
    "types": ["Bug", "Grass"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Parasect.png"
  },
  {
    "number": 48,
    "name": "Venonat",
    "types": ["Bug", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Venonat.png"
  },
  {
    "number": 49,
    "name": "Venomoth",
    "types": ["Bug", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Venomoth.png"
  },
  {
    "number": 50,
    "name": "Diglett",
    "types": ["Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Diglett.png"
  },
  {
    "number": 51,
    "name": "Dugtrio",
    "types": ["Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Dugtrio.png"
  },
  {
    "number": 52,
    "name": "Meowth",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Meowth.png"
  },
  {
    "number": 53,
    "name": "Persian",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Persian.png"
  },
  {
    "number": 54,
    "name": "Psyduck",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Psyduck.png"
  },
  {
    "number": 55,
    "name": "Golduck",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Golduck.png"
  },
  {
    "number": 56,
    "name": "Mankey",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Mankey.png"
  },
  {
    "number": 57,
    "name": "Primeape",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Primeape.png"
  },
  {
    "number": 58,
    "name": "Growlithe",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Growlithe.png"
  },
  {
    "number": 59,
    "name": "Arcanine",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Arcanine.png"
  },
  {
    "number": 60,
    "name": "Poliwag",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Poliwag.png"
  },
  {
    "number": 61,
    "name": "Poliwhirl",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Poliwhirls.png"
  },
  {
    "number": 62,
    "name": "Poliwrath",
    "types": ["Water", "Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Poliwrath.png"
  },
  {
    "number": 63,
    "name": "Abra",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Abra.png"
  },
  {
    "number": 64,
    "name": "Kadabra",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Kadabra.png"
  },
  {
    "number": 65,
    "name": "Alakazam",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Alakazam.png"
  },
  {
    "number": 66,
    "name": "Machop",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Machop.png"
  },
  {
    "number": 67,
    "name": "Machoke",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Machoke.png"
  },
  {
    "number": 68,
    "name": "Machamp",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Machamp.png"
  },
  {
    "number": 69,
    "name": "Bellsprout",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Bellsprout.png"
  },
  {
    "number": 70,
    "name": "Weepinbell",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Weepinbell.png"
  },
  {
    "number": 71,
    "name": "Victreebel",
    "types": ["Grass", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Victreebel.png"
  },
  {
    "number": 72,
    "name": "Tentacool",
    "types": ["Water", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Tentacool.png"
  },
  {
    "number": 73,
    "name": "Tentacruel",
    "types": ["Water", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Tentacruel.png"
  },
  {
    "number": 74,
    "name": "Geodude",
    "types": ["Rock", "Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Geodudes.png"
  },
  {
    "number": 75,
    "name": "Graveler",
    "types": ["Rock", "Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Graveler.png"
  },
  {
    "number": 76,
    "name": "Golem",
    "types": ["Rock", "Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Golem.png"
  },
  {
    "number": 77,
    "name": "Ponyta",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Ponyta.png"
  },
  {
    "number": 78,
    "name": "Rapidash",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Rapidash.png"
  },
  {
    "number": 79,
    "name": "Slowpoke",
    "types": ["Water", "Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Slowpoke.png"
  },
  {
    "number": 80,
    "name": "Slowbro",
    "types": ["Water", "Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Slowbro.png"
  },
  {
    "number": 81,
    "name": "Magnemite",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Magnemite.png"
  },
  {
    "number": 82,
    "name": "Magneton",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Magneton.png"
  },
  {
    "number": 83,
    "name": "Farfetch'd",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Farfetchd.png"
  },
  {
    "number": 84,
    "name": "Doduo",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Doduo.png"
  },
  {
    "number": 85,
    "name": "Dodrio",
    "types": ["Normal", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Dodrio.png"
  },
  {
    "number": 86,
    "name": "Seel",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Seel.png"
  },
  {
    "number": 87,
    "name": "Dewgong",
    "types": ["Water", "Ice"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Dewgong.png"
  },
  {
    "number": 88,
    "name": "Grimer",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Grimer.png"
  },
  {
    "number": 89,
    "name": "Muk",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Muk.png"
  },
  {
    "number": 90,
    "name": "Shellder",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Shellder.png"
  },
  {
    "number": 91,
    "name": "Cloyster",
    "types": ["Water", "Ice"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Cloyster.png"
  },
  {
    "number": 92,
    "name": "Gastly",
    "types": ["Ghost", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Gastly.png"
  },
  {
    "number": 93,
    "name": "Haunter",
    "types": ["Ghost", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Haunter.png"
  },
  {
    "number": 94,
    "name": "Gengar",
    "types": ["Ghost", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Gengar.png"
  },
  {
    "number": 95,
    "name": "Onix",
    "types": ["Rock"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Onix.png"
  },
  {
    "number": 96,
    "name": "Drowzee",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Drowzee.png"
  },
  {
    "number": 97,
    "name": "Hypno",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Hypno.png"
  },
  {
    "number": 98,
    "name": "Krabby",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Krabby.png"
  },
  {
    "number": 99,
    "name": "Kingler",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Kingler.png"
  },
  {
    "number": 100,
    "name": "Voltorb",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Voltorb.png"
  },
  {
    "number": 101,
    "name": "Electrode",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Electrode.png"
  },
  {
    "number": 102,
    "name": "Exeggcute",
    "types": ["Grass", "Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Exeggcute.png"
  },
  {
    "number": 103,
    "name": "Exeggutor",
    "types": ["Grass", "Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Exeggutor.png"
  },
  {
    "number": 104,
    "name": "Cubone",
    "types": ["Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Cubone.png"
  },
  {
    "number": 105,
    "name": "Marowak",
    "types": ["Ground"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Marowak.png"
  },
  {
    "number": 106,
    "name": "Hitmonlee",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Hitmonlee.png"
  },
  {
    "number": 107,
    "name": "Hitmonchan",
    "types": ["Fighting"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Hitmonchan.png"
  },
  {
    "number": 108,
    "name": "Lickitung",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Lickitung.png"
  },
  {
    "number": 109,
    "name": "Koffing",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Koffing.png"
  },
  {
    "number": 110,
    "name": "Weezing",
    "types": ["Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Weezing.png"
  },
  {
    "number": 111,
    "name": "Rhyhorn",
    "types": ["Ground", "Rock"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Rhyhorn.png"
  },
  {
    "number": 112,
    "name": "Rhydon",
    "types": ["Ground", "Rock"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Rhydon.png"
  },
  {
    "number": 113,
    "name": "Chansey",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Chansey.png"
  },
  {
    "number": 114,
    "name": "Tangela",
    "types": ["Grass"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Tangela.png"
  },
  {
    "number": 115,
    "name": "Kangaskhan",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Kangaskhan.png"
  },
  {
    "number": 116,
    "name": "Horsea",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Horsea.png"
  },
  {
    "number": 117,
    "name": "Seadra",
    "types": ["Water", "Poison"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Seadra.png"
  },
  {
    "number": 118,
    "name": "Goldeen",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Goldeen.png"
  },
  {
    "number": 119,
    "name": "Seaking",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Seaking.png"
  },
  {
    "number": 120,
    "name": "Staryu",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Staryu.png"
  },
  {
    "number": 121,
    "name": "Starmie",
    "types": ["Water", "Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Starmie.png"
  },
  {
    "number": 122,
    "name": "Mr. Mime",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Mr_Mime.png"
  },
  {
    "number": 123,
    "name": "Scyther",
    "types": ["Bug", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Scyther.png"
  },
  {
    "number": 124,
    "name": "Jynx",
    "types": ["Ice", "Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Jynx.png"
  },
  {
    "number": 125,
    "name": "Electabuzz",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Electabuzz.png"
  },
  {
    "number": 126,
    "name": "Magmar",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Magmar.png"
  },
  {
    "number": 127,
    "name": "Pinsir",
    "types": ["Bug"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Pinsir.png"
  },
  {
    "number": 128,
    "name": "Tauros",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Tauros.png"
  },
  {
    "number": 129,
    "name": "Magikarp",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Magikarp.png"
  },
  {
    "number": 130,
    "name": "Gyarados",
    "types": ["Water", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Gyarados.png"
  },
  {
    "number": 131,
    "name": "Lapras",
    "types": ["Water", "Ice"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Lapras.png"
  },
  {
    "number": 132,
    "name": "Ditto",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Ditto.png"
  },
  {
    "number": 133,
    "name": "Eevee",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Eevee.png"
  },
  {
    "number": 134,
    "name": "Vaporeon",
    "types": ["Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Vaporeon.png"
  },
  {
    "number": 135,
    "name": "Jolteon",
    "types": ["Electric"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Jolteon.png"
  },
  {
    "number": 136,
    "name": "Flareon",
    "types": ["Fire"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Flareon.png"
  },
  {
    "number": 137,
    "name": "Porygon",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Porygon.png"
  },
  {
    "number": 138,
    "name": "Omanyte",
    "types": ["Rock", "Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Omanyte.png"
  },
  {
    "number": 139,
    "name": "Omastar",
    "types": ["Rock", "Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Omastar.png"
  },
  {
    "number": 140,
    "name": "Kabuto",
    "types": ["Rock", "Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Kabuto.png"
  },
  {
    "number": 141,
    "name": "Kabutops",
    "types": ["Rock", "Water"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Kabutops.png"
  },
  {
    "number": 142,
    "name": "Aerodactyl",
    "types": ["Rock", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Aerodactyl.png"
  },
  {
    "number": 143,
    "name": "Snorlax",
    "types": ["Normal"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Snorlax.png"
  },
  {
    "number": 144,
    "name": "Articuno",
    "types": ["Ice", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Articuno.png"
  },
  {
    "number": 145,
    "name": "Zapdos",
    "types": ["Electric", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Zapdos.png"
  },
  {
    "number": 146,
    "name": "Moltres",
    "types": ["Fire", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Moltres.png"
  },
  {
    "number": 147,
    "name": "Dratini",
    "types": ["Dragon"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Dratini.png"
  },
  {
    "number": 148,
    "name": "Dragonair",
    "types": ["Dragon"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Dragonair.png"
  },
  {
    "number": 149,
    "name": "Dragonite",
    "types": ["Dragon", "Flying"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Dragonite.png"
  },
  {
    "number": 150,
    "name": "Mewtwo",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Mewtwo.png"
  },
  {
    "number": 151,
    "name": "Mew",
    "types": ["Psychic"],
    "imageUrl": "http://nintendo.wikia.com/wiki/File:Mew.png"
  }
]