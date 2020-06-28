package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterPetsStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToHomePage() = {
    exec(http("Go to home page")
      .get("")
      .check(status.is(200)))
  }

  def goToOwnerListPage() = {
    exec(http("Get owners List")
      .get("owners/")
      .check(status.is(200)))
  }

  def goToASpecificOwner() = {
    exec(http("Getting specific Owner")
      .get("owners/view?id=5bead0d3-cd7b-41e5-b064-09f48e5e6a08")
      .check(status.is(200)))
  }

  def goToAddPetAndAddOne() = {
    exec(http("Adding Pet")
    .post("pets/add?ownerId=5bead0d3-cd7b-41e5-b064-09f48e5e6a08&name=asdasdas&birthDate=03%2F04%2F1997&typeId=0cedc089-dcaa-483d-8e5e-80ada49ffff3")
    .check(status.is(200)))
  }

  def goToASpecificPet() = {
    exec(http("Getting specific Pet")
    .get("pets/edit?id=6bead0a3-cd7b-41e5-b064-09f48e5e6a08")
    .check(status.is(200)))
  }

  def goToEditAPet() = {
    exec(http("Editing a Pet")
    .post("pets/edit?id=6bead0a3-cd7b-41e5-b064-09f48e5e6a08&ownerId=5bead0d3-cd7b-41e5-b064-09f48e5e6a08&name=Pet+3&birthDate=21%2F06%2F2020&type=a5416951-4059-42d8-8ca4-bb276b82b76e"))
  }

  val test = scenario("Pets scenario")
      .exec(goToHomePage())
      .pause(2)
      .exec(goToOwnerListPage())
      .pause(2)
      .exec(goToASpecificOwner())
      .pause(2)
      .exec(goToAddPetAndAddOne())
      .pause(2)
      .exec(goToASpecificPet())
      .pause(2)
      .exec(goToEditAPet())
      .pause(2)

    setUp(
      test.inject(
        atOnceUsers(100),
        rampUsersPerSec(100) to(1000) during(15 seconds),
        constantUsersPerSec(1000) during(60 seconds) randomized
      )
    ).protocols(httpProtocol)

//  setUp(
//    test.inject(
//      atOnceUsers(10),
//      rampUsersPerSec(10) to(100) during(15 seconds),
//      constantUsersPerSec(100) during(60 seconds) randomized
//    )
//  ).protocols(httpProtocol)
}