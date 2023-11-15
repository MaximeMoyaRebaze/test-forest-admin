import { CollectionCustomizer } from '@forestadmin/agent';
import { Schema } from '../typings';

export default (chef_availabilities: CollectionCustomizer<Schema, 'chef_availabilities'>) =>
  chef_availabilities.removeField('available_at');