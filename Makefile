GULP = node_modules/.bin/gulp

.PHONY: gulp-build gulp-watch

gulp-build: node_modules
	$(GULP) build

gulp-watch: node_modules
	$(GULP) watch

gulp-images: node_modules
	$(GULP) images

gulp-webserver: node_modules
	$(GULP) webserver

node_modules:
	npm install
