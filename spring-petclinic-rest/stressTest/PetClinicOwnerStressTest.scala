package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicOwnerStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToOwnerListPage() = {
    exec(http("Get owners List")
    .get("/api/owners/")
    .check(status.is(200)))
  }

  def goToAddOwnersAndAddOne() = {
    exec(http("Adding owner")
    .post("/api/owners/")
    .body(StringBody("""{
                        "address": "Broadway, 10",
                        "city": "Seatle",
                        "firstName": "Alex",
                        "lastName": "Ross",
                        "telephone": "11111112"
                        }""")).asJSON
    .check(status.is(201)))
  }

  def goToASpecificOwner() = {
    exec(http("Getting specific Owner")
    .get("/api/owners/3")
    .check(status.is(200)))
  }

  def goToEditAnOwner() = {
    exec(http("Editing an Owner")
    .put("/api/owners/6")
    .body(StringBody("""{
                      "address": "Broadway, 10",
                      "city": "Seatle",
                      "firstName": "Alex",
                      "lastName": "Ross",
                      "telephone": "11111112"
                      }""")).asJSON
    .check(status.is(204)))
  }

  val test = scenario("Owners scenario")
    .exec(goToOwnerListPage())
    .pause(2)
    .exec(goToAddOwnersAndAddOne())
    .pause(2)
    .exec(goToASpecificOwner())
    .pause(2)
    .exec(goToEditAnOwner())
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
