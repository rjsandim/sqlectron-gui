[![Slack Status](https://sqlectron.herokuapp.com/badge.svg)](https://sqlectron.herokuapp.com)
[![Build Status](https://travis-ci.org/sqlectron/sqlectron-gui.svg?branch=master)](https://travis-ci.org/sqlectron/sqlectron-gui)
[![Build status](https://ci.appveyor.com/api/projects/status/ajxvrvwqyrc8yr23/branch/master?svg=true)](https://ci.appveyor.com/project/maxcnunes/sqlectron-gui/branch/master)

<p align="center">
  <img src="https://sqlectron.github.io/logos/logo-512.png">
  <br />
  A simple and lightweight SQL client with cross database and platform support.
</p>

#### Demo (version 1.0.0)
![demo](https://sqlectron.github.io/demos/sqlectron-demo-gui-v1.0.0-small.gif)

* [Databases](https://github.com/sqlectron/sqlectron-core#current-supported-databases) - List of current supported databases.
* [Download](https://github.com/sqlectron/sqlectron-gui/releases) - Installers, binaries and source.
* [Configuration](https://github.com/sqlectron/sqlectron-core#configuration) - List of saved servers and custom configurations.
* [Keyboard Shortcuts](https://github.com/sqlectron/sqlectron-gui/wiki/Keyboard-Shortcuts) - List of shortcuts.
* [Wiki](https://github.com/sqlectron/sqlectron-gui/wiki) - Other docs.
* [Terminal](https://github.com/sqlectron/sqlectron-term) - A terminal-based interface of SQLECTRON.

## Development

* Requires node 4 or higher.

Running the application:

```shell
# first shell window
npm run dev:webpack

# second shell window
npm run dev:electron
```

### Set up databases

You can test it using your own database or use a [docker-compose](https://github.com/sqlectron/sqlectron-databases) built for us to bring up several different databases.

### Testing changes of sqlectron-core

This is an easy way to test sqlectron-core changes from the GUI. But please do not forget including some unit tests on sqlectron-core before applying a pull request.

Link the dependency to the original project:

```bash
# from sqlectron-gui folder
./scripts/link-sqlectron-core.sh
```

Auto compile the sqlectron-core every time a change is done:

```bash
# from sqlectron-core folder
npm run watch
```

Then follow the steps to run the GUI application.

## Build

1. `npm install`
1. `npm run dist`
1. The installer will be placed at `dist` folder.

### Building windows apps from non-windows platforms

You will need follow [it](https://github.com/maxogden/electron-packager#building-windows-apps-from-non-windows-platforms) or build through the docker:

```shell
docker-compose run dist
```
