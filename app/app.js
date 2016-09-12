var wrTodoList = [
  {
    name: "Barsh Adar",
    description: "Architect everything"
  },
  {
    name: "Wandrew Yang",
    description: "i18n"
  },
  {
    name: "Vabri Vilyakova",
    description: "Preview Preview Preview"
  },
  {
    name: "Forge Gu",
    description: "Build ReST APIs"
  }
];

var shareTodoList = [
  {
    name: "Galena Kalernyk",
    description: "Share Share"
  }
];

var taskListCtrl = function () {
  this.todoList = wrTodoList;

  this.setWrList = function () {
    this.todoList = wrTodoList;
  };

  this.setShareList = function () {
    this.todoList = shareTodoList;
  };
};

var todoList = {
  templateUrl: 'todo-list.html',
  bindings: {
    list: '<list'
  },
  controller: function() {
    this.$onChanges = function (changes) {
      this.list = angular.copy(this.list);
    };

    this.addItem = function () {
      this.list.push(this.todoItem);
      this.todoItem = {};
    };

    this.deleteItem = function (index) {
      this.list.splice(index, 1);
    };
  }
};

var todoItem = {
  templateUrl: 'todo-item.html',
  bindings: {
    item: '<item',
    delete: '&delete'
  },
  controller: function () {
    this.$onChanges = function (changes) {
      this.item = angular.copy(this.item);
    };
  }
}

angular.module('app', [])
  .controller('taskListCtrl', taskListCtrl)
  .component('todoList', todoList)
  .component('todoItem', todoItem);
