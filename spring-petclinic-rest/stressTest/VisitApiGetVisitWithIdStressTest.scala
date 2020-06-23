package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class VisitApiGetVisitWithIdStressTest extends Simulation {

  val httpProtocol = ConfigTest.httpProtocolPattern()

  val test = scenario("Visits")
    .exec(http("Get specific visits")
      .get("/api/visits/1")
      .check(status.is(200))
    )

  setUp(
    test.inject(
      atOnceUsers(1000),
      rampUsersPerSec(1000) to(3000) during(60 seconds),
      constantUsersPerSec(3000) during(30 seconds) randomized
    )).protocols(httpProtocol)
}
