### timestamps

add second argument to mongoose.Schema() which is options object
timestamps: true

### filtering data

when populate the tasks replace the string with object
use a query
{math: "tasks", match: {completed: true}}

access the query via req.query.NAME

### pagination Data

use the limit query to choose the number of results
use the skip query to choose the number of results you want to skip

use the options object in the second argument of the populate

```
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
      },
```

### sorting data

use a query sortBy=createdAt:desc
