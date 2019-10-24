# 参考

[Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
[contributes.configuration](https://code.visualstudio.com/api/references/contribution-points#contributes.configuration)
[contributes.keybindings](https://code.visualstudio.com/api/references/contribution-points#contributes.keybindings)
[contributes.menus](https://code.visualstudio.com/api/references/contribution-points#contributes.menus)

# 手順

## extensionジェネレータをインストール

```
$ npm install -g yo generator-code
```

## バッシュ再起動

```
$ exec $SHELL -l
```

## プロジェクトを作成

```
$ yo code
? ==========================================================================
We're constantly looking for ways to make yo better! 
May we anonymously report usage statistics to improve the tool over time? 
More info: https://github.com/yeoman/insight & http://yeoman.io
========================================================================== Yes

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? ClipLines
? What's the identifier of your extension? cliplines
? What's the description of your extension? Clipping file lines and line numbers
? Initialize a git repository? Yes
? Which package manager to use? npm
   create cliplines/.vscode/extensions.json
   create cliplines/.vscode/launch.json
   create cliplines/.vscode/settings.json
   create cliplines/.vscode/tasks.json
   create cliplines/src/test/runTest.ts
   create cliplines/src/test/suite/extension.test.ts
   create cliplines/src/test/suite/index.ts
   create cliplines/.vscodeignore
   create cliplines/.gitignore
   create cliplines/README.md
   create cliplines/CHANGELOG.md
   create cliplines/vsc-extension-quickstart.md
   create cliplines/tsconfig.json
   create cliplines/src/extension.ts
   create cliplines/package.json
   create cliplines/tslint.json


I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.


npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN cliplines@0.0.1 No repository field.
npm WARN cliplines@0.0.1 No license field.

added 121 packages from 572 contributors and audited 282 packages in 6.392s
found 0 vulnerabilities


Your extension cliplines has been created!

To start editing with Visual Studio Code, use the following commands:

     cd cliplines
     code .

Open vsc-extension-quickstart.md inside the new extension for further instructions
on how to modify, test and publish your extension.

For more information, also visit http://code.visualstudio.com and follow us @code.
```


