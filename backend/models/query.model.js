import mongoose from 'mongoose';


const querySchema = new mongoose.Schema({
    name: {
        type: 'String',
    },
    email: {
        type: 'String',
    },
    phone: {
        type: 'Number'
    },
    message: {
        type: 'String',
    }
})

const queries = mongoose.model("Quries", querySchema);
export default queries;