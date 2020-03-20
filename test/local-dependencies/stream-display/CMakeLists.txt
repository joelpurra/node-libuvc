cmake_minimum_required(VERSION 3.13)

project(stream-display)

include("../../../dependencies/build/conanbuildinfo.cmake")
find_package(OpenCV REQUIRED)
find_package(Threads REQUIRED)

include_directories("${OpenCV_INCLUDE_DIRS}")

add_executable(stream-display stream-display.cpp)

target_link_libraries(stream-display Threads::Threads "${OpenCV_LIBS}" uvc)
