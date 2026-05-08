#!/bin/bash

# Get files modified in current branch compared to main
files=$(git diff main...HEAD --name-only --diff-filter=AM)

if [ -z "$files" ]; then
    echo "No modified or added files compared to main."
    exit 0
fi

# Filter only files prettier can handle
prettier_files=$(echo "$files" | grep -E '\.(js|jsx|ts|tsx|md|mdx|json|css|scss|html|yaml|yml)$')

if [ -z "$prettier_files" ]; then
    echo "No files matching prettier extensions."
    exit 0
fi

echo "Running prettier --check on:"
echo "$prettier_files" | sed 's/^/  /'
echo

bunx prettier --write $prettier_files
