package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterPetTypesStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToHomePage() = {
    exec(http("Go to home page")
      .get("")
      .check(status.is(200)))
  }

  def goToPetTypesList() = {
    exec(http("List all pet Types")
    .get("petTypes/")
    .check(status.is(200)))
  }

  def goToAddAPetTypeAndAddOne() = {
    exec(http("Adding a PetType")
    .post("petTypes/add?name=fish")
    .check(status.is(200)))
  }

  def goToASpecificPetType() = {
    exec(http("Select a Specific PetType")
    .get("petTypes/edit?id=1d7067c9-3ab5-49ec-870b-a0b3833054e5")
    .check(status.is(200)))
  }

  def goToEditAPetType() = {
    exec(http("Edit a PetType")
    .post("petTypes/edit?id=1d7067c9-3ab5-49ec-870b-a0b3833054e5&name=dog")
    .check(status.is(200)))
  }

  val test = scenario("Specilities scenario")
    .exec(goToHomePage())
    .pause(2)
    .exec(goToPetTypesList())
    .pause(2)
    .exec(goToAddAPetTypeAndAddOne())
    .pause(2)
    .exec(goToASpecificPetType())
    .pause(2)
    .exec(goToEditAPetType())
    .pause(2)
    .exec(goToPetTypesList())
    .pause(2)

  setUp(
    test.inject(
      atOnceUsers(50),
      rampUsersPerSec(50) to(200) during(15 seconds),
      constantUsersPerSec(200) during(60 seconds) randomized
    )
  ).protocols(httpProtocol)
}