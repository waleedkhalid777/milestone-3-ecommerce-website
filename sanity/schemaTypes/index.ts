import { type SchemaTypeDefinition } from 'sanity';

import { List } from '../schemas/list';
import { Products } from '../schemas/products-schema';

// Combine all schemas into a single export
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, List], // Include all schemas here
};


