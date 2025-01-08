oc process -f templates/jmeter-bc.yaml \
    -p APP_NAMESPACE=dumbexpress \
    -p APPLICATION_NAME=dumbexpress | oc apply -f -

oc process -f templates/jmeter-dc.yaml \
    -p APP_NAMESPACE=$JMETER_NAMESPACE \
    -p APPLICATION_NAME=$JMETER_APP_NAME \
    -p MEMORY_REQUEST=$MEMORY_REQUEST \
    -p MEMORY_LIMIT=$MEMORY_LIMIT \
    -p CPU_REQUEST=$CPU_REQUEST \
    -p CPU_LIMIT=$CPU_LIMIT \
    -p TEST_NAME=$JMETER_TEST | oc apply -f -


