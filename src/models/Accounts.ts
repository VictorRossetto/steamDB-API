import {model, connection, Model, Schema, AnyObject, ObjectId} from 'mongoose'

type AccountsType = {
    app: string,
    name: string,
    appType: string,
    developer : [string],
    publisher: string,
    supportedSytems: [string],
    lasChangeNUmber: number,
    supported: [string],
    playersNow: number,
    img: string,
    price: number,
    peakToday: number,
    release: DateConstructor
}
new Schema({}, {
    versionKey: false
});

const schema = new Schema<AccountsType>({
    app: {
        type: String,
    },
    name: {
        type: String,
    },
    appType:{
        type: String
    },
    developer:{
        type: [String]
    },
    publisher:{
        type: String
    },
    supportedSytems:{
        type: [String]
    },
    lasChangeNUmber:{
        type: Number
    },
    supported:{
        type:[String]
    },
    playersNow:{
        type: Number
    },
    img:{
        type: String
    },
    price:{
        type:Number
    },
    peakToday:{
        type:Number
    },
    release:{
        type:Date
    }

}, {
    versionKey: false
    //timestamp: true
})

const modelName: string = 'app'

export default(connection && connection.models[modelName]) ? 
    (connection.models[modelName] as Model<AccountsType>) 
:
    model<AccountsType>(modelName, schema)