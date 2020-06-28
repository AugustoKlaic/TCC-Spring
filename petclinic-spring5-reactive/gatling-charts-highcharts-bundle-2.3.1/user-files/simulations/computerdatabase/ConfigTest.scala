package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object ConfigTest {
  def httpProtocolPattern() = {
    http.baseURL("http://localhost:8082/")
  }
}
