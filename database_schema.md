# Database Schema

## Users Table

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| username | TEXT    |
| password | TEXT    |

## Blogs Table

| Column  | Type    |
| ------- | ------- |
| id      | INTEGER |
| title   | TEXT    |
| content | TEXT    |

## Comments Table

| Column  | Type    |
| ------- | ------- |
| id      | INTEGER |
| blog_id | INTEGER |
| comment | TEXT    |

## Database

SQLite is used as the backend database for storing user, blog, and comment data.
