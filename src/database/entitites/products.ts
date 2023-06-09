import knex from '..';
import { Product } from '../models';
import { Entity, SchemaMapping } from './database';

const productColumns: SchemaMapping<Product> = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

const productMapping: SchemaMapping<Product> = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

const schemaName = 'Product';
const tabName = 'Products';

const selectColumnsProducts = [
  knex.ref(productMapping.uuid).as(productColumns.uuid).withSchema(tabName),
  knex.ref(productMapping.name).as(productColumns.name).withSchema(tabName),
  knex.ref(productMapping.description).as(productColumns.description).withSchema(tabName),
  knex.ref(productMapping.createdAt).as(productColumns.createdAt).withSchema(tabName),
  knex.ref(productMapping.updatedAt).as(productColumns.updatedAt).withSchema(tabName),
];

const Products: Entity<Product> = {
  name: schemaName,
  tableName: tabName,
  column: productColumns,
  mapping: productMapping,
  selectColumsRef: selectColumnsProducts,
  allowed: [productColumns.name, productColumns.description],
};

export default Products;
