const count = 0;

exports.handler = function(event, context, callback) {
    count++;
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            count
        })
    });
};
