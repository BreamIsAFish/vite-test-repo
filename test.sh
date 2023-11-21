# a="A"
# b=$a-test
# echo $b
A=$(aws ssm get-parameters --names "/dmind-prescreening/$ENVIRONMENT_NAME/feature-config" --output json)



