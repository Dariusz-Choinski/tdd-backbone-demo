'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var initViewGlobalRegisterBehavior = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            APP.Behaviors.ViewGlobalRegister = behavior;

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function initViewGlobalRegisterBehavior() {
    return _ref.apply(this, arguments);
  };
}();

var initRestEditItemBehavior = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            APP.Behaviors.RestEditItemBehavior = behavior$1;

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function initRestEditItemBehavior() {
    return _ref2.apply(this, arguments);
  };
}();

/** Restfull component: form view behavior */

var initRestFormBehaviorWithCollection = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            APP.Behaviors.RestFormBehaviorWithCollection = behavior$2;

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function initRestFormBehaviorWithCollection() {
    return _ref3.apply(this, arguments);
  };
}();

/** setup APP.Behaviors as behaviors storage */


/** register behaviors in APP.Behaviors */
var initBehaviors = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Promise.all([initViewGlobalRegisterBehavior(), initRestEditItemBehavior(), initRestFormBehaviorWithCollection()]);

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function initBehaviors() {
    return _ref4.apply(this, arguments);
  };
}();

/** Application module initialization */
var initAppModule = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            APP.Modules.App = {};
            APP.Modules.App.Views = {};
            APP.Modules.App.Controller = {};
            APP.Modules.App.Router = {};

            APP.Modules.App.Views.app = appView;
            APP.Modules.App.Controller.app = appCtrl;
            APP.Modules.App.Router.main = mainRouter;
            APP.Views.app = appView;

          case 8:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function initAppModule() {
    return _ref5.apply(this, arguments);
  };
}();

/** Products module initialization */
var initProductsModule = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            APP.Modules.Products = {};
            APP.Modules.Products.Views = {};
            APP.Modules.Products.Router = {};
            APP.Modules.Products.Collection = {};

            APP.Modules.Products.Collection.products = products;
            APP.Modules.Products.Router.products = productsRouter;
            APP.Collections.products = products;

          case 7:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function initProductsModule() {
    return _ref6.apply(this, arguments);
  };
}();

/** Users module initialization */
var initUsersModule = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            APP.Modules.Users = {};
            APP.Modules.Users.Views = {};
            APP.Modules.Users.Router = {};
            APP.Modules.Users.Collection = {};

            APP.Modules.Users.Collection.users = users;
            APP.Modules.Users.Router.users = usersRouter;
            APP.Collections.users = users;

          case 7:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function initUsersModule() {
    return _ref7.apply(this, arguments);
  };
}();

/** Initialization flow control */
var InitApplication = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return initBehaviors();

          case 2:
            _context8.next = 4;
            return initAppModule();

          case 4:
            _context8.next = 6;
            return initProductsModule();

          case 6:
            _context8.next = 8;
            return initUsersModule();

          case 8:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function InitApplication() {
    return _ref8.apply(this, arguments);
  };
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/** Optional bahavior.
 * Register View in APP.Views &/or APP.Modules.<% moduleName %>.Views as global variable.
 * 1.Helpfull in app state inspection (debugging),
 * 2.Gives handfull access to modules, routers views and controllers.
 * 3.View triger instantiation event.
 * 4.App testing make easy
 * Highlly recomended !
 */

var behavior = Marionette.Behavior.extend({
  onAttach: function onAttach() {
    this._registerView();
    this._registerModuleView();
  },
  onDestroy: function onDestroy() {
    this._unregisterView();
    this._unregisterModuleView();
  },
  _registerView: function _registerView() {
    var viewName = this.getOption('viewName');
    var appEvents = Backbone.Radio.channel('app:events');
    APP.Views[viewName] = this.view;
    appEvents.trigger('register:view', viewName);
  },
  _registerModuleView: function _registerModuleView() {
    var viewName = this.getOption('viewName');
    var moduleName = this.getOption('module');
    if (moduleName) {
      var appModuleViews = APP.Modules[moduleName].Views;
      if (appModuleViews) {
        appModuleViews[viewName.split('/').pop()] = this.view;
      }
    }
  },
  _unregisterView: function _unregisterView() {
    var viewName = this.getOption('viewName');
    delete APP.Views[viewName];
  },
  _unregisterModuleView: function _unregisterModuleView() {
    var viewName = this.getOption('viewName');
    var moduleName = this.getOption('module');
    if (moduleName) {
      delete APP.Modules[moduleName].Views[viewName.split('/').pop()];
    }
  }
});

