# set in Travis environment:
# $WEBHOST_USER
# $WEBHOST_DOMAIN
# $WEBHOST_ROOT
# $WEBHOST_PUBLIC_KEY

WEBHOST_ROOT_BACKUP=$WEBHOST_ROOT.bak

echo 'Backing up last deployed version of the site...'
ssh $WEBHOST_USER@$WEBHOST_DOMAIN "rm -rf $WEBHOST_ROOT_BACKUP && cp -R $WEBHOST_ROOT $WEBHOST_ROOT_BACKUP"

echo 'Deploying latest files...'
scp -rp $TRAVIS_BUILD_DIR/build/* $WEBHOST_USER@$WEBHOST_DOMAIN:$WEBHOST_ROOT/