# Getting Started with Node.js and Running JavaScript

Node.js is a JavaScript runtime that allows you to execute JavaScript code on your local machine. This README will guide you through the process of installing Node.js and running JavaScript programs.

## Table of Contents

1. [Installation](#1-installation)
   - [Windows](#windows)
   - [macOS](#macos)
   - [Linux](#linux)
2. [Running JavaScript Code](#2-running-javascript-code)

## 1. Installation

To get started, you'll need to install Node.js on your computer. Follow the installation instructions for your operating system below:

### Windows

1. Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/).

2. Download the "LTS" (Long-Term Support) version for Windows. This is recommended for most users.

3. Run the installer and follow the installation wizard.

4. Once the installation is complete, open the Command Prompt or PowerShell and type the following command to verify that Node.js is installed:

   ```bash
   node -v
   ```

   This should print the Node.js version, confirming a successful installation.

### macOS

1. Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/).

2. Download the "LTS" (Long-Term Support) version for macOS.

3. Run the installer package and follow the installation instructions.

4. To verify the installation, open the Terminal and enter the following command:

   ```bash
   node -v
   ```

   This should display the Node.js version, confirming that it's installed.

### Linux

On most Linux distributions, you can install Node.js using a package manager. The following are instructions for some popular package managers:

- **Debian/Ubuntu**:

  ```bash
  sudo apt update
  sudo apt install nodejs
  ```

- **Red Hat/CentOS**:

  ```bash
  sudo yum install epel-release
  sudo yum install nodejs
  ```

- **Fedora**:

  ```bash
  sudo dnf install nodejs
  ```

After installation, verify it by running:

```bash
node -v
```

## 2. Running JavaScript Code

Once Node.js is installed, you can run JavaScript code from the command line or create JavaScript files and execute them. Here's how to do it:

### Running JavaScript in the Command Line

To run JavaScript code directly in the command line, open your terminal or command prompt and type `node`, followed by your JavaScript code. For example:

```bash
node
```

You will enter a Node.js REPL (Read-Eval-Print Loop) where you can interactively enter and execute JavaScript code. Type your code and press `Enter` to see the results. To exit the REPL, press `Ctrl+C` twice.

### Running JavaScript Files

1. Create a JavaScript file with a `.js` extension. For example, create a file named `hello.js`.

2. Open the file with a text editor and write your JavaScript code. For instance, in `hello.js`:

   ```javascript
   console.log('Hello, Node.js!');
   ```

3. In the command line, navigate to the directory where your JavaScript file is located.

4. Run the JavaScript file using the `node` command:

   ```bash
   node hello.js
   ```

   You will see the output of your code in the terminal.

That's it! You've successfully installed Node.js and executed JavaScript code. You can now start writing and running your own JavaScript programs on your computer.