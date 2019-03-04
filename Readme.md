# graphql-boilerplate

#### How to install?

`git clone https://github.com/furkancelik/graphql-boilerplate.git`

`yarn install` or `npm install`

After making the necessary arrangements in the .env file.

`yarn start`

Open Playground

`http://localhost:5000/graphql`

### File Structure

![](https://raw.githubusercontent.com/furkancelik/graphql-boilerplate/master/public/file_structure.jpg)

### How to run?

Open Playground

`http://localhost:5000/graphql`

---

#### User List (Query);

**Query**

```
{
  users {
    id
    username

  }
}

```

**Result**

```
{
  "data": {
    "users": [
      {
        "id": "5c7b4721ed6efe01d482054a",
        "username": "furkan"
      },
      {
        "id": "5c7c0958e95c100715f1dfef",
        ...
      },
      ...
    ]
  }
}
```

---

#### Post List (Query);

**Query**

```
{
  posts {
    id
    title
    user {
      username
    }
  }
}
```

**Result**

```
{
  "data": {
    "posts": [
      {
        "id": "5c7b49c14cc91002a15a0336",
        "title": "makale 1",
        "user": {
          "id": "5c7b4721ed6efe01d482054a",
          "username": "furkan"
        }
      },
      {
        "id": "5c7b4a0fb6022d02d49b46d8",
        "title": "makale 2",
        "user": {
          ...
        }
      },
      ...
    ]
  }
}
```

---

#### Register (Mutation)

**Query**

```
mutation($data: createUserInput!) {
  register(data: $data) {
    token
  }
}
```

**Variables**

```
{"data": {"fullName": "furkan çelik","username": "furkancelik","password": "123"}}
```

**Result**

```
{
  "data": {
    "register": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjN2M4ZjVjNDVmZjY1MTU4MGVmZDJlOSIsInVzZXJuYW1lIjoiZnVya2FuY2VsaWsiLCJpYXQiOjE1NTE2NjcwMzYsImV4cCI6MTU1MTY3MDYzNn0.M2nLNcSxMJD8otu0iTZN2QxWkUemXAP5-NgR5iZqSoU"
    }
  }
}
```

---

#### Login (Mutation)

**Query**

```
mutation($data: loginUserInput) {
  login(data: $data) {
    token
  }
}
```

**Variables**

```
{"data": {"username": "furkan","password": "123"}}
```

**Result**

```
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjN2MxMWY4NjA2YjBhMDg4OWYwNGE0NCIsInVzZXJuYW1lIjoiZnVya2FuIiwiaWF0IjoxNTUxNjY2NjY0LCJleHAiOjE1NTE2NzAyNjR9.COw0Uektgtk0jGEY1OsedQEx7sU5PI-lFjoSsW_8k9A"
    }
  }
}
```

---

#### Create Post (Mutation / Authorized )

**Query**

```
mutation($data: createPostInput!) {
  createPost(data: $data) {
    id
    title
    user {
      username
    }
  }
}
```

**Variables**

```
{"data": {
  "title": "Makale Başlık",
  "desciption": "makale açıklama"
}}
```

**HTTP HEADERS**

```
{"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjN2MxMWY4NjA2YjBhMDg4OWYwNGE0NCIsInVzZXJuYW1lIjoiZnVya2FuIiwiaWF0IjoxNTUxNjY2NjY0LCJleHAiOjE1NTE2NzAyNjR9.COw0Uektgtk0jGEY1OsedQEx7sU5PI-lFjoSsW_8k9A"}
```

**Result**

```
{
  "data": {
    "createPost": {
      "id": "5c7c902745ff651580efd2ea",
      "title": "Makale Başlık",
      "user": {
        "username": "furkan"
      }
    }
  }
}
```
