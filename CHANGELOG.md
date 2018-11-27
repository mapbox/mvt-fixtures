## 3.5.1

* Remove mason_packages from NPM publish - remove .npmignore all together and use .gitignore

## 3.5.0

* Update fixture `011` to use a larger, less-likely-to-come-into-future-conflict number for the custom value type [#99](https://github.com/mapbox/mvt-fixtures/pull/99)
* Add a new fixture `061` with with a linestring geometry that contains a ClosePath command [#94](https://github.com/mapbox/mvt-fixtures/pull/94)

## 3.4.0

* Add two new fixtures used for layer compositing tests [#97](https://github.com/mapbox/mvt-fixtures/pull/97)

## 3.3.1

* Fix 056 coordinates [#89](https://github.com/mapbox/mvt-fixtures/issues/89)
* Fix 058 MoveTo command [#90](https://github.com/mapbox/mvt-fixtures/issues/90)

## 3.3.0

* add broken geometry fixtures [#86](https://github.com/mapbox/mvt-fixtures/pull/86)
* clipped square fixtures [#87](https://github.com/mapbox/mvt-fixtures/pull/87)
* large MoveTo and LineTo command fixtures [#88](https://github.com/mapbox/mvt-fixtures/pull/88)

## 3.2.0

* Update fixture `002` to include a set of tags. This makes it more "testable" since the ID does not exist. [#85](https://github.com/mapbox/mvt-fixtures/pull/85)
* Mark fixture `009` as valid [#64](https://github.com/mapbox/mvt-fixtures/issues/64)

## 3.1.1

* Fix fixture `011` to throw expected error per https://github.com/mapbox/mvt-fixtures/pull/82

## 3.1.0

* Add OSM QA tiles for more diverse real-world examples [#76](https://github.com/mapbox/mvt-fixtures/issues/76)
* Update fixture 015 (duplicate layers) to include unique tags, which simplifies asserting on expected features [#78](https://github.com/mapbox/mvt-fixtures/pull/78)

## 3.0.1

* Fix San Francisco real-world fixtures to z15 so we include buildings. Also reduces the number of fixtures dramatically to save on size. [#72](https://github.com/mapbox/mvt-fixtures/pull/72)

## 3.0.0

Complete restructure of mvt-fixtures using pbf and protocol-buffers-schema, focused on maintainability and tools for quickly generating new fixtures. :tada: Major improvements:

* All fixtures have their own source file (by ID) that contains information including a description, validity specs, and a JSON representation of the fixture used to generate a protocol buffer. All fixtures are described in FIXTURES.md
* Include a javascript API with `get` and `each` methods, described in API.md
* Add real-world fixtures from mapbox-streets and mapbox-terrain tilesets. All real world fixtures are described in REAL-WORLD.md
* Add protoc scripts to dump raw text form of buffers to stdout for debugging
* Automated API and fixture documentation

#### 3.0.0-beta7

- Fix some invalid fixtures [#69](https://github.com/mapbox/mvt-fixtures/pull/69)

#### 3.0.0-beta6

- gunzip and null encode all of the real-world fixtures, plus include some fixtures that _are_ gzipped. [#67](https://github.com/mapbox/mvt-fixtures/commits/master)

#### 3.0.0-beta5

- Add real-world fixtures from mapbox-streets and mapbox-terrain tilesets [#49](https://github.com/mapbox/mvt-fixtures/issues/49)
- Another path fix [#65](https://github.com/mapbox/mvt-fixtures/pull/65)

#### 3.0.0-beta4

- Revert 3.0.0-beta3 removal of submodule, fix paths instead

#### 3.0.0-beta3

- Vendorize vector-tile-spec repository so it packages with npm publishes [#61](https://github.com/mapbox/mvt-fixtures/issues/61)

#### 3.0.0-beta2

- Recreate all fixtures that previously existed in 2.x
- Add protoc scripts to dump raw text form of buffers to stdout for debugging
- Update generateBuffer to run specific versions of the Mapbox Vector Tile Specification, or custom proto files
- Generate with proto2 syntax by default instead of proto3 syntax to avoid situations where default values confusion

#### 3.0.0-beta1

- Create source files for all fixtures in the src/ directory - these are node modules which include information about the fixture, including a description, validity specs, and a JSON representation of the fixture.
- Rely on `pbf` and `protocol-buffers-schema` modules to generate fixtures based on the Mapbox Vector Tile Specification, which is now a submodule to this repository.
- All fixtures are generated into the fixtures/ directory programmatically using `npm run build`
- Include a javascript API with `get`, `create`, and `each` methods, described in API.md
- Automatically generate fixture documentation from the source files, located in FIXTURES.md

## 2.1.0

- Rename project to `mvt-fixtures`
- Break fixtures into `valid` and `invalid` directories
- Match version with that of the Mapbox Vector Tile Specification (no longer true as of version 3.x)

## 1.0.0

- First official set of `.mvt` fixtures for usage within tests. All scripts used for create are currently within `_reserve` so we can ponder how to use these in the future.

## 0.0.1

- first
