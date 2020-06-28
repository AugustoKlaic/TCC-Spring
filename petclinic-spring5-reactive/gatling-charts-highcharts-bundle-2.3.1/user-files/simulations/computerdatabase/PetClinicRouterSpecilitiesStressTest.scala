package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterSpecilitiesStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToHomePage() = {
    exec(http("Go to home page")
      .get("")
      .check(status.is(200)))
  }

  def goToSpecilitiesList() = {
    exec(http("List all Specialities")
    .get("specialities/")
    .check(status.is(200)))
  }

  def goToAddSpecilityAndAddOne() = {
    exec(http("Add a Speciality")
    .post("specialities/add?name=ophthalmology")
    .check(status.is(200)))
  }

  def goToASpecificSpeciality() = {
    exec(http("Select a specific Speciality")
    .get("specialities/edit?id=bab5f625-25eb-4f44-8a22-84fd3724fca2")
    .check(status.is(200)))
  }

  def goToEditASpeciliality() = {
    exec(http("Edit a Speciality")
    .post("specialities/edit?id=bab5f625-25eb-4f44-8a22-84fd3724fca2&name=surgery")
    .check(status.is(200)))
  }

  val test = scenario("Specilities scenario")
    .exec(goToHomePage())
    .pause(2)
    .exec(goToSpecilitiesList())
    .pause(2)
    .exec(goToAddSpecilityAndAddOne())
    .pause(2)
    .exec(goToASpecificSpeciality())
    .pause(2)
    .exec(goToEditASpeciliality())
    .pause(2)
    .exec(goToSpecilitiesList())
    .pause(2)

  setUp(
    test.inject(
      atOnceUsers(100),
      rampUsersPerSec(100) to(1000) during(15 seconds),
      constantUsersPerSec(1000) during(60 seconds) randomized
    )
  ).protocols(httpProtocol)
//
//  setUp(
//    test.inject(
//      atOnceUsers(10),
//      rampUsersPerSec(10) to(100) during(15 seconds),
//      constantUsersPerSec(100) during(60 seconds) randomized
//    )
//  ).protocols(httpProtocol)
}