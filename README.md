# Node With Sequelize ORM

## Technology used

This repository uses a number libraries to work:

- [NodeJs]
- [ExpressJs]
- [Typescript]
- [Cors]
- [Sequelize]
- [MySQL]

# Installation
 Follow these steps to install the application.
1. Clone the Repository
```
git clone https://github.com/mostofa-s-cse/Nodejs-Typescript-Boilerplate.git
```
2. Go to project directory

```
cd Nodejs-Typescript-Boilerplate
```

3. Install packages with npm

```
npm i
```
4. Create database .env

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=nodejsapi
```
5. Run migrations Use this command to run migrations

```
npx sequelize-cli db:migrate
```
Or seed
```
npx sequelize-cli db:seed:all
```
6. Start the local server and browser to your app.
This command will start the development server
```
npm run dev
```
<img width="705" alt="image" src="https://github.com/mostofa-s-cse/Nodejs-Typescript-Boilerplate/assets/98970470/1190b659-b24b-4c48-8bfc-2ade07d87c8e">
