#include "evilmvt.hpp"

#include <exception>
#include <iostream>
#include <utility>
#include <protozero/pbf_reader.hpp>
#include <protozero/pbf_writer.hpp>

/**
 * Create a Mapbox Vector Tile with evil, non-compliant values.
 *
 * @name evil
 * @param {Buffer} buffer - Vector Tile PBF
 *
 */
NAN_METHOD(evil)
{
    // v8::Local<v8::Object> buffer = info[0]->ToObject();
    // if (buffer->IsNull() || buffer->IsUndefined() || !node::Buffer::HasInstance(buffer)) {
    //     Nan::ThrowTypeError("First argument must be a valid buffer.");
    //     return;
    // }

    // prepare original buffer if it exists
    // const char *original_tile = node::Buffer::Data(buffer);
    // std::size_t dataLength = node::Buffer::Length(buffer);
    // protozero::pbf_reader original_tile_reader(original_tile, dataLength);

    // prepare new pbf_writer to create new tile
    std::string final_tile;
    protozero::pbf_writer final_tile_writer(final_tile);

    // prepare layer pbf_writer to add to final_tile_writer
    protozero::pbf_writer layer_writer(final_tile_writer, 3);

    // add layer attributes
    layer_writer.add_uint32(15, 2); // version
    std::string name = "layer_name";
    layer_writer.add_string(1, name.data(), name.size()); // name

    // keys
    std::string key = "hello";
    layer_writer.add_string(3, key);

    // values
    protozero::pbf_writer value_writer_string(layer_writer, 4);
    value_writer_string.add_string(1, "world");

    // features
    protozero::pbf_writer feature_writer(layer_writer, 2);
    std::uint64_t id = 123;
    feature_writer.add_uint64(1, id); // feature id
    
    std::vector<int> tags = { 0, 0 }; // 'hello': 'world'
    feature_writer.add_packed_int32(1, std::begin(tags), std::end(tags)); // feature tags 

    std::uint32_t geom_type = 3; // POLYGON
    protozero::pbf_writer enum_writer(feature_writer, 3); // GeomType enum
    enum_writer.add_enum(3, geom_type); // feature geometry type

    std::vector<int> geom = { 9, 50, 34 }; // single point
    feature_writer.add_packed_int32(4, std::begin(geom), std::end(geom)); // feature geometry

    // return the new buffer
    info.GetReturnValue().Set(Nan::NewBuffer((char*)final_tile.data(), final_tile.size()).ToLocalChecked());
    return;
}

extern "C" {
    static void init(v8::Handle<v8::Object> target) {
        Nan::HandleScope scope;
        Nan::SetMethod(target, "evil", evil);
    }
    #define MAKE_MODULE(_modname) NODE_MODULE( _modname, init);
    MAKE_MODULE(MODULE_NAME);
}