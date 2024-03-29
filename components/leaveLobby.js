const { populateLobbyWindow, populateLobbyControls, populateCloseInteractionMessage } = require("../sessionTools.js")

module.exports = {
    config:{
        getSession:true
    },
    data:{
        name:"leaveLobby"
    },
    execute(interaction,componentConfig,callback){
        let session = componentConfig.session
        if(session.session_data.owner == interaction.user.id){

            interaction.update(populateCloseInteractionMessage("Lobby Closed",true))

            callback({
                removeSession:session
            })
        } else {
            session.user_ids.splice(session.user_ids.indexOf(interaction.user.id),1)
            for(var i = 0; i < session.session_data.players.length;i++){
                if(session.session_data.players[i].id == interaction.user.id){
                    session.session_data.players.splice(i,1)
                    break;
                }
            }
            

            interaction.update({
                content: populateLobbyWindow(session),
                components: populateLobbyControls(session)
            })

            callback({
                updateSession:session
            })
        }
    }
}