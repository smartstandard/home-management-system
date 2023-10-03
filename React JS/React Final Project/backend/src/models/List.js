const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const listSchema = new Schema({
    title: {
        String,
        required: true,
    },
    items: [
        {
            text: {
                type: String,
                required: true,
            },
        },
    ],
    household: {
        type: ObjectId,
        ref: 'Household',
        required: true,
    },
    createdBy: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['shopping', 'todo'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const List = model('List', listSchema);

module.exports = List;
