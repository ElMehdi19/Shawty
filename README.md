# Trancate
Flask/React/TypeScript Url Shortener

# Update (Jul, 10 2020):

* Implemented Redis and RQ to handle some background tasks.
* The front-end was fully rewritten in TypeScript (React).
* State is now managed using React Hooks and the Context API instead of Redux.
* Styles are now written in CSS (styled-components) instead of materializecss.
* Web app redesigned to be responsive.

# Features:

* Shorten URLs using Flask as an API service and React.
* Check already shortened URLs.
* Get information about shortened URLs (visitors, number of hits..).
* Support for SQLite, so you can easily interact with the db.
* REST API for sending and retrieving data easily.
* Visualize where your visitors are coming from using ApexCharts.

# Requirements:

Execute the following command to install the required dependencies:<br />

* Server: (using a virtual environment is highly recommended)
`cd server`
`pip3 install -r requirements.txt`

* Client:
`cd client`
`yarn install`

# Usage:
1) Clone this repository:

`git clone https://github.com/ElMehdi19/Trancate.git`

2) Install the dependencies by simply executing:

`pip3 install -r requirements.txt`

3) Set the following virtual environment variables:<br />
`SECRET_KEY`
`DATABASE_URI`
`MAIL_USERNAME`
`MAIL_PASSWORD`


(NOTE: This app uses GMAIL SMTP to send emails, you can change this in server/config.py)


4) Run the back-end using this command: (In a virtual environment preferably)

`cd server`
`flask run`

5) Run the front-end using this command: (In the project root directory)

`cd client`
`npm start` or `yarn start`

6) Visit `127.0.0.1:3000` on your web browser
