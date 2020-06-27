package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicVisitsStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToOwnerListPage() = {
    exec(http("Get owners List")
      .get("/api/owners/")
      .check(status.is(200)))
  }

  def goToASpecificOwner() = {
    exec(http("Getting specific Owner")
      .get("/api/owners/1")
      .check(status.is(200)))
  }

  def goToAddVisitAndAddOne() = {
    exec(http("Adding pet Visit")
      .post("/api/visits")
      .body(StringBody("""{
                          "id": 1,
                          "date": "2013/01/01",
                          "description": "rabies shot",
                          "pet": {
                            "id": 7,
                            "name": "Samantha",
                            "birthDate": "2012/09/04",
                            "type": {
                              "id": 1,
                              "name": "cat"
                            },
                            "owner": {
                              "id": 6,
                              "firstName": "Jean",
                              "lastName": "Coleman",
                              "address": "105 N. Lake St.",
                              "city": "Monona",
                              "telephone": "6085552654"
                            }
                          }
                        }""")).asJSON
      .check(status.is(201)))
  }

  def goToGetAVisit() = {
    exec(http("Getting a Visit")
      .get("/api/visits/1")
      .check(status.is(200)))
  }

  def goToEditAVisit() = {
    exec(http("Editing a Visit")
      .put("/api/visits/1")
      .body(StringBody("""{
                          "id": 1,
                          "date": "2013/01/01",
                          "description": "rabies shot",
                          "pet": {
                            "id": 7,
                            "name": "Samantha",
                            "birthDate": "2012/09/04",
                            "type": {
                              "id": 1,
                              "name": "cat"
                            },
                            "owner": {
                              "id": 6,
                              "firstName": "Jean",
                              "lastName": "Coleman",
                              "address": "105 N. Lake St.",
                              "city": "Monona",
                              "telephone": "6085552654"
                            }
                          }
                        }""")).asJSON
      .check(status.is(204)))
  }

  val test = scenario("Visits scenario")
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

  setUp(
    test.inject(
      atOnceUsers(1),
      rampUsersPerSec(1) to (3) during (6 seconds),
      constantUsersPerSec(30) during (3 seconds) randomized
    )
  ).protocols(httpProtocol)
}
