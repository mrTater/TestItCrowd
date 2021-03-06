// IMPORTS
import angular from 'angular';
import listItemComponent from './listItem.component';


// Imports aditional Directives
import item from './item';
import category from './category';

// Defination and configuration Components
const listItem = angular
  .module('app.component.containerDragAndDrop.listItem', [
    item,
    category
  ])
  .component('listItem', listItemComponent)
  .name;

export default listItem;