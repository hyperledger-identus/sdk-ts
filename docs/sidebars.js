const path = require('path');
const fs = require('fs')

// @ts-check
const sidebars = {
    tutorialsSidebar: [
        {
            label: 'Introduction',
            type: "doc",
            id: "README"
        },
        {
            type: 'category',
            label: 'Modules',
            link: {
                type: 'doc',
                id: 'modules',
            },
            items: [
                'classes/Apollo',
                'classes/Castor',
                'classes/Agent',
                'classes/Mercury',
                'classes/Pollux',
                {
                    type: 'category',
                    label: 'Domain',
                    link: {
                        type: 'doc',
                        id: 'modules/Domain',
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

                                        const fixFile = `${currentFolder}/${filename.replace(".md", "")}`
                                        console.log(fixFile)
                                        return {
                                            label: fixFile.replace(`${currentFolder}/Domain.`, ""),
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
                                        const fixFile = `${currentFolder}/${filename.replace(".md", "")}`
                                        return {
                                            label: fixFile.replace(`${currentFolder}/`, ""),
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
        }
    ]
}

module.exports = sidebars
