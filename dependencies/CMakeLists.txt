cmake_minimum_required(VERSION 3.13)

include("./cmake/helpers.cmake")

package_json_get("PROJECT_VERSION" "version")
package_json_get("PROJECT_DESCRIPTION" "description")
package_json_get("PROJECT_HOMEPAGE_URL" "homepage")

project(
    uvcnode
    VERSION "${PROJECT_VERSION}"
    DESCRIPTION "${PROJECT_DESCRIPTION}"
    HOMEPAGE_URL "${PROJECT_HOMEPAGE_URL}"
)

message(STATUS "Building ${PROJECT_NAME} (v${${PROJECT_NAME}_VERSION}) ${${PROJECT_NAME}_HOMEPAGE_URL}")

include("./cmake/cmake-conan.cmake")

set(projectSourceFiles "src/dummy.c" "src/dummy.h")

add_library("${PROJECT_NAME}_shared" SHARED "${projectSourceFiles}")
target_link_libraries("${PROJECT_NAME}_shared" CONAN_PKG::libuvc)
target_include_directories("${PROJECT_NAME}_shared" PRIVATE "${NODE_ADDON_API_DIR}")
