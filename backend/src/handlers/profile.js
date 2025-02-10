const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "MMAUserProfiles";

// Create Profile - Triggered by Cognito
exports.createProfile = async (event) => {
    const { sub, email, name } = event.request.userAttributes;
    const params = {
        TableName: tableName,
        Item: {
            userId: sub,
            email: email,
            name: name,
            createdAt: new Date().toISOString()
        }
    };
    await dynamoDB.put(params).promise();
    return event;
};

// Get User Profile
exports.getProfile = async (event) => {
    const userId = event.pathParameters.userId;
    const params = {
        TableName: tableName,
        Key: { userId }
    };
    const result = await dynamoDB.get(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(result.Item)
    };
};

// Update User Profile
exports.updateProfile = async (event) => {
    const userId = event.pathParameters.userId;
    const body = JSON.parse(event.body);
    const updateExpression = "set name = :name";
    const params = {
        TableName: tableName,
        Key: { userId },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: { ":name": body.name },
        ReturnValues: "UPDATED_NEW"
    };
    const result = await dynamoDB.update(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(result.Attributes)
    };
};

// Delete User Profile
exports.deleteProfile = async (event) => {
    const userId = event.pathParameters.userId;
    const params = {
        TableName: tableName,
        Key: { userId }
    };
    await dynamoDB.delete(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "User deleted" })
    };
};
