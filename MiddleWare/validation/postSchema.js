const postSchema = {
    type: "object",
    properties: {
        title: {
            type: "string",
            minLength: 5,
            maxLength: 100
        },
        content: {
            type: "string",
            minLength: 10,
            maxLength: 1000
        },
        tags: {
            type: "array",
            items: { type: "string" },
            minItems: 1,
            uniqueItems: true
        }
    },
    required: ["title", "content", "tags"],
    additionalProperties: false
};

module.exports = postSchema;