var behavior$1 = Marionette.Behavior.extend({
  ui: {
    edit: '#edit'
  },
  events: {
    'click @ui.edit': 'editModel'
  },

  editModel: function editModel() {
    this.view.triggerMethod('edit:model', this.view.model.id);
  }
});

var behavior$2 = Marionette.Behavior.extend({
  onBeforeRender: function onBeforeRender() {
    this.view.model.url = this.view.collection.url + '/' + this.view.model.id;
    this.modelClone = this.view.model.clone();
  },
  onFormSubmit: function onFormSubmit() {
    var _this = this;

    if (this.view.model.isNew()) {
      this.view.collection.create(this.modelClone.attributes, {
        wait: true,
        success: function success(model) {
          _this.view.triggerMethod('layout:show:model', { model: model }); // redirect to show view
        },
        error: function error(model, response) {
          var message = response.status + ': ' + response.responseText;
          $.notify(message, 'error');
        }
      });
    } else {
      this.view.model.save(this.modelClone.attributes, {
        wait: true,
        success: function success(model) {
          _this.view.triggerMethod('layout:show:model', { model: model }); // redirect to show view
        },
        error: function error(model, response) {
          var message = response.status + ': ' + response.responseText;
          $.notify(message, 'error');
        }
      });
    }
  },
  onUpdateModelAttr: function onUpdateModelAttr(attr) {
    var Input = this.getUI(attr);
    var InputValue = Input.val();
    this.modelClone.set(attr, InputValue);
    var input = {};
    input[attr] = InputValue;
    var Error = this.modelClone.validate(input);
    this._updateInput(Input, Error);
  },
  _updateInput: function _updateInput(Input, Error) {
    var ErrorLabel = Input.next('.validation-error');
    var InputContainer = Input.closest('.form-group');
    if (Error) {
      InputContainer.addClass('has-error');
      ErrorLabel.text(Error);
    } else {
      InputContainer.removeClass('has-error');
      ErrorLabel.text('');
    }
  },
  _validateEach: function _validateEach(attributes) {
    var Keys = Object.keys(attributes);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        this.onUpdateModelAttr(key);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});

Marionette.Behaviors.behaviorsLookup = function () {
  return APP.Behaviors;
};

var Navbar = Marionette.View.extend({
  template: APP.Templates['nav-bar/nav-bar'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'navbar', module: 'App' } // optional
  }
});

var Footer = Marionette.View.extend({
  template: APP.Templates['footer/footer'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'footer', module: 'App' }
  }

});

var Intro = Marionette.View.extend({
  className: '.intro',
  template: APP.Templates['main/intro'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'intro' } // optional
  }
});

var About = Marionette.View.extend({
  template: APP.Templates['main/about/about'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'main/about', module: 'App' } // optional
  }
});

var Contact = Marionette.View.extend({
  template: APP.Templates['main/contact/contact'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'main/contact', module: 'App' } // optional
  }
});

// content for regions
if (APP.Env === 'development') console.log('init app-view');

/** application view */
var AppView = Marionette.View.extend({
  template: APP.Templates['layout'],
  regions: {
    nav: '#nav',
    main: '#main',
    footer: '#footer'
  },

  onRender: function onRender() {
    this.showChildView('nav', new Navbar());
    this.showChildView('main', new Intro());
    this.showChildView('footer', new Footer());
  },
  showAboutPage: function showAboutPage() {
    this.showChildView('main', new About());
  },
  showContactPage: function showContactPage() {
    this.showChildView('main', new Contact());
  }
});

