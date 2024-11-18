---
layout: note
title: "Bash"
date: 2024-1-2
categories: shell, bash
---

- TOC
{:toc}

## Batch Rename

To rename avatar-01.png to placeholder__avatar-01.png

```bash
for file in avatar-*.png ; do mv "$file" "placeholder__${file}" ; done
```

## Color Console Logs

```shell
console.log(`\x1b[38;2;0;200;0m${value}\x1b[0;m`)
```

`\x1b[` and `\x1b[` are the delimeters

`38;` or `48;` for text vs block colors

`2;0;200` are rgb values

`0m` ends the first part

`0;m` at the end resets the console

## Create File

```shell
touch [filename with path]
```

To create multiple files at once:

```shell
touch file-{1,2}.ext
```

## Make Directory

```shell
mkdir [directory name]
```

Use the -p flage for nested directory creation:

```shell
mkdir -p directory/subdirectory
```

## Change Permissions

Command: chmod +x {file}

### chmod:

What it does: Changes file permissions.
Full Form: Change Mode.
Usage: Modifies who can read, write, or execute a file.

### +x:

What it does: Adds the "execute" permission to the file for the user.
Symbol Breakdown:
+: Adds a permission.
x: Represents the execute permission, which allows the file to be run as a program or script.

### {file}:

What it is: The name of the file to which you’re applying the permission change.
File extension (.sh): Indicates this is a shell script file.
What Happens?
Running chmod +x {file}.sh:

Adds the execute permission to the file  {file}.sh, making it runnable as a script.
Result of Permissions:
Before: The file might have permissions like -rw-r--r-- (read/write but not executable).
After: The file changes to -rwxr-xr-x (read/write/execute for you, and read/execute for others).
Testing Permissions:
To check a file's permissions, use:

bash
Copy code
ls -l  {file}.sh
Example output after running chmod +x:

plaintext
Copy code
-rwxr-xr-x 1 username group 1234 Nov 17 12:34  {file}.sh

## Make a shell script

Steps to Create the Script
Create the Script File:

Open a terminal and create a new file (e.g., update_yaml.sh):

```bash
nano update_yaml.sh
```
Add the Script Content: Paste the corrected script into the file:
```bash
#!/bin/bash
```
### A script to update the YAML front matter in markdown files

```bash
for file in *.md; do
  date=$(date +"%Y-%m-%d")  # Capture the current date
  filename="${file%.md}"    # Remove .md extension from the file name
  awk -v date="$date" -v layout="../../layouts/PostLayout.astro" -v title="$filename" '
    BEGIN { inside_block = 0 }
    /^---$/ {
      if (inside_block == 0) {
        inside_block = 1
        print "---"
        print "layout: " layout
        print "publishedDate: " date
        print "title: " title
        print "author: Elliot Reed"
      } else {
        inside_block = 0
        print "---"
      }
      next
    }
    !inside_block { print }
  ' "$file" > temp && mv temp "$file"
done
```

Make the Script Executable: After saving the file, make it executable:

```bash
chmod +x update_yaml.sh
```

Move the Script to a Directory in Your PATH (Optional):

To make the script globally accessible, move it to a directory like /usr/local/bin:

```bash
sudo mv update_yaml.sh /usr/local/bin/update_yaml
```

You can now trigger the script with the command update_yaml from any directory.
How to Run the Script
Navigate to the Directory with .md Files:

```bash
cd /path/to/markdown/files
```
Execute the Script:

If the script is in the current directory:
```bash
./update_yaml.sh
```
If the script was moved to a directory in your PATH:

```bash
update_yaml
```

Optional Enhancements
Accept Directory or File Patterns: Modify the script to take an optional directory or file pattern:

```bash
# Default to current directory if no argument is given
target_dir=${1:-.}
for file in "$target_dir"/*.md; do
  ...
done
```

Run it like this:

```bash
update_yaml /path/to/files
```

Backup Files Before Modifying: Add a backup step to ensure original files are not lost:

```bash
cp "$file" "$file.bak"
```
 ## Append Text

 ```bash
 echo "some text" >> .gitignore