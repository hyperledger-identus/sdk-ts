const packageJson = require("./package.json");

module.exports = {
    "$schema": "https://typedoc.org/schema.json",
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
    "useTsLinkResolution": true,
    "hideGenerator": true,
    "excludePrivate": true,
    "excludeReferences": false,
    "excludeProtected": true,
    "excludeInternal": true,
    "excludeNotDocumented": false,
    "theme": "markdown",
    "includeVersion": false,
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
    "excludeExternals": true,
    "exclude": ["node_modules", "build"],
    "navigation": {
        "includeCategories": false,
        "includeGroups": false,
        "includeFolders": false,
        "compactFolders": false,
        "excludeReferences": false
    },
    "categorizeByGroup": true,
    "outputFileStrategy": "modules",
    "fileExtension": ".md",
    "modulesFileName": "modules.md",
    "entryFileName": "README.md",
    "flattenOutputFiles": false
}