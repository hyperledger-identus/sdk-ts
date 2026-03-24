/**
 * @type {import("typedoc").TypeDocOptions}
 */
const typedocOptions = {
    "entryPoints": [
        "./src/index.tsx",
        "./src/hooks/index.ts",
        "./src/context/index.ts"
    ],
    "entryPointStrategy": "resolve",
    "out": "./docs/sdk",
    "plugin": [
        "typedoc-plugin-markdown",
        "typedoc-plugin-rename-defaults"
    ],
    "externalSymbolLinkMappings": {
        "@trust0/ridb": {
            "RIDB": "https://github.com/trust0-project/RIDB/blob/main/docs/%40trust0/ridb/classes/RIDB.md",
            "StorageType": "https://github.com/trust0-project/RIDB/blob/main/docs/%40trust0/ridb/enumerations/StorageType.md"
        },
        "@trust0/ridb-core": {
            "Collection": "https://github.com/trust0-project/RIDB/docs/@trust0/ridb-core/classes/Collection.md",
            "SchemaTypeRecord": "https://github.com/trust0-project/RIDB/blob/main/docs/%40trust0/ridb-core/type-aliases/SchemaTypeRecord.md",
            "BaseStorage": "https://github.com/trust0-project/RIDB/blob/main/docs/%40trust0/ridb-core/classes/BaseStorage.md"
        },
        "@hyperledger/identus-sdk": {
            "*": "docs/sdk/overview/README.md"
        },
        "react": {
            "React.Context": "https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype"
        }
    },
    "strikeDeprecatedPageTitles": true,
    "useTsLinkResolution": true,
    "hideGenerator": true,
    "excludePrivate": true,
    "useCodeBlocks": true,
    "excludeReferences": false,
    "excludeProtected": true,
    "excludeInternal": true,
    "excludeNotDocumented": false,
    "theme": "markdown",
    "includeVersion": true,
    "customAnchorsFormat": "curlyBrace",
    "useCustomAnchors": true,
    "mergeReadme": true,
    "readme": "./README.md",
    "expandObjects": true,
    "expandParameters": true,
    "interfacePropertiesFormat": "table",
    "parametersFormat": "table",
    "indexFormat": "table",
    "classPropertiesFormat": "table",
    "typeAliasPropertiesFormat": "table",
    "enumMembersFormat": "table",
    "typeDeclarationFormat": "table",
    "propertyMembersFormat": "table",
    "searchInComments": true,
    "excludeExternals": false,
    "exclude": ["node_modules", "build"],
    "categorizeByGroup": false,
    "outputFileStrategy": "Members",
    "fileExtension": ".md",
    "modulesFileName": "modules.md",
    "entryFileName": "README.md"
}

export default typedocOptions;