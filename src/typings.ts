/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type ArInternalMetadataCustomizer = CollectionCustomizer<Schema, 'ar_internal_metadata'>;
export type ArInternalMetadataRecord = TPartialRow<Schema, 'ar_internal_metadata'>;
export type ArInternalMetadataConditionTree = TConditionTree<Schema, 'ar_internal_metadata'>;
export type ArInternalMetadataFilter = TPaginatedFilter<Schema, 'ar_internal_metadata'>;
export type ArInternalMetadataSortClause = TSortClause<Schema, 'ar_internal_metadata'>;
export type ArInternalMetadataAggregation = TAggregation<Schema, 'ar_internal_metadata'>;

export type ChefAvailabilitiesCustomizer = CollectionCustomizer<Schema, 'chef_availabilities'>;
export type ChefAvailabilitiesRecord = TPartialRow<Schema, 'chef_availabilities'>;
export type ChefAvailabilitiesConditionTree = TConditionTree<Schema, 'chef_availabilities'>;
export type ChefAvailabilitiesFilter = TPaginatedFilter<Schema, 'chef_availabilities'>;
export type ChefAvailabilitiesSortClause = TSortClause<Schema, 'chef_availabilities'>;
export type ChefAvailabilitiesAggregation = TAggregation<Schema, 'chef_availabilities'>;

export type ChefsCustomizer = CollectionCustomizer<Schema, 'chefs'>;
export type ChefsRecord = TPartialRow<Schema, 'chefs'>;
export type ChefsConditionTree = TConditionTree<Schema, 'chefs'>;
export type ChefsFilter = TPaginatedFilter<Schema, 'chefs'>;
export type ChefsSortClause = TSortClause<Schema, 'chefs'>;
export type ChefsAggregation = TAggregation<Schema, 'chefs'>;

export type CustomersCustomizer = CollectionCustomizer<Schema, 'customers'>;
export type CustomersRecord = TPartialRow<Schema, 'customers'>;
export type CustomersConditionTree = TConditionTree<Schema, 'customers'>;
export type CustomersFilter = TPaginatedFilter<Schema, 'customers'>;
export type CustomersSortClause = TSortClause<Schema, 'customers'>;
export type CustomersAggregation = TAggregation<Schema, 'customers'>;

export type DeliveryMenCustomizer = CollectionCustomizer<Schema, 'delivery_men'>;
export type DeliveryMenRecord = TPartialRow<Schema, 'delivery_men'>;
export type DeliveryMenConditionTree = TConditionTree<Schema, 'delivery_men'>;
export type DeliveryMenFilter = TPaginatedFilter<Schema, 'delivery_men'>;
export type DeliveryMenSortClause = TSortClause<Schema, 'delivery_men'>;
export type DeliveryMenAggregation = TAggregation<Schema, 'delivery_men'>;

export type MenusCustomizer = CollectionCustomizer<Schema, 'menus'>;
export type MenusRecord = TPartialRow<Schema, 'menus'>;
export type MenusConditionTree = TConditionTree<Schema, 'menus'>;
export type MenusFilter = TPaginatedFilter<Schema, 'menus'>;
export type MenusSortClause = TSortClause<Schema, 'menus'>;
export type MenusAggregation = TAggregation<Schema, 'menus'>;

export type MenusProductsCustomizer = CollectionCustomizer<Schema, 'menus_products'>;
export type MenusProductsRecord = TPartialRow<Schema, 'menus_products'>;
export type MenusProductsConditionTree = TConditionTree<Schema, 'menus_products'>;
export type MenusProductsFilter = TPaginatedFilter<Schema, 'menus_products'>;
export type MenusProductsSortClause = TSortClause<Schema, 'menus_products'>;
export type MenusProductsAggregation = TAggregation<Schema, 'menus_products'>;

export type OrdersCustomizer = CollectionCustomizer<Schema, 'orders'>;
export type OrdersRecord = TPartialRow<Schema, 'orders'>;
export type OrdersConditionTree = TConditionTree<Schema, 'orders'>;
export type OrdersFilter = TPaginatedFilter<Schema, 'orders'>;
export type OrdersSortClause = TSortClause<Schema, 'orders'>;
export type OrdersAggregation = TAggregation<Schema, 'orders'>;

export type OrdersProductsCustomizer = CollectionCustomizer<Schema, 'orders_products'>;
export type OrdersProductsRecord = TPartialRow<Schema, 'orders_products'>;
export type OrdersProductsConditionTree = TConditionTree<Schema, 'orders_products'>;
export type OrdersProductsFilter = TPaginatedFilter<Schema, 'orders_products'>;
export type OrdersProductsSortClause = TSortClause<Schema, 'orders_products'>;
export type OrdersProductsAggregation = TAggregation<Schema, 'orders_products'>;

