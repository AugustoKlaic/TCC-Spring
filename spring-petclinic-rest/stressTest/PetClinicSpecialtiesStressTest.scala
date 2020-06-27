package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicSpecialtiesStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToSpecialtiesList() = {
    exec(http("List all Specialities")
    .get("/api/specialties/")
    .check(status.is(200)))
  }

  def goToAddSpecialtyAndAddOne() = {
    exec(http("Add a Speciality")
    .post("/api/specialties/")
    .body(StringBody("""{
                    "name": "Dermatology"
                    }""")).asJSON
    .check(status.is(201)))
  }

  def goToASpecificSpecialty() = {
    exec(http("Select a specific Speciality")
    .get("/api/specialties/4")
    .check(status.is(200)))
  }

  def goToEditASpecialty() = {
    exec(http("Edit a Speciality")
    .put("/api/specialties/4")
    .body(StringBody("""{
                  "name": "Cardiology"
                  }""")).asJSON
    .check(status.is(204)))
  }

  val test = scenario("Specialties scenario")
    .exec(goToSpecialtiesList())
    .pause(2)
    .exec(goToAddSpecialtyAndAddOne())
    .pause(2)
    .exec(goToASpecificSpecialty())
    .pause(2)
    .exec(goToEditASpecialty())
    .pause(2)
    .exec(goToSpecialtiesList())
    .pause(2)

  setUp(
    test.inject(
      atOnceUsers(1),
      rampUsersPerSec(1) to(3) during(6 seconds),
      constantUsersPerSec(30) during(3 seconds) randomized
    )
  ).protocols(httpProtocol)
}
