MODULE_NAME := $(shell node -e "console.log(require('./package.json').name)") 

default: node_modules
	./node_modules/.bin/node-pre-gyp build --loglevel=error --clang=1

debug:
	npm install --build-from-source=$(MODULE_NAME) --verbose --clang=1

clean:
	rm -rf node_modules
	rm -rf lib/binding
	rm -rf build

node_modules:
	npm install --build-from-source=$(MODULE_NAME) --clang=1

docs:
	npm run docs

test:
	npm test

.PHONY: test docs