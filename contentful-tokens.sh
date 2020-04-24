# keys populated by Travis CI
cat << EOF > ./src/contentful-tokens.json
{"space": "$CONTENTFUL_SPACE", "accessToken": "$CONTENTFUL_ACCESS_TOKEN"}
EOF