var appView = new AppView();

/** Application Controller */
var AppCtrl = Marionette.Application.extend({

  /** div in layout to attach the instance of app-view */
  region: '#app',

  /** event calback to attach app-view to region, start history */
  onStart: function onStart() {
    this.showView(APP.Modules.App.Views.app);
    Backbone.history.start();
  }
});

var appCtrl = new AppCtrl();
if (APP.Env === 'development') console.log('init app-ctrl');

/** router for pages in #main region */
var MainRouter = Marionette.AppRouter.extend({

  /** here only routes to static pages */
  routes: {
    about: 'showAbout',
    contact: 'showContact'
  },

  /** routes methods to show only "static" pages by app-view under #app div */
  showAbout: function showAbout() {
    appView.showAboutPage();
  },
  showContact: function showContact() {
    appView.showContactPage();
  }
});

var mainRouter = new MainRouter();
if (APP.Env === 'development') console.log('init main-router');

if (APP.Env === 'development') console.log('-- init app-module');

var DefaultErrorPageView = Marionette.View.extend({
  template: APP.Templates['error-page'],
  model: {},
  initialize: function initialize(message) {
    this.model.attributes = message;
  }
});

/** Restfull component: layout view for child views index, show, new, edit */

var Router = Marionette.AppRouter.extend({});

var RestLayout = Marionette.View.extend({
  initialize: function initialize(options) {
    this.template = options.template;
    this.collection = options.collection;
    this.region = options.region;
    this.path = options.path;
    this.router = options.router || new Router();
    this.bahaviors = options.bahaviors;
    this.ModelsIndexView = options.ModelsIndexView;
    this.ModelShowView = options.ModelShowView;
    this.ModelFormView = options.ModelFormView;
    this.ErrorPageView = options.ErrorPageView || DefaultErrorPageView;
  },


  childViewEvents: {
    'layout:show:model': 'showModelItem',
    'edit:model': 'editModel',
    'new:model': 'newModel'
  },

  childViewTriggers: {
    // region transfer event up to app-view
    'layout:show:model': 'app:show:model'
  },

  showIndex: function showIndex(itemsArray) {
    var indexView = new this.ModelsIndexView(itemsArray);
    this.router.navigate('' + this.path);
    this.showChildView(this.region, indexView);
  },
  showModel: function showModel(model, subPath) {
    this.router.navigate(this.path + '/' + model.id);
    this.showChildView(this.region, new this.ModelShowView(model, subPath));
  },
  showModelItem: function showModelItem(child) {
    this.showModel(child.model);
    //    this.router.navigate(`${this.router.path}/${child.model.id}`);
  },
  showModelForm: function showModelForm(model) {
    this.showChildView(this.region, new this.ModelFormView({ model: model }));
  },
  newModel: function newModel() {
    var model = new this.collection.model();
    this._setOwnerIdOnModel(model);
    this.showModelForm(model);
    this.router.navigate(this.path + '/new');
  },
  editModel: function editModel(id) {
    var model = this.collection.get(id);
    this._setOwnerIdOnModel(model);
    this.showModelForm(model);
    this.router.navigate(this.path + '/edit/' + model.id);
  },
  showError: function showError(error) {
    this.showChildView(this.region, new this.ErrorPageView(error));
  },
  onDestroy: function onDestroy() {
    this.router.active = false;
  },
  _setOwnerIdOnModel: function _setOwnerIdOnModel(model) {
    if (this.router.controller.parentView.model) {
      model.set('ownerId', this.parentView.model.id);
    }
  }
});

/** Restfull component: index view */

var Router$1 = Marionette.AppRouter.extend({});