export type ProductImagesCustomizer = CollectionCustomizer<Schema, 'product_images'>;
export type ProductImagesRecord = TPartialRow<Schema, 'product_images'>;
export type ProductImagesConditionTree = TConditionTree<Schema, 'product_images'>;
export type ProductImagesFilter = TPaginatedFilter<Schema, 'product_images'>;
export type ProductImagesSortClause = TSortClause<Schema, 'product_images'>;
export type ProductImagesAggregation = TAggregation<Schema, 'product_images'>;

export type ProductsCustomizer = CollectionCustomizer<Schema, 'products'>;
export type ProductsRecord = TPartialRow<Schema, 'products'>;
export type ProductsConditionTree = TConditionTree<Schema, 'products'>;
export type ProductsFilter = TPaginatedFilter<Schema, 'products'>;
export type ProductsSortClause = TSortClause<Schema, 'products'>;
export type ProductsAggregation = TAggregation<Schema, 'products'>;

export type SchemaMigrationsCustomizer = CollectionCustomizer<Schema, 'schema_migrations'>;
export type SchemaMigrationsRecord = TPartialRow<Schema, 'schema_migrations'>;
export type SchemaMigrationsConditionTree = TConditionTree<Schema, 'schema_migrations'>;
export type SchemaMigrationsFilter = TPaginatedFilter<Schema, 'schema_migrations'>;
export type SchemaMigrationsSortClause = TSortClause<Schema, 'schema_migrations'>;
export type SchemaMigrationsAggregation = TAggregation<Schema, 'schema_migrations'>;


export type Schema = {
  'ar_internal_metadata': {
    plain: {
      'key': string;
      'value': string;
      'created_at': string;
      'updated_at': string;
    };
    nested: {};
    flat: {};
  };
  'chef_availabilities': {
    plain: {
      'id': number;
      'chef_id': number;
      'available_at': string;
    };
    nested: {};
    flat: {};
  };
  'chefs': {
    plain: {
      'id': number;
      'firstname': string;
      'lastname': string;
      'email': string;
      'phone': string;
      'address': string;
      'created_at': string;
      'updated_at': string;
    };
    nested: {};
    flat: {};
  };
  'customers': {
    plain: {
      'id': number;
      'firstname': string;
      'lastname': string;
      'address': string;
      'phone': string;
      'created_at': string;
      'updated_at': string;
      'stripe_id': string;
      'bulk_action_started_by': number;
    };
    nested: {};
    flat: {};
  };
  'delivery_men': {
    plain: {
      'id': number;
      'firstname': string;
      'lastname': string;
      'email': string;
      'phone': string;
      'location': string;
      'available': boolean;
      'created_at': string;
      'updated_at': string;
      'geoloc': string;
    };
    nested: {};
    flat: {};
  };
  'menus': {
    plain: {
      'id': number;
      'available_at': string;
      'chef_id': number;
    };
    nested: {};
    flat: {};
  };
  'menus_products': {
    plain: {
      'id': number;
      'product_id': number;
      'menu_id': number;
    };
    nested: {};
    flat: {};
  };
  'orders': {
    plain: {
      'id': number;
      'customer_id': number;
      'created_at': string;
      'updated_at': string;
      'delivery_address': string;
      'status': number;
    };
    nested: {};
    flat: {};
  };
  'orders_products': {
    plain: {
      'id': number;
      'order_id': number;
      'product_id': number;
    };
    nested: {};
    flat: {};
  };
  'product_images': {
    plain: {
      'id': number;
      'product_id': number;
      'created_at': string;
      'updated_at': string;
      'image_file_name': string;
      'image_content_type': string;
      'image_file_size': number;
      'image_updated_at': string;
    };
    nested: {};
    flat: {};
  };
  'products': {
    plain: {
      'id': number;
      'title': string;
      'description': string;
      'instructions': string;
      'ingredients': Array<string>;
      'created_at': string;
      'updated_at': string;
      'allergens': Array<string>;
      'product_type': number;
      'image_file_name': string;
      'image_content_type': string;
      'image_file_size': number;
      'image_updated_at': string;
      'price': number;
    };
    nested: {};
    flat: {};
  };
  'schema_migrations': {
    plain: {
      'version': string;
    };
    nested: {};
    flat: {};
  };
};
