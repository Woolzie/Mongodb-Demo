const data = [
    {
        query: "db.students.find({})",
        explanation:
            "The find method is used to perform queries in MongoDB. Querying returns a subset of documents in a collection, from no documents at all to the entire",
        syntax: "Introduction",
    },
    {
        query: ` db.students.find({"name":"Bob Singh"})`,
        explanation:
            `if we have a string we want to match, such as "name" with "Bob Singh", we use that key value pair in the {} `,
        syntax: "Introduction",
    },
    {
        query: `db.students.find({"grade":11, "attendance":95})`,
        explanation:
            `Multiple conditions can be strung together by adding more key/value pairs to
the query document, which gets interpreted as “condition1 AND condition2
AND … AND conditionN ”`,
        syntax: "Introduction",
    },
    {
        query: `db.students.find({},{"name":1, "age":1})`,
        explanation:
            " Sometimes you do not need all of the key/value pairs in a document returned. If this is the case, you can pass a second argument to find. Id will return unless specified not to by equating it to 0 (demonstrate).",

        syntax: "Specifying keys to return",
    },

    {
        query: `db.students.find({"attendance" : "this.attendanceRange"})`,
        explanation:
            "The value of a query document must be a constant as far as the database is concerned (It can be a normal variable in your own code). It cannot refer to the value of another key in the document. Here, this.attendanceRange is not a range of accepted values, it is a string.",
        syntax: "Limitations",
    },
    {
        query: `db.students.find({ "attendance": { "$gte": 90, "$lt": 95 } } )`,
        explanation:
            "Queries can match more complex criteria, such as ranges, OR-clauses, and negation.",
        syntax: "Queries ",
    },
];

export { data };