var Index = Marionette.View.extend({
  navigation: Backbone.Radio.channel('navigation'),
  router: new Router$1(),
  regions: {
    tbody: {
      el: 'tbody',
      replaceElement: true
    }
  },

  initialize: function initialize(itemsArray, ItemsView) {
    this.items = itemsArray;
    this.ItemsView = ItemsView;
  },


  ui: {
    addItem: 'button.add-item'
  },

  events: {
    // 'click @ui.addItem': 'redirectToNewItem'
  },

  triggers: {
    'click @ui.addItem': 'new:model'
  },

  childViewEvents: {
    'show:item': 'listenShowItem'
  },

  childViewTriggers: {
    // region transfer event up to products view
    'show:item': 'layout:show:model'
  },

  onAttach: function onAttach() {
    this.showChildView('tbody', new this.ItemsView(this.items));
  }
});

/** Restfull component: items view */

var EmptyView = Marionette.View.extend({
  template: _.template('Nothing to display.')
});

var Items = Marionette.CollectionView.extend({
  tagName: 'tbody',
  emptyView: EmptyView,

  initialize: function initialize(itemsArray, collection, ItemView) {
    this.childView = ItemView;
    this._setCollection(itemsArray, collection);
  },


  childViewEvents: {
    'show:item': 'listenShowItem'
  },

  childViewTriggers: {
    // empty
  },

  /** condition to control when the EmptyView is rendered
  * by default the collection.models array is checked
  *
    isEmpty() {
      return _.isEmpty(this.collection.models);
    },
  */

  _setCollection: function _setCollection(itemsArray, collection) {
    var collects = collection;
    if (!_.isEmpty(itemsArray)) {
      var models = Object.keys(itemsArray).map(function (k) {
        return itemsArray[k];
      });
      collects = new Backbone.Collection(models);
    }
    this.collection = collects;
  }
});

/** Restfull component: view: item */

var Item = Marionette.View.extend({
  tagName: 'tr',

  ui: {
    show: 'td.item',
    destroy: 'td.item-destroy'
  },

  events: {
    'click @ui.destroy': 'itemDestroy'
  },

  triggers: {
    'click @ui.show': 'show:item'
  },

  itemDestroy: function itemDestroy() {
    this.model.destroy({ wait: true });
  }
});

/** Products module: view: product item extends restfull item */

var ProductItem = function (_Item) {
  _inherits(ProductItem, _Item);

  function ProductItem(model) {
    _classCallCheck(this, ProductItem);

    var _this2 = _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).call(this, model));

    _this2.template = APP.Templates['main/products/product-item'];
    return _this2;
  }

  return ProductItem;
}(Item);

/** Product model.
 * Validation rules included.
 */

var Product = {
  id: null,
  name: null,
  qts: null
};

var Product$1 = Backbone.Model.extend({
  defaults: Product,
  idAttribute: 'id',
  parse: function parse(data) {
    if (_.isArray(data)) return data[0];
    return data;
  },
  validate: function validate(attrs) {
    /** attribute "name" validation rules */
    if (Object.prototype.hasOwnProperty.call(attrs, 'name') && !attrs.name) {
      return 'required';
    }

    if (attrs.name) {
      if (!attrs.name || attrs.name.length < 3) {
        return 'can not be shorter than 3 letters';
      }
    }

    /** attribute "qts" validation rule */
    if (attrs.qts) {
      if (!Number.isInteger(+attrs.qts)) {
        return 'must be a integer number';
      }
    }
  }
});

/** The collection of Products */

var Products = Backbone.Collection.extend({
  model: Product$1,
  url: APP.ServerUrl + '/products'
});

var products = new Products();

/** Products module: view: product items extends restfullt items */

var ProductItems = function (_Items) {
  _inherits(ProductItems, _Items);

  function ProductItems(itemsArray) {
    _classCallCheck(this, ProductItems);

    return _possibleConstructorReturn(this, (ProductItems.__proto__ || Object.getPrototypeOf(ProductItems)).call(this, itemsArray, products, ProductItem));
  }

  // optional, register view in APP.Views and APP.Modules.Products.Views


  _createClass(ProductItems, [{
    key: 'behaviors',
    get: function get() {
      return {
        ViewGlobalRegister: {
          viewName: 'main/products/items',
          module: 'Products'
        }
      };
    }
  }]);

  return ProductItems;
}(Items);

