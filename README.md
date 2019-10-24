# cliplines extention

Clipping file lines and line numbers

# How to use

1. Select File Lines.
2. Run Command `Clip lines`

# clip sample

```
js:lib/clip-lines.js(49-53)

\```
50|    lineEnding = atom.config.get('clip-lines.lineEndingCode');
51|    lineNumberSepalater = atom.config.get('clip-lines.lineNumberSepalater');
52|    enableMarkDownFormat = atom.config.get('clip-lines.enableMarkDownFormat');
53|    onlyIncludeProjectPath = atom.config.get('clip-lines.onlyIncludeProjectPath');
54|    includeFilepathInMarkDownSyntaxHighlight = atom.config.get('clip-lines.includeFilepathInMarkDownSyntaxHighlight');
\```
```

# Keymap

- Mac: ctrl + opt + c
- Win: ctrl + alt + c

# Config

- lineNumberSeparater

  default: |

- onlyIncludeRelativePath

  default: true

- enableMarkDownFormat

  default: true

- includeFilepathInMarkDownSyntaxHighlight

  default: false
  ### sample

  ```
  \```js:lib/clip-lines.js(49-53)
  50|    lineEnding = atom.config.get('clip-lines.lineEndingCode');
  51|    lineNumberSepalater = atom.config.get('clip-lines.lineNumberSepalater');
  52|    enableMarkDownFormat = atom.config.get('clip-lines.enableMarkDownFormat');
  53|    onlyIncludeProjectPath = atom.config.get('clip-lines.onlyIncludeProjectPath');
  54|    includeFilepathInMarkDownSyntaxHighlight = atom.config.get('clip-lines.includeFilepathInMarkDownSyntaxHighlight');
  \```
  ```
