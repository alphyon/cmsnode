/**
 * Gets the current environment based on NODE_ENV var.
 *
 * @return {object} Environment
 */
export default function getEnv() {
  return {
    name: process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
  };
}