/** Products module: view: product index extends restfull index */

var ProductsIndex = function (_Index) {
  _inherits(ProductsIndex, _Index);

  function ProductsIndex(itemsArray) {
    _classCallCheck(this, ProductsIndex);

    var _this4 = _possibleConstructorReturn(this, (ProductsIndex.__proto__ || Object.getPrototypeOf(ProductsIndex)).call(this, itemsArray, ProductItems));

    _this4.template = APP.Templates['main/products/products-index'];
    return _this4;
  }

  // optional, register view in APP.Views and APP.Modules.Products.Views


  _createClass(ProductsIndex, [{
    key: 'behaviors',
    get: function get() {
      return {
        ViewGlobalRegister: {
          viewName: 'main/products/index',
          module: 'Products'
        }
      };
    }
  }]);

  return ProductsIndex;
}(Index);

var ProductShowView = Marionette.View.extend({
  template: APP.Templates['main/products/product-show'],
  behaviors: {
    RestEditItemBehavior: {},

    // optional, register view in APP.Views and APP.Modules.Products.Views
    ViewGlobalRegister: {
      viewName: 'main/products/show',
      module: 'Products'
    }
  },
  initialize: function initialize(model) {
    this.model = model;
  }
});

var ProductFormView = Marionette.View.extend({
  collection: products,
  template: APP.Templates['main/products/product-form'],
  behaviors: {
    RestFormBehaviorWithCollection: {},
    ViewGlobalRegister: {
      viewName: 'main/products/form',
      module: 'Products'
    }
  },

  ui: {
    name: 'input#product-name',
    qts: 'input#product-qts',
    submit: '.btn-submit'
  },

  events: {
    // can use input instead of: keyup , change, paste
    // 'keyup @ui.name': 'editName',
    // 'change @ui.name': 'editName',
    'input @ui.name': 'editName',
    'input @ui.qts': 'editQts',
    'click @ui.submit': 'formSubmit'
  },

  editName: function editName() {
    this.triggerMethod('update:model:attr', 'name');
  },
  editQts: function editQts() {
    this.triggerMethod('update:model:attr', 'qts');
  },
  formSubmit: function formSubmit() {
    this.triggerMethod('form:submit');
  }
});

/** Products module: products layout view extends rest layout view */

var CustomErrorPage = null; // use default error page

function ProductsLayout(router, path) {
  var layoutView = new RestLayout({
    template: APP.Templates['main/products/products'],
    collection: products,
    region: 'products',
    path: path,
    router: router,
    behaviors: {
      // optional, register view in APP.Views and APP.Modules.Products.Views
      ViewGlobalRegister: {
        viewName: 'main/products/layout',
        module: 'Products'
      }
    },
    ModelsIndexView: ProductsIndex,
    ModelShowView: ProductShowView,
    ModelFormView: ProductFormView,
    ErrorPageView: CustomErrorPage
  });

  layoutView.addRegion('products', '#products');
  return layoutView;
}

