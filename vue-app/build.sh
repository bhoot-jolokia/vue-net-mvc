rm ../MvcApp/wwwroot/js/add.js
rm ../MvcApp/wwwroot/js/chunk-vendors.js
npm run build
cp dist/js/add.*.js ../MvcApp/wwwroot/js/add.js 
cp dist/js/chunk-vendors.*.js ../MvcApp/wwwroot/js/chunk-vendors.js 