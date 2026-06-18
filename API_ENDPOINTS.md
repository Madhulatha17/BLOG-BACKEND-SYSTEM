# API Endpoints Documentation

## Register User

POST /register

Request:

{
"username": "john",
"password": "1234"
}

Response:

{
"message": "User Registered Successfully"
}

---

## Create Blog

POST /blogs

Request:

{
"title": "My First Blog",
"content": "Hello World"
}

Response:

{
"message": "Blog Created Successfully"
}

---

## Get Blogs

GET /blogs

Response:

[]

---

## Add Comment

POST /comments

Request:

{
"blog_id": 1,
"comment": "Nice Blog"
}

Response:

{
"message": "Comment Added Successfully"
}
