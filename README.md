# TCC-Spring
This repository will contain all scripts, tests and aplications that have to be executed to retrieve the info for our TCC at PUC-RS

## How to Run the stress test
* First you need to enter in one the folders with the pet clinic project, [here is the reactive one](https://github.com/AugustoKlaic/TCC-Spring/tree/master/petclinic-spring5-reactive) and [here is the MVC one](https://github.com/AugustoKlaic/TCC-Spring/tree/master/spring-petclinic-rest).

* After you had enter the project you want, you will need to follow the instructions on the respective **README.MD** file of the project to start the application. 
  * In the reactive project you can start the application going to the root folder and typing the following:
  
      ```./gradlew bootRun```.
  * In the MVC project you can start the application going to the root folder and typing the following:
  
     ```./mvnw spring-boot:run```.
  
* When the application have started you will be able to run the stress tests. To run the stress test you have to be in the root folder and type the following in the terminal:
``` ./configStressTest.sh```, and then the tests will start to execute. The process is the same for both applications.

* Then all the gatling tests will be copied to the folder that will be executed by gatling. You will just have to wait finish.
