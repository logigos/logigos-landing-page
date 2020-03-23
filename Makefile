ASSETS_DIR = ./src/images/
ASSETS_REMOTE_NAME = origin
ASSETS_BRANCH = master
PATH_ENV_PROD_ENCODING = .env.production
RESULT_ENCODING = .env.encode
RESULT_REVERSE_BY_DECODE = .env.decode
PATH_ENV_DEVELOP_ENCODING = .env.development

assets: assets-pathing-and-pulliing
fix-assets-build: assets-getassets-build-serve
encode_env_prod: encoding_env_prod

# this target for fetching all assets on assets-repo to develop local machine.
assets-pathing-and-pulliing:
	cd $(ASSETS_DIR) && git pull $(ASSETS_REMOTE_NAME) $(ASSETS_BRANCH)
# this target for faster fix assets on stating process
assets-getassets-build-serve:
	make assets && gatsby build && gatsby serve
# this target for encoding prod-environment with base64
encoding_env_prod:
	cat ${PATH_ENV_PROD_ENCODING} | base64 > ${RESULT_ENCODING} && cat ${RESULT_ENCODING} | base64 -D > ${RESULT_REVERSE_BY_DECODE}