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
NAN_METHOD(create)
{
    // prepare new pbf_writer to create new tile
    std::string final_tile;
    protozero::pbf_writer final_tile_writer(final_tile);


    {
        protozero::pbf_writer layer_writer(final_tile_writer, 3);

        // add layer version
        std::uint32_t version = 2; // default to 2
        layer_writer.add_uint32(15, version); // version

        std::string name = "single_point";
        layer_writer.add_string(1, name.data(), name.size()); // name

        // keys
        // layer_writer.add_string(3, "string");
        // layer_writer.add_string(3, "float");
        // layer_writer.add_string(3, "double");
        // layer_writer.add_string(3, "int64");
        // layer_writer.add_string(3, "uint64");
        // layer_writer.add_string(3, "sint64");
        layer_writer.add_string(3, "bool");

        
        // { // string
        //     protozero::pbf_writer value_writer_string(layer_writer, 4);
        //     value_writer_string.add_string(1, "hello");
        // }
        // { // float
        //     protozero::pbf_writer value_writer_string(layer_writer, 4);
        //     float float_value = 9.000023;
        //     value_writer_string.add_float(2, float_value);
        // }
        // { // double
        //     protozero::pbf_writer value_writer_string(layer_writer, 4);
        //     double double_value = 8.99999999999996;
        //     value_writer_string.add_double(3, double_value);
        // }
        // { // int64
        //     protozero::pbf_writer value_writer_string(layer_writer, 4);
        //     std::int64_t int64_value = 9223372036854775807;
        //     value_writer_string.add_int64(4, int64_value);
        // }
        // { // uint64
        //     protozero::pbf_writer value_writer_string(layer_writer, 4);
        //     std::uint64_t uint64_value = -922337203685477580;
        //     value_writer_string.add_uint64(5, uint64_value);
        // }
        // { // sint64
        //     protozero::pbf_writer value_writer_string(layer_writer, 4);
        //     std::int64_t sint64_value = 9123372036854775807;
        //     value_writer_string.add_sint64(6, sint64_value);
        // }
        { // bool
            protozero::pbf_writer value_writer_string(layer_writer, 4);
            bool bool_value = true;
            value_writer_string.add_bool(7, bool_value);
        }

        // extent
        std::uint32_t extent = 4096;
        layer_writer.add_uint32(5, extent);

        // features
        {
            protozero::pbf_writer feature_writer(layer_writer, 2);
            std::uint64_t id = 123;
            feature_writer.add_uint64(1, id); // feature id
            
            std::vector<uint32_t> tags = { 0, 0 }; // 'hello': 'world'
            feature_writer.add_packed_int32(2, std::begin(tags), std::end(tags)); // feature tags 

            // std::uint32_t geom_type = 0; // UNKNOWN
            std::uint32_t geom_type = 1; // POINT
            // std::uint32_t geom_type = 2; // LINESTRING
            // std::uint32_t geom_type = 3; // POLYGON
            feature_writer.add_enum(3, geom_type);

            std::vector<uint32_t> geom = { 9, 50, 34 }; // point
            // std::vector<uint32_t> geom = { 17, 10, 14, 3, 9 }; // multipoint 
            // std::vector<uint32_t> geom = { 9, 4, 4, 18, 0, 16, 16, 0 }; // linestring
            // std::vector<uint32_t> geom = { 9, 4, 4, 18, 0, 16, 16, 0, 9, 17, 17, 10, 4, 8 }; // multilinestring
            // std::vector<uint32_t> geom = { 9, 6, 12, 18, 10, 12, 24, 44, 15 }; // polygon
            feature_writer.add_packed_int32(4, std::begin(geom), std::end(geom)); // feature geometry
        }
    }
    
    // return the new buffer
    info.GetReturnValue().Set(Nan::CopyBuffer((char*)final_tile.data(), final_tile.size()).ToLocalChecked());
    return;
}

extern "C" {
    static void init(v8::Handle<v8::Object> target) {
        Nan::HandleScope scope;
        Nan::SetMethod(target, "create", create);
    }
    #define MAKE_MODULE(_modname) NODE_MODULE( _modname, init);
    MAKE_MODULE(MODULE_NAME);
}