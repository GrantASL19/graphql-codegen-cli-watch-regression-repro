/** @type {import('graphql-config').IGraphQLConfig} */
const graphQlConfig = {
  documents: "./src/graphQl/**/*.graphql",
  extensions: {
    /** @type {import("@graphql-codegen/cli").CodegenConfig} */
    codegen: {
      generates: { 
        "./src/generated/graphQl.ts": {
          overwrite: true,
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-graphql-request",
          ],
          config: {
            avoidOptionals: {
              field: true,
              inputValue: false,
              object: false,
              defaultValue: false,
            },
            dedupeFragments: true,
            documentMode: "string",
            enumsAsTypes: true,
            inlineFragmentTypes: "combine",
            typesPrefix: "Gql",
            omitOperationSuffix: true,
            onlyOperationTypes: true,
            preResolveTypes: true,
            scalars: {
              Date: "string",
              DateTime: "string",
              FlatTags: "../types/apiTypes#FlatTags",
              RichTextFieldType: "string",
            },
            skipTypename: true,
          },
        },
      },
    },
  },
  schema: "src/schema.graphql",
};

module.exports = graphQlConfig;
