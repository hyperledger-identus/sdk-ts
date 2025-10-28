const path = require('path');
const fs = require('fs')

/**
 * Recursively build menu items for namespaced directories
 * @param {string} dirPath - Full path to the directory to process
 * @param {string} baseDocsPath - Base path for relative path calculation
 * @returns {Array} Array of sidebar items
 */
function buildNamespaceMenu(dirPath, baseDocsPath) {
  const items = [];
  
  // Read all files and directories in the current path
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  // Sort entries: files first, then directories (both alphabetically)
  entries.sort((a, b) => {
    if (a.isDirectory() === b.isDirectory()) {
      return a.name.localeCompare(b.name);
    }
    return a.isDirectory() ? 1 : -1;
  });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // This is a category with nested items
      const readmePath = path.join(fullPath, 'README.md');
      const nestedNamespacesPath = path.join(fullPath, 'namespaces');
      
      // Create relative path for docusaurus (from docs root)
      const relativeReadmePath = path.relative(
        baseDocsPath,
        readmePath
      ).replace(/\\/g, '/').replace('.md', '');
      
      const categoryItem = {
        type: 'category',
        label: entry.name,
        link: fs.existsSync(readmePath) ? {
          type: 'doc',
          id: relativeReadmePath
        } : undefined,
        items: []
      };
      
      // Recursively process nested namespaces if they exist
      if (fs.existsSync(nestedNamespacesPath)) {
        categoryItem.items = buildNamespaceMenu(nestedNamespacesPath, baseDocsPath);
      }
      
      // Only add category if it has items or a link
      if (categoryItem.items.length > 0 || categoryItem.link) {
        items.push(categoryItem);
      }
    } else if (entry.name.endsWith('.md')) {
      // This is a standalone document
      const relativeDocPath = path.relative(
        baseDocsPath,
        fullPath
      ).replace(/\\/g, '/').replace('.md', '');
      
      // Get a clean label from the filename
      const label = entry.name.replace('.md', '').replace(/-\d+$/, '');
      
      items.push({
        type: 'doc',
        label: label,
        id: relativeDocPath
      });
    }
  }
  
  return items;
}

/**
 * Build menu items for the Domain namespace
 * @param {string} dirPath - Full path to the directory to process
 * @returns {Array} Array of sidebar items
 */
function buildDomainMenu(dirPath) {
  return buildNamespaceMenu(dirPath, path.resolve(__dirname));
}

/**
 * Build menu items for the Reference section (plugins and other SDK docs)
 * @param {string} sdkPath - Full path to the sdk directory
 * @param {Array<string>} excludeDirs - Directories to exclude (e.g., 'overview')
 * @returns {Array} Array of sidebar items
 */
function buildReferenceMenu(sdkPath, excludeDirs = []) {
  const items = [];
  const baseDocsPath = path.resolve(__dirname);
  
  // Read all files and directories in SDK path
  const entries = fs.readdirSync(sdkPath, { withFileTypes: true });
  
  // Sort entries
  entries.sort((a, b) => {
    if (a.isDirectory() === b.isDirectory()) {
      return a.name.localeCompare(b.name);
    }
    return a.isDirectory() ? 1 : -1;
  });
  
  for (const entry of entries) {
    // Skip excluded directories and README files
    if (excludeDirs.includes(entry.name) || entry.name === 'README.md') {
      continue;
    }
    
    const fullPath = path.join(sdkPath, entry.name);
    
    if (entry.isDirectory()) {
      const readmePath = path.join(fullPath, 'README.md');
      const internalPath = path.join(fullPath, 'internal');
      
      // Check if this directory has a structure to process
      const hasInternal = fs.existsSync(internalPath);
      const hasReadme = fs.existsSync(readmePath);
      
      if (hasInternal) {
        // Process internal subdirectory (like plugins/internal)
        const internalEntries = fs.readdirSync(internalPath, { withFileTypes: true });
        
        for (const internalEntry of internalEntries) {
          const internalFullPath = path.join(internalPath, internalEntry.name);
          
          if (internalEntry.isDirectory()) {
            // Directory with potential namespaces
            const internalReadmePath = path.join(internalFullPath, 'README.md');
            const namespacesPath = path.join(internalFullPath, 'namespaces');
            
            const relativeReadmePath = path.relative(
              baseDocsPath,
              internalReadmePath
            ).replace(/\\/g, '/').replace('.md', '');
            
            const categoryItem = {
              type: 'category',
              label: internalEntry.name,
              link: fs.existsSync(internalReadmePath) ? {
                type: 'doc',
                id: relativeReadmePath
              } : undefined,
              items: []
            };
            
            if (fs.existsSync(namespacesPath)) {
              categoryItem.items = buildNamespaceMenu(namespacesPath, baseDocsPath);
            }
            
            if (categoryItem.items.length > 0 || categoryItem.link) {
              items.push(categoryItem);
            }
          } else if (internalEntry.name.endsWith('.md')) {
            // Standalone markdown file
            const relativeDocPath = path.relative(
              baseDocsPath,
              internalFullPath
            ).replace(/\\/g, '/').replace('.md', '');
            
            const label = internalEntry.name.replace('.md', '').replace(/-\d+$/, '');
            
            items.push({
              type: 'doc',
              label: label,
              id: relativeDocPath
            });
          }
        }
      } else if (hasReadme) {
        // Directory with README but no internal structure
        const relativeReadmePath = path.relative(
          baseDocsPath,
          readmePath
        ).replace(/\\/g, '/').replace('.md', '');
        
        items.push({
          type: 'doc',
          label: entry.name,
          id: relativeReadmePath
        });
      }
    }
  }
  
  return items;
}

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
      label: 'SDK Reference',
      link: {
        type: 'generated-index',
        title: 'SDK Reference',
        description: 'All other exported classes, types, interfaces and references.'
      },
      items: [

        {
          type: 'category',
          label: 'Building Blocks',
          link: {
            type: 'doc',
            id: 'sdk/overview/README',
          },
          items: [
            {
              type: 'link',
              label: 'Apollo',
              href: '/docs/sdk-ts/sdk/overview#apollo'
            },
            {
              type: 'link',
              label: 'Castor',
              href: '/docs/sdk-ts/sdk/overview#castor'
            },
            {
              type: 'link',
              label: 'Agent',
              href: '/docs/sdk-ts/sdk/overview#Agent'
            },
            {
              type: 'doc',
              label: 'Pluto',
              id: 'pluto/README'
            },
            {
              type: 'link',
              label: 'Mercury',
              href: '/docs/sdk-ts/sdk/overview#Mercury'
            },
            {
              type: 'category',
              label: 'Domain',
              link: {
                type: 'doc',
                id: 'sdk/overview/namespaces/Domain/README'
              },
              items: buildDomainMenu(path.resolve(__dirname, "./sdk/overview/namespaces/Domain/namespaces"))
            },
           
          ]
        },
        {
          type: 'category',
          label: 'Plugins',
          items: buildReferenceMenu(path.resolve(__dirname, "./sdk"), ['overview'])

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
