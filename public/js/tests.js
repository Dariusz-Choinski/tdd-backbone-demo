const { test } = QUnit;

function GeneralGlobals() {
  QUnit.module('general globals', () => {
    QUnit.module('APP', () => {
      test('Collections', (t) => {
        t.ok(APP.Collections, 'exist');
      });
      test('Modules', (t) => {
        t.ok(APP.Modules, 'exist');
      });
      test('Views', (t) => {
        t.ok(APP.Views, 'exist');
      });
      test('Behaviors', (t) => {
        t.ok(APP.Behaviors, 'exist');
      });
      test('Services', (t) => {
        t.ok(APP.Services, 'exist');
      });
      test('Mixins', (t) => {
        t.ok(APP.Mixins, 'exist');
      });
      test('Utilities', (t) => {
        t.ok(APP.Utilities, 'exist');
      });
      test('Test', (t) => {
        t.ok(APP.Test, 'exist');
      });
    });
  });
}

const { test: test$1 } = QUnit;

function BehaviorsTest() {
  QUnit.module('APP.Behaviors', () => {
    QUnit.module('ViewGlobalRegister', () => {
      test$1('function', (t) => {
        t.ok(typeof APP.Behaviors.ViewGlobalRegister === 'function');
      });
    });

    QUnit.module('RestEditItemBehavior', () => {
      test$1('function', (t) => {
        t.ok(typeof APP.Behaviors.RestEditItemBehavior === 'function');
      });
    });

    QUnit.module('RestFormBehaviorWithCollection', () => {
      test$1('function', (t) => {
        t.ok(typeof APP.Behaviors.RestFormBehaviorWithCollection === 'function');
      });
    });
  });
}

const { test: test$2 } = QUnit;

function CollectionsTest() {
  QUnit.module('APP.Collections', () => {
    QUnit.module('products', () => {
      test$2('instance of Products', (t) => {
        t.ok(APP.Modules.Products.Collection.products instanceof Products);
      });
    });
    QUnit.module('users', () => {
      test$2('instance of Users', (t) => {
        t.ok(APP.Modules.Users.Collection.users instanceof Users);
      });
    });
  });
}

const { test: test$3 } = QUnit;

function AppModuleTest() {
  QUnit.module('App', () => {
    QUnit.module('Controller', () => {
      test$3('app', (t) => {
        t.ok(APP.Modules.App.Controller.app);
      });
    });

    QUnit.module('Views', () => {
      test$3('app', (t) => {
        t.ok(APP.Modules.App.Views.app);
      });
      test$3('navbar', (t) => {
        t.ok(APP.Modules.App.Views.navbar);
      });
      test$3('footer', (t) => {
        t.ok(APP.Modules.App.Views.footer);
      });
    });

    QUnit.module('Router', () => {
      QUnit.module('main', () => {
        QUnit.module('routes', () => {
          const routes = APP.Modules.App.Router.main.routes;
          test$3('route "/#about" => about page', (t) => {
            t.equal(routes['about'], 'showAbout');
          });
          test$3('route "/#contact" => contact page', (t) => {
            t.equal(routes['contact'], 'showContact');
          });
        });
      });
    });
  });
}

const { test: test$4 } = QUnit;

function ProductsModuleTest() {
  QUnit.module('Products', () => {
    QUnit.module('Collection', () => {
      QUnit.module('products', () => {
        test$4('instance of Products', (t) => {
          t.ok(APP.Modules.Products.Collection.products instanceof Products);
        });
      });
    });

    QUnit.module('Views', () => {
      test$4('{}', (t) => {
        t.ok(APP.Modules.Products.Views);
      });
    });

    QUnit.module('Router', () => {
      QUnit.module('products', () => {
        QUnit.module('routes', () => {
          const routes = APP.Modules.Products.Router.products.routes;
          test$4('route "/#products"  => products (index) page', (t) => {
            t.equal(routes['products(/)'], 'showModels');
          });
          test$4('route "/#products/:id" => product (show) page', (t) => {
            t.equal(routes['products/:id(/)'], 'showModel');
          });
          test$4('route "/#products/new"  => form (new) page', (t) => {
            t.equal(routes['products/new(/)'], 'showNewModel');
          });
          test$4('route "/#products/edit/:id" => form (edit) page', (t) => {
            t.equal(routes['products/edit/:id(/)'], 'showEditModel');
          });
        });
      });
    });
  });
}

const { test: test$5 } = QUnit;

function UsersModuleTest() {
  QUnit.module('Users', () => {
    QUnit.module('Collection', () => {
      QUnit.module('users', () => {
        test$5('instance of Users', (t) => {
          t.ok(APP.Modules.Users.Collection.users instanceof Users);
        });
      });
    });

    QUnit.module('Views', () => {
      test$5('{}', (t) => {
        t.ok(APP.Modules.Users.Views);
      });
    });

    QUnit.module('Router', () => {
      QUnit.module('users', () => {
        QUnit.module('routes', () => {
          const routes = APP.Modules.Users.Router.users.routes;
          test$5('route "/#users"  => users (index) page', (t) => {
            t.equal(routes['users(/)'], 'showModels');
          });
          test$5('route "/#users/:id" => user (show) page', (t) => {
            t.equal(routes['users/:id(/*path)'], 'showModel');
          });
          test$5('route "/#users/new"  => form (new) page', (t) => {
            t.equal(routes['users/new(/)'], 'showNewModel');
          });
          test$5('route "/#users/edit/:id" => form (edit) page', (t) => {
            t.equal(routes['users/edit/:id(/)'], 'showEditModel');
          });
        });
      });
    });
  });
}

function AppModulesTest() {
  QUnit.module('APP.Modules', () => {
    AppModuleTest();
    ProductsModuleTest();
    UsersModuleTest();
  });
}

function UnitTests() {
  QUnit.module('Unit', () => {
    GeneralGlobals();
    BehaviorsTest();
    CollectionsTest();
    AppModulesTest();
  });
}

let y = 0;
let u = 1000;

const UI = {
  /** redirect to path, after it expected view as option */
  visit(path, option = {}) {
    const viewName = option.view;
    const appEvents = Backbone.Radio.channel('app:events');
    return new Promise((resolve) => {
      if (location.hash === path.slice(1)) {
        resolve();
      } else {
        appEvents.on('register:view', (event) => {
          if (viewName === undefined) {
            if (event.match(path.slice(2))) resolve(event);
          } else {
            if (event === viewName) resolve(event);
          }
        });
      }
      location = path;
    });
  },

  /** element to click(), on click expected view or action as option */
  click(element, option = {}) {
    return new Promise((resolve, reject) => {
      if (option.view) {
        const viewName = option.view;
        const appEvents = Backbone.Radio.channel('app:events');
        appEvents.on('register:view', (e) => {
          if (e === viewName) resolve();
        });
      } else

      if (option.action) {
        // To Do
        reject();
      }

      element.click();
    });
  },

  /** filling form with test values, then submit form */
  async fillProductFormThenSubmit() {
    y++;
    const inputName = $('#product-name');
    const inputQts = $('#product-qts');
    const submitButton = $('#products button.btn-submit').get(0);
    inputName.val(`Product no Y${y}`);
    inputQts.val(10 + y);

    // Important! before submit, manually trigger inputs update,
    // this run validation on inputs.
    // Submit can be clicked only when validation passed.
    APP.Views['main/products/form'].triggerMethod('update:model:attr', 'name');
    APP.Views['main/products/form'].triggerMethod('update:model:attr', 'qts');

    await UI.click(submitButton, { view: 'main/products/show' });
    const product = _.last(APP.Collections.products.models);
    return product;
  },

  async fillUserFormThenSubmit() {
    u++;
    const inputName = $('#user-name');
    const inputSurname = $('#user-surname');
    const inputEmail = $('#user-email');
    const submitButton = $('#users button.btn-submit').get(0);
    inputName.val(`User ${u}`);
    inputSurname.val(u);
    inputEmail.val(`User${u}@test.com`);

    // Important! before submit, manually trigger inputs update,
    // this run validation on inputs.
    // Submit can be clicked only when validation passed.
    APP.Views['main/users/form'].triggerMethod('update:model:attr', 'name');
    APP.Views['main/users/form'].triggerMethod('update:model:attr', 'surname');
    APP.Views['main/users/form'].triggerMethod('update:model:attr', 'email');

    await UI.click(submitButton, { view: 'main/users/show' });
    const user = _.last(APP.Collections.users.models);
    return user;
  },

  wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(); }, ms);
    });
  }
};

const { test: test$6 } = QUnit;

function NaviAbout() {
  QUnit.module('about');
  test$6('menu "about" show about page', async (t) => {
    const done = t.async();
    const navLinkAbout = $("a[href='#about']").get(0);
    await UI.visit('/#contact');
    await UI.click(navLinkAbout, { view: 'main/about' });
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'ABOUT'.toLowerCase());
    done();
  });

  test$6('url "/#about" show about page', async (t) => {
    const done = t.async();
    await UI.visit('/#contact');
    await UI.visit('/#about');
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'ABOUT'.toLowerCase());
    done();
  });
}

const { test: test$7 } = QUnit;

function NaviAbout$1() {
  QUnit.module('contact');
  test$7('menu "contact" show contact page', async (t) => {
    const done = t.async();
    const navLinkContact = $("a[href='#contact']").get(0);
    await UI.visit('/#about');
    await UI.click(navLinkContact, { view: 'main/contact' });
    const pageContactHeader = $('#main h3').text();
    t.equal(pageContactHeader.toLowerCase(), 'CONTACT'.toLowerCase());
    done();
  });

  test$7('url "/#contact" show contact page', async (t) => {
    const done = t.async();
    await UI.visit('/#about');
    await UI.visit('/#contact');
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'CONTACT'.toLowerCase());
    done();
  });
}

const { test: test$8 } = QUnit;

function NaviProducts() {
  QUnit.module('products');
  test$8('menu "products" show products page', async (t) => {
    const done = t.async();
    const navLinkProducts = $("a[href='#products']").get(0);
    await UI.visit('/#about');
    await UI.click(navLinkProducts, { view: 'main/products/layout' });
    const pageProductsHeader = $('#main h3').text();
    t.equal(pageProductsHeader.toLowerCase(), 'PRODUCTS'.toLowerCase());
    done();
  });

  test$8('url "/#products" show products page', async (t) => {
    const done = t.async();
    await UI.visit('/#about');
    await UI.visit('/#products');
    const pageProductsHeader = $('#main h3').text();
    t.equal(pageProductsHeader.toLowerCase(), 'PRODUCTS'.toLowerCase());
    done();
  });
}

function NavigationTests() {
  QUnit.module('navi', () => {
    NaviAbout();
    NaviAbout$1();
    NaviProducts();
  });
}

