time_stamp=$(date +%Y-%m-%d-%T)
app_name="funapps"
echo "Creating the backup of your com folder ${time_stamp}"
rm -rf ../src/app/com
echo "Generating folders"

mkdir -p "../src/app/com/${app_name}/components/shared"
mkdir -p "../src/app/com/${app_name}/components/shared/layouts"
mkdir -p "../src/app/com/${app_name}/components/shared/main"

mkdir -p "../src/app/com/${app_name}/services"
mkdir -p "../src/app/com/${app_name}/config"
mkdir -p "../src/app/com/${app_name}/models"
mkdir -p "../src/app/com/${app_name}/utils"
mkdir -p "../src/app/com/${app_name}/routing"

## Create config thing 
echo "Generating config things "

cd "../src/app/com/${app_name}/config"
ng g class app-config
ng g class app-loader
ng g class urls

## Classes in utils

echo "Generating util things"

cd ../utils

ng g class error-exporter
ng g class error-handler
ng g class logger

## Guards in routing

echo "Generating guard things"

cd ../routing
ng g guard auth --interactive=false

## generating contents in services

echo "Generating services things"

cd ../services
ng g service custom-http
ng g service dal
ng g class custom-http-interceptor

echo "Creating components in shared and layout"
cd ../components/shared
ng g c header
ng g c footer

cd ./layouts
ng g c landings