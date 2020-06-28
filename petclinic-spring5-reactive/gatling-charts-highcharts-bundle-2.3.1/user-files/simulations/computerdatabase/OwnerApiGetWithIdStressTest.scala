package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class OwnerApiGetWithIdStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  val test = scenario("Owners")
    .exec(http("Get pet owners by id")
      .get("api/owners/5bead0d3-cd7b-41e5-b064-09f48e5e6a08")

      .check(status.is(200))
    )

  setUp(
    test.inject(
      atOnceUsers(1000),
      rampUsersPerSec(1000) to(3000) during(60 seconds),
      constantUsersPerSec(3000) during(30 seconds) randomized
    )).protocols(httpProtocol)
}