var RestController = Marionette.Object.extend({
  initialize: function initialize(options) {
    this.router = options.router;
    this.parentView = options.parentView;
    this.parentViewRegion = options.parentViewRegion;
    this.layout = options.layout;
    this.collection = options.collection;
    this.path = options.path;
    this.active = this.router.active;
  },
  showModelsLayout: function showModelsLayout() {
    this._fetchModels();
    this.modelsLayout = this.layout(this.router, this.path);
    this.parentView.showChildView(this.parentViewRegion, this.modelsLayout);
  },
  showModels: function showModels(models) {
    if (!this.active) this.showModelsLayout();
    this.modelsLayout.showIndex(models);
  },
  showNewModel: function showNewModel() {
    if (!this.active) this.showModelsLayout();
    var model = new this.collection.model();
    this.router.navigate(this.path + '/new');
    this.modelsLayout.showModelForm(model);
  },
  showEditModel: function showEditModel(id) {
    var _this5 = this;

    if (!this.active) this.showModelsLayout();
    this._getModel(id).then(function (model) {
      _this5.router.navigate(_this5.path + '/edit/' + model.id);
      _this5.modelsLayout.showModelForm(model);
    });
  },
  showModel: function showModel(id, subPath) {
    var _this6 = this;

    if (!this.active) this.showModelsLayout();
    this._getModel(id).then(function (model) {
      _this6.modelsLayout.showModel(model, subPath);
    });
  },
  _fetchModels: function _fetchModels() {
    var models = this.collection.models;
    if (_.isEmpty(models)) {
      this.collection.fetch({
        error: function error(_error) {
          return $.notify(_error, 'error');
        }
      });
    }
  },
  _getModel: function _getModel(id) {
    var _this7 = this;

    return new Promise(function (resolve, reject) {
      var item = _this7.collection.get(id);
      if (item) {
        resolve(item);
      } else {
        var newModel = new _this7.collection.model();
        newModel.url = _this7.collection.url + '/' + id;
        newModel.fetch({
          wait: true,
          success: function success(model) {
            resolve(model);
          },
          error: function error(_error2) {
            $.notify(_error2, 'error');
            reject(_error2);
          }
        });
      }
    });
  }
});

function ProductsCtrl(options) {
  return new RestController({
    router: options.router,
    parentView: options.parentView,
    parentViewRegion: options.parentViewRegion,
    path: options.path,
    layout: ProductsLayout,
    collection: products
  });
}

/** router to manage Products */
var ProductsRouter = Marionette.AppRouter.extend({
  path: 'products',
  active: false,
  initialize: function initialize() {
    this.controller = ProductsCtrl({
      router: this,
      parentView: appView,
      parentViewRegion: 'main',
      path: this.path
    });
    this.routes = this.appRoutes;
  },


  appRoutes: {
    'products(/)': 'showModels',
    'products/new(/)': 'showNewModel',
    'products/edit/:id(/)': 'showEditModel',
    'products/:id(/)': 'showModel'
  }
});

var productsRouter = new ProductsRouter();
if (APP.Env === 'development') console.log('init products-router');

if (APP.Env === 'development') console.log('-- init products-module');

/** Users module: view: user item extends restfull item */

var UserItem = function (_Item2) {
  _inherits(UserItem, _Item2);

  function UserItem(model) {
    _classCallCheck(this, UserItem);

    var _this8 = _possibleConstructorReturn(this, (UserItem.__proto__ || Object.getPrototypeOf(UserItem)).call(this, model));

    _this8.template = APP.Templates['main/users/user-item'];
    return _this8;
  }

  return UserItem;
}(Item);

/** User model.
 * Validation rules included.
 */

var User = {
  id: null,
  name: null,
  surname: null,
  email: null
};

var User$1 = Backbone.Model.extend({
  defaults: User,
  idAttribute: 'id',
  parse: function parse(data) {
    if (_.isArray(data)) return data[0];
    return data;
  },
  validate: function validate(attrs) {
    /** name validation rules */
    if (attrs.hasOwnProperty('name') && !attrs.name) {
      return 'required';
    }
    if (attrs.name) {
      if (!attrs.name || attrs.name.length < 3) {
        return "can't be shorter than 3 letters";
      }
    }
    /** surname validation rules */
    if (attrs.hasOwnProperty('surname') && !attrs.surname) {
      return 'required';
    }
    if (attrs.surname) {
      if (!attrs.surname || attrs.surname.length < 1) {
        return "can't be shorter than 3 letters";
      }
    }
    /** email validation rules */
    if (attrs.hasOwnProperty('email') && !attrs.email) {
      return 'required';
    }
    if (attrs.email) {
      if (!attrs.email.includes('@')) {
        return "invalid email";
      }
    }
  }
});

/** The collection of Products */

var Users = Backbone.Collection.extend({
  model: User$1,
  url: APP.ServerUrl + '/users'
});

