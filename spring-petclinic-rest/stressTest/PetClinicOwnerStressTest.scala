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
    .get("/api/owners/1")
    .check(status.is(200)))
  }

  def goToEditAnOwner() = {
    exec(http("Editing an Owner")
    .put("/api/owners/1")
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
    .exec(goToOwnerListPage())
    .pause(2)
    .exec(goToASpecificOwner())
    .pause(2)
    .exec(goToEditAnOwner())
    .pause(2)

  setUp(
    test.inject(
      atOnceUsers(1),
      rampUsersPerSec(1) to(3) during(6 seconds),
      constantUsersPerSec(30) during(3 seconds) randomized
    )
  ).protocols(httpProtocol)
}
