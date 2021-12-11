# DEV5-WERKSTUK-JOPPERABIJNS

## How to start this application

1. git clone
2. use .env.template
3. npm i
4. change
5. docker-compose up --build

## Endpoint

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
[DELETE] /api/students/:city_id
  - Delete city by city_id
  * @returns HTTP status 204 indicates successful deletion.
```
