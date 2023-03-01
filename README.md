# fullstack-admin-dashboard

#How to get started

Prerequisites: Visual Studio Code and a MongoDB account

If you want to see how this project turned out begin with cloning the repository.
Thereafter open these folders in Visual Studio Code.

Create a .env file in the root of the server folder and connect it to your MongoDB with the following:
MONGO_URL='your_connection_string_to_the_mongo_server'
PORT=number/e.g 5001

Create a new .env.local in the client folder, write the following:
REACT_APP_BASE_URL=http/localhost:your_port_number

Open the terminal cd to the client folder and in another window cd to the server folder
Run the client folder by typing npm run start and run the server folder by typing npm run dev