const productHelper = {
  async createProduct(options) {
    const model = new APP.Collections.products.model({
      name: options.name,
      qts: options.qts
    });
    const product = await APP.Collections.products.create(model);
    return product;
  },

  deleteProduct(product) {
    return new Promise((resolve, reject) => {
      product.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  deleteLastProduct() {
    return new Promise((resolve, reject) => {
      const product = _.last(APP.Collections.products.models);
      product.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  pushProductToCollection(options) {
    const model = new APP.Collections.products.model({
      id: options.id,
      name: options.name,
      qts: options.qts
    });
    APP.Collections.products.push(model);
  },

  popProductFromCollection(id) {
    APP.Collections.products.pop(id);
  },
};

const userHelper = {
  async createUser(options) {
    const model = new APP.Collections.users.model({
      name: options.name,
      surname: options.surname,
      email: options.email
    });
    const user = await APP.Collections.users.create(model);
    return user;
  },

  deleteUser(user) {
    return new Promise((resolve, reject) => {
      user.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  deleteLastUser() {
    return new Promise((resolve, reject) => {
      const user = _.last(APP.Collections.users.models);
      user.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  pushUserToCollection(options) {
    const model = new APP.Collections.users.model({
      id: options.id,
      name: options.name,
      surname: options.surname,
      email: options.email
    });
    APP.Collections.users.push(model);
  },

  popUserFromCollection(id) {
    APP.Collections.users.pop(id);
  },
};

const AP = {
  wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(); }, ms);
    });
  }
};

Object.assign(AP, productHelper);
Object.assign(AP, userHelper);

const { test: test$9 } = QUnit;

function NewProductTest() {
  QUnit.module('add product', () => {
    test$9('click "add product" show product form', async (t) => {
      const done = t.async();
      await UI.visit('/#products');
      const addProductButton = $('#products .add-item').get(0);
      UI.click(addProductButton, { view: 'main/products/form' });
      const numberOfFormGroups = $('#products .form-group').get().length;

      t.equal(3, numberOfFormGroups);
      t.equal(location.hash, '#products/new');
      done();
    });

    test$9('url "/#products/new" show product form', async (t) => {
      const done = t.async();
      await UI.visit('/#about');
      await UI.visit('/#products/new', { view: 'main/products/form' });
      const numberOfFormGroups = $('#products .form-group').get().length;

      t.equal(3, numberOfFormGroups);
      t.equal(location.hash, '#products/new');
      done();
    });

    QUnit.module('form', {
      afterEach: async function deleteNewProduct() {
        await UI.visit('/#about');
        await AP.deleteLastProduct();
      }
    });

    test$9('submit redirect to show product page', async (t) => {
      const done = t.async();
      await UI.visit('/#products/new', { view: 'main/products/form' });
      await UI.fillProductFormThenSubmit();
      const pageProductsHeader = $('#main h3').text();

      t.equal(pageProductsHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
      done();
    });

    test$9('after submit the new product is created ', async (t) => {
      const done = t.async();
      await UI.visit('/#products/new', { view: 'main/products/form' });
      const numberOfProductsBeforeSubmit = APP.Collections.products.length;

      await UI.fillProductFormThenSubmit();
      const numberOfProductsAfterSubmit = APP.Collections.products.length;
      const diff = numberOfProductsAfterSubmit - numberOfProductsBeforeSubmit;

      t.equal(1, diff);
      done();
    });
  });
}

const { test: test$10 } = QUnit;

function ShowProductTest() {
  QUnit.module('show product', (hooks) => {
    hooks.before(async () => {
      AP.pushProductToCollection({
        id: 1000,
        name: 'Product no 1000',
        qts: 100
      });
    });
    hooks.after(async () => {
      await UI.visit('/#about');
      AP.popProductFromCollection(1000);
    });

    test$10('url "/#products/id" show product page', async (t) => {
      const done = t.async();
      await UI.visit('/#products/1000', { view: 'main/products/show' });
      const productPageHeader = $('#main h3').text();
      const idText = $('#products #id').text();
      const path = '#products/1000';

      t.equal(location.hash, path);
      t.equal(productPageHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
      t.ok(idText.match(1000));
      done();
    });

    test$10('click product row on index table, show product page', async (t) => {
      const done = t.async();
      await UI.visit('/#products');
      const lastProductRow = _.last($('#products table tbody tr'));
      const columnId = $(lastProductRow).find('td')[0];
      const productId = $(columnId).text();

      await UI.click(columnId, { view: 'main/products/show' });
      const productPageHeader = $('#main h3').text();
      const idText = $('#products #id').text();
      const path = `#products/${productId}`;

      t.equal(location.hash, path);
      t.equal(productPageHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
      t.ok(idText.match(productId));
      done();
    });
/*
    // sometimes such hook could be necessery: a closing test
    // allows to finally close previous async test
    test('closing empty test', async (t) => {
      const done = t.async();
      await AP.wait(200);
      t.expect(0);
      done();
    });
*/
  });
}

const APP$1 = window.APP;

const Helper = {
  async createTestProduct(t) {
    await UI.visit('/#products/new', { view: 'main/products/form' });
    const testProduct1 = await UI.fillProductFormThenSubmit();
    APP$1.Test.testProduct1 = testProduct1;
    const pageProductsHeader = $('#main h3').text();
    t.equal(pageProductsHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
    t.equal(location.hash, `#products/${testProduct1.id}`);
  },

  async deleteTestProduct() {
    const testProduct1 = APP$1.Test.testProduct1;
    await AP.deleteProduct(testProduct1);
    APP$1.Test.testProduct1 = null;
    await UI.visit('/#about');
  }
};

const { test: test$11 } = QUnit;

function EditProductTest() {
  QUnit.module('edit product', (hooks) => {
    hooks.before(async (t) => {
      await Helper.createTestProduct(t);
    });
    hooks.after(async () => {
      await Helper.deleteTestProduct();
    });

    test$11('edit button show product form', async (t) => {
      const done = t.async();
      const id = APP.Test.testProduct1.id;
      await UI.visit(`/#products/${id}`, { view: 'main/products/show' });
      const editButton = $('#products #edit').get(0);

      await UI.click(editButton, { view: 'main/products/form' });
      const numberOfFormGroups = $('#products .form-group').get().length;

      t.equal(3, numberOfFormGroups);
      t.equal(location.hash, `#products/edit/${id}`);
      done();
    });

    test$11('url "/#products/edit/id" show product form', async (t) => {
      const done = t.async();
      const testProduct1 = APP.Test.testProduct1;
      await UI.visit('/#about');
      await UI.visit(`#products/edit/${testProduct1.id}`, { view: 'main/products/form' });
      const inputProductName = $('#products #product-name').val();
      const inputProductQts = $('#products #product-qts').val();
      const testProductName = testProduct1.get('name');
      const testProductQts = testProduct1.get('qts');

      t.equal(location.hash, `#products/edit/${testProduct1.id}`);
      t.equal(testProductName, inputProductName);
      t.equal(testProductQts, inputProductQts);
      done();
    });

    QUnit.module('form', () => {
      test$11('after submit the product is updated', async (t) => {
        const done = t.async();
        const testProduct1 = $.extend({}, APP.Test.testProduct1);
        const testProduct1Id = testProduct1.id;
        const testProduct1Name = testProduct1.get('name');
        const testProduct1Qts = testProduct1.get('qts');
        await UI.visit('/#about');
        await UI.visit(`#products/edit/${testProduct1.id}`,
          { view: 'main/products/form' });
        const testProduct2 = await UI.fillProductFormThenSubmit();
        const testProduct2Id = testProduct2.id;
        const testProduct2Name = testProduct2.get('name');
        const testProduct2Qts = testProduct2.get('qts');

        t.equal(testProduct1Id, testProduct2Id);
        t.notEqual(testProduct1Name, testProduct2Name);
        t.notEqual(testProduct1Qts, testProduct2Qts);
        done();
      });
    });
  });
}

const { test: test$12 } = QUnit;

function DeleteProductTest() {
  QUnit.module('delete product', (hooks) => {
    hooks.before(async (t) => {
      await Helper.createTestProduct(t);
    });
    hooks.after(async () => {
      APP.Test.testProduct1 = null;
      await UI.visit('/#about');
    });

    test$12('click "X" on product in index table, delete product', async (t) => {
      const done = t.async();
      await UI.visit('/#products');
      const countProductsBefore = APP.Collections.products.length;
      const countProductsInIndexBefore = $('#products table tr').length;
      const X = $('#products table tr:last td.item-destroy').get(0);
      X.click();
      await UI.wait(300);
      const countProductsAfter = APP.Collections.products.length;
      const countProductsInIndexAfter = $('#products table tr').length;

      t.equal(-1, countProductsAfter - countProductsBefore);
      t.equal(-1, countProductsInIndexAfter - countProductsInIndexBefore);
      done();
    });
  });
}

function ProductsTests() {
  QUnit.module('products', () => {
    NewProductTest();
    ShowProductTest();
    EditProductTest();
    DeleteProductTest();
  });
}

const { test: test$13 } = QUnit;

function NewUserTest() {
  QUnit.module('add user', () => {
    test$13('click "add user" show user form', async (t) => {
      const done = t.async();
      await UI.visit('/#users');
      const addUserButton = $('#users .add-item').get(0);
      UI.click(addUserButton, { view: 'main/users/form' });
      const numberOfFormGroups = $('#users .form-group').get().length;

      t.equal(4, numberOfFormGroups);
      t.equal(location.hash, '#users/new');
      done();
    });

    test$13('url "/#users/new" show user form', async (t) => {
      const done = t.async();
      await UI.visit('/#about');
      await UI.visit('/#users/new', { view: 'main/users/form' });
      const numberOfFormGroups = $('#users .form-group').get().length;

      t.equal(4, numberOfFormGroups);
      t.equal(location.hash, '#users/new');
      done();
    });

    QUnit.module('form', {
      afterEach: async function deleteNewUser() {
        await UI.visit('/#about');
        await AP.deleteLastUser();
      }
    });

    test$13('submit redirect to show user page', async (t) => {
      const done = t.async();
      await UI.visit('/#users/new', { view: 'main/users/form' });
      await UI.fillUserFormThenSubmit();
      const pageUsersHeader = $('#main h3').text();

      t.equal(pageUsersHeader.toLowerCase(), 'USER'.toLowerCase());
      done();
    });

    test$13('after submit the new user is created ', async (t) => {
      const done = t.async();
      await UI.visit('/#users/new', { view: 'main/users/form' });
      const numberOfUsersBeforeSubmit = APP.Collections.users.length;

      await UI.fillUserFormThenSubmit();
      const numberOfUsersAfterSubmit = APP.Collections.users.length;
      const diff = numberOfUsersAfterSubmit - numberOfUsersBeforeSubmit;

      t.equal(1, diff);
      done();
    });
  });
}

const { test: test$14 } = QUnit;

function ShowUserTest() {
  QUnit.module('show user', (hooks) => {
    hooks.before(async () => {
      AP.pushUserToCollection({
        id: 1000,
        name: 'User',
        surname: 1000,
        email: 'User1000@test.com'
      });
    });
    hooks.after(async () => {
      await UI.visit('/#about');
      AP.popUserFromCollection(1000);
    });

    test$14('url "/#users/id" show user page', async (t) => {
      const done = t.async();
      await UI.visit('/#users/1000', { view: 'main/users/show' });
      const userPageHeader = $('#main h3').text();
      const idText = $('#users #id').text();
      const path = '#users/1000';

      t.equal(location.hash, path);
      t.equal(userPageHeader.toLowerCase(), 'USER'.toLowerCase());
      t.ok(idText.match(1000));
      done();
    });

    test$14('click user row on index table, show user page', async (t) => {
      const done = t.async();
      await UI.visit('/#users');
      const lastUserRow = _.last($('#users table tbody tr'));
      const columnId = $(lastUserRow).find('td')[0];
      const userId = $(columnId).text();

      await UI.click(columnId, { view: 'main/users/show' });
      const userPageHeader = $('#main h3').text();
      const idText = $('#users #id').text();
      const path = `#users/${userId}`;

      t.equal(location.hash, path);
      t.equal(userPageHeader.toLowerCase(), 'USER'.toLowerCase());
      t.ok(idText.match(userId));
      done();
    });
/*
    // sometimes such hook could be necessery: a closing test
    // allows to finally close previous async test
    test('closing empty test', async (t) => {
      const done = t.async();
      await AP.wait(200);
      t.expect(0);
      done();
    });
*/
  });
}

const APP$2 = window.APP;

const Helper$2 = {
  async createTestUser(t) {
    await UI.visit('/#users/new', { view: 'main/users/form' });
    const testUser1 = await UI.fillUserFormThenSubmit();
    APP$2.Test.testUser1 = testUser1;
    const pageUsersHeader = $('#main h3').text();
    t.equal(pageUsersHeader.toLowerCase(), 'USER'.toLowerCase());
    t.equal(location.hash, `#users/${testUser1.id}`);
  },

  async deleteTestUser() {
    const testUser1 = APP$2.Test.testUser1;
    await AP.deleteUser(testUser1);
    APP$2.Test.testUser1 = null;
    await UI.visit('/#about');
  }
};

const { test: test$15 } = QUnit;

function EditUserTest() {
  QUnit.module('edit user', (hooks) => {
    hooks.before(async (t) => {
      await Helper$2.createTestUser(t);
    });
    hooks.after(async () => {
      await Helper$2.deleteTestUser();
    });

    test$15('edit button show user form', async (t) => {
      const done = t.async();
      const id = APP.Test.testUser1.id;
      await UI.visit(`/#users/${id}`, { view: 'main/users/show' });
      const editButton = $('#users #edit').get(0);

      await UI.click(editButton, { view: 'main/users/form' });
      const numberOfFormGroups = $('#users .form-group').get().length;

      t.equal(4, numberOfFormGroups);
      t.equal(location.hash, `#users/edit/${id}`);
      done();
    });

    test$15('url "/#users/edit/id" show user form', async (t) => {
      const done = t.async();
      const testUser1 = APP.Test.testUser1;
      await UI.visit('/#about');
      await UI.visit(`#users/edit/${testUser1.id}`, { view: 'main/users/form' });
      const inputUserName = $('#users #user-name').val();
      const inputUserSurname = $('#users #user-surname').val();
      const testUserName = testUser1.get('name');
      const testUserSurname = testUser1.get('surname');

      t.equal(location.hash, `#users/edit/${testUser1.id}`);
      t.equal(testUserName, inputUserName);
      t.equal(testUserSurname, inputUserSurname);
      done();
    });

    QUnit.module('form', () => {
      test$15('after submit the user is updated', async (t) => {
        const done = t.async();
        const testUser1 = $.extend({}, APP.Test.testUser1);
        const testUser1Id = testUser1.id;
        const testUser1Name = testUser1.get('name');
        const testUser1Surname = testUser1.get('surname');
        const testUser1Email = testUser1.get('email');
        await UI.visit('/#about');
        await UI.visit(`#users/edit/${testUser1.id}`,
          { view: 'main/users/form' });
        const testUser2 = await UI.fillUserFormThenSubmit();
        const testUser2Id = testUser2.id;
        const testUser2Name = testUser2.get('name');
        const testUser2Surname = testUser2.get('surname');
        const testUser2Email = testUser2.get('email');

        t.equal(testUser1Id, testUser2Id);
        t.notEqual(testUser1Name, testUser2Name);
        t.notEqual(testUser1Surname, testUser2Surname);
        t.notEqual(testUser1Email, testUser2Email);
        done();
      });
    });
  });
}

const { test: test$16 } = QUnit;

function DeleteUserTest() {
  QUnit.module('delete user', (hooks) => {
    hooks.before(async (t) => {
      await Helper$2.createTestUser(t);
    });
    hooks.after(async () => {
      APP.Test.testUser1 = null;
      await UI.visit('/#about');
    });

    test$16('click "X" on user in index table, delete user', async (t) => {
      const done = t.async();
      await UI.visit('/#users');
      const countUsersBefore = APP.Collections.users.length;
      const countUsersInIndexBefore = $('#users table tr').length;
      const X = $('#users table tr:last td.item-destroy').get(0);
      X.click();
      await UI.wait(300);
      const countUsersAfter = APP.Collections.users.length;
      const countUsersInIndexAfter = $('#users table tr').length;

      t.equal(-1, countUsersAfter - countUsersBefore);
      t.equal(-1, countUsersInIndexAfter - countUsersInIndexBefore);
      done();
    });
  });
}

function UsersTests() {
  QUnit.module('users', () => {
    NewUserTest();
    ShowUserTest();
    EditUserTest();
    DeleteUserTest();
  });
}

async function IntegrationTests() {
  QUnit.module('acceptance', () => {
    NavigationTests();
    ProductsTests();
    UsersTests();
  });
}

const { test: test$17 } = QUnit;

function ViewGlobalRegisterTest() {
  QUnit.module('ViewGlobalRegister', () => {
    QUnit.module('TestView', (hooks) => {
      hooks.after(() => {
        delete APP.Views['testview'];
        delete APP.Modules.Test.Views['testview'];
      });

      test$17('register then unregister in APP.Views and APP.Modules.Test.Views', (t) => {
        const TestView = Marionette.View.extend({
          template: _.template('<h3>Test</h3>'),
          behaviors: {
            ViewGlobalRegister: { viewName: 'testview', module: 'Test' },
          }
        });
        const testView = new TestView();
        const testRegion = APP.Views.app.getRegion('test');

        testRegion.show(testView);
        t.ok(APP.Views.testview);
        t.ok(APP.Modules.Test.Views.testview);

        testRegion.empty();
        t.notOk(APP.Views.testview);
        t.notOk(APP.Modules.Test.Views.testview);
      });
    });
  });
}

function IntegrationTests$1() {
  QUnit.module('Integration', () => {
    ViewGlobalRegisterTest();
  });
}

function runTests() {
  const appEvents = Backbone.Radio.channel('app:events');
  appEvents.on('init:app', async () => {
    addTestGlobals();
    UnitTests();
    IntegrationTests$1();
    await IntegrationTests();
  });
}

runTests();

function addTestGlobals() {
  APP.Test = {};
  APP.Modules.Test = {};
  APP.Modules.Test.Views = {};
  $('#app :first-child').append('<div id="test"></div>');
  APP.Views.app.addRegion('test', '#test');
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzIjpbIi4uL3VuaXQvYXBwX2dsb2JhbHMvZ2VuZXJhbC1nbG9iYWxzLXRlc3QuanMiLCIuLi91bml0L2JlaGF2aW9ycy9iZWhhdmlvcnMtdGVzdC5qcyIsIi4uL3VuaXQvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMtdGVzdC5qcyIsIi4uL3VuaXQvbW9kdWxlcy9hcHAtdGVzdC5qcyIsIi4uL3VuaXQvbW9kdWxlcy9wcm9kdWN0cy10ZXN0LmpzIiwiLi4vdW5pdC9tb2R1bGVzL3VzZXJzLXRlc3QuanMiLCIuLi91bml0L21vZHVsZXMvbW9kdWxlcy5qcyIsIi4uL3VuaXQvdW5pdC5qcyIsIi4uL2hlbHBlcnMvdWktaGVscGVyLmpzIiwiLi4vYWNjZXB0YW5jZS9uYXYtYmFyL25hdmktYWJvdXQtdGVzdC5qcyIsIi4uL2FjY2VwdGFuY2UvbmF2LWJhci9uYXZpLWNvbnRhY3QtdGVzdC5qcyIsIi4uL2FjY2VwdGFuY2UvbmF2LWJhci9uYXZpLXByb2R1Y3RzLXRlc3QuanMiLCIuLi9hY2NlcHRhbmNlL25hdi1iYXIvbmF2aS10ZXN0LmpzIiwiLi4vaGVscGVycy9wcm9kdWN0LWhlbHBlci5qcyIsIi4uL2hlbHBlcnMvdXNlci1oZWxwZXIuanMiLCIuLi9oZWxwZXJzL2FwcC1oZWxwZXIuanMiLCIuLi9hY2NlcHRhbmNlL3Byb2R1Y3RzL25ldy10ZXN0LmpzIiwiLi4vYWNjZXB0YW5jZS9wcm9kdWN0cy9zaG93LXRlc3QuanMiLCIuLi9hY2NlcHRhbmNlL3Byb2R1Y3RzL2hlbHBlci5qcyIsIi4uL2FjY2VwdGFuY2UvcHJvZHVjdHMvZWRpdC10ZXN0LmpzIiwiLi4vYWNjZXB0YW5jZS9wcm9kdWN0cy9kZWxldGUtdGVzdC5qcyIsIi4uL2FjY2VwdGFuY2UvcHJvZHVjdHMvcHJvZHVjdHMtdGVzdC5qcyIsIi4uL2FjY2VwdGFuY2UvdXNlcnMvbmV3LXRlc3QuanMiLCIuLi9hY2NlcHRhbmNlL3VzZXJzL3Nob3ctdGVzdC5qcyIsIi4uL2FjY2VwdGFuY2UvdXNlcnMvaGVscGVyLmpzIiwiLi4vYWNjZXB0YW5jZS91c2Vycy9lZGl0LXRlc3QuanMiLCIuLi9hY2NlcHRhbmNlL3VzZXJzL2RlbGV0ZS10ZXN0LmpzIiwiLi4vYWNjZXB0YW5jZS91c2Vycy91c2Vycy10ZXN0LmpzIiwiLi4vYWNjZXB0YW5jZS9hY2NlcHRhbmNlLmpzIiwiLi4vaW50ZWdyYXRpb24vdmlldy1nbG9iYWwtcmVnaXN0ZXItdGVzdC5qcyIsIi4uL2ludGVncmF0aW9uL2ludGVncmF0aW9uLmpzIiwiLi4vaW5pdC10ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYWxHbG9iYWxzKCkge1xuICBRVW5pdC5tb2R1bGUoJ2dlbmVyYWwgZ2xvYmFscycsICgpID0+IHtcbiAgICBRVW5pdC5tb2R1bGUoJ0FQUCcsICgpID0+IHtcbiAgICAgIHRlc3QoJ0NvbGxlY3Rpb25zJywgKHQpID0+IHtcbiAgICAgICAgdC5vayhBUFAuQ29sbGVjdGlvbnMsICdleGlzdCcpO1xuICAgICAgfSk7XG4gICAgICB0ZXN0KCdNb2R1bGVzJywgKHQpID0+IHtcbiAgICAgICAgdC5vayhBUFAuTW9kdWxlcywgJ2V4aXN0Jyk7XG4gICAgICB9KTtcbiAgICAgIHRlc3QoJ1ZpZXdzJywgKHQpID0+IHtcbiAgICAgICAgdC5vayhBUFAuVmlld3MsICdleGlzdCcpO1xuICAgICAgfSk7XG4gICAgICB0ZXN0KCdCZWhhdmlvcnMnLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5CZWhhdmlvcnMsICdleGlzdCcpO1xuICAgICAgfSk7XG4gICAgICB0ZXN0KCdTZXJ2aWNlcycsICh0KSA9PiB7XG4gICAgICAgIHQub2soQVBQLlNlcnZpY2VzLCAnZXhpc3QnKTtcbiAgICAgIH0pO1xuICAgICAgdGVzdCgnTWl4aW5zJywgKHQpID0+IHtcbiAgICAgICAgdC5vayhBUFAuTWl4aW5zLCAnZXhpc3QnKTtcbiAgICAgIH0pO1xuICAgICAgdGVzdCgnVXRpbGl0aWVzJywgKHQpID0+IHtcbiAgICAgICAgdC5vayhBUFAuVXRpbGl0aWVzLCAnZXhpc3QnKTtcbiAgICAgIH0pO1xuICAgICAgdGVzdCgnVGVzdCcsICh0KSA9PiB7XG4gICAgICAgIHQub2soQVBQLlRlc3QsICdleGlzdCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVoYXZpb3JzVGVzdCgpIHtcbiAgUVVuaXQubW9kdWxlKCdBUFAuQmVoYXZpb3JzJywgKCkgPT4ge1xuICAgIFFVbml0Lm1vZHVsZSgnVmlld0dsb2JhbFJlZ2lzdGVyJywgKCkgPT4ge1xuICAgICAgdGVzdCgnZnVuY3Rpb24nLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKHR5cGVvZiBBUFAuQmVoYXZpb3JzLlZpZXdHbG9iYWxSZWdpc3RlciA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFFVbml0Lm1vZHVsZSgnUmVzdEVkaXRJdGVtQmVoYXZpb3InLCAoKSA9PiB7XG4gICAgICB0ZXN0KCdmdW5jdGlvbicsICh0KSA9PiB7XG4gICAgICAgIHQub2sodHlwZW9mIEFQUC5CZWhhdmlvcnMuUmVzdEVkaXRJdGVtQmVoYXZpb3IgPT09ICdmdW5jdGlvbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBRVW5pdC5tb2R1bGUoJ1Jlc3RGb3JtQmVoYXZpb3JXaXRoQ29sbGVjdGlvbicsICgpID0+IHtcbiAgICAgIHRlc3QoJ2Z1bmN0aW9uJywgKHQpID0+IHtcbiAgICAgICAgdC5vayh0eXBlb2YgQVBQLkJlaGF2aW9ycy5SZXN0Rm9ybUJlaGF2aW9yV2l0aENvbGxlY3Rpb24gPT09ICdmdW5jdGlvbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbnNUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ0FQUC5Db2xsZWN0aW9ucycsICgpID0+IHtcbiAgICBRVW5pdC5tb2R1bGUoJ3Byb2R1Y3RzJywgKCkgPT4ge1xuICAgICAgdGVzdCgnaW5zdGFuY2Ugb2YgUHJvZHVjdHMnLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLlByb2R1Y3RzLkNvbGxlY3Rpb24ucHJvZHVjdHMgaW5zdGFuY2VvZiBQcm9kdWN0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBRVW5pdC5tb2R1bGUoJ3VzZXJzJywgKCkgPT4ge1xuICAgICAgdGVzdCgnaW5zdGFuY2Ugb2YgVXNlcnMnLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLlVzZXJzLkNvbGxlY3Rpb24udXNlcnMgaW5zdGFuY2VvZiBVc2Vycyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJjb25zdCB7IHRlc3QgfSA9IFFVbml0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBNb2R1bGVUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ0FwcCcsICgpID0+IHtcbiAgICBRVW5pdC5tb2R1bGUoJ0NvbnRyb2xsZXInLCAoKSA9PiB7XG4gICAgICB0ZXN0KCdhcHAnLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLkFwcC5Db250cm9sbGVyLmFwcCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFFVbml0Lm1vZHVsZSgnVmlld3MnLCAoKSA9PiB7XG4gICAgICB0ZXN0KCdhcHAnLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLkFwcC5WaWV3cy5hcHApO1xuICAgICAgfSk7XG4gICAgICB0ZXN0KCduYXZiYXInLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLkFwcC5WaWV3cy5uYXZiYXIpO1xuICAgICAgfSk7XG4gICAgICB0ZXN0KCdmb290ZXInLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLkFwcC5WaWV3cy5mb290ZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBRVW5pdC5tb2R1bGUoJ1JvdXRlcicsICgpID0+IHtcbiAgICAgIFFVbml0Lm1vZHVsZSgnbWFpbicsICgpID0+IHtcbiAgICAgICAgUVVuaXQubW9kdWxlKCdyb3V0ZXMnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm91dGVzID0gQVBQLk1vZHVsZXMuQXBwLlJvdXRlci5tYWluLnJvdXRlcztcbiAgICAgICAgICB0ZXN0KCdyb3V0ZSBcIi8jYWJvdXRcIiA9PiBhYm91dCBwYWdlJywgKHQpID0+IHtcbiAgICAgICAgICAgIHQuZXF1YWwocm91dGVzWydhYm91dCddLCAnc2hvd0Fib3V0Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGVzdCgncm91dGUgXCIvI2NvbnRhY3RcIiA9PiBjb250YWN0IHBhZ2UnLCAodCkgPT4ge1xuICAgICAgICAgICAgdC5lcXVhbChyb3V0ZXNbJ2NvbnRhY3QnXSwgJ3Nob3dDb250YWN0Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNNb2R1bGVUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ1Byb2R1Y3RzJywgKCkgPT4ge1xuICAgIFFVbml0Lm1vZHVsZSgnQ29sbGVjdGlvbicsICgpID0+IHtcbiAgICAgIFFVbml0Lm1vZHVsZSgncHJvZHVjdHMnLCAoKSA9PiB7XG4gICAgICAgIHRlc3QoJ2luc3RhbmNlIG9mIFByb2R1Y3RzJywgKHQpID0+IHtcbiAgICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLlByb2R1Y3RzLkNvbGxlY3Rpb24ucHJvZHVjdHMgaW5zdGFuY2VvZiBQcm9kdWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBRVW5pdC5tb2R1bGUoJ1ZpZXdzJywgKCkgPT4ge1xuICAgICAgdGVzdCgne30nLCAodCkgPT4ge1xuICAgICAgICB0Lm9rKEFQUC5Nb2R1bGVzLlByb2R1Y3RzLlZpZXdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUVVuaXQubW9kdWxlKCdSb3V0ZXInLCAoKSA9PiB7XG4gICAgICBRVW5pdC5tb2R1bGUoJ3Byb2R1Y3RzJywgKCkgPT4ge1xuICAgICAgICBRVW5pdC5tb2R1bGUoJ3JvdXRlcycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3V0ZXMgPSBBUFAuTW9kdWxlcy5Qcm9kdWN0cy5Sb3V0ZXIucHJvZHVjdHMucm91dGVzO1xuICAgICAgICAgIHRlc3QoJ3JvdXRlIFwiLyNwcm9kdWN0c1wiICA9PiBwcm9kdWN0cyAoaW5kZXgpIHBhZ2UnLCAodCkgPT4ge1xuICAgICAgICAgICAgdC5lcXVhbChyb3V0ZXNbJ3Byb2R1Y3RzKC8pJ10sICdzaG93TW9kZWxzJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGVzdCgncm91dGUgXCIvI3Byb2R1Y3RzLzppZFwiID0+IHByb2R1Y3QgKHNob3cpIHBhZ2UnLCAodCkgPT4ge1xuICAgICAgICAgICAgdC5lcXVhbChyb3V0ZXNbJ3Byb2R1Y3RzLzppZCgvKSddLCAnc2hvd01vZGVsJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGVzdCgncm91dGUgXCIvI3Byb2R1Y3RzL25ld1wiICA9PiBmb3JtIChuZXcpIHBhZ2UnLCAodCkgPT4ge1xuICAgICAgICAgICAgdC5lcXVhbChyb3V0ZXNbJ3Byb2R1Y3RzL25ldygvKSddLCAnc2hvd05ld01vZGVsJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGVzdCgncm91dGUgXCIvI3Byb2R1Y3RzL2VkaXQvOmlkXCIgPT4gZm9ybSAoZWRpdCkgcGFnZScsICh0KSA9PiB7XG4gICAgICAgICAgICB0LmVxdWFsKHJvdXRlc1sncHJvZHVjdHMvZWRpdC86aWQoLyknXSwgJ3Nob3dFZGl0TW9kZWwnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJjb25zdCB7IHRlc3QgfSA9IFFVbml0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vyc01vZHVsZVRlc3QoKSB7XG4gIFFVbml0Lm1vZHVsZSgnVXNlcnMnLCAoKSA9PiB7XG4gICAgUVVuaXQubW9kdWxlKCdDb2xsZWN0aW9uJywgKCkgPT4ge1xuICAgICAgUVVuaXQubW9kdWxlKCd1c2VycycsICgpID0+IHtcbiAgICAgICAgdGVzdCgnaW5zdGFuY2Ugb2YgVXNlcnMnLCAodCkgPT4ge1xuICAgICAgICAgIHQub2soQVBQLk1vZHVsZXMuVXNlcnMuQ29sbGVjdGlvbi51c2VycyBpbnN0YW5jZW9mIFVzZXJzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFFVbml0Lm1vZHVsZSgnVmlld3MnLCAoKSA9PiB7XG4gICAgICB0ZXN0KCd7fScsICh0KSA9PiB7XG4gICAgICAgIHQub2soQVBQLk1vZHVsZXMuVXNlcnMuVmlld3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBRVW5pdC5tb2R1bGUoJ1JvdXRlcicsICgpID0+IHtcbiAgICAgIFFVbml0Lm1vZHVsZSgndXNlcnMnLCAoKSA9PiB7XG4gICAgICAgIFFVbml0Lm1vZHVsZSgncm91dGVzJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJvdXRlcyA9IEFQUC5Nb2R1bGVzLlVzZXJzLlJvdXRlci51c2Vycy5yb3V0ZXM7XG4gICAgICAgICAgdGVzdCgncm91dGUgXCIvI3VzZXJzXCIgID0+IHVzZXJzIChpbmRleCkgcGFnZScsICh0KSA9PiB7XG4gICAgICAgICAgICB0LmVxdWFsKHJvdXRlc1sndXNlcnMoLyknXSwgJ3Nob3dNb2RlbHMnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0ZXN0KCdyb3V0ZSBcIi8jdXNlcnMvOmlkXCIgPT4gdXNlciAoc2hvdykgcGFnZScsICh0KSA9PiB7XG4gICAgICAgICAgICB0LmVxdWFsKHJvdXRlc1sndXNlcnMvOmlkKC8qcGF0aCknXSwgJ3Nob3dNb2RlbCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRlc3QoJ3JvdXRlIFwiLyN1c2Vycy9uZXdcIiAgPT4gZm9ybSAobmV3KSBwYWdlJywgKHQpID0+IHtcbiAgICAgICAgICAgIHQuZXF1YWwocm91dGVzWyd1c2Vycy9uZXcoLyknXSwgJ3Nob3dOZXdNb2RlbCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRlc3QoJ3JvdXRlIFwiLyN1c2Vycy9lZGl0LzppZFwiID0+IGZvcm0gKGVkaXQpIHBhZ2UnLCAodCkgPT4ge1xuICAgICAgICAgICAgdC5lcXVhbChyb3V0ZXNbJ3VzZXJzL2VkaXQvOmlkKC8pJ10sICdzaG93RWRpdE1vZGVsJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IEFwcE1vZHVsZVRlc3QgZnJvbSAnLi9hcHAtdGVzdCc7XG5pbXBvcnQgUHJvZHVjdHNNb2R1bGVUZXN0IGZyb20gJy4vcHJvZHVjdHMtdGVzdCc7XG5pbXBvcnQgVXNlcnNNb2R1bGVUZXN0IGZyb20gJy4vdXNlcnMtdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE1vZHVsZXNUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ0FQUC5Nb2R1bGVzJywgKCkgPT4ge1xuICAgIEFwcE1vZHVsZVRlc3QoKTtcbiAgICBQcm9kdWN0c01vZHVsZVRlc3QoKTtcbiAgICBVc2Vyc01vZHVsZVRlc3QoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgR2VuZXJhbEdsb2JhbHNUZXN0IGZyb20gJy4vYXBwX2dsb2JhbHMvZ2VuZXJhbC1nbG9iYWxzLXRlc3QnO1xuaW1wb3J0IEJlaGF2aW9yc1Rlc3QgZnJvbSAnLi9iZWhhdmlvcnMvYmVoYXZpb3JzLXRlc3QnO1xuaW1wb3J0IENvbGxlY3Rpb25zVGVzdCBmcm9tICcuL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLXRlc3QnO1xuaW1wb3J0IEFwcE1vZHVsZXNUZXN0IGZyb20gJy4vbW9kdWxlcy9tb2R1bGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVW5pdFRlc3RzKCkge1xuICBRVW5pdC5tb2R1bGUoJ1VuaXQnLCAoKSA9PiB7XG4gICAgR2VuZXJhbEdsb2JhbHNUZXN0KCk7XG4gICAgQmVoYXZpb3JzVGVzdCgpO1xuICAgIENvbGxlY3Rpb25zVGVzdCgpO1xuICAgIEFwcE1vZHVsZXNUZXN0KCk7XG4gIH0pO1xufVxuIiwibGV0IHkgPSAwO1xubGV0IHUgPSAxMDAwO1xuXG5jb25zdCBVSSA9IHtcbiAgLyoqIHJlZGlyZWN0IHRvIHBhdGgsIGFmdGVyIGl0IGV4cGVjdGVkIHZpZXcgYXMgb3B0aW9uICovXG4gIHZpc2l0KHBhdGgsIG9wdGlvbiA9IHt9KSB7XG4gICAgY29uc3Qgdmlld05hbWUgPSBvcHRpb24udmlldztcbiAgICBjb25zdCBhcHBFdmVudHMgPSBCYWNrYm9uZS5SYWRpby5jaGFubmVsKCdhcHA6ZXZlbnRzJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaCA9PT0gcGF0aC5zbGljZSgxKSkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBFdmVudHMub24oJ3JlZ2lzdGVyOnZpZXcnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodmlld05hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50Lm1hdGNoKHBhdGguc2xpY2UoMikpKSByZXNvbHZlKGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSB2aWV3TmFtZSkgcmVzb2x2ZShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxvY2F0aW9uID0gcGF0aDtcbiAgICB9KTtcbiAgfSxcblxuICAvKiogZWxlbWVudCB0byBjbGljaygpLCBvbiBjbGljayBleHBlY3RlZCB2aWV3IG9yIGFjdGlvbiBhcyBvcHRpb24gKi9cbiAgY2xpY2soZWxlbWVudCwgb3B0aW9uID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbi52aWV3KSB7XG4gICAgICAgIGNvbnN0IHZpZXdOYW1lID0gb3B0aW9uLnZpZXc7XG4gICAgICAgIGNvbnN0IGFwcEV2ZW50cyA9IEJhY2tib25lLlJhZGlvLmNoYW5uZWwoJ2FwcDpldmVudHMnKTtcbiAgICAgICAgYXBwRXZlbnRzLm9uKCdyZWdpc3Rlcjp2aWV3JywgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZSA9PT0gdmlld05hbWUpIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2VcblxuICAgICAgaWYgKG9wdGlvbi5hY3Rpb24pIHtcbiAgICAgICAgLy8gVG8gRG9cbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuY2xpY2soKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKiogZmlsbGluZyBmb3JtIHdpdGggdGVzdCB2YWx1ZXMsIHRoZW4gc3VibWl0IGZvcm0gKi9cbiAgYXN5bmMgZmlsbFByb2R1Y3RGb3JtVGhlblN1Ym1pdCgpIHtcbiAgICB5Kys7XG4gICAgY29uc3QgaW5wdXROYW1lID0gJCgnI3Byb2R1Y3QtbmFtZScpO1xuICAgIGNvbnN0IGlucHV0UXRzID0gJCgnI3Byb2R1Y3QtcXRzJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gJCgnI3Byb2R1Y3RzIGJ1dHRvbi5idG4tc3VibWl0JykuZ2V0KDApO1xuICAgIGlucHV0TmFtZS52YWwoYFByb2R1Y3Qgbm8gWSR7eX1gKTtcbiAgICBpbnB1dFF0cy52YWwoMTAgKyB5KTtcblxuICAgIC8vIEltcG9ydGFudCEgYmVmb3JlIHN1Ym1pdCwgbWFudWFsbHkgdHJpZ2dlciBpbnB1dHMgdXBkYXRlLFxuICAgIC8vIHRoaXMgcnVuIHZhbGlkYXRpb24gb24gaW5wdXRzLlxuICAgIC8vIFN1Ym1pdCBjYW4gYmUgY2xpY2tlZCBvbmx5IHdoZW4gdmFsaWRhdGlvbiBwYXNzZWQuXG4gICAgQVBQLlZpZXdzWydtYWluL3Byb2R1Y3RzL2Zvcm0nXS50cmlnZ2VyTWV0aG9kKCd1cGRhdGU6bW9kZWw6YXR0cicsICduYW1lJyk7XG4gICAgQVBQLlZpZXdzWydtYWluL3Byb2R1Y3RzL2Zvcm0nXS50cmlnZ2VyTWV0aG9kKCd1cGRhdGU6bW9kZWw6YXR0cicsICdxdHMnKTtcblxuICAgIGF3YWl0IFVJLmNsaWNrKHN1Ym1pdEJ1dHRvbiwgeyB2aWV3OiAnbWFpbi9wcm9kdWN0cy9zaG93JyB9KTtcbiAgICBjb25zdCBwcm9kdWN0ID0gXy5sYXN0KEFQUC5Db2xsZWN0aW9ucy5wcm9kdWN0cy5tb2RlbHMpO1xuICAgIHJldHVybiBwcm9kdWN0O1xuICB9LFxuXG4gIGFzeW5jIGZpbGxVc2VyRm9ybVRoZW5TdWJtaXQoKSB7XG4gICAgdSsrO1xuICAgIGNvbnN0IGlucHV0TmFtZSA9ICQoJyN1c2VyLW5hbWUnKTtcbiAgICBjb25zdCBpbnB1dFN1cm5hbWUgPSAkKCcjdXNlci1zdXJuYW1lJyk7XG4gICAgY29uc3QgaW5wdXRFbWFpbCA9ICQoJyN1c2VyLWVtYWlsJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gJCgnI3VzZXJzIGJ1dHRvbi5idG4tc3VibWl0JykuZ2V0KDApO1xuICAgIGlucHV0TmFtZS52YWwoYFVzZXIgJHt1fWApO1xuICAgIGlucHV0U3VybmFtZS52YWwodSk7XG4gICAgaW5wdXRFbWFpbC52YWwoYFVzZXIke3V9QHRlc3QuY29tYCk7XG5cbiAgICAvLyBJbXBvcnRhbnQhIGJlZm9yZSBzdWJtaXQsIG1hbnVhbGx5IHRyaWdnZXIgaW5wdXRzIHVwZGF0ZSxcbiAgICAvLyB0aGlzIHJ1biB2YWxpZGF0aW9uIG9uIGlucHV0cy5cbiAgICAvLyBTdWJtaXQgY2FuIGJlIGNsaWNrZWQgb25seSB3aGVuIHZhbGlkYXRpb24gcGFzc2VkLlxuICAgIEFQUC5WaWV3c1snbWFpbi91c2Vycy9mb3JtJ10udHJpZ2dlck1ldGhvZCgndXBkYXRlOm1vZGVsOmF0dHInLCAnbmFtZScpO1xuICAgIEFQUC5WaWV3c1snbWFpbi91c2Vycy9mb3JtJ10udHJpZ2dlck1ldGhvZCgndXBkYXRlOm1vZGVsOmF0dHInLCAnc3VybmFtZScpO1xuICAgIEFQUC5WaWV3c1snbWFpbi91c2Vycy9mb3JtJ10udHJpZ2dlck1ldGhvZCgndXBkYXRlOm1vZGVsOmF0dHInLCAnZW1haWwnKTtcblxuICAgIGF3YWl0IFVJLmNsaWNrKHN1Ym1pdEJ1dHRvbiwgeyB2aWV3OiAnbWFpbi91c2Vycy9zaG93JyB9KTtcbiAgICBjb25zdCB1c2VyID0gXy5sYXN0KEFQUC5Db2xsZWN0aW9ucy51c2Vycy5tb2RlbHMpO1xuICAgIHJldHVybiB1c2VyO1xuICB9LFxuXG4gIHdhaXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKCk7IH0sIG1zKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgVUkgZnJvbSAnLi4vLi4vaGVscGVycy91aS1oZWxwZXInO1xuXG5jb25zdCB7IHRlc3QgfSA9IFFVbml0O1xuXG5mdW5jdGlvbiBuYXZMaW5rVGVzdCgpIHtcbiAgUVVuaXQubW9kdWxlKCduYXZpIGxpbmsgPiBhYm91dCcpO1xuICB0ZXN0KCdcImFib3V0XCIgbGluayByZWRpcmVjdCB0byBhYm91dCBwYWdlJywgYXN5bmMgKHQpID0+IHtcbiAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgIGNvbnN0IG5hdkxpbmtBYm91dCA9ICQoXCJhW2hyZWY9JyNhYm91dCddXCIpLmdldCgwKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNjb250YWN0Jyk7XG4gICAgYXdhaXQgVUkuY2xpY2sobmF2TGlua0Fib3V0LCB7IHZpZXc6ICdtYWluL2Fib3V0JyB9KTtcbiAgICBjb25zdCBwYWdlQWJvdXRIZWFkZXIgPSAkKCcjbWFpbiBoMycpLnRleHQoKTtcbiAgICB0LmVxdWFsKHBhZ2VBYm91dEhlYWRlci50b0xvd2VyQ2FzZSgpLCAnQUJPVVQnLnRvTG93ZXJDYXNlKCkpO1xuICAgIGRvbmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5hdlVybFRlc3QoKSB7XG4gIFFVbml0Lm1vZHVsZSgnbmF2aSB1cmwgPiBhYm91dCcpO1xuICB0ZXN0KCd1cmwgXCIvI2Fib3V0XCIgc2hvdyBhYm91dCBwYWdlJywgYXN5bmMgKHQpID0+IHtcbiAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgIGF3YWl0IFVJLnZpc2l0KCcvI2NvbnRhY3QnKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpXG4gICAgY29uc3QgcGFnZUFib3V0SGVhZGVyID0gJCgnI21haW4gaDMnKS50ZXh0KCk7XG4gICAgdC5lcXVhbChwYWdlQWJvdXRIZWFkZXIudG9Mb3dlckNhc2UoKSwgJ0FCT1VUJy50b0xvd2VyQ2FzZSgpKTtcbiAgICBkb25lKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpQWJvdXQoKSB7XG4gIFFVbml0Lm1vZHVsZSgnYWJvdXQnKTtcbiAgdGVzdCgnbWVudSBcImFib3V0XCIgc2hvdyBhYm91dCBwYWdlJywgYXN5bmMgKHQpID0+IHtcbiAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgIGNvbnN0IG5hdkxpbmtBYm91dCA9ICQoXCJhW2hyZWY9JyNhYm91dCddXCIpLmdldCgwKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNjb250YWN0Jyk7XG4gICAgYXdhaXQgVUkuY2xpY2sobmF2TGlua0Fib3V0LCB7IHZpZXc6ICdtYWluL2Fib3V0JyB9KTtcbiAgICBjb25zdCBwYWdlQWJvdXRIZWFkZXIgPSAkKCcjbWFpbiBoMycpLnRleHQoKTtcbiAgICB0LmVxdWFsKHBhZ2VBYm91dEhlYWRlci50b0xvd2VyQ2FzZSgpLCAnQUJPVVQnLnRvTG93ZXJDYXNlKCkpO1xuICAgIGRvbmUoKTtcbiAgfSk7XG5cbiAgdGVzdCgndXJsIFwiLyNhYm91dFwiIHNob3cgYWJvdXQgcGFnZScsIGFzeW5jICh0KSA9PiB7XG4gICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNjb250YWN0Jyk7XG4gICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKVxuICAgIGNvbnN0IHBhZ2VBYm91dEhlYWRlciA9ICQoJyNtYWluIGgzJykudGV4dCgpO1xuICAgIHQuZXF1YWwocGFnZUFib3V0SGVhZGVyLnRvTG93ZXJDYXNlKCksICdBQk9VVCcudG9Mb3dlckNhc2UoKSk7XG4gICAgZG9uZSgpO1xuICB9KTtcbn1cbiIsImltcG9ydCBVSSBmcm9tICcuLi8uLi9oZWxwZXJzL3VpLWhlbHBlcic7XG5cbmNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlBYm91dCgpIHtcbiAgUVVuaXQubW9kdWxlKCdjb250YWN0Jyk7XG4gIHRlc3QoJ21lbnUgXCJjb250YWN0XCIgc2hvdyBjb250YWN0IHBhZ2UnLCBhc3luYyAodCkgPT4ge1xuICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgY29uc3QgbmF2TGlua0NvbnRhY3QgPSAkKFwiYVtocmVmPScjY29udGFjdCddXCIpLmdldCgwKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgIGF3YWl0IFVJLmNsaWNrKG5hdkxpbmtDb250YWN0LCB7IHZpZXc6ICdtYWluL2NvbnRhY3QnIH0pO1xuICAgIGNvbnN0IHBhZ2VDb250YWN0SGVhZGVyID0gJCgnI21haW4gaDMnKS50ZXh0KCk7XG4gICAgdC5lcXVhbChwYWdlQ29udGFjdEhlYWRlci50b0xvd2VyQ2FzZSgpLCAnQ09OVEFDVCcudG9Mb3dlckNhc2UoKSk7XG4gICAgZG9uZSgpO1xuICB9KTtcblxuICB0ZXN0KCd1cmwgXCIvI2NvbnRhY3RcIiBzaG93IGNvbnRhY3QgcGFnZScsIGFzeW5jICh0KSA9PiB7XG4gICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgIGF3YWl0IFVJLnZpc2l0KCcvI2NvbnRhY3QnKVxuICAgIGNvbnN0IHBhZ2VBYm91dEhlYWRlciA9ICQoJyNtYWluIGgzJykudGV4dCgpO1xuICAgIHQuZXF1YWwocGFnZUFib3V0SGVhZGVyLnRvTG93ZXJDYXNlKCksICdDT05UQUNUJy50b0xvd2VyQ2FzZSgpKTtcbiAgICBkb25lKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFVJIGZyb20gJy4uLy4uL2hlbHBlcnMvdWktaGVscGVyJztcblxuY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aVByb2R1Y3RzKCkge1xuICBRVW5pdC5tb2R1bGUoJ3Byb2R1Y3RzJyk7XG4gIHRlc3QoJ21lbnUgXCJwcm9kdWN0c1wiIHNob3cgcHJvZHVjdHMgcGFnZScsIGFzeW5jICh0KSA9PiB7XG4gICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICBjb25zdCBuYXZMaW5rUHJvZHVjdHMgPSAkKFwiYVtocmVmPScjcHJvZHVjdHMnXVwiKS5nZXQoMCk7XG4gICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgICBhd2FpdCBVSS5jbGljayhuYXZMaW5rUHJvZHVjdHMsIHsgdmlldzogJ21haW4vcHJvZHVjdHMvbGF5b3V0JyB9KTtcbiAgICBjb25zdCBwYWdlUHJvZHVjdHNIZWFkZXIgPSAkKCcjbWFpbiBoMycpLnRleHQoKTtcbiAgICB0LmVxdWFsKHBhZ2VQcm9kdWN0c0hlYWRlci50b0xvd2VyQ2FzZSgpLCAnUFJPRFVDVFMnLnRvTG93ZXJDYXNlKCkpO1xuICAgIGRvbmUoKTtcbiAgfSk7XG5cbiAgdGVzdCgndXJsIFwiLyNwcm9kdWN0c1wiIHNob3cgcHJvZHVjdHMgcGFnZScsIGFzeW5jICh0KSA9PiB7XG4gICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgIGF3YWl0IFVJLnZpc2l0KCcvI3Byb2R1Y3RzJylcbiAgICBjb25zdCBwYWdlUHJvZHVjdHNIZWFkZXIgPSAkKCcjbWFpbiBoMycpLnRleHQoKTtcbiAgICB0LmVxdWFsKHBhZ2VQcm9kdWN0c0hlYWRlci50b0xvd2VyQ2FzZSgpLCAnUFJPRFVDVFMnLnRvTG93ZXJDYXNlKCkpO1xuICAgIGRvbmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgTmF2aUFib3V0IGZyb20gJy4vbmF2aS1hYm91dC10ZXN0JztcbmltcG9ydCBOYXZpQ29udGFjdCBmcm9tICcuL25hdmktY29udGFjdC10ZXN0JztcbmltcG9ydCBOYXZpUHJvZHVjdHMgZnJvbSAnLi9uYXZpLXByb2R1Y3RzLXRlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uVGVzdHMoKSB7XG4gIFFVbml0Lm1vZHVsZSgnbmF2aScsICgpID0+IHtcbiAgICBOYXZpQWJvdXQoKTtcbiAgICBOYXZpQ29udGFjdCgpO1xuICAgIE5hdmlQcm9kdWN0cygpO1xuICB9KTtcbn1cbiIsImNvbnN0IHByb2R1Y3RIZWxwZXIgPSB7XG4gIGFzeW5jIGNyZWF0ZVByb2R1Y3Qob3B0aW9ucykge1xuICAgIGNvbnN0IG1vZGVsID0gbmV3IEFQUC5Db2xsZWN0aW9ucy5wcm9kdWN0cy5tb2RlbCh7XG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICBxdHM6IG9wdGlvbnMucXRzXG4gICAgfSk7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IEFQUC5Db2xsZWN0aW9ucy5wcm9kdWN0cy5jcmVhdGUobW9kZWwpO1xuICAgIHJldHVybiBwcm9kdWN0O1xuICB9LFxuXG4gIGRlbGV0ZVByb2R1Y3QocHJvZHVjdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwcm9kdWN0LmRlc3Ryb3koe1xuICAgICAgICB3YWl0OiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7IHJlc29sdmUoKTsgfSxcbiAgICAgICAgZXJyb3I6IChlKSA9PiB7IGNvbnNvbGUubG9nKGUpOyByZWplY3QoZSk7IH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZUxhc3RQcm9kdWN0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gXy5sYXN0KEFQUC5Db2xsZWN0aW9ucy5wcm9kdWN0cy5tb2RlbHMpO1xuICAgICAgcHJvZHVjdC5kZXN0cm95KHtcbiAgICAgICAgd2FpdDogdHJ1ZSxcbiAgICAgICAgc3VjY2VzczogKCkgPT4geyByZXNvbHZlKCk7IH0sXG4gICAgICAgIGVycm9yOiAoZSkgPT4geyBjb25zb2xlLmxvZyhlKTsgcmVqZWN0KGUpOyB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBwdXNoUHJvZHVjdFRvQ29sbGVjdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgbW9kZWwgPSBuZXcgQVBQLkNvbGxlY3Rpb25zLnByb2R1Y3RzLm1vZGVsKHtcbiAgICAgIGlkOiBvcHRpb25zLmlkLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgcXRzOiBvcHRpb25zLnF0c1xuICAgIH0pO1xuICAgIEFQUC5Db2xsZWN0aW9ucy5wcm9kdWN0cy5wdXNoKG1vZGVsKTtcbiAgfSxcblxuICBwb3BQcm9kdWN0RnJvbUNvbGxlY3Rpb24oaWQpIHtcbiAgICBBUFAuQ29sbGVjdGlvbnMucHJvZHVjdHMucG9wKGlkKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RIZWxwZXI7XG4iLCJjb25zdCB1c2VySGVscGVyID0ge1xuICBhc3luYyBjcmVhdGVVc2VyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBBUFAuQ29sbGVjdGlvbnMudXNlcnMubW9kZWwoe1xuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgc3VybmFtZTogb3B0aW9ucy5zdXJuYW1lLFxuICAgICAgZW1haWw6IG9wdGlvbnMuZW1haWxcbiAgICB9KTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgQVBQLkNvbGxlY3Rpb25zLnVzZXJzLmNyZWF0ZShtb2RlbCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0sXG5cbiAgZGVsZXRlVXNlcih1c2VyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHVzZXIuZGVzdHJveSh7XG4gICAgICAgIHdhaXQ6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHsgcmVzb2x2ZSgpOyB9LFxuICAgICAgICBlcnJvcjogKGUpID0+IHsgY29uc29sZS5sb2coZSk7IHJlamVjdChlKTsgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlTGFzdFVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBfLmxhc3QoQVBQLkNvbGxlY3Rpb25zLnVzZXJzLm1vZGVscyk7XG4gICAgICB1c2VyLmRlc3Ryb3koe1xuICAgICAgICB3YWl0OiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7IHJlc29sdmUoKTsgfSxcbiAgICAgICAgZXJyb3I6IChlKSA9PiB7IGNvbnNvbGUubG9nKGUpOyByZWplY3QoZSk7IH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHB1c2hVc2VyVG9Db2xsZWN0aW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBBUFAuQ29sbGVjdGlvbnMudXNlcnMubW9kZWwoe1xuICAgICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICBzdXJuYW1lOiBvcHRpb25zLnN1cm5hbWUsXG4gICAgICBlbWFpbDogb3B0aW9ucy5lbWFpbFxuICAgIH0pO1xuICAgIEFQUC5Db2xsZWN0aW9ucy51c2Vycy5wdXNoKG1vZGVsKTtcbiAgfSxcblxuICBwb3BVc2VyRnJvbUNvbGxlY3Rpb24oaWQpIHtcbiAgICBBUFAuQ29sbGVjdGlvbnMudXNlcnMucG9wKGlkKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJIZWxwZXI7XG4iLCJpbXBvcnQgcHJvZHVjdEhlbHBlciBmcm9tICcuL3Byb2R1Y3QtaGVscGVyLmpzJztcbmltcG9ydCB1c2VySGVscGVyIGZyb20gJy4vdXNlci1oZWxwZXInO1xuXG5jb25zdCBBUCA9IHtcbiAgd2FpdChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoKTsgfSwgbXMpO1xuICAgIH0pO1xuICB9XG59O1xuXG5PYmplY3QuYXNzaWduKEFQLCBwcm9kdWN0SGVscGVyKTtcbk9iamVjdC5hc3NpZ24oQVAsIHVzZXJIZWxwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBBUDtcbiIsImltcG9ydCBVSSBmcm9tICcuLi8uLi9oZWxwZXJzL3VpLWhlbHBlcic7XG5pbXBvcnQgQVAgZnJvbSAnLi4vLi4vaGVscGVycy9hcHAtaGVscGVyJztcblxuY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UHJvZHVjdFRlc3QoKSB7XG4gIFFVbml0Lm1vZHVsZSgnYWRkIHByb2R1Y3QnLCAoKSA9PiB7XG4gICAgdGVzdCgnY2xpY2sgXCJhZGQgcHJvZHVjdFwiIHNob3cgcHJvZHVjdCBmb3JtJywgYXN5bmMgKHQpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyNwcm9kdWN0cycpO1xuICAgICAgY29uc3QgYWRkUHJvZHVjdEJ1dHRvbiA9ICQoJyNwcm9kdWN0cyAuYWRkLWl0ZW0nKS5nZXQoMCk7XG4gICAgICBVSS5jbGljayhhZGRQcm9kdWN0QnV0dG9uLCB7IHZpZXc6ICdtYWluL3Byb2R1Y3RzL2Zvcm0nIH0pO1xuICAgICAgY29uc3QgbnVtYmVyT2ZGb3JtR3JvdXBzID0gJCgnI3Byb2R1Y3RzIC5mb3JtLWdyb3VwJykuZ2V0KCkubGVuZ3RoO1xuXG4gICAgICB0LmVxdWFsKDMsIG51bWJlck9mRm9ybUdyb3Vwcyk7XG4gICAgICB0LmVxdWFsKGxvY2F0aW9uLmhhc2gsICcjcHJvZHVjdHMvbmV3Jyk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCd1cmwgXCIvI3Byb2R1Y3RzL25ld1wiIHNob3cgcHJvZHVjdCBmb3JtJywgYXN5bmMgKHQpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jcHJvZHVjdHMvbmV3JywgeyB2aWV3OiAnbWFpbi9wcm9kdWN0cy9mb3JtJyB9KTtcbiAgICAgIGNvbnN0IG51bWJlck9mRm9ybUdyb3VwcyA9ICQoJyNwcm9kdWN0cyAuZm9ybS1ncm91cCcpLmdldCgpLmxlbmd0aDtcblxuICAgICAgdC5lcXVhbCgzLCBudW1iZXJPZkZvcm1Hcm91cHMpO1xuICAgICAgdC5lcXVhbChsb2NhdGlvbi5oYXNoLCAnI3Byb2R1Y3RzL25ldycpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgUVVuaXQubW9kdWxlKCdmb3JtJywge1xuICAgICAgYWZ0ZXJFYWNoOiBhc3luYyBmdW5jdGlvbiBkZWxldGVOZXdQcm9kdWN0KCkge1xuICAgICAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgICAgICBhd2FpdCBBUC5kZWxldGVMYXN0UHJvZHVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGVzdCgnc3VibWl0IHJlZGlyZWN0IHRvIHNob3cgcHJvZHVjdCBwYWdlJywgYXN5bmMgKHQpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyNwcm9kdWN0cy9uZXcnLCB7IHZpZXc6ICdtYWluL3Byb2R1Y3RzL2Zvcm0nIH0pO1xuICAgICAgYXdhaXQgVUkuZmlsbFByb2R1Y3RGb3JtVGhlblN1Ym1pdCgpO1xuICAgICAgY29uc3QgcGFnZVByb2R1Y3RzSGVhZGVyID0gJCgnI21haW4gaDMnKS50ZXh0KCk7XG5cbiAgICAgIHQuZXF1YWwocGFnZVByb2R1Y3RzSGVhZGVyLnRvTG93ZXJDYXNlKCksICdQUk9EVUNUJy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuICAgIHRlc3QoJ2FmdGVyIHN1Ym1pdCB0aGUgbmV3IHByb2R1Y3QgaXMgY3JlYXRlZCAnLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI3Byb2R1Y3RzL25ldycsIHsgdmlldzogJ21haW4vcHJvZHVjdHMvZm9ybScgfSk7XG4gICAgICBjb25zdCBudW1iZXJPZlByb2R1Y3RzQmVmb3JlU3VibWl0ID0gQVBQLkNvbGxlY3Rpb25zLnByb2R1Y3RzLmxlbmd0aDtcblxuICAgICAgYXdhaXQgVUkuZmlsbFByb2R1Y3RGb3JtVGhlblN1Ym1pdCgpO1xuICAgICAgY29uc3QgbnVtYmVyT2ZQcm9kdWN0c0FmdGVyU3VibWl0ID0gQVBQLkNvbGxlY3Rpb25zLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGRpZmYgPSBudW1iZXJPZlByb2R1Y3RzQWZ0ZXJTdWJtaXQgLSBudW1iZXJPZlByb2R1Y3RzQmVmb3JlU3VibWl0O1xuXG4gICAgICB0LmVxdWFsKDEsIGRpZmYpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBVSSBmcm9tICcuLi8uLi9oZWxwZXJzL3VpLWhlbHBlcic7XG5pbXBvcnQgQVAgZnJvbSAnLi4vLi4vaGVscGVycy9hcHAtaGVscGVyJztcblxuY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd1Byb2R1Y3RUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ3Nob3cgcHJvZHVjdCcsIChob29rcykgPT4ge1xuICAgIGhvb2tzLmJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgICBBUC5wdXNoUHJvZHVjdFRvQ29sbGVjdGlvbih7XG4gICAgICAgIGlkOiAxMDAwLFxuICAgICAgICBuYW1lOiAnUHJvZHVjdCBubyAxMDAwJyxcbiAgICAgICAgcXRzOiAxMDBcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGhvb2tzLmFmdGVyKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI2Fib3V0Jyk7XG4gICAgICBBUC5wb3BQcm9kdWN0RnJvbUNvbGxlY3Rpb24oMTAwMCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCd1cmwgXCIvI3Byb2R1Y3RzL2lkXCIgc2hvdyBwcm9kdWN0IHBhZ2UnLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI3Byb2R1Y3RzLzEwMDAnLCB7IHZpZXc6ICdtYWluL3Byb2R1Y3RzL3Nob3cnIH0pO1xuICAgICAgY29uc3QgcHJvZHVjdFBhZ2VIZWFkZXIgPSAkKCcjbWFpbiBoMycpLnRleHQoKTtcbiAgICAgIGNvbnN0IGlkVGV4dCA9ICQoJyNwcm9kdWN0cyAjaWQnKS50ZXh0KCk7XG4gICAgICBjb25zdCBwYXRoID0gJyNwcm9kdWN0cy8xMDAwJztcblxuICAgICAgdC5lcXVhbChsb2NhdGlvbi5oYXNoLCBwYXRoKTtcbiAgICAgIHQuZXF1YWwocHJvZHVjdFBhZ2VIZWFkZXIudG9Mb3dlckNhc2UoKSwgJ1BST0RVQ1QnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgdC5vayhpZFRleHQubWF0Y2goMTAwMCkpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnY2xpY2sgcHJvZHVjdCByb3cgb24gaW5kZXggdGFibGUsIHNob3cgcHJvZHVjdCBwYWdlJywgYXN5bmMgKHQpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyNwcm9kdWN0cycpO1xuICAgICAgY29uc3QgbGFzdFByb2R1Y3RSb3cgPSBfLmxhc3QoJCgnI3Byb2R1Y3RzIHRhYmxlIHRib2R5IHRyJykpO1xuICAgICAgY29uc3QgY29sdW1uSWQgPSAkKGxhc3RQcm9kdWN0Um93KS5maW5kKCd0ZCcpWzBdO1xuICAgICAgY29uc3QgcHJvZHVjdElkID0gJChjb2x1bW5JZCkudGV4dCgpO1xuXG4gICAgICBhd2FpdCBVSS5jbGljayhjb2x1bW5JZCwgeyB2aWV3OiAnbWFpbi9wcm9kdWN0cy9zaG93JyB9KTtcbiAgICAgIGNvbnN0IHByb2R1Y3RQYWdlSGVhZGVyID0gJCgnI21haW4gaDMnKS50ZXh0KCk7XG4gICAgICBjb25zdCBpZFRleHQgPSAkKCcjcHJvZHVjdHMgI2lkJykudGV4dCgpO1xuICAgICAgY29uc3QgcGF0aCA9IGAjcHJvZHVjdHMvJHtwcm9kdWN0SWR9YDtcblxuICAgICAgdC5lcXVhbChsb2NhdGlvbi5oYXNoLCBwYXRoKTtcbiAgICAgIHQuZXF1YWwocHJvZHVjdFBhZ2VIZWFkZXIudG9Mb3dlckNhc2UoKSwgJ1BST0RVQ1QnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgdC5vayhpZFRleHQubWF0Y2gocHJvZHVjdElkKSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4vKlxuICAgIC8vIHNvbWV0aW1lcyBzdWNoIGhvb2sgY291bGQgYmUgbmVjZXNzZXJ5OiBhIGNsb3NpbmcgdGVzdFxuICAgIC8vIGFsbG93cyB0byBmaW5hbGx5IGNsb3NlIHByZXZpb3VzIGFzeW5jIHRlc3RcbiAgICB0ZXN0KCdjbG9zaW5nIGVtcHR5IHRlc3QnLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGF3YWl0IEFQLndhaXQoMjAwKTtcbiAgICAgIHQuZXhwZWN0KDApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuKi9cbiAgfSk7XG59XG5cbiIsImltcG9ydCBVSSBmcm9tICcuLi8uLi9oZWxwZXJzL3VpLWhlbHBlcic7XG5pbXBvcnQgQVAgZnJvbSAnLi4vLi4vaGVscGVycy9hcHAtaGVscGVyJztcblxuY29uc3QgQVBQID0gd2luZG93LkFQUDtcblxuY29uc3QgSGVscGVyID0ge1xuICBhc3luYyBjcmVhdGVUZXN0UHJvZHVjdCh0KSB7XG4gICAgYXdhaXQgVUkudmlzaXQoJy8jcHJvZHVjdHMvbmV3JywgeyB2aWV3OiAnbWFpbi9wcm9kdWN0cy9mb3JtJyB9KTtcbiAgICBjb25zdCB0ZXN0UHJvZHVjdDEgPSBhd2FpdCBVSS5maWxsUHJvZHVjdEZvcm1UaGVuU3VibWl0KCk7XG4gICAgQVBQLlRlc3QudGVzdFByb2R1Y3QxID0gdGVzdFByb2R1Y3QxO1xuICAgIGNvbnN0IHBhZ2VQcm9kdWN0c0hlYWRlciA9ICQoJyNtYWluIGgzJykudGV4dCgpO1xuICAgIHQuZXF1YWwocGFnZVByb2R1Y3RzSGVhZGVyLnRvTG93ZXJDYXNlKCksICdQUk9EVUNUJy50b0xvd2VyQ2FzZSgpKTtcbiAgICB0LmVxdWFsKGxvY2F0aW9uLmhhc2gsIGAjcHJvZHVjdHMvJHt0ZXN0UHJvZHVjdDEuaWR9YCk7XG4gIH0sXG5cbiAgYXN5bmMgZGVsZXRlVGVzdFByb2R1Y3QoKSB7XG4gICAgY29uc3QgdGVzdFByb2R1Y3QxID0gQVBQLlRlc3QudGVzdFByb2R1Y3QxO1xuICAgIGF3YWl0IEFQLmRlbGV0ZVByb2R1Y3QodGVzdFByb2R1Y3QxKTtcbiAgICBBUFAuVGVzdC50ZXN0UHJvZHVjdDEgPSBudWxsO1xuICAgIGF3YWl0IFVJLnZpc2l0KCcvI2Fib3V0Jyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcjtcbiIsImltcG9ydCBVSSBmcm9tICcuLi8uLi9oZWxwZXJzL3VpLWhlbHBlcic7XG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFByb2R1Y3RUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ2VkaXQgcHJvZHVjdCcsIChob29rcykgPT4ge1xuICAgIGhvb2tzLmJlZm9yZShhc3luYyAodCkgPT4ge1xuICAgICAgYXdhaXQgSGVscGVyLmNyZWF0ZVRlc3RQcm9kdWN0KHQpO1xuICAgIH0pO1xuICAgIGhvb2tzLmFmdGVyKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IEhlbHBlci5kZWxldGVUZXN0UHJvZHVjdCgpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnZWRpdCBidXR0b24gc2hvdyBwcm9kdWN0IGZvcm0nLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGNvbnN0IGlkID0gQVBQLlRlc3QudGVzdFByb2R1Y3QxLmlkO1xuICAgICAgYXdhaXQgVUkudmlzaXQoYC8jcHJvZHVjdHMvJHtpZH1gLCB7IHZpZXc6ICdtYWluL3Byb2R1Y3RzL3Nob3cnIH0pO1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9ICQoJyNwcm9kdWN0cyAjZWRpdCcpLmdldCgwKTtcblxuICAgICAgYXdhaXQgVUkuY2xpY2soZWRpdEJ1dHRvbiwgeyB2aWV3OiAnbWFpbi9wcm9kdWN0cy9mb3JtJyB9KTtcbiAgICAgIGNvbnN0IG51bWJlck9mRm9ybUdyb3VwcyA9ICQoJyNwcm9kdWN0cyAuZm9ybS1ncm91cCcpLmdldCgpLmxlbmd0aDtcblxuICAgICAgdC5lcXVhbCgzLCBudW1iZXJPZkZvcm1Hcm91cHMpO1xuICAgICAgdC5lcXVhbChsb2NhdGlvbi5oYXNoLCBgI3Byb2R1Y3RzL2VkaXQvJHtpZH1gKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuICAgIHRlc3QoJ3VybCBcIi8jcHJvZHVjdHMvZWRpdC9pZFwiIHNob3cgcHJvZHVjdCBmb3JtJywgYXN5bmMgKHQpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgICBjb25zdCB0ZXN0UHJvZHVjdDEgPSBBUFAuVGVzdC50ZXN0UHJvZHVjdDE7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoYCNwcm9kdWN0cy9lZGl0LyR7dGVzdFByb2R1Y3QxLmlkfWAsIHsgdmlldzogJ21haW4vcHJvZHVjdHMvZm9ybScgfSk7XG4gICAgICBjb25zdCBpbnB1dFByb2R1Y3ROYW1lID0gJCgnI3Byb2R1Y3RzICNwcm9kdWN0LW5hbWUnKS52YWwoKTtcbiAgICAgIGNvbnN0IGlucHV0UHJvZHVjdFF0cyA9ICQoJyNwcm9kdWN0cyAjcHJvZHVjdC1xdHMnKS52YWwoKTtcbiAgICAgIGNvbnN0IHRlc3RQcm9kdWN0TmFtZSA9IHRlc3RQcm9kdWN0MS5nZXQoJ25hbWUnKTtcbiAgICAgIGNvbnN0IHRlc3RQcm9kdWN0UXRzID0gdGVzdFByb2R1Y3QxLmdldCgncXRzJyk7XG5cbiAgICAgIHQuZXF1YWwobG9jYXRpb24uaGFzaCwgYCNwcm9kdWN0cy9lZGl0LyR7dGVzdFByb2R1Y3QxLmlkfWApO1xuICAgICAgdC5lcXVhbCh0ZXN0UHJvZHVjdE5hbWUsIGlucHV0UHJvZHVjdE5hbWUpO1xuICAgICAgdC5lcXVhbCh0ZXN0UHJvZHVjdFF0cywgaW5wdXRQcm9kdWN0UXRzKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuICAgIFFVbml0Lm1vZHVsZSgnZm9ybScsICgpID0+IHtcbiAgICAgIHRlc3QoJ2FmdGVyIHN1Ym1pdCB0aGUgcHJvZHVjdCBpcyB1cGRhdGVkJywgYXN5bmMgKHQpID0+IHtcbiAgICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgICAgY29uc3QgdGVzdFByb2R1Y3QxID0gJC5leHRlbmQoe30sIEFQUC5UZXN0LnRlc3RQcm9kdWN0MSk7XG4gICAgICAgIGNvbnN0IHRlc3RQcm9kdWN0MUlkID0gdGVzdFByb2R1Y3QxLmlkO1xuICAgICAgICBjb25zdCB0ZXN0UHJvZHVjdDFOYW1lID0gdGVzdFByb2R1Y3QxLmdldCgnbmFtZScpO1xuICAgICAgICBjb25zdCB0ZXN0UHJvZHVjdDFRdHMgPSB0ZXN0UHJvZHVjdDEuZ2V0KCdxdHMnKTtcbiAgICAgICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgICAgICAgYXdhaXQgVUkudmlzaXQoYCNwcm9kdWN0cy9lZGl0LyR7dGVzdFByb2R1Y3QxLmlkfWAsXG4gICAgICAgICAgeyB2aWV3OiAnbWFpbi9wcm9kdWN0cy9mb3JtJyB9KTtcbiAgICAgICAgY29uc3QgdGVzdFByb2R1Y3QyID0gYXdhaXQgVUkuZmlsbFByb2R1Y3RGb3JtVGhlblN1Ym1pdCgpO1xuICAgICAgICBjb25zdCB0ZXN0UHJvZHVjdDJJZCA9IHRlc3RQcm9kdWN0Mi5pZDtcbiAgICAgICAgY29uc3QgdGVzdFByb2R1Y3QyTmFtZSA9IHRlc3RQcm9kdWN0Mi5nZXQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVzdFByb2R1Y3QyUXRzID0gdGVzdFByb2R1Y3QyLmdldCgncXRzJyk7XG5cbiAgICAgICAgdC5lcXVhbCh0ZXN0UHJvZHVjdDFJZCwgdGVzdFByb2R1Y3QySWQpO1xuICAgICAgICB0Lm5vdEVxdWFsKHRlc3RQcm9kdWN0MU5hbWUsIHRlc3RQcm9kdWN0Mk5hbWUpO1xuICAgICAgICB0Lm5vdEVxdWFsKHRlc3RQcm9kdWN0MVF0cywgdGVzdFByb2R1Y3QyUXRzKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFVJIGZyb20gJy4uLy4uL2hlbHBlcnMvdWktaGVscGVyJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCB7IHRlc3QgfSA9IFFVbml0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9kdWN0VGVzdCgpIHtcbiAgUVVuaXQubW9kdWxlKCdkZWxldGUgcHJvZHVjdCcsIChob29rcykgPT4ge1xuICAgIGhvb2tzLmJlZm9yZShhc3luYyAodCkgPT4ge1xuICAgICAgYXdhaXQgSGVscGVyLmNyZWF0ZVRlc3RQcm9kdWN0KHQpO1xuICAgIH0pO1xuICAgIGhvb2tzLmFmdGVyKGFzeW5jICgpID0+IHtcbiAgICAgIEFQUC5UZXN0LnRlc3RQcm9kdWN0MSA9IG51bGw7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyNhYm91dCcpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnY2xpY2sgXCJYXCIgb24gcHJvZHVjdCBpbiBpbmRleCB0YWJsZSwgZGVsZXRlIHByb2R1Y3QnLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI3Byb2R1Y3RzJyk7XG4gICAgICBjb25zdCBjb3VudFByb2R1Y3RzQmVmb3JlID0gQVBQLkNvbGxlY3Rpb25zLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNvdW50UHJvZHVjdHNJbkluZGV4QmVmb3JlID0gJCgnI3Byb2R1Y3RzIHRhYmxlIHRyJykubGVuZ3RoO1xuICAgICAgY29uc3QgWCA9ICQoJyNwcm9kdWN0cyB0YWJsZSB0cjpsYXN0IHRkLml0ZW0tZGVzdHJveScpLmdldCgwKTtcbiAgICAgIFguY2xpY2soKTtcbiAgICAgIGF3YWl0IFVJLndhaXQoMzAwKTtcbiAgICAgIGNvbnN0IGNvdW50UHJvZHVjdHNBZnRlciA9IEFQUC5Db2xsZWN0aW9ucy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICBjb25zdCBjb3VudFByb2R1Y3RzSW5JbmRleEFmdGVyID0gJCgnI3Byb2R1Y3RzIHRhYmxlIHRyJykubGVuZ3RoO1xuXG4gICAgICB0LmVxdWFsKC0xLCBjb3VudFByb2R1Y3RzQWZ0ZXIgLSBjb3VudFByb2R1Y3RzQmVmb3JlKTtcbiAgICAgIHQuZXF1YWwoLTEsIGNvdW50UHJvZHVjdHNJbkluZGV4QWZ0ZXIgLSBjb3VudFByb2R1Y3RzSW5JbmRleEJlZm9yZSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IE5ld1Byb2R1Y3RUZXN0IGZyb20gJy4vbmV3LXRlc3QnO1xuaW1wb3J0IFNob3dQcm9kdWN0VGVzdCBmcm9tICcuL3Nob3ctdGVzdCc7XG5pbXBvcnQgRWRpdFByb2R1Y3RUZXN0IGZyb20gJy4vZWRpdC10ZXN0JztcbmltcG9ydCBEZWxldGVQcm9kdWN0VGVzdCBmcm9tICcuL2RlbGV0ZS10ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNUZXN0cygpIHtcbiAgUVVuaXQubW9kdWxlKCdwcm9kdWN0cycsICgpID0+IHtcbiAgICBOZXdQcm9kdWN0VGVzdCgpO1xuICAgIFNob3dQcm9kdWN0VGVzdCgpO1xuICAgIEVkaXRQcm9kdWN0VGVzdCgpO1xuICAgIERlbGV0ZVByb2R1Y3RUZXN0KCk7XG4gIH0pO1xufVxuXG4iLCJpbXBvcnQgVUkgZnJvbSAnLi4vLi4vaGVscGVycy91aS1oZWxwZXInO1xuaW1wb3J0IEFQIGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwLWhlbHBlcic7XG5cbmNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1VzZXJUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ2FkZCB1c2VyJywgKCkgPT4ge1xuICAgIHRlc3QoJ2NsaWNrIFwiYWRkIHVzZXJcIiBzaG93IHVzZXIgZm9ybScsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jdXNlcnMnKTtcbiAgICAgIGNvbnN0IGFkZFVzZXJCdXR0b24gPSAkKCcjdXNlcnMgLmFkZC1pdGVtJykuZ2V0KDApO1xuICAgICAgVUkuY2xpY2soYWRkVXNlckJ1dHRvbiwgeyB2aWV3OiAnbWFpbi91c2Vycy9mb3JtJyB9KTtcbiAgICAgIGNvbnN0IG51bWJlck9mRm9ybUdyb3VwcyA9ICQoJyN1c2VycyAuZm9ybS1ncm91cCcpLmdldCgpLmxlbmd0aDtcblxuICAgICAgdC5lcXVhbCg0LCBudW1iZXJPZkZvcm1Hcm91cHMpO1xuICAgICAgdC5lcXVhbChsb2NhdGlvbi5oYXNoLCAnI3VzZXJzL25ldycpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgndXJsIFwiLyN1c2Vycy9uZXdcIiBzaG93IHVzZXIgZm9ybScsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI3VzZXJzL25ldycsIHsgdmlldzogJ21haW4vdXNlcnMvZm9ybScgfSk7XG4gICAgICBjb25zdCBudW1iZXJPZkZvcm1Hcm91cHMgPSAkKCcjdXNlcnMgLmZvcm0tZ3JvdXAnKS5nZXQoKS5sZW5ndGg7XG5cbiAgICAgIHQuZXF1YWwoNCwgbnVtYmVyT2ZGb3JtR3JvdXBzKTtcbiAgICAgIHQuZXF1YWwobG9jYXRpb24uaGFzaCwgJyN1c2Vycy9uZXcnKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuICAgIFFVbml0Lm1vZHVsZSgnZm9ybScsIHtcbiAgICAgIGFmdGVyRWFjaDogYXN5bmMgZnVuY3Rpb24gZGVsZXRlTmV3VXNlcigpIHtcbiAgICAgICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgICAgICAgYXdhaXQgQVAuZGVsZXRlTGFzdFVzZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRlc3QoJ3N1Ym1pdCByZWRpcmVjdCB0byBzaG93IHVzZXIgcGFnZScsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jdXNlcnMvbmV3JywgeyB2aWV3OiAnbWFpbi91c2Vycy9mb3JtJyB9KTtcbiAgICAgIGF3YWl0IFVJLmZpbGxVc2VyRm9ybVRoZW5TdWJtaXQoKTtcbiAgICAgIGNvbnN0IHBhZ2VVc2Vyc0hlYWRlciA9ICQoJyNtYWluIGgzJykudGV4dCgpO1xuXG4gICAgICB0LmVxdWFsKHBhZ2VVc2Vyc0hlYWRlci50b0xvd2VyQ2FzZSgpLCAnVVNFUicudG9Mb3dlckNhc2UoKSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdhZnRlciBzdWJtaXQgdGhlIG5ldyB1c2VyIGlzIGNyZWF0ZWQgJywgYXN5bmMgKHQpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSB0LmFzeW5jKCk7XG4gICAgICBhd2FpdCBVSS52aXNpdCgnLyN1c2Vycy9uZXcnLCB7IHZpZXc6ICdtYWluL3VzZXJzL2Zvcm0nIH0pO1xuICAgICAgY29uc3QgbnVtYmVyT2ZVc2Vyc0JlZm9yZVN1Ym1pdCA9IEFQUC5Db2xsZWN0aW9ucy51c2Vycy5sZW5ndGg7XG5cbiAgICAgIGF3YWl0IFVJLmZpbGxVc2VyRm9ybVRoZW5TdWJtaXQoKTtcbiAgICAgIGNvbnN0IG51bWJlck9mVXNlcnNBZnRlclN1Ym1pdCA9IEFQUC5Db2xsZWN0aW9ucy51c2Vycy5sZW5ndGg7XG4gICAgICBjb25zdCBkaWZmID0gbnVtYmVyT2ZVc2Vyc0FmdGVyU3VibWl0IC0gbnVtYmVyT2ZVc2Vyc0JlZm9yZVN1Ym1pdDtcblxuICAgICAgdC5lcXVhbCgxLCBkaWZmKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgVUkgZnJvbSAnLi4vLi4vaGVscGVycy91aS1oZWxwZXInO1xuaW1wb3J0IEFQIGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwLWhlbHBlcic7XG5cbmNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dVc2VyVGVzdCgpIHtcbiAgUVVuaXQubW9kdWxlKCdzaG93IHVzZXInLCAoaG9va3MpID0+IHtcbiAgICBob29rcy5iZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgICAgQVAucHVzaFVzZXJUb0NvbGxlY3Rpb24oe1xuICAgICAgICBpZDogMTAwMCxcbiAgICAgICAgbmFtZTogJ1VzZXInLFxuICAgICAgICBzdXJuYW1lOiAxMDAwLFxuICAgICAgICBlbWFpbDogJ1VzZXIxMDAwQHRlc3QuY29tJ1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaG9va3MuYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgICAgIEFQLnBvcFVzZXJGcm9tQ29sbGVjdGlvbigxMDAwKTtcbiAgICB9KTtcblxuICAgIHRlc3QoJ3VybCBcIi8jdXNlcnMvaWRcIiBzaG93IHVzZXIgcGFnZScsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jdXNlcnMvMTAwMCcsIHsgdmlldzogJ21haW4vdXNlcnMvc2hvdycgfSk7XG4gICAgICBjb25zdCB1c2VyUGFnZUhlYWRlciA9ICQoJyNtYWluIGgzJykudGV4dCgpO1xuICAgICAgY29uc3QgaWRUZXh0ID0gJCgnI3VzZXJzICNpZCcpLnRleHQoKTtcbiAgICAgIGNvbnN0IHBhdGggPSAnI3VzZXJzLzEwMDAnO1xuXG4gICAgICB0LmVxdWFsKGxvY2F0aW9uLmhhc2gsIHBhdGgpO1xuICAgICAgdC5lcXVhbCh1c2VyUGFnZUhlYWRlci50b0xvd2VyQ2FzZSgpLCAnVVNFUicudG9Mb3dlckNhc2UoKSk7XG4gICAgICB0Lm9rKGlkVGV4dC5tYXRjaCgxMDAwKSk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdjbGljayB1c2VyIHJvdyBvbiBpbmRleCB0YWJsZSwgc2hvdyB1c2VyIHBhZ2UnLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI3VzZXJzJyk7XG4gICAgICBjb25zdCBsYXN0VXNlclJvdyA9IF8ubGFzdCgkKCcjdXNlcnMgdGFibGUgdGJvZHkgdHInKSk7XG4gICAgICBjb25zdCBjb2x1bW5JZCA9ICQobGFzdFVzZXJSb3cpLmZpbmQoJ3RkJylbMF07XG4gICAgICBjb25zdCB1c2VySWQgPSAkKGNvbHVtbklkKS50ZXh0KCk7XG5cbiAgICAgIGF3YWl0IFVJLmNsaWNrKGNvbHVtbklkLCB7IHZpZXc6ICdtYWluL3VzZXJzL3Nob3cnIH0pO1xuICAgICAgY29uc3QgdXNlclBhZ2VIZWFkZXIgPSAkKCcjbWFpbiBoMycpLnRleHQoKTtcbiAgICAgIGNvbnN0IGlkVGV4dCA9ICQoJyN1c2VycyAjaWQnKS50ZXh0KCk7XG4gICAgICBjb25zdCBwYXRoID0gYCN1c2Vycy8ke3VzZXJJZH1gO1xuXG4gICAgICB0LmVxdWFsKGxvY2F0aW9uLmhhc2gsIHBhdGgpO1xuICAgICAgdC5lcXVhbCh1c2VyUGFnZUhlYWRlci50b0xvd2VyQ2FzZSgpLCAnVVNFUicudG9Mb3dlckNhc2UoKSk7XG4gICAgICB0Lm9rKGlkVGV4dC5tYXRjaCh1c2VySWQpKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbi8qXG4gICAgLy8gc29tZXRpbWVzIHN1Y2ggaG9vayBjb3VsZCBiZSBuZWNlc3Nlcnk6IGEgY2xvc2luZyB0ZXN0XG4gICAgLy8gYWxsb3dzIHRvIGZpbmFsbHkgY2xvc2UgcHJldmlvdXMgYXN5bmMgdGVzdFxuICAgIHRlc3QoJ2Nsb3NpbmcgZW1wdHkgdGVzdCcsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgYXdhaXQgQVAud2FpdCgyMDApO1xuICAgICAgdC5leHBlY3QoMCk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4qL1xuICB9KTtcbn1cblxuIiwiaW1wb3J0IFVJIGZyb20gJy4uLy4uL2hlbHBlcnMvdWktaGVscGVyJztcbmltcG9ydCBBUCBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcC1oZWxwZXInO1xuXG5jb25zdCBBUFAgPSB3aW5kb3cuQVBQO1xuXG5jb25zdCBIZWxwZXIgPSB7XG4gIGFzeW5jIGNyZWF0ZVRlc3RVc2VyKHQpIHtcbiAgICBhd2FpdCBVSS52aXNpdCgnLyN1c2Vycy9uZXcnLCB7IHZpZXc6ICdtYWluL3VzZXJzL2Zvcm0nIH0pO1xuICAgIGNvbnN0IHRlc3RVc2VyMSA9IGF3YWl0IFVJLmZpbGxVc2VyRm9ybVRoZW5TdWJtaXQoKTtcbiAgICBBUFAuVGVzdC50ZXN0VXNlcjEgPSB0ZXN0VXNlcjE7XG4gICAgY29uc3QgcGFnZVVzZXJzSGVhZGVyID0gJCgnI21haW4gaDMnKS50ZXh0KCk7XG4gICAgdC5lcXVhbChwYWdlVXNlcnNIZWFkZXIudG9Mb3dlckNhc2UoKSwgJ1VTRVInLnRvTG93ZXJDYXNlKCkpO1xuICAgIHQuZXF1YWwobG9jYXRpb24uaGFzaCwgYCN1c2Vycy8ke3Rlc3RVc2VyMS5pZH1gKTtcbiAgfSxcblxuICBhc3luYyBkZWxldGVUZXN0VXNlcigpIHtcbiAgICBjb25zdCB0ZXN0VXNlcjEgPSBBUFAuVGVzdC50ZXN0VXNlcjE7XG4gICAgYXdhaXQgQVAuZGVsZXRlVXNlcih0ZXN0VXNlcjEpO1xuICAgIEFQUC5UZXN0LnRlc3RVc2VyMSA9IG51bGw7XG4gICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscGVyO1xuIiwiaW1wb3J0IFVJIGZyb20gJy4uLy4uL2hlbHBlcnMvdWktaGVscGVyJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCB7IHRlc3QgfSA9IFFVbml0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VXNlclRlc3QoKSB7XG4gIFFVbml0Lm1vZHVsZSgnZWRpdCB1c2VyJywgKGhvb2tzKSA9PiB7XG4gICAgaG9va3MuYmVmb3JlKGFzeW5jICh0KSA9PiB7XG4gICAgICBhd2FpdCBIZWxwZXIuY3JlYXRlVGVzdFVzZXIodCk7XG4gICAgfSk7XG4gICAgaG9va3MuYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgSGVscGVyLmRlbGV0ZVRlc3RVc2VyKCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdlZGl0IGJ1dHRvbiBzaG93IHVzZXIgZm9ybScsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgY29uc3QgaWQgPSBBUFAuVGVzdC50ZXN0VXNlcjEuaWQ7XG4gICAgICBhd2FpdCBVSS52aXNpdChgLyN1c2Vycy8ke2lkfWAsIHsgdmlldzogJ21haW4vdXNlcnMvc2hvdycgfSk7XG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gJCgnI3VzZXJzICNlZGl0JykuZ2V0KDApO1xuXG4gICAgICBhd2FpdCBVSS5jbGljayhlZGl0QnV0dG9uLCB7IHZpZXc6ICdtYWluL3VzZXJzL2Zvcm0nIH0pO1xuICAgICAgY29uc3QgbnVtYmVyT2ZGb3JtR3JvdXBzID0gJCgnI3VzZXJzIC5mb3JtLWdyb3VwJykuZ2V0KCkubGVuZ3RoO1xuXG4gICAgICB0LmVxdWFsKDQsIG51bWJlck9mRm9ybUdyb3Vwcyk7XG4gICAgICB0LmVxdWFsKGxvY2F0aW9uLmhhc2gsIGAjdXNlcnMvZWRpdC8ke2lkfWApO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgndXJsIFwiLyN1c2Vycy9lZGl0L2lkXCIgc2hvdyB1c2VyIGZvcm0nLCBhc3luYyAodCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IHQuYXN5bmMoKTtcbiAgICAgIGNvbnN0IHRlc3RVc2VyMSA9IEFQUC5UZXN0LnRlc3RVc2VyMTtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI2Fib3V0Jyk7XG4gICAgICBhd2FpdCBVSS52aXNpdChgI3VzZXJzL2VkaXQvJHt0ZXN0VXNlcjEuaWR9YCwgeyB2aWV3OiAnbWFpbi91c2Vycy9mb3JtJyB9KTtcbiAgICAgIGNvbnN0IGlucHV0VXNlck5hbWUgPSAkKCcjdXNlcnMgI3VzZXItbmFtZScpLnZhbCgpO1xuICAgICAgY29uc3QgaW5wdXRVc2VyU3VybmFtZSA9ICQoJyN1c2VycyAjdXNlci1zdXJuYW1lJykudmFsKCk7XG4gICAgICBjb25zdCB0ZXN0VXNlck5hbWUgPSB0ZXN0VXNlcjEuZ2V0KCduYW1lJyk7XG4gICAgICBjb25zdCB0ZXN0VXNlclN1cm5hbWUgPSB0ZXN0VXNlcjEuZ2V0KCdzdXJuYW1lJyk7XG5cbiAgICAgIHQuZXF1YWwobG9jYXRpb24uaGFzaCwgYCN1c2Vycy9lZGl0LyR7dGVzdFVzZXIxLmlkfWApO1xuICAgICAgdC5lcXVhbCh0ZXN0VXNlck5hbWUsIGlucHV0VXNlck5hbWUpO1xuICAgICAgdC5lcXVhbCh0ZXN0VXNlclN1cm5hbWUsIGlucHV0VXNlclN1cm5hbWUpO1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgUVVuaXQubW9kdWxlKCdmb3JtJywgKCkgPT4ge1xuICAgICAgdGVzdCgnYWZ0ZXIgc3VibWl0IHRoZSB1c2VyIGlzIHVwZGF0ZWQnLCBhc3luYyAodCkgPT4ge1xuICAgICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgICBjb25zdCB0ZXN0VXNlcjEgPSAkLmV4dGVuZCh7fSwgQVBQLlRlc3QudGVzdFVzZXIxKTtcbiAgICAgICAgY29uc3QgdGVzdFVzZXIxSWQgPSB0ZXN0VXNlcjEuaWQ7XG4gICAgICAgIGNvbnN0IHRlc3RVc2VyMU5hbWUgPSB0ZXN0VXNlcjEuZ2V0KCduYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlc3RVc2VyMVN1cm5hbWUgPSB0ZXN0VXNlcjEuZ2V0KCdzdXJuYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlc3RVc2VyMUVtYWlsID0gdGVzdFVzZXIxLmdldCgnZW1haWwnKTtcbiAgICAgICAgYXdhaXQgVUkudmlzaXQoJy8jYWJvdXQnKTtcbiAgICAgICAgYXdhaXQgVUkudmlzaXQoYCN1c2Vycy9lZGl0LyR7dGVzdFVzZXIxLmlkfWAsXG4gICAgICAgICAgeyB2aWV3OiAnbWFpbi91c2Vycy9mb3JtJyB9KTtcbiAgICAgICAgY29uc3QgdGVzdFVzZXIyID0gYXdhaXQgVUkuZmlsbFVzZXJGb3JtVGhlblN1Ym1pdCgpO1xuICAgICAgICBjb25zdCB0ZXN0VXNlcjJJZCA9IHRlc3RVc2VyMi5pZDtcbiAgICAgICAgY29uc3QgdGVzdFVzZXIyTmFtZSA9IHRlc3RVc2VyMi5nZXQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVzdFVzZXIyU3VybmFtZSA9IHRlc3RVc2VyMi5nZXQoJ3N1cm5hbWUnKTtcbiAgICAgICAgY29uc3QgdGVzdFVzZXIyRW1haWwgPSB0ZXN0VXNlcjIuZ2V0KCdlbWFpbCcpO1xuXG4gICAgICAgIHQuZXF1YWwodGVzdFVzZXIxSWQsIHRlc3RVc2VyMklkKTtcbiAgICAgICAgdC5ub3RFcXVhbCh0ZXN0VXNlcjFOYW1lLCB0ZXN0VXNlcjJOYW1lKTtcbiAgICAgICAgdC5ub3RFcXVhbCh0ZXN0VXNlcjFTdXJuYW1lLCB0ZXN0VXNlcjJTdXJuYW1lKTtcbiAgICAgICAgdC5ub3RFcXVhbCh0ZXN0VXNlcjFFbWFpbCwgdGVzdFVzZXIyRW1haWwpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgVUkgZnJvbSAnLi4vLi4vaGVscGVycy91aS1oZWxwZXInO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5cbmNvbnN0IHsgdGVzdCB9ID0gUVVuaXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVVzZXJUZXN0KCkge1xuICBRVW5pdC5tb2R1bGUoJ2RlbGV0ZSB1c2VyJywgKGhvb2tzKSA9PiB7XG4gICAgaG9va3MuYmVmb3JlKGFzeW5jICh0KSA9PiB7XG4gICAgICBhd2FpdCBIZWxwZXIuY3JlYXRlVGVzdFVzZXIodCk7XG4gICAgfSk7XG4gICAgaG9va3MuYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgQVBQLlRlc3QudGVzdFVzZXIxID0gbnVsbDtcbiAgICAgIGF3YWl0IFVJLnZpc2l0KCcvI2Fib3V0Jyk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdjbGljayBcIlhcIiBvbiB1c2VyIGluIGluZGV4IHRhYmxlLCBkZWxldGUgdXNlcicsIGFzeW5jICh0KSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gdC5hc3luYygpO1xuICAgICAgYXdhaXQgVUkudmlzaXQoJy8jdXNlcnMnKTtcbiAgICAgIGNvbnN0IGNvdW50VXNlcnNCZWZvcmUgPSBBUFAuQ29sbGVjdGlvbnMudXNlcnMubGVuZ3RoO1xuICAgICAgY29uc3QgY291bnRVc2Vyc0luSW5kZXhCZWZvcmUgPSAkKCcjdXNlcnMgdGFibGUgdHInKS5sZW5ndGg7XG4gICAgICBjb25zdCBYID0gJCgnI3VzZXJzIHRhYmxlIHRyOmxhc3QgdGQuaXRlbS1kZXN0cm95JykuZ2V0KDApO1xuICAgICAgWC5jbGljaygpO1xuICAgICAgYXdhaXQgVUkud2FpdCgzMDApO1xuICAgICAgY29uc3QgY291bnRVc2Vyc0FmdGVyID0gQVBQLkNvbGxlY3Rpb25zLnVzZXJzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNvdW50VXNlcnNJbkluZGV4QWZ0ZXIgPSAkKCcjdXNlcnMgdGFibGUgdHInKS5sZW5ndGg7XG5cbiAgICAgIHQuZXF1YWwoLTEsIGNvdW50VXNlcnNBZnRlciAtIGNvdW50VXNlcnNCZWZvcmUpO1xuICAgICAgdC5lcXVhbCgtMSwgY291bnRVc2Vyc0luSW5kZXhBZnRlciAtIGNvdW50VXNlcnNJbkluZGV4QmVmb3JlKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgTmV3VXNlclRlc3QgZnJvbSAnLi9uZXctdGVzdCc7XG5pbXBvcnQgU2hvd1VzZXJUZXN0IGZyb20gJy4vc2hvdy10ZXN0JztcbmltcG9ydCBFZGl0VXNlclRlc3QgZnJvbSAnLi9lZGl0LXRlc3QnO1xuaW1wb3J0IERlbGV0ZVVzZXJUZXN0IGZyb20gJy4vZGVsZXRlLXRlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vyc1Rlc3RzKCkge1xuICBRVW5pdC5tb2R1bGUoJ3VzZXJzJywgKCkgPT4ge1xuICAgIE5ld1VzZXJUZXN0KCk7XG4gICAgU2hvd1VzZXJUZXN0KCk7XG4gICAgRWRpdFVzZXJUZXN0KCk7XG4gICAgRGVsZXRlVXNlclRlc3QoKTtcbiAgfSk7XG59XG5cbiIsImltcG9ydCBOYXZpZ2F0aW9uVGVzdHMgZnJvbSAnLi9uYXYtYmFyL25hdmktdGVzdCc7XG5pbXBvcnQgUHJvZHVjdHNUZXN0cyBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLXRlc3QnO1xuaW1wb3J0IFVzZXJzVGVzdHMgZnJvbSAnLi91c2Vycy91c2Vycy10ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSW50ZWdyYXRpb25UZXN0cygpIHtcbiAgUVVuaXQubW9kdWxlKCdhY2NlcHRhbmNlJywgKCkgPT4ge1xuICAgIE5hdmlnYXRpb25UZXN0cygpO1xuICAgIFByb2R1Y3RzVGVzdHMoKTtcbiAgICBVc2Vyc1Rlc3RzKCk7XG4gIH0pO1xufVxuIiwiY29uc3QgeyB0ZXN0IH0gPSBRVW5pdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld0dsb2JhbFJlZ2lzdGVyVGVzdCgpIHtcbiAgUVVuaXQubW9kdWxlKCdWaWV3R2xvYmFsUmVnaXN0ZXInLCAoKSA9PiB7XG4gICAgUVVuaXQubW9kdWxlKCdUZXN0VmlldycsIChob29rcykgPT4ge1xuICAgICAgaG9va3MuYWZ0ZXIoKCkgPT4ge1xuICAgICAgICBkZWxldGUgQVBQLlZpZXdzWyd0ZXN0dmlldyddO1xuICAgICAgICBkZWxldGUgQVBQLk1vZHVsZXMuVGVzdC5WaWV3c1sndGVzdHZpZXcnXTtcbiAgICAgIH0pO1xuXG4gICAgICB0ZXN0KCdyZWdpc3RlciB0aGVuIHVucmVnaXN0ZXIgaW4gQVBQLlZpZXdzIGFuZCBBUFAuTW9kdWxlcy5UZXN0LlZpZXdzJywgKHQpID0+IHtcbiAgICAgICAgY29uc3QgVGVzdFZpZXcgPSBNYXJpb25ldHRlLlZpZXcuZXh0ZW5kKHtcbiAgICAgICAgICB0ZW1wbGF0ZTogXy50ZW1wbGF0ZSgnPGgzPlRlc3Q8L2gzPicpLFxuICAgICAgICAgIGJlaGF2aW9yczoge1xuICAgICAgICAgICAgVmlld0dsb2JhbFJlZ2lzdGVyOiB7IHZpZXdOYW1lOiAndGVzdHZpZXcnLCBtb2R1bGU6ICdUZXN0JyB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRlc3RWaWV3ID0gbmV3IFRlc3RWaWV3KCk7XG4gICAgICAgIGNvbnN0IHRlc3RSZWdpb24gPSBBUFAuVmlld3MuYXBwLmdldFJlZ2lvbigndGVzdCcpO1xuXG4gICAgICAgIHRlc3RSZWdpb24uc2hvdyh0ZXN0Vmlldyk7XG4gICAgICAgIHQub2soQVBQLlZpZXdzLnRlc3R2aWV3KTtcbiAgICAgICAgdC5vayhBUFAuTW9kdWxlcy5UZXN0LlZpZXdzLnRlc3R2aWV3KTtcblxuICAgICAgICB0ZXN0UmVnaW9uLmVtcHR5KCk7XG4gICAgICAgIHQubm90T2soQVBQLlZpZXdzLnRlc3R2aWV3KTtcbiAgICAgICAgdC5ub3RPayhBUFAuTW9kdWxlcy5UZXN0LlZpZXdzLnRlc3R2aWV3KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBWaWV3R2xvYmFsUmVnaXN0ZXJUZXN0IGZyb20gJy4vdmlldy1nbG9iYWwtcmVnaXN0ZXItdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVncmF0aW9uVGVzdHMoKSB7XG4gIFFVbml0Lm1vZHVsZSgnSW50ZWdyYXRpb24nLCAoKSA9PiB7XG4gICAgVmlld0dsb2JhbFJlZ2lzdGVyVGVzdCgpO1xuICB9KTtcbn1cbiIsImltcG9ydCBVbml0VGVzdHMgZnJvbSAnLi91bml0L3VuaXQnO1xuaW1wb3J0IEFjY2VwdGFuY2VUZXN0cyBmcm9tICcuL2FjY2VwdGFuY2UvYWNjZXB0YW5jZSc7XG5pbXBvcnQgSW50ZWdyYXRpb25UZXN0cyBmcm9tICcuL2ludGVncmF0aW9uL2ludGVncmF0aW9uJztcblxuXG5mdW5jdGlvbiBydW5UZXN0cygpIHtcbiAgY29uc3QgYXBwRXZlbnRzID0gQmFja2JvbmUuUmFkaW8uY2hhbm5lbCgnYXBwOmV2ZW50cycpO1xuICBhcHBFdmVudHMub24oJ2luaXQ6YXBwJywgYXN5bmMgKCkgPT4ge1xuICAgIGFkZFRlc3RHbG9iYWxzKCk7XG4gICAgVW5pdFRlc3RzKCk7XG4gICAgSW50ZWdyYXRpb25UZXN0cygpO1xuICAgIGF3YWl0IEFjY2VwdGFuY2VUZXN0cygpO1xuICB9KTtcbn1cblxucnVuVGVzdHMoKTtcblxuZnVuY3Rpb24gYWRkVGVzdEdsb2JhbHMoKSB7XG4gIEFQUC5UZXN0ID0ge307XG4gIEFQUC5Nb2R1bGVzLlRlc3QgPSB7fTtcbiAgQVBQLk1vZHVsZXMuVGVzdC5WaWV3cyA9IHt9O1xuICAkKCcjYXBwIDpmaXJzdC1jaGlsZCcpLmFwcGVuZCgnPGRpdiBpZD1cInRlc3RcIj48L2Rpdj4nKTtcbiAgQVBQLlZpZXdzLmFwcC5hZGRSZWdpb24oJ3Rlc3QnLCAnI3Rlc3QnKTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXN0IiwiR2VuZXJhbEdsb2JhbHNUZXN0IiwiTmF2aUFib3V0IiwiTmF2aUNvbnRhY3QiLCJBUFAiLCJIZWxwZXIiLCJJbnRlZ3JhdGlvblRlc3RzIiwiQWNjZXB0YW5jZVRlc3RzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDOztBQUV2QixBQUFlLFNBQVMsY0FBYyxHQUFHO0VBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsTUFBTTtJQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNO01BQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDekIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hDLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzVCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzFCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzlCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzdCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzNCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzlCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ3pCLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKOztBQy9CRCxNQUFNLEVBQUUsTUFBQUEsTUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDOztBQUV2QixBQUFlLFNBQVMs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
