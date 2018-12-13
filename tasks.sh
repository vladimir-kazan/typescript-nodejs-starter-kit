alias wrk=/Users/vkuznetsov/cruise/3rd-party/wrk/wrk
echo "v1"
wrk -d1m http://localhost:5000/api/v1/users
wrk -d1m http://localhost:5000/api/v1/users
wrk -d1m http://localhost:5000/api/v1/users
wrk -d1m http://localhost:5000/api/v1/users
wrk -d1m http://localhost:5000/api/v1/users
echo "v2"
wrk -d1m http://localhost:5000/api/v2/users
wrk -d1m http://localhost:5000/api/v2/users
wrk -d1m http://localhost:5000/api/v2/users
wrk -d1m http://localhost:5000/api/v2/users
wrk -d1m http://localhost:5000/api/v2/users

