class TV{
    constructor(channels_relation, active_channel, volume){
        this._channels_relation = channels_relation,
        this._active_channel = active_channel,
        this._volume = volume
    }

    get active_channel(){
        return this._active_channel;
    }

    set active_channel(channel){
        const checkChannelExists = this._channels_relation.find(channelFinded => channelFinded === channel);

        if(!!checkChannelExists){
            this._active_channel = channel;
        } else{
            console.log('This channel does not exists');
        }
    }
}

module.exports = TV;