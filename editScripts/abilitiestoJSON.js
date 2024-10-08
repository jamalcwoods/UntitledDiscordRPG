const fs = require('fs');
let inData = require('../data.json')

let Blocks = [
  {
    "name": "Defensive Stance",
    "allowanceCost": 2,
    "guard_val": 30,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 57,
    "action_type": "guard",
    "wildUse": 1,
    "value": 25
  },
  {
    "name": "Heightened Senses",
    "allowanceCost": 2,
    "guard_val": 30,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "spdef",
    "guard_type": "def",
    "speed": 3,
    "id": 56,
    "action_type": "guard",
    "wildUse": 1,
    "value": 50
  },
  {
    "name": "Protecting Aura",
    "allowanceCost": 3,
    "guard_val": 50,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "spdef",
    "guard_type": "spdef",
    "speed": 3,
    "id": 55,
    "action_type": "guard",
    "wildUse": 1,
    "value": 70
  },
  {
    "name": "Reflective Radiance",
    "allowanceCost": 3,
    "guard_val": 40,
    "success_level": 90,
    "counter_val": 30,
    "counter_type": "spdef",
    "guard_type": "spdef",
    "speed": 3,
    "id": 54,
    "action_type": "guard",
    "wildUse": 1,
    "value": 73
  },
  {
    "name": "Battle Hardened",
    "allowanceCost": 3,
    "guard_val": 50,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 53,
    "action_type": "guard",
    "wildUse": 1,
    "value": 70
  },
  {
    "name": "Counter Clash",
    "allowanceCost": 3,
    "guard_val": 30,
    "success_level": 90,
    "counter_val": 35,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 52,
    "action_type": "guard",
    "wildUse": 1,
    "value": 67
  },
  {
    "name": "Protecting Aura",
    "allowanceCost": 2,
    "guard_val": 30,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "spdef",
    "guard_type": "spdef",
    "speed": 3,
    "id": 51,
    "action_type": "guard",
    "wildUse": 1,
    "value": 25
  },
  {
    "name": "Guardian Aura",
    "allowanceCost": 2,
    "guard_val": 20,
    "success_level": 90,
    "counter_val": 20,
    "counter_type": "spdef",
    "guard_type": "spdef",
    "speed": 3,
    "id": 50,
    "action_type": "guard",
    "wildUse": 1,
    "value": 25
  },
  {
    "name": "Shielding Aura",
    "allowanceCost": 2,
    "guard_val": 25,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "spdef",
    "guard_type": "spdef",
    "speed": 3,
    "id": 49,
    "action_type": "guard",
    "wildUse": 1,
    "value": 35
  },
  {
    "name": "Light Guard",
    "allowanceCost": 2,
    "guard_val": 15,
    "success_level": 400,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 48,
    "action_type": "guard",
    "wildUse": 1,
    "value": 32
  },
  {
    "name": "Counter Stance",
    "allowanceCost": 2,
    "guard_val": 20,
    "success_level": 90,
    "counter_val": 20,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 47,
    "action_type": "guard",
    "wildUse": 1,
    "value": 25
  },
  {
    "name": "Resist Stance",
    "allowanceCost": 2,
    "guard_val": 25,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 46,
    "action_type": "guard",
    "wildUse": 1,
    "value": 35
  },
  {
    "name": "Lasting Endurance",
    "allowanceCost": 3,
    "guard_val": 30,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 32,
    "action_type": "guard",
    "wildUse": 0,
    "value": 50
  },
  {
    "name": "Unflinching Stance",
    "allowanceCost": 2,
    "guard_val": 25,
    "success_level": 200,
    "counter_val": 10,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 31,
    "action_type": "guard",
    "wildUse": 0,
    "value": 43
  },
  {
    "name": "Tuck In",
    "allowanceCost": 2,
    "guard_val": 40,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 30,
    "action_type": "guard",
    "wildUse": 0,
    "value": 45
  },
  {
    "name": "Ignorant Thrash",
    "allowanceCost": 2,
    "guard_val": 25,
    "success_level": 90,
    "counter_val": 30,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 25,
    "action_type": "guard",
    "wildUse": 0,
    "value": 49
  },
  {
    "name": "Shell Brace",
    "allowanceCost": 3,
    "guard_val": 30,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 24,
    "action_type": "guard",
    "wildUse": 0,
    "value": 50
  },
  {
    "name": "Prideful Stance",
    "allowanceCost": 2,
    "guard_val": 40,
    "success_level": 100,
    "counter_val": 10,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 22,
    "action_type": "guard",
    "wildUse": 0,
    "value": 49
  },
  {
    "name": "Tough Shell",
    "allowanceCost": 3,
    "guard_val": 35,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 21,
    "action_type": "guard",
    "wildUse": 0,
    "value": 69
  },
  {
    "name": "Instinctual Flail",
    "allowanceCost": 2,
    "guard_val": 30,
    "success_level": 100,
    "counter_val": 20,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 16,
    "action_type": "guard",
    "wildUse": 0,
    "value": 41
  },
  {
    "name": "Frantic Retaliation",
    "allowanceCost": 2,
    "guard_val": 20,
    "success_level": 100,
    "counter_val": 30,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 10,
    "action_type": "guard",
    "wildUse": 0,
    "value": 48
  },
  {
    "name": "Ink Field",
    "allowanceCost": 2,
    "guard_val": 40,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "spdef",
    "guard_type": "spdef",
    "speed": 3,
    "id": 9,
    "action_type": "guard",
    "wildUse": 0,
    "value": 45
  },
  {
    "name": "Coiling Constriction",
    "allowanceCost": 2,
    "guard_val": 30,
    "success_level": 100,
    "counter_val": 20,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 6,
    "action_type": "guard",
    "wildUse": 0,
    "value": 41
  },
  {
    "name": "Feral Shudder",
    "allowanceCost": 2,
    "guard_val": 30,
    "success_level": 100,
    "counter_val": 20,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 1,
    "action_type": "guard",
    "wildUse": 0,
    "value": 41
  },
  {
    "name": "Darkened Veil",
    "allowanceCost": 4,
    "guard_val": 60,
    "success_level": 100,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "spdef",
    "speed": 3,
    "id": 70,
    "action_type": "guard",
    "wildUse": 0,
    "value": 100
  },
  {
    "name": "Enduring Fury",
    "allowanceCost": 4,
    "guard_val": 35,
    "success_level": 100,
    "counter_val": 40,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 71,
    "action_type": "guard",
    "wildUse": 0,
    "value": 99
  },
  {
    "name": "Clever Parry",
    "allowanceCost": 4,
    "guard_val": 20,
    "success_level": 200,
    "counter_val": 30,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 72,
    "action_type": "guard",
    "wildUse": 0,
    "value": 95
  },
  {
    "name": "Steady Eye",
    "allowanceCost": 4,
    "guard_val": 40,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 73,
    "action_type": "guard",
    "wildUse": 0,
    "value": 89
  },
  {
    "name": "Ancient Protection",
    "allowanceCost": 4,
    "guard_val": 40,
    "success_level": 200,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "spdef",
    "speed": 3,
    "id": 74,
    "action_type": "guard",
    "wildUse": 0,
    "value": 89
  },
  {
    "name": "Watcher's Sense",
    "allowanceCost": 4,
    "guard_val": 70,
    "success_level": 70,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "def",
    "speed": 3,
    "id": 75,
    "action_type": "guard",
    "wildUse": 0,
    "value": 96
  },
  {
    "name": "Nature's Protection",
    "allowanceCost": 4,
    "guard_val": 70,
    "success_level": 70,
    "counter_val": 0,
    "counter_type": "def",
    "guard_type": "spdef",
    "speed": 3,
    "id": 76,
    "action_type": "guard",
    "wildUse": 0,
    "value": 96
  },
  {
    "name": "Caregiver's Veil",
    "allowanceCost": 4,
    "guard_val": 35,
    "success_level": 100,
    "counter_val": 40,
    "counter_type": "def",
    "guard_type": "spdef",
    "speed": 3,
    "id": 77,
    "action_type": "guard",
    "wildUse": 0,
    "value": 99
  }
]
let Attacks = [
  {
    "name": "Harmful Outcry",
    "allowanceCost": 1,
    "damage_type": "spatk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 59,
    "cal": "attack",
    "wildUse": 1,
    "value": 25
  },
  {
    "name": "Light Attack",
    "allowanceCost": 1,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 58,
    "cal": "attack",
    "wildUse": 1,
    "value": 25
  },
  {
    "name": "Elemental Surge",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 20,
    "speed": 0,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 30,
    "targetType": 2,
    "id": 45,
    "cal": "attack",
    "wildUse": 1,
    "value": 72
  },
  {
    "name": "Spirit Rush",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 20,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 20,
    "recoil": 0,
    "targetType": 1,
    "id": 44,
    "cal": "attack",
    "wildUse": 1,
    "value": 73
  },
  {
    "name": "Beat Down",
    "allowanceCost": 4,
    "damage_type": "atk",
    "damage_val": 10,
    "speed": 1,
    "stance": "none",
    "accuracy": 90,
    "numHits": 6,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 43,
    "cal": "attack",
    "wildUse": 1,
    "value": 93
  },
  {
    "name": "Precision Strike",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 30,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 20,
    "recoil": 10,
    "targetType": 1,
    "id": 42,
    "cal": "attack",
    "wildUse": 1,
    "value": 75
  },
  {
    "name": "Fleeting Sparks",
    "allowanceCost": 2,
    "damage_type": "spatk",
    "damage_val": 15,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 41,
    "cal": "attack",
    "wildUse": 1,
    "value": 34
  },
  {
    "name": "Malevolent Burst",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 50,
    "speed": 1,
    "stance": "none",
    "accuracy": 80,
    "numHits": 1,
    "critical": 0,
    "recoil": 45,
    "targetType": 1,
    "id": 40,
    "cal": "attack",
    "wildUse": 1,
    "value": 72
  },
  {
    "name": "Rune Pulse",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 35,
    "speed": 1,
    "stance": "none",
    "accuracy": 95,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 39,
    "cal": "attack",
    "wildUse": 1,
    "value": 73
  },
  {
    "name": "Agile Attack",
    "allowanceCost": 2,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 38,
    "cal": "attack",
    "wildUse": 1,
    "value": 34
  },
  {
    "name": "Brutal Blow",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 50,
    "speed": 0,
    "stance": "none",
    "accuracy": 60,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 37,
    "cal": "attack",
    "wildUse": 1,
    "value": 75
  },
  {
    "name": "Standard Strike",
    "allowanceCost": 2,
    "damage_type": "atk",
    "damage_val": 25,
    "speed": 1,
    "stance": "none",
    "accuracy": 90,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 36,
    "cal": "attack",
    "wildUse": 1,
    "value": 36
  },
  {
    "name": "Tactical Takedown",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 40,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 35,
    "recoil": 60,
    "targetType": 1,
    "id": 35,
    "cal": "attack",
    "wildUse": 0,
    "value": 73
  },
  {
    "name": "Rolling Tackle",
    "allowanceCost": 4,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 1,
    "stance": "none",
    "accuracy": 90,
    "numHits": 3,
    "critical": 30,
    "recoil": 10,
    "targetType": 1,
    "id": 34,
    "cal": "attack",
    "wildUse": 0,
    "value": 93
  },
  {
    "name": "Spout Shot",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 35,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 30,
    "recoil": 0,
    "targetType": 1,
    "id": 33,
    "cal": "attack",
    "wildUse": 0,
    "value": 125
  },
  {
    "name": "Delirious Fluttering",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 80,
    "numHits": 1,
    "critical": 0,
    "recoil": 30,
    "targetType": 2,
    "id": 29,
    "cal": "attack",
    "wildUse": 0,
    "value": 72
  },
  {
    "name": "Head Charge",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 65,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 60,
    "recoil": 80,
    "targetType": 1,
    "id": 28,
    "cal": "attack",
    "wildUse": 0,
    "value": 124
  },
  {
    "name": "Rapid Chatter",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 15,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 3,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 27,
    "cal": "attack",
    "wildUse": 0,
    "value": 70
  },
  {
    "name": "Dire Strikes",
    "allowanceCost": 4,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 2,
    "critical": 80,
    "recoil": 0,
    "targetType": 1,
    "id": 26,
    "cal": "attack",
    "wildUse": 0,
    "value": 82
  },
  {
    "name": "Harrowing Howls",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 10,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 3,
    "critical": 55,
    "recoil": 0,
    "targetType": 1,
    "id": 20,
    "cal": "attack",
    "wildUse": 0,
    "value": 60
  },
  {
    "name": "Preying Pounce",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 30,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 20,
    "recoil": 60,
    "targetType": 1,
    "id": 19,
    "cal": "attack",
    "wildUse": 0,
    "value": 71
  },
  {
    "name": "Sudden Snap",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 18,
    "cal": "attack",
    "wildUse": 0,
    "value": 61
  },
  {
    "name": "Scurrying Scratches",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 10,
    "speed": 1,
    "stance": "none",
    "accuracy": 90,
    "numHits": 4,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 17,
    "cal": "attack",
    "wildUse": 0,
    "value": 52
  },
  {
    "name": "Irritating Echoes",
    "allowanceCost": 3,
    "damage_type": "spatk",
    "damage_val": 10,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 100,
    "recoil": 0,
    "targetType": 2,
    "id": 15,
    "cal": "attack",
    "wildUse": 0,
    "value": 71
  },
  {
    "name": "Crooked Claws",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 50,
    "speed": 1,
    "stance": "none",
    "accuracy": 80,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 14,
    "cal": "attack",
    "wildUse": 0,
    "value": 125
  },
  {
    "name": "Sliding Assault",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 4,
    "stance": "none",
    "accuracy": 90,
    "numHits": 1,
    "critical": 0,
    "recoil": 30,
    "targetType": 1,
    "id": 13,
    "cal": "attack",
    "wildUse": 0,
    "value": 73
  },
  {
    "name": "Rapid Pecks",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 10,
    "speed": 1,
    "stance": "none",
    "accuracy": 80,
    "numHits": 3,
    "critical": 75,
    "recoil": 0,
    "targetType": 1,
    "id": 12,
    "cal": "attack",
    "wildUse": 0,
    "value": 52
  },
  {
    "name": "Disturbing Buzz",
    "allowanceCost": 4,
    "damage_type": "spatk",
    "damage_val": 25,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 100,
    "recoil": 0,
    "targetType": 1,
    "id": 11,
    "cal": "attack",
    "wildUse": 0,
    "value": 88
  },
  {
    "name": "Rapid Fangs",
    "allowanceCost": 2,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 2,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 8,
    "cal": "attack",
    "wildUse": 0,
    "value": 47
  },
  {
    "name": "Sucker Slap",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 10,
    "speed": 4,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 15,
    "recoil": 0,
    "targetType": 1,
    "id": 7,
    "cal": "attack",
    "wildUse": 0,
    "value": 68
  },
  {
    "name": "Frantic Bites",
    "allowanceCost": 4,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 2,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 5,
    "cal": "attack",
    "wildUse": 0,
    "value": 83
  },
  {
    "name": "Prideful Pursuit",
    "allowanceCost": 4,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 120,
    "numHits": 1,
    "critical": 35,
    "recoil": 0,
    "targetType": 1,
    "id": 4,
    "cal": "attack",
    "wildUse": 0,
    "value": 92
  },
  {
    "name": "Lurking Sting",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 50,
    "recoil": 25,
    "targetType": 1,
    "id": 3,
    "cal": "attack",
    "wildUse": 0,
    "value": 71
  },
  {
    "name": "Burrowing Strike",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 4,
    "stance": "none",
    "accuracy": 85,
    "numHits": 1,
    "critical": 0,
    "recoil": 60,
    "targetType": 1,
    "id": 2,
    "cal": "attack",
    "wildUse": 0,
    "value": 74
  },
  {
    "name": "Reckless Rush",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 25,
    "speed": 4,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 80,
    "targetType": 1,
    "id": 1,
    "cal": "attack",
    "wildUse": 0,
    "value": 75
  },
  {
    "name": "Sudden Hop",
    "allowanceCost": 3,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 2,
    "stance": "none",
    "accuracy": 80,
    "numHits": 1,
    "critical": 50,
    "recoil": 0,
    "targetType": 1,
    "id": 0,
    "cal": "attack",
    "wildUse": 0,
    "value": 75
  },
  {
    "name": "Defiled Chant",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 50,
    "speed": 1,
    "stance": "none",
    "accuracy": 95,
    "numHits": 1,
    "critical": 0,
    "recoil": 20,
    "targetType": 1,
    "id": 78,
    "cal": "attack",
    "wildUse": 0,
    "value": 121
  },
  {
    "name": "Spirit's Vengeance",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 45,
    "speed": 1,
    "stance": "none",
    "accuracy": 80,
    "numHits": 1,
    "critical": 40,
    "recoil": 35,
    "targetType": 1,
    "id": 79,
    "cal": "attack",
    "wildUse": 0,
    "value": 119
  },
  {
    "name": "Miasmic Rupture",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 30,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 30,
    "targetType": 3,
    "id": 80,
    "cal": "attack",
    "wildUse": 0,
    "value": 121
  },
  {
    "name": "Bitter Bash",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 40,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 81,
    "cal": "attack",
    "wildUse": 0,
    "value": 121
  },
  {
    "name": "Trampling Rush",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 30,
    "speed": 2,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 20,
    "recoil": 30,
    "targetType": 1,
    "id": 82,
    "cal": "attack",
    "wildUse": 0,
    "value": 117
  },
  {
    "name": "Keen Bolt",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 35,
    "speed": 1,
    "stance": "none",
    "accuracy": 110,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 83,
    "cal": "attack",
    "wildUse": 0,
    "value": 113
  },
  {
    "name": "Pilfering Slashes",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 3,
    "critical": 40,
    "recoil": 0,
    "targetType": 1,
    "id": 84,
    "cal": "attack",
    "wildUse": 0,
    "value": 123
  },
  {
    "name": "Relentless Strike",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 30,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 90,
    "recoil": 0,
    "targetType": 1,
    "id": 85,
    "cal": "attack",
    "wildUse": 0,
    "value": 123
  },
  {
    "name": "Decimator's Risk",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 70,
    "speed": 1,
    "stance": "none",
    "accuracy": 90,
    "numHits": 1,
    "critical": 0,
    "recoil": 60,
    "targetType": 1,
    "id": 86,
    "cal": "attack",
    "wildUse": 0,
    "value": 119
  },
  {
    "name": "Pacifying Pulse",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 2,
    "id": 87,
    "cal": "attack",
    "wildUse": 0,
    "value": 125
  },
  {
    "name": "Essence Projection",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 40,
    "speed": 1,
    "stance": "none",
    "accuracy": 90,
    "numHits": 1,
    "critical": 15,
    "recoil": 0,
    "targetType": 1,
    "id": 88,
    "cal": "attack",
    "wildUse": 0,
    "value": 122
  },
  {
    "name": "Hurried Shove",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 20,
    "speed": 4,
    "stance": "none",
    "accuracy": 100,
    "numHits": 1,
    "critical": 0,
    "recoil": 40,
    "targetType": 1,
    "id": 89,
    "cal": "attack",
    "wildUse": 0,
    "value": 124
  },
  {
    "name": "Divine Blade",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 40,
    "speed": 1,
    "stance": "none",
    "accuracy": 75,
    "numHits": 1,
    "critical": 30,
    "recoil": 0,
    "targetType": 1,
    "id": 90,
    "cal": "attack",
    "wildUse": 0,
    "value": 122
  },
  {
    "name": "Titan's Roar",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 20,
    "speed": 1,
    "stance": "none",
    "accuracy": 75,
    "numHits": 1,
    "critical": 20,
    "recoil": 10,
    "targetType": 2,
    "id": 91,
    "cal": "attack",
    "wildUse": 0,
    "value": 124
  },
  {
    "name": "Graceful Strikes",
    "allowanceCost": 5,
    "damage_type": "atk",
    "damage_val": 15,
    "speed": 1,
    "stance": "none",
    "accuracy": 110,
    "numHits": 3,
    "critical": 10,
    "recoil": 0,
    "targetType": 1,
    "id": 92,
    "cal": "attack",
    "wildUse": 0,
    "value": 125
  },
  {
    "name": "Nature's Revenge",
    "allowanceCost": 5,
    "damage_type": "spatk",
    "damage_val": 50,
    "speed": 1,
    "stance": "none",
    "accuracy": 80,
    "numHits": 1,
    "critical": 0,
    "recoil": 0,
    "targetType": 1,
    "id": 93,
    "cal": "attack",
    "wildUse": 0,
    "value": 125
  }
]
let Status = [
  {
    "name": "Battle Posture",
    "allowanceCost": 2,
    "id": 60,
    "focus": 70,
    "speed": 0,
    "t1": 0,
    "s1": "atk",
    "v1": 1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Combat Focus",
    "allowanceCost": 2,
    "id": 61,
    "focus": 70,
    "speed": 0,
    "t1": 0,
    "s1": "spatk",
    "v1": 1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Up Tempo",
    "allowanceCost": 2,
    "id": 62,
    "focus": 70,
    "speed": 1,
    "t1": 0,
    "s1": "spd",
    "v1": 1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Intimidate",
    "allowanceCost": 3,
    "id": 63,
    "focus": 75,
    "speed": 1,
    "t1": 2,
    "s1": "atk",
    "v1": -1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Cower",
    "allowanceCost": 3,
    "id": 64,
    "focus": 75,
    "speed": 1,
    "t1": 2,
    "s1": "spatk",
    "v1": -1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Glare",
    "allowanceCost": 3,
    "id": 65,
    "focus": 70,
    "speed": 1,
    "t1": 2,
    "s1": "def",
    "v1": -1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Startle",
    "allowanceCost": 3,
    "id": 66,
    "focus": 70,
    "speed": 1,
    "t1": 2,
    "s1": "spdef",
    "v1": -1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Gaze",
    "allowanceCost": 2,
    "id": 67,
    "focus": 70,
    "speed": 1,
    "t1": 2,
    "s1": "spd",
    "v1": -1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Brace",
    "allowanceCost": 2,
    "id": 68,
    "focus": 55,
    "speed": 2,
    "t1": 0,
    "s1": "def",
    "v1": 1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  },
  {
    "name": "Sharp Mind",
    "allowanceCost": 2,
    "id": 69,
    "focus": 55,
    "speed": 2,
    "t1": 0,
    "s1": "spdef",
    "v1": 1,
    "t2": 0,
    "s2": 0,
    "v2": 0,
    "t3": 0,
    "s3": 0,
    "v3": 0,
    "wildUse": 1
  }
]


