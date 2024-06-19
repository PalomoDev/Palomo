import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'palomo',

  projectId: 'xg9neg9f',
  dataset: 'palomo_product',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
