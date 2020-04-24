# set in Travis environment:
# $WEBHOST_USER
# $WEBHOST_DOMAIN
# $WEBHOST_ROOT

# 1) Remove temp directory if it exists
# 2) Make a new empty temp directory
ssh $WEBHOST_USER@$WEBHOST_DOMAIN "rm -rf $WEBHOST_ROOT.tmp && mkdir $WEBHOST_ROOT.tmp"

# Copy newest files to temp dir on server
# scp -rp ./build/(*|.*) $WEBHOST_USER@$WEBHOST_DOMAIN:$WEBHOST_ROOT.tmp/
# rsync -av -s 'ssh -i /deploy_key' $WEBHOST_USER@$WEBHOST_DOMAIN:$WEBHOST_ROOT/ ./build/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/build/* $WEBHOST_USER@$WEBHOST_DOMAIN:$WEBHOST_ROOT/

# 1) Remove previous build back-up folder
# 2) Copy server-generated cgi-bin from prod to temp deploy folder
# 3) Rename production folder to back-up
# 4) Rename temp folder to production
ssh $WEBHOST_USER@$WEBHOST_DOMAIN "rm -rf $WEBHOST_ROOT.bak && cp -R $WEBHOST_ROOT/cgi-bin $WEBHOST_ROOT.tmp/ && mv $WEBHOST_ROOT $WEBHOST_ROOT.bak && mv $WEBHOST_ROOT.tmp $WEBHOST_ROOT"
