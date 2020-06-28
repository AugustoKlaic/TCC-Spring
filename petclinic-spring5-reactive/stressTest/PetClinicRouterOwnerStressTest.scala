package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterOwnerStressTest extends Simulation {

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

  def goToAddOwnersAndAddOne() = {
    exec(http("Adding owner")
    .post("owners/add?firstName=Augusto&lastName=Klaic&address=AssisBrasil&city=PortoAlegre&telephone=51999999999")
    .check(status.is(200)))
  }

  def goToASpecificOwner() = {
    exec(http("Getting specific Owner")
    .get("owners/view?id=5bead0d3-cd7b-41e5-b064-09f48e5e6a08")
    .check(status.is(200)))
  }

  def goToEditAnOwner() = {
    exec(http("Editing an Owner")
    .post("owners/edit?id=5bead0d3-cd7b-41e5-b064-09f48e5e6a08&firstName=James&lastName=Owner&address=Road+St&city=Serverless&telephone=%2B44+4444444")
    .check(status.is(200)))
  }


  val test = scenario("Owners scenario")
    .exec(goToHomePage())
    .pause(2)
    .exec(goToOwnerListPage())
    .pause(2)
    .exec(goToAddOwnersAndAddOne())
    .pause(2)
    .exec(goToOwnerListPage())
    .pause(2)
    .exec(goToASpecificOwner())
    .pause(2)
    .exec(goToEditAnOwner())
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