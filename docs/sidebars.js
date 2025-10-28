const path = require('path');
const fs = require('fs')

// @ts-check
const sidebars = {
  tutorialsSidebar: [
    {
      label: 'Introduction',
      type: "doc",
      id: "sdk/README"
    },

    {
      type: 'category',
      label: 'Building Blocks',
      link: {
        type: 'doc',
        id: 'sdk/modules',
      },
      items: [
        'sdk/classes/Apollo',
        'sdk/classes/Castor',
        'sdk/classes/Agent',
        'pluto/README',
        'sdk/classes/Mercury',
        {
          type: 'category',
          label: 'Domain',
          link: {
            type: 'doc',
            id: 'sdk/modules/Domain',
          },
          items: fs.readdirSync(path.resolve(__dirname, "./sdk"))
            .reduce((menu, file) => {
              const fileExtension = file.split(".")
              if (fileExtension[fileExtension.length - 1] === "md") {
                return menu
              } else if (fs.lstatSync(path.resolve(__dirname, "./sdk", file)).isDirectory()) {
                const currentFolder = file;
                const files = fs.readdirSync(path.resolve(__dirname, "./sdk", currentFolder)).filter((file) => file !== "Domain.md" && file.includes("Domain."));

                return [
                  ...menu,
                  ...files.map((filename) => {

                    const fixFile = `sdk/${currentFolder}/${filename.replace(".md", "")}`
                    return {
                      label: fixFile.replace(`sdk/${currentFolder}/Domain.`, ""),
                      type: "doc",
                      id: fixFile
                    }

                  })
                ]
              }
              return menu;
            }, [])
        },
        {
          type: 'category',
          label: 'Reference',
          link: {
            type: 'generated-index',
            title: 'SDK Reference',
            description: 'All other exported classes, types, interfaces and references.'
          },
          items: fs.readdirSync(path.resolve(__dirname, "./sdk"))
            .filter((file) => !file.includes("Domain."))
            .reduce((menu, file) => {
              const fileExtension = file.split(".")
              if (fileExtension[fileExtension.length - 1] === "md") {
                return menu
              } else if (fs.lstatSync(path.resolve(__dirname, "./sdk", file)).isDirectory()) {
                const currentFolder = file;
                const files = fs.readdirSync(path.resolve(__dirname, "./sdk", currentFolder)).filter((file) => !file.includes("Domain."))
                return [
                  ...menu,
                  ...files.map((filename) => {
                    const fixFile = `sdk/${currentFolder}/${filename.replace(".md", "")}`
                    return {
                      label: fixFile.replace(`sdk/${currentFolder}/`, ""),
                      type: "doc",
                      id: fixFile
                    }

                  })
                ]
              }
              return menu;
            }, [])
        }
      ]
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
