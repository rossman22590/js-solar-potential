import adapter from '@sveltejs/adapter-node'; // Import the correct adapter
import preprocess from 'svelte-preprocess'; // Import svelte-preprocess
import * as child_process from 'node:child_process'; // Import child_process for versioning

// Define the configuration object
const config = {
  // Define preprocessors
  preprocess: preprocess(),

  // Configure kit options
  kit: {
    // Configure the adapter, use the correct adapter for your target environment
    adapter: adapter({
      out: 'build' // Sets the output directory to 'build'
    }),

    // Add versioning based on the latest git commit
    version: {
      name: child_process.execSync('git rev-parse HEAD').toString().trim(),
    }
  },
};

// Export the configuration object as default
export default config;
