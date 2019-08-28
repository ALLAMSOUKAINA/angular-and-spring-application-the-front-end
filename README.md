# angular-and-spring-application
an application that has been build with angular 6 , hibernate,bootstrap 4,java7 and  the spring framworks : spring boot,spring mvc,spring data jpa
it is a maven application
it is a CRUD application that allows to manage the stock of products
each product has three characteristics: name, price, purchase price
this application allows you to consult the products on the database, add a product in the database, search for a product according to its ID and delete it from the database and also be able to add a user account to the database which will allow you to access the application
the database tables will be automatically generated once you execute the code of the backend you shold just have a database named prductapp and have the mysql server on port 3306
the server backend listening port 9090 and the frontend use port 4200
all the servers ports  and database configurations  can be modified on the file application.propriety in the backend and by executing the command ng serve --port X for the frontend on the terminal IDE when you execute the frontend code  


# Running the application locally

You can build a jar file and run it from the command line:

git clone https://github.com/ALLAMSOUKAINA/angular-and-spring-application.git
cd angular-and-spring-application
./mvnw package
java -jar target/*.jar

You can then access the application here: http://localhost:4200/


# Working with the application in your IDE

### Prerequisites
#### back end :
* Java 7 or newer. 
•	git command line tool (https://help.github.com/articles/set-up-git) 
* Your preferred IDE Eclipse . 
* Spring Tools Suite (STS) 
#### front end :
* VS Code
* webstorm 
* atom 
* node js

### Steps:
#### for the back end
+ run mysql server using the port 3306
+ On the command line git clone https://github.com/ALLAMSOUKAINA/angular-and-spring-application-the-backend-part.git 
+ Inside Eclipse or STS File -> Import -> Maven -> Existing Maven project Run the application main method by right clicking on it and choosing Run As -> spring Application.

#### for the front end
+ Inside VS Code or webstorm or atom File -> open folder and choose de folder of the front end

=======
# Application de gestion des produits

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
