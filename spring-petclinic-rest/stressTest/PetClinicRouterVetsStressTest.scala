package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class PetClinicRouterVetsStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  def goToVetListPage() = {
    exec(http("Get Vet List")
    .get("/api/vets/")
    .check(status.is(200)))
  }

  def goToAddAVetAndAddOne() = {
    exec(http("Add a Vet")
    .post("/api/vets/")
    .body(StringBody("""{
                        "firstName": "Augusto",
                        "lastName": "Klaic",
                        "specialties": []
                        }""")).asJSON
    .check(status.is(201)))
  }

  def goToAnSpecificVet() = {
    exec(http("Select a Vet")
    .get("/api/vets/1")
    .check(status.is(200)))
  }

  def goToEditAVet() = {
    exec(http("Edit a Vet")
    .put("/api/vets/1")
    .body(StringBody("""{
                      "firstName": "Augusto",
                      "lastName": "Klaic",
                      "specialties": []
                      }""")).asJSON
    .check(status.is(204)))
  }

  def goToDeleteAnSpecificVet() = {
    exec(http("Delete a Vet")
      .delete("/api/vets/1")
      .check(status.is(204)))
  }


  val test = scenario("Vets scenario")
    .exec(goToVetListPage())
    .pause(2)
    .exec(goToAddAVetAndAddOne())
    .pause(2)
    .exec(goToAnSpecificVet())
    .pause(2)
    .exec(goToEditAVet())
    .pause(2)
    .exec(goToVetListPage())
    .pause(2)
    .exec(goToDeleteAnSpecificVet())
    .pause(2)

  setUp(
    test.inject(
      atOnceUsers(1),
      rampUsersPerSec(1) to(3) during(6 seconds),
      constantUsersPerSec(30) during(3 seconds) randomized
    )
  ).protocols(httpProtocol)
}
