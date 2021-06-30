db = new Mongo().getDB("chat");

db.createUser(
    {
      user: "mikhail",
      pwd: "secretcat",
      roles: [
        {
          role: "readWrite",
          db: "chat"
        }
      ]
    }
  )

db.createCollection('users', { capped: false });
db.createCollection('conversations', { capped: false });


db.users.insert([
  {_id: ObjectId("51e0373c6f35bd826f47e9a0"),
    email: "alice@gmail.com",
    password: "asdf",
    name: "Alice X",
    conversations: [ObjectId("51e0373c6f35bd826f47e9c0"), ObjectId("51e0373c6f35bd826f47e9c1")]},
  {_id: ObjectId("51e0373c6f35bd826f47e9a1"),
    email: "bob@gmail.com",
    password: "asdf",
    name: "Bob D",
    conversations: [ObjectId("51e0373c6f35bd826f47e9c0"), ObjectId("51e0373c6f35bd826f47e9c2")]},
  {_id: ObjectId("51e0373c6f35bd826f47e9a2"),
    email: "tom@gmail.com",
    password: "asdf",
    name: "Tom P",
    conversations: [ObjectId("51e0373c6f35bd826f47e9c1"), ObjectId("51e0373c6f35bd826f47e9c2")]},
])

db.conversations.insert([
    {_id: ObjectId("51e0373c6f35bd826f47e9c0"),
      participants: [ObjectId("51e0373c6f35bd826f47e9a0"), ObjectId("51e0373c6f35bd826f47e9a1")],
      messages: [
        {senderName: "Alice X", text: "Hi"},
        {senderName: "Bob D", text: "Hello"},
        {senderName: "Alice X", text: "What's up"},
      ]},
      {_id: ObjectId("51e0373c6f35bd826f47e9c1"),
      participants: [ObjectId("51e0373c6f35bd826f47e9a0"), ObjectId("51e0373c6f35bd826f47e9a2")],
      messages: [
          {senderName: "Alice X", text: "Heya"},
          {senderName: "Tom P", text: "YO"},
          {senderName: "Alice X", text: "How's life"},
      ]},
      {_id: ObjectId("51e0373c6f35bd826f47e9c2"),
        participants: [ObjectId("51e0373c6f35bd826f47e9a1"), ObjectId("51e0373c6f35bd826f47e9a2")],
        messages: [
            {senderName: "Tom P", text: "Heido"},
            {senderName: "Bob D", text: "What's cookin"},
            {senderName: "Tom P", text: "Not much"},
        ]},

]);