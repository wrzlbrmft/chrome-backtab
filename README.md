# Backtab

<img src="https://raw.githubusercontent.com/wrzlbrmft/chrome-backtab/master/src/icons/icon128.png" align="right" />

*Backtab* either jumps back to the page that opened the current tab or re-opens
it, if you have already closed it. This works no matter how long ago you closed
it (Chrome itself only remembers the last 10 closed tabs incoherently).

If you do a lot of online research, reading through documentation, browsing
discussion groups or just Wikipedia, you most likely end up with a lot of open
tabs. At some point you end up in a tab asking yourself:

***Where is the page from which I opened this tab?***

Simply click the *Backtab* icon!

## How to Contribute

Feel free to join and help me improve this extension. Here are a few ideas:

* Translate it into other languages.
* Port it to other browsers like
[Mozilla Firefox](https://www.mozilla.org/firefox) or
[Internet Explorer](http://windows.microsoft.com/internet-explorer/).

### Getting the Source Code

You can download the latest source code as a [ZIP
file](https://github.com/wrzlbrmft/chrome-backtab/archive/master.zip) or use
Git:

```
git clone https://github.com/wrzlbrmft/chrome-backtab.git
```

### Testing in Google Chrome

If you want to test your contributions in Chrome, you can load the extension
directly from its source directory. First, download the source code as described
above. Then open Chrome and follow these steps:

1. Visit `chrome://extensions`.
2. Make sure that the *Developer mode* is active (checkbox in the upper-right
corner).
3. Click on *Load unpacked extension...*.
4. Navigate into the `src` directory of the source code and select it.

Whenever you updated a file of the extension you have to reload it in Chrome.
To do so, simply visit `chrome://extensions` again and hit *Ctrl+R*.

## Build Instructions

Actually, there is not much to build unless you want to write your own extension
based on this one. For that, I added a buildfile for
[Apache Ant](http://ant.apache.org/), see `build.xml`. It helps you create the
ZIP file which you have to upload to the
[Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).

To build the ZIP file, navigate into the top directory of the extension and run

```
ant zip
```

or simply

```
ant
```

**NOTE:** Make sure you already have a private key, if not see *Private Key*.

The ZIP file is then located in the `build` directory.

To clean up after a build, run

```
ant clean
```

This will not delete the private key file of course.

### Private Key

In order to build a ZIP file using Ant, you have to have a private key for the
extension. To create one follow
[these instructions](https://developer.chrome.com/extensions/packaging#creating).

Rename the private key file to `key.pem` and make sure it is in the top
directory of the extension. You do not need the `.crx` file, so it can be
deleted.

### Versioning

The version number of the extension is maintained in the Ant buildfile
`build.xml` and only copied to `manifest.json` of the ZIP file during the build
process.

To change the version number, open `build.xml` and edit this
line:

```xml
<property name="version" value="0.1.0" />
```

## License

This software is distributed under the terms of the
[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

The icon is taken from the
*[realistiK Reloaded](http://kde-look.org/content/show.php/realistiK+Reloaded?content=52362)*
icons pack by
[Pavel InFeRnODeMoN](http://kde-look.org/usermanager/search.php?username=InFeRnODeMoN).
