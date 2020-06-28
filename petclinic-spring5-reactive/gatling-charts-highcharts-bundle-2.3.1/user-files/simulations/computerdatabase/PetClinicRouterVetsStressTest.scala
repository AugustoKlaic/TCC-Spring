package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterVetsStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToHomePage() = {
    exec(http("Go to home page")
      .get("")
      .check(status.is(200)))
  }

  def goToVetListPage() = {
    exec(http("Get Vet List")
    .get("vets/")
    .check(status.is(200)))
  }

  def goToAddAVetAndAddOne() = {
    exec(http("Add a Vet")
    .post("vets/add?firstName=Carol&lastName=Rick&radiology=on&dentistry=on&surgery=on")
    .check(status.is(200)))
  }

  def goToAnSpecificVet() = {
    exec(http("Select a Vet")
    .get("vets/edit?id=367e4be5-4428-4356-b5fb-60107133c220")
    .check(status.is(200)))
  }

  def goToEditAVet() = {
    exec(http("Edit a Vet")
    .post("vets/edit?id=367e4be5-4428-4356-b5fb-60107133c220&firstName=Linda&lastName=Douglas&radiology=on")
    .check(status.is(200)))
  }

  val test = scenario("Vets")
    .exec(goToHomePage())
    .pause(2)
    .exec(goToVetListPage())
    .pause(2)
    .exec(goToAddAVetAndAddOne())
    .pause(2)
    .exec(goToAnSpecificVet())
    .pause(2)
    .exec(goToEditAVet())
    .pause(2)
    .exec(goToVetListPage())

//  setUp(
//    test.inject(
//      atOnceUsers(100),
//      rampUsersPerSec(100) to(1000) during(15 seconds),
//      constantUsersPerSec(1000) during(60 seconds) randomized
//    )
//  ).protocols(httpProtocol)

    setUp(
      test.inject(
        atOnceUsers(10),
        rampUsersPerSec(10) to(100) during(15 seconds),
        constantUsersPerSec(100) during(60 seconds) randomized
      )
    ).protocols(httpProtocol)
}