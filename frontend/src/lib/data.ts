const data = [
    {
        brief: "Empty Find",
        query: "db.students.find({})",
        explanation:
            "⟡ The find method is used to perform queries in MongoDB\n\n⟡ Querying returns a subset of documents in a collection, from no documents at all to the entire collection\n\n⟡ The first argument inside find is the document specifying the query criteria, which determines which document gets returned",
    },
    {
        brief: "Find with Specified Values",
        query: ` db.students.find({"name":"Bob Singh"})`,
        explanation: `⟡ If we have a string we want to match, such as "name" with "Bob Singh", we use that key value pair in the {} `,
    },
    {
        brief: "Find with And operation",
        query: `db.students.find({"grade":11, "attendance":95})`,
        explanation: `⟡ Multiple conditions can be strung together by adding more key/value pairs to the query document, which gets interpreted as “condition1 AND condition2 AND … AND conditionN ”`,
    },

    {
        brief: "Find with Specified keys",
        query: `db.students.find({},{"name":1, "age":1})`,
        explanation:
            "⟡ Sometimes you do not need all of the key/value pairs in a document returned. If this is the case, you can pass a second argument to find\n\n⟡ Id will return unless specified not to by equating it to 0 (demonstrate)",
    },

    {
        brief: "Limitations ",
        query: `db.students.find({"attendance" : "this.attendanceRange"})`,
        explanation:
            "⟡ The value of a query document must be a constant as far as the database is concerned (It can be a normal variable in your own code).\n\n⟡ It cannot refer to the value of another key in the document.\n\n⟡ Here, this.attendanceRange is not a range of accepted values, it is a string",
    },
    {
        brief: "Query Criteria",
        query: `db.students.find({ "attendance": { "$gte": 90, "$lt": 95 } } )`,
        explanation: `⟡ Queries can match more complex criteria, such as ranges, OR-clauses, and negation\n\n⟡ "$lt", "$lte", "$gt", and "$gte" are all comparison operators, corresponding to <, <=, >, and >=, respectively \n\n⟡ They can be combined to look for a range of values.`,
    },
    {
        brief: "Or query using $or",

        query: `db.students.find( {$or :[ {"attendance":95}, {"age": 16}]})`,
        explanation: `⟡ There are two ways to do an OR query in MongoDB. "$in" can be used to query for a variety of values for a single key. \n\n⟡ $or can be used to query for any of the given values across multiple keys. \n\n⟡In the example, we look for students who have either 95% attendance or are 16 years old`,
    },
    {
        brief: "Or query using $in",
        query: `db.students.find({"attendance" : {"$in" : [92,99]} })`,
        explanation: `⟡ If you have more than one possible value to match for a single key, use an array of criteria with "$in"\n\n⟡ It iterates over the possible values and returns the document whoose field value matches in the given array`,
    },
    {
        brief: "Or query with $nin",
        query: `db.students.find( {"name" :{$nin: ["Alice Johnson", "Bob Singh"]}})`,
        explanation: `⟡ The opposite of "$in" is "$nin", which returns documents that don’t match any of the criteria in the array\n\n⟡ In the example, we look for students whoose names arent "Alice Johnson" or "Bob Singh"`,
    },
    {
        brief: "Negation in query",
        query: `db.students.find( {"subjects" :{$not: {$in: ["Math"]}}})`,
        explanation: `⟡ "$not" is a metaconditional, it can be applied on top of any other criteria to negate it\n\n⟡ In the example, we gather the list of students who haven't taken up maths\n\n⟡ First, it finds students who have taken up maths and the not operator excludes the returned documents in the output`,
    },
];

export { data };
