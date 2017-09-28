if (typeof APP === 'undefined') { var APP = {};}APP.Templates = APP.Templates || {};APP.Templates['error-template'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class='container'>\n    <div class='row'>\n        <div class='col-md-6 col-md-offset-6'>\n            <h1>error</h1>\n            <h2>"
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error","hash":{},"data":data}) : helper)))
    + "</h2>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
APP.Templates['footer/footer'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n	<h4>FOOTER</h4>\n</div>\n";
},"useData":true});
APP.Templates['layout'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- app layout -->\n<div id='notification'></div>\n<div id='nav' class='navbar navbar-inverse navbar-fixed-top' role='navigation'></div>\n<div id='main'></div>\n<div id='footer'></div>\n";
},"useData":true});
APP.Templates['main/about/about'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <h3>ABOUT</h3>\n</div>";
},"useData":true});
APP.Templates['main/contact/contact'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <h3>CONTACT</h3>\n</div>";
},"useData":true});
APP.Templates['main/intro'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <h3>INTRO Main</h3>\n</div>";
},"useData":true});
APP.Templates['main/products/product-form'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "id:"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</br>\nname: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</br>\nqts: "
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "\n\n<div class='form-group'>\n  <div class=\"input-group\">\n      <input id='product-id' type='hidden'/>\n  </div>\n </div>\n \n<div class='form-group'>\n  <label class=\"control-label\" for=\"product-name\">Name</label>\n  <input id='product-name' type='text' class='form-control' \nplaceholder='product name' value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" /> \n  <span class='validation-error'></span>\n</div>\n\n<div class='form-group'>\n  <label class=\"control-label\" for=\"product-qts\">qts</label>\n  <input id='product-qts' type='text' class='form-control' \nplaceholder='quantity no' value=\""
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "\" />\n  <span class='validation-error'></span>\n</div>\n\n<button class='btn btn-submit' %>Save</button> \n";
},"useData":true});
APP.Templates['main/products/product-item'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='item'>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>>\n<td class='item'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n<td class='item'>"
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "</td> \n<td class='item-destroy'>X</td>";
},"useData":true});
APP.Templates['main/products/product-items'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
APP.Templates['main/products/product-show'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h3>PRODUCT</h3>\n<div id='id'>ID: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div id='name'>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div id='qts'>Qts: "
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "</div>\n<button id='edit'>Edit</button>\n";
},"useData":true});
APP.Templates['main/products/product'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>ID: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div>Qts: "
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});
APP.Templates['main/products/products-index'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <h3>PRODUCTS</h3>\n</div>\n<button class=\"btn btn-default add-item\">add product</button>\n<table class=\"table\">\n  <thead>\n    <th>ID</th>\n    <th>Name</th>\n    <th>Qts</th>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";
},"useData":true});
APP.Templates['main/products/products'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id='products'></div>";
},"useData":true});
APP.Templates['main/users/user-form'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "id: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " </br>\nname: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"surname","hash":{},"data":data}) : helper)))
    + " </br>\nemail: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\n\n<div class='form-group'>\n  <div class=\"input-group\">\n    <input id='user-id' type='hidden'/>\n  </div>\n</div>\n\n<div class='form-group'>\n  <label class=\"control-label\" for=\"user-name\">Name</label>\n  <input id='user-name' type='text' class='form-control' placeholder='user \nname' value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" /> \n  <span class='validation-error'></span>\n</div>\n\n<div class='form-group'>\n  <label class=\"control-label\" for=\"user-surname\">Surname</label>\n  <input id='user-surname' type='text' class='form-control' \nplaceholder='user surname' value=\""
    + alias4(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"surname","hash":{},"data":data}) : helper)))
    + "\" /> \n  <span class='validation-error'></span>\n</div>\n\n<div class='form-group'>\n  <label class=\"control-label\" for=\"user-email\">email</label>\n  <input id='user-email' type='text' class='form-control' \nplaceholder='email' value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" />\n  <span class='validation-error'></span>\n</div>\n\n<button class='btn btn-submit' %>Save</button> ";
},"useData":true});
APP.Templates['main/users/user-item'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='item'>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>>\n<td class='item'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n<td class='item'>"
    + alias4(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"surname","hash":{},"data":data}) : helper)))
    + "</td>\n<td class='item'>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td> \n<td class='item-destroy'>X</td>";
},"useData":true});
APP.Templates['main/users/user-items'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
APP.Templates['main/users/user-product-form'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  id: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</br>\n  name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</br>\n  qts: "
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "\n\n  <div class='form-group'>\n    <div class=\"input-group\">\n      <input id='user-id' type='hidden' value=\""
    + alias4(((helper = (helper = helpers.ownerId || (depth0 != null ? depth0.ownerId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ownerId","hash":{},"data":data}) : helper)))
    + "\"/>\n      <input id='product-id' type='hidden' value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>\n    </div>\n  </div>\n  <div class='form-group'>\n      <label class=\"control-label\" for=\"product-name\">Name</label>\n      <input id='product-name' type='text' class='form-control' \nplaceholder='product name' value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" /> \n      <span class='validation-error'></span>\n  </div>\n  <div class='form-group'>\n      <label class=\"control-label\" for=\"product-qts\">qts</label>\n      <input id='product-qts' type='text' class='form-control' \nplaceholder='quantity no' value=\""
    + alias4(((helper = (helper = helpers.qts || (depth0 != null ? depth0.qts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qts","hash":{},"data":data}) : helper)))
    + "\" />\n      <span class='validation-error'></span>\n  </div>\n                                \n  <button class='btn btn-submit' %>Save</button> ";
},"useData":true});
APP.Templates['main/users/user-show'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='row'>\n  <br>\n  <div class='col-md-3'>\n    <h3 style='margin-top: 0px'>USER</h3>\n    <div id='id'>ID: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div><br>\n    <div>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n    <div>Surname: "
    + alias4(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"surname","hash":{},"data":data}) : helper)))
    + "</div>\n    <div>Email: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</div>\n    <button id='edit'>Edit</button>\n  </div>\n  <div class='col-md-9'>\n    <button id='user-products'>user products</button>\n    <div id='products'></div>\n  </div>\n</div>\n";
},"useData":true});
APP.Templates['main/users/user'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>ID: "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div>Name: "
    + alias4(((helper = (helper = helpers.surname || (depth0 != null ? depth0.surname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"surname","hash":{},"data":data}) : helper)))
    + "</div><br>\n<div>Qts: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});
APP.Templates['main/users/users-index'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <h3>USERS</h3>\n</div>\n<button class=\"btn btn-default add-item\">add user</button>\n<table class=\"table\">\n  <thead>\n    <th>ID</th>\n    <th>Name</th>\n    <th>Surname</th>\n    <th>Email</th>\n  </thead>\n  <tbody>\n  </tbody>\n</table>";
},"useData":true});
APP.Templates['main/users/users'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id='users'></div>";
},"useData":true});
APP.Templates['nav-bar/nav-bar'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n  <!-- Brand logo -->\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <img src=\"http://placehold.it/150x50&text=Logo\" alt=\"\">\n    </a>\n  </div>\n\n  <!-- Navigation links -->\n  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"nav navbar-nav\">\n      <li><a href=\"#about\">About</a></li>\n      <li><a href=\"#products\" >Products</a></li>\n      <li><a href=\"#users\" >Users</a></li>\n      <li><a href=\"#contact\">Contact</a></li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});//# sourceMappingURL=templs.map
