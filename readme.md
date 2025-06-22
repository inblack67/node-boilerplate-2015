## Schema

### Users

- _id
- username
- email 
- etc

### Surveys

- _id
- title
- desc
- userId - (owner)

### Questions

- _id
- surveyId
- question/desc
- type (enum: "TEXT" | "RADIO" | "MCQ")
- options (list of options => empty [] for type TEXT)

### Responses

- _id
- questionId (_id: qns)
- userId: _id of users table
- selectedOptions: [],
- responseText: for type TEXT 
- timestamps
- create another entry for every update
