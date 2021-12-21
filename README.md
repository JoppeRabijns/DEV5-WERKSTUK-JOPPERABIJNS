# DEV5-WERKSTUK-JOPPERABIJNS

## How to start this application

1. git clone
2. use .env.template
3. npm i
4. change PG_CONNECTION_STRING
5. docker-compose up --build

## Endpoint

### /api/student

```javascript
[GET] /api/students 
  - Get list of all students
```

```javascript
[POST] /api/students 
  - Add student to database
  * @param {String} name of student
  * @param {String} email of student
  * @param {String} password of student
  * @returns {Object} add student object
```

```javascript
[PUT] /api/students/:id 
  - Update student by ID
  * @param {String} name of student
  * @param {String} email of student
  * @param {String} password of student
  * @returns {Object} update student object
```

```javascript
[DELETE] /api/students/:id 
  - Delete student by ID
  * @returns HTTP status 204 indicates successful deletion.
```

### /api/cities

```javascript
[GET] /api/cities
  - Get list of all cities
```

```javascript
[POST] /api/cities
  - Add city to database
  * @param {String} city_name name of the city
  * @returns {Object} add city object
```

```javascript
[PUT] /api/cities/:city_id
  - Update city by city_id
  * @param {String} city_name name of the city
  * @returns {Object} update city object
```

```javascript
[DELETE] /api/cities/:city_id
  - Delete city by city_id
  * @returns HTTP status 204 indicates successful deletion.
```