var users = new Users();

/** Users module: view: user items extends restfullt items */

var UserItems = function (_Items2) {
  _inherits(UserItems, _Items2);

  function UserItems(itemsArray) {
    _classCallCheck(this, UserItems);

    return _possibleConstructorReturn(this, (UserItems.__proto__ || Object.getPrototypeOf(UserItems)).call(this, itemsArray, users, UserItem));
  }

  // optional, register view in APP.Views and APP.Modules.Users.Views


  _createClass(UserItems, [{
    key: 'behaviors',
    get: function get() {
      return {
        ViewGlobalRegister: {
          viewName: 'main/users/items',
          module: 'Users'
        }
      };
    }
  }]);

  return UserItems;
}(Items);

/** Users module: view: user index extends restfull index */

var UsersIndex = function (_Index2) {
  _inherits(UsersIndex, _Index2);

  function UsersIndex(itemsArray) {
    _classCallCheck(this, UsersIndex);

    var _this10 = _possibleConstructorReturn(this, (UsersIndex.__proto__ || Object.getPrototypeOf(UsersIndex)).call(this, itemsArray, UserItems));

    _this10.template = APP.Templates['main/users/users-index'];
    return _this10;
  }

  // optional, register view in APP.Views and APP.Modules.Users.Views


  _createClass(UsersIndex, [{
    key: 'behaviors',
    get: function get() {
      return {
        ViewGlobalRegister: {
          viewName: 'main/users/index',
          module: 'Users'
        }
      };
    }
  }]);

  return UsersIndex;
}(Index);

function UserProductsCtrl(options) {
  return new ProductsCtrl({
    router: options.router,
    parentView: options.parentView,
    parentViewRegion: options.parentViewRegion,
    path: options.path
  });
}

function errorHandler(e) {
  var error = e.responseText || e.statusText || e.status;
  var message = 'Server responded with error: ' + error;
  $.notify(message, 'error');
  return message;
}

function getOwnerResources(options) {
  var collection = options.collection;
  var id = options.id;
  var resources = options.resources;
  return new Promise(function (resolve, reject) {
    var uri = collection.url + '/' + id + '/' + resources;
    $.get(uri).done(function (response, statusText) {
      //const attributes = JSON.parse(response)[0];
      //const Model = this.collection.model;
      //let model = new Model({id: +id}, {collection: this.collection}).set(attributes);
      resolve(response);
    }).fail(function (response, statusText) {
      var message = errorHandler(response);
      reject(message);
    });
  });
}

var UserShowView = Marionette.View.extend({
  template: APP.Templates['main/users/user-show'],
  behaviors: {
    RestEditItemBehavior: {},

    // optional, register view in APP.Views and APP.Modules.Users.Views
    ViewGlobalRegister: {
      viewName: 'main/users/show',
      module: 'Users'
    }
  },
  ui: { userProducts: '#user-products' },
  events: { 'click #user-products': 'showUserProducts' },
  regions: { products: '#products' },
  modelEvents: {
    change: 'rerender'
  },
  rerender: function rerender() {
    this.render();
  },
  initialize: function initialize(model, subPath) {
    this.model = model;
    this.subPath = subPath;
    this.userProductsController = UserProductsCtrl({
      router: usersRouter,
      parentView: this,
      parentViewRegion: 'products',
      path: this.userProductsUrlPath()
    });
  },
  userProductsUrlPath: function userProductsUrlPath() {
    return 'users/' + this.model.id + '/products';
  },
  showUserProducts: function showUserProducts() {
    var _this11 = this;

    getOwnerResources({
      collection: users,
      id: this.model.id,
      resources: 'products'
    }).then(function (products) {
      _this11.userProductsController.showModels(products);
    }, function (message) {
      console.log(message);
    });
  },
  showUserProduct: function showUserProduct(id) {
    this.userProductsController.showModel(id);
  },
  showUserProductNewForm: function showUserProductNewForm() {
    this.userProductsController.showNewModel();
  },
  showUserProductEditForm: function showUserProductEditForm(id) {
    this.userProductsController.showEditModel(id);
  },
  onAttach: function onAttach() {
    if (/^products[/]?$/.test(this.subPath)) {
      this.showUserProducts();
    }

    if (/^products\/new[/]?$/.test(this.subPath)) {
      this.showUserProductNewForm();
    }

    if (/^products\/\d+[/]?$/.test(this.subPath)) {
      var id = this.subPath.split('/')[1];
      this.showUserProduct(id);
    }

    if (/^products\/edit\/\d+[/]?$/.test(this.subPath)) {
      var _id = this.subPath.split('/')[2];
      this.showUserProductEditForm(_id);
    }
  }
});

