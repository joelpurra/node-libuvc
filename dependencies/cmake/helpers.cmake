set(package_json_path "${CMAKE_SOURCE_DIR}/../package.json")

macro(package_json_get output_variable package_json_property)
    execute_process(
        COMMAND node -p "require('${package_json_path}').${package_json_property}"
        OUTPUT_STRIP_TRAILING_WHITESPACE
        OUTPUT_VARIABLE property_value
    )
    set("${output_variable}" "${property_value}")
endmacro(package_json_get)
