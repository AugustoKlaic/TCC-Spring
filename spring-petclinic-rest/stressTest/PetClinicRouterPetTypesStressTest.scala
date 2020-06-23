package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterPetTypesStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToPetTypesList() = {
    exec(http("List all pet Types")
    .get("/api/pettypes/")
    .check(status.is(200)))
  }

  def goToAddAPetTypeAndAddOne() = {
    exec(http("Adding a PetType")
    .post("/api/pettypes/")
    .body(StringBody("""{
                        "name": "Wolf"
                        }""")).asJSON
    .check(status.is(201)))
  }

  def goToASpecificPetType() = {
    exec(http("Select a Specific PetType")
    .get("/api/pettypes/1")
    .check(status.is(200)))
  }

  def goToEditAPetType() = {
    exec(http("Edit a PetType")
    .put("/api/pettypes/1")
    .body(StringBody("""{
                      "name": "Wolf"
                      }""")).asJSON
    .check(status.is(204
    )))
  }

  def goToDeleteASpecificPetType() = {
    exec(http("Delete a Specific PetType")
      .delete("/api/pettypes/1")
      .check(status.is(204)))
  }

  val test = scenario("Pet Types scenario")
    .exec(goToPetTypesList())
    .pause(2)
    .exec(goToAddAPetTypeAndAddOne())
    .pause(2)
    .exec(goToASpecificPetType())
    .pause(2)
    .exec(goToEditAPetType())
    .pause(2)
    .exec(goToDeleteASpecificPetType())
    .pause(2)

  setUp(
    test.inject(
      atOnceUsers(1),
      rampUsersPerSec(1) to(3) during(6 seconds),
      constantUsersPerSec(30) during(3 seconds) randomized
    )
  ).protocols(httpProtocol)
}
