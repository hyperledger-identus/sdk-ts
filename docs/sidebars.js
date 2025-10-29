const path = require('path');
const fs = require('fs')


function buildDocumentationSidebar(userPath, ignoreDirectories = []) {
  let label = '';
  const isDirectory = fs.statSync(userPath).isDirectory();
  if (isDirectory) {
    const hasReadme = fs.existsSync(path.join(userPath, "README.md"));
    const docsPath = userPath.replace(`${__dirname}/`, '')
    label = `${path.basename(userPath)[0].toUpperCase()}${path.basename(userPath).slice(1)}`;
    const link = hasReadme ? { type: 'doc', id: `${docsPath}/README` } : undefined;

    const groups = ['classes', 'enumerations', 'functions', 'interfaces', 'namespaces', 'type-aliases', 'variables']
    const isGroup = (ma) =>
      ma.toLowerCase() === 'plugins' ||
      ma.toLowerCase() === 'internal' ||
      ma.toLowerCase() === 'overview' ||
      groups.includes(ma.toLowerCase());

    const items = fs
      .readdirSync(userPath, { withFileTypes: true })
      .filter((entry) => !entry.name.includes('README.md'))
      .reduce((all, entry) => {
        if (ignoreDirectories.every((ignore) => !`${userPath}/${entry.name}`.toLowerCase().includes(ignore.toLowerCase()))) {
          return [
            ...all,
            ...buildDocumentationSidebar(path.join(userPath, entry.name), ignoreDirectories)
          ].sort((a, b) => a.label.localeCompare(b.label));
        }
        return all.sort((a, b) => a.label.localeCompare(b.label));
      }, []).sort((a, b) => a.label.localeCompare(b.label));

    if (items.length === 0) {
      return []
    }

    if (isGroup(label)) {
      return items
    }

    return [
      {
        type: 'category',
        label,
        link,
        items
      }
    ]
  }

  label = path.basename(userPath).replace('.md', '')

  const id = `${userPath.replace(`${__dirname}/`, '').replace('.md', '')}`
  if (ignoreDirectories.includes(id)) {
    return []
  }

  if (id.includes('#') || label.includes('#') || userPath.replace(`${__dirname}/`, '').includes('#')) {
    return [
      {
        type: 'link',
        label,
        href: docsPath
      }
    ]
  }

  console.log(id, label)
  return [
    {
      type: 'doc',
      label,
      id
    }
  ]
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialsSidebar: [
    {
      label: 'Introduction',
      type: "doc",
      id: "sdk/README"
    },
    {
      label: 'Overview',
      type: 'category',

      link: {
        type: 'doc',
        id: 'sdk/overview/README',
      },
      items: buildDocumentationSidebar(path.resolve(__dirname, "./sdk/overview"))
    },
    {
      type: 'category',
      label: 'Plugins',
      items: buildDocumentationSidebar(path.resolve(__dirname, "./sdk/plugins"))
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: "DID PRISM",
          items: [
            {
              type: 'doc',
              id: 'prism/what-is-did-prism'
            },
            {
              type: 'doc',
              id: 'prism/configuration'
            },
            {
              type: 'doc',
              id: 'prism/resolving-did'
            },
            {
              type: 'doc',
              id: 'prism/publishing-did'
            }
          ]
        },
        {
          type: 'doc',
          label: "Backup",
          id: 'examples/Backup',
        },
        {
          type: 'doc',
          label: "Verification",
          id: 'examples/SDKVerification',
        },
        {
          type: 'category',
          label: 'Connectionless',
          items: [
            {
              type: 'doc',
              label: "Credential Offer",
              id: 'examples/connectionless/ConnectionlessOffer',
            },
            {
              type: 'doc',
              label: "Presentation",
              id: 'examples/connectionless/ConnectionlessPresentation',
            }
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Architecture',
      items: [
        {
          type: 'category',
          label: 'Decision records',
          items: [
            {
              type: 'doc',
              id: 'decisions/sdk-package-release',
            }
          ]
        },
        {
          type: 'category',
          label: 'Migration',
          items: [
            {
              type: 'doc',
              id: 'migration/migrating_6x_to_7x'
            }
          ]
        }
      ]
    }
  ]
}

module.exports = sidebars
