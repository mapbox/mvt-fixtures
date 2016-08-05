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
    if (info.Length() < 1) {
        Nan::ThrowTypeError("`layers` array not provided.");
        return;
    }
    if (!info[0]->IsArray()) {
        Nan::ThrowTypeError("`layers` is not an array.");
        return;
    }
    v8::Local<v8::Array> layers = info[0].As<v8::Array>();
    unsigned num_layers = layers->Length();
    if (num_layers < 1) {
        Nan::ThrowTypeError("Must provide a `layers` array with at least one layer object.");
    }

    // prepare new pbf_writer to create new tile
    std::string final_tile;
    protozero::pbf_writer final_tile_writer(final_tile);

    for (unsigned i=0; i < num_layers; ++i) {
        v8::Local<v8::Value> layer_val = layers->Get(i);
        if (!layer_val->IsObject())
        {
            Nan::ThrowTypeError("layers must be objects");
            return;
        }
        v8::Local<v8::Object> layer_obj = layer_val->ToObject();

        {
            protozero::pbf_writer layer_writer(final_tile_writer, 3);

            // add layer version
            std::uint32_t version = 2; // default to 2
            if (layer_obj->Has(Nan::New("version").ToLocalChecked())) {
                v8::Local<v8::Value> version_val = layer_obj->Get(Nan::New("version").ToLocalChecked());
                // put a visitor here for encoding different types
                if (!version_val->IsUint32()) {
                    Nan::ThrowTypeError("Version must be a positive integer."); // get rid of this, this is an opinion
                    return;
                }
                version = version_val->Uint32Value();
            }
            layer_writer.add_uint32(15, version); // version

            std::string name = "layer_name";
            layer_writer.add_string(1, name.data(), name.size()); // name

            // keys
            layer_writer.add_string(3, "hello");

            
            {
                protozero::pbf_writer value_writer_string(layer_writer, 4);
                value_writer_string.add_string(1, "world");
            }

            // extent
            std::uint32_t extent = 4096;
            layer_writer.add_uint32(5, extent);

            // features
            {
                protozero::pbf_writer feature_writer(layer_writer, 2);
                std::uint64_t id = 123;
                feature_writer.add_uint64(1, id); // feature id
                
                std::vector<uint32_t> tags = { 0 }; // 'hello': 'world'
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

                std::uint32_t waka = 3;
                feature_writer.add_uint32(10, waka);
            }
        }

    }

    // v8::Local<v8::Object> features = info[1].As<v8::Array>();
    
    // if (!options->IsObject()) {
    //     Nan::ThrowError("options must be an object");
    //     return;
    // }

    // if (options->Has(Nan::New("maxzoom").ToLocalChecked())) {
    //     v8::Local<v8::Value> maxzoom_val = options->Get(Nan::New("maxzoom").ToLocalChecked());
    //     if (!maxzoom_val->IsNumber()) {
    //         CallbackError("option 'maxzoom' must be a Number", callback);
    //         return;
    //     }

    //     maxzoom = maxzoom_val->NumberValue();
    // }

    // prepare original buffer if it exists
    // const char *original_tile = node::Buffer::Data(buffer);
    // std::size_t dataLength = node::Buffer::Length(buffer);
    // protozero::pbf_reader original_tile_reader(original_tile, dataLength);

    

    // prepare layer pbf_writer to add to final_tile_writer
    

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