for(ability of Attacks){
  let newAbility = {
      "critical" : ability.critical,
      "damage_type" : ability.damage_type,
      "damage_val" : ability.damage_val,
      "name" : ability.name,
      "speed" : ability.speed,
      "stance" : ability.stance,
      "action_type":"attack",
      "accuracy":ability.accuracy,
      "numHits":ability.numHits,
      "recoil":ability.recoil,
      "targetType":ability.targetType
  }
  newAbility = {
    "allowanceCost":ability.allowanceCost,
    "ability":newAbility,
    "id":ability.id,
    "wildUse":ability.wildUse
  }
  if(newAbility.id == "none"){
    newAbility.id = inData.baseAbilities.length
  }
  inData.baseAbilities[newAbility.id] = newAbility
}

for(ability of Blocks){
  newAbility = {
      "action_type":"guard",
      "name":ability.name,
      "guard_val":ability.guard_val,
      "guard_type":ability.guard_type,
      "success_level":ability.success_level,
      "counter_val":ability.counter_val,
      "counter_type":ability.counter_type,
      "speed":ability.speed
  }
  newAbility = {
    "allowanceCost":ability.allowanceCost,
    "ability":newAbility,
    "id":ability.id,
    "wildUse":ability.wildUse
  }
  if(newAbility.id == "none"){
    newAbility.id = inData.baseAbilities.length
  }
  inData.baseAbilities[newAbility.id] = newAbility
}

for(ability of Status){
  newAbility = {
      action_type: "stats",
      name: ability.name,
      statChangeCount: 1,
      effects: [],
      speed: ability.speed,
      focus: ability.focus
  }

  if(ability.v1 != 0){
    newAbility.effects.push({
      "target": ability.t1,
      "stat": ability.s1,
      "value": ability.v1
    })
  }
  
  if(ability.v2 != 0){
    newAbility.effects.push({
      "target": ability.t2,
      "stat": ability.s2,
      "value": ability.v2
    })
  }

  if(ability.v3 != 0){
    newAbility.effects.push({
      "target": ability.t3,
      "stat": ability.s3,
      "value": ability.v3
    })
  }

  newAbility.statChangeCount = newAbility.effects.length
  newAbility = {
    "allowanceCost":ability.allowanceCost,
    "ability":newAbility,
    "id":ability.id,
    "wildUse":ability.wildUse
  }
  if(newAbility.id == "none"){
    newAbility.id = inData.baseAbilities.length
  }
  inData.baseAbilities[newAbility.id] = newAbility
}



let data = JSON.stringify(inData,null,2);
fs.writeFileSync('../data.json', data);