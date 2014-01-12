
if [ $# -ne 1 ]
then
    echo "Usage: `basename $0` <lang>"
    exit 1
fi

lang=$1

rm -rf build
mkdir build
cp build.sh build
cd build
sh build.sh $lang
