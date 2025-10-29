/**
 * @type {import("typedoc").TypeDocOptions}
 */
const typedocOptions = {
    "entryPoints": [
        "./src/index.ts",
        "./src/plugins/internal/anoncreds/index.ts",
        "./src/plugins/internal/didcomm/index.ts",
        "./src/plugins/internal/oidc/index.ts",
        "./src/plugins/internal/dif/index.ts",
        "./src/plugins/internal/oea/index.ts"
    ],
    "entryPointStrategy": "resolve",
    "out": "./docs/sdk",
    "plugin": [
        "typedoc-plugin-markdown",
        "typedoc-plugin-rename-defaults"
    ],
    "strikeDeprecatedPageTitles": true,
    "useTsLinkResolution": true,
    "hideGenerator": true,
    "excludePrivate": true,
    "useCodeBlocks": false,
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