JPGFILES   := $(wildcard **/**/*.jpg)
JSFILES    := scripts/main.js scripts/stars.js

JSMINFILES := $(patsubst %.js,%.min.js, $(JSFILES))

OPTIMIZER  := jpegoptim
MINIFIER   := yui-compressor


.PHONY: all
all: minify

.PHONY: optimize
optimize:
	@echo "Optimizing images"
	@$(OPTIMIZER) -o $(JPGFILES) --strip-all --threshold=5 --max=93

.PHONY: minimize
minify: $(JSMINFILES)

%.min.js: %.js
	@echo "Minifying scripts"
	$(MINIFIER) $^ > $@

server:
	jekyll serve --watch

check:
	@echo "Check jekyll"
	@which jekyll > /dev/null

	@echo "Check $(OPTIMIZER)"
	@which $(OPTIMIZER) > /dev/null

	@echo "Check $(MINIFIER)"
	@which $(MINIFIER) > /dev/null
