exports.externalMessage = async (event, context, callback) => {
    console.log("Received event {}", event);
    const result =
          event.arguments && event.arguments.inputMessage
            ? event.arguments.inputMessage
            : {};
        return result;
};