var UserFormView = Marionette.View.extend({
  collection: users,
  template: APP.Templates['main/users/user-form'],
  behaviors: {
    RestFormBehaviorWithCollection: {},
    ViewGlobalRegister: {
      viewName: 'main/users/form',
      module: 'Users'
    }
  },

  ui: {
    name: 'input#user-name',
    surname: 'input#user-surname',
    email: 'input#user-email',
    submit: '.btn-submit'
  },

  events: {
    // can use input instead of: keyup , change, paste
    // 'keyup @ui.name': 'editName',
    // 'change @ui.name': 'editName',
    'input @ui.name': 'editName',
    'input @ui.surname': 'editSurname',
    'input @ui.email': 'editEmail',
    'click @ui.submit': 'formSubmit'
  },

  editName: function editName() {
    this.triggerMethod('update:model:attr', 'name');
  },
  editSurname: function editSurname() {
    this.triggerMethod('update:model:attr', 'surname');
  },
  editEmail: function editEmail() {
    this.triggerMethod('update:model:attr', 'email');
  },
  formSubmit: function formSubmit() {
    this.triggerMethod('form:submit');
  }
});

/** Users module: users layout view extends rest layout view */

var CustomErrorPage$1 = null; // use default error page

function UsersLayout(usersRouter) {
  var layoutView = new RestLayout({
    template: APP.Templates['main/users/users'],
    collection: users,
    region: 'users',
    path: 'users',
    router: usersRouter,
    behaviors: {
      // optional, register view in APP.Views and APP.Modules.Users.Views
      ViewGlobalRegister: {
        viewName: 'main/users/layout',
        module: 'Users'
      }
    },
    ModelsIndexView: UsersIndex,
    ModelShowView: UserShowView,
    ModelFormView: UserFormView,
    ErrorPageView: CustomErrorPage$1
  });

  layoutView.addRegion('users', '#users');
  return layoutView;
}

function UsersCtrl(options) {
  return new RestController({
    router: options.router,
    parentView: options.parentView,
    parentViewRegion: options.parentViewRegion,
    path: options.path,
    layout: UsersLayout,
    collection: users
  });
}

/** router to manage Users */
var UsersRouter = Marionette.AppRouter.extend({
  path: 'users',
  active: false,
  initialize: function initialize() {
    this.controller = UsersCtrl({
      router: this,
      parentView: appView,
      parentViewRegion: 'main',
      path: this.path
    });
    this.routes = this.appRoutes;
  },


  appRoutes: {
    'users(/)': 'showModels',
    'users/new(/)': 'showNewModel',
    'users/edit/:id(/)': 'showEditModel',
    'users/:id(/*path)': 'showModel'
  }
});

var usersRouter = new UsersRouter();
if (APP.Env === 'development') console.log('init users-router');

if (APP.Env === 'development') console.log('-- init users-module');

var appEvents = Backbone.Radio.channel('app:events');

document.addEventListener('DOMContentLoaded', function () {
  InitApplication().then(function () {
    appCtrl.start();
    appEvents.trigger('init:app');
  }).catch(function (error) {
    if (APP.Env !== 'production') console.log(error);
  });
});

if (APP.Env === 'development') console.log('--- init app');
//# sourceMappingURL=app.map
