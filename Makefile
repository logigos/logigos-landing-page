ASSETS_DIR = ./src/images/
ASSETS_REMOTE_NAME = origin
ASSETS_BRANCH = master

assets: assets-pathing-and-pulliing
fix-assets-build: assets-getassets-build-serve
# this target for fetching all assets on assets-repo to develop local machine.
assets-pathing-and-pulliing:
	cd $(ASSETS_DIR) && git pull $(ASSETS_REMOTE_NAME) $(ASSETS_BRANCH)
assets-getassets-build-serve:
	make assets && gatsby build && gatsby serve