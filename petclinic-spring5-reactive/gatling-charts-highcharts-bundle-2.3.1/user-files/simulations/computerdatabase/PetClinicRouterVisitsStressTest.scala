package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterVisitsStressTest extends Simulation {

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

  def goToAddVisitAndAddOne() = {
    exec(http("Adding pet Visit")
      .post("visits/add?petId=6bead0a3-cd7b-41e5-b064-09f48e5e6a08&date=03%2F04%2F1997&description=morreu")
      .check(status.is(200)))
  }

  def goToGetAVisit() = {
    exec(http("Getting a Visit")
      .get("visits/edit?id=e4f35b96-98e8-4f6e-91a3-5de1a2325054")
      .check(status.is(200)))
  }

  def goToEditAVisit() = {
    exec(http("Editing a Visit")
      .post("visits/edit?id=e4f35b96-98e8-4f6e-91a3-5de1a2325054&petId=6bead0d2-cd7b-41e5-b064-09f48e5e6a08&date=21%2F06%2F2020&description=Visit+description+1812286097")
      .check(status.is(200)))
  }

  val test = scenario("Owners scenario")
    .exec(goToHomePage())
    .pause(2)
    .exec(goToOwnerListPage())
    .pause(2)
    .exec(goToASpecificOwner())
    .pause(2)
    .exec(goToAddVisitAndAddOne())
    .pause(2)
    .exec(goToGetAVisit())
    .pause(2)
    .exec(goToEditAVisit())
    .pause(2)

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