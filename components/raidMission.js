const { populateCombatData, populateCombatWindow, populateCombatControls } = require("../sessionTools.js")
const { getPlayerDBData,} = require("../firebaseTools")
const { simulateCPUSPAssign, simulateCPUAbilityAssign, clone, runEnemyCombatAI} = require("../tools.js")


function getRandomPassive(leader){
    return [leader.passives[Math.floor(Math.random() * leader.passives.length)]]
}

module.exports = {
    config:{
        getSession:true
    },
    data:{
        name:"raidMission"
    },
    execute(interaction,componentConfig,callback){
        
        let session = componentConfig.session
        
        let missionType = session.session_data.town.raid.missions[2][0].type

        let newSession,fighters,additionalLevels;
        switch(componentConfig.args[0]){
            case "0":
                switch(missionType){
                    case 0:
                         
                    let wallUnit = {
                        object: true,
                        name:  "Town Wall",
                        id: "wall",
                        cpu:true,
                        faction:"-1",
                        race:"0",
                        combatStyle:"0",
                        exp:0,
                        abilitypoints:0,
                        statpoints:0,
                        lives:1,
                        abilities:[],
                        level:session.session_data.town.level * 10,
                        totalExp:0,
                        stats:{
                            "hp":50,
                            "atk":0,
                            "def":50,
                            "spatk":0,
                            "spdef":50,
                            "spd":0
                        }
                    }

                    let wallScalar = {
                        "atk": 0,
                        "spatk": 0,
                        "spd": 0,
                        "def": 0,
                        "spdef": 0,
                        "hp": 1,
                    }
        
                    let enemy = {
                        name:"Servant of " + session.session_data.town.raid.leader.name,
                        id:Math.floor(Math.random() * 1000),
                        cpu:true,
                        faction:"-1",
                        race:"0",
                        combatStyle:"0",
                        exp:0,
                        abilitypoints:0,
                        statpoints:0,
                        lives:1,
                        abilities:[],
                        level:0,
                        totalExp:0,
                        passives:getRandomPassive(clone(session.session_data.town.raid.leader.unit)),
                        stats:{
                            "hp":10,
                            "atk":5,
                            "def":5,
                            "spatk":5,
                            "spdef":5,
                            "spd":5
                        }
                    }
        
                    enemy = clone(simulateCPUAbilityAssign(enemy,[],5 + Math.floor(session.session_data.town.level * 1.25)))
        
                    fighters = [
                        session.session_data.player,
                        simulateCPUSPAssign(wallUnit,session.session_data.town.level * 60,wallScalar),
                        simulateCPUSPAssign(clone(enemy),session.session_data.town.level * 60),
                        simulateCPUSPAssign(clone(enemy),session.session_data.town.level * 60)
                    ]
        
                    newSession = {
                        type:"combat",
                        session_id: Math.floor(Math.random() * 100000),
                        user_ids:session.user_ids,
                        server_id:interaction.guildId,
                        session_data:populateCombatData(fighters,{
                            fightType:"pve",
                            alliances:[0,0,1,1],
                            canFlee:false,
                            raidMission:{
                                missionLevel:0,
                                type:0
                            },
                            events:[
                                {
                                    type:1,
                                    data:{
                                        staticData:{
                                            id:"wall"
                                        }
                                    },
                                    result:"win_1"
                                },
                                {
                                    type:0,
                                    data:{
                                        count:10
                                    },
                                    result:"win_0"
                                },
                                {
                                    type:1,
                                    data:{
                                        team:1    
                                    },
                                    result:"respawn"
                                }
                            ],
                            triggers:{
                                respawn:{
                                    actionType:0,
                                    data:{
                                        units:[
                                            {
                                                chance:100,
                                                obj:{
                                                    unit:clone(enemy),
                                                    alliance:1,
                                                    skillpoints:session.session_data.town.level * 60,
                                                    allowance:5
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        })
                    } 
                    break;
        
                    case 1:
            
                        let largeEnemy = {
                            name:session.session_data.town.raid.leader.name + "'s Goliath",
                            id:"large",
                            cpu:true,
                            faction:"-1",
                            race:"0",
                            combatStyle:"0",
                            exp:0,
                            abilitypoints:0,
                            statpoints:0,
                            lives:3,
                            abilities:[],
                            level:0,
                            totalExp:0,
                            passives:getRandomPassive(clone(session.session_data.town.raid.leader.unit)),
                            stats:{
                                "hp":200,
                                "atk":75,
                                "def":1000,
                                "spatk":75,
                                "spdef":1000,
                                "spd":10
                            }
                        }
                        
                        let scalar = {
                            "atk": 0.5,
                            "spatk": 0.5,
                            "spd": 0.7,
                            "def": 2,
                            "spdef": 2,
                            "hp": 2,
                        }

                        largeEnemy = simulateCPUAbilityAssign(largeEnemy,[],8 + Math.floor(session.session_data.town.level * 1.25))
                        largeEnemy = simulateCPUSPAssign(largeEnemy,session.session_data.town.level * 60,scalar)
                        
                        fighters = [
                            session.session_data.player,
                            clone(largeEnemy)
                        ]
            
                        newSession = {
                            type:"combat",
                            session_id: Math.floor(Math.random() * 100000),
                            user_ids:session.user_ids,
                            server_id:interaction.guildId,
                            session_data:populateCombatData(fighters,{
                                fightType:"pve",
                                alliances:[0,1],
                                canFlee:false,
                                raidMission:{
                                    missionLevel:0,
                                    type:1
                                },
                                events:[
                                    {
                                        type:2,
                                        data:{
                                            staticData:{
                                                id:"large"
                                            },
                                            records:{
                                                timesHit:10
                                            }
                                        },
                                        result:"win_0"
                                    }
                                ]
                            })
                        }
                        break;
                    
                    case 2:
                        let rallyPoint = {
                            name:session.session_data.town.raid.leader.name + "'s Beacon",
                            object: true,
                            id:"beacon",
                            cpu:true,
                            faction:"-1",
                            race:"0",
                            combatStyle:"0",
                            exp:0,
                            abilitypoints:0,
                            statpoints:0,
                            lives:3,
                            abilities:[
                                {
                                    "action_type": "stats",
                                    "name": session.session_data.town.raid.leader.name + "'s Judgement",
                                    "statChangeCount": 2,
                                    "effects": [
                                        {
                                            "target": "2",
                                            "stat": "def",
                                            "value": -1
                                        },
                                        {
                                            "target": "2",
                                            "stat": "spdef",
                                            "value": -1
                                        }
                                    ],
                                    "speed": 3
                                },
                                {
                                    "action_type": "stats",
                                    "name": session.session_data.town.raid.leader.name + "'s Inspiration",
                                    "statChangeCount": 2,
                                    "effects": [
                                        {
                                            "target": "1",
                                            "stat": "atk",
                                            "value": 1
                                        },
                                        {
                                            "target": "1",
                                            "stat": "spatk",
                                            "value": 1
                                        }
                                    ],
                                    "speed": 3
                                },
                                {
                                    "action_type": "stats",
                                    "name": session.session_data.town.raid.leader.name + "'s Protection",
                                    "statChangeCount": 2,
                                    "effects": [
                                        {
                                            "target": "1",
                                            "stat": "def",
                                            "value": 1
                                        },
                                        {
                                            "target": "1",
                                            "stat": "spdef",
                                            "value": 1
                                        }
                                    ],
                                    "speed": 3
                                }
                            ],
                            level:session.session_data.town.level * 10,
                            totalExp:0,
                            passives:getRandomPassive(clone(session.session_data.town.raid.leader.unit)),
                            stats:{
                                "hp":75,
                                "atk":0,
                                "def":40,
                                "spatk":0,
                                "spdef":40,
                                "spd":1
                            }
                        }

                        let beaconScalar = {
                            "atk": 0,
                            "spatk": 0,
                            "spd": 1,
                            "def": 1.75,
                            "spdef": 1.75,
                            "hp": 1,
                        }
        
                        let rallyEnemy = {
                            name:"Servant of " + session.session_data.town.raid.leader.name,
                            id:"large",
                            cpu:true,
                            faction:"-1",
                            race:"0",
                            combatStyle:"0",
                            exp:0,
                            abilitypoints:0,
                            statpoints:0,
                            lives:2,
                            abilities:[],
                            level:0,
                            totalExp:0,
                            passives:getRandomPassive(clone(session.session_data.town.raid.leader.unit)),
                            stats:{
                                "hp":10,
                                "atk":5,
                                "def":5,
                                "spatk":5,
                                "spdef":5,
                                "spd":5
                            }
                        }
            
                        rallyEnemy = simulateCPUAbilityAssign(rallyEnemy,[],7 + Math.floor(session.session_data.town.level * 1.25))
            
                        fighters = [
                            session.session_data.player,
                            simulateCPUSPAssign(clone(rallyEnemy),session.session_data.town.level * 50),
                            simulateCPUSPAssign(clone(rallyPoint),session.session_data.town.level * 80,beaconScalar),
                            simulateCPUSPAssign(clone(rallyEnemy),session.session_data.town.level * 50)
                        ]
        
                        newSession = {
                            type:"combat",
                            session_id: Math.floor(Math.random() * 100000),
                            user_ids:session.user_ids,
                            server_id:interaction.guildId,
                            session_data:populateCombatData(fighters,{
                                fightType:"pve",
                                alliances:[0,1,1,1],
                                canFlee:false,
                                raidMission:{
                                    missionLevel:0,
                                    type:2
                                },
                                events:[
                                    {
                                        type:1,
                                        data:{
                                            staticData:{
                                                id:"beacon"
                                            }
                                        },
                                        result:"win_0"
                                    },
                                    {
                                        type:0,
                                        data:{
                                            count:25
                                        },
                                        result:"win_1"
                                    }
                                ]
                            })
                        }
                        break;
        
                }
                
                break;
            
            case "1":
                let raidBoss = clone(session.session_data.town.raid.leader.unit)
    
                raidBoss = simulateCPUAbilityAssign(raidBoss,[],8)
    
                fighters = [
                    session.session_data.player,
                    clone(raidBoss)
                ]
    
                newSession = {
                    type:"combat",
                    session_id: Math.floor(Math.random() * 100000),
                    user_ids:session.user_ids,
                    server_id:interaction.guildId,
                    session_data:populateCombatData(fighters,{
                        fightType:"pve",
                        alliances:[0,1],
                        canFlee:false,
                        raidMission:{
                            missionLevel:1,
                            type:0
                        },
                        events:[
                            {
                                type:1,
                                data:{
                                    staticData:{
                                        id:"raidBoss"
                                    }
                                },
                                result:"win_0"
                            },
                        ]
                    })
                }
                
                break;
        }

        runEnemyCombatAI(newSession.session_data.fighters)
        interaction.update({
            content:" ",
            components:populateCombatControls(newSession),
            embeds:populateCombatWindow(newSession)
        })

        callback({
            addSession: newSession,
            removeSession: session
        })
    }
}