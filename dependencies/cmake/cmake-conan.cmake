# https://github.com/conan-io/conan

# https://github.com/conan-io/cmake-conan
set(CONAN_CMAKE "${CMAKE_SOURCE_DIR}/cmake/conan.cmake")

if(NOT EXISTS "${CONAN_CMAKE}")
    message(STATUS "Downloading conan.cmake from https://github.com/conan-io/cmake-conan")
    file(
        # TODO: update version when available.
        DOWNLOAD "https://github.com/conan-io/cmake-conan/raw/v0.16.1/conan.cmake"
        "${CONAN_CMAKE}"
    )
endif()

include("${CONAN_CMAKE}")

# https://github.com/bincrafters
conan_add_remote(
    NAME "bincrafters"
    URL "https://api.bintray.com/conan/bincrafters/public-conan"
)

conan_cmake_run(
    CONANFILE "conanfile.txt"
    BASIC_SETUP
    CMAKE_TARGETS
)
