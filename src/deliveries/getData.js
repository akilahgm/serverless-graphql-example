exports.getData = async (event, context, callback) => {
    console.log("Received event {}", event);
    return {
        name:'test name',
        freeText:'test data object'
    }
};