# playwright
Set Up Your Playwright Project with TypeScript:

Ensure you have Node.js installed.
Initialize your project and install Playwright with TypeScript support:
npm init -y
npm install playwright
npm install --save-dev typescript ts-node

To integrate Playwright with BrowserStack, install the BrowserStack Node.js SDK:
npm install --save-dev browserstack-node-sdk
Create browserstack.yml Configuration File

Execute Your Tests:

Run your tests using the script defined:
npm run test:browserstack

CI with Jenkins:
Create Jenkins Job with Dockerfile
Confiure System > Global Variables:
PATH = /usr/local/bin/docker-compose:/bin:/usr/bin:/usr/local/bin
Jenkins Script Console, run : System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")

trigger job
Jenkins plugins:
- HTML Publisher
- Git
- Docker Pipeline
