## 3.0.0-beta5

- Add real-world fixtures from mapbox-streets and mapbox-terrain tilesets [#49](https://github.com/mapbox/mvt-fixtures/issues/49)
- Another path fix [#65](https://github.com/mapbox/mvt-fixtures/pull/65)

## 3.0.0-beta4

- Revert 3.0.0-beta3 removal of submodule, fix paths instead

## 3.0.0-beta3

- Vendorize vector-tile-spec repository so it packages with npm publishes [#61](https://github.com/mapbox/mvt-fixtures/issues/61)

## 3.0.0-beta2

- Recreate all fixtures that previously existed in 2.x
- Add protoc scripts to dump raw text form of buffers to stdout for debugging
- Update generateBuffer to run specific versions of the Mapbox Vector Tile Specification, or custom proto files
- Generate with proto2 syntax by default instead of proto3 syntax to avoid situations where default values confusion

## 3.0.0-beta1

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
