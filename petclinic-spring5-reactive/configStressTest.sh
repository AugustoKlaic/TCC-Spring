version=2.3.1;

wget https://repo1.maven.org/maven2/io/gatling/highcharts/gatling-charts-highcharts-bundle/$version/gatling-charts-highcharts-bundle-$version-bundle.zip;
unzip gatling-charts-highcharts-bundle-$version-bundle.zip;
cp -a stressTest/. gatling-charts-highcharts-bundle-$version/user-files/simulations/computerdatabase/;
cd gatling-charts-highcharts-bundle-$version/bin/;
./gatling.sh -s computerdatabase.PetClinicRouterOwnerStressTest;
./gatling.sh -s computerdatabase.PetClinicRouterVetsStressTest;
./gatling.sh -s computerdatabase.PetClinicRouterSpecilitiesStressTest;
./gatling.sh -s computerdatabase.PetClinicRouterPetTypesStressTest;
./gatling.sh -s computerdatabase.PetClinicRouterPetsStressTest;
./gatling.sh -s computerdatabase.PetClinicRouterVisitsStressTest;
