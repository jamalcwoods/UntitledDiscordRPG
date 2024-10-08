const { SlashCommandBuilder } = require('@discordjs/builders');
const { populateTownVisitWindow, populateTownVisitControls} = require("../sessionTools.js")


module.exports = {

	config:{
        getSession:true
    },
    data:{
        name:"selectUpgradeOption"
    },
	execute(interaction,componentConfig,callback) {
        let session = componentConfig.session
        if(session.type == "townVisit"){
            
            session.session_data.temp.upgradeOption = interaction.values[0]

            interaction.update({
                content: " ",
                embeds: populateTownVisitWindow(session),
                components: populateTownVisitControls(session)
            })

            callback({
                updateSession:session
            })
        }
	},
};